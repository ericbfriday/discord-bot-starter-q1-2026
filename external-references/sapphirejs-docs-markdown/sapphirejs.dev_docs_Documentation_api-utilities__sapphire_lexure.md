[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**A powerful and fast parser for non-technical user input**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/lexure?logo=webpack&style=flat-square)](https://bundlephobia.com/lexure?p=@sapphire/lexure)[![npm](https://img.shields.io/npm/v/@sapphire/lexure?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/lexure)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#description "Direct link to Description")

A powerful and fast parser and utilities for non-technical user input, inspired by [`lexure`](https://www.npmjs.com/package/lexure), powered by [`@sapphire/result`](https://www.npmjs.com/package/@sapphire/result).

The code in this package has been greatly inspired by [lexure](https://github.com/1Computer1/lexure) from [1Computer1](https://github.com/1Computer1).

## Features [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#features "Direct link to Features")

- Written in TypeScript
- Bundled with esbuild so it can be used in NodeJS and browsers
- Offers CommonJS, ESM and UMD bundles
- Fully tested
- Parses quoted input with multiple quote styles
- Parses flags and options with a customizable strategy system
- Keeps leading whitespace
- Includes a convenient wrapper to retrieve the parsed arguments
- Includes custom argument delimiter

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#installation "Direct link to Installation")

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/lexure
```

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#usage "Direct link to Usage")

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Parser } = require('@sapphire/lexure')` equals `import { Parser } from '@sapphire/lexure'`.

```typescript
const parser = new Parser(new PrefixedStrategy(['--', '/'], ['=', ':']));
const lexer = new Lexer({
	quotes: [\
		['"', '"'],\
		['“', '”'],\
		['「', '」']\
	]
});

const content = 'foo bar';
const stream = new ArgumentStream(parser.run(lexer.run(content)));

console.log(stream.single()); // Some { value: 'foo' }
console.log(stream.single()); // Some { value: 'bar' }
console.log(stream.single()); // None
```

---

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/utilities)](https://github.com/sapphiredev/utilities/graphs/contributors)

## Namespaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#namespaces "Direct link to Namespaces")

| Namespace                                                                                                             | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- |
| [ArgumentStream](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/namespaces/ArgumentStream/) | -           |
| [Lexer](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/namespaces/Lexer/)                   | -           |

## Enumerations [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#enumerations "Direct link to Enumerations")

| Enumeration                                                                                                  | Description |
| ------------------------------------------------------------------------------------------------------------ | ----------- |
| [TokenType](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/enumerations/TokenType) | -           |

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#classes "Direct link to Classes")

| Class                                                                                                                 | Description |
| --------------------------------------------------------------------------------------------------------------------- | ----------- |
| [ArgumentStream](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/ArgumentStream)     | -           |
| [BaseParameter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/BaseParameter)       | -           |
| [EmptyStrategy](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/EmptyStrategy)       | -           |
| [Lexer](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/Lexer)                       | -           |
| [ParameterStream](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/ParameterStream)   | -           |
| [Parser](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/Parser)                     | -           |
| [ParserResult](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/ParserResult)         | -           |
| [PrefixedStrategy](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/PrefixedStrategy) | -           |
| [QuotedParameter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/QuotedParameter)   | -           |
| [TokenStream](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/TokenStream)           | -           |
| [WordParameter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/classes/WordParameter)       | -           |

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#interfaces "Direct link to Interfaces")

| Interface                                                                                                                    | Description |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [IUnorderedStrategy](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/interfaces/IUnorderedStrategy) | -           |
| [QuotedToken](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/interfaces/QuotedToken)               | -           |
| [SeparatorToken](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/interfaces/SeparatorToken)         | -           |
| [WordToken](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/interfaces/WordToken)                   | -           |

## Type Aliases [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#type-aliases "Direct link to Type Aliases")

| Type Alias                                                                                                   | Description |
| ------------------------------------------------------------------------------------------------------------ | ----------- |
| [Parameter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/type-aliases/Parameter) | -           |
| [Token](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/type-aliases/Token)         | -           |

## Functions [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#functions "Direct link to Functions")

| Function                                                                                              | Description                                                                |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [join](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/functions/join)       | Joins the parameters by their `leading` value, using the `value` property. |
| [joinRaw](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/functions/joinRaw) | Joins the parameters by their `leading` value, using the `raw` property.   |

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#usage)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#contributors)
- [Namespaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#namespaces)
- [Enumerations](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#enumerations)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#classes)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#interfaces)
- [Type Aliases](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#type-aliases)
- [Functions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/lexure/#functions)
