## Unreleased

### 📦 Packaging

- The shared core is now published as a separate `@ver-id/core` package instead of
  being compiled into this bundle. It is declared as a regular dependency, so a
  normal install pulls it in automatically.
- `FileStorageCacheManager` and `MemoryStorageCacheManager` now live in
  `@ver-id/core` so this package and `@ver-id/embedded-node-client` share one
  implementation. Both are still re-exported from `@ver-id/node-client` under the
  same names.
- Because core is no longer duplicated per package, `instanceof` checks and
  TypeScript class identity now hold across SDK package boundaries.

### 🚀 Features

- Export the `FlowAuthCodeDeliveryBinding` type, which selects how an authorization
  code is delivered (redirect or embedded).

**No source changes are required.** Every export available in 0.13.2 is still
exported under the same name. See [UPGRADING.md](../../UPGRADING.md) for details.

## 0.13.2 (2026-08-07)

### 🩹 Fixes

- read cache entries from the store and harmonize cache managers

## 0.13.1 (2026-05-27)

Version bump only.

## 0.13.0 (2026-04-13)

Version bump only.

## 0.12.0 (2026-03-22)

### 🚀 Features

- add credentialBatchUuid to intent response and issuance token types

## 0.11.0 (2026-03-11)

### ⚠️ Breaking changes

This release renamed public JWT payload exports. The change was not marked as
breaking at the time and shipped under a `fix:` commit, so it is recorded here
retroactively:

- `AttestedJwtPayload` → `AttestedFlatV1JwtPayload`
- `assertAttestedJwtPayload` → `assertAttestedFlatV1JwtPayload`
- `assertIssuanceJwtPayload` → `assertIssuanceFlatV1JwtPayload`
- `PlainJwtPayload` and `assertPlainJwtPayload` were removed
- `assertIssuanceV1JwtPayload` was added

### 🩹 Fixes

- bump to node 24 in CI and update README
- updated docs, updated composables and updated CI debug
- updates to lint, test, typecheck, build and yarnrc

## 0.10.2 (2026-02-20)

### 🩹 Fixes

- update readme

## 0.10.1 (2026-02-20)

### 🩹 Fixes

- formatting

## 0.10.0 (2026-02-20)

### 🚀 Features

- update readme

## 0.9.1 (2026-02-20)

Version bump only.

## 0.9.0 (2026-02-20)

### 🚀 Features

- publish npm package

## 0.8.0 (2026-02-09)

### 🚀 Features

- add redis and dynamodb cache store support

## 0.7.1 (2026-01-20)

### 🩹 Fixes

- dont initialize the filestoragecachemanager

## 0.7.0 (2026-01-20)

### 🚀 Features

- memory cache manager for quick demos in node-client

## 0.6.1 (2026-01-19)

### 🩹 Fixes

- bundle everything in the final package

## 0.6.0 (2026-01-19)

### 🚀 Features

- add issuance token type

## 0.5.0 (2026-01-18)

### 🚀 Features

- update issuance payload as per latest changes

### 📖 Documentation

- update README

## 0.4.1 (2026-01-18)

Version bump only.

## 0.4.0 (2026-01-16)

### 🚀 Features

- force client credential for node server intent

## 0.3.1 (2025-11-07)

Version bump only.

## 0.3.0 (2025-11-06)

### 🚀 Features

- code refactoring

## 0.2.0 (2025-11-05)

### 🚀 Features

- add intent implementation and issuance client

## 0.1.0 (2025-10-28)

### 🚀 Features

- add node client
