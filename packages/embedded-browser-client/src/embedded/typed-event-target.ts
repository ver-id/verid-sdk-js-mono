/**
 * Error detail for embedded session error events.
 *
 * @public
 */
export interface VeridEmbeddedError {
  error: string;
  error_description?: string;
}

/**
 * Maps embedded event names to their typed `CustomEvent` shapes.
 *
 * @public
 */
export interface VeridEmbeddedEventMap {
  /** Ronan is ready (ronan:ready). */
  ready: CustomEvent<void>;
  /** Ronan finished (ronan:complete). */
  complete: CustomEvent<void>;
  /** An error occurred inside the session. */
  error: CustomEvent<VeridEmbeddedError>;
  /** The user cancelled (ronan:cancel). */
  cancel: CustomEvent<void>;
}

/**
 * Strongly typed embedded session interface.
 *
 * @public
 */
export interface VeridEmbeddedSession extends EventTarget {
  addEventListener<K extends keyof VeridEmbeddedEventMap>(
    type: K,
    listener: (event: VeridEmbeddedEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;

  removeEventListener<K extends keyof VeridEmbeddedEventMap>(
    type: K,
    listener: (event: VeridEmbeddedEventMap[K]) => void,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;

  /** The iframe element the session drives. */
  readonly iframe: HTMLIFrameElement;
  /** Detach the message listener and remove the iframe if the SDK created it. */
  destroy(): void;
}
