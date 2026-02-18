[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/variables/version/#__docusaurus_skipToContent_fallback)

> `const` **version**: `string` = `'[VI]{{inject}}[/VI]'`

Defined in: [projects/framework/src/index.ts:154](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/index.ts#L154)

The [@sapphire/framework](https://github.com/sapphiredev/framework) version that you are currently using.
An example use of this is showing it of in a bot information command.

Note to Sapphire developers: This needs to explicitly be `string` so it is not typed as the string that gets replaced by esbuild
