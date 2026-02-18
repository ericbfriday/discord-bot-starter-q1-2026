[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#__docusaurus_skipToContent_fallback)

On this page

Just as we did in [Creating Commands](https://sapphirejs.dev/docs/Guide/getting-started/creating-a-basic-command), we will start by creating a `preconditions` subdirectory in
your project's entry point directory. For this guide, we'll be building out an `OwnerOnly` precondition, that prevents
anyone but the application owner from running the command.

Your directory should now look something like this:

```bash
├── node_modules
├── package.json
└── src
    ├── commands
    │   └── ping.js
    ├── index.js
    ├── listeners
    │   └── ready.js
    └── preconditions
        └── OwnerOnly.js
```

The purpose of our `OwnerOnly` precondition is just as the name suggests: to check if the user is the bot owner. It can
be used for developer commands, such as commands that evaluate expressions or present internal debugging information.

## Creating a Precondition class [​](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#creating-a-precondition-class "Direct link to Creating a Precondition class")

Preconditions are made by extending the Sapphire [`Precondition`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition) class and exporting it.

- CommonJS
- ESM
- TypeScript

```typescript
const { Precondition } = require("@sapphire/framework");

class OwnerOnlyPrecondition extends Precondition {}
module.exports = {
  OwnerOnlyPrecondition,
};
```

```typescript
import { Precondition } from "@sapphire/framework";

export class OwnerOnlyPrecondition extends Precondition {}
```

```typescript
import { Precondition } from "@sapphire/framework";

export class OwnerOnlyPrecondition extends Precondition {}
```

Next, we can create a [`messageRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#messagerun), [`chatInputRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#chatinputrun), and/or
[`contextMenuRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#contextmenurun) function to execute our logic. These functions should either return
[`this.ok()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#ok) to signify the condition has passed, or [`this.error(...)`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#error) to signify
the command should be denied.

tip

If your precondition is set to implement all three of [`messageRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#messagerun),
[`chatInputRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#chatinputrun), and [`contextMenuRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition#contextmenurun) then we recommend
extending [`AllFlowsPrecondition`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/AllFlowsPrecondition) which will add TypeScript checks to ensure that you have
implemented all 3 methods.

- CommonJS
- ESM
- TypeScript

```typescript
const { Precondition } = require("@sapphire/framework");
const { Config } = require("#config");

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
    // for Context Menu Command
    return this.checkOwner(interaction.user.id);
  }

  async checkOwner(userId) {
    return Config.bot.owners.includes(userId)
      ? this.ok()
      : this.error({ message: "Only the bot owner can use this command!" });
  }
}
module.exports = {
  OwnerOnlyPrecondition,
};
```

```typescript
import { Precondition } from "@sapphire/framework";
import { Config } from "#config";

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
    // for Context Menu Command
    return this.checkOwner(interaction.user.id);
  }

  async checkOwner(userId) {
    return Config.bot.owners.includes(userId)
      ? this.ok()
      : this.error({ message: "Only the bot owner can use this command!" });
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
import { Config } from "#config";

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
    // for Context Menu Command
    return this.checkOwner(interaction.user.id);
  }

  private async checkOwner(userId: string) {
    return Config.bot.owners!.includes(userId)
      ? this.ok()
      : this.error({ message: "Only the bot owner can use this command!" });
  }
}
```

info

Adding a check method i.e. `messageRun` or `chatInputRun` or `contextMenuRun` is optional, you can add add any of them
that's needed for your bot. For example, if your bot has no `Slash` or `Context menu` command then `chatInputRun` and
`contextMenuRun` can be omitted from the example above.

### TypeScript [​](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#typescript "Direct link to TypeScript")

Typescript users must augment Sapphire's [`Preconditions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/Preconditions) interface, which is needed to
increase the security of Sapphire's types. Otherwise, you will run into type errors in the next section.

info

Make sure you first create an index.d.ts file in the TypeScript `root` directory (that is to say, the directory you have
configured as `rootDir` in your `tsconfig`, generally this is `src`. Note that we are NOT talking about the actual root
folder here!) of your project, then put the following code using the name of your new precondition, in this case
`OwnerOnly`.

```typescript
declare module "@sapphire/framework" {
  interface Preconditions {
    OwnerOnly: never;
  }
}

export default undefined;
```

Please see an official example [here](https://github.com/sapphiredev/examples/blob/main/examples/with-typescript-complete/src/preconditions/OwnerOnly.ts#L27-L31).

## Using Preconditions in Commands [​](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#using-preconditions-in-commands "Direct link to Using Preconditions in Commands")

To attach a precondition to a command, you simply have to input its name in an array in the command's
[`preconditions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#preconditions) option.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      preconditions: ["OwnerOnly"],
    });
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      preconditions: ["OwnerOnly"],
    });
  }
}
```

```typescript
import { Command } from "@sapphire/framework";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext) {
    super(context, {
      // ...
      preconditions: ["OwnerOnly"],
    });
  }
}
```

Now, if someone who is not the bot owner executes the `ping` command, nothing will happen!

By default, no error message will be sent or logged when a command is denied because of a precondition. To learn how to
configure this, please read [Reporting Precondition Failures](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure).

## Advanced Usage [​](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#advanced-usage "Direct link to Advanced Usage")

Sapphire also has a builtin system for advanced conditional precondition logic through nested arrays. By default, all
preconditions in the given array must pass for the command to be run. However, you can use nested arrays to create `OR`
functionality. This could be useful if you'd like a command to be run if the user is either a moderator _or_ an admin.

Furthermore, if you create a nested array within a nested array, you'll receive `AND` functionality once more. Arrays
can be nested infinitely with the same pattern for optimal control over your preconditions.

Consider the following array of preconditions:

warning

None of the following preconditions are bundled with Sapphire; as such you'd have to create them yourself!

```js
[["AdminOnly", ["ModOnly", "OwnerOnly"]], "InVoiceChannel"];
```

For a command with these preconditions to pass the denial checks, the `InVoiceChannel` precondition must pass, as well
as `AdminOnly` _or_ both `OwnerOnly` and `ModOnly`.

- [Creating a Precondition class](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#creating-a-precondition-class)
  - [TypeScript](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#typescript)
- [Using Preconditions in Commands](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#using-preconditions-in-commands)
- [Advanced Usage](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions/#advanced-usage)
