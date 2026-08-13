## 0.11.2 (2026-08-07)

Version bump only.

## 0.11.1 (2026-05-27)

Version bump only.

## 0.11.0 (2026-04-13)

### ⚠️  Breaking Changes

Renamed Provider to Handler and Scheme to Trust per RFC 0010:

- `ProviderEntity` and `SchemeEntity` were removed
- `getProvider` / `getProviders` and `getScheme` / `getSchemes` were removed
- JWT field renames, including `schemeUuid` → `trustUuid` and
  `providerUuid` → `handlerUuid`
- `LocaleEntity.i18n` was removed

### 🚀 Features

- remove Handler from GraphQL layer, add join table entities

## 0.10.0 (2026-03-22)

Version bump only.

## 0.9.0 (2026-03-11)

### 🩹 Fixes

- bump packages and fix typecheck (`@apollo/client` 4.0.7 → 4.1.6, graphql-codegen, `graphql`)
- updates to lint, test, typecheck, build and yarnrc

## 0.8.2 (2026-02-20)

### 🩹 Fixes

- update readme

## 0.8.1 (2026-02-20)

### 🩹 Fixes

- formatting

## 0.8.0 (2026-02-20)

### 🚀 Features

- update readme

## 0.7.1 (2026-02-20)

Version bump only.

## 0.7.0 (2026-02-20)

### 🚀 Features

- publish npm package

## 0.6.4 (2026-01-19)

### 🩹 Fixes

- bundle everything in the final package

## 0.6.3 (2026-01-18)

Version bump only.

## 0.6.2 (2026-01-12)

### 🩹 Fixes

- intent endpoint

## 0.6.1 (2025-11-07)

### 🩹 Fixes

- include content type for intent

## 0.6.0 (2025-11-06)

### 🚀 Features

- code refactoring

## 0.5.0 (2025-11-05)

Version bump only.

## 0.4.0 (2025-10-28)

### 🚀 Features

- add new node sample app

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

### 🩹 Fixes

- use explicit types
- use correct types

## 0.1.1 (2025-10-22)

### 🩹 Fixes

- update deps
- add missing deps

## 0.1.0 (2025-10-22)

### 🚀 Features

- add libs and packages
