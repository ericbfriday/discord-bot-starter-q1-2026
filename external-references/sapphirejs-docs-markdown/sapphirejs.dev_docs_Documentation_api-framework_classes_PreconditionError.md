[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/errors/PreconditionError.ts:8](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/PreconditionError.ts#L8)

Errors thrown by preconditions

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#extends "Direct link to Extends")

- [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#constructor "Direct link to Constructor")

> **new PreconditionError**(`options`: [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/PreconditionError/interfaces/Options)): `PreconditionError`

Defined in: [projects/framework/src/lib/errors/PreconditionError.ts:11](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/PreconditionError.ts#L11)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `options` | [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/PreconditionError/interfaces/Options) |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#returns "Direct link to Returns")

`PreconditionError`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#overrides "Direct link to Overrides")

[`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError). [`constructor`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError#constructor)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#properties "Direct link to Properties")

### context [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#context "Direct link to context")

> `readonly` **context**: `unknown`

Defined in: [projects/framework/src/lib/errors/UserError.ts:22](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L22)

User-provided context.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#inherited-from "Direct link to Inherited from")

[`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError). [`context`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError#context)

---

### identifier [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#identifier "Direct link to identifier")

> `readonly` **identifier**: `string`

Defined in: [projects/framework/src/lib/errors/UserError.ts:17](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L17)

An identifier, useful to localize emitted errors.

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#inherited-from-1 "Direct link to Inherited from")

[`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError). [`identifier`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError#identifier)

---

### precondition [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#precondition "Direct link to precondition")

> `readonly` **precondition**: [`Precondition`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Precondition)

Defined in: [projects/framework/src/lib/errors/PreconditionError.ts:9](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/PreconditionError.ts#L9)

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#accessors "Direct link to Accessors")

### name [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#name "Direct link to name")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#get-signature "Direct link to Get Signature")

> **get** **name**(): `string`

Defined in: [projects/framework/src/lib/errors/PreconditionError.ts:17](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/PreconditionError.ts#L17)

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#returns-1 "Direct link to Returns")

`string`

This will be `'PreconditionError'` and can be used to distinguish the type of error when any error gets thrown

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#overrides-1 "Direct link to Overrides")

[`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError). [`name`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError#name)

- [Extends](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#extends)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#properties)
  - [context](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#context)
  - [identifier](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#identifier)
  - [precondition](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#precondition)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#accessors)
  - [name](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError/#name)
