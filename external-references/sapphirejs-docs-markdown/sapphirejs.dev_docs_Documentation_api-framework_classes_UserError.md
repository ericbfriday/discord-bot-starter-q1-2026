[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/errors/UserError.ts:13](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L13)

The UserError class to be emitted in the pieces.

## Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#example "Direct link to Example")

```typescript
throw new UserError({
  identifier: "AddArgumentError",
  message: "You must write two numbers, but the second one did not match.",
  context: { received: 2, expected: 3 },
});
```

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#extends "Direct link to Extends")

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Extended by [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#extended-by "Direct link to Extended by")

- [`ArgumentError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ArgumentError)
- [`PreconditionError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/PreconditionError)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#constructor "Direct link to Constructor")

> **new UserError**(`options`: [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/UserError/interfaces/Options)): `UserError`

Defined in: [projects/framework/src/lib/errors/UserError.ts:28](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L28)

Constructs an UserError.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                   | Description           |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `options` | [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/UserError/interfaces/Options) | The UserError options |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#returns "Direct link to Returns")

`UserError`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#overrides "Direct link to Overrides")

`Error.constructor`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#properties "Direct link to Properties")

### context [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#context "Direct link to context")

> `readonly` **context**: `unknown`

Defined in: [projects/framework/src/lib/errors/UserError.ts:22](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L22)

User-provided context.

---

### identifier [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#identifier "Direct link to identifier")

> `readonly` **identifier**: `string`

Defined in: [projects/framework/src/lib/errors/UserError.ts:17](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L17)

An identifier, useful to localize emitted errors.

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#accessors "Direct link to Accessors")

### name [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#name "Direct link to name")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#get-signature "Direct link to Get Signature")

> **get** **name**(): `string`

Defined in: [projects/framework/src/lib/errors/UserError.ts:35](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/errors/UserError.ts#L35)

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#returns-1 "Direct link to Returns")

`string`

This will be `'UserError'` and can be used to distinguish the type of error when any error gets thrown

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#overrides-1 "Direct link to Overrides")

`Error.name`

- [Example](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#example)
- [Extends](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#extends)
- [Extended by](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#extended-by)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#properties)
  - [context](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#context)
  - [identifier](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#identifier)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#accessors)
  - [name](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError/#name)
