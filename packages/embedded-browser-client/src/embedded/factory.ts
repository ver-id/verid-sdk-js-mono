import { VeridEmbeddedComponentImpl, type VeridEmbeddedComponentParams } from './component.js';
import type { VeridEmbeddedComponent } from './types.js';

/**
 * Mounts an embedded Ver.iD component in `container`, from the backend's `sessionContext`.
 *
 * Returns synchronously, so listeners can be attached before anything happens. Ver.iD's loader
 * (`embedded.js`) is added to the page once and preloads the Ver.iD iframe, hidden, inside the
 * host element. Nothing starts until `open()`: call it from your own button, your own step, or
 * straight after mounting.
 *
 * @param params - The `sessionContext` from the backend, plus the container to render into.
 * @returns The mounted component. It never receives the authorization code, so `onComplete`
 *   means "wait for the backend's result", not "the result is ready".
 * @example
 * ```typescript
 * // <button id="continue">Continue</button>
 * // <div id="verid-embed"></div>
 * const { sessionContext } = await fetch('/api/verid/start', { method: 'POST' }).then((r) => r.json());
 * const veridComponent = mountVeridEmbeddedComponent({
 *   container: document.getElementById('verid-embed')!,
 *   sessionContext,
 * });
 *
 * document.getElementById('continue')!.addEventListener('click', () => veridComponent.open());
 * veridComponent.onReady(() => setStarted(true));
 * veridComponent.onComplete(() => veridComponent.destroy());
 * veridComponent.onError((error) => logError(error));
 * ```
 *
 * @public
 */
export function mountVeridEmbeddedComponent(
  params: VeridEmbeddedComponentParams,
): VeridEmbeddedComponent {
  return new VeridEmbeddedComponentImpl(params);
}
