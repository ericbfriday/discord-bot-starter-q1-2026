[Skip to main content](https://sapphirejs.dev/docs/Guide/getting-started/getting-started-with-sapphire/#__docusaurus_skipToContent_fallback)

On this page

To install Sapphire, you need to install both [`discord.js`](https://discord.js.org/) and
[`@sapphire/framework`](https://sapphirejs.dev/). You can do this by running the following command:

- npm
- yarn
- pnpm

```bash
npm install @sapphire/framework discord.js@14.x
```

```bash
yarn add @sapphire/framework discord.js@14.x
```

```bash
pnpm add @sapphire/framework discord.js@14.x
```

warning

You need at least Node.js version 18.x to use Sapphire.

danger

When using Sapphire, it is important that you set a `main` property in your package.json. This is used to determine
where we will need to look for your commands, listeners, and other pieces. If you don't set this property, we will not
be able to automatically find your bot's pieces.

You should set this property to the main file of your project; where you call `client.login()`. For example, if your
`client.login()` is located at `src/index.js`, then you should set your `main` to `src/index.js`.

Here is an example of a package.json file:

```json
{
  "name": "my-awesome-new-bot",
  "main": "src/index.js",
  "dependencies": {
    "@sapphire/framework": "latest",
    "discord.js": "14.x"
  },
  "scripts": {
    "start": "node src/index.js"
  }
}
```

danger

If you want to use message commands in your Sapphire bot, you have to make sure you meet the following prerequisites:

1. Enable the `Message Content Intent` under `Privileged Gateway Intents` on the [Discord Developer Portal](https://discord.com/developers)
   for your application.
2. In your Sapphire client options, set the [`intents`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface#intents) property to include the intents
   [`GatewayIntentBits.GuildMessages`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#GuildMessages), [`GatewayIntentBits.Guilds`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#Guilds), and
   [`GatewayIntentBits.MessageContent`](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#MessageContent).
3. In your Sapphire client options set [`loadMessageCommandListeners`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions#loadmessagecommandlisteners) to `true`.

All in all your code should look something like this:

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");
const { GatewayIntentBits } = require("discord.js");

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  loadMessageCommandListeners: true,
});
```

## Creating an `index.js` file [​](https://sapphirejs.dev/docs/Guide/getting-started/getting-started-with-sapphire/#creating-an-indexjs-file "Direct link to creating-an-indexjs-file")

While it doesn't have to be called `index.js`, this file will be the main file for your bot (otherwise known as the
entry point) as it'll handle the bot's setup and login. It's recommended to put this inside a subdirectory of your
project, typically `src`, both for organization and for [Creating Commands](https://sapphirejs.dev/docs/Guide/getting-started/creating-a-basic-command).

To begin, import `@sapphire/framework` and instantiate [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient). This is where you can customize
Sapphire's and discord.js' behaviour. Sapphire's client extends discord.js', so everything from [`Client`](https://discord.js.org/docs/packages/discord.js/main/Client:Class)
is available in [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient)!

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");
const { GatewayIntentBits } = require("discord.js");

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login("your-token-goes-here");
```

```typescript
import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login("your-token-goes-here");
```

Sapphire detects mention prefixes (`@bot command`), but you can optionally define any number of default prefixes with
the `defaultPrefix` option and `regexPrefix` for more complex cases.

There is also the advanced option [`baseUserDirectory`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions#baseuserdirectory), which allows you to define the base
directory Sapphire will scan. By default, Sapphire registers this as the directory containing your entry point and
locates stores within it. As such, if the root directory is `src`, it will register `src/commands` as one of the command
directories.

danger

You should use environment variables or a `config.json` for your token instead of passing it directly! You can read more
about why you should [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token).

And that's it for your `index.js` file! In the end, your directory should look like this, along with whatever
`.gitignore` or `config.json` files you may have:

```bash
├── node_modules
├── package.json
└── src
    └── index.js
```

- [Creating an `index.js` file](https://sapphirejs.dev/docs/Guide/getting-started/getting-started-with-sapphire/#creating-an-indexjs-file)
