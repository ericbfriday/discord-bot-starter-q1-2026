export interface AIProxyRequest {
  type: "image" | "chat";
  userId: string;
  prompt: string;
  model?: string;
  systemPrompt?: string;
  messages?: { role: "user" | "assistant" | "system"; content: string }[];
  imageConfig?: {
    aspectRatio?: string;
    imageSize?: "1K" | "2K" | "4K";
  };
}

export interface AIProxyResponse {
  success: boolean;
  text?: string;
  images?: string[];
  cached?: boolean;
  error?: string;
  errorCode?:
    | "RATE_LIMITED"
    | "CONTENT_FILTERED"
    | "MODEL_ERROR"
    | "INVALID_REQUEST"
    | "INTERNAL_ERROR";
}

const AI_PROXY_URL = process.env.AI_PROXY_URL;
const AI_PROXY_SECRET = process.env.AI_PROXY_SECRET;

export async function callAIProxy(
  request: AIProxyRequest,
): Promise<AIProxyResponse> {
  if (!AI_PROXY_URL || !AI_PROXY_SECRET) {
    return {
      success: false,
      error: "AI proxy is not configured. Contact the bot administrator.",
      errorCode: "INTERNAL_ERROR",
    };
  }

  try {
    const response = await fetch(AI_PROXY_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AI_PROXY_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(60_000), // 60 second timeout
    });

    if (!response.ok) {
      // The Worker returns 401/405 for auth/method errors
      if (response.status === 401) {
        return {
          success: false,
          error: "AI proxy authentication failed.",
          errorCode: "INTERNAL_ERROR",
        };
      }
      return {
        success: false,
        error: "AI proxy returned an error.",
        errorCode: "INTERNAL_ERROR",
      };
    }

    return (await response.json()) as AIProxyResponse;
  } catch (err) {
    if (err instanceof DOMException && err.name === "TimeoutError") {
      return {
        success: false,
        error: "The AI request timed out. Please try again.",
        errorCode: "INTERNAL_ERROR",
      };
    }
    return {
      success: false,
      error: "Failed to connect to the AI proxy.",
      errorCode: "INTERNAL_ERROR",
    };
  }
}
