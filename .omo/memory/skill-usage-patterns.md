# Skill Usage Patterns

## sapphire-expert Skill

### When to Use

- Creating slash commands
- Implementing event listeners
- Adding preconditions
- Building interaction handlers
- Using Sapphire plugins
- Container configuration

### Example Requests

```
# Basic command
"Create a /ping command that responds with bot latency"

# Command with options
"Create a /ban command with user and reason options, owner-only precondition"

# Listener
"Add a listener for when users join the server that sends a welcome message"

# Precondition
"Create a precondition that checks if user has the Moderator role"

# Interaction handler
"Create a button handler for poll voting"
```

### What the Skill Provides

- TypeScript patterns matching project conventions
- ESM module syntax
- Class-based piece structure
- Container access patterns
- Error handling approaches
- Plugin integration examples

## discord-features Skill

### When to Use

- Adding complete features (not just patterns)
- Games and fun commands
- User interaction systems
- Moderation utilities
- Scheduled tasks

### Example Requests

```
# Poll system
"Add a poll command with button voting that shows results"

# Reminder
"Create a reminder command using Sapphire's duration parser"

# Game
"Add a trivia game with multiple choice and scoring"

# Role management
"Create a self-assignable role menu with select dropdown"

# Ticket system
"Implement a ticket system with create, close, and claim"
```

### What the Skill Provides

- Complete feature implementations
- Database schema suggestions
- Interaction component patterns
- State management approaches
- Error handling for user input

## Combining Skills

For complex features, both skills can be used together:

```
"Using sapphire-expert and discord-features skills:
 Create a /config command with subcommands for:
 - welcome-channel (set/get)
 - leave-channel (set/get)
 - auto-role (set/get/reset)
 Include owner-only precondition for set operations"
```

## Skill Loading

Skills are loaded automatically when trigger phrases are detected, but can be explicitly requested:

```
# Explicit loading
"Load the sapphire-expert skill and create a..."

# Implicit (auto-detected)
"Create a slash command that..."  # Triggers sapphire-expert
"Add a poll system..."            # Triggers discord-features
```

## Tips for Best Results

1. **Be specific about requirements** - Include edge cases, error handling needs
2. **Mention existing patterns** - "Follow the pattern in echo.ts"
3. **Specify TypeScript types** - "Use proper types from discord.js"
4. **Request ephemeral vs public** - "Response should be ephemeral"
5. **Include preconditions** - "Add cooldown of 30 seconds"
