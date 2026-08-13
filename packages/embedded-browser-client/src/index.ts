export { mountVeridEmbeddedComponent } from './embedded/factory.js';
export type {
  VeridEmbeddedComponentParams,
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
