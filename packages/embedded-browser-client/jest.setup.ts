// jsdom does not expose TextEncoder/TextDecoder on the global scope, but core's
// crypto dependencies (jose) require them. Polyfill from Node's `util`.
import { TextEncoder, TextDecoder } from 'node:util';

Object.assign(globalThis, {
  TextEncoder: globalThis.TextEncoder ?? TextEncoder,
  TextDecoder: globalThis.TextDecoder ?? TextDecoder,
});
