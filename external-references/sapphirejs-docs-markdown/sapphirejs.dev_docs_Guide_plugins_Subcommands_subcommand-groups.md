[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#__docusaurus_skipToContent_fallback)

On this page

The following examples will show off how to map subcommands within a group to methods in your command class. They will
build off the example in the previous [Getting Started](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started) section. If you haven't checked it out, we
suggest you go back, take a peek, and come back fresh and ready to code!

## Message Command Subcommand Groups Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#message-command-subcommand-groups-usage "Direct link to Message Command Subcommand Groups Usage")

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
        { name: 'list', messageRun: 'messageList', default: true },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd' },\
            { name: 'remove', messageRun: 'messageRemove' }\
          ]\
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
        { name: 'list', messageRun: 'messageList', default: true },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd' },\
            { name: 'remove', messageRun: 'messageRemove' }\
          ]\
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
        { name: 'list', messageRun: 'messageList', default: true },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd' },\
            { name: 'remove', messageRun: 'messageRemove' }\
          ]\
        }\
      ]
    });
  }

  public async messageList(message: Message, args: Args) {}

  public async messageAdd(message: Message, args: Args) {}

  public async messageRemove(message: Message, args: Args) {}
}
```

This example is very similar to the one in the [Getting Started Message Command\\
Usage](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started#message-command-usage) section. "vip" and "vip list" will run `messageList`, but the two
subcommands in the group are now invoked with "vip action add" and "vip action remove".

## Chat Input Command "Subcommand Groups" Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#chat-input-command-subcommand-groups-usage 'Direct link to Chat Input Command "Subcommand Groups" Usage')

"Subcommands and Subcommand Groups" is Discord's way of grouping Chat Input Application Commands on their side. To avoid
confusion due to similar naming, please refer to the
[Subcommands and Subcommand Groups](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)
documentation for examples on how they are seen by your end users. In this guide, we are simply showing you how to map
application commands in a "Subcommand" or "Subcommand Group" to a method using the plugin.

warning

Before you can use with Chat Input Commands (Slash Commands), we recommend you learn how to register and use regular
Chat Input Commands first in order to understand what the `registerApplicationCommands()` method does. Please read
[Registering Chat Input Commands](https://sapphirejs.dev/docs/Guide/commands/application-commands/application-command-registry/registering-chat-input-commands) for details, and come back when you're done!

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
        { name: 'list', chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', chatInputRun: 'chatInputRemove' }\
          ]\
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
        .addSubcommandGroup((group) =>
          group
            .setName('action')
            .setDescription('action subcommand group') // Also needed even though the group isn't displayed to end user
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
        { name: 'list', chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', chatInputRun: 'chatInputRemove' }\
          ]\
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
        .addSubcommandGroup((group) =>
          group
            .setName('action')
            .setDescription('action subcommand group') // Also needed even though the group isn't displayed to end user
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
        { name: 'list', chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', chatInputRun: 'chatInputRemove' }\
          ]\
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
        .addSubcommandGroup((group) =>
          group
            .setName('action')
            .setDescription('action subcommand group') // Also needed even though the group isn't displayed to end user
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
        )
    );
  }

  public async chatInputList(interaction: Subcommand.ChatInputCommandInteraction) {}

  public async chatInputAdd(interaction: Subcommand.ChatInputCommandInteraction) {}

  public async chatInputRemove(interaction: Subcommand.ChatInputCommandInteraction) {}
}
```

The code above registers three slash commands: `/vip list`, `/vip action add`, and `/vip action remove`. These run the
respective class methods mapped in the `subcommands` array.

`list` is a direct "Subcommand" of `vip`, while `add` and `remove` are in a "Subcommand Group called" `action` under
`vip`. In the previous sentence, we are referring to the how Discord organizes the application commands on their end.

## Mixing Message Command Subcommand Groups and Chat Input Command Subcommand Groups [​](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#mixing-message-command-subcommand-groups-and-chat-input-command-subcommand-groups "Direct link to Mixing Message Command Subcommand Groups and Chat Input Command Subcommand Groups")

The answer to if you can use both at the same time is yes.

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
        { name: 'list', messageRun: 'messageList', default: true, chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', messageRun: 'messageRemove', chatInputRun: 'chatInputRemove' }\
          ]\
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
        { name: 'list', messageRun: 'messageList', default: true, chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', messageRun: 'messageRemove', chatInputRun: 'chatInputRemove' }\
          ]\
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
        { name: 'list', messageRun: 'messageList', default: true, chatInputRun: 'chatInputList' },\
        {\
          name: 'action',\
          type: 'group',\
          entries: [\
            { name: 'add', messageRun: 'messageAdd', chatInputRun: 'chatInputAdd' },\
            { name: 'remove', messageRun: 'messageRemove', chatInputRun: 'chatInputRemove' }\
          ]\
        }\
      ]
    });
  } // Register Application Commands and implement methods below...
}
```

As mentioned in [Getting Started](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/getting-started), `default` is only functional for Message Command subcommands.

- [Message Command Subcommand Groups Usage](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#message-command-subcommand-groups-usage)
- [Chat Input Command "Subcommand Groups" Usage](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#chat-input-command-subcommand-groups-usage)
- [Mixing Message Command Subcommand Groups and Chat Input Command Subcommand Groups](https://sapphirejs.dev/docs/Guide/plugins/Subcommands/subcommand-groups/#mixing-message-command-subcommand-groups-and-chat-input-command-subcommand-groups)
