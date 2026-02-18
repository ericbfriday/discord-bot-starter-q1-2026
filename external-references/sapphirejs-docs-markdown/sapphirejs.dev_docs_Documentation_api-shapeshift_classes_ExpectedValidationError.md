[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/shapeshift/src/lib/errors/ExpectedValidationError.ts:6](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ExpectedValidationError.ts#L6)

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#extends "Direct link to Extends")

- [`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError)

## Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#type-parameters "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#constructor "Direct link to Constructor")

> **new ExpectedValidationError** <`T`>(`validator`: `string`, `message`: `string`, `given`: `unknown`, `expected`: `T`): `ExpectedValidationError`<`T`>

Defined in: [projects/shapeshift/src/lib/errors/ExpectedValidationError.ts:9](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ExpectedValidationError.ts#L9)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#parameters "Direct link to Parameters")

| Parameter   | Type      |
| ----------- | --------- |
| `validator` | `string`  |
| `message`   | `string`  |
| `given`     | `unknown` |
| `expected`  | `T`       |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#returns "Direct link to Returns")

`ExpectedValidationError`<`T`>

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#overrides "Direct link to Overrides")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`constructor`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#constructor)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#properties "Direct link to Properties")

### expected [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#expected "Direct link to expected")

> `readonly` **expected**: `T`

Defined in: [projects/shapeshift/src/lib/errors/ExpectedValidationError.ts:7](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ExpectedValidationError.ts#L7)

---

### given [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#given "Direct link to given")

> `readonly` **given**: `unknown`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:7](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L7)

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#inherited-from "Direct link to Inherited from")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`given`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#given)

---

### validator [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#validator "Direct link to validator")

> `readonly` **validator**: `string`

Defined in: [projects/shapeshift/src/lib/errors/ValidationError.ts:6](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ValidationError.ts#L6)

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#inherited-from-1 "Direct link to Inherited from")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`validator`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#validator)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#methods "Direct link to Methods")

### \[customInspectSymbol\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#custominspectsymbol "Direct link to [customInspectSymbol]()")

> `protected` **\[customInspectSymbol\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/BaseError.ts:15](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/BaseError.ts#L15)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#parameters-1 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#returns-1 "Direct link to Returns")

`string`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#inherited-from-2 "Direct link to Inherited from")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`[customInspectSymbol]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#custominspectsymbol)

---

### \[customInspectSymbolStackLess\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#custominspectsymbolstackless "Direct link to [customInspectSymbolStackLess]()")

> `protected` **\[customInspectSymbolStackLess\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/ExpectedValidationError.ts:24](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ExpectedValidationError.ts#L24)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#parameters-2 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#returns-2 "Direct link to Returns")

`string`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#overrides-1 "Direct link to Overrides")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`[customInspectSymbolStackLess]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#custominspectsymbolstackless)

---

### toJSON() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#tojson "Direct link to toJSON()")

> **toJSON**(): [`ExpectedValidationErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ExpectedValidationErrorJsonified) <`T`>

Defined in: [projects/shapeshift/src/lib/errors/ExpectedValidationError.ts:14](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/ExpectedValidationError.ts#L14)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#returns-3 "Direct link to Returns")

[`ExpectedValidationErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ExpectedValidationErrorJsonified) <`T`>

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#overrides-2 "Direct link to Overrides")

[`ValidationError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError). [`toJSON`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ValidationError#tojson)

- [Extends](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#extends)
- [Type Parameters](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#type-parameters)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#properties)
  - [expected](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#expected)
  - [given](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#given)
  - [validator](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#validator)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#methods)
  - [\[customInspectSymbol\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#custominspectsymbol)
  - [\[customInspectSymbolStackLess\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#custominspectsymbolstackless)
  - [toJSON()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/ExpectedValidationError/#tojson)
