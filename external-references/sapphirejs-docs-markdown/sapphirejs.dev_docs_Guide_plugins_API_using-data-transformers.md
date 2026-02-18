[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/using-data-transformers/#__docusaurus_skipToContent_fallback)

Sometimes you may want to add additional data from your bot to the [`LoginData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/LoginData) response from [Using the built in\\
OAUTH2 route (backend)](https://sapphirejs.dev/docs/Guide/plugins/API/using-oauth2-backend-route) and [Refreshing OAUTH2 tokens and Discord data](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token). This can be
done by using a data transformer. On this page we will guide to writing and specifying your data transformer. Note that
you can provide multiple data transformers if you want to separate concerns, each transformer is called in sequence and
receives the data of the preceding transformer (or the base [`LoginData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/LoginData) if it is the first). Each transformer should
also return an object that satisfies interface of [`LoginData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/LoginData).

Lets say we want to add a property that tells us if the bot is in the specific guild, we can add the following
transformer:

- CommonJS
- ESM
- TypeScript

```typescript
const { container } = require("@sapphire/framework");

function transformOauthGuilds(loginData) {
  const { client } = container;

  const transformedGuilds = loginData.guilds?.map((guild) => {
    const cachedGuild = client.guilds.cache.get(guild.id);

    return {
      ...guild,
      botIsInGuild: typeof cachedGuild !== "undefined",
    };
  });

  return { ...loginData, transformedGuilds };
}
module.exports = {
  transformOauthGuilds,
};
```

```typescript
import { container } from "@sapphire/framework";

export function transformOauthGuilds(loginData) {
  const { client } = container;

  const transformedGuilds = loginData.guilds?.map((guild) => {
    const cachedGuild = client.guilds.cache.get(guild.id);

    return {
      ...guild,
      botIsInGuild: typeof cachedGuild !== "undefined",
    };
  });

  return { ...loginData, transformedGuilds };
}
```

```typescript
import { container } from "@sapphire/framework";
import type { LoginData } from "@sapphire/plugin-api";
import type { RESTAPIPartialCurrentUserGuild } from "discord.js";

interface TransformedLoginData extends LoginData {
  transformedGuilds?:
    | (RESTAPIPartialCurrentUserGuild & { botIsInGuild: boolean })[]
    | null;
}

export function transformOauthGuilds(
  loginData: LoginData,
): TransformedLoginData {
  const { client } = container;

  const transformedGuilds = loginData.guilds?.map((guild) => {
    const cachedGuild = client.guilds.cache.get(guild.id);

    return {
      ...guild,
      botIsInGuild: typeof cachedGuild !== "undefined",
    };
  });

  return { ...loginData, transformedGuilds };
}
```

We now specify to the API plugin that we want to use this transformer:

- CommonJS
- ESM
- TypeScript

```typescript
const { SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({
  api: {
    auth: {
      // The other options
      transformers: [transformOauthGuilds],
    },
  },
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  api: {
    auth: {
      // The other options
      transformers: [transformOauthGuilds],
    },
  },
});
```

```typescript
import { SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  api: {
    auth: {
      // The other options
      transformers: [transformOauthGuilds],
    },
  },
});
```
