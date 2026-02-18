[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel/#introduction "Direct link to Introduction")

A log level is a number that represents the importance of a log message. The higher the number, the more important the
log message is. The default log level is `Info`, which means that all log messages except `Trace` and `Debug` are
logged.

Since the default level is `Info` it will skip all the `Debug` messages which are important for debugging purposes, in
particular also during development.

## Usage [​](https://sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel/#usage "Direct link to Usage")

Default log level can be customized in the `logger` options of the [`SapphireClient`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/SapphireClient).

- CommonJS
- ESM
- TypeScript

```typescript
const { LogLevel, SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({ logger: { level: LogLevel.Debug } });
```

```typescript
import { LogLevel, SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({ logger: { level: LogLevel.Debug } });
```

```typescript
import { LogLevel, SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({ logger: { level: LogLevel.Debug } });
```

The above will set the default log level to `Debug` which will lead to logging the debug messages in console. This is
something which we don't want when application is running in production. To exempt that from `logger` during production
we can configure the `logger level` dynamically.

`Example`

- CommonJS
- ESM
- TypeScript

```typescript
const { LogLevel, SapphireClient } = require("@sapphire/framework");

const client = new SapphireClient({
  logger: {
    level:
      process.env.NODE_ENV === "development" ? LogLevel.Debug : LogLevel.Info,
  },
});
```

```typescript
import { LogLevel, SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  logger: {
    level:
      process.env.NODE_ENV === "development" ? LogLevel.Debug : LogLevel.Info,
  },
});
```

```typescript
import { LogLevel, SapphireClient } from "@sapphire/framework";

const client = new SapphireClient({
  logger: {
    level:
      process.env.NODE_ENV === "development" ? LogLevel.Debug : LogLevel.Info,
  },
});
```

Above example will set the `logger level` to `Debug` during development and to `Info` during production.

warning

Setting `logger level` to a specific level makes logger ignore the lower logger levels. This means that if level is set
to `Warn` then logger will not log `Info` log messages.

- [Introduction](https://sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel/#introduction)
- [Usage](https://sapphirejs.dev/docs/Guide/plugins/Logger/configuring-loglevel/#usage)
