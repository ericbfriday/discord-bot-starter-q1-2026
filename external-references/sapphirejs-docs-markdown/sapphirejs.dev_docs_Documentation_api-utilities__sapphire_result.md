[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**A TypeScript port of Nightly Rust's Result and Option structs**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/result?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/result)[![npm](https://img.shields.io/npm/v/@sapphire/result?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/result)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#description "Direct link to Description")

When having many `try-catch` blocks after one another, or multiple `try-catch` blocks nested in one another then code can become very chaotic very quickly. To alleviate that issue we have made the `@sapphire/result` which offers two structures based on Rust's [`Result<T, E>`](https://doc.rust-lang.org/std/result/index.html) and [`Option<T>`](https://doc.rust-lang.org/std/option/enum.Option.html) with full Nightly coverage and extra convenience methods. This code has been branched off of `@sapphire/framework` into its own package after we saw great success with the code there.

## Features [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#features "Direct link to Features")

- Written in TypeScript
- Bundled with esbuild so it can be used in NodeJS and browsers
- Offers CommonJS, ESM and UMD bundles
- Full feature parity with Nightly Rust's `Result<T, E>` and `Option<T>`
- Fully tested

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#installation "Direct link to Installation")

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/result
```

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#usage "Direct link to Usage")

**Note 1:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Result } = require('@sapphire/result')` equals `import { Result } from '@sapphire/result'`.

**Note 2:** For more thorough examples check out the generated documentation on [our website here](https://www.sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/)

### Wrapping synchronous `try-catch` blocks [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#wrapping-synchronous-try-catch-blocks "Direct link to wrapping-synchronous-try-catch-blocks")

**Old code without `Result.from`:**

```typescript
try {
  const returnCode = someFunctionThatMightThrow();

  return returnCode;
} catch (error) {
  // Handle the error:
  console.error(error);
  return null;
}
```

**New Code with `Result.from`:**

```typescript
const { Result } = require("@sapphire/result");

const returnCode = Result.from(() => someFunctionThatMightThrow());

return returnCode.unwrapOrElse((error) => {
  console.error(error);
  return null;
});
```

### Wrapping asynchronous `try-catch` blocks [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#wrapping-asynchronous-try-catch-blocks "Direct link to wrapping-asynchronous-try-catch-blocks")

**Old code without `Result.fromAsync`:**

```typescript
try {
  const returnCode = await someFunctionThatReturnsAPromiseAndMightReject();

  return returnCode;
} catch (error) {
  // Handle the error:
  console.error(error);
  return null;
}
```

**New Code with `Result.fromAsync`:**

```typescript
const { Result } = require("@sapphire/result");

const returnCode = await Result.fromAsync(async () =>
  someFunctionThatReturnsAPromiseAndMightReject(),
);

return returnCode.unwrapOrElse((error) => {
  console.error(error);
  return null;
});
```

---

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/utilities)](https://github.com/sapphiredev/utilities/graphs/contributors)

## Namespaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#namespaces "Direct link to Namespaces")

| Namespace                                                                                             | Description |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| [Option](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/namespaces/Option/) | -           |
| [Result](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/namespaces/Result/) | -           |

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#classes "Direct link to Classes")

| Class                                                                                                       | Description                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Option](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/classes/Option)           | -                                                                                                                                                                                                                                                                    |
| [OptionError](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/classes/OptionError) | -                                                                                                                                                                                                                                                                    |
| [Result](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/classes/Result)           | A type used to express computations that can fail, it can be used for returning and propagating errors. This is a type union with the variants `Ok(T)`, representing success and containing a value, and `Err(E)`, representing error and containing an error value. |
| [ResultError](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/classes/ResultError) | -                                                                                                                                                                                                                                                                    |

## Type Aliases [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#type-aliases "Direct link to Type Aliases")

| Type Alias                                                                                                                 | Description |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [AnyOption](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/AnyOption)               | -           |
| [AnyResult](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/AnyResult)               | -           |
| [Err](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/Err)                           | -           |
| [None](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/None)                         | -           |
| [Ok](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/Ok)                             | -           |
| [OptionResolvable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/OptionResolvable) | -           |
| [ResultResolvable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/ResultResolvable) | -           |
| [Some](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/Some)                         | -           |
| [UnwrapErr](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapErr)               | -           |
| [UnwrapErrArray](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapErrArray)     | -           |
| [UnwrapOk](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapOk)                 | -           |
| [UnwrapOkArray](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapOkArray)       | -           |
| [UnwrapSome](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapSome)             | -           |
| [UnwrapSomeArray](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/type-aliases/UnwrapSomeArray)   | -           |

## Variables [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#variables "Direct link to Variables")

| Variable                                                                                        | Description |
| ----------------------------------------------------------------------------------------------- | ----------- |
| [err](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/variables/err)   | -           |
| [none](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/variables/none) | -           |
| [ok](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/variables/ok)     | -           |
| [some](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/variables/some) | -           |

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#usage)
  - [Wrapping synchronous `try-catch` blocks](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#wrapping-synchronous-try-catch-blocks)
  - [Wrapping asynchronous `try-catch` blocks](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#wrapping-asynchronous-try-catch-blocks)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#contributors)
- [Namespaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#namespaces)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#classes)
- [Type Aliases](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#type-aliases)
- [Variables](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/result/#variables)
