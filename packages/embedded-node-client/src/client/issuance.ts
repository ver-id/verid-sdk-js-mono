import {
  issuanceFlow,
  type IssuanceSessionInput,
  type IssuanceSessionExtra,
  type IssuanceResult,
} from '@ver-id/core';
import { EmbeddedFlowClient } from './base.js';
import type { EmbeddedClientConfig } from './types.js';

/**
 * Embedded issuance client.
 *
 * @public
 */
export class VeridEmbeddedIssuanceClient extends EmbeddedFlowClient<
  IssuanceSessionInput,
  IssuanceResult,
  IssuanceSessionExtra
> {
  constructor(config: EmbeddedClientConfig) {
    super(config, issuanceFlow);
  }
}
