[Skip to main content](https://sapphirejs.dev/docs/Guide/interaction-handlers/buttons/#__docusaurus_skipToContent_fallback)

Buttons are components that are clickable. You will recieve an interaction for every click of a button! Here's an
example which will respond with an ephemeral message on each click:

- CommonJS
- ESM
- TypeScript

```typescript
const {
  InteractionHandler,
  InteractionHandlerTypes,
} = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ButtonHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Button,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-awesome-button") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      content: "Hello from a button interaction handler!",
      // Let's make it so only the person who pressed the button can see this message!
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ButtonHandler,
};
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ButtonHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Button,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "my-awesome-button") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      content: "Hello from a button interaction handler!",
      // Let's make it so only the person who pressed the button can see this message!
      flags: MessageFlags.Ephemeral,
    });
  }
}
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";
import type { ButtonInteraction } from "discord.js";

export class ButtonHandler extends InteractionHandler {
  public constructor(
    ctx: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Button,
    });
  }

  public override parse(interaction: ButtonInteraction) {
    if (interaction.customId !== "my-awesome-button") return this.none();

    return this.some();
  }

  public async run(interaction: ButtonInteraction) {
    await interaction.reply({
      content: "Hello from a button interaction handler!",
      // Let's make it so only the person who pressed the button can see this message!
      flags: MessageFlags.Ephemeral,
    });
  }
}
```
