import express, { type RequestHandler } from 'express';

/**
 * Captures the request body as an unparsed string.
 *
 * The embedded webhook signature is an HMAC over the **exact bytes** of the
 * body, so re-parsing/re-serializing JSON would break verification. The
 * wildcard `type` ensures the body is captured regardless of content-type.
 *
 * **Must be registered before `express.json()`** — whichever body parser runs
 * first wins the request stream; the JSON parser safely skips already-parsed requests.
 *
 * @see `EMBEDDED_WEBHOOK_PATHS` in `../config/index.js`
 */
export const rawBodyText: RequestHandler = express.text({ type: '*/*' });
