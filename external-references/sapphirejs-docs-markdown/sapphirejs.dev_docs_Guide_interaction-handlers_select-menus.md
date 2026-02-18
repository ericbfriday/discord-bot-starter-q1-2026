[Skip to main content](https://sapphirejs.dev/docs/Guide/interaction-handlers/select-menus/#__docusaurus_skipToContent_fallback)

Select menus are components that let you...select values (name speaks for itself doesn't it 😄). You can configure them
to either allow only one value or multiple values, as well as what kind of select menu it should be.

Here's a simple example that will echo the value the user selected back to them:

- CommonJS
- ESM
- TypeScript

```typescript
const {
  InteractionHandler,
  InteractionHandlerTypes,
} = require("@sapphire/framework");

class MenuHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.SelectMenu,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-echo-select") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      // Remember how we can have multiple values? Let's get the first one!
      content: `You selected: ${interaction.values[0]}`,
    });
  }
}
module.exports = {
  MenuHandler,
};
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";

export class MenuHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.SelectMenu,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-echo-select") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      // Remember how we can have multiple values? Let's get the first one!
      content: `You selected: ${interaction.values[0]}`,
    });
  }
}
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import type { StringSelectMenuInteraction } from "discord.js";

export class MenuHandler extends InteractionHandler {
  public constructor(
    ctx: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.SelectMenu,
    });
  }

  public override parse(interaction: StringSelectMenuInteraction) {
    if (interaction.customId !== "my-echo-select") return this.none();

    return this.some();
  }

  public async run(interaction: StringSelectMenuInteraction) {
    await interaction.reply({
      // Remember how we can have multiple values? Let's get the first one!
      content: `You selected: ${interaction.values[0]}`,
    });
  }
}
```
