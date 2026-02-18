[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/channel-types/#__docusaurus_skipToContent_fallback)

The [`runIn`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#runin) command option can be used to specify the types of channels a command can run in. This can be
useful if you're developing a command that, for example, displays the roles of a user. In that scenario, you'll want to
make sure that the command can only be run in guild channels.

info

You can view the valid `runIn` values [here](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/CommandOptionsRunTypeEnum).

- CommonJS
- ESM
- TypeScript

```typescript
const { Command, CommandOptionsRunTypeEnum } = require("@sapphire/framework");

class PingCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      runIn: CommandOptionsRunTypeEnum.GuildAny, // Only run in guild channels
    });
  }
}
module.exports = {
  PingCommand,
};
```

```typescript
import { Command, CommandOptionsRunTypeEnum } from "@sapphire/framework";

export class PingCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      runIn: CommandOptionsRunTypeEnum.GuildAny, // Only run in guild channels
    });
  }
}
```

```typescript
import { Command, CommandOptionsRunTypeEnum } from "@sapphire/framework";

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext) {
    super(context, {
      // ...
      runIn: CommandOptionsRunTypeEnum.GuildAny, // Only run in guild channels
    });
  }
}
```

If you try to run a command in direct messages, you'll now find that nothing happens.

tip

To learn how to send a message to the command executor when a precondition fails, see [Reporting Precondition\\
Failure](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure).
