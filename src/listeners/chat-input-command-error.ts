import {
  Events,
  Listener,
  type ChatInputCommandErrorPayload,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ChatInputCommandErrorListener extends Listener<
  typeof Events.ChatInputCommandError
> {
  constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: Events.ChatInputCommandError,
    });
  }

  override run(
    error: Error,
    { interaction, command }: ChatInputCommandErrorPayload,
  ) {
    this.container.logger.error(`Error in command "${command.name}":`, error);

    const content = "An unexpected error occurred. Please try again later.";

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({ content });
    }
    return interaction.reply({ content, flags: MessageFlags.Ephemeral });
  }
}
