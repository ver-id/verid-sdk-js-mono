import { VeridEmbeddedSessionImpl, type CreateEmbeddedSessionParams } from './session.js';
import type { VeridEmbeddedSession } from './typed-event-target.js';

/**
 * Creates and mounts an embedded Ver.iD session inside an iframe.
 *
 * @public
 */
export function createEmbeddedSession(
  params: CreateEmbeddedSessionParams,
): VeridEmbeddedSession {
  return new VeridEmbeddedSessionImpl(params);
}
