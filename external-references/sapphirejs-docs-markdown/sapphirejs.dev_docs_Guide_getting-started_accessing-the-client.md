[Skip to main content](https://sapphirejs.dev/docs/Guide/getting-started/accessing-the-client/#__docusaurus_skipToContent_fallback)

On this page

Often when writing your [listeners](https://sapphirejs.dev/docs/Guide/listeners/what-are-listeners-and-how-do-they-work), [commands](https://sapphirejs.dev/docs/Guide/commands/application-commands/what-are-application-commands), [preconditions](https://sapphirejs.dev/docs/Guide/preconditions/what-are-preconditions), [arguments](https://sapphirejs.dev/docs/Guide/arguments/creating-your-own-arguments) and other pieces you will want to access
your instance of [SapphireClient](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient). This can be done by accessing the `client` property on the [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container) interface.
The [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container) is a way that Sapphire achieved [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection). There are several ways to access the
[`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container):

## Using `this.container` inside pieces [​](https://sapphirejs.dev/docs/Guide/getting-started/accessing-the-client/#using-thiscontainer-inside-pieces "Direct link to using-thiscontainer-inside-pieces")

When writing code within the closure of a class that extends [`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece) such as a [`Command`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Command), [`Listener`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Listener),
[`Precondition`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition), or [`Argument`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Argument) you can access the container through `this.container`. This is by far the easiest way
to then access the client, as you can simply write `this.container.client`. A quick and dirty example of this is:

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class UserEvent extends Listener {
  run() {
    this.container.logger.info("A user event was received");
  }
}
module.exports = {
  UserEvent,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class UserEvent extends Listener {
  run() {
    this.container.logger.info("A user event was received");
  }
}
```

```typescript
import { Listener } from "@sapphire/framework";

export class UserEvent extends Listener {
  public override run() {
    this.container.logger.info("A user event was received");
  }
}
```

## Importing `container` from Sapphire [​](https://sapphirejs.dev/docs/Guide/getting-started/accessing-the-client/#importing-container-from-sapphire "Direct link to importing-container-from-sapphire")

When writing code outside of the closure of a class that extends [`Piece`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/Piece) you can import the [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container) from either
`@sapphire/framework` or `@sapphire/pieces`. A quick and dirty example of this is:

- CommonJS
- ESM
- TypeScript

```typescript
const { container } = require("@sapphire/framework");

function myVeryCoolFunction() {
  container.logger.info("myVeryCoolFunction was called");
}
module.exports = {
  myVeryCoolFunction,
};
```

```typescript
import { container } from "@sapphire/framework";

export function myVeryCoolFunction() {
  container.logger.info("myVeryCoolFunction was called");
}
```

```typescript
import { container } from "@sapphire/framework";

export function myVeryCoolFunction() {
  container.logger.info("myVeryCoolFunction was called");
}
```

info

`@sapphire/framework` re-exports the [`container`](https://sapphirejs.dev/docs/Documentation/api-pieces/interfaces/Container) from `@sapphire/pieces` so from which you import does not matter,
they are identical.

- [Using `this.container` inside pieces](https://sapphirejs.dev/docs/Guide/getting-started/accessing-the-client/#using-thiscontainer-inside-pieces)
- [Importing `container` from Sapphire](https://sapphirejs.dev/docs/Guide/getting-started/accessing-the-client/#importing-container-from-sapphire)
