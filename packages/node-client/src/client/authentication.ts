import {
  authenticationFlow,
  type AuthenticationSessionInput,
  type AuthenticationResult,
} from '@ver-id/core';
import { NodeFlowClient, type NodeClientConfig } from './base.js';

/**
 * Node.js authentication client.
 *
 * @public
 */
export class VeridAuthenticationClient extends NodeFlowClient<
  AuthenticationSessionInput,
  AuthenticationResult
> {
  constructor(config: NodeClientConfig) {
    super(config, authenticationFlow);
  }
}
