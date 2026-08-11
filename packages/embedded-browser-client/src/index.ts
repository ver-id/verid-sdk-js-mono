export { mountEmbeddedVeridComponent } from './embedded/factory.js';
export type {
  MountEmbeddedVeridComponentParams,
  EmbeddedIframeOptions,
} from './embedded/component.js';
export type {
  VeridEmbeddedComponent,
  VeridEmbeddedEventMap,
  VeridEmbeddedError,
} from './embedded/types.js';

export { parseEmbeddedMessage } from '@ver-id/core';
export type {
  EmbeddedMessage,
  EmbeddedInitMessage,
  EmbeddedInboundMessage,
  EmbeddedReadyMessage,
  EmbeddedCompleteMessage,
  EmbeddedErrorMessage,
  EmbeddedCancelMessage,
  ParseEmbeddedMessageResult,
} from '@ver-id/core';
