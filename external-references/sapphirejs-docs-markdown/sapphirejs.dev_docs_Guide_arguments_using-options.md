[Skip to main content](https://sapphirejs.dev/docs/Guide/arguments/using-options/#__docusaurus_skipToContent_fallback)

On this page

Now that we've gone over boolean flags, what if we want a string instead of a boolean value? That's where options come
in. Options are formatted like flags, but followed by `=value`. For example, an option could be `--size=2048`. Users of
UNIX-like command-line tools may once again be familiar with this format, such as in `help --find=entry`.

Just like with flags, you can use options in two ways: declarative and imperative.

tip

Options are either strings, an array of strings, or `undefined`.

warning

When an option is read through [`args.getOption('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption) but it is not provided by the user, the
value of that variable will default to `undefined`.

## Imperative Options [​](https://sapphirejs.dev/docs/Guide/arguments/using-options/#imperative-options "Direct link to Imperative Options")

Imperative options are options you specify in the command options, and using them means Sapphire will _only_ parse the
specified options.

We recommend this method because it can avoid unexpected situations where something, for example in
[`args.rest('string')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#rest), is parsed as an option mistakenly.

To add imperative options to your command you specify them in your command's options, like so:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  async messageRun(message, args) {}
}
module.exports = {
  OptionsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  async messageRun(message, args) {}
}
```

```typescript
import { ApplyOptions } from "@sapphire/decorators";
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class OptionsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  public async messageRun(message: Message, args: Args) {}
}
```

info

We only parse the options that you specify when using imperative options. If the user provides anything else like
`--this=cool`, that won't be parsed as options with this code, because we only set `--size=`.

Next, to read the values for the provided options we use [`args.getOption('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption) or
[`args.getOptions('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption)

The difference between [`args.getOption('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption) and [`args.getOptions('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoptions)
is that the former will only read the _last_ value provided for an option and return a `string`, whereas the latter will
read _all_ values provided and return an array of strings.

For example, consider the following:

- `@bot avatar --size=2048 --size=4096` with `getOption` will return `'4096'`
- `@bot avatar --size=2048 --size=4096` with `getOptions` will return `['2048', '4096']`

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  async messageRun(message, args) {
    const sizeForAvatar = args.getOption("size");
  }
}
module.exports = {
  OptionsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  async messageRun(message, args) {
    const sizeForAvatar = args.getOption("size");
  }
}
```

```typescript
import { ApplyOptions } from "@sapphire/decorators";
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class OptionsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      options: ["size"],
    });
  }

  public async messageRun(message: Message, args: Args) {
    const sizeForAvatar = args.getOption("size");
  }
}
```

info

Unlike methods like [`args.pick`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#pick) and [`args.rest`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#rest), [`args.getOption('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption) and
[`args.getOptions('<optionName>')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#getoption) aren't asynchronous, so they don't need to be awaited - they return
regular strings, arrays of strings, or undefined, rather than a promise.

## Declarative Options [​](https://sapphirejs.dev/docs/Guide/arguments/using-options/#declarative-options "Direct link to Declarative Options")

When opting for declarative options it means that Sapphire will try to parse everything that starts with 2 consecutive
hyphens. That means that `--these=.. --will=... --all=.. --be=... --options=...`. This can lead to unexpected
situations, especially when using [`args.rest('string')`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args#rest). However, the flipside is that it's easy for you as a
developer because you won't need to keep track of what options you have specified and are trying to get from the args.

To use and configure declarative options you can follow most of the same for imperative options, with the difference
being that instead of providing an array of items to the options option, you simply set that property to `true`. Here is
an example:

- CommonJS
- ESM
- TypeScript

```typescript
const { Command } = require("@sapphire/framework");

class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: true,
    });
  }

  async messageRun(message, args) {
    const [size, format] = args.getOptions("size", "format");
  }
}
module.exports = {
  OptionsCommand,
};
```

```typescript
import { Command } from "@sapphire/framework";

export class OptionsCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      options: true,
    });
  }

  async messageRun(message, args) {
    const [size, format] = args.getOptions("size", "format");
  }
}
```

```typescript
import { ApplyOptions } from "@sapphire/decorators";
import { Command, Args } from "@sapphire/framework";
import type { Message } from "discord.js";

export class OptionsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      options: true,
    });
  }

  public async messageRun(message: Message, args: Args) {
    const [size, format] = args.getOptions("size", "format");
  }
}
```

- [Imperative Options](https://sapphirejs.dev/docs/Guide/arguments/using-options/#imperative-options)
- [Declarative Options](https://sapphirejs.dev/docs/Guide/arguments/using-options/#declarative-options)
