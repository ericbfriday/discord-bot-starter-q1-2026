[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#introduction "Direct link to Introduction")

There is often a need to get a unique ID for entities, be that for Discord messages/channels/servers, keys in a database
or many other similar examples. There are many ways to get such a unique ID, and one of those is using a so-called
"snowflake". You can read more about snowflake IDs in
[this Medium article](https://medium.com/better-programming/uuid-generation-snowflake-identifiers-unique-2aed8b1771bc).

## Installation [​](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/snowflake
```

```bash
yarn add @sapphire/snowflake
```

```bash
pnpm add @sapphire/snowflake
```

## Usage [​](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#usage "Direct link to Usage")

Constructing a Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Snowflake class
const { Snowflake } = require("@sapphire/snowflake");

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Generate a snowflake with the given epoch
const uniqueId = snowflake.generate();
```

```typescript
// Import the Snowflake class
import { Snowflake } from "@sapphire/snowflake";

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Generate a snowflake with the given epoch
const uniqueId = snowflake.generate();
```

```typescript
// Import the Snowflake class
import { Snowflake } from "@sapphire/snowflake";

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Generate a snowflake with the given epoch
const uniqueId = snowflake.generate();
```

Constructing a Discord Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Snowflake class
const { DiscordSnowflake } = require("@sapphire/snowflake");

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.generate();
```

```typescript
// Import the Snowflake class
import { DiscordSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.generate();
```

```typescript
// Import the Snowflake class
import { DiscordSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.generate();
```

Constructing a Twitter Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Snowflake class
const { TwitterSnowflake } = require("@sapphire/snowflake");

// Generate a snowflake with Twitter's epoch
const uniqueId = TwitterSnowflake.generate();
```

```typescript
// Import the Snowflake class
import { TwitterSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Twitter's epoch
const uniqueId = TwitterSnowflake.generate();
```

```typescript
// Import the Snowflake class
import { TwitterSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Twitter's epoch
const uniqueId = TwitterSnowflake.generate();
```

Deconstructing Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Snowflake class
const { Snowflake } = require("@sapphire/snowflake");

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Deconstruct a snowflake with the given epoch
const uniqueId = snowflake.deconstruct("3971046231244935168");
```

```typescript
// Import the Snowflake class
import { Snowflake } from "@sapphire/snowflake";

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Deconstruct a snowflake with the given epoch
const uniqueId = snowflake.deconstruct("3971046231244935168");
```

```typescript
// Import the Snowflake class
import { Snowflake } from "@sapphire/snowflake";

// Define a custom epoch
const epoch = new Date("2000-01-01T00:00:00.000Z");

// Create an instance of Snowflake
const snowflake = new Snowflake(epoch);

// Deconstruct a snowflake with the given epoch
const uniqueId = snowflake.deconstruct("3971046231244935168");
```

Deconstructing Discord Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
const { DiscordSnowflake } = require("@sapphire/snowflake");

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.deconstruct("3971046231244935168");
```

```typescript
import { DiscordSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.deconstruct("3971046231244935168");
```

```typescript
import { DiscordSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = DiscordSnowflake.deconstruct("3971046231244935168");
```

Deconstructing Twitter Snowflake

- CommonJS
- ESM
- TypeScript

```typescript
const { TwitterSnowflake } = require("@sapphire/snowflake");

// Generate a snowflake with Discord's epoch
const uniqueId = TwitterSnowflake.deconstruct("3971046231244935168");
```

```typescript
import { TwitterSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = TwitterSnowflake.deconstruct("3971046231244935168");
```

```typescript
import { TwitterSnowflake } from "@sapphire/snowflake";

// Generate a snowflake with Discord's epoch
const uniqueId = TwitterSnowflake.deconstruct("3971046231244935168");
```

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/utilities/snowflake/#usage)
