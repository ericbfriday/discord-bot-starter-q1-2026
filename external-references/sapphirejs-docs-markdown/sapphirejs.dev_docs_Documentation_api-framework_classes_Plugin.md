[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:7](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L7)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#constructor "Direct link to Constructor")

> **new Plugin**(): `Plugin`

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns "Direct link to Returns")

`Plugin`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#properties "Direct link to Properties")

### \[postInitialization\]()? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#postinitialization "Direct link to [postInitialization]()?")

> `static``optional` **\[postInitialization\]**: (`this`: [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient), `options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)) =\> `void`

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:10](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L10)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| `this`    | [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)    |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns-1 "Direct link to Returns")

`void`

---

### \[postLogin\]()? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#postlogin "Direct link to [postLogin]()?")

> `static``optional` **\[postLogin\]**: (`this`: [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient), `options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)) =\> `Awaitable`<`void`>

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:12](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L12)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#parameters-1 "Direct link to Parameters")

| Parameter | Type                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| `this`    | [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)    |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns-2 "Direct link to Returns")

`Awaitable`<`void`>

---

### \[preGenericsInitialization\]()? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#pregenericsinitialization "Direct link to [preGenericsInitialization]()?")

> `static``optional` **\[preGenericsInitialization\]**: (`this`: [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient), `options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)) =\> `void`

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:8](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L8)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#parameters-2 "Direct link to Parameters")

| Parameter | Type                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| `this`    | [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)    |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns-3 "Direct link to Returns")

`void`

---

### \[preInitialization\]()? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#preinitialization "Direct link to [preInitialization]()?")

> `static``optional` **\[preInitialization\]**: (`this`: [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient), `options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)) =\> `void`

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:9](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L9)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#parameters-3 "Direct link to Parameters")

| Parameter | Type                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| `this`    | [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)    |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns-4 "Direct link to Returns")

`void`

---

### \[preLogin\]()? [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#prelogin "Direct link to [preLogin]()?")

> `static``optional` **\[preLogin\]**: (`this`: [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient), `options`: [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)) =\> `Awaitable`<`void`>

Defined in: [projects/framework/src/lib/plugins/Plugin.ts:11](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/plugins/Plugin.ts#L11)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#parameters-4 "Direct link to Parameters")

| Parameter | Type                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------- |
| `this`    | [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient) |
| `options` | [`ClientOptions`](https://discord.js.org/docs/packages/discord.js/main/ClientOptions:Interface)    |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#returns-5 "Direct link to Returns")

`Awaitable`<`void`>

- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#properties)
  - [\[postInitialization\]()?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#postinitialization)
  - [\[postLogin\]()?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#postlogin)
  - [\[preGenericsInitialization\]()?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#pregenericsinitialization)
  - [\[preInitialization\]()?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#preinitialization)
  - [\[preLogin\]()?](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Plugin/#prelogin)
