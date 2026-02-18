[Skip to main content](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#__docusaurus_skipToContent_fallback)

On this page

Similar to what you learned in both [Creating Commands](https://sapphirejs.dev/docs/Guide/getting-started/creating-a-basic-command) and [Creating\\
Preconditions](https://sapphirejs.dev/docs/Guide/preconditions/creating-your-own-preconditions), we will create a `listeners` subdirectory in your project's entry point
directory. In this document, we'll make a `ready` event listener.

Your directory should now look something like this:

- CommonJS
- ESM
- TypeScript

```bash
├── node_modules
├── package.json
└── src
    ├── commands
    │   └── ping.js
    ├── index.js
    └── listeners
        └── ready.js
```

```bash
├── node_modules
├── package.json
└── src
    ├── commands
    │   └── ping.mjs
    ├── index.mjs
    └── listeners
        └── ready.mjs
```

```bash
├── node_modules
├── package.json
└── src
    ├── commands
    │   └── ping.ts
    ├── index.ts
    └── listeners
        └── ready.ts
```

## Creating a listener class [​](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#creating-a-listener-class "Direct link to Creating a listener class")

To create a listener in Sapphire, the [`Listener`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Listener) class needs to be extended from `@sapphire/framework` and exported
from a listener file.

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class ReadyListener extends Listener {}
module.exports = {
  ReadyListener,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {}
```

```typescript
import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {}
```

Let's begin populating the listener class with our desired options, specifying that it'll only run once and listens for
the `ready` event:

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      once: true,
      event: "ready",
    });
  }
}
module.exports = {
  ReadyListener,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      once: true,
      event: "ready",
    });
  }
}
```

```typescript
import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {
  public constructor(
    context: Listener.LoaderContext,
    options: Listener.Options,
  ) {
    super(context, {
      ...options,
      once: true,
      event: "ready",
    });
  }
}
```

An overview of what's defined in the constructor:

- `context`: an object that contains file metadata required by the `Piece` class (which `Command` extends) in order to
  function.
- `name`: by default, the name of the file without the extension, i.e. `ready.js` becomes `ready`, so there's no need to
  define it.
- `event`: by default, the resolved `name`, which represents the event to listen for.
- `once`: by default `false`, but since we want the listener to fire only once, we will set it to `true`.

If you pay attention to the example, the `event` field is unnecessary. This allows you to omit constructors when the
file name matches the event's name and no other options need to be changed.

## Creating the `run` method [​](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#creating-the-run-method "Direct link to creating-the-run-method")

warning

Unlike commands, listeners use `run` methods instead of `messageRun`. This distinction is made because listeners do not
typically run from message contexts, and commands need different methods to support slash commands or context actions.

Listeners have a `run` method, which executes the listener logic. Define this below the listener's constructor:

- CommonJS
- ESM
- TypeScript

```typescript
const { Listener } = require("@sapphire/framework");

class ReadyListener extends Listener {
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
  }
}
module.exports = {
  ReadyListener,
};
```

```typescript
import { Listener } from "@sapphire/framework";

export class ReadyListener extends Listener {
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
  }
}
```

```typescript
import { Listener } from "@sapphire/framework";
import type { Client } from "discord.js";

export class ReadyListener extends Listener {
  public run(client: Client) {
    const { username, id } = client.user!;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
  }
}
```

Once discord.js emits the `ready` event, `run` will be executed, and the piece will then be unloaded since `once` is
set. This code is equivalent to the following:

- CommonJS
- ESM
- TypeScript

```typescript
client.once("ready", (client) => {
  const { username, id } = client.user;
  container.logger.info(`Successfully logged in as ${username} (${id})`);
});
```

```typescript
client.once("ready", (client) => {
  const { username, id } = client.user;
  container.logger.info(`Successfully logged in as ${username} (${id})`);
});
```

```typescript
client.once("ready", (client) => {
  const { username, id } = client.user!;
  container.logger.info(`Successfully logged in as ${username} (${id})`);
});
```

## Duplicated listeners [​](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#duplicated-listeners "Direct link to Duplicated listeners")

You may want to create multiple listeners executing different logic that listen to the same event for use cases like
auto-moderation. While Sapphire does not allow you to declare pieces with the same name, you can give them different
names and specify the same `event` field.

A common practice is to name the listeners by joining the event's name with the purpose of the piece. For example, if
you have a `guildMemberAdd` listener that sends a log to a channel and another that sends a greeting message, you can
name them `guildMemberAddSendLog` and `guildMemberAddSendGreeting` respectively, specifying
`{ event: 'guildMemberAdd' }` in both of their options.

- [Creating a listener class](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#creating-a-listener-class)
- [Creating the `run` method](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#creating-the-run-method)
- [Duplicated listeners](https://sapphirejs.dev/docs/Guide/listeners/creating-your-own-listeners/#duplicated-listeners)
