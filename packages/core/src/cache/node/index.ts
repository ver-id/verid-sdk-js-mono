/**
 * Node-only cache managers. Kept behind the `@ver-id/core/cache/node` subpath so the
 * browser-safe `@ver-id/core/cache` entry never pulls in `fs` and friends.
 */
export * from './file-storage.js';
