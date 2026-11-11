import {
  authenticationFlow,
  type AuthenticationSessionInput,
  type AuthenticationResult,
} from '@ver-id/core';
import { BrowserFlowClient, type BrowserClientConfig } from './base.js';

/**
 * Browser authentication client.
 *
 * @public
 */
export class VeridBrowserAuthenticationClient extends BrowserFlowClient<
  AuthenticationSessionInput,
  AuthenticationResult
> {
  constructor(config: BrowserClientConfig) {
    super(config, authenticationFlow);
  }
}
