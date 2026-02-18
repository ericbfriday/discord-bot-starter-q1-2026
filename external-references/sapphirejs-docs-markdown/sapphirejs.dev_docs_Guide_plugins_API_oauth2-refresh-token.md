[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token/#__docusaurus_skipToContent_fallback)

On this page

Now that you have implemented OAUTH2 on the backend and frontend you will experience that after some time the token
expires. This is because the token is only valid for 7 days (`604800` seconds to be precise). To prevent the user from
having to re-authenticate you can implement an automatic refresh system. This is also something you will likely want to
implement anyway and offer as a "resync" button to the user in case they, for example, join a new server and want to
setup your bot in that server so you need their latest [`LoginData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/LoginData).

warning

On this page we are **not** guarding this route have rate limiting, however we very strongly recommend adding this kind
of guard to the route so it cannot be spammed. You can read up on how to do this in the dedicated page [Applying rate\\
limits to routes](https://sapphirejs.dev/docs/Guide/plugins/API/rate-limiting).

## Implementing the refresh route [​](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token/#implementing-the-refresh-route "Direct link to Implementing the refresh route")

The first step is to add a new route, more information for adding routes can be found in the [Adding\\
routes](https://sapphirejs.dev/docs/Guide/plugins/API/adding-routes) page. For the rest of this guide we will assume the route is `/oauth/refresh.post` as path. Lets
start by writing the basics:

- CommonJS
- ESM
- TypeScript

```typescript
const { Route } = require("@sapphire/plugin-api");

class RefreshRoute extends Route {
  async run(request, response) {
    // implementation
  }
}
module.exports = {
  RefreshRoute,
};
```

```typescript
import { Route } from "@sapphire/plugin-api";

export class RefreshRoute extends Route {
  async run(request, response) {
    // implementation
  }
}
```

```typescript
import { methods, Route } from "@sapphire/plugin-api";

export class RefreshRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    // implementation
  }
}
```

The first step in this route is to ensure that the route is called when the user is at least authenticated, regardless
of whether their token is still valid or not. We can do so by checking the presence of [`request.auth`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiRequest#auth).

In this part of the code we also extract some nested variables into local variables so we can reference them easier
later.

- CommonJS
- ESM
- TypeScript

```typescript
const { HttpCodes, Route } = require("@sapphire/plugin-api");

class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;
  }
}
module.exports = {
  RefreshRoute,
};
```

```typescript
import { HttpCodes, Route } from "@sapphire/plugin-api";

export class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;
  }
}
```

```typescript
import { HttpCodes, Route } from "@sapphire/plugin-api";

export class RefreshRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth!;

    let authToken = requestAuth.token;
  }
}
```

tip

If you use an authenticated decorator on this route, you can remove the `if (!request.auth)` check and use
`const requestAuth = request.auth!` instead.

Note regarding TypeScript example

For the TypeScript example we are using the `!` operator on [`this.container.server.auth`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/Server#auth) to tell
TypeScript that we are sure that the property exists. We can safely do this because we provided the OAUTH2 information
in [Using the built in OAUTH2 route (backend)](https://sapphirejs.dev/docs/Guide/plugins/API/using-oauth2-backend-route)

Now that we have the authentication token we should check if it will soon expire. As the token is valid for 7 days
(`604800` seconds), we check if it will expire within a day (`86400` seconds). If it will expire in a day we will
refresh the token, and add the new token as a cookie to the response:

- CommonJS
- ESM
- TypeScript

```typescript
const { fetch, FetchResultTypes } = require("@sapphire/fetch");
const { HttpCodes, MimeTypes, Route } = require("@sapphire/plugin-api");
const { Time } = require("@sapphire/time-utilities");
const { OAuth2Routes } = require("discord.js");
const { stringify } = require("node:querystring");

class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh
    if (Date.now() + Time.Day >= requestAuth.expires) {
      const body = await this.refreshToken(requestAuth.id, requestAuth.refresh);
      if (body !== null) {
        const authentication = serverAuth.encrypt({
          id: requestAuth.id,
          token: body.access_token,
          refresh: body.refresh_token,
          expires: Date.now() + body.expires_in * 1000,
        });

        response.cookies.add(serverAuth.cookie, authentication, {
          maxAge: body.expires_in,
        });
        authToken = body.access_token;
      }
    }
  }

  async refreshToken(id, refreshToken) {
    const { logger, server } = this.container;
    try {
      logger.debug(`Refreshing Token for ${id}`);
      return await fetch(
        OAuth2Routes.tokenURL,
        {
          method: "POST",
          body: stringify({
            client_id: server.auth.id,
            client_secret: server.auth.secret,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            redirect_uri: server.auth.redirect,
            scope: server.auth.scopes,
          }),
          headers: {
            "Content-Type": MimeTypes.ApplicationFormUrlEncoded,
          },
        },
        FetchResultTypes.JSON,
      );
    } catch (error) {
      logger.fatal(error);
      return null;
    }
  }
}
module.exports = {
  RefreshRoute,
};
```

```typescript
import { fetch, FetchResultTypes } from "@sapphire/fetch";
import { HttpCodes, MimeTypes, Route } from "@sapphire/plugin-api";
import { Time } from "@sapphire/time-utilities";
import { OAuth2Routes } from "discord.js";
import { stringify } from "node:querystring";

export class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh
    if (Date.now() + Time.Day >= requestAuth.expires) {
      const body = await this.refreshToken(requestAuth.id, requestAuth.refresh);
      if (body !== null) {
        const authentication = serverAuth.encrypt({
          id: requestAuth.id,
          token: body.access_token,
          refresh: body.refresh_token,
          expires: Date.now() + body.expires_in * 1000,
        });

        response.cookies.add(serverAuth.cookie, authentication, {
          maxAge: body.expires_in,
        });
        authToken = body.access_token;
      }
    }
  }

  async refreshToken(id, refreshToken) {
    const { logger, server } = this.container;
    try {
      logger.debug(`Refreshing Token for ${id}`);
      return await fetch(
        OAuth2Routes.tokenURL,
        {
          method: "POST",
          body: stringify({
            client_id: server.auth.id,
            client_secret: server.auth.secret,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            redirect_uri: server.auth.redirect,
            scope: server.auth.scopes,
          }),
          headers: {
            "Content-Type": MimeTypes.ApplicationFormUrlEncoded,
          },
        },
        FetchResultTypes.JSON,
      );
    } catch (error) {
      logger.fatal(error);
      return null;
    }
  }
}
```

```typescript
import { fetch, FetchResultTypes } from "@sapphire/fetch";
import { HttpCodes, MimeTypes, Route } from "@sapphire/plugin-api";
import { Time } from "@sapphire/time-utilities";
import { OAuth2Routes, type RESTPostOAuth2AccessTokenResult } from "discord.js";
import { stringify } from "node:querystring";

export class RefreshRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth!;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh
    if (Date.now() + Time.Day >= requestAuth.expires) {
      const body = await this.refreshToken(requestAuth.id, requestAuth.refresh);
      if (body !== null) {
        const authentication = serverAuth.encrypt({
          id: requestAuth.id,
          token: body.access_token,
          refresh: body.refresh_token,
          expires: Date.now() + body.expires_in * 1000,
        });

        response.cookies.add(serverAuth.cookie, authentication, {
          maxAge: body.expires_in,
        });
        authToken = body.access_token;
      }
    }
  }

  private async refreshToken(
    id: string,
    refreshToken: string,
  ): Promise<RESTPostOAuth2AccessTokenResult | null> {
    const { logger, server } = this.container;
    try {
      logger.debug(`Refreshing Token for ${id}`);
      return await fetch<RESTPostOAuth2AccessTokenResult>(
        OAuth2Routes.tokenURL,
        {
          method: "POST",
          body: stringify({
            client_id: server.auth!.id,
            client_secret: server.auth!.secret,
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            redirect_uri: server.auth!.redirect,
            scope: server.auth!.scopes,
          }),
          headers: {
            "Content-Type": MimeTypes.ApplicationFormUrlEncoded,
          },
        },
        FetchResultTypes.JSON,
      );
    } catch (error) {
      logger.fatal(error);
      return null;
    }
  }
}
```

There is quite a bit to take in here so lets go over it bit by bit. First of all, we check if the token will expire in
day or less. We use the [`Time`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/time-utilities/enumerations/Time) enum here so easily get the amount of seconds that fit in a day. Next we
call the `refreshToken` method. This method is responsible for making the request to Discord to refresh the token. We
use the [`fetch`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/functions/fetch) method from the [`@sapphire/fetch`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch) package to make the request. We also
use the [`stringify`](https://nodejs.org/dist/latest-v22.x/docs/api/querystring.html#querystringstringifyobj-sep-eq-options) method from the [`node:querystring`](https://nodejs.org/dist/latest-v22.x/docs/api/querystring.html) package to convert the
body to a querystring. The [`fetch`](https://sapphirejs.dev/docs/Documentation/api-utilities/@sapphire/fetch/functions/fetch) method returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) so we can use [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
to wait for the response. If the response is successful we return the body, otherwise we return `null`.

Now back in the main function we have the body with the refreshed token, or `null`. If the body is `null` then we simply
do nothing, otherwise we need to process the body further. First we encrypt the new token, then we add it to the
response as a cookie. We also set the `authToken` variable to the new token so we can use it in the next step.

## Refreshing the user's data [​](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token/#refreshing-the-users-data "Direct link to Refreshing the user's data")

The last step that we want to add to this route is to refresh the user's data. Note that you could skip the refreshing
of the token here for this, however refreshing of data will fail with an expired token and you need to provide a way to
refresh the token anyway which is why we do it all on this route. If you prefer to do these steps on a separate route
then you can do so and you'll need to handle invalid responses yourself.

To refresh the user's data you can call the [`auth.fetchData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/Auth#fetchdata) function. This will return the [`LoginData`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/interfaces/LoginData), the same
way it was returned when the user first logged in. You can then use this data to update the user's data in your
frontend's storage.

- CommonJS
- ESM
- TypeScript

```typescript
const { HttpCodes, Route } = require("@sapphire/plugin-api");

class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh. Insert the code from the examples above here.

    // Refresh the user's data
    try {
      return response.json(await serverAuth.fetchData(authToken));
    } catch (error) {
      this.container.logger.fatal(error);
      return response.error(HttpCodes.InternalServerError);
    }
  }
}
module.exports = {
  RefreshRoute,
};
```

```typescript
import { HttpCodes, Route } from "@sapphire/plugin-api";

export class RefreshRoute extends Route {
  async run(request, response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh. Insert the code from the examples above here.

    // Refresh the user's data
    try {
      return response.json(await serverAuth.fetchData(authToken));
    } catch (error) {
      this.container.logger.fatal(error);
      return response.error(HttpCodes.InternalServerError);
    }
  }
}
```

```typescript
import { fetch, FetchResultTypes } from "@sapphire/fetch";
import {
  HttpCodes,
  methods,
  MimeTypes,
  Route,
  type ApiRequest,
  type ApiResponse,
} from "@sapphire/plugin-api";
import { Time } from "@sapphire/time-utilities";
import { OAuth2Routes, type RESTPostOAuth2AccessTokenResult } from "discord.js";
import { stringify } from "node:querystring";

export class RefreshRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    if (!request.auth) return response.error(HttpCodes.Unauthorized);

    const requestAuth = request.auth;
    const serverAuth = this.container.server.auth!;

    let authToken = requestAuth.token;

    // If the token expires in a day, refresh. Insert the code from the examples above here.

    // Refresh the user's data
    try {
      return response.json(await serverAuth.fetchData(authToken));
    } catch (error) {
      this.container.logger.fatal(error);
      return response.error(HttpCodes.InternalServerError);
    }
  }
}
```

With the refreshed data fetched we return it as JSON response to the user. Because we also set the new cookie in the
earlier code, the new token is also sent to the user and stored on the frontend side. Your frontend now knows all the
latest data of the user, and can refresh the UI accordingly.

Congratulations! You should now have a functioning dashboard that can refresh the user's data and token.

- [Implementing the refresh route](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token/#implementing-the-refresh-route)
- [Refreshing the user's data](https://sapphirejs.dev/docs/Guide/plugins/API/oauth2-refresh-token/#refreshing-the-users-data)
