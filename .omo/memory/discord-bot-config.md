# Discord Bot Configuration

## Bot Identity

- **Purpose**: Discord bot for trusted friend server
- **Framework**: Sapphire (@sapphire/framework)
- **Runtime**: TypeScript + ESM with jiti

## Configuration Template

When implementing bot features, use this configuration structure:

```typescript
// src/config.ts
import { GatewayIntentBits } from "discord.js";

export const config = {
  // Bot owners - Discord user IDs with full access
  owners: [
    "USER_ID_1", // Replace with actual Discord user IDs
    "USER_ID_2",
  ],

  // Main guild for development/testing
  guildId: "GUILD_ID",

  // Channel IDs
  channels: {
    welcome: "CHANNEL_ID",
    leave: "CHANNEL_ID",
    logs: "CHANNEL_ID",
    modLogs: "CHANNEL_ID",
  },

  // Role IDs
  roles: {
    support: "ROLE_ID",
    mute: "ROLE_ID",
    auto: "ROLE_ID",
    selfAssignable: [
      { id: "ROLE_ID_1", name: "Announcements", emoji: "📢" },
      { id: "ROLE_ID_2", name: "Gaming", emoji: "🎮" },
      { id: "ROLE_ID_3", name: "Movie Night", emoji: "🎬" },
    ],
  },

  // Client options
  client: {
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
    ],
  },

  // Feature flags
  features: {
    welcomeMessages: true,
    leaveMessages: true,
    logging: true,
    selfAssignRoles: true,
    tickets: true,
    reminders: true,
    polls: true,
    games: true,
  },
};

export type BotConfig = typeof config;
```

## Container Integration

Add to `src/index.ts`:

```typescript
import { container } from "@sapphire/framework";
import { config } from "./config";

declare module "@sapphire/framework" {
  interface Container {
    config: typeof config;
  }
}

// After creating client
container.config = config;
```

## Environment Variables

Required:

- `DISCORD_TOKEN` - Bot token from Discord Developer Portal

Optional:

- `DATABASE_URL` - PostgreSQL connection string
- `WEBHOOK_SECRET` - Secret for webhook verification
- `LOG_LEVEL` - Logging level (debug, info, warn, error)

## Setup Checklist

1. Create Discord application at https://discord.com/developers/applications
2. Create bot user and copy token
3. Enable required intents in Discord Developer Portal
4. Copy guild ID and channel IDs
5. Copy user IDs for owners
6. Set up database (optional)
7. Configure environment variables
8. Run `pnpm install && pnpm start`

## How to Get Discord IDs

1. Enable Developer Mode in Discord: User Settings > Advanced > Developer Mode
2. Right-click on any user, channel, role, or guild and select "Copy ID"
3. Paste the ID into the config file
