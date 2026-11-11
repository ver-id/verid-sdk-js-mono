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
 * A mounted Ver.iD embedded component: the host element plus its lifecycle listeners.
 *
 * After `open()` comes either `onReady` or `onError` (the flow could not start). After `onReady`,
 * at most one of `onComplete`, `onError` and `onCancel` follows, and possibly none: a person who
 * leaves the page ends the flow silently. A page whose origin is not one of the flow's allowed
 * embed origins hears only `onError`: `origin_not_allowed`, or the error that stopped the flow
 * before its origin was checked.
 *
 * @public
 */
export interface VeridEmbeddedComponent {
  /**
   * Runs `listener` when the flow has started and the card is shown. Attach listeners before
   * `open()`: an event that already fired is not replayed. This applies to every `on*` method.
   *
   * @returns A function that removes the listener.
   */
  onReady(listener: () => void): () => void;
  /**
   * Runs `listener` when the flow finished. It carries no result: fetch that from your backend.
   *
   * @returns A function that removes the listener.
   */
  onComplete(listener: () => void): () => void;
  /**
   * Runs `listener` when an error ended the flow.
   *
   * @returns A function that removes the listener.
   */
  onError(listener: (error: VeridEmbeddedError) => void): () => void;
  /**
   * Runs `listener` when the user cancelled the flow.
   *
   * @returns A function that removes the listener.
   */
  onCancel(listener: () => void): () => void;

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
