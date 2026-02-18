[Skip to main content](https://sapphirejs.dev/docs/Guide/preconditions/handling-permissions/#__docusaurus_skipToContent_fallback)

On this page

One of the most basic needs of a Discord bot is to be able to deny command access to users based on their permissions or
lack thereof. A common example would be moderation commands. Most people wouldn't want regular users to be able to ban
people, so we can restrict usage using the [`requiredUserPermissions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#requireduserpermissions) option.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");
const { PermissionFlagsBits } = require("discord.js");

class BanCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
module.exports = {
  BanCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";
import { PermissionFlagsBits } from "discord.js";

export class BanCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
```

```typescript
import { Command } from "@sapphire/framework";
import { PermissionFlagsBits } from "discord.js";

export class BanCommand extends Command {
  public constructor(context: Command.LoaderContext) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
```

Users without the "Ban Members" permission will now be unable to use the command!

## Handling Client Permissions [​](https://sapphirejs.dev/docs/Guide/preconditions/handling-permissions/#handling-client-permissions "Direct link to Handling Client Permissions")

It's also a good idea to verify the inverse: does the _bot_ have the "Ban Members" permission? We can use the
[`requiredClientPermissions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#requiredclientpermissions) option the same way to prevent the command from being used if
not.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");
const { PermissionFlagsBits } = require("discord.js");

class BanCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
      requiredClientPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
module.exports = {
  BanCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";
import { PermissionFlagsBits } from "discord.js";

export class BanCommand extends Command {
  constructor(context) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
      requiredClientPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
```

```typescript
import { Command } from "@sapphire/framework";
import { PermissionFlagsBits } from "discord.js";

export class BanCommand extends Command {
  public constructor(context: Command.LoaderContext) {
    super(context, {
      // ...
      requiredUserPermissions: [PermissionFlagsBits.BanMembers],
      requiredClientPermissions: [PermissionFlagsBits.BanMembers],
    });
  }
}
```

With these changes, `BanCommand` now requires the command executor _and_ the client to have the "Ban Members" permission
to execute!

tip

To learn how to send a message to the command executor when a precondition fails, see [Reporting Precondition\\
Failure](https://sapphirejs.dev/docs/Guide/preconditions/reporting-precondition-failure).

- [Handling Client Permissions](https://sapphirejs.dev/docs/Guide/preconditions/handling-permissions/#handling-client-permissions)
