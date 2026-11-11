import {
  issuanceFlow,
  type IssuanceSessionInput,
  type IssuanceSessionExtra,
  type IssuanceResult,
} from '@ver-id/core';
import { BrowserFlowClient, type BrowserClientConfig } from './base.js';

/**
 * Browser issuance client.
 *
 * @public
 */
export class VeridBrowserIssuanceClient extends BrowserFlowClient<
  IssuanceSessionInput,
  IssuanceResult,
  IssuanceSessionExtra
> {
  constructor(config: BrowserClientConfig) {
    super(config, issuanceFlow);
  }
}
