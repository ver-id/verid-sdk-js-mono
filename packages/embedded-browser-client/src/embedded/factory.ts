import {
  VeridEmbeddedComponentImpl,
  type VeridEmbeddedComponentParams,
} from './component.js';
import type { VeridEmbeddedComponent } from './types.js';

/**
 * Mounts an embedded Ver.iD component: the host element Ver.iD's loader renders the card
 * into, plus typed lifecycle events.
 *
 * Returns synchronously so listeners can be attached before anything happens. The loader
 * (`embedded.js`, at `params.loaderUri`) is added to the page once. It
 * preloads the Ver.iD iframe, hidden, inside the host element. Nothing starts until you call
 * `open()`: from your own button, your own step, or straight after mounting. The loader
 * reports the flow's lifecycle as `verid:` events on the host element, which the component
 * re-dispatches as its own typed events.
 *
 * @param params - The embedded-session bootstrap from the backend, plus the container to
 *   render into.
 * @returns The mounted component: its host element, typed lifecycle events, `open()` and
 *   `destroy()`. It never receives the authorization code, so `complete` means "start
 *   awaiting the backend result" rather than "the result is ready".
 * @example
 * ```typescript
 * // <button id="continue">Continue</button>
 * // <div id="verid-embed"></div>
 * const bootstrap = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
 * const veridComponent = mountVeridEmbeddedComponent({
 *   container: document.getElementById('verid-embed')!,
 *   ...bootstrap,
 * });
 *
 * document.getElementById('continue')!.addEventListener('click', () => veridComponent.open());
 * veridComponent.addEventListener('ready', () => setStarted(true));
 * veridComponent.addEventListener('complete', () => veridComponent.destroy());
 * veridComponent.addEventListener('error', (event) => logError(event.detail));
 * ```
 *
 * @public
 */
export function mountVeridEmbeddedComponent(
  params: VeridEmbeddedComponentParams,
): VeridEmbeddedComponent {
  return new VeridEmbeddedComponentImpl(params);
}
