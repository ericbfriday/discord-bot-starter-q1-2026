[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#introduction "Direct link to Introduction")

Often working with `Date` related objects can be hard to handle. `@sapphire/time-utilities` is a small package that
contains a few utility classes that eases working with these kind of objects.

## Installation [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/time-utilities
```

```bash
yarn add @sapphire/time-utilities
```

```bash
pnpm add @sapphire/time-utilities
```

## Enums [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#enums "Direct link to Enums")

Time utilities comes with a few enums that can be used to represent time units and to simplify the extra unit
conversions. For example

`Example`

- CommonJS
- ESM
- TypeScript

```typescript
const { Time } = require("@sapphire/time-utilities");

console.log(Time.Day * 1); // 86400000
```

```typescript
import { Time } from "@sapphire/time-utilities";

console.log(Time.Day * 1); // 86400000
```

```typescript
import { Time } from "@sapphire/time-utilities";

console.log(Time.Day * 1); // 86400000
```

Similarly other enum members represent time intervals too. Please see more enum members in the
[documentation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/time-utilities/enumerations/Time).

## Classes [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#classes "Direct link to Classes")

Since this package contains multiple utility classes, we will cover each one by one.

### Cron [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#cron "Direct link to Cron")

`Cron` class can be used to process the [cron strings](https://en.wikipedia.org/wiki/Cron). It can be used to get the next time a cron job
should be executed. By default it uses the current `UTC` time to compare. However, you can pass a `Time` object to
compare with too in `next` method.

- CommonJS
- ESM
- TypeScript

```typescript
const { Cron } = require("@sapphire/time-utilities");

const cronTime = new Cron("0 * * * *");

console.log(cronTime.next());
// logs next hour time

console.log(cronTime.next(new Date("2022-04-24T19:30:00Z")));
// 2022-04-24T20:00:00.000Z
```

```typescript
import { Cron } from "@sapphire/time-utilities";

const cronTime = new Cron("0 * * * *");

console.log(cronTime.next());
// logs next hour time

console.log(cronTime.next(new Date("2022-04-24T19:30:00Z")));
// 2022-04-24T20:00:00.000Z
```

```typescript
import { Cron } from "@sapphire/time-utilities";

const cronTime = new Cron("0 * * * *");

console.log(cronTime.next());
// logs next hour time

console.log(cronTime.next(new Date("2022-04-24T19:30:00Z")));
// 2022-04-24T20:00:00.000Z
```

### Duration [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#duration "Direct link to Duration")

`Duration` class can be used to convert a human readable time string to milliseconds.

- CommonJS
- ESM
- TypeScript

```typescript
const { Duration } = require("@sapphire/time-utilities");

const duration = new Duration("1d");

console.log(duration);
// { offset: 86400000 }

console.log(duration.fromNow);
// Logs the date from now
```

```typescript
import { Duration } from "@sapphire/time-utilities";

const duration = new Duration("1d");

console.log(duration);
// { offset: 86400000 }

console.log(duration.fromNow);
// Logs the date from now
```

```typescript
import { Duration } from "@sapphire/time-utilities";

const duration = new Duration("1d");

console.log(duration);
// { offset: 86400000 }

console.log(duration.fromNow);
// Logs the date from now
```

### DurationFormatter [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#durationformatter "Direct link to DurationFormatter")

`DurationFormatter` class can be used to convert milliseconds duration to a human readable string.

- CommonJS
- ESM
- TypeScript

```typescript
const { DurationFormatter } = require("@sapphire/time-utilities");

const ms = new DurationFormatter().format(3600000);

console.log(ms);
// 1 hour
```

```typescript
import { DurationFormatter } from "@sapphire/time-utilities";

const ms = new DurationFormatter().format(3600000);

console.log(ms);
// 1 hour
```

```typescript
import { DurationFormatter } from "@sapphire/time-utilities";

const ms = new DurationFormatter().format(3600000);

console.log(ms);
// 1 hour
```

### TimerManager [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#timermanager "Direct link to TimerManager")

`TimerManager` class can be used to manage timers. It can be used to create a timer that will be executed every `X`
milliseconds as well as to set a timeout.

- CommonJS
- ESM
- TypeScript

```typescript
const { TimerManager } = require("@sapphire/time-utilities");

function guideTimerManager(message) {
  console.log(message);
}

TimerManager.setTimeout(() => {
  guideTimerManager("After 2 seconds");
}, 2000);

TimerManager.setInterval(() => {
  guideTimerManager("I run per minute");
}, 60000);
```

```typescript
import { TimerManager } from "@sapphire/time-utilities";

function guideTimerManager(message) {
  console.log(message);
}

TimerManager.setTimeout(() => {
  guideTimerManager("After 2 seconds");
}, 2000);

TimerManager.setInterval(() => {
  guideTimerManager("I run per minute");
}, 60000);
```

```typescript
import { TimerManager } from "@sapphire/time-utilities";

function guideTimerManager(message: string) {
  console.log(message);
}

TimerManager.setTimeout(() => {
  guideTimerManager("After 2 seconds");
}, 2000);

TimerManager.setInterval(() => {
  guideTimerManager("I run per minute");
}, 60000);
```

### Timestamp [​](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#timestamp "Direct link to Timestamp")

`Timestamp` class contains multiple methods that can be used to deal with timestamps easily. Let's see a quick example
of how to use it.

`Example`

- CommonJS
- ESM
- TypeScript

```typescript
const { Timestamp } = require("@sapphire/time-utilities");

const timestamp = new Timestamp("HH:mm:ss");

console.log(timestamp.display(3600000));
// 06:30:00

// edit the initialized pattern to include date, month and year in timestamp
timestamp.edit("DD-MM-YYYY HH:mm:ss");

console.log(timestamp.display(3600000));
// 01-01-1970 06:30:00

// convert a date to UTC date
console.log(Timestamp.utc("2022-04-25"));
// 2022-04-24T18:30:00.000Z
```

```typescript
import { Timestamp } from "@sapphire/time-utilities";

const timestamp = new Timestamp("HH:mm:ss");

console.log(timestamp.display(3600000));
// 06:30:00

// edit the initialized pattern to include date, month and year in timestamp
timestamp.edit("DD-MM-YYYY HH:mm:ss");

console.log(timestamp.display(3600000));
// 01-01-1970 06:30:00

// convert a date to UTC date
console.log(Timestamp.utc("2022-04-25"));
// 2022-04-24T18:30:00.000Z
```

```typescript
import { Timestamp } from "@sapphire/time-utilities";

const timestamp = new Timestamp("HH:mm:ss");

console.log(timestamp.display(3600000));
// 06:30:00

// edit the initialized pattern to include date, month and year in timestamp
timestamp.edit("DD-MM-YYYY HH:mm:ss");

console.log(timestamp.display(3600000));
// 01-01-1970 06:30:00

// convert a date to UTC date
console.log(Timestamp.utc("2022-04-25"));
// 2022-04-24T18:30:00.000Z
```

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#installation)
- [Enums](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#enums)
- [Classes](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#classes)
  - [Cron](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#cron)
  - [Duration](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#duration)
  - [DurationFormatter](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#durationformatter)
  - [TimerManager](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#timermanager)
  - [Timestamp](https://sapphirejs.dev/docs/Guide/utilities/time-utilities/#timestamp)
