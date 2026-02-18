[Skip to main content](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#introduction "Direct link to Introduction")

This plugin provides an API endpoint for your bot that can be called from external services. A good exemplary use case
for this is once your bot grows to have enough configuration options that you want to offer a website to your end-users
to change those settings, and your website needs to interface with the bot for this to work.

## Installation [​](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#installation "Direct link to Installation")

- npm
- yarn
- pnpm

```bash
npm install @sapphire/plugin-api @sapphire/framework discord.js@14.x discord-api-types@0.37.x
```

```bash
yarn add @sapphire/plugin-api @sapphire/framework discord.js@14.x discord-api-types@0.37.x
```

```bash
pnpm add @sapphire/plugin-api @sapphire/framework discord.js@14.x discord-api-types@0.37.x
```

## Usage [​](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#usage "Direct link to Usage")

Start by importing the registration file in your project to use the plugin:

- CommonJS
- ESM
- TypeScript

```javascript
require("@sapphire/plugin-api/register");
```

```javascript
import "@sapphire/plugin-api/register";
```

```typescript
import "@sapphire/plugin-api/register";
```

Then, you can use the following configuration options in your SapphireClient extension class or initializer. This will
either be located in your `new SapphireClient` constructor call, or `super` in your constructor method if you use an
extension class.

```javascript
const { OAuth2Scopes } = require('discord.js');

{
  auth: {
	// The application/client ID of your bot
	// You can find this at https://discord.com/developers/applications
    id: '',
	// The client secret of your bot
	// You can find this at https://discord.com/developers/applications
    secret: '',
	// The name of the authentication cookie
    cookie: 'SAPPHIRE_AUTH',
	// The URL that users should be redirected to after a successful authentication
    redirect: '',
	// The scopes that should be given to the authentication
    scopes: [OAuth2Scopes.Identify],
	// Transformers to transform the raw data from Discord to a different structure.
    transformers: []
  },
  // The prefix for all routes, e.g. / or v1/
  prefix: '',
  // The origin header to be set on every request at 'Access-Control-Allow-Origin.
  origin: '*',
  // Any options passed to the NodeJS "net" internal server.listen function
  // See https://nodejs.org/api/net.html#net_server_listen_options_callback
  listenOptions: {
	// The port the API will listen on
    port: 4000
  }
}
```

- [Introduction](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#introduction)
- [Installation](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#installation)
- [Usage](https://sapphirejs.dev/docs/Guide/plugins/API/getting-started/#usage)
