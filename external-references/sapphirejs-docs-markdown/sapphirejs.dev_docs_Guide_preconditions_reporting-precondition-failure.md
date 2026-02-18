[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure/#__docusaurus_skipToContent_fallback)

On this page

When a precondition fails, it's usually important for the user to know why. For example, if they hit a cooldown or lack
permissions, that should somehow be communicated. However, by default, nothing will happen if a precondition blocks a
message.

To change this, we'll need to create one or more of `chatInputCommandDenied`, `contextMenuCommandDenied`, and/or
`messageCommandDenied` listener, which is triggered when a precondition fails for the respective command type. For more
information on how to create listeners, see the [`Creating Listeners`](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners) section.

info

Going forward we will refer to various `commandDenied` listeners as `*CommandDenied`. Mentally fill out the name with
whatever listener you are creating.

warning

The `*CommandDenied` event shouldn't be confused with the `commandError` event, which is triggered when a command throws
an error.

`*CommandDenied` receives the parameters:

- The [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError) that was created from the precondition
- The payload ( [MessageCommandDeniedPayload](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/MessageCommandDeniedPayload), [ChatInputCommandDeniedPayload](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ChatInputCommandDeniedPayload),
  [ContextMenuCommandDeniedPayload](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ContextMenuCommandDeniedPayload)), which includes necessary context.

Following are basic samples of all 3 variants of the `*CommandDenied` listener:

- Message Commands
- Chat Input Commands
- Context Menu Commands

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class MessageCommandDenied extends Listener {
  run(error, payload) {
    // ...
  }
}
module.exports = {
  MessageCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class MessageCommandDenied extends Listener {
  run(error, payload) {
    // ...
  }
}
```

```typescript
import {
  Events,
  Listener,
  type MessageCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";

export class MessageCommandDenied extends Listener<
  typeof Events.MessageCommandDenied
> {
  public run(error: UserError, payload: MessageCommandDeniedPayload) {
    // ...
  }
}
```

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    // ...
  }
}
module.exports = {
  ChatInputCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    // ...
  }
}
```

```typescript
import {
  Events,
  Listener,
  type ChatInputCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";

export class ChatInputCommandDenied extends Listener<
  typeof Events.ChatInputCommandDenied
> {
  public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    // ...
  }
}
```

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    // ...
  }
}
module.exports = {
  ContextMenuCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    // ...
  }
}
```

```typescript
import {
  Events,
  Listener,
  type ContextMenuCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";

export class ContextMenuCommandDenied extends Listener<
  typeof Events.ContextMenuCommandDenied
> {
  public run(
    error: UserError,
    { interaction }: ContextMenuCommandDeniedPayload,
  ) {
    // ...
  }
}
```

Of particular note is the property `error.message`, which will have the error message that was provided by the failing
precondition. In [Creating Preconditions](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions), you can find that we defined this property within the
`this.error()` method!

There are many possibilities for what you can do with the error, but the simplest is to just send it directly to the
user. That is what we'll do in these example:

- Message Commands
- Chat Input Commands
- Context Menu Commands

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class MessageCommandDenied extends Listener {
  run(error, { message }) {
    if (message.channel.isDMBased()) return;
    return message.channel.send(error.message);
  }
}
module.exports = {
  MessageCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class MessageCommandDenied extends Listener {
  run(error, { message }) {
    if (message.channel.isDMBased()) return;
    return message.channel.send(error.message);
  }
}
```

```typescript
import {
  Events,
  Listener,
  type MessageCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";

export class MessageCommandDenied extends Listener<
  typeof Events.MessageCommandDenied
> {
  public run(error: UserError, { message }: MessageCommandDeniedPayload) {
    if (message.channel.isDMBased()) return;
    return message.channel.send(error.message);
  }
}
```

info

Note that we check if the interaction has been deferred or replied to before replying, otherwise reply fail.

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ChatInputCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

```typescript
import {
  Events,
  Listener,
  type ChatInputCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ChatInputCommandDenied extends Listener<
  typeof Events.ChatInputCommandDenied
> {
  public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

info

Note that we check if the interaction has been deferred or replied to before replying, otherwise reply fail.

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ContextMenuCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

```typescript
import {
  Events,
  Listener,
  type ContextMenuCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ContextMenuCommandDenied extends Listener<
  typeof Events.ContextMenuCommandDenied
> {
  public run(
    error: UserError,
    { interaction }: ContextMenuCommandDeniedPayload,
  ) {
    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: error.message,
      });
    }

    return interaction.reply({
      content: error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

## Ignoring Precondition Failures [​](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure/#ignoring-precondition-failures "Direct link to Ignoring Precondition Failures")

If someone who isn't a bot owner tries to use a command intended only for the bot owner, sometimes you don't want to
send a message notifying them that they don't have permission. Instead, you'd rather let the command be blocked
silently. To do this, we can make use of the [`context`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError#context) property of `UserError`s. This property aims to
contain information about the context in which the error was thrown, and the value can be absolutely anything.

We can take advantage of this by adding `context: { silent: true }` to the [`this.error()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#error) options.
We'll use the `OwnerOnly` precondition we made in [Creating Preconditions](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions) to demonstrate this.

- CommonJS
- ESM
- TypeScript

```typescript
const { Precondition } = require("@sapphire/framework");

class OwnerOnlyPrecondition extends Precondition {
  async messageRun(message) {
    // for Message Commands
    return this.checkOwner(message.author.id);
  }

  async chatInputRun(interaction) {
    // for Slash Commands
    return this.checkOwner(interaction.user.id);
  }

  async contextMenuRun(interaction) {
    // for Context Menu Commands
    return this.checkOwner(interaction.user.id);
  }

  async checkOwner(userId) {
    return Config.bot.owners.includes(userId)
      ? this.ok()
      : this.error({
          message: "Only the bot owner can use this command!",
          context: { silent: true },
        });
  }
}
module.exports = {
  OwnerOnlyPrecondition,
};
```

```typescript
import { Precondition } from "@sapphire/framework";

export class OwnerOnlyPrecondition extends Precondition {
  async messageRun(message) {
    // for Message Commands
    return this.checkOwner(message.author.id);
  }

  async chatInputRun(interaction) {
    // for Slash Commands
    return this.checkOwner(interaction.user.id);
  }

  async contextMenuRun(interaction) {
    // for Context Menu Commands
    return this.checkOwner(interaction.user.id);
  }

  async checkOwner(userId) {
    return Config.bot.owners.includes(userId)
      ? this.ok()
      : this.error({
          message: "Only the bot owner can use this command!",
          context: { silent: true },
        });
  }
}
```

```typescript
import { Precondition } from "@sapphire/framework";
import type {
  CommandInteraction,
  ContextMenuCommandInteraction,
  Message,
} from "discord.js";

export class OwnerOnlyPrecondition extends Precondition {
  public override async messageRun(message: Message) {
    // for Message Commands
    return this.checkOwner(message.author.id);
  }

  public override async chatInputRun(interaction: CommandInteraction) {
    // for Slash Commands
    return this.checkOwner(interaction.user.id);
  }

  public override async contextMenuRun(
    interaction: ContextMenuCommandInteraction,
  ) {
    // for Context Menu Commands
    return this.checkOwner(interaction.user.id);
  }

  private async checkOwner(userId: string) {
    return Config.bot.owners!.includes(userId)
      ? this.ok()
      : this.error({
          message: "Only the bot owner can use this command!",
          context: { silent: true },
        });
  }
}
```

We can then check if this property exists on the error in our listener, and ignore the failure if we find it.

- Message Commands
- Chat Input Commands
- Context Menu Commands

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class MessageCommandDenied extends Listener {
  run(error, { message }) {
    if (
      Reflect.get(Object(error.context), "silent") ||
      message.channel.isDMBased()
    )
      return;
    return message.channel.send(error.message);
  }
}
module.exports = {
  MessageCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class MessageCommandDenied extends Listener {
  run(error, { message }) {
    if (
      Reflect.get(Object(error.context), "silent") ||
      message.channel.isDMBased()
    )
      return;
    return message.channel.send(error.message);
  }
}
```

```typescript
import {
  Events,
  Listener,
  type MessageCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";

export class MessageCommandDenied extends Listener<
  typeof Events.MessageCommandDenied
> {
  public run(error: UserError, { message }: MessageCommandDeniedPayload) {
    if (
      Reflect.get(Object(error.context), "silent") ||
      message.channel.isDMBased()
    )
      return;
    return message.channel.send(error.message);
  }
}
```

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    const isSilent = Reflect.get(Object(error.context), "silent");

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? "\u200b" : error.message,
      });
    }

    return interaction.reply({
      content: isSilent ? "\u200b" : error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ChatInputCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ChatInputCommandDenied extends Listener {
  run(error, { interaction }) {
    const isSilent = Reflect.get(Object(error.context), "silent");

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? "\u200b" : error.message,
      });
    }

    return interaction.reply({
      content: isSilent ? "\u200b" : error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

```typescript
import { Events, Listener, type ChatInputCommandDeniedPayload, type UserError } from '@sapphire/framework';
import { MessageFlags } from 'discord.js';

export class ChatInputCommandDenied extends Listener<typeof Events.ChatInputCommandDenied> {
  public run(error: UserError, { interaction }: ChatInputCommandDeniedPayload) {
    const isSilent = Reflect.get(Object(error.context), 'silent');

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? '\u200b' : error.message
      });
    }

    return interaction.reply({
      content: isSilent ? '\u200b' : error.message
      flags: MessageFlags.Ephemeral
    });
  }
}
```

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    const isSilent = Reflect.get(Object(error.context), "silent");

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? "\u200b" : error.message,
      });
    }

    return interaction.reply({
      content: isSilent ? "\u200b" : error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ContextMenuCommandDenied,
};
```

```typescript
import { Listener } from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ContextMenuCommandDenied extends Listener {
  run(error, { interaction }) {
    const isSilent = Reflect.get(Object(error.context), "silent");

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? "\u200b" : error.message,
      });
    }

    return interaction.reply({
      content: isSilent ? "\u200b" : error.message,
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

```typescript
import { Events, Listener, type ContextMenuCommandDeniedPayload, type UserError } from '@sapphire/framework';
import { MessageFlags } from 'discord.js';

export class ContextMenuCommandDenied extends Listener<typeof Events.ContextMenuCommandDenied> {
  public run(error: UserError, { interaction }: ContextMenuCommandDeniedPayload) {
    const isSilent = Reflect.get(Object(error.context), 'silent');

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({
        content: isSilent ? '\u200b' : error.message
      });
    }

    return interaction.reply({
      content: isSilent ? '\u200b' : error.message
      flags: MessageFlags.Ephemeral
    });
  }
}
```

warning

Keep in mind that every interaction requires a reply. If you don't provide it Discord will automatically reply the user
saying `The application did not respond`

note

In the code block above, we use `if (Reflect.get(Object(error.context), 'silent'))` as opposed to
`if (error.context.silent)` for TypeScript. When writing JavaScript code you can use the latter just fine.

To clarify this, with TypeScript `error.context` has the type `unknown`, so trying to write `error.context.silent` will
throw a TypeScript error for trying to read property `silent` of type `unknown`.

- [Ignoring Precondition Failures](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure/#ignoring-precondition-failures)
