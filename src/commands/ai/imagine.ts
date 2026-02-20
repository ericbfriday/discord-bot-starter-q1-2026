import { BucketScope, Command } from "@sapphire/framework";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";
import type { AIProxyResponse } from "../../lib/ai-client.js";
import { callAIProxy } from "../../lib/ai-client.js";

const ASPECT_RATIO_CHOICES = [
  { name: "Square (1:1)", value: "1:1" },
  { name: "Landscape (16:9)", value: "16:9" },
  { name: "Portrait (9:16)", value: "9:16" },
  { name: "Photo (4:3)", value: "4:3" },
  { name: "Photo Portrait (3:4)", value: "3:4" },
  { name: "Ultrawide (21:9)", value: "21:9" },
] as const;

const MODEL_CHOICES = [
  { name: "Flash (fast, cheap)", value: "google/gemini-2.5-flash-image" },
  { name: "Pro (high quality)", value: "google/gemini-3-pro-image-preview" },
] as const;

export class ImagineCommand extends Command {
  constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: "imagine",
      description: "Generate an AI image from a text prompt",
      cooldownDelay: 15_000,
      cooldownLimit: 1,
      cooldownScope: BucketScope.User,
      requiredClientPermissions: ["SendMessages", "EmbedLinks", "AttachFiles"],
    });
  }

  override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName("imagine")
        .setDescription("Generate an AI image from a text prompt")
        .addStringOption((option) =>
          option
            .setName("prompt")
            .setDescription("Describe the image you want to generate")
            .setRequired(true)
            .setMaxLength(1000),
        )
        .addStringOption((option) =>
          option
            .setName("aspect-ratio")
            .setDescription("Image aspect ratio (default: square)")
            .setRequired(false)
            .addChoices(...ASPECT_RATIO_CHOICES),
        )
        .addStringOption((option) =>
          option
            .setName("model")
            .setDescription("AI model to use (default: Flash)")
            .setRequired(false)
            .addChoices(...MODEL_CHOICES),
        ),
    );
  }

  override async chatInputRun(
    interaction: Command.ChatInputCommandInteraction,
  ) {
    const prompt = interaction.options.getString("prompt", true);
    const aspectRatio = interaction.options.getString("aspect-ratio") ?? "1:1";
    const model = interaction.options.getString("model") ?? undefined;

    // Defer immediately — image gen takes 5-30 seconds
    await interaction.deferReply();

    const result: AIProxyResponse = await callAIProxy({
      type: "image",
      userId: interaction.user.id,
      prompt,
      model,
      imageConfig: {
        aspectRatio,
        imageSize: "1K",
      },
    });

    // Handle errors
    if (!result.success) {
      return interaction.editReply({
        content: result.error ?? "Failed to generate image.",
      });
    }

    // Extract the first image
    if (!result.images || result.images.length === 0) {
      return interaction.editReply({
        content: "The AI did not return an image. Try rephrasing your prompt.",
      });
    }

    const base64Url = result.images[0];
    const base64Data = base64Url.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const attachment = new AttachmentBuilder(buffer, {
      name: "imagine.png",
      description: prompt.substring(0, 100),
    });

    const embed = new EmbedBuilder()
      .setTitle("Generated Image")
      .setDescription(
        prompt.length > 200 ? `${prompt.substring(0, 200)}...` : prompt,
      )
      .setImage("attachment://imagine.png")
      .setColor(0x00cc88)
      .setFooter({
        text: `Requested by ${interaction.user.displayName}${result.cached ? " (cached)" : ""}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

    return interaction.editReply({
      embeds: [embed],
      files: [attachment],
    });
  }
}
