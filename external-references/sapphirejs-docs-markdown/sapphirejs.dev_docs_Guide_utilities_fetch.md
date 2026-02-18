[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/fetch/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/fetch/#introduction "Direct link to Introduction")

Sapphire's fetch package, @sapphire/fetch is a small wrapper around [cross-fetch](https://npmjs.com/package/cross-fetch)
so it will work in both the web browser and the native node.js environment.

## Installation [​](https://sapphirejs.dev/docs/Guide/utilities/fetch/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/fetch
```

```bash
yarn add @sapphire/fetch
```

```bash
pnpm add @sapphire/fetch
```

## Usage [​](https://sapphirejs.dev/docs/Guide/utilities/fetch/#usage "Direct link to Usage")

GETting JSON data

- CommonJS
- ESM
- TypeScript

```typescript
// Import the fetch function
const { fetch, FetchResultTypes } = require("@sapphire/fetch");

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
  FetchResultTypes.JSON,
);

// Do something with the data
console.log(data.userId);
```

```typescript
// Import the fetch function
import { fetch, FetchResultTypes } from "@sapphire/fetch";

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch(
  "https://jsonplaceholder.typicode.com/todos/1",
  FetchResultTypes.JSON,
);

// Do something with the data
console.log(data.userId);
```

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

GETting Buffer data

- CommonJS
- ESM
- TypeScript

```typescript
// Import the fetch function
const { fetch, FetchResultTypes } = require("@sapphire/fetch");

// Fetch the data. No need to call `.buffer()` after making the request!
const sapphireLogo = await fetch(
  "https://github.com/sapphiredev.png",
  FetchResultTypes.Buffer,
);

// sapphireLogo is the `Buffer` of the image
console.log(sapphireLogo);
```

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

POSTing JSON data

- CommonJS
- ESM
- TypeScript

```typescript
// Import the fetch function
const { fetch, FetchResultTypes, FetchMethods } = require("@sapphire/fetch");

// Fetch the data. No need to call `.json()` after making the request!
const responseData = await fetch(
  "https://jsonplaceholder.typicode.com/todos",
  {
    method: FetchMethods.Post,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
    }),
  },
  FetchResultTypes.JSON,
);

// Do something with the response data
console.log(responseData);
```

```typescript
// Import the fetch function
import { fetch, FetchResultTypes, FetchMethods } from "@sapphire/fetch";

// Fetch the data. No need to call `.json()` after making the request!
const responseData = await fetch(
  "https://jsonplaceholder.typicode.com/todos",
  {
    method: FetchMethods.Post,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
    }),
  },
  FetchResultTypes.JSON,
);

// Do something with the response data
console.log(responseData);
```

```typescript
// Import the fetch function
import { fetch, FetchResultTypes, FetchMethods } from "@sapphire/fetch";

// Fetch the data. No need to call `.json()` after making the request!
const responseData = await fetch(
  "https://jsonplaceholder.typicode.com/todos",
  {
    method: FetchMethods.Post,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
    }),
  },
  FetchResultTypes.JSON,
);

// Do something with the response data
console.log(responseData);
```

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/fetch/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/utilities/fetch/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/utilities/fetch/#usage)
