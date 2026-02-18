[Skip to main content](https://sapphirejs.dev/docs/Guide/interaction-handlers/modals/#__docusaurus_skipToContent_fallback)

Modals are like your annoying pop-ups, but cooler! These interactions will display a pop-up window on the user's client,
which when submitted, will fire this event. The great thing about modals is that they're going to be handled just like
any other interaction!

warning

There is no way to determine if or how the user closed the modal.

- CommonJS
- ESM
- TypeScript

```typescript
const {
  InteractionHandler,
  InteractionHandlerTypes,
} = require("@sapphire/framework");
const { MessageFlags } = require("discord.js");

class ModalHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.ModalSubmit,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "hello-popup") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      content: "Thank you for submitting the form!",
      flags: MessageFlags.Ephemeral,
    });
  }
}
module.exports = {
  ModalHandler,
};
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ModalHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.ModalSubmit,
    });
  }

  parse(interaction) {
    if (interaction.customId !== "hello-popup") return this.none();

    return this.some();
  }

  async run(interaction) {
    await interaction.reply({
      content: "Thank you for submitting the form!",
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
import type { ModalSubmitInteraction } from "discord.js";

export class ModalHandler extends InteractionHandler {
  public constructor(
    ctx: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.ModalSubmit,
    });
  }

  public override parse(interaction: ModalSubmitInteraction) {
    if (interaction.customId !== "hello-popup") return this.none();

    return this.some();
  }

  public async run(interaction: ModalSubmitInteraction) {
    await interaction.reply({
      content: "Thank you for submitting the form!",
      flags: MessageFlags.Ephemeral,
    });
  }
}
```
