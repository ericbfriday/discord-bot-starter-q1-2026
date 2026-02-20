import { BucketScope } from "@sapphire/framework";
import { Subcommand } from "@sapphire/plugin-subcommands";
import { EmbedBuilder, MessageFlags } from "discord.js";
import type { AIProxyResponse } from "../../lib/ai-client.js";
import { callAIProxy } from "../../lib/ai-client.js";
import { getPersona, getPersonaChoices, PERSONAS } from "../../lib/personas.js";

export class PersonaCommand extends Subcommand {
  constructor(context: Subcommand.LoaderContext, options: Subcommand.Options) {
    super(context, {
      ...options,
      name: "persona",
      description: "Get AI persona replies",
      cooldownDelay: 10_000,
      cooldownLimit: 2,
      cooldownScope: BucketScope.User,
      requiredClientPermissions: ["SendMessages", "EmbedLinks"],
      subcommands: [
        { name: "reply", chatInputRun: "chatInputReply" },
        { name: "ask", chatInputRun: "chatInputAsk" },
        { name: "list", chatInputRun: "chatInputList" },
      ],
    });
  }

  override registerApplicationCommands(registry: Subcommand.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName("persona")
        .setDescription("Get AI persona replies")
        .addSubcommand((sub) =>
          sub
            .setName("reply")
            .setDescription(
              "Have a persona reply to the last message in this channel",
            )
            .addStringOption((option) =>
              option
                .setName("persona")
                .setDescription("Which persona should reply")
                .setRequired(true)
                .addChoices(...getPersonaChoices()),
            )
            .addStringOption((option) =>
              option
                .setName("context")
                .setDescription(
                  "Additional context or direction for the persona",
                )
                .setRequired(false)
                .setMaxLength(500),
            ),
        )
        .addSubcommand((sub) =>
          sub
            .setName("ask")
            .setDescription("Ask a persona a direct question")
            .addStringOption((option) =>
              option
                .setName("persona")
                .setDescription("Which persona to ask")
                .setRequired(true)
                .addChoices(...getPersonaChoices()),
            )
            .addStringOption((option) =>
              option
                .setName("question")
                .setDescription("Your question for the persona")
                .setRequired(true)
                .setMaxLength(1000),
            ),
        )
        .addSubcommand((sub) =>
          sub.setName("list").setDescription("List all available personas"),
        ),
    );
  }

  /**
   * /persona reply [persona] [context?]
   * Fetches the last few messages in the channel and has the persona respond.
   */
  async chatInputReply(interaction: Subcommand.ChatInputCommandInteraction) {
    const personaId = interaction.options.getString("persona", true);
    const extraContext = interaction.options.getString("context");
    const persona = getPersona(personaId);

    if (!persona) {
      return interaction.reply({
        content:
          "Unknown persona. Use `/persona list` to see available options.",
        flags: MessageFlags.Ephemeral,
      });
    }

    await interaction.deferReply();

    // Fetch the last 5 messages in the channel for context
    const channel = interaction.channel;
    if (!channel || !("messages" in channel)) {
      return interaction.editReply({
        content: "This command can only be used in a text channel.",
      });
    }

    let contextMessages: string;
    try {
      const messages = await channel.messages.fetch({ limit: 5 });
      const sorted = [...messages.values()].reverse(); // oldest first
      contextMessages = sorted
        .map(
          (m) =>
            `${m.author.displayName}: ${m.content || "(embed/attachment)"}`,
        )
        .join("\n");
    } catch {
      contextMessages = "(Could not fetch channel messages)";
    }

    const prompt = extraContext
      ? `Here is the recent conversation in this Discord channel:\n\n${contextMessages}\n\nAdditional context: ${extraContext}\n\nPlease respond to this conversation in character.`
      : `Here is the recent conversation in this Discord channel:\n\n${contextMessages}\n\nPlease respond to this conversation in character.`;

    const result: AIProxyResponse = await callAIProxy({
      type: "chat",
      userId: interaction.user.id,
      prompt,
      systemPrompt: persona.systemPrompt,
    });

    if (!result.success) {
      return interaction.editReply({
        content: result.error ?? "Failed to get a response. Please try again.",
      });
    }

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `${persona.emoji} ${persona.name}`,
      })
      .setDescription(result.text ?? "(No response)")
      .setColor(persona.color)
      .setFooter({
        text: `Summoned by ${interaction.user.displayName}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

    return interaction.editReply({ embeds: [embed] });
  }

  /**
   * /persona ask [persona] [question]
   * Sends a direct question to a persona.
   */
  async chatInputAsk(interaction: Subcommand.ChatInputCommandInteraction) {
    const personaId = interaction.options.getString("persona", true);
    const question = interaction.options.getString("question", true);
    const persona = getPersona(personaId);

    if (!persona) {
      return interaction.reply({
        content:
          "Unknown persona. Use `/persona list` to see available options.",
        flags: MessageFlags.Ephemeral,
      });
    }

    await interaction.deferReply();

    const result: AIProxyResponse = await callAIProxy({
      type: "chat",
      userId: interaction.user.id,
      prompt: question,
      systemPrompt: persona.systemPrompt,
    });

    if (!result.success) {
      return interaction.editReply({
        content: result.error ?? "Failed to get a response. Please try again.",
      });
    }

    const embed = new EmbedBuilder()
      .setAuthor({
        name: `${persona.emoji} ${persona.name}`,
      })
      .setDescription(result.text ?? "(No response)")
      .setColor(persona.color)
      .addFields({
        name: "Question",
        value:
          question.length > 200 ? `${question.substring(0, 200)}...` : question,
      })
      .setFooter({
        text: `Asked by ${interaction.user.displayName}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

    return interaction.editReply({ embeds: [embed] });
  }

  /**
   * /persona list
   * Shows all available personas with descriptions.
   */
  async chatInputList(interaction: Subcommand.ChatInputCommandInteraction) {
    const embed = new EmbedBuilder()
      .setTitle("Available Personas")
      .setDescription(
        "Use `/persona ask` to ask a question or `/persona reply` to have a persona comment on the conversation.",
      )
      .setColor(0x5865f2)
      .addFields(
        PERSONAS.map((p) => ({
          name: `${p.emoji} ${p.name}`,
          value: p.description,
          inline: true,
        })),
      )
      .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  }
}
