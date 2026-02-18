# Agent Feedback Guide

## Purpose

This guide helps developers provide effective feedback to AI agents to improve their performance on this Discord bot project.

## Feedback Types

### 1. Pattern Corrections

When an agent uses outdated or incorrect patterns:

```
"The command you created uses messageRun, but our listeners use run().
 Please update to follow our convention."
```

### 2. Missing Features

When an agent's solution lacks necessary functionality:

```
"The poll command needs to handle ties and show results after closing.
 Can you add those features?"
```

### 3. Convention Mismatches

When output doesn't match project conventions:

```
"File naming should be lowercase-with-dashes.ts, not camelCase.ts"
"Imports should be organized: external → framework → local"
```

### 4. Edge Cases

When a solution doesn't handle edge cases:

```
"The reminder command doesn't validate the duration is within 1 week.
 Add validation and a helpful error message."
```

### 5. Anti-Patterns

When an agent suggests problematic approaches:

```
"Using message reactions for polls can have issues with rate limits.
 We prefer button-based voting instead."
```

## Skill Improvement Process

### Step 1: Identify the Issue

Be specific about what's wrong and why:

- "The skill suggested X, but..."
- "This pattern doesn't work because..."
- "Our project uses Y instead of Z because..."

### Step 2: Request Skill Update

```
"Please update the sapphire-expert skill to:
 1. Mention that we use @sapphire/plugin-subcommands for config commands
 2. Include an example of the subcommand pattern
 3. Link to the subcommands documentation"
```

### Step 3: Verify Changes

After skill updates:

1. Restart your AI tool
2. Test with a similar request
3. Confirm improved behavior

## Common Feedback Templates

### For Commands

```
"The [command name] command needs:
- [ ] Proper error handling for [scenario]
- [ ] Ephemeral responses for [sensitive data]
- [ ] Cooldown to prevent spam
- [ ] Preconditions for [permission level]"
```

### For Listeners

```
"The [event] listener should:
- [ ] Use container.logger instead of console.log
- [ ] Handle null/undefined cases for [field]
- [ ] Check channel permissions before sending"
```

### For Interaction Handlers

```
"The [type] handler needs:
- [ ] Custom ID validation in parse()
- [ ] Timeout handling for long operations
- [ ] Proper typing with ParseResult<T>"
```

## Quality Checklist

Before accepting agent output, verify:

- [ ] Follows file naming conventions (lowercase-with-dashes)
- [ ] Uses project imports correctly
- [ ] Handles errors gracefully
- [ ] Uses appropriate response types (ephemeral vs public)
- [ ] Includes necessary preconditions
- [ ] Has proper TypeScript types
- [ ] Passes lint and type checks
