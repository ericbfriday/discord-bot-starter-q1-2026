[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/SapphirePrefix/#__docusaurus_skipToContent_fallback)

> **SapphirePrefix** = `string` \| readonly `string`\[\] \| `null`

Defined in: [projects/framework/src/lib/SapphireClient.ts:34](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/SapphireClient.ts#L34)

A valid prefix in Sapphire.

- `string`: a single prefix, e.g. `'!'`.
- `string[]`: an array of prefixes, e.g. `['!', '.']`.
- `null`: disabled prefix, locks the bot's command usage to mentions only.
