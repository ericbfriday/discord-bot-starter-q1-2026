[Skip to main content](https://sapphirejs.dev/docs/Guide/interaction-handlers/message-components/#__docusaurus_skipToContent_fallback)

Setting the [`InteractionHandlerTypes`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/InteractionHandlerTypes) option [`MessageComponent`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/InteractionHandlerTypes) will have
this [`InteractionHandler`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/InteractionHandler) trigger for both [`SelectMenus`](https://sapphirejs.dev/docs/Guide/interaction-handlers/select-menus) and
[`Buttons`](https://sapphirejs.dev/docs/Guide/interaction-handlers/buttons).

Here's a simple example:

- CommonJS
- ESM
- TypeScript

```typescript
const {
  InteractionHandler,
  InteractionHandlerTypes,
} = require("@sapphire/framework");

class MessageComponentHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.MessageComponent,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-echo-button-or-select") return this.none();

    return this.some();
  }

  async run(interaction) {
    if (interaction.isButton()) {
      await interaction.reply({
        content: `You clicked a button`,
      });
    } else {
      await interaction.reply({
        // Remember how we can have multiple values? Let's get the first one!
        content: `You selected: ${interaction.values[0]}`,
      });
    }
  }
}
module.exports = {
  MessageComponentHandler,
};
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";

export class MessageComponentHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.MessageComponent,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-echo-button-or-select") return this.none();

    return this.some();
  }

  async run(interaction) {
    if (interaction.isButton()) {
      await interaction.reply({
        content: `You clicked a button`,
      });
    } else {
      await interaction.reply({
        // Remember how we can have multiple values? Let's get the first one!
        content: `You selected: ${interaction.values[0]}`,
      });
    }
  }
}
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import type {
  StringSelectMenuInteraction,
  ButtonInteraction,
} from "discord.js";

export class MessageComponentHandler extends InteractionHandler {
  public constructor(
    ctx: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.MessageComponent,
    });
  }

  public override parse(
    interaction: ButtonInteraction | StringSelectMenuInteraction,
  ) {
    if (interaction.customId !== "my-echo-button-or-select") return this.none();

    return this.some();
  }

  public async run(
    interaction: ButtonInteraction | StringSelectMenuInteraction,
  ) {
    if (interaction.isButton()) {
      await interaction.reply({
        content: `You clicked a button`,
      });
    } else {
      await interaction.reply({
        // Remember how we can have multiple values? Let's get the first one!
        content: `You selected: ${interaction.values[0]}`,
      });
    }
  }
}
```
