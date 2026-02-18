[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/adding-routes/#__docusaurus_skipToContent_fallback)

First we create a new folder called `routes` in the `src` directory. And make a new file `hello-world.get`

- CommonJS
- ESM
- TypeScript

```typescript
const { Route } = require("@sapphire/plugin-api");

class UserRoute extends Route {
  run(_request, response) {
    response.json({ message: "Hello World" });
  }
}
module.exports = {
  UserRoute,
};
```

```typescript
import { Route } from "@sapphire/plugin-api";

export class UserRoute extends Route {
  run(_request, response) {
    response.json({ message: "Hello World" });
  }
}
```

```typescript
import { Route } from "@sapphire/plugin-api";

export class UserRoute extends Route {
  public run(_request: Route.Request, response: Route.Response) {
    response.json({ message: "Hello World" });
  }
}
```

A quick glance on what we did above:

- First we extended the `Route` class to make our route
- Second we defined the handler for the `GET` method defined in the filename
- Finally, when `GET /hello-world` is called, the route will reply with the defined body
