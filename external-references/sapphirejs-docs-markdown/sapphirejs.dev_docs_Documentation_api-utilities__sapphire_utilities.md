[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**Common JavaScript utilities for the Sapphire Community.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/utilities?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/utilities)[![npm](https://img.shields.io/npm/v/@sapphire/utilities?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/utilities)

**Table of Contents**

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#usage)
  - [Javascript Utilities](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#javascript-utilities)
    - [`arrayStrictEquals`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arraystrictequals)
    - [`chunk`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#chunk)
    - [`classExtends`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#classextends)
    - [`codeBlock`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#codeblock)
    - [`cutText`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#cuttext)
    - [`deepClone`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deepclone)
    - [`filterNullAndUndefined`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefined)
    - [`filterNullAndUndefinedAndEmpty`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefinedandempty)
    - [`filterNullAndUndefinedAndZero`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefinedandzero)
    - [`getDeepObjectKeys`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#getdeepobjectkeys)
    - [`hasAtLeastOneKeyInMap`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#hasatleastonekeyinmap)
    - [`inlineCodeBlock`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#inlinecodeblock)
    - [`isClass`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isclass)
    - [`isFunction`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isfunction)
    - [`isNullOrUndefined`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefined)
    - [`isNullOrUndefinedOrEmpty`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefinedorempty)
    - [`isNullOrUndefinedOrZero`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefinedorzero)
    - [`isNumber`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnumber)
    - [`isObject`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isobject)
    - [`isPrimitive`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isprimitive)
    - [`isThenable`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isthenable)
    - [`lazy`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#lazy)
    - [`makeObject`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#makeobject)
    - [`mergeDefault`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mergedefault)
    - [`mergeObjects`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mergeobjects)
    - [`noop`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#noop)
    - [`objectToTuples`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objecttotuples)
    - [`partition`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#partition)
    - [`pickRandom`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#pickrandom)
    - [`range`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#range)
    - [`regExpEsc`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#regexpesc)
    - [`roundNumber`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#roundnumber)
    - [`sleep` / `sleepSync`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#sleep--sleepsync)
    - [`splitText`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#splittext)
    - [`throttle`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#throttle)
    - [`toTitleCase`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#totitlecase)
    - [`tryParseJSON`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparsejson)
    - [`tryParseURL`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparseurl)
  - [Typescript Utilities](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#typescript-utilities)
    - [Functions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#functions)
      - [`cast`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#cast)
      - [`objectEntries`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectentries)
      - [`objectKeys`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectkeys)
      - [`objectValues`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectvalues)
    - [Types](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#types)
      - [`Primitive`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#primitive)
      - [`Builtin`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#builtin)
      - [`DeepReadonly`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deepreadonly)
      - [`DeepRequired`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deeprequired)
      - [`RequiredExcept`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#requiredexcept)
      - [`PartialRequired`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#partialrequired)
      - [`ArgumentTypes`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#argumenttypes)
      - [`Arr`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arr)
      - [`Ctor`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#ctor)
      - [`AbstractCtor`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#abstractctor)
      - [`Constructor`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#constructor)
      - [`AbstractConstructor`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#abstractconstructor)
      - [`FirstArgument`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#firstargument)
      - [`SecondArgument`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#secondargument)
      - [`Awaitable`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#awaitable)
      - [`Nullish`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nullish)
      - [`NonNullableProperties`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nonnullableproperties)
      - [`NonNullObject`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nonnullobject-deprecated)
      - [`AnyObject`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#anyobject-deprecated)
      - [`PrettifyObject`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#prettifyobject)
      - [`PickByValue`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#pickbyvalue)
      - [`Mutable`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mutable)
      - [`StrictRequired`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#strictrequired)
      - [`ArrayElementType`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arrayelementtype)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#contributors)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#description "Direct link to Description")

We often have a need for a function or type augmentation and having to include it in every repo is a huge drag. To solve this problem there are dozens upon dozens of packages on NPM, but we cannot maintain those in case of issues and a lot of them are poorly written or under-optimised. Our solution is to provide @sapphire/utilities, which is the only package you'll likely need to cover your day-to-day needs.

## Features [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#features "Direct link to Features")

- Written in TypeScript
- Bundled with esbuild so it can be used in NodeJS and browsers
- Offers CommonJS, ESM and UMD bundles
- Fully tested

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#installation "Direct link to Installation")

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/utilities
```

---

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#usage "Direct link to Usage")

You can import individual utility function from subpath like: @sapphire/utility/isFunction or the entire library.

```ts
import { isFunction } from "@sapphire/utilities/isFunction";
// or
import { isFunction } from "@sapphire/utilities";
```

**Note:** For typescript users, subpath import are only supported in `--moduleResolution node16` and `--moduleResolution nodenext`. More information can be found [in this issue on the microsoft/TypeScript repository](https://github.com/microsoft/TypeScript/issues/50794).

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { arrayStrictEquals } = require('@sapphire/utilities')` equals `import { arrayStrictEquals } from '@sapphire/utilities'`.

### Javascript Utilities [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#javascript-utilities "Direct link to Javascript Utilities")

#### `arrayStrictEquals` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arraystrictequals "Direct link to arraystrictequals")

Compares if two arrays are strictly equal.

```ts
arrayStrictEquals([1, 2, 3], [1, 2, 3]); // true
arrayStrictEquals([1, 2, 3], [1, 2, 3, 4]); // false
arrayStrictEquals([1, 2, 3], [1, 2, 4]); // false
```

#### `chunk` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#chunk "Direct link to chunk")

Splits up an array into chunks.

```ts
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [4, 5]]
```

#### `classExtends` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#classextends "Direct link to classextends")

Checks whether or not the value class extends the base class.

```ts
class A {}
class B extends A {}

classExtends(A, B); // false
classExtends(B, A); // true
```

#### `codeBlock` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#codeblock "Direct link to codeblock")

Wraps text in a markdown codeblock with a language indicator for syntax highlighting.

````ts
codeBlock("js", 'const value = "Hello World!";'); // ```js\nconst value = "Hello World!";\n```
````

#### `cutText` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#cuttext "Direct link to cuttext")

Split a text by its latest space character in a range from the character 0 to the selected one.

```ts
cutText("Lorem Ipsum", 9); // "Lorem..."
```

#### `deepClone` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deepclone "Direct link to deepclone")

Deep clones an object.

```ts
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj); // { a: 1, b: { c: 2 } }
```

#### `filterNullAndUndefined` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefined "Direct link to filternullandundefined")

Checks whether a value is not `null` nor `undefined`. This can be used in `Array#filter` to remove `null` and `undefined` from the array type

```ts
// TypeScript Type: (string | undefined | null)[]
const someArray = ["one", "two", undefined, null, "five"];

// TypeScript Type: string[]
const filteredArray = someArray.filter(filterNullAndUndefined); // ['one', 'two', 'five']
```

#### `filterNullAndUndefinedAndEmpty` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefinedandempty "Direct link to filternullandundefinedandempty")

Checks whether a value is not `null`, `undefined`, or `''` (empty string). This can be used in `Array#filter` to remove `null`, `undefined`, and `''` from the array type

```ts
// TypeScript Type: (number | string | undefined | null)[]
const someArray = [1, 2, undefined, null, ""];

// TypeScript Type: number[]
const filteredArray = someArray.filter(filterNullAndUndefinedAndEmpty); // [1, 2]
```

#### `filterNullAndUndefinedAndZero` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullandundefinedandzero "Direct link to filternullandundefinedandzero")

Checks whether a value is not `null`, `undefined`, or `0`. This can be used in `Array#filter` to remove `null`, `undefined`, and `0` from the array type

```ts
// TypeScript Type: (string | number | undefined | null)[]
const someArray = ["one", "two", undefined, null, 0];

// TypeScript Type: string[]
const filteredArray = someArray.filter(filterNullAndUndefinedAndZero); // ['one', 'two']
```

#### `getDeepObjectKeys` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#getdeepobjectkeys "Direct link to getdeepobjectkeys")

Returns an array of all the keys of an object, including the keys of nested objects.

```ts
const obj = { a: 1, b: { c: 2 }, d: [{ e: 3 }] };
getDeepObjectKeys(obj); // ['a', 'b.c', 'd.0.e']
getDeepObjectKeys(obj, { arrayKeysIndexStyle: "braces" }); // ['a', 'bc', 'd[0]e']
getDeepObjectKeys(obj, { arrayKeysIndexStyle: "braces-with-dot" }); // ['a', 'b.c', 'd[0].e']
getDeepObjectKeys(obj, { arrayKeysIndexStyle: "dotted" }); // ['a', 'b.c', 'd.0.e']
```

#### `hasAtLeastOneKeyInMap` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#hasatleastonekeyinmap "Direct link to hasatleastonekeyinmap")

Checks whether a map has at least one of an array of keys.

```ts
const map = new Map([\
	['a', 1],\
	['b', 2],\
	['c', 3]\
]);

hasAtLeastOneKeyInMap(map, ['a', 'd']); // true
hasAtLeastOneKeyInMap(map, ['d', 'e']); // false
```

#### `inlineCodeBlock` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#inlinecodeblock "Direct link to inlinecodeblock")

Wraps text in a markdown inline codeblock.

```ts
inlineCodeBlock('const value = "Hello World!";'); // `const value = "Hello World!";`
```

#### `isClass` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isclass "Direct link to isclass")

Verifies if the input is a class constructor.

```ts
class A {}

isClass(A); // true
isClass(function () {}); // false
```

#### `isFunction` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isfunction "Direct link to isfunction")

Verifies if the input is a function.

```ts
isFunction(function () {}); // true
isFunction("foo"); // false
```

#### `isNullOrUndefined` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefined "Direct link to isnullorundefined")

Checks whether a value is `null` or `undefined`.

```ts
isNullOrUndefined(null); // true
isNullOrUndefined(undefined); // true
isNullOrUndefined(1); // false
```

#### `isNullOrUndefinedOrEmpty` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefinedorempty "Direct link to isnullorundefinedorempty")

Checks whether a value is `null`, `undefined`, or `''` (empty string).

```ts
isNullOrUndefinedOrEmpty(null); // true
isNullOrUndefinedOrEmpty(undefined); // true
isNullOrUndefinedOrEmpty(""); // true
isNullOrUndefinedOrEmpty(1); // false
```

#### `isNullOrUndefinedOrZero` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullorundefinedorzero "Direct link to isnullorundefinedorzero")

Checks whether a value is `null`, `undefined`, or `0`.

```ts
isNullOrUndefinedOrZero(null); // true
isNullOrUndefinedOrZero(undefined); // true
isNullOrUndefinedOrZero(0); // true
isNullOrUndefinedOrZero(1); // false
```

#### `isNumber` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnumber "Direct link to isnumber")

Verifies if the input is a number.

```ts
isNumber(1); // true
isNumber("1"); // false
```

#### `isObject` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isobject "Direct link to isobject")

Verifies if the input is an object.

```ts
isObject({}); // true
isObject([]); // true
isObject("foo"); // false
```

#### `isPrimitive` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isprimitive "Direct link to isprimitive")

Verifies if the input is a primitive.

```ts
isPrimitive(1); // true
isPrimitive("1"); // true
isPrimitive({}); // false
```

#### `isThenable` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isthenable "Direct link to isthenable")

Verifies if an object is a promise.

```ts
isThenable({}); // false
isThenable(Promise.resolve()); // true
```

#### `lazy` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#lazy "Direct link to lazy")

Lazily creates a constant or load a module and caches it internally.

```ts
let timesCalled = 0;
const lazyValue = lazy(() => {
  timesCalled++;
  return "foo";
});

lazyValue(); // 'foo'
lazyValue(); // 'foo' - cached

timesCalled; // 1
```

#### `makeObject` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#makeobject "Direct link to makeobject")

Turn a dotted path into a json object.

```ts
makeObject("a.b.c", 1); // { a: { b: { c: 1 } } }
```

#### `mergeDefault` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mergedefault "Direct link to mergedefault")

Deep merges two objects. Properties from the second parameter are applied to the first.

```ts
const base = { a: 1, b: { c: 2 } };
const overwritten = { b: { d: 3 } };

mergeDefault(base, overwritten);
overwritten; // { a: 1, b: { c: 2, d: 3 } }
```

#### `mergeObjects` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mergeobjects "Direct link to mergeobjects")

Merges two objects.

```ts
const source = { a: 1, b: 2 };
const target = { c: 4 };

mergeObjects(source, target);
target; // { a: 1, b: 2, c: 4 }
```

#### `noop` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#noop "Direct link to noop")

A no-operation function.

```ts
noop(); // undefined

// Example usage of ignoring a promise rejection
Promise.reject().catch(noop);
```

#### `objectToTuples` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objecttotuples "Direct link to objecttotuples")

Converts an object to a tuple with string paths.

```ts
const obj = { a: 1, b: { c: 2 } };
objectToTuples(obj); // [['a', 1], ['b.c', 2]]
```

#### `partition` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#partition "Direct link to partition")

Partitions an array into a tuple of two arrays, where one array contains all elements that satisfies the predicate, and the other contains all elements that do not satisfy the predicate.

```ts
const arr = [1, 2, 3, 4, 5];
const [evens, odds] = partition(arr, (n) => n % 2 === 0);

evens; // [2, 4]
odds; // [1, 3, 5]
```

#### `pickRandom` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#pickrandom "Direct link to pickrandom")

Picks a random element from an array.

```ts
const arr = [1, 2, 3, 4, 5];
pickRandom(arr); // 3
```

#### `range` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#range "Direct link to range")

Get an array of numbers with the selected range, considering a specified step.

```ts
range(1, 4, 1); // [1, 2, 3, 4]
range(1, 4, 2); // [1, 3]
range(4, 1, -1); // [4, 3, 2, 1]
range(4, 1, -2); // [4, 2]
```

#### `regExpEsc` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#regexpesc "Direct link to regexpesc")

Cleans a string from regex injection by escaping special characters.

```ts
regExpEsc("foo.bar?"); // 'foo\\.bar\\?'
```

#### `roundNumber` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#roundnumber "Direct link to roundnumber")

Properly rounds up or down a number. Also supports strings using an exponent to indicate large or small numbers.

```ts
roundNumber(1.9134658034); // 1
roundNumber(1.9134658034, 2); // 1.91
roundNumber("10e-5"); // 0
```

#### `sleep` / `sleepSync` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#sleep--sleepsync "Direct link to sleep--sleepsync")

Sleeps for the specified number of milliseconds.

```ts
await sleep(1000); // Sleeps for 1 second
sleepSync(1000); // Sleeps for 1 second
```

#### `splitText` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#splittext "Direct link to splittext")

Split a string by its latest space character in a range from the character 0 to the selected one.

```ts
splitText("Hello All People!", 8); // 'Hello'
splitText("Hello All People!", 10); // 'Hello All'
```

#### `throttle` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#throttle "Direct link to throttle")

Creates a throttled function that only invokes a function at most once per every x milliseconds. The throttled function comes with a flush method to reset the last time the throttled function was invoked.

```ts
const throttled = throttle(() => console.log("throttled"), 1000);

throttled(); // 'throttled'
throttled(); // nothing
throttled.flush();
throttled(); // 'throttled'
```

#### `toTitleCase` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#totitlecase "Direct link to totitlecase")

Converts a string to Title Case. This is designed to also ensure common Discord PascalCased strings are put in their TitleCase variants.

```ts
toTitleCase("foo bar"); // 'Foo Bar'
toTitleCase("textchannel"); // 'TextChannel'
toTitleCase("onetwo three", { onetwo: "OneTwo" }); // OneTwo Three
```

#### `tryParseJSON` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparsejson "Direct link to tryparsejson")

Tries to parse a string as JSON.

```ts
tryParseJSON('{"foo": "bar"}'); // { foo: 'bar' }
tryParseJSON('{"foo": "bar"' /* invalid */); // '{"foo": "bar"'
```

#### `tryParseURL` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparseurl "Direct link to tryparseurl")

Tries to parse a string as a URL.

```ts
tryParseURL("https://google.com"); // URL object
tryParseURL("hello there :)"); // null
```

### Typescript Utilities [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#typescript-utilities "Direct link to Typescript Utilities")

A subset of our utilities are intended specifically for typescript users.

#### Functions [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#functions "Direct link to Functions")

##### `cast` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#cast "Direct link to cast")

Casts any value to `T`. Note that this function is not type-safe, and may cause runtime errors if used incorrectly.

```ts
const value = cast<string>(1); // value is now of type string
```

##### `objectEntries` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectentries "Direct link to objectentries")

A strongly-typed alternative to `Object.entries`.

```ts
const obj = { a: 1, b: 2 } as const;

const native = Object.entries(obj); // [string, number][]
const strict = objectEntries(obj); // [['a', 1], ['b', 2]]
```

##### `objectKeys` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectkeys "Direct link to objectkeys")

A strongly-typed alternative to `Object.keys`.

```ts
const obj = { a: 1, b: 2 } as const;

const native = Object.keys(obj); // string[]
const strict = objectKeys(obj); // ['a', 'b']
```

##### `objectValues` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#objectvalues "Direct link to objectvalues")

A strongly-typed alternative to `Object.values`.

```ts
const obj = { a: 1, b: 2 } as const;

const native = Object.values(obj); // number[]
const strict = objectValues(obj); // [1, 2]
```

#### Types [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#types "Direct link to Types")

##### `Primitive` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#primitive "Direct link to primitive")

A union of all primitive types.

```ts
// string | number | bigint | boolean | symbol | undefined | null
declare const primitive: Primitive;
```

##### `Builtin` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#builtin "Direct link to builtin")

A union of all builtin types.

```ts
// Primitive | Function | Date | Error | RegExp
declare const builtin: Builtin;
```

##### `DeepReadonly` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deepreadonly "Direct link to deepreadonly")

Makes all properties in `T` readonly recursively.

```ts
type Foo = Set<{ bar?: ["foo", { hello: "world" }] }>;

// ReadonlySet<{
//     readonly bar?: readonly ["foo", {\
//         readonly hello: "world";\
//     }] | undefined;
// }>
declare const foo: DeepReadonly<Foo>;
```

##### `DeepRequired` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#deeprequired "Direct link to deeprequired")

Makes all properties in `T` required recursively.

```ts
type Foo = Set<{ bar?: Promise<{ baz?: string }>[] }>;

// Set<{ bar: Promise<{ baz: string }>[] }>
declare const foo: DeepRequired<Foo>;
```

##### `RequiredExcept` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#requiredexcept "Direct link to requiredexcept")

Makes all properties in `T` required except for the ones specified in `K`.

```ts
interface Foo {
  bar?: string;
  baz?: number;
}

// { bar?: string; baz: number }
declare const foo: RequiredExcept<Foo, "bar">;
```

##### `PartialRequired` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#partialrequired "Direct link to partialrequired")

Makes all properties in `T` that are assignable to `K` required.

```ts
interface Foo {
  bar?: string;
  baz?: number;
}

// { bar: string; baz?: number }
declare const foo: PartialRequired<Foo, "bar">;
```

##### `ArgumentTypes` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#argumenttypes "Direct link to argumenttypes")

Extracts the argument types of a function type.

```ts
type Foo = (bar: string, baz: number) => void;

// [string, number]
declare const foo: ArgumentTypes<Foo>;
```

##### `Arr` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arr "Direct link to arr")

A type that represents a readonly array of `any`.

```ts
// readonly any[]
declare const arr: Arr;
```

##### `Ctor` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#ctor "Direct link to ctor")

A constructor with parameters.

```ts
// new (...args: any[]) => any
declare const foo: Ctor;

// new (...args: [string, number]) => SomeClass
declare const bar: Ctor<[string, number], SomeClass>;
```

##### `AbstractCtor` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#abstractctor "Direct link to abstractctor")

An abstract constructor with parameters.

```ts
// abstract new (...args: any[]) => any
declare const foo: AbstractCtor;

// abstract new (...args: [string, number]) => SomeClass
declare const bar: AbstractCtor<[string, number], SomeClass>;
```

##### `Constructor` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#constructor "Direct link to constructor")

A constructor without parameters.

```ts
// new (...args: any[]) => any
declare const foo: Constructor;

// new (...args: any[]) => SomeClass
declare const bar: Constructor<SomeClass>;
```

##### `AbstractConstructor` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#abstractconstructor "Direct link to abstractconstructor")

An abstract constructor without parameters.

```ts
// abstract new (...args: any[]) => any
declare const foo: AbstractConstructor;

// abstract new (...args: any[]) => SomeClass
declare const bar: AbstractConstructor<SomeClass>;
```

##### `FirstArgument` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#firstargument "Direct link to firstargument")

Extracts the first argument of a function type.

```ts
type Foo = (bar: string, baz: number) => void;

// string
declare const foo: FirstArgument<Foo>;
```

##### `SecondArgument` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#secondargument "Direct link to secondargument")

Extracts the second argument of a function type.

```ts
type Foo = (bar: string, baz: number) => void;

// number
declare const foo: SecondArgument<Foo>;
```

##### `Awaitable` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#awaitable "Direct link to awaitable")

A type that represents a value or a promise of a value. Useful for functions that can accept both promises and non-promises.

```ts
// string | Promise<string>
declare const foo: Awaitable<string>;
```

##### `Nullish` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nullish "Direct link to nullish")

A type that represents `null` or `undefined`.

```ts
// null | undefined
declare const foo: Nullish;
```

##### `NonNullableProperties` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nonnullableproperties "Direct link to nonnullableproperties")

Removes all properties of `T` that are not `null` or `undefined`.

```ts
interface Foo {
  foo: null;
  bar: undefined;
  baz: boolean;
}

// { baz: boolean }
declare const foo: NonNullableProperties<Foo>;
```

##### `NonNullObject` (deprecated) [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#nonnullobject-deprecated "Direct link to nonnullobject-deprecated")

A type that represents an object that is not `null` or `undefined`.

```ts
// ✅
const foo: NonNullObject = {};

// ❌
const bar: NonNullObject = null;

// ❌
const baz: NonNullObject = undefined;
```

##### `AnyObject` (deprecated) [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#anyobject-deprecated "Direct link to anyobject-deprecated")

An object that can have any structure. Similar to `NonNullObject`, and to be used as an alternative if the aforementioned type leads to unexpected behaviors.

```ts
// ✅
const foo: AnyObject = {};

// ❌
const bar: AnyObject = null;

// ❌
const baz: AnyObject = undefined;
```

##### `PrettifyObject` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#prettifyobject "Direct link to prettifyobject")

An utility type that fuses intersections of objects.

```ts
type Objects = {
  foo: string;
  bar: number;
} & {
  hello: boolean;
  world: bigint;
};

type PrettyObjects = PrettifyObject<Objects>;
// {
//   foo: string;
//   bar: number;
//   hello: boolean;
//   world: bigint
// }
```

##### `PickByValue` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#pickbyvalue "Direct link to pickbyvalue")

Picks keys from `T` who's values are assignable to `V`.

```ts
interface Foo {
  foo: string;
  bar: number;
  baz: boolean;
}

// 'foo' | 'bar'
declare const foo: PickByValue<Foo, string | number>;
```

##### `Mutable` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#mutable "Direct link to mutable")

Makes all properties in `T` mutable.

```ts
interface Foo {
	readonly bar: string;
	readonly baz: readonly number][];
}

// { bar: string; baz: number[] }
declare const foo: Mutable<Foo>;
```

##### `StrictRequired` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#strictrequired "Direct link to strictrequired")

Makes all properties in `T` strictly required by removing `undefined` and `null` from value types.

```ts
interface Foo {
  bar: string | undefined;
  baz?: number | null;
}

// { bar: string; baz: number }
declare const foo: StrictRequired<Foo>;
```

##### `ArrayElementType` [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#arrayelementtype "Direct link to arrayelementtype")

Gets a union type of all the keys that are in an array.

```ts
const sample = [1, 2, "3", true];

// string | number | boolean
declare const foo: ArrayElementType<typeof sample>;
```

---

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, Paypal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/utilities)](https://github.com/sapphiredev/utilities/graphs/contributors)

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#interfaces "Direct link to Interfaces")

| Interface                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DebouncedFunc](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/DebouncedFunc)                       | Call the original function, but applying the debounce rules.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [DebounceSettings](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/DebounceSettings)                 | lodash (Custom Build) [https://lodash.com/](https://lodash.com/) Build: `lodash modularize exports="npm" -o ./` Copyright jQuery Foundation and other contributors [https://jquery.org/](https://jquery.org/) Released under MIT license [https://lodash.com/license](https://lodash.com/license) Based on Underscore.js 1.8.3 [http://underscorejs.org/LICENSE](http://underscorejs.org/LICENSE) Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors |
| [GetDeepObjectKeysOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/GetDeepObjectKeysOptions) | The options for [getDeepObjectKeys](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/getDeepObjectKeys)                                                                                                                                                                                                                                                                                                                                     |
| [PollOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/PollOptions)                           | The options for the [poll](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/poll) function                                                                                                                                                                                                                                                                                                                                                  |
| [SleepOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/SleepOptions)                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [SyncPollOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/SyncPollOptions)                   | The options for the [pollSync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pollSync) function                                                                                                                                                                                                                                                                                                                                          |
| [Thenable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/Thenable)                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [ToTitleCaseOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/interfaces/ToTitleCaseOptions)             | The options to use when converting a string to title case                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Type Aliases [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#type-aliases "Direct link to Type Aliases")

| Type Alias                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [AbstractConstructor](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/AbstractConstructor)     | A generic abstract constructor without parameters                                                                                                                                                                                                                                                                                                            |
| [AbstractCtor](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/AbstractCtor)                   | A generic abstract constructor with parameters                                                                                                                                                                                                                                                                                                               |
| [~~AnyObject~~](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/AnyObject)                     | An object that can have any structure, this is an alternative to [NonNullObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/NonNullObject) for situations where that leads to unexpected type resolutions.                                                                                                     |
| [AnyReadonlyArray](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/AnyReadonlyArray)           | A readonly array of any values.                                                                                                                                                                                                                                                                                                                              |
| [ArgumentTypes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/ArgumentTypes)                 | -                                                                                                                                                                                                                                                                                                                                                            |
| [ArrayElementType](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/ArrayElementType)           | Gets a union type of all the keys that are in an array.                                                                                                                                                                                                                                                                                                      |
| [Awaitable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Awaitable)                         | ReturnType for a function that can return either a value or a `Promise` with that value                                                                                                                                                                                                                                                                      |
| [Builtin](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Builtin)                             | -                                                                                                                                                                                                                                                                                                                                                            |
| [Constructor](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Constructor)                     | A generic constructor without parameters                                                                                                                                                                                                                                                                                                                     |
| [Ctor](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Ctor)                                   | A generic constructor with parameters                                                                                                                                                                                                                                                                                                                        |
| [DeepPartial](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/DeepPartial)                     | -                                                                                                                                                                                                                                                                                                                                                            |
| [DeepReadonly](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/DeepReadonly)                   | -                                                                                                                                                                                                                                                                                                                                                            |
| [DeepRequired](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/DeepRequired)                   | -                                                                                                                                                                                                                                                                                                                                                            |
| [FirstArgument](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/FirstArgument)                 | Gets the first argument of any given function                                                                                                                                                                                                                                                                                                                |
| [If](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/If)                                       | A type utility that allows branching of types depending on the `Value` parameter.                                                                                                                                                                                                                                                                            |
| [Mutable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Mutable)                             | Transforms a `readonly` type to be mutable                                                                                                                                                                                                                                                                                                                   |
| [NonNullableProperties](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/NonNullableProperties) | Similar to the built in [NonNullable](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype), but properly removes `null` from all keys in the class or interface This does not recurse deeply, for that use [DeepRequired](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/DeepRequired) |
| [~~NonNullObject~~](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/NonNullObject)             | An object that is non nullable, to bypass TypeScript not easily working with `Record<PropertyKey, unknown>` in various instances.                                                                                                                                                                                                                            |
| [Nullish](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Nullish)                             | Type union for the full 2 billion dollar mistake in the JavaScript ecosystem                                                                                                                                                                                                                                                                                 |
| [PartialRequired](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/PartialRequired)             | -                                                                                                                                                                                                                                                                                                                                                            |
| [PickByValue](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/PickByValue)                     | Gets all the keys (as a string union) from a type `T` that match value `V`                                                                                                                                                                                                                                                                                   |
| [PrettifyObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/PrettifyObject)               | An utility type that fuses intersections of objects.                                                                                                                                                                                                                                                                                                         |
| [Primitive](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/Primitive)                         | -                                                                                                                                                                                                                                                                                                                                                            |
| [RequiredExcept](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/RequiredExcept)               | -                                                                                                                                                                                                                                                                                                                                                            |
| [RequiredIf](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/RequiredIf)                       | A type utility that allows branching of an union type on the `Value` parameter.                                                                                                                                                                                                                                                                              |
| [SecondArgument](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/SecondArgument)               | Gets the second argument of any given function                                                                                                                                                                                                                                                                                                               |
| [StrictRequired](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/StrictRequired)               | Transforms every key in an object to be strictly required, essentially removing `undefined` and `null` from the type.                                                                                                                                                                                                                                        |
| [ThrottleFn](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/type-aliases/ThrottleFn)                       | -                                                                                                                                                                                                                                                                                                                                                            |

## Variables [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#variables "Direct link to Variables")

| Variable                                                                                                                                           | Description                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [toTitleCaseDiscordJsVariants](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/variables/toTitleCaseDiscordJsVariants) | The variants that will not strictly follow the `toTitleCase` algorithm and will instead return the value matched with the key. |

## Functions [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#functions-1 "Direct link to Functions")

| Function                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [arrayStrictEquals](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/arrayStrictEquals)                           | Compare if both arrays are strictly equal                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [capitalizeFirstLetter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/capitalizeFirstLetter)                   | Transforms the first letter to a capital then adds all the rest after it                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [cast](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/cast)                                                     | Casts any value to `T`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [chunk](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/chunk)                                                   | Splits up an array into chunks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [classExtends](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/classExtends)                                     | Checks whether or not the value class extends the base class.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [codeBlock](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/codeBlock)                                           | Wraps the content inside a codeblock with no language                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [cutText](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/cutText)                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [debounce](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/debounce)                                             | Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls to the debounced function return the result of the last func invocation. |
| [deepClone](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/deepClone)                                           | Deep clone an object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [filterNullAndUndefined](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefined)                 | Checks whether a value is not `null` nor `undefined`. This can be used in [Array.filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove `null` and `undefined` from the array type                                                                                                                                                                                                                                                                        |
| [filterNullAndUndefinedAndEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndEmpty) | Checks whether a value is not `null` nor `undefined` nor `''` (empty string). This can be used in [Array.filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove `null`, `undefined` from the array type                                                                                                                                                                                                                                                   |
| [filterNullAndUndefinedAndZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndZero)   | Checks whether a value is not `null` nor `undefined` nor `0`. This can be used in [Array.filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to remove `null`, `undefined` from the array type                                                                                                                                                                                                                                                                   |
| [getDeepObjectKeys](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/getDeepObjectKeys)                           | Flattens an object to a list of its keys, traversing deeply into nested objects and arrays of objects.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [hasAtLeastOneKeyInMap](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInMap)                   | Checks whether any of the [keys](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInMap#hasatleastonekeyinmap) are in the [map](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInMap#hasatleastonekeyinmap)                                                                                                                                                                                       |
| [hasAtLeastOneKeyInObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInObject)             | Checks whether any of the [keys](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInObject#hasatleastonekeyinobject) are in the [obj](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/hasAtLeastOneKeyInObject#hasatleastonekeyinobject)                                                                                                                                                                           |
| [inlineCodeBlock](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/inlineCodeBlock)                               | Wraps text in a markdown inline codeblock                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [isClass](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isClass)                                               | Verify if the input is a class constructor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [isFunction](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isFunction)                                         | Verify if the input is a function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [isNullOrUndefined](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefined)                           | Checks whether or not a value is `null` or `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [isNullOrUndefinedOrEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefinedOrEmpty)             | Checks whether or not a value is `null`, `undefined` or `''`, `[]`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [isNullOrUndefinedOrZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefinedOrZero)               | Checks whether or not a value is `null`, `undefined` or `0`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [isNumber](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNumber)                                             | Verify if a number is a finite number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [isObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isObject)                                             | Verify if the input is an object literal (or class).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [isPrimitive](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isPrimitive)                                       | Check whether a value is a primitive                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [isThenable](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isThenable)                                         | Verify if an object is a promise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [lazy](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/lazy)                                                     | Lazily creates a constant or load a module and caches it internally                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [makeObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/makeObject)                                         | Turn a dotted path into a json object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [mergeDefault](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/mergeDefault)                                     | Deep merges 2 objects. Properties from the second parameter are applied to the first.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [mergeObjects](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/mergeObjects)                                     | Merges two objects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [noop](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/noop)                                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [objectEntries](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/objectEntries)                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [objectKeys](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/objectKeys)                                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [objectToTuples](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/objectToTuples)                                 | Convert an object to a tuple                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [objectValues](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/objectValues)                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [omitKeysFromObject](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/omitKeysFromObject)                         | Clones the source object using [deepClone](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/deepClone) then deletes the specified keys with [Reflect.deleteProperty](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)                                                                                                                                                                                                  |
| [partition](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/partition)                                           | Partitions `array` into a tuple of two arrays, where one array contains all elements that satisfies `predicate`, and the other contains all elements that do not satisfy `predicate`.                                                                                                                                                                                                                                                                                                                         |
| [pickRandom](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pickRandom)                                         | Picks a random element from an array                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [poll](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/poll)                                                     | Executes a function [cb](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/poll#poll) and validates the result with function [cbCondition](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/poll#poll), and repeats this until [cbCondition](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/poll#poll) returns `true` or the timeout is reached.                                              |
| [pollSync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pollSync)                                             | Executes a function [cb](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pollSync#pollsync) and validates the result with function [cbCondition](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pollSync#pollsync), and repeats this until [cbCondition](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/pollSync#pollsync) returns `true` or the timeout is reached.                      |
| [range](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/range)                                                   | Get an array of numbers with the selected range                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [regExpEsc](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/regExpEsc)                                           | Cleans a string from regex injection                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [retry](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/retry)                                                   | Asynchronously calls the callback function until it either succeeds or it runs out of retries. For a synchronous variant, see [retrySync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/retrySync.d.ts).                                                                                                                                                                                                                                                                        |
| [retrySync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/retrySync)                                           | Synchronously calls the callback function until it either succeeds or it runs out of retries. For an asynchronous variant, see [retry](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/retry.d.ts).                                                                                                                                                                                                                                                                               |
| [roundNumber](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/roundNumber)                                       | Rounds a number to a specified amount of decimal places.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [sleep](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/sleep)                                                   | Sleeps for the specified number of milliseconds. For a synchronous variant, see [sleepSync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/sleepSync.d.ts).                                                                                                                                                                                                                                                                                                                      |
| [sleepSync](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/sleepSync)                                           | Sleeps for the specified number of milliseconds synchronously. We should probably note that unlike [sleep](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/sleep) (which uses CPU tick times), sleepSync uses wall clock times, so the precision is near-absolute by comparison. That, and that synchronous means that nothing else in the thread will run for the length of the timer.                                                                                 |
| [snakeToCamelCase](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/snakeToCamelCase)                             | Transforms text from `snAkE_cASE` to `camelCase`.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [splitText](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/splitText)                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [throttle](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/throttle)                                             | Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds. The throttled function comes with a `flush` method to reset the last time the throttled function was invoked.                                                                                                                                                                                                                                                                                               |
| [toTitleCase](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/toTitleCase)                                       | Converts a string to Title Case                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [tryParseJSON](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/tryParseJSON)                                     | Try parse a stringified JSON string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [tryParseURL](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/tryParseURL)                                       | Tries parse a string to a [URL](https://developer.mozilla.org/docs/Web/API/URL) object                                                                                                                                                                                                                                                                                                                                                                                                                        |

## References [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#references "Direct link to References")

### filterNullish [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullish "Direct link to filterNullish")

Renames and re-exports [filterNullAndUndefined](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefined)

---

### filterNullishAndEmpty [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishandempty "Direct link to filterNullishAndEmpty")

Renames and re-exports [filterNullAndUndefinedAndEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndEmpty)

---

### filterNullishAndZero [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishandzero "Direct link to filterNullishAndZero")

Renames and re-exports [filterNullAndUndefinedAndZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndZero)

---

### filterNullishOrEmpty [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishorempty "Direct link to filterNullishOrEmpty")

Renames and re-exports [filterNullAndUndefinedAndEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndEmpty)

---

### filterNullishOrZero [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishorzero "Direct link to filterNullishOrZero")

Renames and re-exports [filterNullAndUndefinedAndZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/filterNullAndUndefinedAndZero)

---

### isNullish [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullish "Direct link to isNullish")

Renames and re-exports [isNullOrUndefined](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefined)

---

### isNullishOrEmpty [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullishorempty "Direct link to isNullishOrEmpty")

Renames and re-exports [isNullOrUndefinedOrEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefinedOrEmpty)

---

### isNullishOrZero [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullishorzero "Direct link to isNullishOrZero")

Renames and re-exports [isNullOrUndefinedOrZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/isNullOrUndefinedOrZero)

---

### kebabToCamelCase [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#kebabtocamelcase "Direct link to kebabToCamelCase")

Renames and re-exports [snakeToCamelCase](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/snakeToCamelCase)

---

### parseURL [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#parseurl "Direct link to parseURL")

Renames and re-exports [tryParseURL](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/tryParseURL)

---

### tryParse [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparse "Direct link to tryParse")

Renames and re-exports [tryParseJSON](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/functions/tryParseJSON)

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#usage)
  - [Javascript Utilities](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#javascript-utilities)
  - [Typescript Utilities](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#typescript-utilities)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#contributors)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#interfaces)
- [Type Aliases](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#type-aliases)
- [Variables](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#variables)
- [Functions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#functions-1)
- [References](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#references)
  - [filterNullish](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullish)
  - [filterNullishAndEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishandempty)
  - [filterNullishAndZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishandzero)
  - [filterNullishOrEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishorempty)
  - [filterNullishOrZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#filternullishorzero)
  - [isNullish](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullish)
  - [isNullishOrEmpty](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullishorempty)
  - [isNullishOrZero](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#isnullishorzero)
  - [kebabToCamelCase](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#kebabtocamelcase)
  - [parseURL](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#parseurl)
  - [tryParse](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/utilities/#tryparse)
