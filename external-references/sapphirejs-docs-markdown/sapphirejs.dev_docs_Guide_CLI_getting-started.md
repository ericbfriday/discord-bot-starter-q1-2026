[Skip to main content](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#__docusaurus_skipToContent_fallback)

On this page

## Installation [​](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#installation "Direct link to Installation")

Sapphire CLI is a utility that helps you create and manage Sapphire projects.

To install `@sapphire/cli`, you can use one of the following methods:

- With npm or pnpm, use the global flag:

```bash
npm install -g @sapphire/cli
```

or

```bash
pnpm add -g @sapphire/cli
```

- With yarn (v2 and beyond), use the [dlx command ↗️](https://yarnpkg.com/cli/dlx) (note that this will immediately execute the CLI, not install
  it globally for use later. Yarn no longer has global dependencies.):

```bash
yarn dlx @sapphire/cli
```

- If you're using [Volta ↗️](https://volta.sh/) to manage your NodeJS versions, you can install the CLI tools with the following
  command:

```bash
volta install @sapphire/cli
```

info

After setting up a project we also recommend adding the CLI as a development dependency, so you and all other
contributors to your project can use the CLI for that particular project.

danger

CLI requires Node 18 or higher.

Setting up a new project

## Creating a bot [​](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#creating-a-bot "Direct link to Creating a bot")

Lets start creating a new project. The first thing to run is the `new` command:

```bash
sapphire new
```

After running `sapphire new` you will be prompted with several questions that require your attention and that we will
use to generate your project.

First of all, we will need to know the name of your project. This will be used as the folder name in which we'll setup
the project. This will default to `my-sapphire-bot`.

```bash
sapphire new
? What's the name of your project? » my-sapphire-bot
```

Next you will need to choose which programming language you want to use. Currently we support JavaScript and TypeScript.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
? Choose a language for your project » - Use arrow-keys. Return to submit.
>   TypeScript (Recommended)
    JavaScript
```

After choosing the programming language we have several templates from which you can choose. We will go with the
**default template** for this guide.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
? Choose a template for your project » - Use arrow-keys. Return to submit.
>   Default template (Recommended)
    with Docker
    with tsup
    with SWC
```

The following step is to choose the markup language to use for your config file, we support JSON and YAML. For this
guide we will choose **YAML**.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
√ Choose a template for your project » Default template (Recommended)
? What format do you want your config file to be in? » - Use arrow-keys. Return to submit.
    JSON
>   YAML
```

The next step is to choose the package manager to use. We support `npm` and `yarn`. For this guide we will choose
**Yarn**.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
√ Choose a template for your project » Default template (Recommended)
√ What format do you want your config file to be in? » YAML
? What package manager do you want to use? » - Use arrow-keys. Return to submit.
>   Yarn (Recommended)
    npm
```

When selecting Yarn you can choose to use Yarn v3 (the latest version), or stick to Yarn v1. For this guide we will
choose Yarn v3.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
√ Choose a template for your project » Default template (Recommended)
√ What format do you want your config file to be in? » YAML
√ What package manager do you want to use? » Yarn (Recommended)
? Do you want to use Yarn v3? » (y/N)
```

Lastly, if you want to initialize a git repository in your project, type `y` when asked, then press enter to finish up.
If you don't want a git repository then you can just hit enter to finish.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
√ Choose a template for your project » Default template (Recommended)
√ What format do you want your config file to be in? » YAML
√ What package manager do you want to use? » Yarn (Recommended)
√ Do you want to use Yarn v3? ... yes
? Do you want to create a git repository for this project? » (y/N)
```

Now wait for the CLI to create your project and install the dependencies. This should take ~2 minutes, but it may be
more depending on your hardware as well as on your internet speed.

```bash
sapphire new
√ What's the name of your project? ... my-sapphire-bot
√ Choose a language for your project » TypeScript (Recommended)
√ Choose a template for your project » Default template (Recommended)
√ What format do you want your config file to be in? » YAML
√ What package manager do you want to use? » Yarn (Recommended)
√ Do you want to use Yarn v3? ... yes
√ Do you want to create a git repository for this project? ... yes
✔ Cloning the repository
✔ Setting up the project
✔ Initializing git repo
✔ Installing Yarn v3
✔ Installing Yarn Typescript Plugin
✔ Installing dependencies using Yarn
Done!
```

Congratulations! You created a bot using Sapphire CLI. You can consult the README to see what you need to do before
running your bot.

- Bash
- Powershell
- CMD

```bash
cat my-sapphire-bot/README.md
# TypeScript Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript
...
```

```powershell
Get-Content .\my-sapphire-bot\README.md
# TypeScript Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript
...
```

```batch
type my-sapphire-bot\README.md
# TypeScript Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework][sapphire] written in TypeScript
...
```

Existing project

## Using Sapphire CLI on an existing project [​](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#using-sapphire-cli-on-an-existing-project "Direct link to Using Sapphire CLI on an existing project")

Lets start initializing Sapphire CLI in your project. The first thing to run is the `init` command:

```bash
sapphire init
```

The following step is to choose the markup language to use for your config file, we support JSON and YAML. For this
guide we will choose **YAML**.

```bash
sapphire init
? What format do you want your config file to be in? » - Use arrow-keys. Return to submit.
    JSON
>   YAML
```

Next you will need to choose which programming language you are using in your project. Currently we support JavaScript
and TypeScript.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
? Choose the language used in your project » - Use arrow-keys. Return to submit.
>   TypeScript
    JavaScript
```

After choosing the programming language we need to know in which folder your bot's entry point is located. This will
default to `src`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
? Your base directory » src
```

Then we need to know in which folder you store your commands, without including the base as specified in the previous
step. This will default to `commands`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
? Where do you store your commands? (do not include the base) » commands
```

We also need to know in which folder you store your listeners, without including the base as specified before. This will
default to `listeners`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
? Where do you store your listeners? (do not include the base) » listeners
```

Then we need to know in which folder you store your arguments, without including the base as specified before. This will
default to `arguments`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
? Where do you store your arguments? (do not include the base) » arguments
```

Then we need to know in which folder you store your preconditions, without including the base as specified before. This
will default to `preconditions`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
√ Where do you store your arguments? (do not include the base) ... arguments
? Where do you store your preconditions? (do not include the base) » preconditions
```

And lastly please specify in which folder you store your interaction-handlers, without including the base as specified
before. This will default to `interaction-handlers`.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
√ Where do you store your arguments? (do not include the base) ... arguments
√ Where do you store your preconditions? (do not include the base) » preconditions
? Where do you store your interaction-handlers? (do not include the base) » interaction-handlers
```

The next to last step is to choose if you use the api plugin, type `y` and enter if you use it or go use it. If you
don't use it or aren't going to use it, just enter.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
√ Where do you store your arguments? (do not include the base) ... arguments
√ Where do you store your preconditions? (do not include the base) » preconditions
√ Where do you store your interaction-handlers? (do not include the base) » interaction-handlers
? Would you use the api plugin? » (y/N)
```

The last step is to choose if you want to enable custom file (piece) templates, type `y` and enter if you want to enable
it. If you don't want to enable it, just enter.

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
√ Where do you store your arguments? (do not include the base) ... arguments
√ Where do you store your preconditions? (do not include the base) ... preconditions
? Do you want to enable custom file templates? » (y/N)
```

Done! You can now start using the Sapphire CLI in your project. 🎉

```bash
sapphire init
√ What format do you want your config file to be in? » YAML
√ Choose the language used in your project » TypeScript
√ Your base directory ... src
√ Where do you store your commands? (do not include the base) ... commands
√ Where do you store your listeners? (do not include the base) ... listeners
√ Where do you store your arguments? (do not include the base) ... arguments
√ Where do you store your preconditions? (do not include the base) ... preconditions
√ Do you want to enable custom file templates? ... no
```

- [Installation](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#installation)
- [Creating a bot](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#creating-a-bot)
- [Using Sapphire CLI on an existing project](https://sapphirejs.dev/docs/Guide/CLI/getting-started/#using-sapphire-cli-on-an-existing-project)
