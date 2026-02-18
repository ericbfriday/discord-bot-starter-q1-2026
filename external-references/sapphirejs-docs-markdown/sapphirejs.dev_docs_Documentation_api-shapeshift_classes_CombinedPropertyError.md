[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/shapeshift/src/lib/errors/CombinedPropertyError.ts:5](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/CombinedPropertyError.ts#L5)

## Extends [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#extends "Direct link to Extends")

- [`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError)

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#constructor "Direct link to Constructor")

> **new CombinedPropertyError**(`errors`: \[`PropertyKey`, [`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError)\]\[\], `validatorOptions?`: [`ValidatorOptions`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ValidatorOptions)): `CombinedPropertyError`

Defined in: [projects/shapeshift/src/lib/errors/CombinedPropertyError.ts:8](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/CombinedPropertyError.ts#L8)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#parameters "Direct link to Parameters")

| Parameter           | Type                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `errors`            | \[`PropertyKey`, [`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError)\]\[\] |
| `validatorOptions?` | [`ValidatorOptions`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/ValidatorOptions)       |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#returns "Direct link to Returns")

`CombinedPropertyError`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#overrides "Direct link to Overrides")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`constructor`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#constructor)

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#properties "Direct link to Properties")

### errors [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#errors "Direct link to errors")

> `readonly` **errors**: \[`PropertyKey`, [`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError)\]\[\]

Defined in: [projects/shapeshift/src/lib/errors/CombinedPropertyError.ts:6](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/CombinedPropertyError.ts#L6)

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#methods "Direct link to Methods")

### \[customInspectSymbol\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#custominspectsymbol "Direct link to [customInspectSymbol]()")

> `protected` **\[customInspectSymbol\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/BaseError.ts:15](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/BaseError.ts#L15)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#parameters-1 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#returns-1 "Direct link to Returns")

`string`

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#inherited-from "Direct link to Inherited from")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`[customInspectSymbol]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#custominspectsymbol)

---

### \[customInspectSymbolStackLess\]() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#custominspectsymbolstackless "Direct link to [customInspectSymbolStackLess]()")

> `protected` **\[customInspectSymbolStackLess\]**(`depth`: `number`, `options`: `InspectOptionsStylized`): `string`

Defined in: [projects/shapeshift/src/lib/errors/CombinedPropertyError.ts:14](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/CombinedPropertyError.ts#L14)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#parameters-2 "Direct link to Parameters")

| Parameter | Type                     |
| --------- | ------------------------ |
| `depth`   | `number`                 |
| `options` | `InspectOptionsStylized` |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#returns-2 "Direct link to Returns")

`string`

#### Overrides [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#overrides-1 "Direct link to Overrides")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`[customInspectSymbolStackLess]`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#custominspectsymbolstackless)

---

### toJSON() [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#tojson "Direct link to toJSON()")

> **toJSON**(): [`BaseErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/BaseErrorJsonified)

Defined in: [projects/shapeshift/src/lib/errors/BaseError.ts:8](https://github.com/sapphiredev/shapeshift/blob/836732bb1449ff971869f65869c55c4506a1e197/src/lib/errors/BaseError.ts#L8)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#returns-3 "Direct link to Returns")

[`BaseErrorJsonified`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/interfaces/BaseErrorJsonified)

#### Inherited from [​](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#inherited-from-1 "Direct link to Inherited from")

[`BaseError`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError). [`toJSON`](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/BaseError#tojson)

- [Extends](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#extends)
- [Constructors](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#properties)
  - [errors](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#errors)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#methods)
  - [\[customInspectSymbol\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#custominspectsymbol)
  - [\[customInspectSymbolStackLess\]()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#custominspectsymbolstackless)
  - [toJSON()](https://sapphirejs.dev/docs/Documentation/api-shapeshift/classes/CombinedPropertyError/#tojson)
