# Ver.iD Browser Client

[![npm version](https://badge.fury.io/js/@ver-id%2Fbrowser-client.svg)](https://www.npmjs.com/package/@ver-id/browser-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Run Ver.iD authentication, disclosure and issuance flows entirely in the browser. The user goes to
Ver.iD's hosted page and comes back to your redirect URI with the result.

A browser cannot keep a secret, so this package only works for flows that need no client secret:
authentication and disclosure flows without one, and demo issuance flows without one. For any other
flow, including every production issuance flow, run the session on your backend with
[`@ver-id/node-client`](https://www.npmjs.com/package/@ver-id/node-client).

## Install

```bash
npm install @ver-id/browser-client
# or
yarn add @ver-id/browser-client
# or
pnpm add @ver-id/browser-client
```

## Quick start

Create a flow in [Ver.iD Studio](https://spas.nebula.ver.id/) and register your redirect URI on it.
Then create a client for the flow:

```ts
import { VeridBrowserDisclosureClient } from '@ver-id/browser-client';

const verid = new VeridBrowserDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'https://app.example.com/callback',
});
```

Start a session and send the user to Ver.iD:

```ts
const { url } = await verid.createSession();
window.location.href = url;
```

On the page at your redirect URI, finish the session:

```ts
const result = await verid.finishSession();

if (result.format === 'disclosure_v1') {
  console.log(result.payload.credentials);
}
```

## Clients

| Flow           | Client                             | Guide                                    |
| -------------- | ---------------------------------- | ---------------------------------------- |
| Authentication | `VeridBrowserAuthenticationClient` | [AUTHENTICATION.md](./AUTHENTICATION.md) |
| Disclosure     | `VeridBrowserDisclosureClient`     | [VERIFICATION.md](./VERIFICATION.md)     |
| Issuance       | `VeridBrowserIssuanceClient`       | [ISSUANCE.md](./ISSUANCE.md)             |

All three take the same configuration:

| Option         | Required | Meaning                                                                                          |
| -------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `issuerUri`    | yes      | The Ver.iD OAuth issuer URI.                                                                     |
| `clientId`     | yes      | The flow's id from Ver.iD Studio.                                                                |
| `redirectUri`  | yes      | One of the redirect URIs registered on the flow.                                                 |
| `cacheManager` | no       | Where the code verifier is kept between the two calls. Defaults to `SessionStorageCacheManager`. |

## The two methods

### `createSession(input?)`

Prepares a session and returns `{ url, state }`. Send the browser to `url`. `state` identifies the
session; you do not need to store it yourself.

Every flow accepts these optional fields:

| Field       | Meaning                                                            |
| ----------- | ------------------------------------------------------------------ |
| `challenge` | A UUID. It comes back in the result token's `parameter.challenge`. |
| `brandUuid` | The brand to show during the flow.                                 |

Authentication also requires `scope`, and issuance requires what to issue. See the per-flow guides.

### `finishSession(params?)`

Exchanges the authorization code on the callback, verifies the result token and returns it. It
reads the callback from `window.location.href` by default. To finish from another URL, pass it:

```ts
const result = await verid.finishSession({ callbackUrl: savedCallbackUrl });
```

`callbackUrl` can be a `URL`, a `URLSearchParams` or a string. Finish the session in the same
browser that created it: the code verifier is read from that browser's cache store.

## Results

`finishSession` returns `{ format, payload, rawToken }`:

- `format` says which token format the flow returned, read from the token's `typ` header.
- `payload` is the token's verified payload. Narrow it by checking `format`.
- `rawToken` is the original signed token, if you want to keep or forward it.

A token whose format this SDK version does not know comes back as `format: 'unknown'` with its
payload untyped and its `typ` header as `typ`. Handle that case, so a new token format does not
break your app.

## Cache stores

The client keeps the PKCE code verifier between `createSession` and `finishSession`. It is never
sent anywhere.

- `SessionStorageCacheManager` (default) keeps it in `sessionStorage`, for the lifetime of the tab.
- `LocalStorageCacheManager` keeps it in `localStorage`, so it survives closing the tab.

Both take the same options:

| Option       | Default    | Meaning                                                                         |
| ------------ | ---------- | ------------------------------------------------------------------------------- |
| `prefix`     | `'verid:'` | Namespaces every key. Pass an empty string to store keys unprefixed.            |
| `ttlSeconds` | `3600`     | Entry lifetime in seconds. Expired entries read as a miss. `0` disables expiry. |

```ts
import { LocalStorageCacheManager, VeridBrowserDisclosureClient } from '@ver-id/browser-client';

const verid = new VeridBrowserDisclosureClient({
  issuerUri: '<VERID_OAUTH_ISSUER_URI>',
  clientId: '<VERID_DISCLOSURE_FLOW_ID>',
  redirectUri: 'https://app.example.com/callback',
  cacheManager: new LocalStorageCacheManager({ prefix: 'myapp:', ttlSeconds: 600 }),
});
```

To use your own storage, implement `ICacheManager`: `save(key, value)`, `get(key)` (returns the
value or `null`), `remove(key)`, and optionally `clear()`. Each may return a value or a promise.

## Errors

Every error the SDK throws extends `VeridError`.

| Error                        | When                                                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidArgumentError`       | The configuration or the session input is invalid.                                                                                  |
| `AuthorizationResponseError` | The callback carries an error from Ver.iD instead of a code.                                                                        |
| `InvalidAssertionError`      | The callback has no `state`.                                                                                                        |
| `TokenGrantError`            | The token request failed.                                                                                                           |
| `InvalidResponseError`       | The token response is malformed.                                                                                                    |
| `OperationFailedError`       | Discovery or the session request failed, no verifier is cached for the callback's `state`, or the token's signature did not verify. |

## Security

- **No client secret.** Anything in the browser is public. A flow that has a client secret must run
  on a backend with `@ver-id/node-client`. Used here, `createSession` fails right away: every
  session starts with an intent, and Ver.iD refuses an intent without the secret for such a flow.
- **The code verifier stays in the browser.** It is created by `createSession`, kept in the cache
  store and used once by `finishSession`. Only its hash, the code challenge, goes to Ver.iD.
- **The result is verified.** `finishSession` checks the token's signature against Ver.iD's keys
  before returning it.
- **The result lives in the browser.** Your backend should not trust a result the browser sends it.
  When your backend needs the result, run the flow there with `@ver-id/node-client`.

## Troubleshooting

| Problem                                     | Fix                                                                                                             |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `sessionStorage is not defined`             | The code runs outside a browser, for example during server-side rendering. Call the client only in the browser. |
| `no code verifier found for state`          | The session was finished in another browser or tab than the one that created it, or the entry expired.          |
| The redirect fails at Ver.iD                | `redirectUri` must exactly match a URI registered on the flow, including the protocol and any trailing slash.   |
| `OperationFailedError` or `TokenGrantError` | Check that `issuerUri` is correct and reachable from the browser, and that the flow has no client secret.       |

## License

MIT
