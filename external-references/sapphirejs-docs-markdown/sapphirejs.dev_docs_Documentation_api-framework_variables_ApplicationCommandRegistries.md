[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#__docusaurus_skipToContent_fallback)

On this page

> `const` **ApplicationCommandRegistries**: `object`

Defined in: [projects/framework/src/index.ts:28](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/index.ts#L28)

## Type Declaration [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#type-declaration "Direct link to Type Declaration")

### acquire() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#acquire "Direct link to acquire()")

> **acquire**: (`commandName`: `string`) =\> [`ApplicationCommandRegistry`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ApplicationCommandRegistry)

Acquires a registry for a command by its name.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#parameters "Direct link to Parameters")

| Parameter     | Type     | Description              |
| ------------- | -------- | ------------------------ |
| `commandName` | `string` | The name of the command. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns "Direct link to Returns")

[`ApplicationCommandRegistry`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ApplicationCommandRegistry)

The application command registry for the command

### getBulkOverwriteRetries() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getbulkoverwriteretries "Direct link to getBulkOverwriteRetries()")

> **getBulkOverwriteRetries**: () =\> `number`

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-1 "Direct link to Returns")

`number`

### getDefaultBehaviorWhenNotIdentical() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getdefaultbehaviorwhennotidentical "Direct link to getDefaultBehaviorWhenNotIdentical()")

> **getDefaultBehaviorWhenNotIdentical**: () =\> [`RegisterBehavior`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/RegisterBehavior)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-2 "Direct link to Returns")

[`RegisterBehavior`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/RegisterBehavior)

### getDefaultGuildIds() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getdefaultguildids "Direct link to getDefaultGuildIds()")

> **getDefaultGuildIds**: () =\> `undefined` \| `string`\[\]

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-3 "Direct link to Returns")

`undefined` \| `string`\[\]

### setBulkOverwriteRetries() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setbulkoverwriteretries "Direct link to setBulkOverwriteRetries()")

> **setBulkOverwriteRetries**: (`newAmountOfRetries`: `null` \| `number`) =\> `void`

Sets the amount of retries for when registering commands, only applies when defaultBehaviorWhenNotIdentical
is set to [RegisterBehavior.BulkOverwrite](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/RegisterBehavior#bulkoverwrite). This is used if registering the commands times out.
The default value is `1`, which means no retries are performed.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#parameters-1 "Direct link to Parameters")

| Parameter            | Type               | Description                                                                     |
| -------------------- | ------------------ | ------------------------------------------------------------------------------- |
| `newAmountOfRetries` | `null` \| `number` | The new amount of retries to set. Set this to `null` to reset it to the default |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-4 "Direct link to Returns")

`void`

### setDefaultBehaviorWhenNotIdentical() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setdefaultbehaviorwhennotidentical "Direct link to setDefaultBehaviorWhenNotIdentical()")

> **setDefaultBehaviorWhenNotIdentical**: (`behavior?`: `null` \| [`RegisterBehavior`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/RegisterBehavior)) =\> `void`

Sets the default behavior when registered commands aren't identical to provided data.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#parameters-2 "Direct link to Parameters")

| Parameter   | Type                                                                                                                  | Description                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `behavior?` | `null` \| [`RegisterBehavior`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/RegisterBehavior) | The default behavior to have. Set this to `null` to reset it to the default of `RegisterBehavior.Overwrite`. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-5 "Direct link to Returns")

`void`

### setDefaultGuildIds() [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setdefaultguildids "Direct link to setDefaultGuildIds()")

> **setDefaultGuildIds**: (`guildIds?`: `null` \| `string`\[\]) =\> `void`

Sets the default guild ids for registering commands. This is used when a command is registered _without_ providing
`guildIds` in that command's own [Command.registerApplicationCommands](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#registerapplicationcommands) method.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#parameters-3 "Direct link to Parameters")

| Parameter   | Type                   | Description                                                                                |
| ----------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `guildIds?` | `null` \| `string`\[\] | The default guildIds to set. Set this to `null` to reset it to the default of `undefined`. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-6 "Direct link to Returns")

`void`

### registries [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#registries "Direct link to registries")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#get-signature "Direct link to Get Signature")

> **get** **registries**(): `ReadonlyMap`<`string`, [`ApplicationCommandRegistry`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ApplicationCommandRegistry) >

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#returns-7 "Direct link to Returns")

`ReadonlyMap`<`string`, [`ApplicationCommandRegistry`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ApplicationCommandRegistry) >

- [Type Declaration](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#type-declaration)
  - [acquire()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#acquire)
  - [getBulkOverwriteRetries()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getbulkoverwriteretries)
  - [getDefaultBehaviorWhenNotIdentical()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getdefaultbehaviorwhennotidentical)
  - [getDefaultGuildIds()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#getdefaultguildids)
  - [setBulkOverwriteRetries()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setbulkoverwriteretries)
  - [setDefaultBehaviorWhenNotIdentical()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setdefaultbehaviorwhennotidentical)
  - [setDefaultGuildIds()](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#setdefaultguildids)
  - [registries](https://sapphirejs.dev/docs/Documentation/api-framework/variables/ApplicationCommandRegistries/#registries)
