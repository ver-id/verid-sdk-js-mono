## Unreleased

First release. Provides the backend half of embedded mode: session bootstrap,
signed webhook verification, and token exchange without a redirect URI.

### 🚀 Features

- `EmbeddedDisclosureClient`, `EmbeddedAuthenticationClient` and
  `EmbeddedIssuanceClient`, each extending the core flow clients with an embedded
  auth-code delivery binding.
- `createEmbeddedSession()` performs PKCE and emits a browser bootstrap that
  contains no `code_verifier`, plus a `finalizeEmbedded()` convenience method.
- `verifyEmbeddedWebhook()` parses the shared webhook payload schema and checks
  the HMAC-SHA256 `x-signature-256` header using a timing-safe comparison.
- Re-exports the shared embedded protocol from `@ver-id/core` alongside the
  common errors, assert helpers and cache managers.

See the [README](./README.md) and the per-flow guides
([AUTHENTICATION.md](./AUTHENTICATION.md), [VERIFICATION.md](./VERIFICATION.md),
[ISSUANCE.md](./ISSUANCE.md)) to get started.
