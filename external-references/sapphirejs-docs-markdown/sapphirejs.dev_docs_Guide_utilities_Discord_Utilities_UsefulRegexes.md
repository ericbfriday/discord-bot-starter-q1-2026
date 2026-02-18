[Skip to main content](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#__docusaurus_skipToContent_fallback)

On this page

## Introduction [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#introduction "Direct link to Introduction")

Sapphire provides a lot of Regexes that you can use in your code

note

If you don't know what a Regex is check the
[Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## Regex Cheatsheet [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#regex-cheatsheet "Direct link to Regex Cheatsheet")

Regex is a topic that's often not easy to understand so here is a cheat sheet to help you understand it. We list many of
the common RegEx tokens available to create regular expressions.

- `^` Matches the beginning of the string, or the beginning of a line if the multiline flag (/m) is used
- `$` Matches the end of the string, or the end of a line if the multiline flag (/m) is used
- `\b` Matches the empty string, or a word boundary
- `\B` Matches the empty string, or a non-word boundary
- `\d` Matches any decimal digit
- `\D` Matches any non-digit
- `\f` Matches a form feed
- `\n` Matches a newline
- `\r` Matches a carriage return
- `\s` Matches any whitespace character
- `\S` Matches any non-whitespace character
- `\t` Matches a tab
- `\v` Matches a vertical tab
- `.` Matches any character except newline
- `\` Matches a backslash
- `[]` Matches any character in the brackets
- `[^]` Matches any character not in the brackets
- `\w` Matches any word character
- `\W` Matches any non-word character
- `?` Matches zero or one occurrences of the preceding expression
- `*` Matches zero or more occurrences of the preceding expression
- `+` Matches one or more occurrences of the preceding expression
- `{n}` Matches exactly n occurrences of the preceding expression
- `{n,}` Matches n or more occurrences of the preceding expression
- `{n,m}` Matches at least n and at most m occurrences of the preceding expression

## Usage [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#usage "Direct link to Usage")

To use these useful regexes you need to install @sapphire/discord-utilities first

- npm
- yarn
- pnpm

```bash
npm install @sapphire/discord-utilities
```

```bash
yarn add @sapphire/discord-utilities
```

```bash
pnpm add @sapphire/discord-utilities
```

### Channel Mention Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#channel-mention-regex "Direct link to Channel Mention Regex")

This regex will match any mention of a channel and return the id of the channel

`Raw`: `/^<#(?<id>\d{17,20})>$/`

### Channel Message Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#channel-message-regex "Direct link to Channel Message Regex")

This regex can capture the channel and message IDs in a channelId-messageId pattern This pattern can be found when you
hold Shift and hover over a message, and click the "ID" button

`Raw`: `/^(?<channelId>\d{17,19})-(?<messageId>\d{17,20})$/`

### Discord Hostname Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#discord-hostname-regex "Direct link to Discord Hostname Regex")

This regex captures every known discord hostname link

`Raw`:
`/(?<subdomain>\w+)\.?(?<hostname>dis(?:cord)?(?:app|merch|status)?)\.(?<tld>com|g(?:d|g|ift)|(?:de(?:sign|v))|media|new|store|net)/i`

### Discord Invite Link Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#discord-invite-link-regex "Direct link to Discord Invite Link Regex")

This regex captures discord invite links

`Raw`: `/(?:^|\b)discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/(?<code>[\w-]{2,255})(?:$|\b)/gi`

### Emoji Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#emoji-regex "Direct link to Emoji Regex")

This regex captures every animated and non-animated emoji's id

`Raw`: `/^(?:<(?<animated>a)?:(?<name>\w{2,32}):)?(?<id>\d{17,21})>?$/`

### Formatted Custom Emoji Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-regex "Direct link to Formatted Custom Emoji Regex")

This regex matches any animated or non-animated custom Discord emoji. Unlike [EmojiRegex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#emoji-regex) It can be a
substring of a larger string.

`Raw`: `/<a?:\w{2,32}:\d{17,20}>/`

### Formatted Custom Emoji With Groups [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-with-groups "Direct link to Formatted Custom Emoji With Groups")

Regex that can capture any animated or non-animated custom Discord emoji. Similar to
[FormattedCustomEmoji](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-regex) and unlike EmojiRegex can also be a substring of a larger string.

`Raw`: `/(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/`

### HTTP Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#http-regex "Direct link to HTTP Regex")

This regex matches any url starting with `http` or `https`

`Raw`: `/^https?:\/\//`

### Message Link Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#message-link-regex "Direct link to Message Link Regex")

This regex can capture the Guild, Channel, and Message ID based on a shareable Discord message link.

`Raw`:
`/^(?:https:\/\/)?(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?<guildId>(?:\d{17,20}|@me))\/(?<channelId>\d{17,20})\/(?<messageId>\d{17,20})$/`

### Parsed CustomEmoji Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#parsed-customemoji-regex "Direct link to Parsed CustomEmoji Regex")

This regex matches any animated or non-animated custom Discord emoji without the wrapping `<...>` symbols. This means
that a string that matches this regex can directly be send inside a Discord message. Other than this difference it is
similar to [FormattedCustomEmoji](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-regex).

`Raw`: `/a?:\w{2,32}:\d{17,20}/`

### Parsed CustomEmojiWithGroups Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#parsed-customemojiwithgroups-regex "Direct link to Parsed CustomEmojiWithGroups Regex")

Regex that matches any animated or non-animated custom Discord emoji without the wrapping `<...>` symbols. This means
that a string that matches this regex can directly be send inside a Discord message. Other than this difference it is
similar to [FormattedCustomEmojiWithGroups](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-with-groups).

`Raw`: `/(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/`

### RoleMention Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#rolemention-regex "Direct link to RoleMention Regex")

This regex can capture the role ID of a role mention

`Raw`: `/^<@&(?<id>\d{17,20})>$/`

### Snowflake Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#snowflake-regex "Direct link to Snowflake Regex")

This regex matches any Discord Snowflake

`Raw`: `/^(?<id>\d{17,20})$/`

### Twemoji Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#twemoji-regex "Direct link to Twemoji Regex")

This regex matches any Twitter Emoji

`Raw`: [See official source code](https://github.com/twitter/twemoji-parser/blob/master/src/lib/regex.js)

### UserOrMember Mention Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#userormember-mention-regex "Direct link to UserOrMember Mention Regex")

This regex captures the ID of a user or member mentioned

`Raw`: `/^<@!?(?<id>\d{17,20})>$/`

### WebSocketURL Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#websocketurl-regex "Direct link to WebSocketURL Regex")

This regex matches any url starting with wss/ws

`Raw`: `/^wss?:\/\//`

### Webhook Regex [​](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#webhook-regex "Direct link to Webhook Regex")

This regex captures a Discord Webhook ID and token from a webhook url

`Raw`:
`/(?<url>^https:\/\/(?:(?:canary|ptb).)?discord(?:app)?.com\/api(?:\/v\d+)?\/webhooks\/(?<id>\d+)\/(?<token>[\w-]+)\/?$)/`

- [Introduction](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#introduction)
- [Regex Cheatsheet](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#regex-cheatsheet)
- [Usage](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#usage)
  - [Channel Mention Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#channel-mention-regex)
  - [Channel Message Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#channel-message-regex)
  - [Discord Hostname Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#discord-hostname-regex)
  - [Discord Invite Link Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#discord-invite-link-regex)
  - [Emoji Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#emoji-regex)
  - [Formatted Custom Emoji Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-regex)
  - [Formatted Custom Emoji With Groups](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#formatted-custom-emoji-with-groups)
  - [HTTP Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#http-regex)
  - [Message Link Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#message-link-regex)
  - [Parsed CustomEmoji Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#parsed-customemoji-regex)
  - [Parsed CustomEmojiWithGroups Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#parsed-customemojiwithgroups-regex)
  - [RoleMention Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#rolemention-regex)
  - [Snowflake Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#snowflake-regex)
  - [Twemoji Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#twemoji-regex)
  - [UserOrMember Mention Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#userormember-mention-regex)
  - [WebSocketURL Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#websocketurl-regex)
  - [Webhook Regex](https://sapphirejs.dev/docs/Guide/utilities/Discord_Utilities/UsefulRegexes/#webhook-regex)
