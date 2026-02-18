[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#introduction "Direct link to Introduction")

Subcommands are a way to split 1 command into multiple. This can in particular be very useful for configuration commands
with subcommands such as `set`, `reset` and `remove`.

Originally for message commands, the plugin now supports Discord's native [Subcommands and Subcommand\\
Groups](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups) interface for Chat Input Commands (Slash Commands).

## Installation [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/plugin-subcommands @sapphire/framework @sapphire/utilities discord.js@14.x
```

```bash
yarn add @sapphire/plugin-subcommands @sapphire/framework @sapphire/utilities discord.js@14.x
```

```bash
pnpm add @sapphire/plugin-subcommands @sapphire/framework @sapphire/utilities discord.js@14.x
```

## Message Command Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#message-command-usage "Direct link to Message Command Usage")

- CommonJS
- ESM
- TypeScript

```typescript
const { Subcommand } = require('@sapphire/plugin-subcommands');

// Extend `Subcommand` instead of `Command`
class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove'\
        }\
      ]
    });
  }

  async messageList(message, args) {}

  async messageAdd(message, args) {}

  async messageRemove(message, args) {}
}
module.exports = {
  UserCommand
};
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove'\
        }\
      ]
    });
  }

  async messageList(message, args) {}

  async messageAdd(message, args) {}

  async messageRemove(message, args) {}
}
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';
import type { Args } from '@sapphire/framework';
import type { Message } from 'discord.js';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  public constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove'\
        }\
      ]
    });
  }

  public async messageList(message: Message, args: Args) {}

  public async messageAdd(message: Message, args: Args) {}

  public async messageRemove(message: Message, args: Args) {}
}
```

In this example command, "vip list" will run `messageList`, "vip add" will run `messageAdd`, and "vip remove" will run
`messageRemove`. You can map the value of `messageRun` to the name of any method in the class, but we recommend you use
a naming convention to keep things organized. Our preferred convention is prefixing the method name with the type of
command (`messageAdd`, `chatInputAdd`, and `contextMenuAdd` for Message Commands, Chat Input Commands, and Context Menu
Commands respectively).

Including `default: true` will run that subcommand when no subcommand is provided. In this case, invoking the command
with "vip" will run `messageList` just like "vip list".

## Chat Input Command (Slash Command) Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#chat-input-command-slash-command-usage "Direct link to Chat Input Command (Slash Command) Usage")

warning

To use subcommands with Chat Input Commands (Slash Commands), we recommend you learn how to register and use regular
Chat Input Commands first in order to understand `registerApplicationCommands()`. Please read [Registering Chat Input\\
Commands](https://sapphirejs.dev/docs/Guide/commands/application-commands/application-command-registry/registering-chat-input-commands) for details.

- CommonJS
- ESM
- TypeScript

```typescript
const { Subcommand } = require('@sapphire/plugin-subcommands');

// Extend `Subcommand` instead of `Command`
class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName('vip')
        .setDescription('Vip command') // Needed even though base command isn't displayed to end user
        .addSubcommand((command) => command.setName('list').setDescription('List vips'))
        .addSubcommand((command) =>
          command
            .setName('add')
            .setDescription('Add a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to add to vip list').setRequired(true)
            )
        )
        .addSubcommand((command) =>
          command
            .setName('remove')
            .setDescription('Remove a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to remove from vip list').setRequired(true)
            )
        )
    );
  }

  async chatInputList(interaction) {}

  async chatInputAdd(interaction) {}

  async chatInputRemove(interaction) {}
}
module.exports = {
  UserCommand
};
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  }

  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName('vip')
        .setDescription('Vip command') // Needed even though base command isn't displayed to end user
        .addSubcommand((command) => command.setName('list').setDescription('List vips'))
        .addSubcommand((command) =>
          command
            .setName('add')
            .setDescription('Add a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to add to vip list').setRequired(true)
            )
        )
        .addSubcommand((command) =>
          command
            .setName('remove')
            .setDescription('Remove a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to remove from vip list').setRequired(true)
            )
        )
    );
  }

  async chatInputList(interaction) {}

  async chatInputAdd(interaction) {}

  async chatInputRemove(interaction) {}
}
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  public constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  }

  registerApplicationCommands(registry: Subcommand.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName('vip')
        .setDescription('Vip command') // Needed even though base command isn't displayed to end user
        .addSubcommand((command) => command.setName('list').setDescription('List vips'))
        .addSubcommand((command) =>
          command
            .setName('add')
            .setDescription('Add a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to add to vip list').setRequired(true)
            )
        )
        .addSubcommand((command) =>
          command
            .setName('remove')
            .setDescription('Remove a vip')
            .addUserOption((option) =>
              option.setName('user').setDescription('user to remove from vip list').setRequired(true)
            )
        )
    );
  }

  public async chatInputList(interaction: Subcommand.ChatInputCommandInteraction) {}

  public async chatInputAdd(interaction: Subcommand.ChatInputCommandInteraction) {}

  public async chatInputRemove(interaction: Subcommand.ChatInputCommandInteraction) {}
}
```

The code above registers three slash commands: `/vip list`, `/vip add`, and `/vip remove`. These run the respective
class methods mapped in the `subcommands` array.

info

When using subcommand or subcommand groups for application commands, Discord will [make your base command\\
unusable](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups). In the example above, this is why Sapphire does not register a
`/vip` command for you, and also why providing a `default` option will not do anything for Chat Input Subcommands.

## Mixing Message Command and Chat Input Command Subcommands [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#mixing-message-command-and-chat-input-command-subcommands "Direct link to Mixing Message Command and Chat Input Command Subcommands")

You can use both kinds of subcommands at the same time if needed. This may be useful in situations such as migrating
Message Command subcommands to Chat Input Command subcommands over time.

- CommonJS
- ESM
- TypeScript

```typescript
const { Subcommand } = require('@sapphire/plugin-subcommands');

// Extend `Subcommand` instead of `Command`
class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true,\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  } // Register Application Commands and implement methods below...
}
module.exports = {
  UserCommand
};
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true,\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  } // Register Application Commands and implement methods below...
}
```

```typescript
import { Subcommand } from '@sapphire/plugin-subcommands';

// Extend `Subcommand` instead of `Command`
export class UserCommand extends Subcommand {
  public constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      name: 'vip',
      subcommands: [\
        {\
          name: 'list',\
          messageRun: 'messageList',\
          default: true,\
          chatInputRun: 'chatInputList'\
        },\
        {\
          name: 'add',\
          messageRun: 'messageAdd',\
          chatInputRun: 'chatInputAdd'\
        },\
        {\
          name: 'remove',\
          messageRun: 'messageRemove',\
          chatInputRun: 'chatInputRemove'\
        }\
      ]
    });
  } // Register Application Commands and implement methods below...
}
```

Keep in mind that `default` is only functional for Message Command Subcommands as mentioned in the previous section.

- [Introduction](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#installation)
- [Message Command Usage](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#message-command-usage)
- [Chat Input Command (Slash Command) Usage](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#chat-input-command-slash-command-usage)
- [Mixing Message Command and Chat Input Command Subcommands](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started/#mixing-message-command-and-chat-input-command-subcommands)
