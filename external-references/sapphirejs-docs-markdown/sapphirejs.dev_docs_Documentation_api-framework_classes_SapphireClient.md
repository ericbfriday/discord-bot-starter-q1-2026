[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/SapphireClient.ts:220](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L220)

The base Client extension that makes Sapphire work. When building a Discord bot with the framework, the developer
must either use this class, or extend it.

Sapphire also automatically detects the folders to scan for pieces, please read StoreRegistry.registerPath
for reference. This method is called at the start of the [SapphireClient.login](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#login) method.

## See [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#see "Direct link to See")

[SapphireClientOptions](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions) for all options available to the Sapphire Client. You can also provide all of discord.js' [ClientOptions](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)

## Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since "Direct link to Since")

1.0.0

## Examples [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#examples "Direct link to Examples")

```typescript
const client = new SapphireClient({
  presence: {
    activity: {
      name: "for commands!",
      type: "LISTENING",
    },
  },
});

client.login(process.env.DISCORD_TOKEN).catch(console.error);
```

```typescript
// Automatically scan from a specific directory, e.g. the main
// file is at `/home/me/bot/index.js` and all your pieces are at
// `/home/me/bot/pieces` (e.g. `/home/me/bot/pieces/commands/MyCommand.js`):
const client = new SapphireClient({
  baseUserDirectory: join(__dirname, "pieces"),
  // More options...
});
```

```typescript
// Opt-out automatic scanning:
const client = new SapphireClient({
  baseUserDirectory: null,
  // More options...
});
```

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#extends "Direct link to Extends")

- [`Client`](https://discord.js.org/docs/packages/discord.js/main/Client:Class) <`Ready`>

## Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#type-parameters "Direct link to Type Parameters")

| Type Parameter             | Default type |
| -------------------------- | ------------ |
| `Ready` _extends_`boolean` | `boolean`    |

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#constructor "Direct link to Constructor")

> **new SapphireClient** <`Ready`>(`options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)): `SapphireClient`<`Ready`>

Defined in: [projects/framework/src/lib/SapphireClient.ts:280](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L280)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface) |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#returns "Direct link to Returns")

`SapphireClient`<`Ready`>

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides "Direct link to Overrides")

`Client<Ready>.constructor`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#properties "Direct link to Properties")

### disableMentionPrefix? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#disablementionprefix "Direct link to disableMentionPrefix?")

> `optional` **disableMentionPrefix**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:272](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L272)

Whether the bot has mention as a prefix disabled

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#default "Direct link to Default")

```ts
false;
```

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#example "Direct link to Example")

```typescript
client.disableMentionPrefix = false;
```

---

### fetchPrefix [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#fetchprefix "Direct link to fetchPrefix")

> **fetchPrefix**: [`SapphirePrefixHook`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphirePrefixHook)

Defined in: [projects/framework/src/lib/SapphireClient.ts:255](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L255)

The method to be overridden by the developer.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since-1 "Direct link to Since")

1.0.0

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#returns-1 "Direct link to Returns")

A string for a single prefix, an array of strings for matching multiple, or null for no match (mention prefix only).

#### Examples [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#examples-1 "Direct link to Examples")

```typescript
// Return always the same prefix (unconfigurable):
client.fetchPrefix = () => "!";
```

```typescript
// Retrieving the prefix from a SQL database:
client.fetchPrefix = async (message) => {
  // note: driver is something generic and depends on how you connect to your database
  const guild = await driver.getOne(
    "SELECT prefix FROM public.guild WHERE id = $1",
    [message.guild.id],
  );
  return guild?.prefix ?? "!";
};
```

```typescript
// Retrieving the prefix from an ORM:
client.fetchPrefix = async (message) => {
  // note: driver is something generic and depends on how you connect to your database
  const guild = await driver
    .getRepository(GuildEntity)
    .findOne({ id: message.guild.id });
  return guild?.prefix ?? "!";
};
```

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides-1 "Direct link to Overrides")

`Client.fetchPrefix`

---

### id [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#id "Direct link to id")

> **id**: `null` \| `string` = `null`

Defined in: [projects/framework/src/lib/SapphireClient.ts:225](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L225)

The client's ID, used for the user prefix.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since-2 "Direct link to Since")

1.0.0

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides-2 "Direct link to Overrides")

`Client.id`

---

### logger [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#logger "Direct link to logger")

> **logger**: [`ILogger`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ILogger)

Defined in: [projects/framework/src/lib/SapphireClient.ts:262](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L262)

The logger to be used by the framework and plugins. By default, a [Logger](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Logger) instance is used, which emits the
messages to the console.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since-3 "Direct link to Since")

1.0.0

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides-3 "Direct link to Overrides")

`Client.logger`

---

### stores [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#stores "Direct link to stores")

> **stores**: `StoreRegistry`

Defined in: [projects/framework/src/lib/SapphireClient.ts:278](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L278)

The registered stores.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since-4 "Direct link to Since")

1.0.0

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides-4 "Direct link to Overrides")

`Client.stores`

---

### plugins [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#plugins "Direct link to plugins")

> `static` **plugins**: [`PluginManager`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PluginManager)

Defined in: [projects/framework/src/lib/SapphireClient.ts:364](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L364)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#methods "Direct link to Methods")

### login() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#login "Direct link to login()")

> **login**(`token?`: `string`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`string`>

Defined in: [projects/framework/src/lib/SapphireClient.ts:339](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L339)

Loads all pieces, then logs the client in, establishing a websocket connection to Discord.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#parameters-1 "Direct link to Parameters")

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `token?`  | `string` | Token of the account to log in with. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#returns-2 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`string`>

Token of the account used.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since-5 "Direct link to Since")

1.0.0

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#overrides-5 "Direct link to Overrides")

`Client.login`

---

### use() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#use "Direct link to use()")

> `static` **use**(`plugin`: _typeof_ [`Plugin`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin)): _typeof_`SapphireClient`

Defined in: [projects/framework/src/lib/SapphireClient.ts:366](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L366)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#parameters-2 "Direct link to Parameters")

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `plugin`  | _typeof_ [`Plugin`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin) |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#returns-3 "Direct link to Returns")

_typeof_`SapphireClient`

- [See](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#see)
- [Since](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#since)
- [Examples](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#examples)
- [Extends](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#extends)
- [Type Parameters](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#type-parameters)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#properties)
  - [disableMentionPrefix?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#disablementionprefix)
  - [fetchPrefix](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#fetchprefix)
  - [id](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#id)
  - [logger](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#logger)
  - [stores](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#stores)
  - [plugins](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#plugins)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#methods)
  - [login()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#login)
  - [use()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient/#use)
