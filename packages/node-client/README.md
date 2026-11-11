# Ver.iD Node.js Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fnode-client.svg)](https://www.npmjs.com/package/@ver-id/node-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

Run Ver.iD authentication, disclosure and issuance flows from your Node.js backend. The user
completes the flow on Ver.iD's hosted page and returns to your redirect URI. Your backend holds the
client secret and receives a verified result.

## Installation

```bash
npm install @ver-id/node-client
# or
yarn add @ver-id/node-client
# or
pnpm add @ver-id/node-client
```

Node.js 18 or later is required.

## How it works

Every client has two methods:

1. `createSession(input)` prepares the session and returns `{ url, state }`. Redirect the browser
   to `url`.
2. The user completes the flow, and Ver.iD redirects the browser to your `redirectUri` with `code`
   and `state` in the query.
3. `finishSession({ callbackUrl })` exchanges the code with your client secret, verifies the result
   token and returns `{ format, payload, rawToken }`.

Between the two calls, the PKCE code verifier is kept in the `cacheManager` under the session's
`state`. It never leaves your backend.

## Quick start

Create the flow in [Ver.iD Studio](https://spas.nebula.ver.id/), register your redirect URI on it,
and copy its flow id and client secret.

```ts
import express from 'express';
import { MemoryStorageCacheManager, VeridDisclosureClient } from '@ver-id/node-client';

const verid = new VeridDisclosureClient({
  issuerUri: process.env.VERID_ISSUER_URI!,
  clientId: process.env.VERID_DISCLOSURE_FLOW_ID!,
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  redirectUri: 'https://app.example.com/verid/callback',
  // Single process only. Use RedisCacheManager or DynamoDBCacheManager across hosts.
  cacheManager: new MemoryStorageCacheManager(),
});

const app = express();

app.get('/verid/start', async (_req, res) => {
  const { url } = await verid.createSession();
  res.redirect(url);
});

app.get('/verid/callback', async (req, res) => {
  const result = await verid.finishSession({ callbackUrl: req.originalUrl });
  if (result.format === 'disclosure_v1') {
    res.json(result.payload.credentials);
  } else {
    res.json(result.payload);
  }
});
```

`VeridAuthenticationClient` and `VeridIssuanceClient` work the same way. Only their
`createSession` input and their result formats differ:

- [AUTHENTICATION.md](./AUTHENTICATION.md) — sign users in with an ID token.
- [VERIFICATION.md](./VERIFICATION.md) — receive verified credentials (disclosure).
- [ISSUANCE.md](./ISSUANCE.md) — issue credentials to a user's wallet.

## Configuration

All three clients take the same configuration:

| Field          | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| `issuerUri`    | Ver.iD OAuth issuer URI.                                                             |
| `clientId`     | The flow id from Ver.iD Studio.                                                      |
| `clientSecret` | The flow's client secret from Ver.iD Studio. Keep it on the server.                  |
| `redirectUri`  | One of the redirect URIs registered on the flow.                                     |
| `cacheManager` | Stores code verifiers between `createSession` and `finishSession`. See Cache stores. |

All fields are required. The constructor throws `InvalidArgumentError` when one is missing or
invalid.

## `createSession`

```ts
const { url, state } = await verid.createSession({ challenge, brandUuid });
```

Every flow accepts these optional fields:

| Field       | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `challenge` | A UUID. Disclosure and issuance echo it in `payload.parameter.challenge`. |
| `brandUuid` | The brand to show during the flow.                                        |

Authentication also requires `scope`. Issuance requires what to issue, and returns
`issuanceRunUuid` as well. See the flow guides.

It returns:

- `url` — send the browser here.
- `state` — identifies the session. It is also in the callback URL.

## `finishSession`

```ts
const result = await verid.finishSession({ callbackUrl: req.originalUrl });
```

`callbackUrl` is the URL Ver.iD redirected to. It can be a full URL string, a path with a query
such as `req.originalUrl`, a `URL` or a `URLSearchParams`.

`finishSession` looks up the code verifier by `state`, exchanges the code with your client secret,
verifies the token's signature, and selects the result format from the token's `typ` header. The
verifier is removed only after the exchange succeeds, so a call that failed on a network error can
be retried. A second call with the same callback after a success throws `OperationFailedError`.

## Results

A result is `{ format, payload, rawToken }`:

- `format` — which payload type you have. Check it before reading `payload`.
- `payload` — the verified token payload.
- `rawToken` — the signed token as received, if you want to store or forward it.

| Client                      | Formats                                   |
| --------------------------- | ----------------------------------------- |
| `VeridAuthenticationClient` | `'openid'`                                |
| `VeridDisclosureClient`     | `'disclosure_v1'`, `'disclosure_flat_v1'` |
| `VeridIssuanceClient`       | `'issuance_v1'`, `'issuance_flat_v1'`     |

Every client can also return `'unknown'`: a token whose signature verified, but whose `typ` this
SDK version does not know. Its `payload` is a plain JWT payload and its `typ` is the token's
`typ` header. Handle it, for example by logging `typ`, so a format added to the platform later does
not break your integration.

## Errors

All errors extend `VeridError`.

| Error                        | When                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `InvalidArgumentError`       | The configuration or `createSession` input is invalid.                                                |
| `InvalidAssertionError`      | The callback has no `state`, or a verified token's payload does not match its format.                 |
| `AuthorizationResponseError` | The callback carries an error, for example when the user cancelled.                                   |
| `TokenGrantError`            | The token request failed, for example with a wrong client secret or redirect URI.                     |
| `InvalidResponseError`       | The token response is missing the expected token.                                                     |
| `OperationFailedError`       | Issuer discovery failed, the intent was rejected, no verifier was found, or the token did not verify. |

## Security

- **The client secret stays on your backend.** Never send it to the browser.
- **Bind the callback to the user's session.** `finishSession` finds the verifier by the `state` in
  the callback URL. It does not check which browser started the session. Store `state` in the
  user's session in `createSession`, and compare it with the callback's `state` before calling
  `finishSession`.
- **Check your `challenge`.** If you pass a `challenge`, compare it with the one in the result
  payload (`payload.parameter.challenge` for `disclosure_v1` and `issuance_v1`).
- **Results are verified.** `finishSession` verifies the token's signature before it returns. There
  is no way to get an unverified result.

## Cache stores

The cache holds one code verifier per open session. Pick a store that every instance of your
backend can reach: the callback may land on a different process than the one that created the
session.

### Shared options

Every built-in store takes the same `options`:

| Option       | Default    | Meaning                                                                                                               |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `prefix`     | `'verid:'` | Namespaces every key. Pass an empty string to store keys unprefixed.                                                  |
| `ttlSeconds` | `3600`     | Entry lifetime in seconds. Expired entries read as a miss and are dropped from the store. Pass `0` to disable expiry. |

Every built-in store implements `save`, `get`, `remove` and `clear`. `clear` only removes entries
carrying the configured prefix, so keys owned by the rest of your application survive.

### Memory

An in-memory `Map`. Data is lost on restart and not shared between processes, so use it only for a
single process or for tests.

```ts
import { MemoryStorageCacheManager } from '@ver-id/node-client';

const cacheManager = new MemoryStorageCacheManager({ prefix: 'myapp:', ttlSeconds: 600 });
```

### File

One JSON file per entry, under `~/.verid-cache/` unless you pass a directory. All processes on the
same host share it. Processes on different hosts or containers do not share a filesystem.

```ts
import { FileStorageCacheManager } from '@ver-id/node-client';

const cacheManager = new FileStorageCacheManager('/var/lib/my-app/verid-cache', {
  ttlSeconds: 600,
});
```

### Redis

For deployments with several hosts. Works with [`redis`](https://www.npmjs.com/package/redis)
(node-redis) and [`ioredis`](https://www.npmjs.com/package/ioredis). Redis expires the keys itself.

```ts
import { createClient } from 'redis';
import { RedisCacheManager } from '@ver-id/node-client';

const redisClient = createClient({ url: 'redis://localhost:6379' });
await redisClient.connect();

const cacheManager = new RedisCacheManager({
  client: redisClient,
  options: { prefix: 'myapp:', ttlSeconds: 600 },
});
```

With `ioredis`:

```ts
import Redis from 'ioredis';
import { RedisCacheManager } from '@ver-id/node-client';

const cacheManager = new RedisCacheManager({ client: new Redis() });
```

### AWS DynamoDB

For AWS deployments without Redis, such as Lambda. Install `@aws-sdk/client-dynamodb` and
`@aws-sdk/lib-dynamodb`.

The table needs a partition key `pk` (String). To have DynamoDB delete expired items, [enable
TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html) on the `ttl`
attribute. Expired items never read back either way.

```ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBCacheManager } from '@ver-id/node-client';

const cacheManager = new DynamoDBCacheManager({
  client: DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'eu-west-1' })),
  tableName: 'verid-cache',
  options: { prefix: 'myapp:', ttlSeconds: 600 },
});
```

### Your own store

Any object implementing `ICacheManager` works:

```ts
import type { ICacheManager } from '@ver-id/node-client';

const cacheManager: ICacheManager = {
  save: (key, value) => db.put(key, value),
  get: (key) => db.get(key), // string, or null when missing
  remove: (key) => db.delete(key),
};
```

Each method may return a value or a promise. `clear` is optional. Expire entries yourself, or
sessions that are never finished stay in the store.

## Troubleshooting

| Problem                                                       | Fix                                                                                                                                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Invalid code verifier: no code verifier found for state ...` | The session was created against a different cache than the one that finished it, or the entry expired. Across hosts or containers use `RedisCacheManager` or `DynamoDBCacheManager`. A repeated callback also hits this. |
| `Authorization server discovery failed`                       | Check that `issuerUri` is correct and reachable from the server.                                                                                                                                                         |
| `TokenGrantError` in `finishSession`                          | Check the client secret, and that `redirectUri` exactly matches one registered on the flow.                                                                                                                              |
| `ENOENT` under `.verid-cache`                                 | `FileStorageCacheManager` needs a writable directory. Pass one explicitly.                                                                                                                                               |
| Redis or DynamoDB connection errors                           | Connect the client before passing it to the cache manager.                                                                                                                                                               |

## License

MIT
