[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:31](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L31)

A strict-typed store registry. This is available in [container](https://sapphirejs.dev/docs/Documentation/api-pieces/variables/container).

## Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since "Direct link to Since")

2.1.0

## Example [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#example "Direct link to Example")

```typescript
// Adding new stores

// Register the store:
container.stores.register(new RouteStore());

// Augment Sapphire to add the new store, in case of a JavaScript
// project, this can be moved to an `Augments.d.ts` (or any other name)
// file somewhere:
declare module "@sapphire/pieces" {
  export interface StoreRegistryEntries {
    routes: RouteStore;
  }
}
```

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#extends "Direct link to Extends")

- `Collection`< [`StoreRegistryKey`](https://sapphirejs.dev/docs/Documentation/api-pieces/type-aliases/StoreRegistryKey), [`StoreRegistryValue`](https://sapphirejs.dev/docs/Documentation/api-pieces/type-aliases/StoreRegistryValue) >

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructor "Direct link to Constructor")

> **new StoreRegistry**(`entries?`: `null` \| readonly readonly \[`never`, `never`\]\[\]): `StoreRegistry`

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:50

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters "Direct link to Parameters")

| Parameter  | Type                                                 |
| ---------- | ---------------------------------------------------- |
| `entries?` | `null` \| readonly readonly \[`never`, `never`\]\[\] |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns "Direct link to Returns")

`StoreRegistry`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from "Direct link to Inherited from")

`Collection<StoreRegistryKey, StoreRegistryValue>.constructor`

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructor-1 "Direct link to Constructor")

> **new StoreRegistry**(`iterable?`: `null` \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface) <readonly \[`never`, `never`\]>): `StoreRegistry`

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:49

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-1 "Direct link to Parameters")

| Parameter   | Type                                                                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iterable?` | `null` \| [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface) <readonly \[`never`, `never`\]> |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-1 "Direct link to Returns")

`StoreRegistry`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from-1 "Direct link to Inherited from")

`Collection<StoreRegistryKey, StoreRegistryValue>.constructor`

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#methods "Direct link to Methods")

### deregister() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#deregister "Direct link to deregister()")

> **deregister** <`T`>(`store`: [`Store`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store) <`T`>): `this`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:126](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L126)

Deregisters a store.

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#type-parameters "Direct link to Type Parameters")

| Type Parameter                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `T` _extends_ [`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece) < [`PieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/PieceOptions), `never`> |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-2 "Direct link to Parameters")

| Parameter | Type                                                                                | Description              |
| --------- | ----------------------------------------------------------------------------------- | ------------------------ |
| `store`   | [`Store`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store) <`T`> | The store to deregister. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-2 "Direct link to Returns")

`this`

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since-1 "Direct link to Since")

2.1.0

---

### get() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#get "Direct link to get()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#call-signature "Direct link to Call Signature")

> **get** <`K`>(`key`: `K`): [`StoreRegistryEntries`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/StoreRegistryEntries)\[`K`\]

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:184](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L184)

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#type-parameters-1 "Direct link to Type Parameters")

| Type Parameter       |
| -------------------- |
| `K` _extends_`never` |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-3 "Direct link to Parameters")

| Parameter | Type |
| --------- | ---- |
| `key`     | `K`  |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-3 "Direct link to Returns")

[`StoreRegistryEntries`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/StoreRegistryEntries)\[`K`\]

##### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from-2 "Direct link to Inherited from")

`Collection.get`

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#call-signature-1 "Direct link to Call Signature")

> **get**(`key`: `string`): `undefined`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:185](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L185)

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-4 "Direct link to Parameters")

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-4 "Direct link to Returns")

`undefined`

##### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from-3 "Direct link to Inherited from")

`Collection.get`

---

### has() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#has "Direct link to has()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#call-signature-2 "Direct link to Call Signature")

> **has**(`key`: `never`): `true`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:186](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L186)

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-5 "Direct link to Parameters")

| Parameter | Type    |
| --------- | ------- |
| `key`     | `never` |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-5 "Direct link to Returns")

`true`

##### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from-4 "Direct link to Inherited from")

`Collection.has`

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#call-signature-3 "Direct link to Call Signature")

> **has**(`key`: `string`): `false`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:187](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L187)

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-6 "Direct link to Parameters")

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-6 "Direct link to Returns")

`false`

##### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#inherited-from-5 "Direct link to Inherited from")

`Collection.has`

---

### load() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#load "Direct link to load()")

> **load**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:41](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L41)

Loads all the registered stores.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-7 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since-2 "Direct link to Since")

2.1.0

---

### loadPiece() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#loadpiece "Direct link to loadPiece()")

> **loadPiece** <`StoreName`>(`entry`: [`StoreManagerManuallyRegisteredPiece`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/StoreManagerManuallyRegisteredPiece) <`StoreName`>): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:168](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L168)

If the store was [registered](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#register), this method will call the store's
[`() loadPiece()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadpiece) method.

If it was called, the entry will be loaded immediately without queueing.

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#type-parameters-2 "Direct link to Type Parameters")

| Type Parameter               |
| ---------------------------- |
| `StoreName` _extends_`never` |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-7 "Direct link to Parameters")

| Parameter | Type                                                                                                                                                       | Description        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `entry`   | [`StoreManagerManuallyRegisteredPiece`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/StoreManagerManuallyRegisteredPiece) <`StoreName`> | The entry to load. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-8 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`void`>

#### Remarks [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#remarks "Direct link to Remarks")

- Pieces loaded this way will have their [`root`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/LoaderPieceContext#root) and
  [`path`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/LoaderPieceContext#path) set to [`VirtualPath`](https://sapphirejs.dev/docs/Documentation/api-pieces/variables/VirtualPath), and as such, cannot be reloaded.
- This method is useful in environments where file system access is limited or unavailable, such as when using
  [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing).
- This method will not throw an error if a store with the given name does not exist, it will simply be queued
  until it's registered.
- This method will always throw a [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `entry.piece` is not a class.
- If the store is registered, this method will always throw a [`LoaderError`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError) if the piece does not
  extend the registered [`store's piece constructor`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#constructor-1).
- This operation is atomic, if any of the above errors are thrown, the piece will not be loaded.

#### Seealso [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#seealso "Direct link to Seealso")

[`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadpiece)

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since-3 "Direct link to Since")

3.8.0

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#example-1 "Direct link to Example")

```typescript
import { container } from "@sapphire/pieces";

class PingCommand extends Command {
  // ...
}

container.stores.loadPiece({
  store: "commands",
  name: "ping",
  piece: PingCommand,
});
```

---

### register() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#register "Direct link to register()")

> **register** <`T`>(`store`: [`Store`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store) <`T`>): `this`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:105](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L105)

Registers a store.

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#type-parameters-3 "Direct link to Type Parameters")

| Type Parameter                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `T` _extends_ [`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece) < [`PieceOptions`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/PieceOptions), `never`> |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-8 "Direct link to Parameters")

| Parameter | Type                                                                                | Description            |
| --------- | ----------------------------------------------------------------------------------- | ---------------------- |
| `store`   | [`Store`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store) <`T`> | The store to register. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-9 "Direct link to Returns")

`this`

#### Remarks [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#remarks-1 "Direct link to Remarks")

- This method will allow `StoreRegistry` to manage the store, meaning:
  - [`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#registerpath) will call the store's
    [`() registerPath()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#registerpath) method on call.
  - [`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#load) will call the store's [`() load()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#load) method on call.
  - [`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#loadpiece) will call the store's [`() loadPiece()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadpiece) method
    on call.

- This will also add all the manually registered pieces by [`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#loadpiece) in the store.

It is generally recommended to register a store as early as possible, before any of the aforementioned methods
are called, otherwise you will have to manually call the aforementioned methods for the store to work properly.

If there were manually registered pieces for this store with [`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#loadpiece), this method
will add them to the store and delete the queue. Note, however, that this method will not call the store's
[`() loadPiece()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadpiece) method, and as such, the pieces will not be loaded until
[`()`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) is called.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since-4 "Direct link to Since")

2.1.0

---

### registerPath() [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#registerpath "Direct link to registerPath()")

> **registerPath**(`rootDirectory`: `Path`): `void`

Defined in: [projects/pieces/src/lib/structures/StoreRegistry.ts:74](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/structures/StoreRegistry.ts#L74)

Registers all user directories from the process working directory, the default value is obtained by assuming
CommonJS (high accuracy) but with fallback for ECMAScript Modules (reads package.json's `main` entry, fallbacks
to `process.cwd()`).

By default, if you have this folder structure:

```javascript
/home/me/my-bot
├─ src
│  ├─ commands
│  ├─ events
│  └─ main.js
└─ package.json
```

And you run `node src/main.js`, the directories `/home/me/my-bot/src/commands` and `/home/me/my-bot/src/events` will
be registered for the commands and events stores respectively, since both directories are located in the same
directory as your main file.

**Note**: this also registers directories for all other stores, even if they don't have a folder, this allows you
to create new pieces and hot-load them later anytime.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#parameters-9 "Direct link to Parameters")

| Parameter       | Type   | Description                               |
| --------------- | ------ | ----------------------------------------- |
| `rootDirectory` | `Path` | The root directory to register pieces at. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#returns-10 "Direct link to Returns")

`void`

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since-5 "Direct link to Since")

2.1.0

- [Since](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#since)
- [Example](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#example)
- [Extends](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#extends)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructor)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#constructor-1)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#methods)
  - [deregister()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#deregister)
  - [get()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#get)
  - [has()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#has)
  - [load()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#load)
  - [loadPiece()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#loadpiece)
  - [register()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#register)
  - [registerPath()](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry/#registerpath)
