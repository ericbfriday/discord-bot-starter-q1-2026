[Skip to main content](https://sapphirejs.dev/docs/Guide/arguments/built-in-arguments/#__docusaurus_skipToContent_fallback)

tip

These can be used anytime with the `Args` class, and can be accessed via `container.stores.get('arguments')`.

Overriding

If you define an `Argument` with the same name as a built-in one, e.g. [`boolean` ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean), the one you define will
replace the built-in one. This applies to all other stores from the framework and plugins.

To facilitate creating commands and getting your bot running, Sapphire bundles a large set of argument resolvers.

- `boolean`: Resolves to a [`boolean` ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) value.
- `channel`: Resolves to a [`Channel` ↗️](https://discord.js.org/docs/packages/discord.js/main/BaseChannel:Class) instance, given a channel name, mention or ID.
- `date`: Resolves to a [`Date` ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance, given a valid date format. For a list of valid date formats see
  [Several ways to create a Date object on MDN ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#several_ways_to_create_a_date_object)
- `dmChannel`: Resolves to a [`DMChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/DMChannel:Class) instance, given a DM channel ID or user's ID.
- `emoji`: Resolves to an [`EmojiObject`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/EmojiObject). The `id` is `null` for Twemojis.
- `float` / `number`: Resolves to any number.
- `guild`: Resolves to a [`Guild` ↗️](https://discord.js.org/docs/packages/discord.js/main/Guild:Class) instance, given ID.
- `guildCategoryChannel`: Resolves to a [`CategoryChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/CategoryChannel:Class) instance, given a category channel name,
  mention or ID.
- `guildChannel`: Resolves to a [`GuildChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/GuildChannel:Class) or a [`ThreadChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class) instance,
  given a channel name, mention or ID.
- `guildNewsChannel`: Resolves to a [`NewsChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/NewsChannel:Class) instance, given a news channel name, mention or ID.
- `guildNewsThreadChannel`: Resolves to a [`ThreadChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class) instance of type `GUILD_NEWS_THREAD`,
  given a thread channel name, mention or ID.
- `guildPrivateThreadChannel`: Resolves to a [`ThreadChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class) instance of type
  `GUILD_PRIVATE_THREAD`, given a thread channel name, mention or ID.
- `guildPublicThreadChannel`: Resolves to a [`ThreadChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class) instance of type `GUILD_PUBLIC_THREAD`,
  given a thread channel name, mention or ID.
- `guildStageVoiceChannel`: Resolves to a [`StageChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/StageChannel:Class) instance, given a stage voice channel name,
  mention or ID.
- `guildTextChannel`: Resolves to a [`TextChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/TextChannel:Class) instance, given a text channel name, mention or ID.
- `guildThreadChannel`: Resolves to a [`ThreadChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/ThreadChannel:Class) instance, given a thread channel name, mention
  or ID.
- `guildVoiceChannel`: Resolves to a [`VoiceChannel` ↗️](https://discord.js.org/docs/packages/discord.js/main/VoiceChannel:Class) instance, given a voice channel name, mention or
  ID.
- `hyperlink` / `url`: Resolves to a [`URL` ↗️](https://nodejs.org/api/url.html) instance, given a valid URL.
- `integer`: Resolves to a safe integer.
- `member`: Resolves to a [`GuildMember` ↗️](https://discord.js.org/docs/packages/discord.js/main/GuildMember:Class) instance, given a member name, mention or ID.
- `message`: Resolves to a [`Message` ↗️](https://discord.js.org/docs/packages/discord.js/main/Message:Class) instance, given a message link or ID.
- `partialDMChannel`: Resolves to a `PartialDMChannel` instance, given a DM channel ID or user's ID.
- `role`: Resolves to a [`Role` ↗️](https://discord.js.org/docs/packages/discord.js/main/Role:Class) instance, given a role name, mention or ID.
- `string`: Resolves to a string containing the parameter.
- `user`: Resolves to a [`User` ↗️](https://discord.js.org/docs/packages/discord.js/main/User:Class) instance, given a user mention or ID.
- `enum`: Resolves to a string if it occurs within the [`array` ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of possible items that is passed as an option
  (`enum`).
