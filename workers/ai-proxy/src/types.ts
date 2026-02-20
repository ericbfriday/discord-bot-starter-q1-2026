export interface Env {
  // Cloudflare bindings
  AI: Ai;
  IMAGE_RATE_LIMITER: RateLimit;
  CHAT_RATE_LIMITER: RateLimit;

  // Secrets (set via `wrangler secret put`)
  OPENROUTER_API_KEY: string;
  WORKER_AUTH_SECRET: string; // Shared secret between bot and worker
  CF_ACCOUNT_ID: string;

  // Vars (set in wrangler.jsonc)
  CF_GATEWAY_ID: string;
  DEFAULT_IMAGE_MODEL: string;
  DEFAULT_CHAT_MODEL: string;
}

export interface AIProxyRequest {
  type: "image" | "chat";
  userId: string; // Discord user ID (for rate limiting)
  prompt: string;
  model?: string; // Override default model
  systemPrompt?: string; // For persona/chat requests
  messages?: ChatMessage[]; // For multi-turn conversations
  imageConfig?: {
    aspectRatio?: string;
    imageSize?: "1K" | "2K" | "4K";
  };
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIProxyResponse {
  success: boolean;
  text?: string;
  images?: string[]; // Base64 data URLs
  cached?: boolean;
  error?: string;
  errorCode?:
    | "RATE_LIMITED"
    | "CONTENT_FILTERED"
    | "MODEL_ERROR"
    | "INVALID_REQUEST"
    | "INTERNAL_ERROR";
}
