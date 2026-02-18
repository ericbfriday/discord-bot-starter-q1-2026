[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/global-preconditions/#__docusaurus_skipToContent_fallback)

Sometimes you want a precondition that automatically runs for every command, without having to add it to each command.
This is where global preconditions come in.

Creating a global precondition is very similar to creating a normal precondition. The only difference is that you need
to add the [`position`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionOptions#position) option to the options of the particular precondition. The position determines the priority at
which a global precondition is ran. A lower position means it runs before those with a higher position, and vice versa.

info

By default Sapphire ships with 1 single global precondition, the `Enabled` precondition, which checks if a piece is
enabled through the optional `enabled?: boolean` option. This global precondition has a position of `10` to allow users
to have global preconditions with a higher priority, however, we do not recommend you do this as piece enabled checks
are recommended to be the first thing to check.

Following is an example of a simple global precondition that checks if the command is used in a server that was added to
an arbitrary banlist stored in a database. In this code snippet we set the [`position`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionOptions#position) to value `20`, which means it
will run _after_ the `Enabled` precondition.

- CommonJS
- ESM
- TypeScript

```typescript
const { AllFlowsPrecondition, Result } = require("@sapphire/framework");

class UserPrecondition extends AllFlowsPrecondition {
  #message =
    "Sorry but your server is banned from using this bot's commands. Contact the bot developer for more information.";

  constructor(context, options) {
    super(context, {
      ...options,
      position: 20,
    });
  }

  chatInputRun(interaction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  contextMenuRun(interaction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  messageRun(message) {
    return this.doBanlistCheck(message.guildId);
  }

  async doBanlistCheck(guildId) {
    if (guildId === null) return this.ok();

    const isInBannedGuild = await Result.fromAsync(
      this.container.prisma.bannedGuilds.findFirstOrThrow({
        where: { snowflake: BigInt(guildId) },
      }),
    );

    // SQL query failed, therefore no guild was found, therefore the guild is not banned.
    if (isInBannedGuild.isErr()) return this.ok();

    // Guild was found, therefore it is banned.
    return this.error({ identifier: "GuildInBanList", message: this.#message });
  }
}
module.exports = {
  UserPrecondition,
};
```

```typescript
import { AllFlowsPrecondition, Result } from "@sapphire/framework";

export class UserPrecondition extends AllFlowsPrecondition {
  #message =
    "Sorry but your server is banned from using this bot's commands. Contact the bot developer for more information.";

  constructor(context, options) {
    super(context, {
      ...options,
      position: 20,
    });
  }

  chatInputRun(interaction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  contextMenuRun(interaction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  messageRun(message) {
    return this.doBanlistCheck(message.guildId);
  }

  async doBanlistCheck(guildId) {
    if (guildId === null) return this.ok();

    const isInBannedGuild = await Result.fromAsync(
      this.container.prisma.bannedGuilds.findFirstOrThrow({
        where: { snowflake: BigInt(guildId) },
      }),
    );

    // SQL query failed, therefore no guild was found, therefore the guild is not banned.
    if (isInBannedGuild.isErr()) return this.ok();

    // Guild was found, therefore it is banned.
    return this.error({ identifier: "GuildInBanList", message: this.#message });
  }
}
```

```typescript
import { AllFlowsPrecondition, Piece, Result } from "@sapphire/framework";
import type {
  ChatInputCommandInteraction,
  ContextMenuCommandInteraction,
  Message,
} from "discord.js";

export class UserPrecondition extends AllFlowsPrecondition {
  #message =
    "Sorry but your server is banned from using this bot's commands. Contact the bot developer for more information.";

  public constructor(
    context: AllFlowsPrecondition.LoaderContext,
    options: AllFlowsPrecondition.Options,
  ) {
    super(context, {
      ...options,
      position: 20,
    });
  }

  public override chatInputRun(interaction: ChatInputCommandInteraction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  public override contextMenuRun(interaction: ContextMenuCommandInteraction) {
    return this.doBanlistCheck(interaction.guildId);
  }

  public override messageRun(message: Message) {
    return this.doBanlistCheck(message.guildId);
  }

  private async doBanlistCheck(guildId: string | null) {
    if (guildId === null) return this.ok();

    const isInBannedGuild = await Result.fromAsync(
      this.container.prisma.bannedGuilds.findFirstOrThrow({
        where: { snowflake: BigInt(guildId) },
      }),
    );

    // SQL query failed, therefore no guild was found, therefore the guild is not banned.
    if (isInBannedGuild.isErr()) return this.ok();

    // Guild was found, therefore it is banned.
    return this.error({ identifier: "GuildInBanList", message: this.#message });
  }
}
```

A few notes about this code snippet

- We use the [`AllFlowsPrecondition`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/AllFlowsPrecondition) class, which is a special class that allows you to use the same precondition for
  all flows. This is useful for global preconditions, as you want to use the same precondition for all flows.
- If the command is executed in a DM, we return `this.ok()` to allow the command to run.
- In this example we use [Prisma](https://www.prisma.io/), but you can use any database library you want.
- We use the [`Result`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/) class to make checking if the guild was in the banlist or not easier. This is not required, but
  it is recommended.
