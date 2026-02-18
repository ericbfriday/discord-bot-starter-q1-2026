[Skip to main content](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#__docusaurus_skipToContent_fallback)

On this page

Virtual pieces differ from normal pieces in that they are not loaded from the file system. Instead, they are registered
directly into the [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container). This is useful for several purposes:

- Pieces that are not stored on the file system, such as pieces that are generated at runtime.
- Pieces that are stored on the file system, but are not loaded by Sapphire. For example, this can occur due to runtime
  limitations where file system operations are either restricted or not possible (think: [Serverless Computing ↗️](https://en.wikipedia.org/wiki/Serverless_computing)).
- Bundling the bot into a single file. This is useful for [serverless deployments ↗️](https://en.wikipedia.org/wiki/Serverless_computing), where you cannot rely on the
  file system.

## Registering virtual pieces [​](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#registering-virtual-pieces "Direct link to Registering virtual pieces")

To register a virtual piece, you must use the [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container)'s [`loadPiece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry#loadpiece) method. This method accepts a
piece constructor, a name, and the store the piece belongs to (in `string` form).

- CommonJS
- ESM
- TypeScript

```typescript
const { container, Listener } = require("@sapphire/framework");

class UserListener extends Listener {
  run() {
    // ...
  }
}

void container.stores.loadPiece({
  piece: UserListener,
  name: "ready",
  store: "listeners",
});
```

```typescript
import { container, Listener } from "@sapphire/framework";

class UserListener extends Listener {
  run() {
    // ...
  }
}

void container.stores.loadPiece({
  piece: UserListener,
  name: "ready",
  store: "listeners",
});
```

```typescript
import { container, Listener } from "@sapphire/framework";

class UserListener extends Listener {
  public run() {
    // ...
  }
}

void container.stores.loadPiece({
  piece: UserListener,
  name: "ready",
  store: "listeners",
});
```

note

We use `void` in the above example because the [`loadPiece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry#loadpiece) method returns a Promise. However, we do not need to await
the result of the Promise.

Next, import the file that contains the above code in your entry point:

- CommonJS
- ESM
- TypeScript

```javascript
require("./listeners/ready");
```

```javascript
import "./listeners/ready";
```

```typescript
import "./listeners/ready";
```

This will register the `UserListener` class as a listener with the name `ready`, and queue it for loading. The piece
will be loaded and instantiated when its store's [`loadAll`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) method is called.

The [`loadPiece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/StoreRegistry#loadpiece) method returns a Promise, which:

- If its store's [`loadAll`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) was called, it will load the piece immediately and resolve once it has loaded.
- Otherwise, it will queue the piece to be loaded by its store's [`loadAll`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) and resolve it immediately.

tip

In `@sapphire/framework`, the [`loadAll`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) method is called when the [`SapphireClient#login`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient#login) method is called.

A best practice is to make a `_load` file in each folder that contains virtual pieces. For example, if you have a
`listeners` folder, you can create a `listeners/_load.ts` file that imports all the listeners in that folder:

- CommonJS
- ESM
- TypeScript

```javascript
require("./ready");
```

```javascript
import "./ready";
```

```typescript
import "./ready";
```

Then, import the `_load` file in your entry point:

- CommonJS
- ESM
- TypeScript

```javascript
require("./listeners/_load");
```

```javascript
import "./listeners/_load";
```

```typescript
import "./listeners/_load";
```

## Disabling the File System [​](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#disabling-the-file-system "Direct link to Disabling the File System")

By default, the file system is enabled. This means that pieces are loaded from the file system when their store's
[`loadAll`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Store#loadall) method is called. However, if you are using virtual pieces, you can disable the file system by passing
`null` to the [`SapphireClientOptions#baseUserDirectory`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions#baseuserdirectory) option when instantiating the client.

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({
  baseUserDirectory: null,
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  baseUserDirectory: null,
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  baseUserDirectory: null,
});
```

By default, Sapphire registers the current path as the base user directory. However, since you are using virtual pieces,
you do not need to load pieces from the file system, so you can disable this behavior by using `null`.

If no paths are registered, then the file system will be disabled automatically.

info

`@sapphire/framework` and official plugins support virtual pieces. However, third-party plugins may not support virtual
pieces. If you are using a third-party plugin, make sure to check its documentation or its source code to see if it
supports virtual pieces.

## Limitations [​](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#limitations "Direct link to Limitations")

Virtual pieces have the following limitations:

- Virtual pieces cannot be reloaded. If you need to reload a virtual piece, you must restart your bot.
- Virtual pieces have their location assigned as the value of [`VirtualPath`](https://sapphirejs.dev/docs/Documentation/api-pieces/variables/VirtualPath), and return an empty array for
  `directories`. This means that you cannot use the `directories` property to get the location of a virtual piece, which
  may cause issues for structures that rely on this property, such as [`Command#fullCategory`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command#fullcategory).
- Virtual pieces have to be imported manually, which can require long chains of imports.

- [Registering virtual pieces](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#registering-virtual-pieces)
- [Disabling the File System](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#disabling-the-file-system)
- [Limitations](https://sapphirejs.dev/docs/Guide/additional-information/registering-virtual-pieces/#limitations)
