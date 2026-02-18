[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**Plugin for [@sapphire/framework](https://github.com/sapphiredev/framework) to have pretty console output.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/plugins)](https://github.com/sapphiredev/plugins/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/plugin-logger?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/plugin-logger)[![npm](https://img.shields.io/npm/v/@sapphire/plugin-logger?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/plugin-logger)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#description "Direct link to Description")

A Logger implementation that implements Sapphire's `ILogger` interface and implements timestamp and style formatting
with the blazing fast [`colorette`](https://www.npmjs.com/package/colorette) library.

## Features [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#features "Direct link to Features")

- Fully ready for TypeScript!
- Includes ESM ready entrypoint
- [`NO_COLOR`](https://no-color.org/) friendly, inherited by colorette

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#installation "Direct link to Installation")

`@sapphire/plugin-logger` depends on the following packages. Be sure to install these along with this package!

- [`@sapphire/framework`](https://www.npmjs.com/package/@sapphire/framework)

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/plugin-logger @sapphire/framework
```

---

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#usage "Direct link to Usage")

This registers the necessary options and methods in the Sapphire client to be able to use the log plugin.

```typescript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@sapphire/plugin-logger/register";
```

In order to use the Logger in any place other than a piece (commands, arguments, preconditions, etc.), you must first import the `container` property of `@sapphire/framework`. For pieces, you can simply use `this.container.logger` to access Logger methods.

```typescript
import { container } from "@sapphire/framework";

export class MyAwesomeService {
  public printAwesomeLog() {
    container.logger.info("log message");
  }
}
```

Here is an example ping command, demonstrating the use of `this.container.logger` from within a piece by omitting the explicit import.

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

## Types of logs [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#types-of-logs "Direct link to Types of logs")

1. `trace`
2. `debug`
3. `info`
4. `warn`
5. `error`
6. `fatal`

> Example: `container.logger.debug('log debug message');`

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/plugins)](https://github.com/sapphiredev/plugins/graphs/contributors)

## Enumerations [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#enumerations "Direct link to Enumerations")

| Enumeration                                                                                                                               | Description            |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| [LoggerStyleBackground](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/enumerations/LoggerStyleBackground) | The background colors. |
| [LoggerStyleEffect](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/enumerations/LoggerStyleEffect)         | The text styles.       |
| [LoggerStyleText](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/enumerations/LoggerStyleText)             | The text colors.       |

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#classes "Direct link to Classes")

| Class                                                                                                                    | Description                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [Logger](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/Logger)                   | The logger class.                                                     |
| [LoggerLevel](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerLevel)         | Logger utility that stores and applies a full style into the message. |
| [LoggerStyle](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerStyle)         | Logger utility that applies a style to a string.                      |
| [LoggerTimestamp](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerTimestamp) | Logger utility that formats a timestamp.                              |

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#interfaces "Direct link to Interfaces")

| Interface                                                                                                                                     | Description                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LoggerFormatOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerFormatOptions)           | The logger format options.                                                                                                                                                                                                        |
| [LoggerLevelOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerLevelOptions)             | The options for [LoggerLevel](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerLevel).                                                                                                 |
| [LoggerOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerOptions)                       | The logger options.                                                                                                                                                                                                               |
| [LoggerStyleOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerStyleOptions)             | The options for [LoggerStyle](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerStyle).                                                                                                 |
| [LoggerTimestampFormatter](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerTimestampFormatter) | The formatter used for [LoggerTimestampOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerTimestampOptions). This will be run **after** applying the color to the formatter. |
| [LoggerTimestampOptions](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/interfaces/LoggerTimestampOptions)     | The options for [LoggerTimestamp](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerTimestamp).                                                                                         |

## Type Aliases [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#type-aliases "Direct link to Type Aliases")

| Type Alias                                                                                                                                | Description                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [LoggerStyleResolvable](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/type-aliases/LoggerStyleResolvable) | The value accepted by [LoggerStyle](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/classes/LoggerStyle)'s constructor. Read `colorette`'s documentation for more information. |

## Variables [​](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#variables "Direct link to Variables")

| Variable                                                                                                   | Description                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [version](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/variables/version) | The [@sapphire/plugin-logger](https://github.com/sapphiredev/plugins/blob/main/packages/logger) version that you are currently using. An example use of this is showing it of in a bot information command. |

- [Description](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#usage)
- [Types of logs](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#types-of-logs)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#contributors)
- [Enumerations](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#enumerations)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#classes)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#interfaces)
- [Type Aliases](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#type-aliases)
- [Variables](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-logger/#variables)
