[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/authenticating-routes/#__docusaurus_skipToContent_fallback)

When writing an API that is publicly available for consumption, it is often desirable to lock some routes behind them
requiring authentication. For example routes that would interact with your database. On this page we will guide you to
write your own authentication system that integrates with Sapphire.

Because authentication with the built-in OAUTH2 system always adds a [`request.auth`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiRequest#auth) property it is
actually quite easy to ensure a request is authenticated before processing it any further! The following code will check
if [`request.auth.token`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/AuthData#token) is defined or not. When it is not, we exit out of the function with a
`401 Unauthorized` response.

- CommonJS
- ESM
- TypeScript

```typescript
const { HttpCodes, Route } = require("@sapphire/plugin-api");
const { isNullishOrEmpty } = require("@sapphire/utilities");

class MyRoute extends Route {
  async run(request, response) {
    if (isNullishOrEmpty(request.auth?.token))
      return response.error(HttpCodes.Unauthorized);
  }
}
module.exports = {
  MyRoute,
};
```

```typescript
import { HttpCodes, Route } from "@sapphire/plugin-api";
import { isNullishOrEmpty } from "@sapphire/utilities";

export class MyRoute extends Route {
  async run(request, response) {
    if (isNullishOrEmpty(request.auth?.token))
      return response.error(HttpCodes.Unauthorized);
  }
}
```

```typescript
import { HttpCodes, Route } from "@sapphire/plugin-api";
import { isNullishOrEmpty } from "@sapphire/utilities";

export class MyRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    if (isNullishOrEmpty(request.auth?.token))
      return response.error(HttpCodes.Unauthorized);
  }
}
```

An alternative way to implement this that is currently only possible for TypeScript users is by writing a decorator that
does the check. This allows your code to be a bit cleaner, as you can remove the `if` statement and instead provide the
decorator. A decorator that does the authentication check can look like:

- CommonJS
- ESM
- TypeScript

```typescript
const { createFunctionPrecondition } = require("@sapphire/decorators");
const { HttpCodes } = require("@sapphire/plugin-api");

const authenticated = () =>
  createFunctionPrecondition(
    (request) => Boolean(request.auth?.token),
    (_request, response) => response.error(HttpCodes.Unauthorized),
  );
module.exports = {
  authenticated,
};
```

```typescript
import { createFunctionPrecondition } from "@sapphire/decorators";
import { HttpCodes } from "@sapphire/plugin-api";

export const authenticated = () =>
  createFunctionPrecondition(
    (request) => Boolean(request.auth?.token),
    (_request, response) => response.error(HttpCodes.Unauthorized),
  );
```

```typescript
import { createFunctionPrecondition } from "@sapphire/decorators";
import { HttpCodes, type Route } from "@sapphire/plugin-api";

export const authenticated = () =>
  createFunctionPrecondition(
    (request: Route.Request) => Boolean(request.auth?.token),
    (_request: Route.Request, response: Route.Response) =>
      response.error(HttpCodes.Unauthorized),
  );
```

You can then use the decorator on your route like so:

```typescript
import { Route } from "@sapphire/plugin-api";

export class MyRoute extends Route {
  @authenticated()
  public async run(request: Route.Request, response: Route.Response) {
    // Implementation
  }
}
```
