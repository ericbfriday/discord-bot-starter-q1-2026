-- Discord Bot Database Schema
-- Run these migrations to set up persistent storage for bot features

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Guild-specific settings
CREATE TABLE IF NOT EXISTS guild_config (
  id TEXT PRIMARY KEY,  -- Discord guild ID
  prefix TEXT DEFAULT '!',
  welcome_channel_id TEXT,
  welcome_message TEXT,
  leave_channel_id TEXT,
  leave_message TEXT,
  log_channel_id TEXT,
  mod_log_channel_id TEXT,
  auto_role_id TEXT,
  mute_role_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reminders
CREATE TABLE IF NOT EXISTS reminders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,  -- Discord user ID
  guild_id TEXT,          -- Discord guild ID (null for DM reminders)
  channel_id TEXT,        -- Channel to send reminder in
  message TEXT NOT NULL,
  remind_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed BOOLEAN DEFAULT FALSE
);

-- Polls
CREATE TABLE IF NOT EXISTS polls (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guild_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  message_id TEXT NOT NULL,  -- Discord message ID
  question TEXT NOT NULL,
  options JSONB NOT NULL,    -- Array of option strings
  votes JSONB DEFAULT '{}',  -- Map of user_id -> option_index
  created_by TEXT NOT NULL,  -- Discord user ID
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ends_at TIMESTAMP WITH TIME ZONE,
  closed BOOLEAN DEFAULT FALSE
);

-- Self-assignable roles configuration
CREATE TABLE IF NOT EXISTS self_assign_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guild_id TEXT NOT NULL,
  role_id TEXT NOT NULL,     -- Discord role ID
  name TEXT NOT NULL,
  description TEXT,
  emoji TEXT,
  position INTEGER DEFAULT 0,
  UNIQUE(guild_id, role_id)
);

-- Tickets
CREATE TABLE IF NOT EXISTS tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guild_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  creator_id TEXT NOT NULL,  -- Discord user ID
  reason TEXT,
  status TEXT DEFAULT 'open',  -- open, closed, archived
  assigned_to TEXT,            -- Discord user ID of support agent
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  closed_at TIMESTAMP WITH TIME ZONE,
  closed_by TEXT               -- Discord user ID
);

-- User warnings (for moderation)
CREATE TABLE IF NOT EXISTS warnings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  moderator_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT TRUE
);

-- User economy/points (for games and engagement)
CREATE TABLE IF NOT EXISTS user_points (
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  last_daily TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (guild_id, user_id)
);

-- Scheduled tasks (if not using @sapphire/plugin-scheduled-tasks with Redis)
CREATE TABLE IF NOT EXISTS scheduled_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_name TEXT NOT NULL,
  payload JSONB NOT NULL,
  run_at TIMESTAMP WITH TIME ZONE NOT NULL,
  recurring BOOLEAN DEFAULT FALSE,
  interval_seconds INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed BOOLEAN DEFAULT FALSE
);

-- Webhook configurations
CREATE TABLE IF NOT EXISTS webhooks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  guild_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  webhook_id TEXT NOT NULL,   -- Discord webhook ID
  webhook_url TEXT NOT NULL,  -- Store securely!
  name TEXT,
  created_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_reminders_user ON reminders(user_id);
CREATE INDEX IF NOT EXISTS idx_reminders_time ON reminders(remind_at) WHERE NOT completed;
CREATE INDEX IF NOT EXISTS idx_polls_message ON polls(message_id);
CREATE INDEX IF NOT EXISTS idx_tickets_guild ON tickets(guild_id);
CREATE INDEX IF NOT EXISTS idx_warnings_user ON warnings(guild_id, user_id);
CREATE INDEX IF NOT EXISTS idx_scheduled_tasks_run_at ON scheduled_tasks(run_at) WHERE NOT completed;
