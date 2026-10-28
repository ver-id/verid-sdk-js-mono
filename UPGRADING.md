# Upgrading

Migration notes for the Ver.iD JS SDK. Each package also keeps its own
`CHANGELOG.md`.

## To the current release

| Package | From | To |
| --- | --- | --- |
| `@ver-id/embedded-browser-client` | 0.2.0 | 0.3.0 |
| `@ver-id/embedded-node-client` | 0.2.0 | 0.3.0 |
| `@ver-id/core` | 0.1.0 | 0.2.0 |
| `@ver-id/node-client` | 0.14.0 | 0.15.0 |
| `@ver-id/browser-client` | 0.16.0 | 0.17.0 |

### `@ver-id/embedded-browser-client`: Ver.iD's loader renders the card

Ver.iD's embedded flow UI changed how it is embedded: a loader script served by the
gateway (`embedded.js`) creates the iframe, sizes it to the card (or opens a full-screen
drawer on phones) and starts the flow when your page calls `open()`. The
browser client now drives that loader instead of creating the iframe itself. The mount
call is unchanged, `mountVeridEmbeddedComponent({ container, ...bootstrap })`, but:

1. Call `component.open()` to start the flow: from your own button, your own step, or
   straight after mounting to start on page load. The flow no longer starts when the
   component mounts. On a phone, calling it again reopens the drawer the person closed.
2. `container` must be an `HTMLElement`; passing your own `<iframe>` is no longer
   supported. The card is as wide as the container and as tall as its content, so size
   the container's width and leave the height alone.
3. The `iframe` option (`className`, `style`, `allow`, `sandbox`, `title`) is gone, and
   so is `component.iframe`. `component.host` is the element the loader renders into.
4. `ready` fires when the flow has started after `open()`, not when the iframe has
   loaded. There is nothing to show before it: the loader keeps the card hidden until
   Ver.iD has styled it.
5. The component no longer reads `postMessage`s. The loader reports the lifecycle as DOM
   events on `component.host`, bubbling to `document` (`verid:ready`, `verid:complete`,
   `verid:error` with detail `{ error }`, `verid:cancel`), and the component re-dispatches
   them as its `ready`/`complete`/`error`/`cancel` events. Nothing surfaces as an `error`
   event with `error: 'invalid_message'` any more. An `error` event carries
   `loader_unavailable` when `open()` found that `embedded.js` could not be loaded (there is
   no card; show your own fallback), and otherwise Ver.iD's own code, which is for logging
   and support only: the set is not fixed, and the card shows the person what went wrong.
   A page that does not use the SDK can listen for the same `verid:` events itself.
6. After `open()` the page hears either `ready` or `error` (the flow could not start).
   After `ready` comes at most one of `complete`, `error` and `cancel`, and possibly none:
   a person who leaves the page ends the flow silently. A page whose origin is not one of
   the flow's allowed embed origins hears only `error` (code `origin_not_allowed`). Do
   not wait on any event; the webhook is the result.
7. `embedded.js` and the card's iframe come from the origin of `loaderUri`. If your page sends a
   Content Security Policy, allow that origin in `script-src` and `frame-src`.
8. A bootstrap starts one flow. For a new attempt (after `cancel` or `error`, a page reload,
   or after you removed the card) fetch a new bootstrap, with a new intent where the flow
   uses one; Ver.iD refuses a second flow on the same intent. Ver.iD's Try again and
   reopening the phone drawer stay within the flow.

### `gatewayUri` removed: the issuer names its loader

`createEmbeddedSession` no longer takes `gatewayUri`, and the bootstrap carries
`loaderUri` instead of `gatewayUri`. The issuer now advertises where its embedded loader is
served, as `embedded_loader_uri` in its OAuth server metadata; `createEmbeddedSession` reads
it and hands it to the browser, and `mountVeridEmbeddedComponent` loads exactly that script.
Drop any `gatewayUri` you passed. If you pass the bootstrap to the browser as is, nothing
else changes; if you build it yourself, rename the field. An issuer that does not advertise
`embedded_loader_uri` makes `createEmbeddedSession` throw `InvalidAssertionError`.

### Webhook payload: `intent_id` is `string | null`

A flow started without an intent sends its webhook without `intent_id`. The webhook parser
required a string, so `verifyEmbeddedWebhook` and `finalizeEmbedded` rejected those
deliveries as `invalid_payload`. They are now accepted, and
`EmbeddedWebhookPayload.intent_id` (from `@ver-id/core`, re-exported by
`@ver-id/embedded-node-client`) is `string | null`: `null` when the flow had no intent.
TypeScript code that uses it as a `string` must handle `null`, for example
`payload.intent_id ?? undefined`.

### Finalizing: a failed token exchange can be retried

This applies to every client's finalize, redirect and embedded. The code verifier used
to be removed from the cache before the token exchange, so a retry after a failed
exchange could never succeed. It is now removed only once the exchange succeeds, so a
retry, such as a redelivered webhook after a 5xx, can still finalize. Finalizing a flow
that already succeeded still throws `OperationFailedError`, as before; for webhooks,
check your own stored results for the `state` first and answer a redelivery with a 2xx.

### Intents: `requireExplicitConsent` removed

Ver.iD no longer shows a consent screen, so the option had no effect.
`requireExplicitConsent` is gone from `DisclosureIntentPayload` and
`IssuanceIntentPayload` (`createDisclosureIntent` and `createIssuanceIntent` in every
client) and from the `VerificationIntent` and `IssuanceIntent` types in `@ver-id/core`.
Remove it from your calls; TypeScript reports any that remain.

### `@ver-id/core`: the embedded `postMessage` types removed

The page no longer speaks `postMessage` with the Ver.iD iframe: the loader sends the init
message from the host element's `data-*` attributes, and reports the lifecycle as `verid:`
DOM events. The `ronan:` messages are internal between Ver.iD's iframe and its loader, so
`parseEmbeddedMessage`, `ParseEmbeddedMessageResult`, `EmbeddedMessage`,
`EmbeddedInitMessage`, `EmbeddedInboundMessage` and the `Embedded*Message` types are gone
from `@ver-id/core/embedded` and from the browser client's re-exports.
`@ver-id/embedded-browser-client` no longer depends on `@ver-id/core`.

## The `@ver-id/core` release

| Package | From | To |
| --- | --- | --- |
| `@ver-id/browser-client` | 0.15.2 | 0.16.0 |
| `@ver-id/node-client` | 0.13.2 | 0.14.0 |
| `@ver-id/graphql-client` | 0.11.2 | 0.12.0 |
| `@ver-id/core` | — | new |
| `@ver-id/embedded-browser-client` | — | new |
| `@ver-id/embedded-node-client` | — | new |

### No source changes are required

Every symbol exported by 0.15.2 / 0.13.2 / 0.11.2 is still exported under the same
name. Upgrade with your usual package manager and you are done:

```bash
npm install @ver-id/browser-client@latest
# or
npm install @ver-id/node-client@latest
```

### What changed

The shared core used to be a private workspace library that was compiled into every
published package. Each package therefore shipped its own copy of the same classes,
which meant `instanceof` and TypeScript class identity broke when a value crossed a
package boundary.

Core is now published as `@ver-id/core` and declared as a regular dependency of each
client, so there is exactly one copy at runtime. Your package manager installs it
automatically; you do not need to add it to your own `package.json` unless you import
from it directly.

`FileStorageCacheManager` and `MemoryStorageCacheManager` moved into `@ver-id/core`
so that `@ver-id/node-client` and `@ver-id/embedded-node-client` share one
implementation. `@ver-id/node-client` still re-exports both, so existing imports keep
working:

```ts
// still valid
import { FileStorageCacheManager, MemoryStorageCacheManager } from '@ver-id/node-client';

// also available directly
import { MemoryStorageCacheManager } from '@ver-id/core/cache';
import { FileStorageCacheManager } from '@ver-id/core/cache/node';
```

### If you pinned transitive dependencies

The published packages are no longer self-contained bundles. If you vendor
dependencies, use an offline mirror, or maintain an allowlist of permitted packages,
add `@ver-id/core` to it.

### If you extended the SDK's internals

Only relevant if you subclassed the flow base client rather than using
`VeridDisclosureClient` and friends. `redirectUri` moved off the shared base config
onto each leaf client, and the base now requires subclasses to implement an
`authCodeDeliveryBinding()` method that returns how the authorization code reaches
your app:

```ts
protected override authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding {
  return { kind: 'redirect', redirectUri: this.redirectUri };
}
```

The constructor options for the shipped clients are unchanged — `redirectUri` is
still a required field on `DisclosureClientConfig`, `AuthenticationClientConfig` and
`IssuanceClientConfig`.

### New: embedded mode

Embedded mode runs a flow inside an iframe you host instead of redirecting the user
away. It is opt-in and additive; existing redirect flows are unaffected. It needs two
packages, because secrets must stay on your server:

- `@ver-id/embedded-node-client` — creates the session, verifies the signed webhook,
  and exchanges the authorization code.
- `@ver-id/embedded-browser-client` — mounts the frame and surfaces its lifecycle as
  typed events. It never sees a client secret, a PKCE verifier, or the code.

Embedded mode additionally requires a webhook URL the Ver.iD platform can reach, and
a flow registered with an allowed embed origin. Start with the per-flow guides in
each package: `AUTHENTICATION.md`, `VERIFICATION.md` and `ISSUANCE.md`.

## Earlier breaking changes

### `@ver-id/graphql-client` 0.11.0

Provider was renamed to Handler and Scheme to Trust, per RFC 0010.

- `ProviderEntity` and `SchemeEntity` were removed
- `getProvider` / `getProviders` and `getScheme` / `getSchemes` were removed
- JWT fields were renamed, including `schemeUuid` → `trustUuid` and
  `providerUuid` → `handlerUuid`
- `LocaleEntity.i18n` was removed

### `@ver-id/browser-client` 0.13.0 and `@ver-id/node-client` 0.11.0

JWT payload exports were renamed. This shipped as a `fix:` commit and was not
announced as breaking at the time.

| Before | After |
| --- | --- |
| `AttestedJwtPayload` | `AttestedFlatV1JwtPayload` |
| `assertAttestedJwtPayload` | `assertAttestedFlatV1JwtPayload` |
| `assertIssuanceJwtPayload` | `assertIssuanceFlatV1JwtPayload` |
| `PlainJwtPayload` | removed |
| `assertPlainJwtPayload` | removed |
