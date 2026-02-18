[Skip to main content](https://sapphirejs.dev/docs/General/Welcome/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

[![Discord server](https://img.shields.io/discord/737141877803057244?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/sapphiredev)[![NPM version](https://img.shields.io/npm/v/@sapphire/framework?color=crimson&label=NPM%20Version&logo=npm)](https://www.npmjs.com/package/@sapphire/framework)[![NPM downloads](https://img.shields.io/npm/dt/@sapphire/framework.svg?label=NPM%20Downloads&logo=npm)](https://www.npmjs.com/package/@sapphire/framework)[![Patreon](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://sapphirejs.dev/patreon)](https://sapphirejs.dev/patreon)[![PayPal](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://sapphirejs.dev/paypal)](https://sapphirejs.dev/paypal)

## About [​](https://sapphirejs.dev/docs/General/Welcome/#about "Direct link to About")

Sapphire is a next-gen object-oriented [Discord.js](https://discord.js.org/) bot framework.

Sapphire is a community driven framework that aims to give you all the features you need to make your Discord bot.

With a history of many other Discord bot frameworks (both for NodeJS and other languages) to inspire Sapphire, it has
become the ultimate modern experience of writing your code.

### Key Features [​](https://sapphirejs.dev/docs/General/Welcome/#key-features "Direct link to Key Features")

- Advanced plugin support
- Supports both CommonJS and ESM
- Completely modular and extendable
- Designed with first class TypeScript support in mind
- Includes optional utilities that you can use in any project

## Installation [​](https://sapphirejs.dev/docs/General/Welcome/#installation "Direct link to Installation")

**Node.js 18.x or newer is required.**

- npm
- yarn
- pnpm

```bash
npm install @sapphire/framework discord.js@14.x
```

```bash
yarn add @sapphire/framework discord.js@14.x
```

```bash
pnpm add @sapphire/framework discord.js@14.x
```

### Optional packages [​](https://sapphirejs.dev/docs/General/Welcome/#optional-packages "Direct link to Optional packages")

#### Official Plugins [​](https://sapphirejs.dev/docs/General/Welcome/#official-plugins "Direct link to Official Plugins")

- [**@sapphire/plugin-api**](https://www.npmjs.com/package/@sapphire/plugin-api) Expose a REST API within the same process as your bot.
- [**@sapphire/plugin-editable-commands**](https://www.npmjs.com/package/@sapphire/plugin-editable-commands) Make it possible to edit your command messages and trigger new commands.
- [**@sapphire/plugin-hmr**](https://www.npmjs.com/package/@sapphire/plugin-hmr) Add hot module reloading for pieces.
- [**@sapphire/plugin-i18next**](https://www.npmjs.com/package/@sapphire/plugin-i18next)
  Integrate [i18next](https://www.i18next.com/) into your bot for internationalization.

- [**@sapphire/plugin-logger**](https://www.npmjs.com/package/@sapphire/plugin-logger) Add beautiful stylized logging to your bot.
- [**@sapphire/plugin-pattern-commands**](https://www.npmjs.com/package/@sapphire/plugin-pattern-commands) Add support for pattern commands.
- [**@sapphire/plugin-scheduled-tasks**](https://www.npmjs.com/package/@sapphire/plugin-scheduled-tasks) Add support for Redis or Amazon SQS powered scheduled tasks.
- [**@sapphire/plugin-subcommands**](https://www.npmjs.com/package/@sapphire/plugin-subcommands) Add subcommands to your bot.
- [**@sapphire/plugin-utilities-store**](https://www.npmjs.com/package/@sapphire/plugin-utilities-store) Add a Utilities store for accessing utility functions through the container.

#### Official Utilities and configurations [​](https://sapphirejs.dev/docs/General/Welcome/#official-utilities-and-configurations "Direct link to Official Utilities and configurations")

- [**@sapphire/cli**](https://www.npmjs.com/package/@sapphire/cli) CLI to generate a new Sapphire bot or add components to your current one.
- [**@sapphire/shapeshift**](https://www.npmjs.com/package/@sapphire/shapeshift) Blazing fast input validation and transformation ⚡
- [**@sapphire/utilities**](https://www.npmjs.com/package/@sapphire/utilities) A plethora of awesome utility functions that are more useful than you can probably imagine.
- [**@sapphire/result**](https://www.npmjs.com/package/@sapphire/result) A TypeScript port of Nightly Rust's Result and Option structs.
- [**@sapphire/ts-config**](https://www.npmjs.com/package/@sapphire/ts-config)
  Our ts-config. We use it for all Sapphire projects, but it's also a great starting point for your TypeScript Discord bot.

- [**@sapphire/discord-utilities**](https://www.npmjs.com/package/@sapphire/discord-utilities) Useful utilities for any JavaScript/TypeScript based Discord bot.
- [**@sapphire/discord.js-utilities**](https://www.npmjs.com/package/@sapphire/discord.js-utilities) Useful utilities for a bot using Discord.JS such as paginated responses, type checks and prompts.
- [**@sapphire/lexure**](https://www.npmjs.com/package/@sapphire/lexure) Parser and utilities for non-technical user input.
- [**@sapphire/node-utilities**](https://www.npmjs.com/package/@sapphire/node-utilities) Node specific JavaScript utilities for the Sapphire Community.
- [**@sapphire/decorators**](https://www.npmjs.com/package/@sapphire/decorators) Awesome decorators that let you write cleaner code.
- [**@sapphire/fetch**](https://www.npmjs.com/package/@sapphire/fetch)
  A tiny wrapper around [cross-fetch](https://npmjs.com/package/cross-fetch) that adds extra ease-of-use and type safety.

- [**@sapphire/cron**](https://www.npmjs.com/package/@sapphire/cron) A cron utility library for JavaScript.
- [**@sapphire/duration**](https://www.npmjs.com/package/@sapphire/duration) A time duration utility library for JavaScript.
- [**@sapphire/timer-manager**](https://www.npmjs.com/package/@sapphire/timer-manager) A timer manager utility library for JavaScript.
- [**@sapphire/timestamp**](https://www.npmjs.com/package/@sapphire/timestamp) A timestamp utility library for JavaScript.
- [**@sapphire/time-utilities**](https://www.npmjs.com/package/@sapphire/time-utilities)
  Various methods and classes related to manipulating [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and time.

- [**@sapphire/eslint-config**](https://www.npmjs.com/package/@sapphire/eslint-config) Our opinionated ESLint config that we use for all Sapphire projects.
- [**@sapphire/eslint-plugin-result**](https://www.npmjs.com/package/@sapphire/eslint-plugin-result) A TypeScript ESLint plugin for @sapphire/result.
- [**@sapphire/prettier-config**](https://www.npmjs.com/package/@sapphire/prettier-config) Our opinionated Prettier config that we use for all Sapphire projects.
- [**@sapphire/event-iterator**](https://www.npmjs.com/package/@sapphire/event-iterator) Turn your event emitter events into async iterators.
- [**@sapphire/ratelimits**](https://www.npmjs.com/package/@sapphire/ratelimits) Handle ratelimits with efficient bucket strategies.
- [**@sapphire/snowflake**](https://www.npmjs.com/package/@sapphire/snowflake)
  Generate and parse various forms of [Snowflakes](https://betterprogramming.pub/uuid-generation-snowflake-identifiers-unique-2aed8b1771bc).

- [**@sapphire/stopwatch**](https://www.npmjs.com/package/@sapphire/stopwatch) Accurately measure passing time with this stopwatch utility.
- [**@sapphire/type**](https://www.npmjs.com/package/@sapphire/type) A type detection utility leveraging NodeJS internals.
- [**@sapphire/async-queue**](https://www.npmjs.com/package/@sapphire/async-queue) Sequential asynchronous lock-based queue for promises.
- [**@sapphire/bitfield**](https://www.npmjs.com/package/@sapphire/bitfield) A bitfield utility library for JavaScript.
- [**@sapphire/phisherman**](https://www.npmjs.com/package/@sapphire/phisherman) Wrapper around phisherman to easily check and report domains.

## Example usage [​](https://sapphirejs.dev/docs/General/Welcome/#example-usage "Direct link to Example usage")

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.login("your-token-goes-here");
```

## Links [​](https://sapphirejs.dev/docs/General/Welcome/#links "Direct link to Links")

- [Website source code](https://github.com/sapphiredev/website)
- [Documentation](https://sapphirejs.dev/docs/General/Welcome)
- [Guide](https://sapphirejs.dev/docs/Guide/getting-started/getting-started-with-sapphire)
- [Sapphire Discord Server](https://sapphirejs.dev/discord)
- [Discord.js Discord server](https://discord.gg/djs)
- [Discord Developers Discord server](https://discord.gg/discord-developers)
- [GitHub](https://github.com/sapphiredev/)

## Contributing [​](https://sapphirejs.dev/docs/General/Welcome/#contributing "Direct link to Contributing")

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://sapphirejs.dev/docs/General/Welcome).

See [the contribution guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) if you'd like to
submit a PR.

## Help [​](https://sapphirejs.dev/docs/General/Welcome/#help "Direct link to Help")

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge
in the right direction, please don't hesitate to join our official
[Sapphire Community Server](https://sapphirejs.dev/discord).

- [About](https://sapphirejs.dev/docs/General/Welcome/#about)
  - [Key Features](https://sapphirejs.dev/docs/General/Welcome/#key-features)
- [Installation](https://sapphirejs.dev/docs/General/Welcome/#installation)
  - [Optional packages](https://sapphirejs.dev/docs/General/Welcome/#optional-packages)
- [Example usage](https://sapphirejs.dev/docs/General/Welcome/#example-usage)
- [Links](https://sapphirejs.dev/docs/General/Welcome/#links)
- [Contributing](https://sapphirejs.dev/docs/General/Welcome/#contributing)
- [Help](https://sapphirejs.dev/docs/General/Welcome/#help)
