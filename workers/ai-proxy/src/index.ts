import type { AIProxyRequest, AIProxyResponse, Env } from "./types";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Only accept POST
    if (request.method !== "POST") {
      return jsonResponse(
        {
          success: false,
          error: "Method not allowed",
          errorCode: "INVALID_REQUEST",
        },
        405,
      );
    }

    // Authenticate: shared secret in Authorization header
    const authHeader = request.headers.get("Authorization");
    if (authHeader !== `Bearer ${env.WORKER_AUTH_SECRET}`) {
      return jsonResponse(
        { success: false, error: "Unauthorized", errorCode: "INVALID_REQUEST" },
        401,
      );
    }

    let body: AIProxyRequest;
    try {
      body = (await request.json()) as AIProxyRequest;
    } catch {
      return jsonResponse(
        { success: false, error: "Invalid JSON", errorCode: "INVALID_REQUEST" },
        400,
      );
    }

    // Validate required fields
    if (!body.type || !body.userId || !body.prompt) {
      return jsonResponse(
        {
          success: false,
          error: "Missing required fields: type, userId, prompt",
          errorCode: "INVALID_REQUEST",
        },
        400,
      );
    }

    // Per-user rate limiting
    const rateLimiter =
      body.type === "image" ? env.IMAGE_RATE_LIMITER : env.CHAT_RATE_LIMITER;
    const { success: withinLimit } = await rateLimiter.limit({
      key: `${body.type}:${body.userId}`,
    });
    if (!withinLimit) {
      return jsonResponse(
        {
          success: false,
          error:
            body.type === "image"
              ? "You can generate up to 5 images per minute. Please wait."
              : "You can send up to 15 chat messages per minute. Please wait.",
          errorCode: "RATE_LIMITED",
        },
        429,
      );
    }

    // Build the OpenRouter request
    const model =
      body.model ??
      (body.type === "image"
        ? env.DEFAULT_IMAGE_MODEL
        : env.DEFAULT_CHAT_MODEL);

    const messages: Array<{ role: string; content: string }> = [];

    if (body.systemPrompt) {
      messages.push({ role: "system", content: body.systemPrompt });
    }

    if (body.messages && body.messages.length > 0) {
      messages.push(...body.messages);
    }

    // Always add the user's prompt as the final message
    messages.push({ role: "user", content: body.prompt });

    const openRouterBody: Record<string, unknown> = {
      model,
      messages,
    };

    if (body.type === "image") {
      openRouterBody.modalities = ["image", "text"];
      if (body.imageConfig) {
        const imageConfig: Record<string, string> = {};
        if (body.imageConfig.aspectRatio) {
          imageConfig.aspect_ratio = body.imageConfig.aspectRatio;
        }
        if (body.imageConfig.imageSize) {
          imageConfig.image_size = body.imageConfig.imageSize;
        }
        if (Object.keys(imageConfig).length > 0) {
          openRouterBody.image_config = imageConfig;
        }
      }
    }

    // Send to OpenRouter via AI Gateway
    const gatewayUrl = `https://gateway.ai.cloudflare.com/v1/${env.CF_ACCOUNT_ID}/${env.CF_GATEWAY_ID}/openrouter/chat/completions`;

    try {
      const aiResponse = await fetch(gatewayUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "cf-aig-authorization": `Bearer ${env.CF_AIG_TOKEN}`,
          "Content-Type": "application/json",
          "cf-aig-cache-ttl": body.type === "image" ? "0" : "300",
          "HTTP-Referer": "https://github.com/discord-bot-starter",
          "X-Title": "Discord Bot AI Proxy",
        },
        body: JSON.stringify(openRouterBody),
      });

      // Handle HTTP-level errors from OpenRouter
      if (!aiResponse.ok) {
        const errorBody = (await aiResponse.json().catch(() => ({}))) as Record<
          string,
          unknown
        >;
        const errorObj = errorBody.error as Record<string, unknown> | undefined;

        if (aiResponse.status === 403) {
          return jsonResponse(
            {
              success: false,
              error:
                "Your prompt was flagged by content safety filters. Please try a different prompt.",
              errorCode: "CONTENT_FILTERED",
            },
            200,
          ); // 200 to the bot so it can show a friendly message
        }

        if (aiResponse.status === 429) {
          return jsonResponse(
            {
              success: false,
              error:
                "The AI service is temporarily overloaded. Please try again in a few seconds.",
              errorCode: "RATE_LIMITED",
            },
            200,
          );
        }

        return jsonResponse(
          {
            success: false,
            error: `AI service error: ${(errorObj?.message as string) || aiResponse.statusText}`,
            errorCode: "MODEL_ERROR",
          },
          200,
        );
      }

      const data = (await aiResponse.json()) as Record<string, unknown>;
      const choices = data.choices as
        | Array<Record<string, unknown>>
        | undefined;
      const choice = choices?.[0];
      const message = choice?.message as Record<string, unknown> | undefined;

      // Check finish_reason for content filtering at the response level
      if (choice?.finish_reason === "content_filter") {
        return jsonResponse(
          {
            success: false,
            error:
              "The generated content was blocked by safety filters. Try rephrasing your prompt.",
            errorCode: "CONTENT_FILTERED",
          },
          200,
        );
      }

      const text = (message?.content as string) || "";
      const images =
        (message?.images as Array<{ image_url: { url: string } }>) || [];
      const imageUrls = images.map((img) => img.image_url.url);
      const cached = aiResponse.headers.get("cf-aig-cache-status") === "HIT";

      return jsonResponse(
        {
          success: true,
          text,
          images: imageUrls,
          cached,
        },
        200,
      );
    } catch (err) {
      return jsonResponse(
        {
          success: false,
          error: "Failed to reach AI service. Please try again.",
          errorCode: "INTERNAL_ERROR",
        },
        200,
      );
    }
  },
};

function jsonResponse(body: AIProxyResponse, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
