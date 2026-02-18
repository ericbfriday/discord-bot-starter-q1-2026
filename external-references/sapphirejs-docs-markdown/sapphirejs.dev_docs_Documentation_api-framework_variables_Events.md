[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#__docusaurus_skipToContent_fallback)

On this page

> `const` **Events**: `object`

Defined in: [projects/framework/src/lib/types/Events.ts:27](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/Events.ts#L27)

## Type Declaration [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#type-declaration "Direct link to Type Declaration")

### ApplicationCommandPermissionsUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandpermissionsupdate "Direct link to ApplicationCommandPermissionsUpdate")

> `readonly` **ApplicationCommandPermissionsUpdate**: `ApplicationCommandPermissionsUpdate`

### ApplicationCommandRegistriesBulkOverwriteError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesbulkoverwriteerror "Direct link to ApplicationCommandRegistriesBulkOverwriteError")

> `readonly` **ApplicationCommandRegistriesBulkOverwriteError**: `"applicationCommandRegistriesBulkOverwriteError"`

Emitted when an error is encountered when handling the command registries in bulk overwrite mode.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-1 "Direct link to Param")

The guild id where the error was thrown

### ApplicationCommandRegistriesInitialising [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesinitialising "Direct link to ApplicationCommandRegistriesInitialising")

> `readonly` **ApplicationCommandRegistriesInitialising**: `"applicationCommandRegistriesInitialising"`

Emitted when the application command registries are being initialized.

### ApplicationCommandRegistriesRegistered [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesregistered "Direct link to ApplicationCommandRegistriesRegistered")

> `readonly` **ApplicationCommandRegistriesRegistered**: `"applicationCommandRegistriesRegistered"`

Emitted once the application command registries have been initialized.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-2 "Direct link to Param")

The initialised registries

### AutoModerationActionExecution [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationactionexecution "Direct link to AutoModerationActionExecution")

> `readonly` **AutoModerationActionExecution**: `AutoModerationActionExecution`

### AutoModerationRuleCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationrulecreate "Direct link to AutoModerationRuleCreate")

> `readonly` **AutoModerationRuleCreate**: `AutoModerationRuleCreate`

### AutoModerationRuleDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationruledelete "Direct link to AutoModerationRuleDelete")

> `readonly` **AutoModerationRuleDelete**: `AutoModerationRuleDelete`

### AutoModerationRuleUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationruleupdate "Direct link to AutoModerationRuleUpdate")

> `readonly` **AutoModerationRuleUpdate**: `AutoModerationRuleUpdate`

### CacheSweep [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#cachesweep "Direct link to CacheSweep")

> `readonly` **CacheSweep**: `CacheSweep`

### ChannelCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelcreate "Direct link to ChannelCreate")

> `readonly` **ChannelCreate**: `ChannelCreate`

### ChannelDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channeldelete "Direct link to ChannelDelete")

> `readonly` **ChannelDelete**: `ChannelDelete`

### ChannelPinsUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelpinsupdate "Direct link to ChannelPinsUpdate")

> `readonly` **ChannelPinsUpdate**: `ChannelPinsUpdate`

### ChannelUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelupdate "Direct link to ChannelUpdate")

> `readonly` **ChannelUpdate**: `ChannelUpdate`

### ChatInputCommandAccepted [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandaccepted "Direct link to ChatInputCommandAccepted")

> `readonly` **ChatInputCommandAccepted**: `"chatInputCommandAccepted"`

Emitted when a chat input command passes all precondition checks, if any.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-3 "Direct link to Param")

The contextual payload

### ChatInputCommandDenied [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommanddenied "Direct link to ChatInputCommandDenied")

> `readonly` **ChatInputCommandDenied**: `"chatInputCommandDenied"`

Emitted when a precondition denies a chat input command from being run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-4 "Direct link to Param")

The error reported by the precondition

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-5 "Direct link to Param")

The contextual payload

### ChatInputCommandError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommanderror "Direct link to ChatInputCommandError")

> `readonly` **ChatInputCommandError**: `"chatInputCommandError"`

Emitted after a chat input command runs unsuccesfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-6 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-7 "Direct link to Param")

The contextual payload

### ChatInputCommandFinish [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandfinish "Direct link to ChatInputCommandFinish")

> `readonly` **ChatInputCommandFinish**: `"chatInputCommandFinish"`

Emitted directly after a chat input command finished running, regardless of the outcome.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-8 "Direct link to Param")

The interaction that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-9 "Direct link to Param")

The command that finished running

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-10 "Direct link to Param")

The contextual payload

### ChatInputCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandrun "Direct link to ChatInputCommandRun")

> `readonly` **ChatInputCommandRun**: `"chatInputCommandRun"`

Emitted directly before a chat input command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-11 "Direct link to Param")

The interaction that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-12 "Direct link to Param")

The command that is being run

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-13 "Direct link to Param")

The contextual payload

### ChatInputCommandSuccess [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandsuccess "Direct link to ChatInputCommandSuccess")

> `readonly` **ChatInputCommandSuccess**: `"chatInputCommandSuccess"`

Emitted after a chat input command runs successfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-14 "Direct link to Param")

The contextual payload

### ClientReady [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#clientready "Direct link to ClientReady")

> `readonly` **ClientReady**: `ClientReady`

### CommandApplicationCommandRegistryError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandapplicationcommandregistryerror "Direct link to CommandApplicationCommandRegistryError")

> `readonly` **CommandApplicationCommandRegistryError**: `"commandApplicationCommandRegistryError"`

Emitted when an error is encountered when handling the command application command registry.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-15 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-16 "Direct link to Param")

The command whose registry caused the error

### CommandAutocompleteInteractionError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandautocompleteinteractionerror "Direct link to CommandAutocompleteInteractionError")

> `readonly` **CommandAutocompleteInteractionError**: `"commandAutocompleteInteractionError"`

Emitted when an error is encountered when executing an autocomplete interaction handler.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-17 "Direct link to Param")

The error that was encountered

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-18 "Direct link to Param")

The contextual payload

### CommandAutocompleteInteractionSuccess [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandautocompleteinteractionsuccess "Direct link to CommandAutocompleteInteractionSuccess")

> `readonly` **CommandAutocompleteInteractionSuccess**: `"commandAutocompleteInteractionSuccess"`

Emitted after an autocomplete interaction handler runs successfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-19 "Direct link to Param")

The contextual payload

### CommandDoesNotHaveChatInputCommandHandler [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavechatinputcommandhandler "Direct link to CommandDoesNotHaveChatInputCommandHandler")

> `readonly` **CommandDoesNotHaveChatInputCommandHandler**: `"commandDoesNotHaveChatInputCommandHandler"`

Emitted when a chat input command is executed but a `chatInputRun` method is not found.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-20 "Direct link to Param")

The contextual payload

### CommandDoesNotHaveContextMenuCommandHandler [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavecontextmenucommandhandler "Direct link to CommandDoesNotHaveContextMenuCommandHandler")

> `readonly` **CommandDoesNotHaveContextMenuCommandHandler**: `"commandDoesNotHaveContextMenuCommandHandler"`

Emitted when a chat input command is executed but a `contextMenuRun` method is not found.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-21 "Direct link to Param")

The contextual payload

### CommandDoesNotHaveMessageCommandHandler [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavemessagecommandhandler "Direct link to CommandDoesNotHaveMessageCommandHandler")

> `readonly` **CommandDoesNotHaveMessageCommandHandler**: `"commandDoesNotHaveMessageCommandHandler"`

Emitted when a message command is executed but a `messageRun` method is not found.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-22 "Direct link to Param")

The contextual payload

### ContextMenuCommandAccepted [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandaccepted "Direct link to ContextMenuCommandAccepted")

> `readonly` **ContextMenuCommandAccepted**: `"contextMenuCommandAccepted"`

Emitted when a context menu command passes all precondition checks, if any.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-23 "Direct link to Param")

The contextual payload

### ContextMenuCommandDenied [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommanddenied "Direct link to ContextMenuCommandDenied")

> `readonly` **ContextMenuCommandDenied**: `"contextMenuCommandDenied"`

Emitted when a precondition denies a context menu command from being run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-24 "Direct link to Param")

The error reported by the precondition

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-25 "Direct link to Param")

The contextual payload

### ContextMenuCommandError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommanderror "Direct link to ContextMenuCommandError")

> `readonly` **ContextMenuCommandError**: `"contextMenuCommandError"`

Emitted after a context menu command runs unsuccesfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-26 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-27 "Direct link to Param")

The contextual payload

### ContextMenuCommandFinish [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandfinish "Direct link to ContextMenuCommandFinish")

> `readonly` **ContextMenuCommandFinish**: `"contextMenuCommandFinish"`

Emitted directly after a context menu command finished running, regardless of the outcome.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-28 "Direct link to Param")

The interaction that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-29 "Direct link to Param")

The command that finished running

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-30 "Direct link to Param")

The contextual payload

### ContextMenuCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandrun "Direct link to ContextMenuCommandRun")

> `readonly` **ContextMenuCommandRun**: `"contextMenuCommandRun"`

Emitted directly before a context menu command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-31 "Direct link to Param")

The interaction that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-32 "Direct link to Param")

The command that is being run

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-33 "Direct link to Param")

The contextual payload

### ContextMenuCommandSuccess [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandsuccess "Direct link to ContextMenuCommandSuccess")

> `readonly` **ContextMenuCommandSuccess**: `"contextMenuCommandSuccess"`

Emitted after a context menu command runs successfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-34 "Direct link to Param")

The contextual payload

### Debug [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#debug "Direct link to Debug")

> `readonly` **Debug**: `Debug`

### Error [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#error "Direct link to Error")

> `readonly` **Error**: `Error`

### GuildAuditLogEntryCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildauditlogentrycreate "Direct link to GuildAuditLogEntryCreate")

> `readonly` **GuildAuditLogEntryCreate**: `GuildAuditLogEntryCreate`

### GuildAvailable [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildavailable "Direct link to GuildAvailable")

> `readonly` **GuildAvailable**: `GuildAvailable`

### GuildBanAdd [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildbanadd "Direct link to GuildBanAdd")

> `readonly` **GuildBanAdd**: `GuildBanAdd`

### GuildBanRemove [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildbanremove "Direct link to GuildBanRemove")

> `readonly` **GuildBanRemove**: `GuildBanRemove`

### GuildCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildcreate "Direct link to GuildCreate")

> `readonly` **GuildCreate**: `GuildCreate`

### GuildDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guilddelete "Direct link to GuildDelete")

> `readonly` **GuildDelete**: `GuildDelete`

### GuildEmojiCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojicreate "Direct link to GuildEmojiCreate")

> `readonly` **GuildEmojiCreate**: `GuildEmojiCreate`

### GuildEmojiDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojidelete "Direct link to GuildEmojiDelete")

> `readonly` **GuildEmojiDelete**: `GuildEmojiDelete`

### GuildEmojiUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojiupdate "Direct link to GuildEmojiUpdate")

> `readonly` **GuildEmojiUpdate**: `GuildEmojiUpdate`

### GuildIntegrationsUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildintegrationsupdate "Direct link to GuildIntegrationsUpdate")

> `readonly` **GuildIntegrationsUpdate**: `GuildIntegrationsUpdate`

### GuildMemberAdd [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberadd "Direct link to GuildMemberAdd")

> `readonly` **GuildMemberAdd**: `GuildMemberAdd`

### GuildMemberAvailable [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberavailable "Direct link to GuildMemberAvailable")

> `readonly` **GuildMemberAvailable**: `GuildMemberAvailable`

### GuildMemberRemove [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberremove "Direct link to GuildMemberRemove")

> `readonly` **GuildMemberRemove**: `GuildMemberRemove`

### GuildMembersChunk [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberschunk "Direct link to GuildMembersChunk")

> `readonly` **GuildMembersChunk**: `GuildMembersChunk`

### GuildMemberUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberupdate "Direct link to GuildMemberUpdate")

> `readonly` **GuildMemberUpdate**: `GuildMemberUpdate`

### GuildRoleCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildrolecreate "Direct link to GuildRoleCreate")

> `readonly` **GuildRoleCreate**: `GuildRoleCreate`

### GuildRoleDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildroledelete "Direct link to GuildRoleDelete")

> `readonly` **GuildRoleDelete**: `GuildRoleDelete`

### GuildRoleUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildroleupdate "Direct link to GuildRoleUpdate")

> `readonly` **GuildRoleUpdate**: `GuildRoleUpdate`

### GuildScheduledEventCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventcreate "Direct link to GuildScheduledEventCreate")

> `readonly` **GuildScheduledEventCreate**: `GuildScheduledEventCreate`

### GuildScheduledEventDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventdelete "Direct link to GuildScheduledEventDelete")

> `readonly` **GuildScheduledEventDelete**: `GuildScheduledEventDelete`

### GuildScheduledEventUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventupdate "Direct link to GuildScheduledEventUpdate")

> `readonly` **GuildScheduledEventUpdate**: `GuildScheduledEventUpdate`

### GuildScheduledEventUserAdd [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventuseradd "Direct link to GuildScheduledEventUserAdd")

> `readonly` **GuildScheduledEventUserAdd**: `GuildScheduledEventUserAdd`

### GuildScheduledEventUserRemove [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventuserremove "Direct link to GuildScheduledEventUserRemove")

> `readonly` **GuildScheduledEventUserRemove**: `GuildScheduledEventUserRemove`

### GuildStickerCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickercreate "Direct link to GuildStickerCreate")

> `readonly` **GuildStickerCreate**: `GuildStickerCreate`

### GuildStickerDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickerdelete "Direct link to GuildStickerDelete")

> `readonly` **GuildStickerDelete**: `GuildStickerDelete`

### GuildStickerUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickerupdate "Direct link to GuildStickerUpdate")

> `readonly` **GuildStickerUpdate**: `GuildStickerUpdate`

### GuildUnavailable [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildunavailable "Direct link to GuildUnavailable")

> `readonly` **GuildUnavailable**: `GuildUnavailable`

### GuildUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildupdate "Direct link to GuildUpdate")

> `readonly` **GuildUpdate**: `GuildUpdate`

### InteractionCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactioncreate "Direct link to InteractionCreate")

> `readonly` **InteractionCreate**: `InteractionCreate`

### InteractionHandlerError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlererror "Direct link to InteractionHandlerError")

> `readonly` **InteractionHandlerError**: `"interactionHandlerError"`

Emitted when an error is encountered when executing an interaction handler.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-35 "Direct link to Param")

The error that was encountered

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-36 "Direct link to Param")

The contextual payload

### InteractionHandlerParseError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparseerror "Direct link to InteractionHandlerParseError")

> `readonly` **InteractionHandlerParseError**: `"interactionHandlerParseError"`

Emitted when the `parse` method of an interaction handler encounters an error.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-37 "Direct link to Param")

The error that was encountered

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-38 "Direct link to Param")

The contextual payload

### InteractionHandlerParseNone [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsenone "Direct link to InteractionHandlerParseNone")

> `readonly` **InteractionHandlerParseNone**: `"interactionHandlerParseNone"`

Emitted when the `parse` method of an interaction handler passes successfully (no errors are encountered) and `none` is returned.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-39 "Direct link to Param")

The Option.None from the `parse` method.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-40 "Direct link to Param")

The contextual payload

### InteractionHandlerParseSome [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsesome "Direct link to InteractionHandlerParseSome")

> `readonly` **InteractionHandlerParseSome**: `"interactionHandlerParseSome"`

Emitted when the `parse` method of an interaction handler passes successfully (no errors are encountered) and `some` is returned.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-41 "Direct link to Param")

The Option.Some from the `parse` method.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-42 "Direct link to Param")

The contextual payload

### InteractionHandlerParseSuccess [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsesuccess "Direct link to InteractionHandlerParseSuccess")

> `readonly` **InteractionHandlerParseSuccess**: `"interactionHandlerParseSuccess"`

Emitted when the `parse` method of an interaction handler passes successfully (no errors are encountered)
Use the option parameter to determine if `some` or `none` was passed.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-43 "Direct link to Param")

The Option from the `parse` method.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-44 "Direct link to Param")

The contextual payload

### Invalidated [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invalidated "Direct link to Invalidated")

> `readonly` **Invalidated**: `Invalidated`

### InviteCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invitecreate "Direct link to InviteCreate")

> `readonly` **InviteCreate**: `InviteCreate`

### InviteDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invitedelete "Direct link to InviteDelete")

> `readonly` **InviteDelete**: `InviteDelete`

### ListenerError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#listenererror "Direct link to ListenerError")

> `readonly` **ListenerError**: `"listenerError"`

Emitted when an error is encountered when executing a listener.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-45 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-46 "Direct link to Param")

The contextual payload

### MentionPrefixOnly [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#mentionprefixonly "Direct link to MentionPrefixOnly")

> `readonly` **MentionPrefixOnly**: `"mentionPrefixOnly"`

Emitted when a message is created consisting of only the bot's mention.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-47 "Direct link to Param")

The created message

### MessageBulkDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagebulkdelete "Direct link to MessageBulkDelete")

> `readonly` **MessageBulkDelete**: `MessageBulkDelete`

### MessageCommandAccepted [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandaccepted "Direct link to MessageCommandAccepted")

> `readonly` **MessageCommandAccepted**: `"messageCommandAccepted"`

Emitted when a message command passes all precondition checks, if any.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-48 "Direct link to Param")

The contextual payload

### MessageCommandDenied [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommanddenied "Direct link to MessageCommandDenied")

> `readonly` **MessageCommandDenied**: `"messageCommandDenied"`

Emitted when a precondition denies a message command from being run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-49 "Direct link to Param")

The error reported by the precondition

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-50 "Direct link to Param")

The contextual payload

### MessageCommandError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommanderror "Direct link to MessageCommandError")

> `readonly` **MessageCommandError**: `"messageCommandError"`

Emitted after a message command runs unsuccesfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-51 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-52 "Direct link to Param")

The contextual payload

### MessageCommandFinish [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandfinish "Direct link to MessageCommandFinish")

> `readonly` **MessageCommandFinish**: `"messageCommandFinish"`

Emitted directly after a message command finished running, regardless of the outcome.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-53 "Direct link to Param")

The message that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-54 "Direct link to Param")

The command that finished running

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-55 "Direct link to Param")

The contextual payload

### MessageCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandrun "Direct link to MessageCommandRun")

> `readonly` **MessageCommandRun**: `"messageCommandRun"`

Emitted directly before a message command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-56 "Direct link to Param")

The message that executed the command

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-57 "Direct link to Param")

The command that is being run

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-58 "Direct link to Param")

The contextual payload

### MessageCommandSuccess [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandsuccess "Direct link to MessageCommandSuccess")

> `readonly` **MessageCommandSuccess**: `"messageCommandSuccess"`

Emitted after a message command runs successfully.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-59 "Direct link to Param")

The contextual payload

### MessageCommandTypingError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandtypingerror "Direct link to MessageCommandTypingError")

> `readonly` **MessageCommandTypingError**: `"messageCommandTypingError"`

Emitted after the bot unsuccessfully tried to start typing when a command is executed.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-60 "Direct link to Param")

The error that was thrown

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-61 "Direct link to Param")

The contextual payload

### MessageCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecreate "Direct link to MessageCreate")

> `readonly` **MessageCreate**: `MessageCreate`

### MessageDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagedelete "Direct link to MessageDelete")

> `readonly` **MessageDelete**: `MessageDelete`

### MessageReactionAdd [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionadd "Direct link to MessageReactionAdd")

> `readonly` **MessageReactionAdd**: `MessageReactionAdd`

### MessageReactionRemove [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremove "Direct link to MessageReactionRemove")

> `readonly` **MessageReactionRemove**: `MessageReactionRemove`

### MessageReactionRemoveAll [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremoveall "Direct link to MessageReactionRemoveAll")

> `readonly` **MessageReactionRemoveAll**: `MessageReactionRemoveAll`

### MessageReactionRemoveEmoji [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremoveemoji "Direct link to MessageReactionRemoveEmoji")

> `readonly` **MessageReactionRemoveEmoji**: `MessageReactionRemoveEmoji`

### MessageUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messageupdate "Direct link to MessageUpdate")

> `readonly` **MessageUpdate**: `MessageUpdate`

### NonPrefixedMessage [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#nonprefixedmessage "Direct link to NonPrefixedMessage")

> `readonly` **NonPrefixedMessage**: `"nonPrefixedMessage"`

Emitted when a message is created that does not start with a valid prefix.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-62 "Direct link to Param")

The created message

### PiecePostLoad [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#piecepostload "Direct link to PiecePostLoad")

> `readonly` **PiecePostLoad**: `"piecePostLoad"`

Emitted after a piece is loaded.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-63 "Direct link to Param")

The store in which the piece belongs to

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-64 "Direct link to Param")

The piece that was loaded

### PieceUnload [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#pieceunload "Direct link to PieceUnload")

> `readonly` **PieceUnload**: `"pieceUnload"`

Emitted when a piece is unloaded.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-65 "Direct link to Param")

The store in which the piece belongs to

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-66 "Direct link to Param")

The piece that was unloaded

### PluginLoaded [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#pluginloaded "Direct link to PluginLoaded")

> `readonly` **PluginLoaded**: `"pluginLoaded"`

Emitted when a plugin is loaded.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-67 "Direct link to Param")

The plugin hook that was loaded

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-68 "Direct link to Param")

The name of the plugin, if any

### PossibleAutocompleteInteraction [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possibleautocompleteinteraction "Direct link to PossibleAutocompleteInteraction")

> `readonly` **PossibleAutocompleteInteraction**: `"possibleAutocompleteInteraction"`

Emitted when an autocomplete interaction is recieved.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-69 "Direct link to Param")

The interaction that was recieved

### PossibleChatInputCommand [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possiblechatinputcommand "Direct link to PossibleChatInputCommand")

> `readonly` **PossibleChatInputCommand**: `"possibleChatInputCommand"`

Emitted when a chat input command interaction is recieved.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-70 "Direct link to Param")

The interaction that was recieved.

### PossibleContextMenuCommand [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possiblecontextmenucommand "Direct link to PossibleContextMenuCommand")

> `readonly` **PossibleContextMenuCommand**: `"possibleContextMenuCommand"`

Emitted when a context menu interaction is recieved.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-71 "Direct link to Param")

The interaction that was recieved.

### PreChatInputCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#prechatinputcommandrun "Direct link to PreChatInputCommandRun")

> `readonly` **PreChatInputCommandRun**: `"preChatInputCommandRun"`

Emitted before the `chatInputRun` method of a command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-72 "Direct link to Param")

The contextual payload

### PreContextMenuCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#precontextmenucommandrun "Direct link to PreContextMenuCommandRun")

> `readonly` **PreContextMenuCommandRun**: `"preContextMenuCommandRun"`

Emitted before the `contextMenuRun` method of a command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-73 "Direct link to Param")

The contextual payload

### PrefixedMessage [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#prefixedmessage "Direct link to PrefixedMessage")

> `readonly` **PrefixedMessage**: `"prefixedMessage"`

Emitted when a message is created that does starts with a valid prefix.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-74 "Direct link to Param")

The created message

### PreMessageCommandRun [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#premessagecommandrun "Direct link to PreMessageCommandRun")

> `readonly` **PreMessageCommandRun**: `"preMessageCommandRun"`

Emitted before the `messageRun` method of a command is run.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-75 "Direct link to Param")

The contextual payload

### PreMessageParsed [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#premessageparsed "Direct link to PreMessageParsed")

> `readonly` **PreMessageParsed**: `"preMessageParsed"`

Emitted when a message is created that was not sent by bots or webhooks.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-76 "Direct link to Param")

The created message

### PresenceUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#presenceupdate "Direct link to PresenceUpdate")

> `readonly` **PresenceUpdate**: `PresenceUpdate`

### Raw [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#raw "Direct link to Raw")

> `readonly` **Raw**: `Raw`

### ShardDisconnect [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#sharddisconnect "Direct link to ShardDisconnect")

> `readonly` **ShardDisconnect**: `ShardDisconnect`

### ShardError [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#sharderror "Direct link to ShardError")

> `readonly` **ShardError**: `ShardError`

### ShardReady [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardready "Direct link to ShardReady")

> `readonly` **ShardReady**: `ShardReady`

### ShardReconnecting [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardreconnecting "Direct link to ShardReconnecting")

> `readonly` **ShardReconnecting**: `ShardReconnecting`

### ShardResume [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardresume "Direct link to ShardResume")

> `readonly` **ShardResume**: `ShardResume`

### StageInstanceCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstancecreate "Direct link to StageInstanceCreate")

> `readonly` **StageInstanceCreate**: `StageInstanceCreate`

### StageInstanceDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstancedelete "Direct link to StageInstanceDelete")

> `readonly` **StageInstanceDelete**: `StageInstanceDelete`

### StageInstanceUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstanceupdate "Direct link to StageInstanceUpdate")

> `readonly` **StageInstanceUpdate**: `StageInstanceUpdate`

### ThreadCreate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadcreate "Direct link to ThreadCreate")

> `readonly` **ThreadCreate**: `ThreadCreate`

### ThreadDelete [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threaddelete "Direct link to ThreadDelete")

> `readonly` **ThreadDelete**: `ThreadDelete`

### ThreadListSync [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadlistsync "Direct link to ThreadListSync")

> `readonly` **ThreadListSync**: `ThreadListSync`

### ThreadMembersUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadmembersupdate "Direct link to ThreadMembersUpdate")

> `readonly` **ThreadMembersUpdate**: `ThreadMembersUpdate`

### ThreadMemberUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadmemberupdate "Direct link to ThreadMemberUpdate")

> `readonly` **ThreadMemberUpdate**: `ThreadMemberUpdate`

### ThreadUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadupdate "Direct link to ThreadUpdate")

> `readonly` **ThreadUpdate**: `ThreadUpdate`

### TypingStart [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#typingstart "Direct link to TypingStart")

> `readonly` **TypingStart**: `TypingStart`

### UnknownChatInputCommand [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownchatinputcommand "Direct link to UnknownChatInputCommand")

> `readonly` **UnknownChatInputCommand**: `"unknownChatInputCommand"`

Emitted when the name of a sent chat input command does not match any loaded commands.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-77 "Direct link to Param")

The contextual payload

### UnknownContextMenuCommand [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknowncontextmenucommand "Direct link to UnknownContextMenuCommand")

> `readonly` **UnknownContextMenuCommand**: `"unknownContextMenuCommand"`

Emitted when the name of a sent context menu command does not match any loaded commands.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-78 "Direct link to Param")

The contextual payload

### UnknownMessageCommand [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownmessagecommand "Direct link to UnknownMessageCommand")

> `readonly` **UnknownMessageCommand**: `"unknownMessageCommand"`

Emitted when the name of a sent message command does not match any loaded commands.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-79 "Direct link to Param")

The contextual payload

### UnknownMessageCommandName [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownmessagecommandname "Direct link to UnknownMessageCommandName")

> `readonly` **UnknownMessageCommandName**: `"unknownMessageCommandName"`

Emitted when a message starts with a valid prefix but does not include a command name.

#### Param [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#param-80 "Direct link to Param")

### UserUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#userupdate "Direct link to UserUpdate")

> `readonly` **UserUpdate**: `UserUpdate`

### VoiceServerUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#voiceserverupdate "Direct link to VoiceServerUpdate")

> `readonly` **VoiceServerUpdate**: `VoiceServerUpdate`

### VoiceStateUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#voicestateupdate "Direct link to VoiceStateUpdate")

> `readonly` **VoiceStateUpdate**: `VoiceStateUpdate`

### Warn [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#warn "Direct link to Warn")

> `readonly` **Warn**: `Warn`

### WebhooksUpdate [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#webhooksupdate "Direct link to WebhooksUpdate")

> `readonly` **WebhooksUpdate**: `WebhooksUpdate`

- [Type Declaration](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#type-declaration)
  - [ApplicationCommandPermissionsUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandpermissionsupdate)
  - [ApplicationCommandRegistriesBulkOverwriteError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesbulkoverwriteerror)
  - [ApplicationCommandRegistriesInitialising](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesinitialising)
  - [ApplicationCommandRegistriesRegistered](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#applicationcommandregistriesregistered)
  - [AutoModerationActionExecution](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationactionexecution)
  - [AutoModerationRuleCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationrulecreate)
  - [AutoModerationRuleDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationruledelete)
  - [AutoModerationRuleUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#automoderationruleupdate)
  - [CacheSweep](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#cachesweep)
  - [ChannelCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelcreate)
  - [ChannelDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channeldelete)
  - [ChannelPinsUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelpinsupdate)
  - [ChannelUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#channelupdate)
  - [ChatInputCommandAccepted](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandaccepted)
  - [ChatInputCommandDenied](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommanddenied)
  - [ChatInputCommandError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommanderror)
  - [ChatInputCommandFinish](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandfinish)
  - [ChatInputCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandrun)
  - [ChatInputCommandSuccess](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#chatinputcommandsuccess)
  - [ClientReady](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#clientready)
  - [CommandApplicationCommandRegistryError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandapplicationcommandregistryerror)
  - [CommandAutocompleteInteractionError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandautocompleteinteractionerror)
  - [CommandAutocompleteInteractionSuccess](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commandautocompleteinteractionsuccess)
  - [CommandDoesNotHaveChatInputCommandHandler](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavechatinputcommandhandler)
  - [CommandDoesNotHaveContextMenuCommandHandler](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavecontextmenucommandhandler)
  - [CommandDoesNotHaveMessageCommandHandler](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#commanddoesnothavemessagecommandhandler)
  - [ContextMenuCommandAccepted](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandaccepted)
  - [ContextMenuCommandDenied](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommanddenied)
  - [ContextMenuCommandError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommanderror)
  - [ContextMenuCommandFinish](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandfinish)
  - [ContextMenuCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandrun)
  - [ContextMenuCommandSuccess](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#contextmenucommandsuccess)
  - [Debug](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#debug)
  - [Error](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#error)
  - [GuildAuditLogEntryCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildauditlogentrycreate)
  - [GuildAvailable](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildavailable)
  - [GuildBanAdd](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildbanadd)
  - [GuildBanRemove](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildbanremove)
  - [GuildCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildcreate)
  - [GuildDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guilddelete)
  - [GuildEmojiCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojicreate)
  - [GuildEmojiDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojidelete)
  - [GuildEmojiUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildemojiupdate)
  - [GuildIntegrationsUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildintegrationsupdate)
  - [GuildMemberAdd](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberadd)
  - [GuildMemberAvailable](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberavailable)
  - [GuildMemberRemove](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberremove)
  - [GuildMembersChunk](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberschunk)
  - [GuildMemberUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildmemberupdate)
  - [GuildRoleCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildrolecreate)
  - [GuildRoleDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildroledelete)
  - [GuildRoleUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildroleupdate)
  - [GuildScheduledEventCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventcreate)
  - [GuildScheduledEventDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventdelete)
  - [GuildScheduledEventUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventupdate)
  - [GuildScheduledEventUserAdd](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventuseradd)
  - [GuildScheduledEventUserRemove](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildscheduledeventuserremove)
  - [GuildStickerCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickercreate)
  - [GuildStickerDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickerdelete)
  - [GuildStickerUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildstickerupdate)
  - [GuildUnavailable](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildunavailable)
  - [GuildUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#guildupdate)
  - [InteractionCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactioncreate)
  - [InteractionHandlerError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlererror)
  - [InteractionHandlerParseError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparseerror)
  - [InteractionHandlerParseNone](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsenone)
  - [InteractionHandlerParseSome](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsesome)
  - [InteractionHandlerParseSuccess](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#interactionhandlerparsesuccess)
  - [Invalidated](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invalidated)
  - [InviteCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invitecreate)
  - [InviteDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#invitedelete)
  - [ListenerError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#listenererror)
  - [MentionPrefixOnly](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#mentionprefixonly)
  - [MessageBulkDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagebulkdelete)
  - [MessageCommandAccepted](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandaccepted)
  - [MessageCommandDenied](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommanddenied)
  - [MessageCommandError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommanderror)
  - [MessageCommandFinish](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandfinish)
  - [MessageCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandrun)
  - [MessageCommandSuccess](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandsuccess)
  - [MessageCommandTypingError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecommandtypingerror)
  - [MessageCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagecreate)
  - [MessageDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagedelete)
  - [MessageReactionAdd](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionadd)
  - [MessageReactionRemove](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremove)
  - [MessageReactionRemoveAll](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremoveall)
  - [MessageReactionRemoveEmoji](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messagereactionremoveemoji)
  - [MessageUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#messageupdate)
  - [NonPrefixedMessage](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#nonprefixedmessage)
  - [PiecePostLoad](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#piecepostload)
  - [PieceUnload](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#pieceunload)
  - [PluginLoaded](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#pluginloaded)
  - [PossibleAutocompleteInteraction](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possibleautocompleteinteraction)
  - [PossibleChatInputCommand](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possiblechatinputcommand)
  - [PossibleContextMenuCommand](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#possiblecontextmenucommand)
  - [PreChatInputCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#prechatinputcommandrun)
  - [PreContextMenuCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#precontextmenucommandrun)
  - [PrefixedMessage](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#prefixedmessage)
  - [PreMessageCommandRun](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#premessagecommandrun)
  - [PreMessageParsed](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#premessageparsed)
  - [PresenceUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#presenceupdate)
  - [Raw](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#raw)
  - [ShardDisconnect](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#sharddisconnect)
  - [ShardError](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#sharderror)
  - [ShardReady](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardready)
  - [ShardReconnecting](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardreconnecting)
  - [ShardResume](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#shardresume)
  - [StageInstanceCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstancecreate)
  - [StageInstanceDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstancedelete)
  - [StageInstanceUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#stageinstanceupdate)
  - [ThreadCreate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadcreate)
  - [ThreadDelete](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threaddelete)
  - [ThreadListSync](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadlistsync)
  - [ThreadMembersUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadmembersupdate)
  - [ThreadMemberUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadmemberupdate)
  - [ThreadUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#threadupdate)
  - [TypingStart](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#typingstart)
  - [UnknownChatInputCommand](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownchatinputcommand)
  - [UnknownContextMenuCommand](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknowncontextmenucommand)
  - [UnknownMessageCommand](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownmessagecommand)
  - [UnknownMessageCommandName](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#unknownmessagecommandname)
  - [UserUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#userupdate)
  - [VoiceServerUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#voiceserverupdate)
  - [VoiceStateUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#voicestateupdate)
  - [Warn](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#warn)
  - [WebhooksUpdate](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events/#webhooksupdate)
