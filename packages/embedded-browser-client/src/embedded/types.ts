/**
 * Error detail for embedded component error events.
 *
 * @public
 */
export interface VeridEmbeddedError {
  /**
   * `loader_unavailable` when `embedded.js` could not be loaded, so there is no card.
   * Otherwise Ver.iD's own code, for logging and support: the set is not fixed, so do not
   * branch on it. The card shows the person what went wrong.
   */
  error: string;
  /** A readable explanation, when there is one; for logs, not for the person. */
  error_description?: string;
}

/**
 * Maps embedded event names to their typed `CustomEvent` shapes.
 *
 * After `open()` comes either `ready` or `error` (the flow could not start). After `ready`, at
 * most one of `complete`, `error` and `cancel` follows, and possibly none: a person who leaves
 * the page ends the flow silently. A page whose origin is not one of the flow's allowed embed
 * origins hears only `error` (code `origin_not_allowed`).
 *
 * @public
 */
export interface VeridEmbeddedEventMap {
  /** The flow started after {@link VeridEmbeddedComponent.open} and the card is shown. */
  ready: CustomEvent<void>;
  /** The embedded flow finished; carries no result. */
  complete: CustomEvent<void>;
  /** An error ended the embedded flow. */
  error: CustomEvent<VeridEmbeddedError>;
  /** The user cancelled the embedded flow. */
  cancel: CustomEvent<void>;
}

/**
 * A mounted Ver.iD embedded component: the host element plus its strongly typed lifecycle
 * events.
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

  /** The element Ver.iD's loader renders the card into, inside the mount's `container`. */
  readonly host: HTMLElement;
  /**
   * Start the flow: call it from your own button, your own step, or straight after mounting
   * to start on page load. On a phone, calling it again reopens the drawer the person
   * closed. Safe to call before Ver.iD's loader has loaded.
   */
  open(): void;
  /** Detach the event listeners and remove the host element, and with it the iframe. */
  destroy(): void;
}
