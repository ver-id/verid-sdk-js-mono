import express, { type RequestHandler } from 'express';

/**
 * Captures the request body as an unparsed string.
 *
 * The embedded webhook is signed with `x-signature-256: sha256=<hex>`, an HMAC
 * computed over the **exact bytes** of the request body. Parsing the JSON and
 * re-serializing it changes those bytes (key order, whitespace, unicode
 * escaping), so the signature would never verify.
 *
 * The wildcard `type` is deliberate: it matches whatever content type the
 * platform sends, so the body is always captured regardless of the header.
 *
 * **This must be registered before the global `express.json()`.** Body parsers
 * consume the request stream exactly once; whichever runs first wins. Running
 * this first is safe for the JSON parser, which skips any request that has
 * already been parsed.
 *
 * @see `EMBEDDED_WEBHOOK_PATHS` in `../config/index.js`
 */
export const rawBodyText: RequestHandler = express.text({ type: '*/*' });
