[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#__docusaurus_skipToContent_fallback)

On this page

This plugin implements [i18next](https://i18next.com/), a powerful internationalization library. It provides a simple way to internationalize
your bot's responses. It leverages a [filesystem backend](https://github.com/skyra-project/archid-components/tree/main/packages/i18next-backend) to load JSON files from a directory, and provides
a simple way to get translated keys and have your languages also match your Discord data. By simply implementing
[`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) on the [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) you can return a language key for a user,
guild, interaction, or message and then the plugin will automatically get the proper internationalization data for you.

tip

All [i18next](https://i18next.com/) methods and capabilities are available when using this plugin. This plugin is simply a tiny wrapper around
the [i18next](https://i18next.com/) API. Need to access the `t` function without using this plugin? You can just access it through
`i18next.t`. Wondering how to handle formatting, interpolation, plurals and other [i18next](https://i18next.com/) features? Yes, to
everything.

In short: **Everything that is possible with [i18next](https://i18next.com/) is also possible with [`@sapphire/plugin-i18next`](https://github.com/sapphiredev/plugins/tree/main/packages/i18next)**

## Installation [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/plugin-i18next @sapphire/framework discord.js@14.x
```

```bash
yarn add @sapphire/plugin-i18next @sapphire/framework discord.js@14.x
```

```bash
pnpm add @sapphire/plugin-i18next @sapphire/framework discord.js@14.x
```

## Usage [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#usage "Direct link to Usage")

First of all you will need to register the plugin. This will:

- Register the TypeScript types for configuring the plugin
- Load your language files when starting your bot
- Add the `i18n` property to the [`container`](https://sapphirejs.dev/docs/Guide/additional-information/using-and-extending-container)

- CommonJS
- ESM
- TypeScript

```javascript
// Main bot file
// Be sure to register the plugin before instantiating the client.
require("@sapphire/plugin-i18next/register");
```

```javascript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-i18next/register";
```

```typescript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-i18next/register";
```

## Get the language set per server [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#get-the-language-set-per-server "Direct link to Get the language set per server")

Once you start to use [i18next](https://i18next.com/) to offer your bot in different languages you are likely to also want each server to be
able to configure their own language through some kind of configuration command while you store this data in a database.
While this page will not cover those aspects, what we will cover here is how you can inform the [i18next](https://i18next.com/) plugin about
the language that should be used in the current context.

In order to achieve this, you will need to provide the options to the plugin. This is done through the
[`i18n`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationOptions) option on the [`ClientOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions), specifically the
[`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) property on that object. This method receives 1 parameter, which is an object that has
[`guild`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext#guild), [`channel`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext#channel),
[`user`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext#user),
[`interactionGuildLocale`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext#interactionguildlocale), and
[`interactionLocale`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext#interactionlocale). Using these properties you can make a call to your
database, and return the proper language key. Alternatively if you want some kind of fallback to a default language you
can also specify that here.

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  i18n: {
    fetchLanguage: async (context) => {
      if (context.interactionGuildLocale || context.interactionLocale) {
        return context.interactionGuildLocale || context.interactionLocale;
      }

      if (!context.guild) {
        return "en-US";
      }

      // Example of querying your database. The exact syntax will depend on your ORM
      const guildSettings = await db.find({ guild_id: context.guildId });
      return guildSettings.language;
    },
  },
});

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  i18n: {
    fetchLanguage: async (context) => {
      if (context.interactionGuildLocale || context.interactionLocale) {
        return context.interactionGuildLocale || context.interactionLocale;
      }

      if (!context.guild) {
        return "en-US";
      }

      // Example of querying your database. The exact syntax will depend on your ORM
      const guildSettings = await db.find({ guild_id: context.guildId });
      return guildSettings.language;
    },
  },
});

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";
import type { InternationalizationContext } from "@sapphire/plugin-i18next";

const client = new SapphireClient({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  i18n: {
    fetchLanguage: async (context: InternationalizationContext) => {
      if (context.interactionGuildLocale || context.interactionLocale) {
        return context.interactionGuildLocale || context.interactionLocale;
      }

      if (!context.guild) {
        return "en-US";
      }

      // Example of querying your database. The exact syntax will depend on your ORM
      const guildSettings = await db.find({ guild_id: context.guildId });
      return guildSettings.language;
    },
  },
});

client.login("your-token-goes-here");
```

note

In this example we first check if [`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) was called with an interaction. If so we return the
language key that Discord gives us on the API about that interaction. This is either the server's configured primary
language or a users own client language. If this is not an interaction we then check if the command was ran in a guild.
If not we return the default language. If it was ran in a guild we then query our database for the guild's language and
return that.

warning

Something important to keep in mind is that you have to make sure that the language exists in your language directory,
otherwise an error will be thrown saying that the language obtained from the server is not valid.

## Configuring languages [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#configuring-languages "Direct link to Configuring languages")

Every language has a name which is linked to the name of the folder that holds the language files. For example:

```javascript
├── commands
├── listeners
└── languages
    └── en-US
        └── ping.json
        └── misc.json
    └── es-ES
        └── ping.json
        └── misc.json
```

In this case, we have the languages `en-US` and `es-ES`. Remember that the languages must be in the directory called
`languages` (this can be customized but we do not advise doing so). Each of these folders should hold JSON files with
key-value maps of language keys and their translated string values. Each folder can also have ONE (1) nested folder
which is called a `namespace` in [i18next](https://i18next.com/). This namespace is used to separate the language keys into different
categories.

danger

_**[i18next](https://i18next.com/) does not support nesting namespaces in namespaces. You can have only 1 nested folder, not multiple.**_

### Adding key-value pairs to a translation file [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#adding-key-value-pairs-to-a-translation-file "Direct link to Adding key-value pairs to a translation file")

Now that we have created the folder structure and some basic language files lets populate one with key-value pairs. For
example lets consider the file: `languages/en-US/ping.json`

We can fill this file with the key-value pairs:

```json
{
  "success": "Pong!",
  "success_with_args": "Pong! Took me {{latency}}ms to reply"
}
```

And lets say we also have the language `nl-NL`. This means we should also have the file `languages/nl-NL/ping.json`,
which will have the key-value pairs:

```json
{
  "success": "Pong!",
  "success_with_args": "Pong! Het heeft {{latency}}ms geduurd om te reageren"
}
```

## Using languages [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#using-languages "Direct link to Using languages")

### [`resolveKey`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/resolveKey) [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#resolvekey "Direct link to resolvekey")

The [`resolveKey`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/resolveKey) function can be used anywhere to get translated text by its key. `resolveKey` takes 2-3
parameters.

- The first parameter should always be a `message` or an `interaction` which provides the context to
  [`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) to get the appropriate language key for [i18next](https://i18next.com/).
- The second parameter is the key for the translated string you want to get, including the namespace if applicable.
- The third parameter is any additional context to pass to [i18next](https://i18next.com/) such as when leveraging interpolation,
  pluralization, etc.

Following is an example of a command that implements [`messageRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#messagerun) (for message based commands),
[`chatInputRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#chatinputrun) (for chat input commands) and [`contextMenuRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#contextmenurun) (for context menu
commands) to send the same translated message.

- CommonJS
- ESM
- TypeScript

```typescript
const { resolveKey } = require("@sapphire/plugin-i18next");
const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    await message.channel.send(await resolveKey(message, "ping:success"));
  }

  async chatInputRun(interaction) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }

  async contextMenuRun(interaction) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
import { resolveKey } from "@sapphire/plugin-i18next";
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    await message.channel.send(await resolveKey(message, "ping:success"));
  }

  async chatInputRun(interaction) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }

  async contextMenuRun(interaction) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }
}
```

```typescript
import { resolveKey } from "@sapphire/plugin-i18next";
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  public override async messageRun(message: Message) {
    await message.channel.send(await resolveKey(message, "ping:success"));
  }

  public override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }

  public override async contextMenuRun(
    interaction: Command.ContextMenuCommandInteraction,
  ) {
    await interaction.reply(await resolveKey(interaction, "ping:success"));
  }
}
```

note

In this example we used `ping:success` as the key for the translation. This means that [i18next](https://i18next.com/) will look for a file
called `ping.json` in the languages folder, and if it finds that file look for a key called `success`. If you have
followed this guide up to this point you should have this configured.

If you have instead opted for categorizing your JSON files in namespaces and you have for example followed a structure
of `languages/en-US/commands/ping.json` then the key will be `commands/ping:success`.

### [`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#fetchlanguage "Direct link to fetchlanguage")

[`fetchLanguage`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage) returns the language specific for the provided context.

- CommonJS
- ESM
- TypeScript

```typescript
const { fetchLanguage } = require("@sapphire/plugin-i18next");
const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    const languageCodeForCurrentGuild = await fetchLanguage(message);
    // ===> en-US
  }

  async chatInputRun(interaction) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }

  async contextMenuRun(interaction) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
import { fetchLanguage } from "@sapphire/plugin-i18next";
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    const languageCodeForCurrentGuild = await fetchLanguage(message);
    // ===> en-US
  }

  async chatInputRun(interaction) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }

  async contextMenuRun(interaction) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }
}
```

```typescript
import { fetchLanguage } from "@sapphire/plugin-i18next";
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  public override async messageRun(message: Message) {
    const languageCodeForCurrentGuild = await fetchLanguage(message);
    // ===> en-US
  }

  public override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }

  public override async contextMenuRun(
    interaction: Command.ContextMenuCommandInteraction,
  ) {
    const languageCodeForCurrentGuild = await fetchLanguage(interaction);
    // ===> en-US
  }
}
```

### [`fetchT`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchT) [​](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#fetcht "Direct link to fetcht")

[`fetchT`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchT) returns an [i18next](https://i18next.com/) [`TFunction`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/TFunction) with the language specific for the provided
context.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    const tFunction = await fetchT(message);
    const translatedPingSuccess = tFunction("ping:success");
  }

  async chatInputRun(interaction) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }

  async contextMenuRun(interaction) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  async messageRun(message) {
    const tFunction = await fetchT(message);
    const translatedPingSuccess = tFunction("ping:success");
  }

  async chatInputRun(interaction) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }

  async contextMenuRun(interaction) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }
}
```

```typescript
import { fetchLanguage } from "@sapphire/plugin-i18next";
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "ping pong",
    });
  }

  public override async messageRun(message: Message) {
    const tFunction = await fetchT(message);
    const translatedPingSuccess = tFunction("ping:success");
  }

  public override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }

  public override async contextMenuRun(
    interaction: Command.ContextMenuCommandInteraction,
  ) {
    const tFunction = await fetchT(interaction);
    const translatedPingSuccess = tFunction("ping:success");
  }
}
```

- [Installation](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#usage)
- [Get the language set per server](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#get-the-language-set-per-server)
- [Configuring languages](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#configuring-languages)
  - [Adding key-value pairs to a translation file](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#adding-key-value-pairs-to-a-translation-file)
- [Using languages](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#using-languages)
  - [resolveKey](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#resolvekey)
  - [fetchLanguage](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#fetchlanguage)
  - [fetchT](https://sapphirejs.dev/docs/Guide/plugins/i18next/getting-started/#fetcht)
