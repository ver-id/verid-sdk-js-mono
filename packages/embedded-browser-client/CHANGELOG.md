## Unreleased

First release. Provides the browser half of embedded mode: the SDK mounts the
Ver.iD frame and surfaces its lifecycle as typed events, while all secrets stay
on your backend.

### 🚀 Features

- `createEmbeddedSession()` mounts or adopts the Ver.iD iframe, pins the expected
  origin, and posts `ronan:init` on load.
- `VeridEmbeddedSession`, an `EventTarget` subclass that re-dispatches inbound
  `ronan:*` messages as typed `CustomEvent`s, with the event name narrowing
  `event.detail`.
- Holds no client secret, no PKCE verifier, and never receives the authorization
  code. The wire protocol is shared with `@ver-id/core` via `parseRonanMessage`.

See the [README](./README.md) and the per-flow guides
([AUTHENTICATION.md](./AUTHENTICATION.md), [VERIFICATION.md](./VERIFICATION.md),
[ISSUANCE.md](./ISSUANCE.md)) to get started.
