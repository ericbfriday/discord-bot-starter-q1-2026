[Skip to main content](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#__docusaurus_skipToContent_fallback)

On this page

warning

This section is only for the message command and is not relevant for the other command types. If you are looking for how
to use arguments in your `Slash command` then please refer to the [`discord.js guide`](https://discordjs.guide/slash-commands/parsing-options.html#parsing-options) about
adding options to your command.

Often when using commands, you may want to get data from the user and change the response accordingly. In this section,
we'll demonstrate how to create a command that pulls a string from the message and echoes it back to the user!

## String arguments [​](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#string-arguments "Direct link to String arguments")

A `string` argument is any textual data after the command's invocation. For example, in `@bot say Hello!`, `Hello!`
would be the first string argument; however, note that multiple words (e.g. `Hello there!`) are separated individually
into multiple arguments. We'll look into how to handle those later.

In your `commands` folder, make a new file called `echo.js` and set up the command class just like the one in the `ping`
command.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class EchoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      aliases: ["parrot", "copy"],
      description: "Replies with the text you provide",
    });
  }

  async messageRun(message, args) {
    // ...
  }
}
module.exports = {
  EchoCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class EchoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      aliases: ["parrot", "copy"],
      description: "Replies with the text you provide",
    });
  }

  async messageRun(message, args) {
    // ...
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class EchoCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      aliases: ["parrot", "copy"],
      description: "Replies with the text you provide",
    });
  }

  public async messageRun(message: Message, args: Args) {
    // ...
  }
}
```

We have a new parameter in the `messageRun` method: `args`! This is a structure that abstracts all the argument parsing
and resolution.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class EchoCommand extends Command {
  async messageRun(message, args) {
    const text = await args.pick("string");
    await message.channel.send(text);
  }
}
module.exports = {
  EchoCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class EchoCommand extends Command {
  async messageRun(message, args) {
    const text = await args.pick("string");
    await message.channel.send(text);
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class EchoCommand extends Command {
  public async messageRun(message: Message, args: Args) {
    const text = await args.pick("string");
    await message.channel.send(text);
  }
}
```

Sapphire's arguments work by consuming the delimited elements of user input one by one upon success, similar to how an
[`iterator` ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterators) works. We'll go into more details and examples in another command.

In this command, [`args.pick('<type>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) is used to read a single argument from the user's input. The `<type>`
here is `string`, so it'll return the argument as-is since all data in a message's body is textual.

If `@bot say Hello there!` is sent, it'll return `Hello` since each word is split into its own argument as
aforementioned, so `Hello there!` is converted to `['Hello', 'there!']` but [`args.pick()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) only reads one
argument. However, there are alternatives:

- **Quoted arguments**: If the argument content is quoted, e.g. `"Hello there!"` or `“Hello there!”` instead of
  `Hello there!`, the entire argument (excluding the quotes) will be read as one.

- **[`args.rest()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#rest), such as**:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class EchoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      quotes: [],
    });
  }

  async messageRun(message, args) {
    const text = await args.rest("string");
    await message.channel.send(text);
  }
}
module.exports = {
  EchoCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class EchoCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      quotes: [],
    });
  }

  async messageRun(message, args) {
    const text = await args.rest("string");
    await message.channel.send(text);
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class EchoCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      quotes: [],
    });
  }

  public async messageRun(message: Message, args: Args) {
    const text = await args.rest("string");
    await message.channel.send(text);
  }
}
```

By default, `Command` defines 4 pairs of valid quotes:

- `"` and `"` (double quotes)
- `“` and `”` (iOS smart quotes)
- `「` and `」` (CJK corner brackets)
- `«` and `»` (French Quotes)

This is troublesome if you want to allow sending quotes within the content, as those would be excluded from `rest`, so
`quotes` must be set to an empty array. This way, when `@bot echo Hello "there!"` is sent, your bot will reply with
`Hello "there!"`.

warning

[`args.rest()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#rest) consumes all the arguments and then processes them, so you will not be able to consume any more
arguments after it.

## Multiple arguments [​](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#multiple-arguments "Direct link to Multiple arguments")

Let's make an `add` command, which takes two numbers and adds them. Create an `add.js` file in your `commands` folder
and set up the command class again. Since two arguments are needed, use [`args.pick()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) twice:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const a = await args.pick("number");
    const b = await args.pick("number");
    return message.channel.send(`The result is ${a + b}!`);
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const a = await args.pick("number");
    const b = await args.pick("number");
    return message.channel.send(`The result is ${a + b}!`);
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  public async messageRun(message: Message, args: Args) {
    const a = await args.pick("number");
    const b = await args.pick("number");
    return message.channel.send(`The result is ${a + b}!`);
  }
}
```

Each time [`args.pick('<type>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) is called, it consumes the next argument and parses it as the `<type>` given, so
`@bot add 1 2` would return `The result is 3!` for instance.

## Optional arguments [​](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#optional-arguments "Direct link to Optional arguments")

Sapphire offers two options regarding optional arguments. Let's make a `pow.js` command that takes two numbers, where
the `base` is required, and the `exponent` defaults to 2.

- **Optional Pattern**

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  async messageRun(message, args) {
    const base = await args.pick("number");
    const exponent = await args.pick("number").catch(() => 2);
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  async messageRun(message, args) {
    const base = await args.pick("number");
    const exponent = await args.pick("number").catch(() => 2);
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public async messageRun(message: Message, args: Args) {
    const base = await args.pick("number");
    const exponent = await args.pick("number").catch(() => 2);
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
```

Since `exponent` defaults to `2`, this allows users to send `@bot pow 4`, returning `The result is 16!`. However, this
pattern ignores any possible errors, including invalid numbers, so `@bot pow 4 hello!` would return the same response as
before. There is another pattern that enables you to use optional arguments but retain error reporting:

- **Semi-required Pattern**

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  async messageRun(message, args) {
    const base = await args.pick("number");
    const exponent = args.finished ? 2 : await args.pick("number");
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  async messageRun(message, args) {
    const base = await args.pick("number");
    const exponent = args.finished ? 2 : await args.pick("number");
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public async messageRun(message: Message, args: Args) {
    const base = await args.pick("number");
    const exponent = args.finished ? 2 : await args.pick("number");
    return message.channel.send(`The result is ${Math.pow(base, exponent)}!`);
  }
}
```

This is slightly more verbose, but it only uses the default value for `exponent` of `2` if there were no arguments left
to parse, so `@bot pow 4` will return `The result is 16!`, while `@bot pow 4 hello!` will return an error.

Each pattern has its use-cases. The former is especially helpful for handling several optional arguments, although you
can also distinguish all errors by checking `error.identifier`. This way you can tell why something failed to parse, for
instance, a number may fail to parse if the user did not provide a valid number.

## Repeating arguments [​](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#repeating-arguments "Direct link to Repeating arguments")

To work with repeating arguments, you can use [`args.repeat()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#repeat), which works like [`args.pick()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) but
returns an array of parsed elements, resolving when it can validate at least the first argument.

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  async messageRun(message, args) {
    const numbers = await args.repeat("number");
    return message.channel.send(
      `The highest number is ${Math.max(...numbers)}!`,
    );
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  async messageRun(message, args) {
    const numbers = await args.repeat("number");
    return message.channel.send(
      `The highest number is ${Math.max(...numbers)}!`,
    );
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public async messageRun(message: Message, args: Args) {
    const numbers = await args.repeat("number");
    return message.channel.send(
      `The highest number is ${Math.max(...numbers)}!`,
    );
  }
}
```

Sapphire will try to parse all the arguments until there are none left to consume or one fails to parse. As such, the
following inputs will yield the following results:

- `@bot max 42 2 5 60 3` will return `The highest number is 60!`.
- `@bot max aa 42 2 5 6` will throw an error as it cannot parse `aa` to a number.
- `@bot max 42 2 5 aa 60` will return `The highest number is 42!`. The `60` is not included because it stopped parsing
  at `aa`.

While the last case seems restrictive, it can be used to parse repeated arguments at any given position in the user's
input. For example, a `ban` command that takes multiple users could be written as:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const members = await args.repeat("member");
    const reason = args.finished ? null : args.rest("string");

    // ...
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const members = await args.repeat("member");
    const reason = args.finished ? null : args.rest("string");

    // ...
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  public async messageRun(message: Message, args: Args) {
    const members = await args.repeat("member");
    const reason = args.finished ? null : args.rest("string");

    // ...
  }
}
```

The code above allows the following uses:

- `@bot ban @User1 Hello there` (`members` is `[User1]` and `reason` is `'Hello there'`).
- `@bot ban @User1 @User2` (`members` is `[User1, User2]` and `reason` is `null`).
- `@bot ban Hello there` throws an error as it could not match a member.

Additionally, we can tell the argument parser how many times it should parse at most by specifying `times` when we call
[`args.repeat()`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#repeat):

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const members = await args.repeat("member", { times: 5 });
    // ...
  }
}
module.exports = {
  MathsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class MathsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  async messageRun(message, args) {
    const members = await args.repeat("member", { times: 5 });
    // ...
  }
}
```

```typescript
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class MathsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      description: "Adds two numbers",
    });
  }

  public async messageRun(message: Message, args: Args) {
    const members = await args.repeat("member", { times: 5 });
    // ...
  }
}
```

The code above matches any number of members up to 5, so it will never return an array of 6 or more.

- [String arguments](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#string-arguments)
- [Multiple arguments](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#multiple-arguments)
- [Optional arguments](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#optional-arguments)
- [Repeating arguments](https://sapphirejs.dev/docs/Guide/arguments/using-arguments/#repeating-arguments)
