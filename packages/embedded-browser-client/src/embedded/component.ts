import type { VeridEmbeddedError, VeridEmbeddedComponent } from './types.js';

/**
 * Parameters for {@link mountVeridEmbeddedComponent}.
 *
 * @public
 */
export interface VeridEmbeddedComponentParams {
  /** Where the Ver.iD card renders: the host element is added inside it. */
  container: HTMLElement;
  /** The `sessionContext` from the backend's `createSession`, unchanged. */
  sessionContext: string;
}

/** The event the loader starts the flow on; on a phone, a later one reopens the drawer. */
const OPEN_EVENT = 'verid:open';

/** The loader's lifecycle events on the host element, and the component's names for them. */
const LIFECYCLE_EVENTS: ReadonlyMap<string, string> = new Map([
  ['verid:ready', 'ready'],
  ['verid:complete', 'complete'],
  ['verid:error', 'error'],
  ['verid:cancel', 'cancel'],
]);

/** Each loader script this client added, settled once it has run. */
const loaderScripts = new WeakMap<HTMLScriptElement, Promise<void>>();

/**
 * Adds Ver.iD's loader to the page, once. It reads the host element, preloads the iframe,
 * and starts the flow on {@link OPEN_EVENT}. Settles when the loader has run, which is when
 * it listens; a script the page added itself is taken as already run. A script that failed to
 * load is removed, so a later mount retries.
 */
function loadEmbeddedScript(src: string): Promise<void> {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
  if (existing !== null) {
    return loaderScripts.get(existing) ?? Promise.resolve();
  }
  const script = document.createElement('script');
  script.src = src;
  const loaded = new Promise<void>((resolve, reject) => {
    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () => {
      // Removed, so the next mount adds the loader again instead of reusing this failure.
      script.remove();
      reject(new Error(`Could not load ${src}`));
    });
  });
  loaderScripts.set(script, loaded);
  document.head.appendChild(script);
  return loaded;
}

const INVALID_SESSION_CONTEXT =
  'Invalid sessionContext: pass the value from createSession unchanged.';

/** The fields inside a `sessionContext`. Only `loaderUri` is read here; the loader reads the rest. */
type SessionContextFields = { loaderUri: string } & Record<string, unknown>;

/** Unpacks the backend's `sessionContext`. */
function decodeSessionContext(sessionContext: string): SessionContextFields {
  let fields: unknown;
  try {
    const base64 = sessionContext.replace(/-/g, '+').replace(/_/g, '/');
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    fields = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    throw new TypeError(INVALID_SESSION_CONTEXT);
  }
  if (typeof fields !== 'object' || fields === null || !('loaderUri' in fields)) {
    throw new TypeError(INVALID_SESSION_CONTEXT);
  }
  return fields as SessionContextFields;
}

/**
 * The element the loader renders into. Writes every field as `data-*`, so a new field needs no
 * release of this package.
 */
function createHost({
  loaderUri: _loaderUri,
  v: _v,
  ...fields
}: SessionContextFields): HTMLElement {
  const host = document.createElement('div');
  host.setAttribute('data-verid-embed', '');
  for (const [name, value] of Object.entries(fields)) {
    if (typeof value === 'string') {
      host.dataset[name] = value;
    }
  }
  return host;
}

/**
 * Hands the flow to Ver.iD's loader through the host element and passes the loader's `verid:`
 * lifecycle events on to the listeners attached through the `on*` methods.
 */
export class VeridEmbeddedComponentImpl implements VeridEmbeddedComponent {
  readonly host: HTMLElement;

  readonly #events = new EventTarget();
  readonly #loaderReady: Promise<void>;
  readonly #onLifecycle = (source: Event): void => {
    const type = LIFECYCLE_EVENTS.get(source.type);
    if (type !== undefined) {
      this.#events.dispatchEvent(new CustomEvent(type, { detail: (source as CustomEvent).detail }));
    }
  };
  #destroyed = false;

  constructor(params: VeridEmbeddedComponentParams) {
    const fields = decodeSessionContext(params.sessionContext);
    this.host = createHost(fields);
    for (const loaderEvent of LIFECYCLE_EVENTS.keys()) {
      this.host.addEventListener(loaderEvent, this.#onLifecycle);
    }
    // In the page before the loader runs, so the loader preloads the iframe.
    params.container.appendChild(this.host);
    this.#loaderReady = loadEmbeddedScript(fields.loaderUri);
    // Handled here so a failure before `open()` is no unhandled rejection; `open()` reports it.
    this.#loaderReady.catch(() => undefined);
  }

  onReady(listener: () => void): () => void {
    return this.#listen('ready', () => listener());
  }

  onComplete(listener: () => void): () => void {
    return this.#listen('complete', () => listener());
  }

  onError(listener: (error: VeridEmbeddedError) => void): () => void {
    return this.#listen('error', (event) => listener((event as CustomEvent).detail));
  }

  onCancel(listener: () => void): () => void {
    return this.#listen('cancel', () => listener());
  }

  // Each call adds its own wrapper: the listener gets no event argument, and the same function
  // added twice runs twice and is removed by its own unsubscribe only.
  #listen(type: string, listener: (event: Event) => void): () => void {
    this.#events.addEventListener(type, listener);
    return () => this.#events.removeEventListener(type, listener);
  }

  open(): void {
    this.#loaderReady.then(
      () => {
        if (!this.#destroyed) {
          this.host.dispatchEvent(new Event(OPEN_EVENT, { bubbles: true }));
        }
      },
      (error: Error) => {
        if (!this.#destroyed) {
          const detail: VeridEmbeddedError = {
            error: 'loader_unavailable',
            error_description: error.message,
          };
          this.#events.dispatchEvent(new CustomEvent('error', { detail }));
        }
      },
    );
  }

  destroy(): void {
    if (this.#destroyed) {
      return;
    }
    this.#destroyed = true;
    for (const loaderEvent of LIFECYCLE_EVENTS.keys()) {
      this.host.removeEventListener(loaderEvent, this.#onLifecycle);
    }
    this.host.remove();
  }
}
