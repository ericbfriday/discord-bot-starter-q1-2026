[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**Tiny wrapper around Node's global `fetch` for improved TypeScript and data type support**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/fetch?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/fetch)[![npm](https://img.shields.io/npm/v/@sapphire/fetch?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/fetch)

**Table of Contents**

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#usage)
  - [`GET`ting JSON data](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-json-data)
  - [`GET`ting Buffer data (images, etc.)](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-buffer-data-images-etc)
  - [`POST`ing JSON data](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#posting-json-data)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#contributors)

## Description [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#description "Direct link to Description")

Node has a great global `fetch` (powered by [undici](https://github.com/nodejs/undici)) for making API calls, but because it focuses solely on bringing the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to Node.js, it doesn't provide specific error messages and handling for different return types (JSON, Buffer, plain text, etc). This is where `@sapphire/fetch` comes in. The syntax is more restrictive than that of [undici](https://github.com/nodejs/undici), but that makes it consistent and easier to use in TypeScript.

## Features [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#features "Direct link to Features")

- Written in TypeScript
- Fully tested
- Exported `enum` for the common return data types
- Throws distinctive errors when the API returns a "not ok" status code to make them easier to understand
- Enforces casting the return type when requesting JSON data, to ensure your return data is strictly typed
- Uses global `fetch`, which for NodeJS is [undici](https://github.com/nodejs/undici) and for browsers is the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#installation "Direct link to Installation")

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/fetch
```

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#usage "Direct link to Usage")

> \[!NOTE\]
> While this section uses `import`, it maps 1:1 with CommonJS' require syntax. For example,
>
> ```ts
> import { fetch } from "@sapphire/fetch";
> ```
>
> is the same as
>
> ```ts
> const { fetch } = require("@sapphire/fetch");
> ```

> \[!IMPORTANT\]
> When providing a serializable object to the `body` option, `@sapphire/fetch` will automatically call `JSON.stringify` on the object. This means you can pass an object directly to the `body` option without having to call `JSON.stringify` yourself.
> If the body is _not_ serializable (such as a `File`, `Buffer`, or `Blob`), the body will be sent as-is.
> Serializability is calculated based on:
>
> - If the body is `null`
> - If the body's `.constructor` property is `undefined`
> - If the body's `.constructor.name` property is `Object`
> - If the body has a function property named `toJSON`

> \[!WARNING\]
> Because `@sapphire/fetch` aims to be as close to global fetch as possible, it doesn't support proxy options that a library like undici does. If you want to use a proxy, you should use undici directly.

### `GET`ting JSON data [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-json-data "Direct link to getting-json-data")

```typescript
// Import the fetch function
import { fetch, FetchResultTypes } from "@sapphire/fetch";

interface JsonPlaceholderResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch<JsonPlaceholderResponse>(
  "https://jsonplaceholder.typicode.com/todos/1",
  FetchResultTypes.JSON,
);

// Do something with the data
console.log(data.userId);
```

### `GET`ting Buffer data (images, etc.) [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-buffer-data-images-etc "Direct link to getting-buffer-data-images-etc")

```typescript
// Import the fetch function
import { fetch, FetchResultTypes } from "@sapphire/fetch";

// Fetch the data. No need to call `.buffer()` after making the request!
const sapphireLogo = await fetch(
  "https://github.com/sapphiredev.png",
  FetchResultTypes.Buffer,
);

// sapphireLogo is the `Buffer` of the image
console.log(sapphireLogo);
```

### `POST`ing JSON data [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#posting-json-data "Direct link to posting-json-data")

```typescript
// Import the fetch function
import { fetch, FetchResultTypes, FetchMethods } from "@sapphire/fetch";

// Post the data. No need to call `.json()` after making the request!
const responseData = await fetch(
  "https://jsonplaceholder.typicode.com/todos",
  {
    method: FetchMethods.Post,
    headers: {
      "Content-Type": "application/json",
    },
    body: { name: "John Doe" },
  },
  FetchResultTypes.JSON,
);

// Do something with the response data
console.log(responseData);
```

---

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/utilities)](https://github.com/sapphiredev/utilities/graphs/contributors)

## Enumerations [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#enumerations "Direct link to Enumerations")

| Enumeration                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [FetchMediaContentTypes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/enumerations/FetchMediaContentTypes) | A list of common [Media Content Types](https://www.iana.org/assignments/media-types/media-types.xhtml) as defined by the [IANA](https://www.iana.org/). Media Content Types are also known as a Multipurpose Internet Mail Extensions or MIME type Media Content Types are defined and standardized in IETF's [RFC 6838](https://datatracker.ietf.org/doc/html/rfc6838). |
| [FetchMethods](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/enumerations/FetchMethods)                     | The list of [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)                                                                                                                                                                                                                                                                                    |
| [FetchResultTypes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/enumerations/FetchResultTypes)             | The supported return types for the `fetch` method                                                                                                                                                                                                                                                                                                                        |

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#classes "Direct link to Classes")

| Class                                                                                                    | Description                                                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [QueryError](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/classes/QueryError) | The QueryError class which is thrown by the `fetch` method |

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#interfaces "Direct link to Interfaces")

| Interface                                                                                                           | Description |
| ------------------------------------------------------------------------------------------------------------------- | ----------- |
| [RequestOptions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/interfaces/RequestOptions) | -           |

## Functions [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#functions "Direct link to Functions")

| Function                                                                                         | Description               |
| ------------------------------------------------------------------------------------------------ | ------------------------- |
| [fetch](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/functions/fetch) | Performs an HTTP(S) fetch |

- [Description](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#description)
- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#usage)
  - [`GET`ting JSON data](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-json-data)
  - [`GET`ting Buffer data (images, etc.)](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#getting-buffer-data-images-etc)
  - [`POST`ing JSON data](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#posting-json-data)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#contributors)
- [Enumerations](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#enumerations)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#classes)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#interfaces)
- [Functions](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/#functions)
