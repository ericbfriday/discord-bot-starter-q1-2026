[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/structures/CommandStore.ts:18](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/structures/CommandStore.ts#L18)

Stores all Command pieces

## Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#since "Direct link to Since")

1.0.0

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#extends "Direct link to Extends")

- `AliasStore`< [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command), `"commands"`>

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#constructor "Direct link to Constructor")

> **new CommandStore**(): `CommandStore`

Defined in: [projects/framework/src/lib/structures/CommandStore.ts:19](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/structures/CommandStore.ts#L19)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#returns "Direct link to Returns")

`CommandStore`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#overrides "Direct link to Overrides")

`AliasStore<Command, 'commands'>.constructor`

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#accessors "Direct link to Accessors")

### categories [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#categories "Direct link to categories")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#get-signature "Direct link to Get Signature")

> **get** **categories**(): `string`\[\]

Defined in: [projects/framework/src/lib/structures/CommandStore.ts:26](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/structures/CommandStore.ts#L26)

Get all the command categories.

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#returns-1 "Direct link to Returns")

`string`\[\]

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#methods "Direct link to Methods")

### loadAll() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#loadall "Direct link to loadAll()")

> **loadAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

Defined in: [projects/framework/src/lib/structures/CommandStore.ts:56](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/structures/CommandStore.ts#L56)

Loads all pieces from all directories specified by paths.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#returns-2 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#overrides-1 "Direct link to Overrides")

`AliasStore.loadAll`

---

### unload() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#unload "Direct link to unload()")

> **unload**(`name`: `string` \| [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) < [`Args`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args), [`CommandOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions) >): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) < [`Args`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args), [`CommandOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions) >>

Defined in: [projects/framework/src/lib/structures/CommandStore.ts:32](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/structures/CommandStore.ts#L32)

Unloads a piece given its instance or its name, and removes all the aliases.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                                                                                                                                                                                       | Description                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `name`    | `string` \| [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) < [`Args`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args), [`CommandOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions) > | The name of the file to load. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#returns-3 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command) < [`Args`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args), [`CommandOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CommandOptions) >>

Returns the piece that was unloaded.

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#overrides-2 "Direct link to Overrides")

`AliasStore.unload`

- [Since](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#since)
- [Extends](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#extends)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#constructor)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#accessors)
  - [categories](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#categories)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#methods)
  - [loadAll()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#loadall)
  - [unload()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/CommandStore/#unload)
