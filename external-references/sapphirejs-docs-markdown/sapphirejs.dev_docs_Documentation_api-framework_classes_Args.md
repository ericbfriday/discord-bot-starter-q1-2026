[Skip to main content](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#__docusaurus_skipToContent_fallback)

On this page

Defined in: [projects/framework/src/lib/parsers/Args.ts:31](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L31)

The argument parser to be used in [Command](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Command/).

## Constructors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#constructors "Direct link to Constructors")

### Constructor [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#constructor "Direct link to Constructor")

> **new Args**(`message`: [`Message`](https://discord.js.org/docs/packages/discord.js/main/Message:Class), `command`: [`MessageCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/MessageCommand), `parser`: `ArgumentStream`, `context`: [`MessageCommandContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/MessageCommandContext)): `Args`

Defined in: [projects/framework/src/lib/parsers/Args.ts:59](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L59)

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters "Direct link to Parameters")

| Parameter | Type                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| `message` | [`Message`](https://discord.js.org/docs/packages/discord.js/main/Message:Class)                                     |
| `command` | [`MessageCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/MessageCommand)             |
| `parser`  | `ArgumentStream`                                                                                                    |
| `context` | [`MessageCommandContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/MessageCommandContext) |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns "Direct link to Returns")

`Args`

## Properties [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#properties "Direct link to Properties")

### command [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#command "Direct link to command")

> `readonly` **command**: [`MessageCommand`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/MessageCommand)

Defined in: [projects/framework/src/lib/parsers/Args.ts:40](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L40)

The command that is being run.

---

### commandContext [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#commandcontext "Direct link to commandContext")

> `readonly` **commandContext**: [`MessageCommandContext`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/MessageCommandContext)

Defined in: [projects/framework/src/lib/parsers/Args.ts:45](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L45)

The context of the command being run.

---

### message [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#message "Direct link to message")

> `readonly` **message**: [`Message`](https://discord.js.org/docs/packages/discord.js/main/Message:Class)

Defined in: [projects/framework/src/lib/parsers/Args.ts:35](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L35)

The original message that triggered the command.

---

### parser [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parser "Direct link to parser")

> `protected``readonly` **parser**: `ArgumentStream`

Defined in: [projects/framework/src/lib/parsers/Args.ts:50](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L50)

The internal Lexure parser.

## Accessors [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#accessors "Direct link to Accessors")

### finished [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#finished "Direct link to finished")

#### Get Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#get-signature "Direct link to Get Signature")

> **get** **finished**(): `boolean`

Defined in: [projects/framework/src/lib/parsers/Args.ts:725](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L725)

Whether all arguments have been consumed.

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-1 "Direct link to Returns")

`boolean`

## Methods [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#methods "Direct link to Methods")

### getFlags() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getflags "Direct link to getFlags()")

> **getFlags**(...`keys`: readonly `string`\[\]): `boolean`

Defined in: [projects/framework/src/lib/parsers/Args.ts:615](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L615)

Checks if one or more flag were given.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-1 "Direct link to Parameters")

| Parameter | Type                  | Description              |
| --------- | --------------------- | ------------------------ |
| ...`keys` | readonly `string`\[\] | The name(s) of the flag. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-2 "Direct link to Returns")

`boolean`

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example "Direct link to Example")

```typescript
// Suppose args are from '--f --g'.
console.log(args.getFlags("f"));
// >>> true

console.log(args.getFlags("g", "h"));
// >>> true

console.log(args.getFlags("h"));
// >>> false
```

---

### getOption() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoption "Direct link to getOption()")

> **getOption**(...`keys`: readonly `string`\[\]): `null` \| `string`

Defined in: [projects/framework/src/lib/parsers/Args.ts:658](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L658)

Gets the last value of one or more options.
Similar to [Args.getOptionResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionresult) but returns the value on success, or `null` if not.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-2 "Direct link to Parameters")

| Parameter | Type                  | Description                |
| --------- | --------------------- | -------------------------- |
| ...`keys` | readonly `string`\[\] | The name(s) of the option. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-3 "Direct link to Returns")

`null` \| `string`

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-1 "Direct link to Example")

```typescript
// Suppose args are from '--a=1 --b=2 --c=3'.
console.log(args.getOption("a"));
// >>> '1'

console.log(args.getOption("b", "c"));
// >>> '2'

console.log(args.getOption("d"));
// >>> null
```

---

### getOptionResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionresult "Direct link to getOptionResult()")

> **getOptionResult**(...`keys`: readonly `string`\[\]): `Option`<`string`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:637](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L637)

Gets the last value of one or more options as an Option.
If you do not care about safely handling non-existing values
you can use [Args.getOption](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoption) to get `string | null` as return type

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-3 "Direct link to Parameters")

| Parameter | Type                  | Description                |
| --------- | --------------------- | -------------------------- |
| ...`keys` | readonly `string`\[\] | The name(s) of the option. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-4 "Direct link to Returns")

`Option`<`string`>

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-2 "Direct link to Example")

```typescript
// Suppose args are from '--a=1 --b=2 --c=3'.
console.log(args.getOptionResult("a"));
// >>> Some { value: '1' }

console.log(args.getOptionResult("b", "c"));
// >>> Some { value: '2' }

console.log(args.getOptionResult("d"));
// >>> None {}
```

---

### getOptions() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptions "Direct link to getOptions()")

> **getOptions**(...`keys`: readonly `string`\[\]): `null` \| readonly `string`\[\]

Defined in: [projects/framework/src/lib/parsers/Args.ts:702](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L702)

Gets all the values of one or more option.
Similar to [Args.getOptionsResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionsresult) but returns the value on success, or `null` if not.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-4 "Direct link to Parameters")

| Parameter | Type                  | Description                |
| --------- | --------------------- | -------------------------- |
| ...`keys` | readonly `string`\[\] | The name(s) of the option. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-5 "Direct link to Returns")

`null` \| readonly `string`\[\]

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-3 "Direct link to Example")

```typescript
// Suppose args are from '--a=1 --a=1 --b=2 --c=3'.
console.log(args.getOptions("a"));
// >>> ['1', '1']

console.log(args.getOptions("b", "c"));
// >>> ['2', '3']

console.log(args.getOptions("d"));
// >>> null
```

---

### getOptionsResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionsresult "Direct link to getOptionsResult()")

> **getOptionsResult**(...`keys`: readonly `string`\[\]): `Option`<readonly `string`\[\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:681](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L681)

Gets all the values of one or more option.

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-5 "Direct link to Parameters")

| Parameter | Type                  | Description                |
| --------- | --------------------- | -------------------------- |
| ...`keys` | readonly `string`\[\] | The name(s) of the option. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-6 "Direct link to Returns")

`Option`<readonly `string`\[\]>

#### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-4 "Direct link to Example")

```typescript
// Suppose args are from '--a=1 --a=1 --b=2 --c=3'.
console.log(args.getOptionsResult("a"));
// >>> Some { value: [ '1' ] }

console.log(args.getOptionsResult("a", "d"));
// >>> Some { value: [ '1' ] }

console.log(args.getOptionsResult("b", "c"));
// >>> Some { value: [ '2', '3' ] }

console.log(args.getOptionsResult("d"));
// >>> None {}
```

---

### missingArguments() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#missingarguments "Direct link to missingArguments()")

> `protected` **missingArguments**(): `Err`< [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError) >

Defined in: [projects/framework/src/lib/parsers/Args.ts:747](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L747)

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-7 "Direct link to Returns")

`Err`< [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError) >

---

### next() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#next "Direct link to next()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature "Direct link to Call Signature")

> **next**(): `string`

Defined in: [projects/framework/src/lib/parsers/Args.ts:576](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L576)

Similar to [Args.nextMaybe](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#nextmaybe) but returns the value on success, null otherwise.

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-8 "Direct link to Returns")

`string`

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-5 "Direct link to Example")

```typescript
// !numbers 1 2 3

console.log(args.next());
// -> '1'
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-1 "Direct link to Call Signature")

> **next** <`T`>(`cb`: [`ArgsNextCallback`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback) <`T`>): `T`

Defined in: [projects/framework/src/lib/parsers/Args.ts:593](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L593)

Similar to [Args.nextMaybe](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#nextmaybe) but returns the value on success, null otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-6 "Direct link to Parameters")

| Parameter | Type                                                                                                            | Description                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `cb`      | [`ArgsNextCallback`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback) <`T`> | Gives an option of either the resulting value, or nothing if failed. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-9 "Direct link to Returns")

`T`

##### Typeparam [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#typeparam "Direct link to Typeparam")

T Output type of the [callback](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback).

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-6 "Direct link to Example")

```typescript
// !numbers 1 2 3
const parse = (x: string) => {
  const n = Number(x);
  return Number.isNaN(n) ? none() : some(n);
};

console.log(args.nextMaybe(parse));
// -> 1
```

---

### nextMaybe() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#nextmaybe "Direct link to nextMaybe()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-2 "Direct link to Call Signature")

> **nextMaybe**(): `Option`<`string`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:543](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L543)

Retrieves the next raw argument from the parser.

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-10 "Direct link to Returns")

`Option`<`string`>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-7 "Direct link to Example")

```typescript
// !numbers 1 2 3

console.log(args.nextMaybe());
// -> { exists: true, value: '1' }
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-3 "Direct link to Call Signature")

> **nextMaybe** <`T`>(`cb`: [`ArgsNextCallback`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback) <`T`>): `Option`<`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:561](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L561)

Retrieves the value of the next unused ordered token, but only if it could be transformed.
That token will now be used if the transformation succeeds.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-1 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-7 "Direct link to Parameters")

| Parameter | Type                                                                                                            | Description                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `cb`      | [`ArgsNextCallback`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback) <`T`> | Gives an option of either the resulting value, or nothing if failed. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-11 "Direct link to Returns")

`Option`<`T`>

##### Typeparam [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#typeparam-1 "Direct link to Typeparam")

T Output type of the [callback](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsNextCallback).

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-8 "Direct link to Example")

```typescript
// !numbers 1 2 3
const parse = (x: string) => {
  const n = Number(x);
  return Number.isNaN(n) ? none() : some(n);
};

console.log(args.nextMaybe(parse));
// -> { exists: true, value: 1 }
```

---

### peek() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peek "Direct link to peek()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-4 "Direct link to Call Signature")

> **peek** <`T`>(`type`: () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) <`T`>): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:481](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L481)

Similar to [Args.peekResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peekresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-2 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-8 "Direct link to Parameters")

| Parameter | Type                                                                                                                               | Description                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`    | () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) <`T`> | The function, custom argument, or argument name. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-12 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-9 "Direct link to Example")

```typescript
// !bigintsumthensquarefirst 25 50 75
const resolver = Args.make((arg, { argument }) => {
  try {
    return Args.ok(BigInt(arg));
  } catch {
    return Args.error({
      parameter: arg,
      argument,
      identifier: "InvalidBigInt",
      message: "You must specify a valid number for a bigint.",
    });
  }
});

const peeked = await args.repeatResult(resolver);
await peeked.inspectAsync((value) =>
  message.channel.send(`Sum: **${value.reduce((x, y) => x + y, 0n)}**`),
); // Sum: 150n

const first = await args.pick(resolver);
await message.channel.send(`First bigint squared: ${first ** 2n}`); // First bigint squared: 625
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-5 "Direct link to Call Signature")

> **peek** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:510](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L510)

Similar to [Args.peekResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peekresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-3 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-9 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description                                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The function, custom argument, or argument name. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The peek options.                                |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-13 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-10 "Direct link to Example")

```typescript
import { SnowflakeRegex } from "@sapphire/discord.js-utilities";
import { DiscordSnowflake } from "@sapphire/snowflake";

// !createdat 730159185517477900
const snowflakeResolver = Args.make<bigint>((arg, { argument }) => {
  return SnowflakeRegex.test(arg)
    ? Args.ok(BigInt(arg))
    : Args.error({
        parameter: arg,
        argument,
        identifier: "InvalidSnowflake",
        message: "You must specify a valid snowflake.",
      });
});

const snowflake = await args.peek(snowflakeResolver);
const timestamp = Number((snowflake >> 22n) + DiscordSnowflake.epoch);
const createdAt = new Date(timestamp);

await message.channel.send(
  `The snowflake ${snowflake} was registered on ${createdAt.toUTCString()}.`,
); // The snowflake 730159185517477900 was registered on Tue, 07 Jul 2020 20:31:55 GMT.

const id = await args.pick("string");
await message.channel.send(
  `Your ID, reversed: ${id.split("").reverse().join("")}`,
); // Your ID, reversed: 009774715581951037
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-6 "Direct link to Call Signature")

> **peek** <`K`>(`type`: `K` \| () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:527](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L527)

Similar to [Args.peekResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peekresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-4 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-10 "Direct link to Parameters")

| Parameter  | Type                                                                                                                                                                                                                                  | Description                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`     | `K` \| () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]> | The function, custom argument, or argument name. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)                                                                                                                                         | The peek options.                                |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-14 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-11 "Direct link to Example")

```typescript
// !messagelink https://discord.com/channels/737141877803057244/737142209639350343/791843123898089483
const remoteMessage = await args.peek("message");
await message.channel.send(
  `${remoteMessage.author.tag}: ${remoteMessage.content}`,
); // RealShadowNova#7462: Yeah, Sapphire has been a great experience so far, especially being able to help and contribute.

const url = await args.pick("hyperlink");
await message.channel.send(`Hostname: ${url.hostname}`); // Hostname: discord.com
```

---

### peekResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peekresult "Direct link to peekResult()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-7 "Direct link to Call Signature")

> **peekResult** <`T`>(`type`: () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) <`T`>): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:403](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L403)

Peeks the following parameter(s) without advancing the parser's state.
Passing a function as a parameter allows for returning [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult), [Args.repeatResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult),
or [Args.restResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult); otherwise, passing the custom argument or the argument type with options
will use [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult) and only peek a single argument.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-5 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-11 "Direct link to Parameters")

| Parameter | Type                                                                                                                               | Description                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`    | () =\> [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) <`T`> | The function, custom argument, or argument name. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-15 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-12 "Direct link to Example")

```typescript
// !reversedandscreamfirst hello world
const resolver = Args.make((arg) => Args.ok(arg.split("").reverse().join("")));

const result = await args.repeatResult(resolver);
await result.inspectAsync((value) =>
  message.channel.send(`Reversed ${value.length} word(s): ${value.join(" ")}`),
); // Reversed 2 word(s): olleh dlrow

const firstWord = await args.pickResult("string");
await firstWord.inspectAsync((value) =>
  message.channel.send(firstWord.value.toUpperCase()),
); // HELLO
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-8 "Direct link to Call Signature")

> **peekResult** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:423](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L423)

Peeks the following parameter(s) without advancing the parser's state.
Passing a function as a parameter allows for returning [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult), [Args.repeatResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult),
or [Args.restResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult); otherwise, passing the custom argument or the argument type with options
will use [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult) and only peek a single argument.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-6 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-12 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description                                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The function, custom argument, or argument name. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The peekResult options.                          |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-16 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-13 "Direct link to Example")

```typescript
// !reverseandscreamfirst sapphire community
const resolver = Args.make((arg) => Args.ok(arg.split("").reverse().join("")));

const peekedWord = await args.peekResult(resolver);
await peekedWord.inspectAsync((value) => message.channel.send(value)); // erihppas

const firstWord = await args.pickResult("string");
await firstWord.inspectAsync((value) =>
  message.channel.send(value.toUpperCase()),
); // SAPPHIRE
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-9 "Direct link to Call Signature")

> **peekResult** <`K`>(`type`: `K` \| () =\> `Awaitable`< [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:445](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L445)

Peeks the following parameter(s) without advancing the parser's state.
Passing a function as a parameter allows for returning [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult), [Args.repeatResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult),
or [Args.restResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult); otherwise, passing the custom argument or the argument type with options
will use [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult) and only peek a single argument.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-7 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-13 "Direct link to Parameters")

| Parameter  | Type                                                                                                                                                                                                                                                | Description                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `type`     | `K` \| () =\> `Awaitable`< [`Result`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Result) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>> | The function, custom argument, or argument name. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)                                                                                                                                                       | The peekResult options.                          |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-17 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-14 "Direct link to Example")

```typescript
// !datethenaddtwo 1608867472611
const date = await args.peekResult("date");
await date.inspectAsync((value) =>
  message.channel.send(`Your date (in UTC): ${value.toUTCString()}`),
); // Your date (in UTC): Fri, 25 Dec 2020 03:37:52 GMT

const result = await args.pickResult("number", {
  maximum: Number.MAX_SAFE_INTEGER - 2,
});
await result.inspectAsync((value) =>
  message.channel.send(`Your number plus two: ${value + 2}`),
); // Your number plus two: 1608867472613
```

---

### pick() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pick "Direct link to pick()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-10 "Direct link to Call Signature")

> **pick** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:165](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L165)

Similar to [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-8 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-14 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description               |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The pick options.         |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-18 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-15 "Direct link to Example")

```typescript
// !square 5
const resolver = Args.make((parameter, { argument }) => {
  const parsed = Number(parameter);
  if (Number.isNaN(parsed)) {
    return Args.error({
      argument,
      parameter,
      identifier: "ArgumentNumberNaN",
      message: "You must write a valid number.",
    });
  }

  return Args.ok(parsed);
});

const a = await args.pick(resolver);

await message.channel.send(`The result is: ${a ** 2}!`);
// Sends "The result is: 25"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-11 "Direct link to Call Signature")

> **pick** <`K`>(`type`: `K`, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:179](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L179)

Similar to [Args.pickResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-9 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-15 "Direct link to Parameters")

| Parameter  | Type                                                                                          | Description               |
| ---------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                           | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions) | The pick options.         |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-19 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-16 "Direct link to Example")

```typescript
// !add 1 2
const a = await args.pick("integer");
const b = await args.pick("integer");
await message.channel.send(`The result is: ${a + b}!`);
// Sends "The result is: 3"
```

---

### pickResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult "Direct link to pickResult()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-12 "Direct link to Call Signature")

> **pickResult** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:99](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L99)

Retrieves the next parameter and parses it. Advances index on success.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-10 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-16 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description               |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The pickResult options.   |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-20 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-17 "Direct link to Example")

```typescript
// !square 5
const resolver = Args.make((parameter, { argument }) => {
  const parsed = Number(parameter);
  if (Number.isNaN(parsed)) {
    return Args.error({
      argument,
      parameter,
      identifier: "ArgumentNumberNaN",
      message: "You must write a valid number.",
    });
  }

  return Args.ok(parsed);
});

const a = await args.pickResult(resolver);
if (!a.success) {
  throw new UserError({
    identifier: "ArgumentNumberNaN",
    message: "You must write a valid number.",
  });
}

await message.channel.send(`The result is: ${a.value ** 2}!`);
// Sends "The result is: 25"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-13 "Direct link to Call Signature")

> **pickResult** <`K`>(`type`: `K`, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:121](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L121)

Retrieves the next parameter and parses it. Advances index on success.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-11 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-17 "Direct link to Parameters")

| Parameter  | Type                                                                                          | Description               |
| ---------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                           | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions) | The pickResult options.   |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-21 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-18 "Direct link to Example")

```typescript
// !add 1 2
const a = await args.pickResult("integer");
if (!a.success) {
  throw new UserError({
    identifier: "AddArgumentError",
    message: "You must write two numbers, but the first one did not match.",
  });
}

const b = await args.pickResult("integer");
if (!b.success) {
  throw new UserError({
    identifier: "AddArgumentError",
    message: "You must write two numbers, but the second one did not match.",
  });
}

await message.channel.send(`The result is: ${a.value + b.value}!`);
// Sends "The result is: 3"
```

---

### repeat() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeat "Direct link to repeat()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-14 "Direct link to Call Signature")

> **repeat** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`\[\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:362](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L362)

Similar to [Args.repeatResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-12 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-18 "Direct link to Parameters")

| Parameter  | Type                                                                                                      | Description               |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>         | The type of the argument. |
| `options?` | [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions) | The repeat options.       |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-22 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`\[\]>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-19 "Direct link to Example")

```typescript
// !reverse-each 2 Hello World!
const resolver = Args.make((arg) => Args.ok(arg.split("").reverse()));
const result = await args.repeat(resolver, { times: 5 });
await message.channel.send(
  `You have written ${result.length} word(s): ${result.join(" ")}`,
);
// Sends "You have written 2 word(s): Hello World!"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-15 "Direct link to Call Signature")

> **repeat** <`K`>(`type`: `K`, `options?`: [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]\[\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:375](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L375)

Similar to [Args.repeatResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-13 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-19 "Direct link to Parameters")

| Parameter  | Type                                                                                                      | Description               |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                                       | The type of the argument. |
| `options?` | [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions) | The repeat options.       |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-23 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]\[\]>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-20 "Direct link to Example")

```typescript
// !add 2 Hello World!
const words = await args.repeat("string", { times: 5 });
await message.channel.send(
  `You have written ${words.length} word(s): ${words.join(" ")}`,
);
// Sends "You have written 2 word(s): Hello World!"
```

---

### repeatResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult "Direct link to repeatResult()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-16 "Direct link to Call Signature")

> **repeatResult** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArrayResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ArrayResultType) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:295](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L295)

Retrieves all the following arguments.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-14 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-20 "Direct link to Parameters")

| Parameter  | Type                                                                                                      | Description               |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>         | The type of the argument. |
| `options?` | [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions) | The repeatResult options. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-24 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArrayResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ArrayResultType) <`T`>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-21 "Direct link to Example")

```typescript
// !add 2 Hello World!
const resolver = Args.make((arg) => Args.ok(arg.split("").reverse()));
const result = await args.repeatResult(resolver, { times: 5 });
if (!result.success) {
  throw new UserError({
    identifier: "CountArgumentError",
    message: "You must write up to 5 words.",
  });
}

await message.channel.send(
  `You have written ${result.value.length} word(s): ${result.value.join(" ")}`,
);
// Sends "You have written 2 word(s): olleH !dlroW"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-17 "Direct link to Call Signature")

> **repeatResult** <`K`>(`type`: `K`, `options?`: [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArrayResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ArrayResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:312](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L312)

Retrieves all the following arguments.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-15 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-21 "Direct link to Parameters")

| Parameter  | Type                                                                                                      | Description               |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                                       | The type of the argument. |
| `options?` | [`RepeatArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/RepeatArgOptions) | The repeatResult options. |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-25 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArrayResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ArrayResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-22 "Direct link to Example")

```typescript
// !reverse-each 2 Hello World!
const result = await args.repeatResult("string", { times: 5 });
if (!result.success) {
  throw new UserError({
    identifier: "CountArgumentError",
    message: "You must write up to 5 words.",
  });
}

await message.channel.send(
  `You have written ${result.value.length} word(s): ${result.value.join(" ")}`,
);
// Sends "You have written 2 word(s): Hello World!"
```

---

### rest() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#rest "Direct link to rest()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-18 "Direct link to Call Signature")

> **rest** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:258](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L258)

Similar to [Args.restResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-16 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-22 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description               |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The rest options.         |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-26 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) <`T`>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-23 "Direct link to Example")

```typescript
// !reverse Hello world!
const resolver = Args.make((arg) => Args.ok(arg.split("").reverse()));
const a = await args.rest(resolver);
await message.channel.send(`The reversed value is... ${a}`);
// Sends "The reversed value is... !dlrow olleH"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-19 "Direct link to Call Signature")

> **rest** <`K`>(`type`: `K`, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

Defined in: [projects/framework/src/lib/parsers/Args.ts:272](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L272)

Similar to [Args.restResult](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult) but returns the value on success, throwing otherwise.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-17 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-23 "Direct link to Parameters")

| Parameter  | Type                                                                                          | Description               |
| ---------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                           | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions) | The rest options.         |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-27 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-24 "Direct link to Example")

```typescript
// !add 2 Hello World!
const a = await args.pick("integer");
const b = await args.rest("string", { minimum: 1 });
await message.channel.send(`The repeated value is... ${b.repeat(a)}!`);
// Sends "The repeated value is... Hello World!Hello World!"
```

---

### restore() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restore "Direct link to restore()")

> **restore**(): `void`

Defined in: [projects/framework/src/lib/parsers/Args.ts:718](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L718)

Restores the previously saved state from the stack.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-28 "Direct link to Returns")

`void`

#### See [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#see "Direct link to See")

Args#save

---

### restResult() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult "Direct link to restResult()")

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-20 "Direct link to Call Signature")

> **restResult** <`T`>(`type`: [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:203](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L203)

Retrieves all the following arguments.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-18 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-24 "Direct link to Parameters")

| Parameter  | Type                                                                                              | Description               |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)     | The restResult options.   |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-29 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) <`T`>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-25 "Direct link to Example")

```typescript
// !reverse Hello world!
const resolver = Args.make((parameter) =>
  Args.ok(parameter.split("").reverse()),
);

const a = await args.restResult(resolver);
if (!a.success) {
  throw new UserError({
    identifier: "AddArgumentError",
    message: "You must write some text.",
  });
}

await message.channel.send(`The reversed value is... ${a.value}`);
// Sends "The reversed value is... !dlrow olleH"
```

#### Call Signature [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#call-signature-21 "Direct link to Call Signature")

> **restResult** <`K`>(`type`: `K`, `options?`: [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions)): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:225](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L225)

Retrieves all the following arguments.

##### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-19 "Direct link to Type Parameters")

| Type Parameter                                                                                              |
| ----------------------------------------------------------------------------------------------------------- |
| `K` _extends_ keyof [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType) |

##### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-25 "Direct link to Parameters")

| Parameter  | Type                                                                                          | Description               |
| ---------- | --------------------------------------------------------------------------------------------- | ------------------------- |
| `type`     | `K`                                                                                           | The type of the argument. |
| `options?` | [`ArgOptions`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgOptions) | The restResult options.   |

##### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-30 "Direct link to Returns")

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) < [`ResultType`](https://sapphirejs.dev/docs/Documentation/api-framework/type-aliases/ResultType) < [`ArgType`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgType)\[`K`\]>>

##### Example [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#example-26 "Direct link to Example")

```typescript
// !add 2 Hello World!
const a = await args.pickResult("integer");
if (!a.success) {
  throw new UserError({
    identifier: "AddArgumentError",
    message:
      "You must write a number and a text, but the former did not match.",
  });
}

const b = await args.restResult("string", { minimum: 1 });
if (!b.success) {
  throw new UserError({
    identifier: "AddArgumentError",
    message:
      "You must write a number and a text, but the latter did not match.",
  });
}

await message.channel.send(
  `The repeated value is... ${b.value.repeat(a.value)}!`,
);
// Sends "The repeated value is... Hello World!Hello World!"
```

---

### save() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#save "Direct link to save()")

> **save**(): `void`

Defined in: [projects/framework/src/lib/parsers/Args.ts:710](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L710)

Saves the current state into the stack following a FILO strategy (first-in, last-out).

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-31 "Direct link to Returns")

`void`

#### See [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#see-1 "Direct link to See")

Args#restore

---

### start() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#start "Direct link to start()")

> **start**(): `Args`

Defined in: [projects/framework/src/lib/parsers/Args.ts:69](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L69)

Sets the parser to the first token.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-32 "Direct link to Returns")

`Args`

---

### toJSON() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#tojson "Direct link to toJSON()")

> **toJSON**(): [`ArgsJson`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsJson)

Defined in: [projects/framework/src/lib/parsers/Args.ts:732](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L732)

Defines the `JSON.stringify` override.

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-33 "Direct link to Returns")

[`ArgsJson`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/ArgsJson)

---

### unavailableArgument() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#unavailableargument "Direct link to unavailableArgument()")

> `protected` **unavailableArgument** <`T`>(`type`: `string` \| [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>): `Err`< [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError) >

Defined in: [projects/framework/src/lib/parsers/Args.ts:736](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L736)

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-20 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-26 "Direct link to Parameters")

| Parameter | Type                                                                                                          |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| `type`    | `string` \| [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`> |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-34 "Direct link to Returns")

`Err`< [`UserError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/UserError) >

---

### error() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#error "Direct link to error()")

> `static` **error** <`T`>(`options`: [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/ArgumentError/interfaces/Options) <`T`>): `Err`< [`ArgumentError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ArgumentError) <`T`>>

Defined in: [projects/framework/src/lib/parsers/Args.ts:781](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L781)

Constructs an Err result containing an [ArgumentError](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ArgumentError).

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-21 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-27 "Direct link to Parameters")

| Parameter | Type                                                                                                                             | Description                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `options` | [`Options`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/ArgumentError/interfaces/Options) <`T`> | The options for the argument error. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-35 "Direct link to Returns")

`Err`< [`ArgumentError`](https://sapphirejs.dev/docs/Documentation/api-framework/classes/ArgumentError) <`T`>>

---

### make() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#make "Direct link to make()")

> `static` **make** <`T`>(`cb`: (`parameter`: `string`, `context`: [`Context`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Context) <`T`>) =\> [`AwaitableResult`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/AwaitableResult) <`T`>, `name`: `string`): [`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:765](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L765)

Converts a callback into a usable argument.

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-22 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-28 "Direct link to Parameters")

| Parameter | Type                                                                                                                                                                                                                                                                                                                | Default value | Description                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `cb`      | (`parameter`: `string`, `context`: [`Context`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/Context) <`T`>) =\> [`AwaitableResult`](https://sapphirejs.dev/docs/Documentation/api-framework/@sapphire/namespaces/Argument/type-aliases/AwaitableResult) <`T`> | `undefined`   | The callback to convert into an [IArgument](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument). |
| `name`    | `string`                                                                                                                                                                                                                                                                                                            | `''`          | The name of the argument.                                                                                                  |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-36 "Direct link to Returns")

[`IArgument`](https://sapphirejs.dev/docs/Documentation/api-framework/interfaces/IArgument) <`T`>

---

### ok() [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#ok "Direct link to ok()")

> `static` **ok** <`T`>(`value`: `T`): `Ok`<`T`>

Defined in: [projects/framework/src/lib/parsers/Args.ts:773](https://github.com/sapphiredev/framework/blob/bba782cede16e50e698faee17c3db41b9daba537/src/lib/parsers/Args.ts#L773)

Constructs an Ok result.

#### Type Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#type-parameters-23 "Direct link to Type Parameters")

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parameters-29 "Direct link to Parameters")

| Parameter | Type | Description        |
| --------- | ---- | ------------------ |
| `value`   | `T`  | The value to pass. |

#### Returns [​](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#returns-37 "Direct link to Returns")

`Ok`<`T`>

- [Constructors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#constructors)
  - [Constructor](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#constructor)
- [Properties](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#properties)
  - [command](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#command)
  - [commandContext](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#commandcontext)
  - [message](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#message)
  - [parser](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#parser)
- [Accessors](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#accessors)
  - [finished](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#finished)
- [Methods](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#methods)
  - [getFlags()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getflags)
  - [getOption()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoption)
  - [getOptionResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionresult)
  - [getOptions()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptions)
  - [getOptionsResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#getoptionsresult)
  - [missingArguments()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#missingarguments)
  - [next()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#next)
  - [nextMaybe()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#nextmaybe)
  - [peek()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peek)
  - [peekResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#peekresult)
  - [pick()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pick)
  - [pickResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#pickresult)
  - [repeat()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeat)
  - [repeatResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#repeatresult)
  - [rest()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#rest)
  - [restore()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restore)
  - [restResult()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#restresult)
  - [save()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#save)
  - [start()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#start)
  - [toJSON()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#tojson)
  - [unavailableArgument()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#unavailableargument)
  - [error()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#error)
  - [make()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#make)
  - [ok()](https://sapphirejs.dev/docs/Documentation/api-framework/classes/Args/#ok)
