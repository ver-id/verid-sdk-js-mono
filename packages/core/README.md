# Ver.iD Core

[![npm version](https://badge.fury.io/js/@ver-id%2Fcore.svg)](https://www.npmjs.com/package/@ver-id/core)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> [!IMPORTANT]
> **This package is an internal dependency of the Ver.iD JS SDK — do intended to be installed directly.**

### What's inside

| Entry point               | Contents                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `@ver-id/core`            | Everything below, re-exported.                                                                                 |
| `@ver-id/core/flow`       | Abstract `VeridAuthenticationClient`, `VeridDisclosureClient`, `VeridIssuanceClient` bases.                     |
| `@ver-id/core/oauth`      | `VeridOAuthClient`, `OAuth4WebApiProvider`, authorization code delivery bindings.                               |
| `@ver-id/core/cache`      | `BaseCacheManager`, the `ICacheManager` contract shared by every store, and `MemoryStorageCacheManager`.        |
| `@ver-id/core/cache/node` | Node-only stores: `FileStorageCacheManager`. Kept out of `@ver-id/core/cache` so browser bundles never see `fs`. |
| `@ver-id/core/embedded`   | The embedded postMessage union and the signed embedded webhook payload parser.                                  |
| `@ver-id/core/error`      | `VeridError` and its typed subclasses.                                                                          |
| `@ver-id/core/types`      | JWT payloads, OAuth types, flow response types.                                                                 |
| `@ver-id/core/utils`      | `assert*` helpers used to validate untrusted input.                                                             |

```ts
import { VeridOAuthClient } from '@ver-id/core/oauth';
import { InvalidArgumentError } from '@ver-id/core/error';
```

### Stability

The abstract flow clients are an extension point for the Ver.iD client packages. They follow
semver, but the surface is aimed at SDK authors rather than application code — prefer a platform
client when one fits.

## License

MIT
