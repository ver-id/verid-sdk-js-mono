import { VeridEmbeddedSessionImpl, type CreateEmbeddedSessionParams } from './session.js';
import type { VeridEmbeddedSession } from './typed-event-target.js';

/**
 * Creates and mounts an embedded Ver.iD session. Returns synchronously so the
 * caller can attach listeners before the iframe loads; `ronan:init` is posted
 * on the iframe's `load` event with `targetOrigin` pinned to the Ronan origin.
 *
 * The returned session is code-less: `complete` means "start awaiting the
 * backend result" (SSE/poll), not "the result is ready".
 *
 * @public
 */
export function createEmbeddedSession(
  params: CreateEmbeddedSessionParams,
): VeridEmbeddedSession {
  return new VeridEmbeddedSessionImpl(params);
}
