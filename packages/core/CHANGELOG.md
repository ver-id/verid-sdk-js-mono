## 0.3.0 (2026-11-11)

### 🚀 Features

- The SDK is now developed and released from Ver.iD's internal repository, and the GitHub repository is a read-only mirror of it. Package names, npm releases and changelogs stay the same.
- Breaking: the shared client code is rebuilt around `createSession` and `finishSession`. Integrators should use the client packages; `@ver-id/core` is what they share.
  - `VeridAuthenticationClient`, `VeridDisclosureClient` and `VeridIssuanceClient` are removed, along with their `*ClientConfig`, `*IntentPayload`, `*RequestParams` and `*FinalizeParams` types and the `FlowBasePkceParams`, `FlowBasePkceResult` and `FlowBaseFinalizeParams` types. `VeridFlowBaseClient` and `FlowBaseClientConfig` are no longer exported from `@ver-id/core/flow`; import them, with the new `VeridHostedFlowClient` and `FlowHostedClientConfig`, from `@ver-id/core`. Both clients take a flow definition: `authenticationFlow`, `disclosureFlow` or `issuanceFlow`, and their type parameters are `<TInput, TResult, TSessionExtra>`, where `TSessionExtra` is optional.
  - The `@ver-id/core/embedded` entry point, `parseEmbeddedWebhookPayload`, `EmbeddedWebhookPayload` and `ParseEmbeddedWebhookResult` are removed, also from `@ver-id/core`: webhook handling now lives in `@ver-id/embedded-node-client`.
  - New: `SessionFinishError`, the session and result types (`VeridSessionInput`, `VeridHostedSession`, `VeridTokenResult`, `VeridUnknownTokenResult`, and each flow's `*SessionInput` and `*Result`), the extension types `VeridFlowDefinition`, `VeridTokenFormat`, `VeridSessionArgs` and `FlowOpenedSession`, and `RedisCacheManager` and `DynamoDBCacheManager` under `@ver-id/core/cache/node`. `@aws-sdk/lib-dynamodb` is an optional peer dependency, needed only for the DynamoDB store.
  - Removed unused exports: `convertEnumToValues`, `convertEnumToKeys`, `IssuanceIntent`, `VerificationIntent`, `assertSignatureV1JwtPayload` and `JwtVerificationOptions`. `VeridOAuthClient.generateAuthorizationUrl` requires `scope`, `state` and `intentId`, always uses S256 and no longer takes `codeChallengeMethod` or `additionalParams`; `decode` no longer takes verification options. `IOAuthProvider.validateAuthResponse` returns `URLSearchParams`.
  - `OperationFailedError` and `TokenGrantError` keep the original error as `cause`; `VeridError` takes an optional `cause` for subclasses.
  - Token payload checks are tolerant: ids, names, and the credential, company and NIN types are checked as strings, address parts are optional, and the four enum value lists are open unions.


### 🩹 Fixes

- The file cache keeps the original error as `cause` when a write fails.

### ❤️ Thank You

- kuldeep

## 0.2.0 (2026-10-30)

### 🚀 Features

- ⚠️  remove requireExplicitConsent from intents ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))
- ⚠️  **@ver-id/core:** remove the embedded postMessage types ([6b69cab](https://github.com/ver-id/verid-sdk-js-mono/commit/6b69cab))
- **@ver-id/core:** read the embedded loader URI from issuer metadata ([edaa9b3](https://github.com/ver-id/verid-sdk-js-mono/commit/edaa9b3))

### 🩹 Fixes

- **@ver-id/core:** decode issuance tokens, keep intent errors, require UUID challenge ([934998e](https://github.com/ver-id/verid-sdk-js-mono/commit/934998e))
- **@ver-id/core:** remove the code verifier only after a successful token exchange ([bd74e96](https://github.com/ver-id/verid-sdk-js-mono/commit/bd74e96))

### ⚠️  Breaking Changes

- remove requireExplicitConsent from intents  ([e820655](https://github.com/ver-id/verid-sdk-js-mono/commit/e820655))
  Ver.iD no longer shows a consent screen, so requireExplicitConsent had no effect. It is removed from DisclosureIntentPayload and IssuanceIntentPayload (createDisclosureIntent and createIssuanceIntent in every client) and from the VerificationIntent and IssuanceIntent types in @ver-id/core. Remove it from your calls; TypeScript reports any that remain.
- **@ver-id/core:** remove the embedded postMessage types  ([6b69cab](https://github.com/ver-id/verid-sdk-js-mono/commit/6b69cab))
  The page no longer speaks postMessage with the Ver.iD iframe; Ver.iD's loader script handles that and reports the lifecycle as verid: DOM events. parseEmbeddedMessage, ParseEmbeddedMessageResult, EmbeddedMessage, EmbeddedInitMessage, EmbeddedInboundMessage and the Embedded*Message types are removed from @ver-id/core/embedded. See the [migration notes for this release](https://github.com/ver-id/verid-sdk-js-mono/blob/%40ver-id/core%400.2.0/UPGRADING.md).

### ❤️ Thank You

- kuldeep

## 0.1.0 (2026-08-13)

### 🚀 Features

- ⚠️  publish @ver-id/core as a standalone package ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))

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