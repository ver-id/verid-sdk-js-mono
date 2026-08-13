# Upgrading

Migration notes for the Ver.iD JS SDK. Each package also keeps its own
`CHANGELOG.md`.

## To the current release

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
