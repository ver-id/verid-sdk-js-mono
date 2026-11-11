import { disclosureFlow, type DisclosureSessionInput, type DisclosureResult } from '@ver-id/core';
import { BrowserFlowClient, type BrowserClientConfig } from './base.js';

/**
 * Browser disclosure client.
 *
 * @public
 */
export class VeridBrowserDisclosureClient extends BrowserFlowClient<
  DisclosureSessionInput,
  DisclosureResult
> {
  constructor(config: BrowserClientConfig) {
    super(config, disclosureFlow);
  }
}
