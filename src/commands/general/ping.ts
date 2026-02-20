import { Command } from "@sapphire/framework";
import { Stopwatch } from "@sapphire/stopwatch";

export class PingCommand extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: "ping",
      description: "Check the bot's latency",
    });
  }

  override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder.setName("ping").setDescription("Check the bot's latency"),
    );
  }

  override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    const stopwatch = new Stopwatch();
    await interaction.reply("Pinging...");
    const roundtrip = stopwatch.stop().toString();
    const wsLatency = Math.round(this.container.client.ws.ping);

    return interaction.editReply(
      `Pong! Round-trip: ${roundtrip} | WebSocket: ${String(wsLatency)}ms`,
    );
  }
}
