[Skip to main content](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#__docusaurus_skipToContent_fallback)

On this page

Certain Chat Input Command options can be autocompleted based on what the user has written. There are two ways you can
create an autocomplete interaction handler. The first way is by creating `Piece` that extends
[`InteractionHandler`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/InteractionHandler) and the second way is by implementing the
[`autocompleteRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#autocompleterun) method.

warning

You cannot defer auto-completes (that would be silly)! You **must** respond to the interaction within **3 seconds**.

## Interaction Handler [​](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#interaction-handler "Direct link to Interaction Handler")

This is no different than the rest - extend the [`InteractionHandler`](https://sapphirejs.dev/docs/Guide/interaction-handlers/what-are-they) class and give it a `parse`
and `run` method. Note here that you have access to `<AutocompleteInteraction>.commandName` or
`<AutocompleteInteraction>.commandId` to differentiate the command the user is using.

You will also want to ensure that your option has been configured for autocompletion with: `.setAutocomplete(true)`.

Example:

- CommonJS
- ESM
- TypeScript

```typescript
const {
  InteractionHandler,
  InteractionHandlerTypes,
} = require("@sapphire/framework");

class AutocompleteHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Autocomplete,
    });
  }

  async run(interaction, result) {
    return interaction.respond(result);
  }

  async parse(interaction) {
    // Only run this interaction for the command with ID '1000802763292020737'
    if (interaction.commandId !== "1000802763292020737") return this.none();

    // Get the focussed (current) option
    const focusedOption = interaction.options.getFocused(true);

    // Ensure that the option name is one that can be autocompleted, or return none if not.
    switch (focusedOption.name) {
      case "search": {
        // Search your API or similar. This is example code!
        const searchResult = await myApi.searchForSomething(
          focusedOption.value,
        );

        // Map the search results to the structure required for Autocomplete
        return this.some(
          searchResult.map((match) => ({ name: match.name, value: match.key })),
        );
      }
      default:
        return this.none();
    }
  }
}
module.exports = {
  AutocompleteHandler,
};
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";

export class AutocompleteHandler extends InteractionHandler {
  constructor(ctx, options) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Autocomplete,
    });
  }

  async run(interaction, result) {
    return interaction.respond(result);
  }

  async parse(interaction) {
    // Only run this interaction for the command with ID '1000802763292020737'
    if (interaction.commandId !== "1000802763292020737") return this.none();

    // Get the focussed (current) option
    const focusedOption = interaction.options.getFocused(true);

    // Ensure that the option name is one that can be autocompleted, or return none if not.
    switch (focusedOption.name) {
      case "search": {
        // Search your API or similar. This is example code!
        const searchResult = await myApi.searchForSomething(
          focusedOption.value,
        );

        // Map the search results to the structure required for Autocomplete
        return this.some(
          searchResult.map((match) => ({ name: match.name, value: match.key })),
        );
      }
      default:
        return this.none();
    }
  }
}
```

```typescript
import {
  InteractionHandler,
  InteractionHandlerTypes,
} from "@sapphire/framework";
import type { AutocompleteInteraction } from "discord.js";

export class AutocompleteHandler extends InteractionHandler {
  public constructor(
    ctx: InteractionHandler.LoaderContext,
    options: InteractionHandler.Options,
  ) {
    super(ctx, {
      ...options,
      interactionHandlerType: InteractionHandlerTypes.Autocomplete,
    });
  }

  public override async run(
    interaction: AutocompleteInteraction,
    result: InteractionHandler.ParseResult<this>,
  ) {
    return interaction.respond(result);
  }

  public override async parse(interaction: AutocompleteInteraction) {
    // Only run this interaction for the command with ID '1000802763292020737'
    if (interaction.commandId !== "1000802763292020737") return this.none();

    // Get the focussed (current) option
    const focusedOption = interaction.options.getFocused(true);

    // Ensure that the option name is one that can be autocompleted, or return none if not.
    switch (focusedOption.name) {
      case "search": {
        // Search your API or similar. This is example code!
        const searchResult = await myApi.searchForSomething(
          focusedOption.value as string,
        );

        // Map the search results to the structure required for Autocomplete
        return this.some(
          searchResult.map((match) => ({ name: match.name, value: match.key })),
        );
      }
      default:
        return this.none();
    }
  }
}
```

## Autocomplete run method [​](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#autocomplete-run-method "Direct link to Autocomplete run method")

Sapphire will first attempt to find the command class for which the autocomplete is for, and if it exists _and_ it has
the `autocompleteRun` method set, call it, otherwise we pass it down to interaction handlers. It's the best of both
worlds, and lets you decide which is better for your projects.

The downside of using `autocompleteRun` is if you have multiple commands that have a similar option and use the same
autocomplete you would be duplicating code. In this case using an [`InteractionHandler`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/InteractionHandler) would
likely be better. Of course there are other ways to get around code duplication in this situation and how you want to go
about it is entirely up to you.

## Emitted events [​](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#emitted-events "Direct link to Emitted events")

If an autocomplete interaction runs through [`autocompleteRun`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#autocompleterun), you will get a
`CommandAutocompleteInteractionSuccess` (`commandAutocompleteInteractionSuccess`) event if it successfully runs, or a
`CommandAutocompleteInteractionError` (`commandAutocompleteInteractionError`) event if it errors.

If the autocomplete interaction runs via [`InteractionHandler`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/InteractionHandler), you will receive errors in the
`InteractionHandlerError` (`interactionHandlerError`) event.

- [Interaction Handler](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#interaction-handler)
- [Autocomplete run method](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#autocomplete-run-method)
- [Emitted events](https://sapphirejs.dev/docs/Guide/interaction-handlers/autocomplete/#emitted-events)
