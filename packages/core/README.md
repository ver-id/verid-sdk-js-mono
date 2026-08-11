# Ver.iD Core

[![npm version](https://badge.fury.io/js/@ver-id%2Fcore.svg)](https://www.npmjs.com/package/@ver-id/core)
[![Build Status](https://github.com/ver-id/verid-sdk-js-mono/workflows/CI/badge.svg)](https://github.com/ver-id/verid-sdk-js-mono/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Shared building blocks for the Ver.iD JS SDK. Every other `@ver-id/*` client package depends on
this one, which is why it is published separately instead of being bundled into each of them:
one copy of the flow logic, one set of error classes, one place to patch.

> Most integrations should install a platform client — [`@ver-id/browser-client`](https://www.npmjs.com/package/@ver-id/browser-client),
> [`@ver-id/node-client`](https://www.npmjs.com/package/@ver-id/node-client),
> [`@ver-id/embedded-browser-client`](https://www.npmjs.com/package/@ver-id/embedded-browser-client) or
> [`@ver-id/embedded-node-client`](https://www.npmjs.com/package/@ver-id/embedded-node-client) — which
> re-export everything from here that you normally need. Install this package directly only when
> you are building your own client on top of the Ver.iD protocol.

## Installation

```bash
npm install @ver-id/core
```

## What's inside

| Entry point         | Contents                                                                                  |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `@ver-id/core`      | Everything below, re-exported.                                                            |
| `@ver-id/core/flow` | Abstract `VeridAuthenticationClient`, `VeridDisclosureClient`, `VeridIssuanceClient` bases. |
| `@ver-id/core/oauth`| `VeridOAuthClient`, `OAuth4WebApiProvider`, redirect binding helpers.                       |
| `@ver-id/core/cache`| `BaseCacheManager` and the `ICacheManager` contract shared by every store.                  |
| `@ver-id/core/embedded` | The `ronan:*` postMessage union and the signed embedded webhook payload parser.         |
| `@ver-id/core/error`| `VeridError` and its typed subclasses.                                                     |
| `@ver-id/core/types`| JWT payloads, OAuth types, flow response types.                                            |
| `@ver-id/core/utils`| `assert*` helpers used to validate untrusted input.                                        |

```ts
import { VeridOAuthClient } from '@ver-id/core/oauth';
import { InvalidArgumentError } from '@ver-id/core/error';
```

## Stability

The abstract flow clients are an extension point for the Ver.iD client packages. They follow
semver, but the surface is aimed at SDK authors rather than application code — prefer a platform
client when one fits.

## License

MIT
