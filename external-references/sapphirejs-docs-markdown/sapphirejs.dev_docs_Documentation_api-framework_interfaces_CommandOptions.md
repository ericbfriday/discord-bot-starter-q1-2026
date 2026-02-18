[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:62](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L62)

The [Command](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) options.

## Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since "Direct link to Since")

1.0.0

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#extends "Direct link to Extends")

- `Options`.`FlagStrategyOptions`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#properties "Direct link to Properties")

### cooldownDelay? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldowndelay "Direct link to cooldownDelay?")

> `optional` **cooldownDelay**: `number`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:146](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L146)

The time in milliseconds for the cooldown entries to reset, if set to a non-zero value alongside [CommandOptions.cooldownLimit](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownlimit), the `Cooldown` precondition will be added to the list.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-1 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default "Direct link to Default")

```ts
0;
```

---

### cooldownFilteredUsers? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownfilteredusers "Direct link to cooldownFilteredUsers?")

> `optional` **cooldownFilteredUsers**: `string`\[\]

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:161](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L161)

The users that are exempt from the Cooldown precondition.
Use this to filter out someone like a bot owner

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-2 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-1 "Direct link to Default")

```ts
undefined;
```

---

### cooldownLimit? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownlimit "Direct link to cooldownLimit?")

> `optional` **cooldownLimit**: `number`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:139](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L139)

The amount of entries the cooldown can have before filling up, if set to a non-zero value alongside [CommandOptions.cooldownDelay](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldowndelay), the `Cooldown` precondition will be added to the list.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-3 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-2 "Direct link to Default")

```ts
1;
```

---

### cooldownScope? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownscope "Direct link to cooldownScope?")

> `optional` **cooldownScope**: [`BucketScope`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/BucketScope)

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:153](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L153)

The scope of the cooldown entries.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-4 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-3 "Direct link to Default")

```ts
BucketScope.User;
```

---

### description? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#description "Direct link to description?")

> `optional` **description**: `string`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:82](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L82)

The description for the command.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-5 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-4 "Direct link to Default")

```ts
"";
```

---

### detailedDescription? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#detaileddescription "Direct link to detailedDescription?")

> `optional` **detailedDescription**: [`DetailedDescriptionCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/DetailedDescriptionCommand)

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:89](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L89)

The detailed description for the command.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-6 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-5 "Direct link to Default")

```ts
"";
```

---

### flags? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#flags "Direct link to flags?")

> `optional` **flags**: `boolean` \| readonly `string`\[\]

Defined in: [projects/framework/src/lib/utils/strategies/FlagUnorderedStrategy.ts:14](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/strategies/FlagUnorderedStrategy.ts#L14)

The accepted flags. Flags are key-only identifiers that can be placed anywhere in the command. Two different types are accepted:

- An array of strings, e.g. \[`silent`\].
- A boolean defining whether the strategy should accept all keys (`true`) or none at all (`false`).

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-6 "Direct link to Default")

```ts
[];
```

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#inherited-from "Direct link to Inherited from")

`FlagStrategyOptions.flags`

---

### fullCategory? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#fullcategory "Direct link to fullCategory?")

> `optional` **fullCategory**: `string`\[\]

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:104](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L104)

The full category path for the command

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-7 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-7 "Direct link to Default")

```ts
"An array of folder names that lead back to the folder that is registered for in the commands store";
```

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#example "Direct link to Example")

```typescript
// Given a file named `ping.js` at the path of `commands/General/ping.js`
["General"][
  // Given a file named `info.js` at the path of `commands/General/About/info.js`
  ("General", "About")
];
```

---

### generateDashLessAliases? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#generatedashlessaliases "Direct link to generateDashLessAliases?")

> `optional` **generateDashLessAliases**: `boolean`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:68](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L68)

Whether to add aliases for commands with dashes in them

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-8 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-8 "Direct link to Default")

```ts
false;
```

---

### generateUnderscoreLessAliases? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#generateunderscorelessaliases "Direct link to generateUnderscoreLessAliases?")

> `optional` **generateUnderscoreLessAliases**: `boolean`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:75](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L75)

Whether to add aliases for commands with underscores in them

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-9 "Direct link to Since")

3.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-9 "Direct link to Default")

```ts
false;
```

---

### nsfw? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#nsfw "Direct link to nsfw?")

> `optional` **nsfw**: `boolean`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:132](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L132)

Sets whether the command should be treated as NSFW. If set to true, the `NSFW` precondition will be added to the list.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-10 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-10 "Direct link to Default")

```ts
false;
```

---

### options? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#options "Direct link to options?")

> `optional` **options**: `boolean` \| readonly `string`\[\]

Defined in: [projects/framework/src/lib/utils/strategies/FlagUnorderedStrategy.ts:22](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/strategies/FlagUnorderedStrategy.ts#L22)

The accepted options. Options are key-value identifiers that can be placed anywhere in the command. Two different types are accepted:

- An array of strings, e.g. \[`silent`\].
- A boolean defining whether the strategy should accept all keys (`true`) or none at all (`false`).

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-11 "Direct link to Default")

```ts
[];
```

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#inherited-from-1 "Direct link to Inherited from")

`FlagStrategyOptions.options`

---

### preconditions? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#preconditions "Direct link to preconditions?")

> `optional` **preconditions**: readonly [`PreconditionEntryResolvable`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionEntryResolvable)\[\]

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:112](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L112)

The [Precondition](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Precondition/) s to be run, accepts an array of their names.

#### Seealso [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#seealso "Direct link to Seealso")

[PreconditionContainerArray](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray)

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-11 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-12 "Direct link to Default")

```ts
[];
```

---

### prefixes? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#prefixes "Direct link to prefixes?")

> `optional` **prefixes**: `string`\[\]

Defined in: [projects/framework/src/lib/utils/strategies/FlagUnorderedStrategy.ts:28](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/strategies/FlagUnorderedStrategy.ts#L28)

The prefixes for both flags and options.

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-13 "Direct link to Default")

```ts
["--", "-", "—"];
```

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#inherited-from-2 "Direct link to Inherited from")

`FlagStrategyOptions.prefixes`

---

### quotes? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#quotes "Direct link to quotes?")

> `optional` **quotes**: \[`string`, `string`\]\[\]

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:125](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L125)

The quotes accepted by this command, pass `[]` to disable them.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-12 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-14 "Direct link to Default")

```ts
[\
  ['"', '"'], // Double quotes\
  ['“', '”'], // Fancy quotes (on iOS)\
  ['「', '」'] // Corner brackets (CJK)\
  ['«', '»'] // French quotes (guillemets)\
]
```

---

### requiredClientPermissions? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#requiredclientpermissions "Direct link to requiredClientPermissions?")

> `optional` **requiredClientPermissions**: [`PermissionResolvable`](https://discord.js.org/docs/packages/discord.js/main/PermissionResolvable:TypeAlias)

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:168](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L168)

The required permissions for the client.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-13 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-15 "Direct link to Default")

```ts
0;
```

---

### requiredUserPermissions? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#requireduserpermissions "Direct link to requiredUserPermissions?")

> `optional` **requiredUserPermissions**: [`PermissionResolvable`](https://discord.js.org/docs/packages/discord.js/main/PermissionResolvable:TypeAlias)

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:175](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L175)

The required permissions for the user.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-14 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-16 "Direct link to Default")

```ts
0;
```

---

### runIn? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#runin "Direct link to runIn?")

> `optional` **runIn**: [`CommandRunInUnion`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/CommandRunInUnion) \| [`CommandSpecificRunIn`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandSpecificRunIn)

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:188](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L188)

The channels the command should run in. If set to `null`, no precondition entry will be added.
Some optimizations are applied when given an array to reduce the amount of preconditions run
(e.g. `'GUILD_TEXT'` and `'GUILD_NEWS'` becomes `'GUILD_ANY'`, and if both `'DM'` and `'GUILD_ANY'` are defined,
then no precondition entry is added as it runs in all channels).

This can be both [CommandRunInUnion](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/CommandRunInUnion) which will have the same precondition apply to all the types of commands,
or you can use [CommandSpecificRunIn](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandSpecificRunIn) to apply different preconditions to different types of commands.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since-15 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-17 "Direct link to Default")

```ts
null;
```

---

### separators? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#separators "Direct link to separators?")

> `optional` **separators**: `string`\[\]

Defined in: [projects/framework/src/lib/utils/strategies/FlagUnorderedStrategy.ts:34](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/strategies/FlagUnorderedStrategy.ts#L34)

The flag separators.

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-18 "Direct link to Default")

```ts
["=", ":"];
```

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#inherited-from-3 "Direct link to Inherited from")

`FlagStrategyOptions.separators`

---

### typing? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#typing "Direct link to typing?")

> `optional` **typing**: `boolean`

Defined in: [projects/framework/src/lib/types/CommandTypes.ts:195](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/types/CommandTypes.ts#L195)

If SapphireClient.typing is true, this option will override it.
Otherwise, this option has no effect - you may call Channel#sendTyping\` in the run method if you want specific commands to display the typing status.

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#default-19 "Direct link to Default")

```ts
true;
```

- [Since](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#since)
- [Extends](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#extends)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#properties)
  - [cooldownDelay?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldowndelay)
  - [cooldownFilteredUsers?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownfilteredusers)
  - [cooldownLimit?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownlimit)
  - [cooldownScope?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#cooldownscope)
  - [description?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#description)
  - [detailedDescription?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#detaileddescription)
  - [flags?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#flags)
  - [fullCategory?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#fullcategory)
  - [generateDashLessAliases?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#generatedashlessaliases)
  - [generateUnderscoreLessAliases?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#generateunderscorelessaliases)
  - [nsfw?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#nsfw)
  - [options?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#options)
  - [preconditions?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#preconditions)
  - [prefixes?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#prefixes)
  - [quotes?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#quotes)
  - [requiredClientPermissions?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#requiredclientpermissions)
  - [requiredUserPermissions?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#requireduserpermissions)
  - [runIn?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#runin)
  - [separators?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#separators)
  - [typing?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions/#typing)
