[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/nsfw-filter/#__docusaurus_skipToContent_fallback)

Sometimes it can be necessary to lock certain commands to NSFW (not safe for work) channels. This can be simply achieved
by setting the `nsfw` option in the command.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class NSFWCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      nsfw: true,
    });
  }
}
module.exports = {
  NSFWCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class NSFWCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      nsfw: true,
    });
  }
}
```

```typescript
import { Command } from "@sapphire/framework";

export class NSFWCommand extends Command {
  public constructor(context: Command.LoaderContext) {
    super(context, {
      // ...
      nsfw: true,
    });
  }
}
```

tip

To learn how to send a message to the command executor when a precondition fails, see [Reporting Precondition\\
Failure](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure).
