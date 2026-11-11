import {
  authenticationFlow,
  type AuthenticationSessionInput,
  type AuthenticationResult,
} from '@ver-id/core';
import { EmbeddedFlowClient } from './base.js';
import type { EmbeddedClientConfig } from './types.js';

/**
 * Embedded authentication client.
 *
 * @public
 */
export class VeridEmbeddedAuthenticationClient extends EmbeddedFlowClient<
  AuthenticationSessionInput,
  AuthenticationResult
> {
  constructor(config: EmbeddedClientConfig) {
    super(config, authenticationFlow);
  }
}
