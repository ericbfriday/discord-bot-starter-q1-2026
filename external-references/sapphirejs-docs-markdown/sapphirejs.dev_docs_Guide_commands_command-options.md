[Skip to main content](https://sapphirejs.dev/docs/Guide/commands/command-options/#__docusaurus_skipToContent_fallback)

On this page

On this page we will cover the different options you can use when creating a [command](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command). For each option we will cover
what it does, how to use it, and what the default value is. As a reminder, a [Command](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) extends a Piece and therefore
inherits all of [Piece options](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceOptions).

note

For a full list of available options, refer to the [CommandOptions](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions) interface.

Without further ado, lets go over all of the available options:

## [`cooldownDelay`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldowndelay) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldowndelay "Direct link to cooldowndelay")

The time in milliseconds for the cooldown entries to reset, if set to a non-zero value alongside
[`cooldownLimit`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldownlimit), the `Cooldown` precondition will be added to the list.

## [`cooldownFilteredUsers`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldownfilteredusers) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownfilteredusers "Direct link to cooldownfilteredusers")

The users that are exempt from the Cooldown precondition. Use this to filter out someone like a bot owner

## [`cooldownLimit`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldownlimit) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownlimit "Direct link to cooldownlimit")

The amount of entries the cooldown can have before filling up, if set to a non-zero value alongside
[`cooldownDelay`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldowndelay), the `Cooldown` precondition will be added to the list.

## [`cooldownScope`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#cooldownscope) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownscope "Direct link to cooldownscope")

The scope of the cooldown entries. This has to use the enum [BucketScope](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/BucketScope). This can be used to set the scope of the
cooldown to for example the entire server, which will mean that a command cooldown applies to all members of that
server.

## [`description`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#description) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#description "Direct link to description")

A basic summary about the command.

## [`detailedDescription`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#detaileddescription) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#detaileddescription "Direct link to detaileddescription")

Longer version of command's summary and how to use it. You can leverage this to more information about a command such as
`usage`, `examples`, `extendedHelp`, etc. This can be useful for when writing a help command. If you would like to
include these custom properties you will have to module augment the
[`DetailedDescriptionCommandObject`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/DetailedDescriptionCommandObject) interface:

```typescript
declare module "@sapphire/framework" {
  export interface DetailedDescriptionCommandObject {
    usage: string;
    examples: string[];
    extendedHelp: string;
  }
}
```

Every time you now provide the `detailedDescription` option, you will have to provide all of the properties defined in
the module augmentation. You can then proceed to read these properties in your help command.

## [`flags`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#flags) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#flags "Direct link to flags")

The accepted flags. Flags are key-only identifiers that can be placed anywhere in the command. Two different types are
accepted:

- An array of strings, e.g. `['silent']`.
- A boolean defining whether the strategy should accept all keys (`true`) or none at all (`false`).

The default value of this option is `[]` (empty array)

For more information, see the [Using Flags page](https://sapphirejs.dev/docs/Guide/arguments/using-flags)

## [`fullCategory`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#fullcategory) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#fullcategory "Direct link to fullcategory")

warning

By default this property will get resolved based on the path that the command file is in and in many cases you do not
need to set this option. However, if for whatever reason you desire to customize the full category and not have it
depend on the folder structure, then you can set it here.

The full category for the command. Either an array of strings that denote every (sub)folder the command is in, or `null`
if it could not be resolved automatically.

## [`generateDashLessAliases`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#generatedashlessaliases) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#generatedashlessaliases "Direct link to generatedashlessaliases")

Whether to add aliases for commands without dashes in them. For example if the command name is `foo-bar` and this option
is set to true, then an alias of `foobar` will automatically be added.

## [`generateUnderscoreLessAliases`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#generateunderscorelessaliases) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#generateunderscorelessaliases "Direct link to generateunderscorelessaliases")

Whether to add aliases for commands without underscores in them. For example if the command name is `foo_bar` and this
option is set to true, then an alias of `foobar` will automatically be added.

## [`nsfw`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#nsfw) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#nsfw "Direct link to nsfw")

Sets whether the command should be treated as NSFW. If set to true, the `NSFW` precondition will be added to the list.
The `NSFW` precondition will throw an error if the command is ran in a non-NSFW channel.

## [`options`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#options) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#options "Direct link to options")

The accepted options. Options are key-value identifiers that can be placed anywhere in the command. Two different types
are accepted:

- An array of strings, e.g. \[`silent`\].
- A boolean defining whether the strategy should accept all keys (`true`) or none at all (`false`).

The default value of this option is `[]` (empty array)

For more information, see the [Using Options page](https://sapphirejs.dev/docs/Guide/arguments/using-options)

## [`preconditions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#preconditions) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#preconditions "Direct link to preconditions")

The [`Preconditions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#preconditions) to be run, accepts an array of their names.

## [`prefixes`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#prefixes) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#prefixes "Direct link to prefixes")

The available prefixes for both `flags` and `options`.

The default value is `['--', '-', '—']`.

## [`quotes`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#quotes) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#quotes "Direct link to quotes")

The quotes accepted by this command, pass `[]` to disable them.

The default value is:

```typescript
[\
  ['"', '"'], // Double quotes\
  ['“', '”'], // Fancy quotes (on iOS)\
  ['「', '」'], // Corner brackets (CJK)\
  ['«', '»'] // French quotes (guillemets)\
];
```

## [`requiredClientPermissions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#requiredclientpermissions) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#requiredclientpermissions "Direct link to requiredclientpermissions")

The permissions the bot client requires to execute this command. Think for example if you're about to send an embed,
then your bot needs the `EMBED_MESSAGES` permission. You can then add this option with the desired permission and
Sapphire will ensure the command code doesn't error and instead you'll get a precondition rejection. You can use the
[common-PermissionFlagsBits](https://discord-api-types.dev/api/discord-api-types-payloads/common#PermissionFlagsBits) enum to get the correct values.

## [`requiredUserPermissions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#requireduserpermissions) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#requireduserpermissions "Direct link to requireduserpermissions")

The permissions the user requires to execute this command. Think for example if you have a `ban` command, you'd only
want people with Administrator to use that. You can then add this option with the desired permission and Sapphire will
ensure the command code doesn't error and instead you'll get a precondition rejection. You can use the
[common-PermissionFlagsBits](https://discord-api-types.dev/api/discord-api-types-payloads/common#PermissionFlagsBits) enum to get the correct values.

## [`runIn`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#runin) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#runin "Direct link to runin")

The channel types in which this command can be ran.

## [`separators`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#separators) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#separators "Direct link to separators")

The separators for options (i.e. what separates the key from the value).

The default values are `['=', ':']`. This allows for both `--key=value` and `--key:value` to be valid.

## [`typing`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions#typing) [​](https://sapphirejs.dev/docs/Guide/commands/command-options/#typing "Direct link to typing")

If the `typing` option on your client is true, it can be overridden for a specific command using this property, set via
its options. Otherwise, this property will be ignored.

- [cooldownDelay](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldowndelay)
- [cooldownFilteredUsers](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownfilteredusers)
- [cooldownLimit](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownlimit)
- [cooldownScope](https://sapphirejs.dev/docs/Guide/commands/command-options/#cooldownscope)
- [description](https://sapphirejs.dev/docs/Guide/commands/command-options/#description)
- [detailedDescription](https://sapphirejs.dev/docs/Guide/commands/command-options/#detaileddescription)
- [flags](https://sapphirejs.dev/docs/Guide/commands/command-options/#flags)
- [fullCategory](https://sapphirejs.dev/docs/Guide/commands/command-options/#fullcategory)
- [generateDashLessAliases](https://sapphirejs.dev/docs/Guide/commands/command-options/#generatedashlessaliases)
- [generateUnderscoreLessAliases](https://sapphirejs.dev/docs/Guide/commands/command-options/#generateunderscorelessaliases)
- [nsfw](https://sapphirejs.dev/docs/Guide/commands/command-options/#nsfw)
- [options](https://sapphirejs.dev/docs/Guide/commands/command-options/#options)
- [preconditions](https://sapphirejs.dev/docs/Guide/commands/command-options/#preconditions)
- [prefixes](https://sapphirejs.dev/docs/Guide/commands/command-options/#prefixes)
- [quotes](https://sapphirejs.dev/docs/Guide/commands/command-options/#quotes)
- [requiredClientPermissions](https://sapphirejs.dev/docs/Guide/commands/command-options/#requiredclientpermissions)
- [requiredUserPermissions](https://sapphirejs.dev/docs/Guide/commands/command-options/#requireduserpermissions)
- [runIn](https://sapphirejs.dev/docs/Guide/commands/command-options/#runin)
- [separators](https://sapphirejs.dev/docs/Guide/commands/command-options/#separators)
- [typing](https://sapphirejs.dev/docs/Guide/commands/command-options/#typing)
