[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#introduction "Direct link to Introduction")

Provides a set of methods and properties that you can use to accurately measure elapsed time inside your code.

## Installation [​](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/stopwatch
```

```bash
yarn add @sapphire/stopwatch
```

```bash
pnpm add @sapphire/stopwatch
```

## Usage [​](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#usage "Direct link to Usage")

- CommonJS
- ESM
- TypeScript

```typescript
// Import the Stopwatch class
const { Stopwatch } = require("@sapphire/stopwatch");

// Create a new Stopwatch (which also starts it immediately)
const stopwatch = new Stopwatch();

// run other task here

console.log(stopwatch.stop().toString());
// 200ms
```

```typescript
// Import the Stopwatch class
import { Stopwatch } from "@sapphire/stopwatch";

// Create a new Stopwatch (which also starts it immediately)
const stopwatch = new Stopwatch();

// run other task here

console.log(stopwatch.stop().toString());
// 200ms
```

```typescript
// Import the Stopwatch class
import { Stopwatch } from "@sapphire/stopwatch";

// Create a new Stopwatch (which also starts it immediately)
const stopwatch = new Stopwatch();

// run other task here

console.log(stopwatch.stop().toString());
// 200ms
```

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/utilities/stopwatch/#usage)
