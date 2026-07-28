import { EMBEDDED_CONFIG } from '../config/index.js';

/**
 * The state of an embedded flow, as seen by the browser polling for a result.
 *
 * - `pending` — the session was started but the webhook has not arrived yet.
 * - `ready` — the webhook arrived, was verified, and the code was exchanged.
 * - `error` — the webhook arrived but verification or the token exchange failed.
 */
export type EmbeddedResultEntry =
  | { status: 'pending' }
  | { status: 'ready'; token: unknown; intentId: string | null }
  | { status: 'error'; error: string };

interface StoredEntry {
  entry: EmbeddedResultEntry;
  expiresAt: number;
}

const SWEEP_INTERVAL_MS = 60 * 1000;

/**
 * In-memory, `state`-keyed store for embedded flow results.
 *
 * Embedded mode has no redirect and no callback route: the authorization code
 * is delivered to this server on a webhook, out of band from the browser. The
 * browser only learns the flow finished (`ronan:complete`) and must then ask
 * this server for the outcome. `state` is the join key between the browser
 * session, the cached PKCE verifier, and the webhook payload.
 *
 * This deliberately does **not** live on `clientService`: that singleton resets
 * its stored callback URL on every client initialization, which would destroy
 * an in-flight embedded session.
 *
 * **Demo-grade only.** A single process holds all entries, so a multi-instance
 * deployment would fail whenever the webhook and the poll landed on different
 * instances. Production should use a shared store (Redis) and should authorize
 * the lookup against the end user's own session rather than a bare `state`.
 */
class EmbeddedResultStore {
  readonly #entries = new Map<string, StoredEntry>();

  constructor() {
    // Bound the memory of a long-running dev server. `unref()` keeps this timer
    // from holding the process open.
    const timer = setInterval(() => this.#sweep(), SWEEP_INTERVAL_MS);
    timer.unref();
  }

  /**
   * Registers a freshly started session so polls for it report `pending`
   * instead of being indistinguishable from an unknown `state`.
   */
  createPending(state: string): void {
    this.#set(state, { status: 'pending' });
  }

  /**
   * Records a successfully finalized flow.
   *
   * Upserts rather than requiring a prior {@link createPending}, so a webhook
   * that arrives after a server restart is still delivered to the browser.
   */
  resolve(state: string, token: unknown, intentId: string | null = null): void {
    this.#set(state, { status: 'ready', token, intentId });
  }

  /**
   * Records a failed webhook (bad signature, malformed payload, or a failed
   * token exchange) so the browser can stop polling and show the reason.
   */
  reject(state: string, error: string): void {
    this.#set(state, { status: 'error', error });
  }

  /** Reads an entry without removing it. Returns `null` when unknown or expired. */
  get(state: string): EmbeddedResultEntry | null {
    const stored = this.#entries.get(state);
    if (!stored) {
      return null;
    }
    if (stored.expiresAt <= Date.now()) {
      this.#entries.delete(state);
      return null;
    }
    return stored.entry;
  }

  /**
   * Reads an entry and removes it if it is terminal (`ready` or `error`).
   *
   * Preferred over {@link get} for the polling endpoint: results are one-shot,
   * so a token is not left sitting in memory after the browser has read it.
   * `pending` entries are left in place so polling can continue.
   */
  consume(state: string): EmbeddedResultEntry | null {
    const entry = this.get(state);
    if (entry && entry.status !== 'pending') {
      this.#entries.delete(state);
    }
    return entry;
  }

  /** Drops an entry, e.g. when the user restarts the demo flow. */
  remove(state: string): void {
    this.#entries.delete(state);
  }

  /** Number of live entries. Useful for debugging the demo. */
  get size(): number {
    this.#sweep();
    return this.#entries.size;
  }

  #set(state: string, entry: EmbeddedResultEntry): void {
    this.#entries.set(state, {
      entry,
      expiresAt: Date.now() + EMBEDDED_CONFIG.resultTtlMs,
    });
  }

  #sweep(): void {
    const now = Date.now();
    for (const [state, stored] of this.#entries) {
      if (stored.expiresAt <= now) {
        this.#entries.delete(state);
      }
    }
  }
}

/** Process-wide singleton, matching the convention of `clientService`. */
export const embeddedResultStore = new EmbeddedResultStore();
