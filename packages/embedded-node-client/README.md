# Ver.iD Embedded Node Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fembedded-node-client.svg)](https://www.npmjs.com/package/@ver-id/embedded-node-client)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![OAuth 2.1](https://img.shields.io/badge/OAuth-2.1-blueviolet.svg)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-07)

The backend half of **Ver.iD embedded mode**, where the Ver.iD flow runs inside your own page
instead of a redirect. This package creates the session and finishes it from a signed webhook.
The browser half is [`@ver-id/embedded-browser-client`](../embedded-browser-client). It holds no
secrets, and the result never reaches the browser.

## Installation

```bash
npm install @ver-id/embedded-node-client
# or
yarn add @ver-id/embedded-node-client
# or
pnpm add @ver-id/embedded-node-client
```

## Before you start

You need, from Ver.iD Studio, for the flow you embed:

- The **issuer URI** and **client id**, from the flow's `Configuration` tab.
- A **client secret**: the key of an OAuth secret attached to the flow. Embedded mode runs only
  as a confidential client, so Ver.iD refuses embedded sessions for a flow without one.
- A **webhook secret**, and your **webhook URL** registered on the flow.
- Your page's origin in the flow's **allowed embed origins**. Pages on other origins never hear
  that the flow finished.

Ver.iD POSTs the webhook to your server directly, so the webhook URL must be publicly reachable
over HTTPS. A `localhost` address never is: during development, expose your server with a tunnel
(`cloudflared tunnel --url http://localhost:3000` or `ngrok http 3000`) and register the printed
URL.

```bash
# .env
VERID_ISSUER_URI=<issuer URI>
VERID_CLIENT_ID=<client id>
VERID_CLIENT_SECRET=<client secret>
VERID_WEBHOOK_URI=https://<your-public-host>/api/verid/webhook
VERID_WEBHOOK_SECRET=<webhook secret>
```

## How embedded mode works

1. Your page asks your backend for a session. The backend calls `createSession` and returns the
   `sessionContext` (and the session's `state`).
2. The page mounts the Ver.iD component with that `sessionContext`, and the user completes the
   flow in their wallet.
3. Ver.iD POSTs a signed webhook to your backend. The backend calls `finishSession`, which checks
   the signature, exchanges the authorization code and verifies the result token, and stores the
   result under the session's `state`.
4. The component's `onComplete` fires in the page. It carries no result: the page asks your
   backend for the result of its `state`.

## Complete example

A disclosure with an Express backend. Authentication and issuance differ only in the client class
and what `createSession` takes; see the per-flow guides.

### Server

```ts
import express from 'express';
import {
  MemoryStorageCacheManager,
  SessionFinishError,
  VeridEmbeddedDisclosureClient,
  type DisclosureResult,
} from '@ver-id/embedded-node-client';

const verid = new VeridEmbeddedDisclosureClient({
  issuerUri: process.env.VERID_ISSUER_URI!,
  clientId: process.env.VERID_CLIENT_ID!,
  clientSecret: process.env.VERID_CLIENT_SECRET!,
  webhookUri: process.env.VERID_WEBHOOK_URI!,
  webhookSecret: process.env.VERID_WEBHOOK_SECRET!,
  cacheManager: new MemoryStorageCacheManager(), // RedisCacheManager for several instances
});

// Your own record of each session. In memory here; use your database in production.
type VeridSession = { userId: string } & (
  | { status: 'pending' }
  | { status: 'completed'; result: DisclosureResult }
  | { status: 'failed'; reason: string }
);
const sessions = new Map<string, VeridSession>();

const app = express();

// The webhook needs the raw body: register it BEFORE any global JSON parser.
app.post('/api/verid/webhook', express.text({ type: '*/*' }), async (req, res) => {
  try {
    const outcome = await verid.finishSession({ rawBody: req.body, headers: req.headers });
    if (outcome.kind === 'completed') {
      const session = sessions.get(outcome.state);
      if (session) {
        sessions.set(outcome.state, {
          userId: session.userId,
          status: 'completed',
          result: outcome.result,
        });
      }
    }
    res.sendStatus(204); // also for kind 'unknown': an event this SDK version does not know
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return res.sendStatus(401); // not from Ver.iD
    const session = sessions.get(error.state);
    if (session?.status === 'completed') return res.sendStatus(204); // a redelivery
    if (session) {
      sessions.set(error.state, {
        userId: session.userId,
        status: 'failed',
        reason: error.message,
      });
    }
    res.sendStatus(500); // Ver.iD retries; a successful retry overwrites the failure
  }
});

app.use(express.json());

// The page asks for a session. `req.user` stands for your signed-in user.
app.post('/api/verid/session', async (req, res) => {
  const { sessionContext, state } = await verid.createSession();
  sessions.set(state, { userId: req.user.id, status: 'pending' });
  res.json({ sessionContext, state });
});

// The page asks for the outcome after `onComplete`. Only the user who started it may read it.
app.get('/api/verid/session/:state', (req, res) => {
  const session = sessions.get(req.params.state);
  if (!session || session.userId !== req.user.id) return res.sendStatus(404);
  if (session.status !== 'completed') return res.json({ status: session.status });
  res.json({ status: 'completed', payload: session.result.payload }); // send what your page needs
});

app.listen(3000);
```

### Page

```html
<button id="verid-continue">Continue with Ver.iD</button>
<div id="verid-embed"></div>
```

```ts
import {
  mountVeridEmbeddedComponent,
  type VeridEmbeddedComponent,
} from '@ver-id/embedded-browser-client';

const container = document.getElementById('verid-embed')!;
let component: VeridEmbeddedComponent;

// A session runs one flow: mount a fresh one on page load and after a cancel. Mounting early
// lets the card load before the user clicks.
async function mountSession() {
  const { sessionContext, state } = await fetch('/api/verid/session', { method: 'POST' }).then(
    (r) => r.json(),
  );
  component = mountVeridEmbeddedComponent({ container, sessionContext });

  component.onComplete(async () => {
    const outcome = await waitForOutcome(state);
    component.destroy();
    if (outcome.status === 'completed') showVerified(outcome.payload);
    else showFailed();
  });
  component.onError((error) => {
    console.error('Ver.iD', error); // the card shows the user what went wrong
    if (error.error === 'loader_unavailable') showFailed(); // there is no card to show it
  });
  component.onCancel(() => {
    component.destroy();
    void mountSession();
  });
}

await mountSession();
document.getElementById('verid-continue')!.addEventListener('click', () => component.open());

// The webhook can arrive just before or just after `onComplete`, so poll briefly.
async function waitForOutcome(state: string) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const outcome = await fetch(`/api/verid/session/${state}`).then((r) => r.json());
    if (outcome.status !== 'pending') return outcome;
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { status: 'failed' };
}
```

`showVerified` and `showFailed` stand for your own UI.

The browser side is documented in full in
[`@ver-id/embedded-browser-client`](../embedded-browser-client).

### Webhook in a Next.js route handler

Route handlers receive a Fetch `Request`: read the raw body with `request.text()` and pass
`request.headers` as they are.

```ts
// app/api/verid/webhook/route.ts
import { SessionFinishError } from '@ver-id/embedded-node-client';
import { verid } from '@/lib/verid'; // the client from the example above

export async function POST(request: Request) {
  try {
    const outcome = await verid.finishSession({
      rawBody: await request.text(),
      headers: request.headers,
    });
    // saveResult, hasResult and saveFailure stand for your own storage, as in the example above.
    if (outcome.kind === 'completed') await saveResult(outcome.state, outcome.result);
    return new Response(null, { status: 204 });
  } catch (error) {
    if (!(error instanceof SessionFinishError)) return new Response(null, { status: 401 });
    if (await hasResult(error.state)) return new Response(null, { status: 204 }); // a redelivery
    await saveFailure(error.state, error.message);
    return new Response(null, { status: 500 });
  }
}
```

## Configuration

| Option          | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `issuerUri`     | The Ver.iD OAuth issuer URI.                                                      |
| `clientId`      | The flow's id from Ver.iD Studio.                                                 |
| `clientSecret`  | The flow's client secret. Used for the intent and the token exchange.             |
| `webhookUri`    | Your webhook endpoint. It must be one of the webhook URLs registered on the flow. |
| `webhookSecret` | The flow's webhook secret from Ver.iD Studio. Used to check the signature.        |
| `cacheManager`  | Where the PKCE code verifier is kept between `createSession` and `finishSession`. |

Embedded clients take no `redirectUri`: the result arrives by webhook, and the authorization code
is bound to your backend by PKCE.

### Cache managers

The code verifier is stored under the session's `state` and removed once the session finishes.
The webhook can arrive at any instance of your backend, so every instance must read the same
store.

| Store                       | Use it for                                                        |
| --------------------------- | ----------------------------------------------------------------- |
| `MemoryStorageCacheManager` | One process only                                                  |
| `FileStorageCacheManager`   | One host only; a JSON file per entry, by default `~/.verid-cache` |
| `RedisCacheManager`         | Several instances; works with `redis` (node-redis) and `ioredis`  |
| `DynamoDBCacheManager`      | Several instances on AWS without Redis, such as Lambda            |

Every store expires entries after `ttlSeconds` (default 3600, `0` disables expiry), so sessions
that are never finished do not pile up. A user who takes longer than that to finish gets a
`SessionFinishError` on the webhook.

```ts
import { createClient } from 'redis';
import { RedisCacheManager } from '@ver-id/embedded-node-client';

const redisClient = createClient({ url: 'redis://localhost:6379' });
await redisClient.connect();

const cacheManager = new RedisCacheManager({
  client: redisClient,
  options: { prefix: 'myapp:', ttlSeconds: 1800 },
});
```

```ts
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { DynamoDBCacheManager } from '@ver-id/embedded-node-client';

const cacheManager = new DynamoDBCacheManager({
  client: DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'eu-west-1' })),
  tableName: 'verid-cache', // partition key `pk` (String); enable TTL on the `ttl` attribute
});
```

`DynamoDBCacheManager` needs `@aws-sdk/client-dynamodb` and `@aws-sdk/lib-dynamodb` installed.

To use another store, implement `ICacheManager`:

| Method                             | Returns                             | Description                         |
| ---------------------------------- | ----------------------------------- | ----------------------------------- |
| `get(key: string)`                 | `string \| null` or a Promise of it | The value, or `null` when not found |
| `save(key: string, value: string)` | `void` or `Promise<void>`           | Stores a value                      |
| `remove(key: string)`              | `void` or `Promise<void>`           | Removes a value; no-op when missing |
| `clear()` (optional)               | `void` or `Promise<void>`           | Removes all values                  |

The interface has no expiry, so a custom store must expire entries itself. Sessions that are
never finished leave their verifier behind; an expiry of an hour is plenty.

## Creating a session

```ts
const { sessionContext, state } = await verid.createSession({ challenge, brandUuid });
```

- **Input.** Every flow accepts an optional `challenge` (a UUID, echoed back in the result token)
  and `brandUuid` (the brand to show). Authentication also takes `scope`; issuance takes what to
  issue. See the per-flow guides.
- **`sessionContext`** goes to the browser unchanged. It is opaque, can change in any release,
  and contains no secret.
- **`state`** identifies the session. Store it with the user's record: the webhook carries it,
  and nothing else ties the webhook to your user.
- **Once per attempt.** A session runs one flow. When the user starts again after a cancel, an
  error or a page reload, create a new session.

`createSession` throws `InvalidArgumentError` for invalid input, `InvalidAssertionError` when the
issuer does not support embedded mode, and `OperationFailedError` when Ver.iD rejects the session.

## Finishing a session from the webhook

```ts
const outcome = await verid.finishSession({ rawBody, headers });
```

- **`rawBody`** is the request body exactly as received, as a string. Parsing it as JSON and
  serialising it again changes the bytes and fails the signature check. In Express use
  `express.text({ type: '*/*' })` on the webhook route; in a Fetch-style handler (Next.js route
  handlers, Hono) use `await request.text()`.
- **`headers`** are the request's headers as received: Node's `req.headers` or a Fetch `Headers`.
  The SDK finds the signature headers itself.

`finishSession` checks the signature before it reads anything in the body. It then returns one of:

- `{ kind: 'completed', state, result }`: the session finished. Store `result` under `state`.
- `{ kind: 'unknown', type, raw }`: an event this SDK version does not know. Answer it with a
  2xx; Ver.iD retries any other response, and this SDK version can never handle it.

It throws:

| Error                        | When                                                           | Has `state` |
| ---------------------------- | -------------------------------------------------------------- | ----------- |
| `InvalidAssertionError`      | The signature header is missing, or a signed body is malformed | No          |
| `AuthorizationResponseError` | The signature does not match the body                          | No          |
| `SessionFinishError`         | The signature matched, but the session could not finish        | Yes         |

`SessionFinishError` covers a redelivery after the session already finished, a `state` whose
verifier is not in your cache, and a failed token exchange or token verification. The original
error is its `cause`.

### Redeliveries and retries

Ver.iD retries the webhook, for a few minutes, as long as your endpoint does not answer with a
2xx.

- **The exchange failed.** The verifier stays cached, so answer with a 5xx and the retry can still
  finish the session.
- **The session already finished.** The verifier was removed, so `finishSession` throws
  `SessionFinishError`. Check your own results for `error.state` and answer with a 2xx.
- **The verifier is missing for another reason** (it expired, another instance has its own
  cache, or the cache was cleared): `SessionFinishError` again, and no retry can fix it. Record the failure so the
  waiting page can show it, and fix the cache setup.

One `state` produces one completion, so `state` is also the key to drop duplicates on.

## Results

A result is `{ format, payload, rawToken }`:

- `format` names the token format, read from the token's `typ` header, for example
  `'disclosure_v1'`. Use it to narrow `payload`.
- `payload` is the verified token payload.
- `rawToken` is the signed token, if you want to keep it.

A token whose `typ` this SDK version does not know is still verified, and returned with
`format: 'unknown'` and the token's `typ` header as `typ`.

## Security

- **The code verifier never leaves your backend.** Only the derived code challenge is in
  `sessionContext`.
- **The authorization code arrives only by signed webhook.** The signature is an HMAC-SHA256 of
  the raw body with your flow's webhook secret, compared in constant time, and checked before the
  body is read.
- **The result token is always verified.** `finishSession` checks its signature against Ver.iD's
  published keys before returning it.
- **Keep `clientSecret` and `webhookSecret` on the server.** Neither is ever needed in the
  browser.

## Per-flow guides

- [Authentication](./AUTHENTICATION.md): `VeridEmbeddedAuthenticationClient`
- [Verification](./VERIFICATION.md): `VeridEmbeddedDisclosureClient`
- [Issuance](./ISSUANCE.md): `VeridEmbeddedIssuanceClient`

## License

MIT
