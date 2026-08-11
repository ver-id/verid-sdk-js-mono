/**
 * Error detail for embedded component error events.
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
  /** The embedded flow is ready to display. */
  ready: CustomEvent<void>;
  /** The embedded flow finished; carries no result. */
  complete: CustomEvent<void>;
  /** An error occurred inside the embedded flow. */
  error: CustomEvent<VeridEmbeddedError>;
  /** The user cancelled the embedded flow. */
  cancel: CustomEvent<void>;
}

/**
 * A mounted Ver.iD embedded component: the iframe plus its strongly typed lifecycle events.
 *
 * @public
 */
export interface VeridEmbeddedComponent extends EventTarget {
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

  /** The iframe element the component drives. */
  readonly iframe: HTMLIFrameElement;
  /** Detach the message listener and remove the iframe if the SDK created it. */
  destroy(): void;
}
