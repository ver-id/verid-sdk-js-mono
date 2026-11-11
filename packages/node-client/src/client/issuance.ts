import {
  issuanceFlow,
  type IssuanceSessionInput,
  type IssuanceSessionExtra,
  type IssuanceResult,
} from '@ver-id/core';
import { NodeFlowClient, type NodeClientConfig } from './base.js';

/**
 * Node.js issuance client.
 *
 * @public
 */
export class VeridIssuanceClient extends NodeFlowClient<
  IssuanceSessionInput,
  IssuanceResult,
  IssuanceSessionExtra
> {
  constructor(config: NodeClientConfig) {
    super(config, issuanceFlow);
  }
}
