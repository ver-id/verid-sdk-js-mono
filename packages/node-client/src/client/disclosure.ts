import { disclosureFlow, type DisclosureSessionInput, type DisclosureResult } from '@ver-id/core';
import { NodeFlowClient, type NodeClientConfig } from './base.js';

/**
 * Node.js disclosure client.
 *
 * @public
 */
export class VeridDisclosureClient extends NodeFlowClient<
  DisclosureSessionInput,
  DisclosureResult
> {
  constructor(config: NodeClientConfig) {
    super(config, disclosureFlow);
  }
}
