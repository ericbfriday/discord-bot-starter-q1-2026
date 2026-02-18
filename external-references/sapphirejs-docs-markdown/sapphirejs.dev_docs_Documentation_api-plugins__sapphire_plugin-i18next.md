[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**Plugin for [@sapphire/framework](https://github.com/sapphiredev/framework) to support i18next based internationalization.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/plugins)](https://github.com/sapphiredev/plugins/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/plugin-in17n?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/plugin-in17n)[![npm](https://img.shields.io/npm/v/@sapphire/plugin-in17n?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/plugin-in17n)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#description "Direct link to Description")

An implementation of i18next's [filesystem backend](https://github.com/i18next/i18next-fs-backend) for Sapphire. It allows you to use a JSON-based `languages` directory to add internationalization for your bot using `SapphireClient`'s `fetchLanguage` hook and a custom message extension, adding features such as `sendTranslated` and `resolveKey`.

## Features [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#features "Direct link to Features")

- Fully ready for TypeScript!
- Includes ESM ready entrypoint
- Framework agnostic
- Includes convenience register for discord.js

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#installation "Direct link to Installation")

`@sapphire/plugin-i18next` depends on the following packages. Be sure to install these along with this package!

- [`@sapphire/framework`](https://www.npmjs.com/package/@sapphire/framework)
- [`discord.js`](https://www.npmjs.com/package/discord.js)

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/plugin-i18next @sapphire/framework discord.js
```

---

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#usage "Direct link to Usage")

This registers the methods and options necessary for message translations in the Sapphire client.

```typescript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-i18next/register";
```

The basic structure of a translation file is as follows:

```jsonc
// languages/en-US/commands/ping.json
{
  "success": "Pong!",
  "success_with_args": "Pong! Took me {{latency}}ms to reply",
}
```

The `resolveKey` function can be used anywhere to get translated text by its key. In this example, it is used in a method to send a message.

```typescript
import { resolveKey } from "@sapphire/plugin-i18next";
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
    await message.channel.send(await resolveKey("commands/ping:success"));
  }
}
```

`sendLocalized` will send translated text resolved from a key to a specified channel.

```typescript
import { sendLocalized } from "@sapphire/plugin-i18next";
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
    await sendLocalized(message, "commands/ping:success");
  }
}
```

`editLocalized` edits a message, replacing its content with translated text resolved from its key.

```typescript
import { editLocalized } from "@sapphire/plugin-i18next";
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
    await editLocalized(message, "commands/ping:success_args", {
      latency: ws.ping,
    });
  }
}
```

`fetchLanguage` returns the guild-specific language that the client is using.

```typescript
import { fetchLanguage } from "@sapphire/plugin-i18next";
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
    return message.channel.send(await fetchLanguage(message));
    // ===> en-US
  }
}
```

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/plugins)](https://github.com/sapphiredev/plugins/graphs/contributors)

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#classes "Direct link to Classes")

| Class                                                                                                                                             | Description                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [InternationalizationHandler](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler) | A generalized class for handling `i18next` JSON files and their discovery. |

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#interfaces "Direct link to Interfaces")

| Interface                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [$Dictionary](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/$Dictionary)                                             | This is a re-exported type from i18next. It is essentially an object of key-value pairs, where the key is a string and the value is any.                                                                                                                                                       |
| [BuilderWithDescription](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/BuilderWithDescription)                       | -                                                                                                                                                                                                                                                                                              |
| [BuilderWithName](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/BuilderWithName)                                     | -                                                                                                                                                                                                                                                                                              |
| [HMROptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/HMROptions)                                               | Configure whether to use Hot-Module-Replacement (HMR) for your i18next resources using these options. The minimum config to enable HMR is to set `enabled` to true. Any other properties are optional.                                                                                         |
| [~~I18nextFormatters~~](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/I18nextFormatters)                             | -                                                                                                                                                                                                                                                                                              |
| [I18nextNamedCachedFormatter](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/I18nextNamedCachedFormatter)             | Represents a cached formatter that is added to i18next with `i18next.services.formatter.addCached`.                                                                                                                                                                                            |
| [I18nextNamedFormatter](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/I18nextNamedFormatter)                         | Represents a cached formatter that is added to i18next with `i18next.services.formatter.add`.                                                                                                                                                                                                  |
| [InternationalizationClientOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationClientOptions) | -                                                                                                                                                                                                                                                                                              |
| [InternationalizationContext](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationContext)             | Context for [InternationalizationHandler.fetchLanguage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler#fetchlanguage) functions. This context enables implementation of per-guild, per-channel, and per-user localization. |
| [InternationalizationOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationOptions)             | The options used in [InternationalizationHandler](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler).                                                                                                                         |
| [LocalizedData](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/LocalizedData)                                         | -                                                                                                                                                                                                                                                                                              |
| [TFunction](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/TFunction)                                                 | -                                                                                                                                                                                                                                                                                              |

## Type Aliases [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#type-aliases "Direct link to Type Aliases")

| Type Alias                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [$NoInfer](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/$NoInfer)                                           | This is a re-exported type from i18next.                                                                                                                                                                                 |
| [$SpecialObject](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/$SpecialObject)                               | This is a re-exported type from i18next. It is the returned type from `resolveKey` when `returnObjects` is `true` in the options.                                                                                        |
| [BuilderWithNameAndDescription](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/BuilderWithNameAndDescription) | -                                                                                                                                                                                                                        |
| [ChannelTarget](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/ChannelTarget)                                 | -                                                                                                                                                                                                                        |
| [DiscordChannel](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/DiscordChannel)                               | -                                                                                                                                                                                                                        |
| [DynamicOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/DynamicOptions)                               | Used to dynamically add options based on found languages in [InternationalizationHandler#init](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler#init). |
| [I18nextFormatter](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/I18nextFormatter)                           | Represents a formatter that is added to i18next with `i18next.services.formatter.add` or `i18next.services.formatter.addCached`, depending on the `cached` property.                                                     |
| [Target](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/Target)                                               | -                                                                                                                                                                                                                        |
| [TextBasedDiscordChannel](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/TextBasedDiscordChannel)             | -                                                                                                                                                                                                                        |
| [TOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/type-aliases/TOptions)                                           | -                                                                                                                                                                                                                        |

## Variables [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#variables "Direct link to Variables")

| Variable                                                                                                    | Description                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [i18next](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/variables/i18next) | -                                                                                                                                                                                                             |
| [version](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/variables/version) | The [@sapphire/plugin-i18next](https://github.com/sapphiredev/plugins/blob/main/packages/i18next) version that you are currently using. An example use of this is showing it of in a bot information command. |

## Functions [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#functions "Direct link to Functions")

| Function                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [applyDescriptionLocalizedBuilder](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/applyDescriptionLocalizedBuilder) | Applies the localized descriptions on the builder, calling `setDescription` and `setDescriptionLocalizations`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [applyLocalizedBuilder](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/applyLocalizedBuilder)                       | Applies the localized names and descriptions on the builder, calling [applyNameLocalizedBuilder](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/applyNameLocalizedBuilder) and [applyDescriptionLocalizedBuilder](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/applyDescriptionLocalizedBuilder).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [applyNameLocalizedBuilder](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/applyNameLocalizedBuilder)               | Applies the localized names on the builder, calling `setName` and `setNameLocalizations`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createLocalizedChoice](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/createLocalizedChoice)                       | Constructs an object that can be passed into `setChoices` for String or Number option with localized names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [fetchLanguage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchLanguage)                                       | Retrieves the language name for a specific target, using [InternationalizationHandler.fetchLanguage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler#fetchlanguage). If [InternationalizationHandler.fetchLanguage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/classes/InternationalizationHandler#fetchlanguage) is not defined or this function returns a nullish value, then there will be a series of fallback attempts in the following descending order: 1. Returns Guild.preferredLocale. 2. Returns [InternationalizationOptions.defaultName](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/interfaces/InternationalizationOptions#defaultname) if no guild was provided. 3. Returns `'en-US'` if nothing else was found. |
| [fetchT](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/fetchT)                                                     | Retrieves the language-assigned function from i18next designated to a target's preferred language code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getLocalizedData](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/getLocalizedData)                                 | Gets the value and the localizations from a language key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [resolveKey](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/functions/resolveKey)                                             | Resolves a key and its parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

- [Description](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#usage)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#contributors)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#classes)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#interfaces)
- [Type Aliases](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#type-aliases)
- [Variables](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#variables)
- [Functions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-i18next/#functions)
