## 0.18.0 (2026-11-11)

### 🚀 Features

- The SDK is now developed and released from Ver.iD's internal repository, and the GitHub repository is a read-only mirror of it. Package names, npm releases and changelogs stay the same.
- Breaking: the clients are renamed `VeridBrowserAuthenticationClient`, `VeridBrowserDisclosureClient` and `VeridBrowserIssuanceClient`, and each has two methods, `createSession` and `finishSession`, which replace the intent, URL, PKCE, `finalize` and `decode` methods.
  - `createSession(input)` creates the PKCE pair and the intent and returns `{ url, state }` (issuance adds `issuanceRunUuid`). Send the browser to `url`. It always creates an intent, so a misconfigured flow fails here instead of after the wallet step. Authentication takes `{ scope }`, disclosure takes an optional `challenge` and `brandUuid`, and issuance takes exactly one of `data` or `mapping`.
  - `finishSession()` reads the callback from `window.location.href` (or takes `{ callbackUrl }`), exchanges the code, verifies the token and returns `{ format, payload, rawToken }`. `format` comes from the token's `typ`: `openid`, `disclosure_v1`, `disclosure_flat_v1`, `issuance_v1`, `issuance_flat_v1`, or `unknown` for a token type this version does not know, with the token's `typ` header as `typ` for logging.
  - Config: `cacheManager` sits at the top level and defaults to `SessionStorageCacheManager`; `options.cacheManager` is gone. A browser client works only for authentication and disclosure flows without a client secret, and for demo issuance flows without one. Any other flow, including every production issuance flow, needs a backend and `@ver-id/node-client`.
  - Issuance takes `expirationDuration` and `credentialExpirationDurations` (in seconds) to override the flow's credential validity.
  - A failure after the code exchange, such as a failed key fetch, no longer loses the result: a retry of `finishSession` with the same callback verifies the token it already received. Only a callback with the same code gets that token, so knowing the `state` is not enough.
  - A cancelled flow (`?error=access_denied`) throws `AuthorizationResponseError` even when the session's cache entry has expired.
  - `callbackUrl` accepts URL objects that are not `URL` subclasses, such as Next.js's `req.nextUrl`.
  - `createSession` throws `InvalidResponseError` when the intent response has no `intent_id`.
  - `OperationFailedError` and `TokenGrantError` keep the original error as `cause`, so you can tell a key-fetch timeout from a bad signature.
  - A bad `issuerUri` throws `InvalidArgumentError`, like every other config check, instead of `InvalidAssertionError`.
  - Each client discovers the issuer's metadata once and reuses it for 10 minutes, and keeps the signing keys, which refresh when a token carries an unknown key id. Before, every `createSession` and `finishSession` fetched the metadata two or three times.
  - Token payload checks are tolerant: ids, names, and the credential, company and NIN types are checked as strings, address parts are optional, and the enum value lists are open, so a value added by the platform no longer fails verification.
  - Removed exports: `VeridAuthenticationClient`, `VeridDisclosureClient`, `VeridIssuanceClient` (renamed, see above), `WebStorageCacheManager`, `VeridOAuthClient`, `OAuth4WebApiProvider`, `OAuthClientConfig`, `OAuthRequestParams`, `OAuthAuthorizationCodeGrantParams`, `OAuthClientCredentialsGrantParams`, `IOAuthProvider`, `FlowAuthCodeDeliveryBinding`, every `assert*` helper, `AuthenticationResponse`, `DisclosureResponse`, `IssuanceResponse`, `GrantResponse`, `AuthorizationServer`, `ClientAuth`, `ClientConfig`, `Jwt`, `JwtType`, `JwtVerificationOptions`, `SignatureV1JwtPayload`, `BaseCacheManager`, `CacheEntry`, `UnknownError`, and the per-flow `*ClientConfig`, `Browser*ClientConfig`, `*IntentPayload`, `*RequestParams` and `*FinalizeParams` types.
  - New exports: `BrowserClientConfig`, `BrowserFinishSessionParams`, `VeridHostedSession`, `VeridSessionInput`, `VeridTokenResult`, `VeridUnknownTokenResult`, the `*SessionInput` and `*Result` types of each flow, and `IssuanceSessionExtra`. `OutputCredentialType` is now exported as a value too, and so are the new value lists `OpenIdJwtCompanyIdentifierType`, `OpenIdJwtCompanyType` and `OpenIdJwtNINIdentifierType`.

- Ver.iD now enforces a flow's client secret, so check your integration against these platform changes, which apply to every SDK version.
  - The token endpoint requires the client secret for every flow that has one; PKCE alone no longer authenticates the client. The server metadata lists `client_secret_basic`, `client_secret_post` and `none`.
  - A disclosure flow with a client secret requires an intent created with that secret. An intent created with the secret is bound to the PKCE challenge sent with it, so the authorization request must present the same challenge.
  - Embedded mode runs only for flows with a client secret, and every embedded session needs an intent. Ver.iD Studio activates an embedded flow only when it has an active client secret and an active webhook secret.

### 🧱 Updated Dependencies

- Updated @ver-id/core to 0.3.0

### ❤️ Thank You

- kuldeep

## 0.17.0 (2026-10-30)

### 🚀 Features

- ⚠️  remove requireExplicitConsent from intents ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))

### 🩹 Fixes

- **@ver-id/core:** decode issuance tokens, keep intent errors, require UUID challenge ([934998e](https://github.com/ver-id/verid-sdk-js-mono/commit/934998e))

### ⚠️  Breaking Changes

- remove requireExplicitConsent from intents  ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))
  Ver.iD no longer shows a consent screen, so requireExplicitConsent had no effect. It is removed from DisclosureIntentPayload and IssuanceIntentPayload (createDisclosureIntent and createIssuanceIntent in every client) and from the VerificationIntent and IssuanceIntent types in @ver-id/core. Remove it from your calls; TypeScript reports any that remain.

### 🧱 Updated Dependencies

- Updated @ver-id/core to 0.2.0

### ❤️ Thank You

- kuldeep

## 0.16.0 (2026-08-13)

### 🚀 Features

- ⚠️  publish @ver-id/core as a standalone package ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))
- **@ver-id/browser-client,@ver-id/node-client:** absorb redirectUri locally ([917f203](https://github.com/ver-id/verid-sdk-js-mono/commit/917f203))

### ⚠️  Breaking Changes

- publish @ver-id/core as a standalone package  ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))
  The published packages are no longer self-contained bundles.
  @ver-id/core is now a separate runtime dependency, declared by each client and
  installed automatically like any other transitive dependency.
  No source changes are required. Every export is still available under the same
  name from the same package, and constructor options are unchanged. This is
  marked breaking because the published artifact's dependency footprint changed,
  which matters if you vendor dependencies, install from an offline mirror, or
  maintain an allowlist of permitted packages: @ver-id/core now has to be
  permitted alongside the client you install.

### ❤️ Thank You

- Maurits van Riezen

## 0.15.3 (2026-08-13)

### 🚀 Features

- ⚠️  publish @ver-id/core as a standalone package ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))
- **@ver-id/browser-client,@ver-id/node-client:** absorb redirectUri locally ([917f203](https://github.com/ver-id/verid-sdk-js-mono/commit/917f203))

### ⚠️  Breaking Changes

- publish @ver-id/core as a standalone package  ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))
  The published packages are no longer self-contained bundles.
  @ver-id/core is now a separate runtime dependency, declared by each client and
  installed automatically like any other transitive dependency.
  No source changes are required. Every export is still available under the same
  name from the same package, and constructor options are unchanged. This is
  marked breaking because the published artifact's dependency footprint changed,
  which matters if you vendor dependencies, install from an offline mirror, or
  maintain an allowlist of permitted packages: @ver-id/core now has to be
  permitted alongside the client you install.

### 🧱 Updated Dependencies

- Updated @ver-id/core to 0.1.0

### ❤️ Thank You

- Maurits van Riezen

## 0.15.2 (2026-08-07)

### 🩹 Fixes

- read cache entries from the store and harmonize cache managers

## 0.15.1 (2026-05-27)

Version bump only.

## 0.15.0 (2026-04-13)

Version bump only.

## 0.14.0 (2026-03-22)

Version bump only.

## 0.13.0 (2026-03-11)

### ⚠️  Breaking Changes

This release renamed public JWT payload exports. The change was not marked as
breaking at the time and shipped under a `fix:` commit, so it is recorded here
retroactively:

- `AttestedJwtPayload` → `AttestedFlatV1JwtPayload`
- `assertAttestedJwtPayload` → `assertAttestedFlatV1JwtPayload`
- `assertIssuanceJwtPayload` → `assertIssuanceFlatV1JwtPayload`
- `PlainJwtPayload` and `assertPlainJwtPayload` were removed
- `assertIssuanceV1JwtPayload` was added

### 🩹 Fixes

- updated docs, updated composables and updated CI debug
- updates to lint, test, typecheck, build and yarnrc

## 0.12.2 (2026-02-20)

### 🩹 Fixes

- update readme

## 0.12.1 (2026-02-20)

### 🩹 Fixes

- formatting

## 0.12.0 (2026-02-20)

### 🚀 Features

- update readme

## 0.11.1 (2026-02-20)

Version bump only.

## 0.11.0 (2026-02-20)

### 🚀 Features

- publish npm package

## 0.10.0 (2026-02-09)

### 🚀 Features

- add redis and dynamodb cache store support

## 0.9.1 (2026-01-19)

### 🩹 Fixes

- bundle everything in the final package

## 0.9.0 (2026-01-19)

### 🚀 Features

- add issuance token type

## 0.8.0 (2026-01-18)

### 🚀 Features

- update issuance payload as per latest changes

## 0.7.1 (2026-01-18)

Version bump only.

## 0.7.0 (2026-01-16)

### 🚀 Features

- force client credential for node server intent

## 0.6.1 (2025-11-07)

### 🩹 Fixes

- include content type for intent

## 0.6.0 (2025-11-06)

### 🚀 Features

- code refactoring

## 0.5.0 (2025-11-05)

### 🚀 Features

- add intent implementation and issuance client

## 0.4.0 (2025-10-28)

### 🚀 Features

- add node client

## 0.3.2 (2025-10-23)

Version bump only.

## 0.3.1 (2025-10-23)

Version bump only.

## 0.3.0 (2025-10-23)

### 🚀 Features

- add sample vue app

## 0.2.2 (2025-10-23)

### 🩹 Fixes

- update readme

## 0.2.1 (2025-10-23)

Version bump only.

## 0.2.0 (2025-10-23)

### 🚀 Features

- bundle core types

## 0.1.5 (2025-10-22)

Version bump only.

## 0.1.4 (2025-10-22)

Version bump only.

## 0.1.3 (2025-10-22)

Version bump only.

## 0.1.2 (2025-10-22)

Version bump only.

## 0.1.1 (2025-10-22)

### 🩹 Fixes

- update decode param
- update assertString usage

## 0.1.0 (2025-10-22)

### 🚀 Features

- add libs and packages
- update clients
- update assertString
