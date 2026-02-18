[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/SapphireClient.ts:40](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L40)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#properties "Direct link to Properties")

### baseUserDirectory? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#baseuserdirectory "Direct link to baseUserDirectory?")

> `optional` **baseUserDirectory**: `null` \| `string` \| `URL`

Defined in: [projects/framework/src/lib/SapphireClient.ts:48](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L48)

The base user directory, if set to `null`, Sapphire will not call `StoreRegistry.registerPath()`,
meaning that you will need to manually set each folder for each store or use `StoreRegistry.loadPiece()`.
Please read the aforementioned methods' documentation for more information.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default "Direct link to Default")

```ts
undefined;
```

---

### caseInsensitiveCommands? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#caseinsensitivecommands "Direct link to caseInsensitiveCommands?")

> `optional` **caseInsensitiveCommands**: `null` \| `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:55](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L55)

Whether commands can be case-insensitive

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-1 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-1 "Direct link to Default")

```ts
false;
```

---

### caseInsensitivePrefixes? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#caseinsensitiveprefixes "Direct link to caseInsensitivePrefixes?")

> `optional` **caseInsensitivePrefixes**: `null` \| `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:62](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L62)

Whether prefixes can be case-insensitive

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-2 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-2 "Direct link to Default")

```ts
false;
```

---

### defaultCooldown? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#defaultcooldown "Direct link to defaultCooldown?")

> `optional` **defaultCooldown**: [`CooldownOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/CooldownOptions)

Defined in: [projects/framework/src/lib/SapphireClient.ts:149](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L149)

Sets the default cooldown time for all commands.

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-3 "Direct link to Default")

```ts
"No cooldown options";
```

---

### defaultPrefix? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#defaultprefix "Direct link to defaultPrefix?")

> `optional` **defaultPrefix**: [`SapphirePrefix`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/SapphirePrefix)

Defined in: [projects/framework/src/lib/SapphireClient.ts:69](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L69)

The default prefix, in case of `null`, only mention prefix will trigger the bot's commands.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-3 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-4 "Direct link to Default")

```ts
null;
```

---

### disableMentionPrefix? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#disablementionprefix "Direct link to disableMentionPrefix?")

> `optional` **disableMentionPrefix**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:154](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L154)

Controls whether the bot has mention as a prefix disabled

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-5 "Direct link to Default")

```ts
false;
```

---

### enableLoaderTraceLoggings? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#enableloadertraceloggings "Direct link to enableLoaderTraceLoggings?")

> `optional` **enableLoaderTraceLoggings**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:115](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L115)

Whether trace logging should be enabled.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-4 "Direct link to Since")

2.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-6 "Direct link to Default")

```ts
container.logger.has(LogLevel.Trace);
```

---

### fetchPrefix? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#fetchprefix "Direct link to fetchPrefix?")

> `optional` **fetchPrefix**: [`SapphirePrefixHook`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphirePrefixHook)

Defined in: [projects/framework/src/lib/SapphireClient.ts:94](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L94)

The prefix hook, by default it is a callback function that returns [SapphireClientOptions.defaultPrefix](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#defaultprefix).

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-5 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-7 "Direct link to Default")

```ts
() => client.options.defaultPrefix;
```

---

### id? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#id "Direct link to id?")

> `optional` **id**: `string`

Defined in: [projects/framework/src/lib/SapphireClient.ts:101](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L101)

The client's ID, this is automatically set by the CoreReady event.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-6 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-8 "Direct link to Default")

```ts
this.client.user?.id ?? null;
```

---

### loadApplicationCommandRegistriesStatusListeners? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loadapplicationcommandregistriesstatuslisteners "Direct link to loadApplicationCommandRegistriesStatusListeners?")

> `optional` **loadApplicationCommandRegistriesStatusListeners**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:123](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L123)

If Sapphire should load the pre-included application command registries status listeners that log the status of registering application commands to the [SapphireClient.logger](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient#logger) instance.
This includes the events [Events.ApplicationCommandRegistriesInitialising](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events#applicationcommandregistriesinitialising) and [Events.ApplicationCommandRegistriesRegistered](https://sapphirejs.dev/docs/Documentation/api-framework/variables/Events#applicationcommandregistriesregistered).

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-7 "Direct link to Since")

4.4.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-9 "Direct link to Default")

```ts
true;
```

---

### loadDefaultErrorListeners? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loaddefaulterrorlisteners "Direct link to loadDefaultErrorListeners?")

> `optional` **loadDefaultErrorListeners**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:130](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L130)

If Sapphire should load the pre-included error event listeners that log any encountered errors to the [SapphireClient.logger](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient#logger) instance

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-8 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-10 "Direct link to Default")

```ts
true;
```

---

### loadMessageCommandListeners? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loadmessagecommandlisteners "Direct link to loadMessageCommandListeners?")

> `optional` **loadMessageCommandListeners**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:137](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L137)

If Sapphire should load the pre-included message command listeners that are used to process incoming messages for commands.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-9 "Direct link to Since")

3.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-11 "Direct link to Default")

```ts
false;
```

---

### logger? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#logger "Direct link to logger?")

> `optional` **logger**: [`ClientLoggerOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ClientLoggerOptions)

Defined in: [projects/framework/src/lib/SapphireClient.ts:108](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L108)

The logger options, defaults to an instance of [Logger](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Logger) when [ClientLoggerOptions.instance](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ClientLoggerOptions#instance) is not specified.

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-10 "Direct link to Since")

1.0.0

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-12 "Direct link to Default")

```ts
{
  instance: new Logger(LogLevel.Info);
}
```

---

### preventFailedToFetchLogForGuilds? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#preventfailedtofetchlogforguilds "Direct link to preventFailedToFetchLogForGuilds?")

> `optional` **preventFailedToFetchLogForGuilds**: `true` \| `string`\[\]

Defined in: [projects/framework/src/lib/SapphireClient.ts:172](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L172)

Whenever starting the bot process Sapphire may report errors when failing to fetch guild commands.
One of the causes for this can be when a bot was invited to a server without the `application.commands` scope.

Normally this produce a log in the console at the WARN level, however because bot lists have a tendency to invite your
bot specifically without the scope to ensure that your Chat Input and Context Menu commands do not show up as usable commands
in that server, you may want to include their guild ids in this list.

By adding ids to this list, whenever a guild id matches one of the ids in the list no warning log message will be emitted for that guild.

By setting this value to `true`, no warning log message will be emitted for any guilds we couldn't fetch the commands from.

Note that this specifically applies to the warning log:

> ApplicationCommandRegistries: Failed to fetch guild commands for guild <guild name> (<guild id>). Make sure to authorize your application with the "applications.commands" scope in that guild.

---

### regexPrefix? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#regexprefix "Direct link to regexPrefix?")

> `optional` **regexPrefix**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Defined in: [projects/framework/src/lib/SapphireClient.ts:87](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L87)

The regex prefix, an alternative to a mention or regular prefix to allow creating natural language command messages

#### Since [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#since-11 "Direct link to Since")

1.0.0

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#example "Direct link to Example")

```typescript
/^(hey +)?bot[,! ]/i;

// Matches:
// - hey bot,
// - hey bot!
// - hey bot
// - bot,
// - bot!
// - bot
```

---

### typing? [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#typing "Direct link to typing?")

> `optional` **typing**: `boolean`

Defined in: [projects/framework/src/lib/SapphireClient.ts:143](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L143)

Controls whether the bot will automatically appear to be typing when a command is accepted.

#### Default [​](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#default-13 "Direct link to Default")

```ts
false;
```

- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#properties)
  - [baseUserDirectory?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#baseuserdirectory)
  - [caseInsensitiveCommands?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#caseinsensitivecommands)
  - [caseInsensitivePrefixes?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#caseinsensitiveprefixes)
  - [defaultCooldown?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#defaultcooldown)
  - [defaultPrefix?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#defaultprefix)
  - [disableMentionPrefix?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#disablementionprefix)
  - [enableLoaderTraceLoggings?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#enableloadertraceloggings)
  - [fetchPrefix?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#fetchprefix)
  - [id?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#id)
  - [loadApplicationCommandRegistriesStatusListeners?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loadapplicationcommandregistriesstatuslisteners)
  - [loadDefaultErrorListeners?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loaddefaulterrorlisteners)
  - [loadMessageCommandListeners?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#loadmessagecommandlisteners)
  - [logger?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#logger)
  - [preventFailedToFetchLogForGuilds?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#preventfailedtofetchlogforguilds)
  - [regexPrefix?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#regexprefix)
  - [typing?](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/SapphireClientOptions/#typing)
