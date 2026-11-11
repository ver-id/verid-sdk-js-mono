## 0.4.0 (2026-11-11)

### 🚀 Features

- The SDK is now developed and released from Ver.iD's internal repository, and the GitHub repository is a read-only mirror of it. Package names, npm releases and changelogs stay the same.
- Breaking: every embedded client now has two methods, `createSession` and `finishSession`, which replace the `createEmbeddedSession`, `finalizeEmbedded` and intent methods and the `verifyEmbeddedWebhook` function.
  - Config: `clientSecret`, `webhookUri`, `webhookSecret` and `cacheManager` are required and sit at the top level. `options.cacheManager`, the `secret` parameter and the `clientAuth` parameter are gone, and there is no default file cache.
  - `createSession(input)` creates the intent itself and returns `{ sessionContext, state }` (issuance adds `issuanceRunUuid`). Pass `sessionContext` unchanged to `mountVeridEmbeddedComponent`, and store `state` with the user's record to match the webhook to them.
  - `finishSession({ rawBody, headers })` takes the webhook body exactly as received and the request's headers, as a Fetch `Headers` or Node's header object. It checks the signature before reading the body. It returns `{ kind: 'completed', state, result }`, where `result` is `{ format, payload, rawToken }` (`format: 'unknown'` adds the token's `typ` for a token type this version does not know), or `{ kind: 'unknown', type, raw }` for an event type this version does not know. Answer an unknown event with a 2xx. A missing or wrong signature throws as before. A failure after the signature matched throws `SessionFinishError`, with the session's `state` and the original error as `cause`, so you can report the failure to the waiting user or recognise a redelivery.
  - `OperationFailedError` and `TokenGrantError` keep the original error as `cause`, so `SessionFinishError.cause` carries the whole chain.
  - `RedisCacheManager` and `DynamoDBCacheManager` are exported here too. Use one when the webhook can reach a different instance from the one that created the session.
  - Issuance takes `expirationDuration` and `credentialExpirationDurations` (in seconds) to override the flow's credential validity.
  - A bad `issuerUri` throws `InvalidArgumentError`, like every other config check, instead of `InvalidAssertionError`.
  - Each client discovers the issuer's metadata once and reuses it for 10 minutes, and keeps the signing keys, which refresh when a token carries an unknown key id. Before, every `createSession` and `finishSession` fetched the metadata two or three times.
  - `DynamoDBCacheManager` throws `OperationFailedError`, instead of `InvalidArgumentError`, when `@aws-sdk/lib-dynamodb` is not installed.
  - Token payload checks are tolerant: ids, names, and the credential, company and NIN types are checked as strings, address parts are optional, and the enum value lists are open, so a value added by the platform no longer fails verification.
  - Removed exports: `verifyEmbeddedWebhook`, `embeddedWebhookRejectionError`, `parseEmbeddedWebhookPayload`, `EmbeddedWebhookVerification`, `EmbeddedWebhookRejectionReason`, `VerifyEmbeddedWebhookParams`, `EmbeddedWebhookPayload`, `ParseEmbeddedWebhookResult`, `EmbeddedSessionParams`, `EmbeddedSessionBootstrap`, `EmbeddedIssuanceSessionParams`, `EmbeddedIssuanceSessionBootstrap`, `FinalizeEmbeddedParams`, every `assert*` helper, `AuthenticationResponse`, `DisclosureResponse`, `IssuanceResponse`, `ClientAuth`, `Jwt` and `UnknownError`.
  - New exports: `EmbeddedFinishSessionParams`, `EmbeddedWebhookHeaders`, `VeridEmbeddedSession`, `VeridEmbeddedOutcome`, `VeridEmbeddedUnknownEvent`, `SessionFinishError`, `VeridSessionInput`, `VeridTokenResult`, `VeridUnknownTokenResult`, the `*SessionInput` and `*Result` types of each flow, `IssuanceSessionExtra`, `RedisCacheManager`, `DynamoDBCacheManager` and their config and client types, `CacheManagerOptions`, `OutputCredential`, `OutputAttribute`, `AttestedFlatV1JwtPayload`, `IssuanceFlatV1JwtPayload`, and the value lists `OutputCredentialType`, `OpenIdJwtCompanyIdentifierType`, `OpenIdJwtCompanyType` and `OpenIdJwtNINIdentifierType`.

- Ver.iD now enforces a flow's client secret, so check your integration against these platform changes, which apply to every SDK version.
  - The token endpoint requires the client secret for every flow that has one; PKCE alone no longer authenticates the client. The server metadata lists `client_secret_basic`, `client_secret_post` and `none`.
  - A disclosure flow with a client secret requires an intent created with that secret. An intent created with the secret is bound to the PKCE challenge sent with it, so the authorization request must present the same challenge.
  - Embedded mode runs only for flows with a client secret, and every embedded session needs an intent. Ver.iD Studio activates an embedded flow only when it has an active client secret and an active webhook secret.

### 🧱 Updated Dependencies

- Updated @ver-id/core to 0.3.0

### ❤️ Thank You

- kuldeep

## 0.3.0 (2026-10-30)

### 🚀 Features

- ⚠️  remove requireExplicitConsent from intents ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))
- ⚠️  **@ver-id/embedded-node-client:** take the loader URI from the issuer instead of gatewayUri ([92ff1ac](https://github.com/ver-id/verid-sdk-js-mono/commit/92ff1ac))

### 🩹 Fixes

- **@ver-id/core:** decode issuance tokens, keep intent errors, require UUID challenge ([934998e](https://github.com/ver-id/verid-sdk-js-mono/commit/934998e))

### ⚠️  Breaking Changes

- remove requireExplicitConsent from intents  ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))
  Ver.iD no longer shows a consent screen, so requireExplicitConsent had no effect. It is removed from DisclosureIntentPayload and IssuanceIntentPayload (createDisclosureIntent and createIssuanceIntent in every client) and from the VerificationIntent and IssuanceIntent types in @ver-id/core. Remove it from your calls; TypeScript reports any that remain.
- **@ver-id/embedded-node-client:** take the loader URI from the issuer instead of gatewayUri  ([92ff1ac](https://github.com/ver-id/verid-sdk-js-mono/commit/92ff1ac))
  createEmbeddedSession no longer takes gatewayUri, and the bootstrap carries loaderUri instead of gatewayUri. The issuer advertises its embedded loader as embedded_loader_uri in its OAuth server metadata; an issuer that does not advertise it makes createEmbeddedSession throw InvalidAssertionError. Drop any gatewayUri you passed; if you build the browser bootstrap yourself, rename the field. See the [migration notes for this release](https://github.com/ver-id/verid-sdk-js-mono/blob/%40ver-id/embedded-node-client%400.3.0/UPGRADING.md).

### 🧱 Updated Dependencies

- Updated @ver-id/core to 0.2.0

### ❤️ Thank You

- kuldeep