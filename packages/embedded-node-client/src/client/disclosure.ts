import { disclosureFlow, type DisclosureSessionInput, type DisclosureResult } from '@ver-id/core';
import { EmbeddedFlowClient } from './base.js';
import type { EmbeddedClientConfig } from './types.js';

/**
 * Embedded disclosure client.
 *
 * @public
 */
export class VeridEmbeddedDisclosureClient extends EmbeddedFlowClient<
  DisclosureSessionInput,
  DisclosureResult
> {
  constructor(config: EmbeddedClientConfig) {
    super(config, disclosureFlow);
  }
}
