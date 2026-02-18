[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#__docusaurus_skipToContent_fallback)

On this page

Sapphire offers a custom [`ApiResponse`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse) with useful methods for returning data. The following is a code example of how
to return JSON data with a status of 200 (OK):

- CommonJS
- ESM
- TypeScript

```typescript
const { Route } = require("@sapphire/plugin-api");

class MyRoute extends Route {
  async run(request, response) {
    return response.json({
      myBestFriend: "Sapphire",
    });
  }
}
module.exports = {
  MyRoute,
};
```

```typescript
import { Route } from "@sapphire/plugin-api";

export class MyRoute extends Route {
  async run(request, response) {
    return response.json({
      myBestFriend: "Sapphire",
    });
  }
}
```

```typescript
import { Route } from "@sapphire/plugin-api";

export class MyRoute extends Route {
  public async run(request: Route.Request, response: Route.Response) {
    return response.json({
      myBestFriend: "Sapphire",
    });
  }
}
```

The following methods are available on the [`ApiResponse`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse) class:

- ## [`badRequest`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#badrequest) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#badrequest "Direct link to badrequest")

Sets the status code to 400 (Bad Request) and returns the given data. The structure of the response will be
`{ error: data }` wherein `data` is whatever you provided to the function, or `Bad Request` if none was provided.

- ## [`conflict`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#conflict) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#conflict "Direct link to conflict")

Sets the status code to 409 (Conflict) and returns the given data. The structure of the response will be
`{ error: data }` wherein `data` is whatever you provided to the function, or `Conflict` if none was provided.

- ## [`created`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#created) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#created "Direct link to created")

Sets the status code to 201 (Created) and returns the given data. The structure of the response will be `{ data }`. If
the data is a string then content type will be set to `text/plain`, otherwise it will be set to `application/json`.

- ## [`forbidden`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#forbidden) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#forbidden "Direct link to forbidden")

Sets the status code to 403 (Forbidden) and returns the given data. The structure of the response will be
`{ error: data }` wherein `data` is whatever you provided to the function, or `Forbidden` if none was provided.

- ## [`json`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#json) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#json "Direct link to json")

Does not set any specific status code, which means it will be set to 200 (OK) automatically by NodeJS. The structure of
the response will be `{ data }`. If the data is a string then content type will be set to `text/plain`, otherwise it
will be set to `application/json`.

- ## [`noContent`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#nocontent) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#nocontent "Direct link to nocontent")

Sets the status code to 204 (No Content) and returns the given data. The structure of the response will be `{ data }`.
If the data is a string then content type will be set to `text/plain`, otherwise it will be set to `application/json`.

- ## [`notFound`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#notfound) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#notfound "Direct link to notfound")

Sets the status code to 404 (Not Found) and returns the given data. The structure of the response will be
`{ error: data }` wherein `data` is whatever you provided to the function, or `Not Found` if none was provided.

- ## [`ok`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#ok) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#ok "Direct link to ok")

Sets the status code to 200 (OK) and returns the given data. The structure of the response will be `{ data }`. If the
data is a string then content type will be set to `text/plain`, otherwise it will be set to `application/json`.

- ## [`status`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#status) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#status "Direct link to status")

Sets a custom status code on the response, and returns the response entity for method chaining. You can use
[`HttpCodes`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/enumerations/HttpCodes) from the library to get a human-readable status code.

- ## [`text`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#text) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#text "Direct link to text")

Does not set any specific status code, which means it will be set to 200 (OK) automatically by NodeJS. The data to be
sent is set with the content type `text/plain` and has to be a raw string. Use this when data should NOT be JSON
serializable.

- ## [`unauthorized`](https://sapphirejs.dev/docs/Documentation/api-plugins/@sapphire/plugin-api/classes/ApiResponse#unauthorized) [​](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#unauthorized "Direct link to unauthorized")

Sets the status code to 401 (Unauthorized) and returns the given data. The structure of the response will be
`{ error: data }` wherein `data` is whatever you provided to the function, or `Unauthorized` if none was provided.

- [badRequest](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#badrequest)
- [conflict](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#conflict)
- [created](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#created)
- [forbidden](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#forbidden)
- [json](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#json)
- [noContent](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#nocontent)
- [notFound](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#notfound)
- [ok](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#ok)
- [status](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#status)
- [text](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#text)
- [unauthorized](https://sapphirejs.dev/docs/Guide/plugins/API/returning-data/#unauthorized)
