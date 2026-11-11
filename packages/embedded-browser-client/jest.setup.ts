// jsdom does not expose TextDecoder on the global scope, but decoding the sessionContext needs
// it. Polyfill from Node's `util`.
import { TextDecoder } from 'node:util';

Object.assign(globalThis, { TextDecoder: globalThis.TextDecoder ?? TextDecoder });
