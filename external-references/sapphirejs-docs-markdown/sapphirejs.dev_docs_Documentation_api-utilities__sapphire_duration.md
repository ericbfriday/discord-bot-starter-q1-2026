[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#__docusaurus_skipToContent_fallback)

On this page

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

**Duration utilities for JavaScript.**

[![GitHub](https://img.shields.io/github/license/sapphiredev/utilities)](https://github.com/sapphiredev/utilities/blob/main/LICENSE.md)[![npm bundle size](https://img.shields.io/bundlephobia/min/@sapphire/duration?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@sapphire/duration)[![npm](https://img.shields.io/npm/v/@sapphire/duration?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@sapphire/duration)

**Table of Contents**

- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#usage)
  - [Human Readable Milliseconds](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#human-readable-milliseconds)
  - [Parsing a Duration](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#parsing-a-duration)
  - [Serializing a Duration](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#serializing-a-duration)
  - [Localizing with Durations](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#localizing-with-durations)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#contributors)

## Features [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#features "Direct link to Features")

- Written in TypeScript
- Bundled with esbuild so it can be used in NodeJS and browsers
- Offers CommonJS, ESM and UMD bundles
- Fully tested

## Installation [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#installation "Direct link to Installation")

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @sapphire/duration
```

## Usage [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#usage "Direct link to Usage")

**Note:** While this section uses `require`, the imports match 1:1 with ESM imports. For example `const { Duration } = require('@sapphire/duration')` equals `import { Duration } from '@sapphire/duration'`.

### Human Readable Milliseconds [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#human-readable-milliseconds "Direct link to Human Readable Milliseconds")

Milliseconds are often hard for humans to quickly parse, so it's nice to use
named enum members to make it easier to read.

```typescript
// Import the Time enum
const { Time } = require("@sapphire/duration");

setTimeout(() => {
  // Do something in half a second
}, Time.Second / 2 /* 500 */);

setTimeout(() => {
  // Do something in 6 hours
}, Time.Hour * 6 /* 21600000 */);

setTimeout(() => {
  // Do something in 1 day
}, Time.Day /* 86400000 */);
```

### Parsing a Duration [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#parsing-a-duration "Direct link to Parsing a Duration")

```typescript
// Import the Duration class
const { Duration } = require("@sapphire/duration");

// Create a Duration from a string
new Duration("1d3h15m3s").offset; // 98103000
new Duration("1 day, 3h & 15m, some extra characters, and another 3 seconds")
  .offset; // 98103000

// The date from now after the specified duration
new Duration("1d3h15m3s").fromNow;

// Or use a specific date
new Duration("1d3h15m3s").dateFrom(new Date("2020-01-01T00:00:00.000Z"));
```

**Show all available tokens**

```typescript
new Duration("1 nanosecond").offset; // 0.000001
new Duration("2 nanoseconds").offset; // 0.000002
new Duration("1 ns").offset; // 0.000001

new Duration("1 millisecond").offset; // 1
new Duration("2 milliseconds").offset; // 2
new Duration("1 ms").offset; // 1

new Duration("1 second").offset; // 1000
new Duration("2 seconds").offset; // 2000
new Duration("1 sec").offset; // 1000
new Duration("2 secs").offset; // 2000
new Duration("1 s").offset; // 1000

new Duration("1 minute").offset; // 60000
new Duration("2 minutes").offset; // 120000
new Duration("1 min").offset; // 60000
new Duration("2 mins").offset; // 120000
new Duration("1 m").offset; // 60000

new Duration("1 hour").offset; // 3600000
new Duration("2 hours").offset; // 7200000
new Duration("1 hr").offset; // 3600000
new Duration("2 hrs").offset; // 7200000
new Duration("1 h").offset; // 3600000

new Duration("1 day").offset; // 86400000
new Duration("2 days").offset; // 172800000
new Duration("1 d").offset; // 86400000

new Duration("1 week").offset; // 604800000
new Duration("2 weeks").offset; // 1209600000
new Duration("1 wk").offset; // 604800000
new Duration("2 wks").offset; // 1209600000
new Duration("1 w").offset; // 604800000

new Duration("1 month").offset; // 2629800000
new Duration("2 months").offset; // 5259600000
new Duration("1 b").offset; // 2629800000
new Duration("2 mo").offset; // 5259600000

new Duration("1 year").offset; // 31557600000
new Duration("2 years").offset; // 63115200000
new Duration("1 yr").offset; // 31557600000
new Duration("2 yrs").offset; // 63115200000
new Duration("1 y").offset; // 31557600000
```

### Serializing a Duration [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#serializing-a-duration "Direct link to Serializing a Duration")

```typescript
// Import the DurationFormatter class
const { DurationFormatter } = require("@sapphire/duration");

const formatter = new DurationFormatter();

// Serialize a duration
formatter.format(98103000); // 1 day 3 hours 15 minutes 3 seconds
formatter.format(-98103000); // -1 day 3 hours 15 minutes 3 seconds

// Serialize a duration with specified precision
formatter.format(98103000, 2); // 1 day 3 hours
```

### Localizing with Durations [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#localizing-with-durations "Direct link to Localizing with Durations")

```typescript
// Import the DurationFormatter class
const { DurationFormatter, TimeTypes } = require("@sapphire/duration");

// Create custom unit names
const units = {
  [TimeTypes.Year]: {
    1: "año",
    DEFAULT: "años",
  },
};

// Create a formatter the custom units
const formatter = new DurationFormatter(units);

// Serialize a duration
formatter.format(31557600000); // 1 año
formatter.format(63115200000); // 2 años
```

## Buy us some doughnuts [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#buy-us-some-doughnuts "Direct link to Buy us some doughnuts")

Sapphire Community is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Open Collective, Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With     | Address                                             |
| --------------- | --------------------------------------------------- |
| Open Collective | [Click Here](https://sapphirejs.dev/opencollective) |
| Ko-fi           | [Click Here](https://sapphirejs.dev/kofi)           |
| Patreon         | [Click Here](https://sapphirejs.dev/patreon)        |
| PayPal          | [Click Here](https://sapphirejs.dev/paypal)         |

## Contributors [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#contributors "Direct link to Contributors")

Please make sure to read the [Contributing Guide](https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md) before making a pull request.

Thank you to all the people who already contributed to Sapphire!

[![](https://contrib.rocks/image?repo=sapphiredev/utilities)](https://github.com/sapphiredev/utilities/graphs/contributors)

## Enumerations [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#enumerations "Direct link to Enumerations")

| Enumeration                                                                                                    | Description              |
| -------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [Time](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/enumerations/Time)           | -                        |
| [TimeTypes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/enumerations/TimeTypes) | The supported time types |

## Classes [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#classes "Direct link to Classes")

| Class                                                                                                                     | Description                                        |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Duration](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/classes/Duration)                   | Converts duration strings into ms and future dates |
| [DurationFormatter](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/classes/DurationFormatter) | Display the duration                               |

## Interfaces [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#interfaces "Direct link to Interfaces")

| Interface                                                                                                                                  | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [DurationFormatAssetsTime](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/interfaces/DurationFormatAssetsTime) | -           |
| [DurationFormatAssetsUnit](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/interfaces/DurationFormatAssetsUnit) | -           |
| [DurationFormatSeparators](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/interfaces/DurationFormatSeparators) | -           |

## Variables [​](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#variables "Direct link to Variables")

| Variable                                                                                                                      | Description |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [DEFAULT_SEPARATORS](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/variables/DEFAULT_SEPARATORS) | -           |
| [DEFAULT_UNITS](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/variables/DEFAULT_UNITS)           | -           |

- [Features](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#features)
- [Installation](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#installation)
- [Usage](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#usage)
  - [Human Readable Milliseconds](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#human-readable-milliseconds)
  - [Parsing a Duration](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#parsing-a-duration)
  - [Serializing a Duration](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#serializing-a-duration)
  - [Localizing with Durations](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#localizing-with-durations)
- [Buy us some doughnuts](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#buy-us-some-doughnuts)
- [Contributors](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#contributors)
- [Enumerations](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#enumerations)
- [Classes](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#classes)
- [Interfaces](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#interfaces)
- [Variables](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/duration/#variables)
