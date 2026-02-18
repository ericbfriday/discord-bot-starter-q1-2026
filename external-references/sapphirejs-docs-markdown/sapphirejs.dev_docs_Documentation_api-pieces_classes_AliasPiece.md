[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/pieces/src/lib/structures/AliasPiece.ts:15](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/AliasPiece.ts#L15)

The piece to be stored in [AliasStore](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasStore) instances.

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#extends "Direct link to Extends")

- [`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece) <`Options`, `StoreName`>

## Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#type-parameters "Direct link to Type Parameters")

| Type Parameter                                                                                                                 | Default type                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `Options` _extends_ [`AliasPieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceOptions)   | [`AliasPieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceOptions) |
| `StoreName` _extends_ [`StoreRegistryKey`](https://sapphirejs.dev/docs/Documentation/api-pieces/type-aliases/StoreRegistryKey) | [`StoreRegistryKey`](https://sapphirejs.dev/docs/Documentation/api-pieces/type-aliases/StoreRegistryKey) |

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#constructor "Direct link to Constructor")

> **new AliasPiece** <`Options`, `StoreName`>(`context`: [`LoaderContext`](https://sapphirejs.dev/docs/Documentation/api-pieces/@sapphire/namespaces/AliasPiece/type-aliases/LoaderContext) <`StoreName`>, `options`: [`AliasPieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceOptions)): `AliasPiece`<`Options`, `StoreName`>

Defined in: [projects/pieces/src/lib/structures/AliasPiece.ts:24](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/AliasPiece.ts#L24)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`LoaderContext`](https://sapphirejs.dev/docs/Documentation/api-pieces/@sapphire/namespaces/AliasPiece/type-aliases/LoaderContext) <`StoreName`> |
| `options` | [`AliasPieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceOptions)                                         |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns "Direct link to Returns")

`AliasPiece`<`Options`, `StoreName`>

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#overrides "Direct link to Overrides")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`constructor`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#constructor)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#properties "Direct link to Properties")

### aliases [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#aliases "Direct link to aliases")

> **aliases**: readonly `string`\[\]

Defined in: [projects/pieces/src/lib/structures/AliasPiece.ts:22](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/AliasPiece.ts#L22)

The aliases for the piece.

---

### enabled [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#enabled "Direct link to enabled")

> **enabled**: `boolean`

Defined in: [projects/pieces/src/lib/structures/Piece.ts:75](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L75)

Whether or not the piece is enabled.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`enabled`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#enabled)

---

### location [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#location "Direct link to location")

> `readonly` **location**: [`PieceLocation`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/PieceLocation)

Defined in: [projects/pieces/src/lib/structures/Piece.ts:65](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L65)

The location metadata for the piece's file.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-1 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`location`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#location)

---

### name [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#name "Direct link to name")

> `readonly` **name**: `string`

Defined in: [projects/pieces/src/lib/structures/Piece.ts:70](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L70)

The name of the piece.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-2 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`name`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#name)

---

### options [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#options "Direct link to options")

> `readonly` **options**: `Options`

Defined in: [projects/pieces/src/lib/structures/Piece.ts:80](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L80)

The raw options passed to this [Piece](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece)

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-3 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`options`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#options-1)

---

### store [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#store "Direct link to store")

> `readonly` **store**: [`StoreOf`](https://sapphirejs.dev/docs/Documentation/api-pieces/type-aliases/StoreOf) <`StoreName`>

Defined in: [projects/pieces/src/lib/structures/Piece.ts:60](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L60)

The store that contains the piece.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-4 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`store`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#store)

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#accessors "Direct link to Accessors")

### container [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#container "Direct link to container")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#get-signature "Direct link to Get Signature")

> **get** **container**(): [`Container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container)

Defined in: [projects/pieces/src/lib/structures/Piece.ts:94](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L94)

A reference to the [Container](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container) object for ease of use.

##### See [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#see "Direct link to See")

container

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-1 "Direct link to Returns")

[`Container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container)

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-5 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#container)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#methods "Direct link to Methods")

### onLoad() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#onload "Direct link to onLoad()")

> **onLoad**(): `unknown`

Defined in: [projects/pieces/src/lib/structures/Piece.ts:102](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L102)

Per-piece listener that is called when the piece is loaded into the store.
Useful to set-up asynchronous initialization tasks.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-2 "Direct link to Returns")

`unknown`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-6 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`onLoad`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#onload)

---

### onUnload() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#onunload "Direct link to onUnload()")

> **onUnload**(): `unknown`

Defined in: [projects/pieces/src/lib/structures/Piece.ts:110](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L110)

Per-piece listener that is called when the piece is unloaded from the store.
Useful to set-up clean-up tasks.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-3 "Direct link to Returns")

`unknown`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-7 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`onUnload`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#onunload)

---

### reload() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#reload "Direct link to reload()")

> **reload**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

Defined in: [projects/pieces/src/lib/structures/Piece.ts:125](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L125)

Reloads the piece by loading the same path in the store.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-4 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-8 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`reload`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#reload)

---

### toJSON() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#tojson "Direct link to toJSON()")

> **toJSON**(): [`AliasPieceJSON`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceJSON)

Defined in: [projects/pieces/src/lib/structures/AliasPiece.ts:32](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/AliasPiece.ts#L32)

Defines the `JSON.stringify` behavior of this alias piece.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-5 "Direct link to Returns")

[`AliasPieceJSON`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/AliasPieceJSON)

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#overrides-1 "Direct link to Overrides")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`toJSON`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#tojson)

---

### unload() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#unload "Direct link to unload()")

> **unload**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

Defined in: [projects/pieces/src/lib/structures/Piece.ts:117](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/Piece.ts#L117)

Unloads and disables the piece.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#returns-6 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#inherited-from-9 "Direct link to Inherited from")

[`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece). [`unload`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece#unload)

- [Extends](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#extends)
- [Type Parameters](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#type-parameters)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#properties)
  - [aliases](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#aliases)
  - [enabled](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#enabled)
  - [location](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#location)
  - [name](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#name)
  - [options](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#options)
  - [store](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#store)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#accessors)
  - [container](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#container)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#methods)
  - [onLoad()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#onload)
  - [onUnload()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#onunload)
  - [reload()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#reload)
  - [toJSON()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#tojson)
  - [unload()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/AliasPiece/#unload)
