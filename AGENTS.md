# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-17
**Commit:** eb96956
**Branch:** main

## OVERVIEW

Discord Bot Starter template. TypeScript + ESM + Sapphire framework. Minimalist skeleton for slash command bots.

## STRUCTURE

```
.
├── src/
│   ├── index.ts          # Entry point - SapphireClient bootstrap
│   ├── commands/         # Slash commands (Command class extensions)
│   └── listeners/        # Event listeners (Listener class extensions)
├── external-references/  # SapphireJS documentation (local copy)
├── .github/workflows/    # CI: lint, typecheck, docker build
└── lefthook.yaml         # Pre-commit: install, tsc, prettier, eslint
```

## WHERE TO LOOK

| Task                 | Location                                        | Notes                                                                      |
| -------------------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| Add slash command    | `src/commands/`                                 | Extend `Command`, implement `registerApplicationCommands` + `chatInputRun` |
| Add event listener   | `src/listeners/`                                | Extend `Listener<Events.X>`, implement `run`                               |
| Modify client config | `src/index.ts`                                  | `SapphireClient` options, intents                                          |
| CI/Build config      | `.github/workflows/build.yaml`                  | Lint, typecheck, docker smoke test                                         |
| Sapphire docs        | `external-references/sapphirejs-docs-markdown/` | Start at `General_Welcome.md`                                              |

## CONVENTIONS

- **Runtime**: `jiti` executes TypeScript directly (no build step, `noEmit: true` in tsconfig)
- **Package manager**: pnpm only (`pnpm install`, `pnpm start`)
- **ESM**: `"type": "module"` in package.json, use `import.meta.dirname`
- **Class-based pieces**: Commands/Listeners extend Sapphire base classes
- **File naming**: lowercase with dashes (e.g., `ready.ts`, `echo.ts`)
- **Exports**: Named exports for piece classes (`export class XCommand extends Command`)

## ANTI-PATTERNS

- **DO NOT** customize `languages` folder name when using i18next plugin
- **DO NOT** set global preconditions with higher priority than piece-enabled checks
- **DO NOT** use deprecated `NonNullObject` / `AnyObject` from `@sapphire/utilities`
- **AVOID** non-ASCII filenames (cross-platform issues)
- **Listeners use `run`**, not `messageRun` (commands distinction)

## UNIQUE STYLES

- **Heavy pre-commit**: `lefthook` runs `pnpm install` + `tsc` on every commit
- **No test suite**: Quality via ESLint strict + Prettier + TypeScript
- **Docker via wget**: Manual pnpm install (not corepack)
- **ESLint**: `strictTypeChecked` + `stylisticTypeChecked` configs
- **Prettier**: Auto-organizes imports via `prettier-plugin-organize-imports`

## COMMANDS

```bash
# Development
pnpm install           # Install dependencies
pnpm start             # Run bot (requires DISCORD_TOKEN env var)

# Quality
pnpm tsc               # Type check
pnpm eslint            # Lint
pnpm prettier --check . # Format check

# Docker
docker build -t discord-bot .
docker run -dt -e DISCORD_TOKEN=$DISCORD_TOKEN discord-bot
```

## NOTES

- Bot requires `DISCORD_TOKEN` environment variable
- Default intents: `Guilds` only
- `loadMessageCommandListeners: true` enabled for message commands
- External references folder contains full Sapphire documentation for offline reference

---

## AI AGENT CONFIGURATION

### Context7 Library IDs

Use these library IDs with the `context7_query-docs` tool for up-to-date documentation:

| Library            | Context7 ID                | Description                        |
| ------------------ | -------------------------- | ---------------------------------- |
| Sapphire Framework | `/websites/sapphirejs_dev` | Main Sapphire docs (3755 snippets) |
| Sapphire Plugins   | `/sapphiredev/plugins`     | Official Sapphire plugins          |
| Sapphire Utilities | `/sapphiredev/utilities`   | Utility functions                  |
| Discord.js         | `/websites/discord_js`     | discord.js API reference           |
| Discord.js Guide   | `/discordjs/guide`         | Comprehensive discord.js guide     |

**Usage Example:**

```typescript
// Query Sapphire docs
context7_query -
  docs({
    libraryId: "/websites/sapphirejs_dev",
    query: "slash command chatInputRun registerApplicationCommands",
  });

// Query Discord.js docs
context7_query -
  docs({
    libraryId: "/discordjs/guide",
    query: "embeds buttons select menus collectors",
  });
```

### Installed Skills

| Skill              | Purpose                     | Trigger Phrases                                               |
| ------------------ | --------------------------- | ------------------------------------------------------------- |
| `sapphire-expert`  | Sapphire framework patterns | "create command", "slash command", "precondition", "listener" |
| `discord-features` | Common bot features         | "poll", "reminder", "trivia", "role menu", "ticket system"    |

### MCP Servers Available

| Server                    | Purpose              | Tools                                    |
| ------------------------- | -------------------- | ---------------------------------------- |
| `postgres-context-server` | Database queries     | `pg-schema`, `query`                     |
| `context7`                | Documentation lookup | `resolve-library-id`, `query-docs`       |
| `exa-search`              | Web search           | `web_search_exa`, `get_code_context_exa` |

### Bot Configuration

When implementing features that require configuration, add to a config file or environment:

```typescript
// Recommended config structure
interface BotConfig {
  owners: string[]; // Discord user IDs with owner access
  guildId?: string; // Main guild ID for dev commands
  welcomeChannelId?: string; // Channel for welcome messages
  leaveChannelId?: string; // Channel for leave messages
  logChannelId?: string; // Channel for audit logs
  supportRoleId?: string; // Role for ticket support
  selfAssignRoles: string[]; // Roles users can self-assign
}
```

### Environment Variables

```bash
DISCORD_TOKEN=your_bot_token
# Optional for database
DATABASE_URL=postgresql://user:pass@host:5432/db
# Optional for webhook features
WEBHOOK_SECRET=your_secret
```

### Project Memory Files

Located in `.omo/memory/`:

| File                      | Purpose                                                                     |
| ------------------------- | --------------------------------------------------------------------------- |
| `discord-bot-config.md`   | Bot configuration template, setup checklist, container integration          |
| `agent-feedback-guide.md` | How to provide effective feedback to improve agent performance              |
| `skill-usage-patterns.md` | Patterns and examples for using sapphire-expert and discord-features skills |

### Database Schema

A recommended database schema for Discord bot features is available at `database/schema.sql`. This includes tables for:

- `guild_config` - Server-specific settings
- `reminders` - User reminder system
- `polls` - Poll voting system
- `self_assign_roles` - Self-assignable roles configuration
- `tickets` - Support ticket system
- `warnings` - User moderation warnings
- `user_points` - Economy/points for games
- `scheduled_tasks` - Task scheduling
- `webhooks` - Webhook configurations

---

## AI-ASSISTED DEVELOPMENT

### Preferred AI Harness

This project is configured for **OpenCode** with the **oh-my-opencode** extension. This combination provides:

- **Sisyphus**: Primary orchestrator agent that delegates to specialists
- **Specialist Agents**: Domain-specific agents for different tasks
- **Skills**: Reusable knowledge modules that can be loaded into agents
- **MCP Tools**: Model Context Protocol servers for extended capabilities

### How to Leverage Agents

#### 1. Using Skills

Skills are loaded automatically when trigger phrases are detected. Explicitly load skills for targeted tasks:

```
# Request Sapphire expertise
"Using sapphire-expert skill, create a ban command with owner-only precondition"

# Request feature implementation
"Using discord-features skill, add a poll system with button voting"
```

#### 2. Available Skills

| Skill              | Best For                                  | Example Request                                        |
| ------------------ | ----------------------------------------- | ------------------------------------------------------ |
| `sapphire-expert`  | Framework patterns, commands, listeners   | "Create a slash command with cooldown and permissions" |
| `discord-features` | Complete features (games, polls, tickets) | "Add a trivia game with scoring"                       |

#### 3. Agent Categories

When delegating tasks, agents use these categories:

| Category             | Use Case                                      |
| -------------------- | --------------------------------------------- |
| `quick`              | Single file changes, typo fixes               |
| `visual-engineering` | UI/UX, embeds, component styling              |
| `deep`               | Complex features requiring research           |
| `ultrabrain`         | Hard logic problems                           |
| `artistry`           | Creative solutions, unconventional approaches |

#### 4. Workflow Pattern

```
1. State your goal clearly
2. Mention relevant skills if known
3. Let Sisyphus delegate to specialists
4. Review and provide feedback
5. Iterate as needed
```

### Effective Prompting

**Good prompts** (specific, actionable):

- "Create a /remind command that lets users set reminders up to 1 week in advance"
- "Add a precondition that checks if the user has the Moderator role"
- "Implement a ticket system with close, claim, and transcript features"

**Avoid** (vague, unclear):

- "Add some commands"
- "Make the bot better"
- "Fix stuff"

### Querying Documentation

Use Context7 for up-to-date library documentation:

```
# Via tool call
context7_query-docs({
  libraryId: "/websites/sapphirejs_dev",
  query: "subcommand plugin chatInputRun patterns"
})

# Natural language request
"Look up how to use the Sapphire subcommands plugin"
```

---

## AGENT FEEDBACK & IMPROVEMENT

### Why Feedback Matters

The installed skills (`sapphire-expert`, `discord-features`) are living resources. Your feedback helps:

1. **Harden patterns** - Catch edge cases and bugs
2. **Improve templates** - Add missing features or better defaults
3. **Fix anti-patterns** - Identify and correct problematic suggestions
4. **Expand coverage** - Add new feature templates

### How to Provide Feedback

#### During Development

When an agent produces suboptimal code:

```
"The command you created doesn't follow our naming convention.
 Commands should be lowercase with dashes, e.g., 'role-assign' not 'roleAssign'"
```

The agent will note this and adjust for future requests.

#### Skill Improvement Requests

To improve a skill directly:

```
"The sapphire-expert skill should mention that we use
 @sapphire/plugin-subcommands for all config commands.
 Can you update the skill to include this pattern?"
```

#### Reporting Issues

If an agent suggests anti-patterns:

```
"The discord-features skill suggested using message reactions for polls,
 but we prefer button-based voting. Please update the skill to
 prefer interaction components over reactions."
```

### Feedback Categories

| Category                | Example                              |
| ----------------------- | ------------------------------------ |
| **Pattern correction**  | "We don't use that approach anymore" |
| **Missing feature**     | "Add a template for X"               |
| **Edge case**           | "This doesn't handle Y scenario"     |
| **Convention mismatch** | "We use different naming for Z"      |
| **Performance**         | "This approach doesn't scale"        |

### Skill File Locations

Skills are stored in `~/.codex/skills/`:

```
~/.codex/skills/
├── sapphire-expert/
│   └── SKILL.md
└── discord-features/
    └── SKILL.md
```

To manually edit a skill, open the SKILL.md file and make changes. Skills are Markdown files with YAML frontmatter.

### Testing Skill Changes

After modifying a skill:

1. Restart your AI tool to reload skills
2. Test with a relevant request
3. Verify the improved behavior
4. Iterate as needed

---

## AGENT BEST PRACTICES

### For AI Agents

1. **Always check AGENTS.md first** - This file contains project-specific conventions
2. **Use the installed skills** - Load `sapphire-expert` for framework tasks, `discord-features` for features
3. **Follow file naming conventions** - lowercase-with-dashes.ts
4. **Match existing patterns** - Look at existing commands before creating new ones
5. **Verify with LSP diagnostics** - Run type checking after edits

### For Human Developers

1. **Be specific in requests** - Clear requirements lead to better results
2. **Review generated code** - Always verify agent output before committing
3. **Provide feedback** - Help improve skills for future use
4. **Keep AGENTS.md updated** - Add new patterns and conventions as they emerge
5. **Use memory files** - Store configuration templates in `.omo/memory/`
