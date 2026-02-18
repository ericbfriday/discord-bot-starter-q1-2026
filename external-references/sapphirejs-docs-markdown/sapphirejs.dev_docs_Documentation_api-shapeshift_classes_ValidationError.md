[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:5](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L5)

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#extends "Direct link to Extends")

- [`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError)

## Extended by [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#extended-by "Direct link to Extended by")

- [`ExpectedValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#constructor "Direct link to Constructor")

> **new ValidationError**(`validator`: `string`, `message`: `string`, `given`: `unknown`): `ValidationError`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:9](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L9)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#parameters "Direct link to Parameters")

| Parameter   | Type      |
| ----------- | --------- |
| `validator` | `string`  |
| `message`   | `string`  |
| `given`     | `unknown` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#returns "Direct link to Returns")

`ValidationError`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#overrides "Direct link to Overrides")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`constructor`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#constructor)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#properties "Direct link to Properties")

### given [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#given "Direct link to given")

> `readonly` **given**: `unknown`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:7](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L7)

---

### validator [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#validator "Direct link to validator")

> `readonly` **validator**: `string`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:6](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L6)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#methods "Direct link to Methods")

### \[customInspectSymbol\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#custominspectsymbol "Direct link to [customInspectSymbol]()")

> `protected` **\[customInspectSymbol\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/BaseError.ts:15](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/BaseError.ts#L15)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#parameters-1 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#returns-1 "Direct link to Returns")

`string`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#inherited-from "Direct link to Inherited from")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`[customInspectSymbol]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#custominspectsymbol)

---

### \[customInspectSymbolStackLess\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#custominspectsymbolstackless "Direct link to [customInspectSymbolStackLess]()")

> `protected` **\[customInspectSymbolStackLess\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:25](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L25)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#parameters-2 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#returns-2 "Direct link to Returns")

`string`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#overrides-1 "Direct link to Overrides")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`[customInspectSymbolStackLess]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#custominspectsymbolstackless)

---

### toJSON() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#tojson "Direct link to toJSON()")

> **toJSON**(): [`ValidationErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ValidationErrorJsonified)

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:16](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L16)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#returns-3 "Direct link to Returns")

[`ValidationErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ValidationErrorJsonified)

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#overrides-2 "Direct link to Overrides")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`toJSON`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#tojson)

- [Extends](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#extends)
- [Extended by](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#extended-by)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#properties)
  - [given](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#given)
  - [validator](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#validator)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#methods)
  - [\[customInspectSymbol\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#custominspectsymbol)
  - [\[customInspectSymbolStackLess\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#custominspectsymbolstackless)
  - [toJSON()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError/#tojson)
