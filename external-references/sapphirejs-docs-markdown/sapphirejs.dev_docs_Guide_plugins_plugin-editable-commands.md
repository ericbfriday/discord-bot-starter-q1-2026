[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#introduction "Direct link to Introduction")

`@sapphire/plugin-editable-commands` is a tiny wrapper on top of [`@skyra/editable-commands`](https://www.npmjs.com/package/@skyra/editable-commands) that
re-exports everything and registers a listener to make commands also run on message edit.

## Installation [​](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/plugin-editable-commands @sapphire/framework
```

```bash
yarn add @sapphire/plugin-editable-commands @sapphire/framework
```

```bash
pnpm add @sapphire/plugin-editable-commands @sapphire/framework
```

## Usage [​](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#usage "Direct link to Usage")

In your main or setup file, register the plugin:

- CommonJS
- ESM
- TypeScript

```javascript
require("@sapphire/plugin-editable-commands/register");
```

```javascript
import "@sapphire/plugin-editable-commands/register";
```

```typescript
import "@sapphire/plugin-editable-commands/register";
```

Then use `send` or `reply` from the package, as shown below:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");
const { EmbedBuilder } = require("discord.js");
const { send } = require("@sapphire/plugin-editable-commands");

class UserCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "A very cool command",
      requiredClientPermissions: ["EMBED_LINKS"],
    });
  }

  messageRun(message) {
    const embed = new EmbedBuilder()
      .setURL("https://github.com/skyra-project/editable-commands")
      .setColor("#7586D8")
      .setDescription("Example description")
      .setTimestamp();

    return send(message, { embeds: [embed] });
  }
}
module.exports = {
  UserCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";
import { EmbedBuilder } from "discord.js";
import { send } from "@sapphire/plugin-editable-commands";

export class UserCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "A very cool command",
      requiredClientPermissions: ["EMBED_LINKS"],
    });
  }

  messageRun(message) {
    const embed = new EmbedBuilder()
      .setURL("https://github.com/skyra-project/editable-commands")
      .setColor("#7586D8")
      .setDescription("Example description")
      .setTimestamp();

    return send(message, { embeds: [embed] });
  }
}
```

```typescript
import { Command } from "@sapphire/framework";
import { Message, EmbedBuilder } from "discord.js";
import { send } from "@sapphire/plugin-editable-commands";

export class UserCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "A very cool command",
      requiredClientPermissions: ["EMBED_LINKS"],
    });
  }

  public messageRun(message: Message) {
    const embed = new EmbedBuilder()
      .setURL("https://github.com/skyra-project/editable-commands")
      .setColor("#7586D8")
      .setDescription("Example description")
      .setTimestamp();

    return send(message, { embeds: [embed] });
  }
}
```

- [Introduction](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/plugins/plugin-editable-commands/#usage)
