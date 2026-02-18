[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:108](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L108)

An [IPreconditionContainer](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer) that defines an array of multiple [IPreconditionContainer](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer) s.

By default, array containers run either of two conditions: AND and OR ( [PreconditionRunCondition](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunCondition)), the top level
will always default to AND, where the nested one flips the logic (OR, then children arrays are AND, then OR...).

This allows `['Connect', ['Moderator', ['DJ', 'SongAuthor']]]` to become a thrice-nested precondition container, where:

- Level 1: \[Single(Connect), Array\] runs AND, both containers must return a successful value.
- Level 2: \[Single(Moderator), Array\] runs OR, either container must return a successful value.
- Level 3: \[Single(DJ), Single(SongAuthor)\] runs AND, both containers must return a successful value.

In other words, it is identical to doing:

```typescript
Connect && (Moderator || (DJ && SongAuthor));
```

## Remark [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#remark "Direct link to Remark")

More advanced logic can be accomplished by adding more [IPreconditionCondition](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionCondition) s (e.g. other operators),
see [PreconditionContainerArray.conditions](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#conditions) for more information.

## Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since "Direct link to Since")

1.0.0

## Implements [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#implements "Direct link to Implements")

- [`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#constructor "Direct link to Constructor")

> **new PreconditionContainerArray**(`data`: [`PreconditionArrayResolvable`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionArrayResolvable), `parent`: `null` \| `PreconditionContainerArray`): `PreconditionContainerArray`

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:127](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L127)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                              | Default value |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `data`    | [`PreconditionArrayResolvable`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionArrayResolvable) | `[]`          |
| `parent`  | `null` \| `PreconditionContainerArray`                                                                                            | `null`        |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns "Direct link to Returns")

`PreconditionContainerArray`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#properties "Direct link to Properties")

### entries [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#entries "Direct link to entries")

> `readonly` **entries**: [`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer)\[\]

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:119](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L119)

The [IPreconditionContainer](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer) s the array holds.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-1 "Direct link to Since")

1.0.0

---

### mode [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#mode "Direct link to mode")

> `readonly` **mode**: [`PreconditionRunMode`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunMode)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:113](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L113)

The mode at which this precondition will run.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-2 "Direct link to Since")

1.0.0

---

### runCondition [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#runcondition "Direct link to runCondition")

> `readonly` **runCondition**: [`PreconditionRunCondition`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunCondition)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:125](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L125)

The [PreconditionRunCondition](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunCondition) that defines how entries must be handled.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-3 "Direct link to Since")

1.0.0

---

### conditions [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#conditions "Direct link to conditions")

> `readonly``static` **conditions**: `Collection`< [`PreconditionRunCondition`](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunCondition), [`IPreconditionCondition`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionCondition) >

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:254](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L254)

The preconditions to be run. Extra ones can be added by augmenting [PreconditionRunCondition](https://sapphirejs.dev/docs/Documentation/api-framework/enumerations/PreconditionRunCondition) and then
inserting [IPreconditionCondition](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionCondition) s.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-4 "Direct link to Since")

1.0.0

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#example "Direct link to Example")

```typescript
// Adding more kinds of conditions

// Set the new condition:
PreconditionContainerArray.conditions.set(2, PreconditionConditionRandom);

// Augment Sapphire to add the new condition, in case of a JavaScript
// project, this can be moved to an `Augments.d.ts` (or any other name)
// file somewhere:
declare module "@sapphire/framework" {
  export enum PreconditionRunCondition {
    Random = 2,
  }
}
```

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#accessors "Direct link to Accessors")

### condition [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#condition "Direct link to condition")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#get-signature "Direct link to Get Signature")

> **get**`protected` **condition**(): [`IPreconditionCondition`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionCondition)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:229](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L229)

Retrieves a condition from [PreconditionContainerArray.conditions](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#conditions), assuming existence.

##### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-5 "Direct link to Since")

1.0.0

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-1 "Direct link to Returns")

[`IPreconditionCondition`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionCondition)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#methods "Direct link to Methods")

### add() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#add "Direct link to add()")

> **add**(`entry`: [`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer)): `this`

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:149](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L149)

Adds a new entry to the array.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-1 "Direct link to Parameters")

| Parameter | Type                                                                                                                  | Description                      |
| --------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `entry`   | [`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer) | The value to add to the entries. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-2 "Direct link to Returns")

`this`

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-6 "Direct link to Since")

1.0.0

---

### append() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#append "Direct link to append()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#call-signature "Direct link to Call Signature")

> **append**(`keyOrEntries`: [`SimplePreconditionKeys`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/SimplePreconditionKeys) \| [`SimplePreconditionSingleResolvableDetails`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SimplePreconditionSingleResolvableDetails) \| `PreconditionContainerArray`): `this`

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:154](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L154)

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-2 "Direct link to Parameters")

| Parameter      | Type                                                                                                                                                                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keyOrEntries` | [`SimplePreconditionKeys`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/SimplePreconditionKeys) \| [`SimplePreconditionSingleResolvableDetails`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SimplePreconditionSingleResolvableDetails) \| `PreconditionContainerArray` |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-3 "Direct link to Returns")

`this`

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#call-signature-1 "Direct link to Call Signature")

> **append** <`K`>(`entry`: [`PreconditionSingleResolvableDetails`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionSingleResolvableDetails) <`K`>): `this`

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:155](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L155)

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#type-parameters "Direct link to Type Parameters")

| Type Parameter                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`Preconditions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/Preconditions) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-3 "Direct link to Parameters")

| Parameter | Type                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entry`   | [`PreconditionSingleResolvableDetails`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionSingleResolvableDetails) <`K`> |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-4 "Direct link to Returns")

`this`

---

### chatInputRun() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#chatinputrun "Direct link to chatInputRun()")

> **chatInputRun**(`interaction`: [`ChatInputCommandInteraction`](https://discord.js.org/docs/packages/discord.js/main/ChatInputCommandInteraction:Class), `command`: [`ChatInputCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ChatInputCommand), `context`: [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext)): [`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:181](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L181)

Runs the container.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-4 "Direct link to Parameters")

| Parameter     | Type                                                                                                                    | Description                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `interaction` | [`ChatInputCommandInteraction`](https://discord.js.org/docs/packages/discord.js/main/ChatInputCommandInteraction:Class) | The interaction that ran this precondition.  |
| `command`     | [`ChatInputCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ChatInputCommand)             | The command the interaction invoked.         |
| `context`     | [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext)         | The context for the chat input precondition. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-5 "Direct link to Returns")

[`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-7 "Direct link to Since")

3.0.0

#### Implementation of [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#implementation-of "Direct link to Implementation of")

[`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer). [`chatInputRun`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer#chatinputrun)

---

### contextMenuRun() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#contextmenurun "Direct link to contextMenuRun()")

> **contextMenuRun**(`interaction`: [`ContextMenuCommandInteraction`](https://discord.js.org/docs/packages/discord.js/main/ContextMenuCommandInteraction:Class), `command`: [`ContextMenuCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ContextMenuCommand), `context`: [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext)): [`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:198](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L198)

Runs the container.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-5 "Direct link to Parameters")

| Parameter     | Type                                                                                                                        | Description                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `interaction` | [`ContextMenuCommandInteraction`](https://discord.js.org/docs/packages/discord.js/main/ContextMenuCommandInteraction:Class) | The interaction that ran this precondition.    |
| `command`     | [`ContextMenuCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ContextMenuCommand)             | The command the interaction invoked.           |
| `context`     | [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext)             | The context for the context menu precondition. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-6 "Direct link to Returns")

[`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-8 "Direct link to Since")

3.0.0

#### Implementation of [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#implementation-of-1 "Direct link to Implementation of")

[`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer). [`contextMenuRun`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer#contextmenurun)

---

### messageRun() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#messagerun "Direct link to messageRun()")

> **messageRun**(`message`: [`Message`](https://discord.js.org/docs/packages/discord.js/main/Message:Class), `command`: [`MessageCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/MessageCommand), `context`: [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext)): [`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:168](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L168)

Runs the container.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-6 "Direct link to Parameters")

| Parameter | Type                                                                                                            | Description                                       |
| --------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `message` | [`Message`](https://discord.js.org/docs/packages/discord.js/main/Message:Class)                                 | The message that ran this precondition.           |
| `command` | [`MessageCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/MessageCommand)         | The command the message invoked.                  |
| `context` | [`PreconditionContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/PreconditionContext) | The context for the message command precondition. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-7 "Direct link to Returns")

[`PreconditionContainerReturn`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionContainerReturn)

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-9 "Direct link to Since")

1.0.0

#### Implementation of [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#implementation-of-2 "Direct link to Implementation of")

[`IPreconditionContainer`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer). [`messageRun`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IPreconditionContainer#messagerun)

---

### parse() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parse "Direct link to parse()")

> `protected` **parse**(`entries`: [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface) < [`PreconditionEntryResolvable`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionEntryResolvable) >): `this`

Defined in: [projects/framework/src/lib/utils/preconditions/PreconditionContainerArray.ts:213](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/utils/preconditions/PreconditionContainerArray.ts#L213)

Parses the precondition entry resolvables, and adds them to the entries.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parameters-7 "Direct link to Parameters")

| Parameter | Type                                                                                                                                                                                                                                              | Description           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `entries` | [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface) < [`PreconditionEntryResolvable`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/PreconditionEntryResolvable) > | The entries to parse. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#returns-8 "Direct link to Returns")

`this`

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since-10 "Direct link to Since")

1.0.0

- [Remark](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#remark)
- [Since](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#since)
- [Implements](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#implements)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#properties)
  - [entries](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#entries)
  - [mode](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#mode)
  - [runCondition](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#runcondition)
  - [conditions](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#conditions)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#accessors)
  - [condition](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#condition)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#methods)
  - [add()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#add)
  - [append()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#append)
  - [chatInputRun()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#chatinputrun)
  - [contextMenuRun()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#contextmenurun)
  - [messageRun()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#messagerun)
  - [parse()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionContainerArray/#parse)
