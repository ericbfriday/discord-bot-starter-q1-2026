import {
  Events,
  Listener,
  type ChatInputCommandDeniedPayload,
  type UserError,
} from "@sapphire/framework";
import { MessageFlags } from "discord.js";

export class ChatInputCommandDeniedListener extends Listener<
  typeof Events.ChatInputCommandDenied
> {
  constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: Events.ChatInputCommandDenied,
    });
  }

  override run(
    error: UserError,
    { interaction }: ChatInputCommandDeniedPayload,
  ) {
    const isSilent = Reflect.get(
      Object(error.context) as Record<string, unknown>,
      "silent",
    ) as boolean;
    if (isSilent) return;

    const content = error.message;

    if (interaction.deferred || interaction.replied) {
      return interaction.editReply({ content });
    }
    return interaction.reply({ content, flags: MessageFlags.Ephemeral });
  }
}
