[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#introduction "Direct link to Introduction")

A Logger implementation that implements Sapphire's `ILogger` interface and implements timestamp and style formatting
with the blazing fast [`colorette`](https://www.npmjs.com/package/colorette) library.

## Installation [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/plugin-logger @sapphire/framework
```

```bash
yarn add @sapphire/plugin-logger @sapphire/framework
```

```bash
pnpm add @sapphire/plugin-logger @sapphire/framework
```

## Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#usage "Direct link to Usage")

This registers the necessary options and methods in the Sapphire client to be able to use the log plugin.

- CommonJS
- ESM
- TypeScript

```javascript
// Main bot file
// Be sure to register the plugin before instantiating the client.
require("@sapphire/plugin-logger/register");
```

```javascript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-logger/register";
```

```typescript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-logger/register";
```

In order to use the Logger in any place other than a piece (commands, arguments, preconditions, etc.), you must first
import the `container` property of `@sapphire/framework`. For pieces, you can simply use `this.container.logger` to
access Logger methods.

- CommonJS
- ESM
- TypeScript

```typescript
const { container } = require("@sapphire/framework");

class MyAwesomeService {
  printAwesomeLog() {
    container.logger.info("log message");
  }
}
module.exports = {
  MyAwesomeService,
};
```

```typescript
import { container } from "@sapphire/framework";

export class MyAwesomeService {
  printAwesomeLog() {
    container.logger.info("log message");
  }
}
```

```typescript
import { container } from "@sapphire/framework";

export class MyAwesomeService {
  public printAwesomeLog() {
    container.logger.info("log message");
  }
}
```

Here is an example ping command, demonstrating the use of `this.container.logger` from within a piece by omitting the
explicit import.

- CommonJS
- ESM
- TypeScript

```typescript
// ping command

const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    this.container.logger.warn("warning message");
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
// ping command

import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    this.container.logger.warn("warning message");
  }
}
```

```typescript
// ping command

import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  public async messageRun(message: Message) {
    this.container.logger.warn("warning message");
  }
}
```

## Types of logs [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#types-of-logs "Direct link to Types of logs")

1. `trace`
2. `debug`
3. `info`
4. `warn`
5. `error`
6. `fatal`

> Example: `container.logger.debug('log debug message');`

- [Introduction](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#usage)
- [Types of logs](https://sapphirejs.dev/docs/Guide/plugins/Logger/getting-started/#types-of-logs)
