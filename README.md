# Discord Bot Starter

A minimalist template for starting a new [Discord](https://discord.com/) bot project.

This template provides a basic Discord bot project containing a sample bot application that supports slash commands. The project is written in [TypeScript](https://www.typescriptlang.org/) and utilizes the [Sapphire](https://sapphirejs.dev/) framework to help create the bot application. To simplify deployment, this template includes support for building a [Docker](https://www.docker.com/) image of the bot project.

## Key Features

- Minimal Discord bot project written in TypeScript with [ESM](https://nodejs.org/api/esm.html) support.
- Uses Sapphire as the framework for creating the Discord bot application.
- Supports building the Discord bot application as a Docker image.
- Uses [pnpm](https://pnpm.io/) as the package manager.
- Supports formatting with [Prettier](https://prettier.io/) and linting with [ESLint](https://eslint.org/).
- Fixes formatting and linting during pre-commit hooks using [Lefthook](https://lefthook.dev/).
- Preconfigured workflows for [Dependabot](https://docs.github.com/en/code-security/dependabot) and [GitHub Actions](https://github.com/features/actions).

## Quick Start

```sh
pnpm install                # Install dependencies
cp .env.example .env        # Configure environment variables (see below)
pnpm start                  # Run the bot
```

## Commands Reference

### Bot (Root)

| Command | Description |
|---|---|
| `pnpm install` | Install all dependencies |
| `pnpm start` | Run the bot via [jiti](https://github.com/nicolo-ribaudo/jiti) (TypeScript, no build step) |
| `pnpm tsc` | Type-check (`noEmit` — no output files) |
| `pnpm eslint` | Lint (workers/ excluded) |
| `pnpm eslint --fix` | Lint and auto-fix |
| `pnpm prettier --check .` | Check formatting |
| `pnpm prettier --write .` | Format and auto-fix |

### AI Proxy Worker (`workers/ai-proxy/`)

The AI proxy is a [Cloudflare Worker](https://developers.cloudflare.com/workers/) that sits between the bot and [OpenRouter](https://openrouter.ai/) via [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/). It handles authentication, per-user rate limiting, and response caching.

```sh
cd workers/ai-proxy
pnpm install                # Install worker dependencies
pnpm dev                    # Run locally via wrangler dev
pnpm deploy                 # Deploy to Cloudflare production
```

**Worker secrets** (set once, stored encrypted by Cloudflare):

```sh
cd workers/ai-proxy
npx wrangler secret put OPENROUTER_API_KEY
npx wrangler secret put WORKER_AUTH_SECRET
npx wrangler secret put CF_ACCOUNT_ID
npx wrangler secret put CF_AIG_TOKEN
```

### Docker

```sh
docker build -t discord-bot .
docker run -dt -e DISCORD_TOKEN=$DISCORD_TOKEN discord-bot
```

### Quality Gates

Run before committing (also enforced by [Lefthook](https://lefthook.dev/) pre-commit hook):

```sh
pnpm tsc && pnpm eslint
```

The pre-commit hook runs `pnpm install → pnpm tsc → prettier --write → eslint --fix` in sequence. If auto-fixes produce file changes, the commit is rejected so you can re-stage and recommit.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/) v10+ (`corepack enable pnpm`)
- A [Discord bot application](https://discord.com/developers/docs/quick-start/getting-started) with a token

### Environment Variables

Copy `.env.example` to `.env` and fill in:

| Variable | Required | Description |
|---|---|---|
| `DISCORD_TOKEN` | Yes | Bot login token |
| `AI_PROXY_URL` | For AI features | URL of the deployed CF Worker |
| `AI_PROXY_SECRET` | For AI features | Shared secret between bot and worker |

### Develop the Bot

Modify files under [`src/`](./src). The project uses [Sapphire](https://sapphirejs.dev/) on [Discord.js](https://discord.js.org/) with TypeScript ESM (via jiti — no compile step needed).

```sh
pnpm start                  # Run with hot reload via jiti
```

### Deploy

**Option 1 — Direct:** Run `pnpm start` on any machine with Node.js and the `DISCORD_TOKEN` env var set.

**Option 2 — Docker:**

```sh
docker build -t discord-bot .
docker run -dt -e DISCORD_TOKEN=$DISCORD_TOKEN discord-bot
```

**AI Proxy Worker:** Deploy separately via `cd workers/ai-proxy && pnpm deploy`. See [Worker secrets](#ai-proxy-worker-workersai-proxy) above for required secrets.

## AI-Assisted Development

This project is optimized for AI-assisted development using **OpenCode** with the **oh-my-opencode** extension. The project includes custom skills and agent configuration to accelerate Discord bot development.

### Quick Start with AI Agents

1. Install OpenCode with oh-my-opencode extension
2. Open this project in your editor
3. Ask the AI to help with tasks like:
   - "Create a /poll command with button voting"
   - "Add a reminder system using the discord-features skill"
   - "Create an owner-only precondition"

### Available Skills

| Skill              | Purpose                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `sapphire-expert`  | Sapphire framework patterns, commands, listeners, preconditions    |
| `discord-features` | Common features: polls, reminders, games, tickets, role management |

### Documentation for AI Agents

See [AGENTS.md](./AGENTS.md) for comprehensive AI agent configuration including:

- Context7 library IDs for documentation lookup
- MCP server configurations
- Project conventions and patterns
- Feedback mechanisms for improving agent performance

### Providing Feedback

When agents produce suboptimal output, provide feedback to improve future results:

```
"The command should follow our naming convention: lowercase-with-dashes"
```

This helps harden the skills and improves future suggestions. See [AGENTS.md](./AGENTS.md#agent-feedback--improvement) for detailed feedback guidance.

## External Resources

Documentation for SapphireJS is copied locally to the workspace and is located inside the external-references/ folder. The welcome/entry page for the documentation is located at [./external-references/sapphirejs-docs-markdown/sapphirejs.dev_docs_General_Welcome.md](external-references/sapphirejs-docs-markdown/sapphirejs.dev_docs_General_Welcome.md)
