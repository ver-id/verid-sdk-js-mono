/**
 * Error surfaced by an embedded session — either a `ronan:error` from the
 * pinned Ronan origin or a malformed message from that origin.
 *
 * @public
 */
export interface VeridEmbeddedError {
  error: string;
  error_description?: string;
}

/**
 * Maps each embedded event name to the concrete `CustomEvent` it dispatches.
 * The event name narrows `event.detail` at compile time.
 *
 * @public
 */
export interface VeridEmbeddedEventMap {
  /** Ronan is ready (ronan:ready). */
  ready: CustomEvent<void>;
  /** Ronan finished (ronan:complete) — lifecycle only; the result comes from the backend. */
  complete: CustomEvent<void>;
  /** An error occurred, or a malformed message arrived from the pinned origin. */
  error: CustomEvent<VeridEmbeddedError>;
  /** The user cancelled (ronan:cancel). */
  cancel: CustomEvent<void>;
}

/**
 * A strongly typed embedded session over `EventTarget`. The event name
 * constrains the listener's `event.detail` shape with no casts.
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

  /** The iframe element the session drives (created or adopted). */
  readonly iframe: HTMLIFrameElement;
  /** Detach the message listener and remove the iframe if the SDK created it. */
  destroy(): void;
}
