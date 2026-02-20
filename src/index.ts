import { container, SapphireClient } from "@sapphire/framework";
import "@sapphire/plugin-logger/register";
import { GatewayIntentBits } from "discord.js";

const token = process.env.DISCORD_TOKEN;
if (!token) throw new Error("DISCORD_TOKEN environment variable is not set.");

try {
  const client = new SapphireClient({
    baseUserDirectory: import.meta.dirname,
    loadMessageCommandListeners: true,
    intents: [
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ],
  });

  await client.login(token);
} catch (err) {
  container.logger.error("Failed to login:", err);
  process.exitCode = 1;
}
