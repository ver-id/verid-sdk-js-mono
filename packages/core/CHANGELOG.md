## Unreleased

First release. `@ver-id/core` was previously a private workspace library
(`@verid-sdk-js-mono/core`) whose compiled output was inlined into every SDK
package. It is now published as a standalone package and is a shared runtime
dependency of the other clients, so core classes have a single identity across
package boundaries.

### 🚀 Features

- `FlowRedirectBinding` discriminated union and the abstract `redirectBinding()`
  seam on `VeridFlowBaseClient`, allowing redirect and embedded flows to share
  one OAuth provider.
- `@ver-id/core/embedded`: the `ronan:*` postMessage protocol
  (`parseRonanMessage`) and the embedded webhook payload schema
  (`parseEmbeddedWebhookPayload`).
- Cache storage adapters relocated here from `@ver-id/node-client`:
  `MemoryStorageCacheManager` from `@ver-id/core/cache` and
  `FileStorageCacheManager` from `@ver-id/core/cache/node`. Both remain
  re-exported from `@ver-id/node-client`.

See [UPGRADING.md](../../UPGRADING.md) for migration steps.
