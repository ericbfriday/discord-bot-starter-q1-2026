[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#introduction "Direct link to Introduction")

There is often a need to apply ratelimits to protect a network from excessive traffic levels on connections routed
through it, or limit bot command usages in your Discord bot, or similar things. This package offers two different
techniques in the same implementation: the [Token Bucket](https://en.wikipedia.org/wiki/Token_bucket), and the
[Leaky Bucket](https://en.wikipedia.org/wiki/Leaky_bucket).

## Installation [​](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/ratelimits
```

```bash
yarn add @sapphire/ratelimits
```

```bash
pnpm add @sapphire/ratelimits
```

## Usage [​](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#usage "Direct link to Usage")

Token Bucket

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Bucket class
const { RateLimitManager } = require("@sapphire/ratelimits");

// Define a bucket with 1 usage every 5 seconds
const rateLimitManager = new RateLimitManager(5000);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming once, the second run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

```typescript
// Import the Bucket class
import { RateLimitManager } from "@sapphire/ratelimits";

// Define a bucket with 1 usage every 5 seconds
const rateLimitManager = new RateLimitManager(5000);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming once, the second run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

```typescript
// Import the Bucket class
import { RateLimitManager } from "@sapphire/ratelimits";

// Define a bucket with 1 usage every 5 seconds
const rateLimitManager = new RateLimitManager(5000);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming once, the second run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

Leaky Bucket

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Bucket class
const { RateLimitManager } = require("@sapphire/ratelimits");

// Define a bucket with 2 usages every 5 seconds
const rateLimitManager = new RateLimitManager(5000, 2);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming twice, the third run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

```typescript
// Import the Bucket class
import { RateLimitManager } from "@sapphire/ratelimits";

// Define a bucket with 2 usages every 5 seconds
const rateLimitManager = new RateLimitManager(5000, 2);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming twice, the third run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

```typescript
// Import the Bucket class
import { RateLimitManager } from "@sapphire/ratelimits";

// Define a bucket with 2 usages every 5 seconds
const rateLimitManager = new RateLimitManager(5000, 2);

// Acquire the rate limit. The ID can be something like `'global'`, a Discord channel/server/user ID, or anything else.
const ratelimit = rateLimitManager.acquire("some-unique-id-here");

// Check if there is a rate limit right now
if (ratelimit.limited) {
  // Do something when limited, such as throwing an error
}

// We're not rate limited so we drip the bucket. After consuming twice, the third run through we'll be rate limited.
ratelimit.consume();

// And now we can finish the flow by returning some form of "success" state.
```

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/utilities/ratelimits/#usage)
