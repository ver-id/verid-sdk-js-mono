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
  The page no longer speaks postMessage with the Ver.iD iframe; Ver.iD's loader script handles that and reports the lifecycle as verid: DOM events. parseEmbeddedMessage, ParseEmbeddedMessageResult, EmbeddedMessage, EmbeddedInitMessage, EmbeddedInboundMessage and the Embedded*Message types are removed from @ver-id/core/embedded. See UPGRADING.md.

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