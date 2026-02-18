[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/pieces/src/lib/errors/LoaderError.ts:12](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/errors/LoaderError.ts#L12)

Describes a loader error with a type for easy identification.

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#extends "Direct link to Extends")

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Extended by [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#extended-by "Direct link to Extended by")

- [`MissingExportsError`](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/MissingExportsError)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#constructor "Direct link to Constructor")

> **new LoaderError**(`type`: [`LoaderErrorType`](https://sapphirejs.dev/docs/Documentation/api-pieces/enumerations/LoaderErrorType), `message`: `string`): `LoaderError`

Defined in: [projects/pieces/src/lib/errors/LoaderError.ts:18](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/errors/LoaderError.ts#L18)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `type`    | [`LoaderErrorType`](https://sapphirejs.dev/docs/Documentation/api-pieces/enumerations/LoaderErrorType) |
| `message` | `string`                                                                                               |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#returns "Direct link to Returns")

`LoaderError`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#overrides "Direct link to Overrides")

`Error.constructor`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#properties "Direct link to Properties")

### type [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#type "Direct link to type")

> `readonly` **type**: [`LoaderErrorType`](https://sapphirejs.dev/docs/Documentation/api-pieces/enumerations/LoaderErrorType)

Defined in: [projects/pieces/src/lib/errors/LoaderError.ts:16](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/errors/LoaderError.ts#L16)

The type of the error that was thrown.

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#accessors "Direct link to Accessors")

### name [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#name "Direct link to name")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#get-signature "Direct link to Get Signature")

> **get** **name**(): `string`

Defined in: [projects/pieces/src/lib/errors/LoaderError.ts:23](https://github.com/sapphiredev/pieces/blob/25e53cb34f118235ca5f3d3664f0fe17c98766a6/src/lib/errors/LoaderError.ts#L23)

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#returns-1 "Direct link to Returns")

`string`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#overrides-1 "Direct link to Overrides")

`Error.name`

- [Extends](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#extends)
- [Extended by](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#extended-by)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#properties)
  - [type](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#type)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#accessors)
  - [name](https://sapphirejs.dev/docs/Documentation/api-pieces/classes/LoaderError/#name)
