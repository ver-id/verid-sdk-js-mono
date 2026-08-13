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
