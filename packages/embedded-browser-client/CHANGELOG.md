## 0.4.0 (2026-11-11)

### 🚀 Features

- The SDK is now developed and released from Ver.iD's internal repository, and the GitHub repository is a read-only mirror of it. Package names, npm releases and changelogs stay the same.
- Breaking: `mountVeridEmbeddedComponent` takes `{ container, sessionContext }`, with `sessionContext` exactly as your backend's `createSession` returned it, and the component's lifecycle is now `onReady`, `onComplete`, `onError` and `onCancel`.
  - Each `on*` method returns a function that removes that listener. `onError` passes the error itself, `{ error, error_description? }`, not a `CustomEvent`. A loader that failed to load is reported through `onError` as `loader_unavailable`.
  - The component is no longer an `EventTarget`: `addEventListener` and `removeEventListener` are gone. `host` still fires the `verid:` DOM events for code that listens on the element.
  - Removed export: `VeridEmbeddedEventMap`.

### ❤️ Thank You

- kuldeep

## 0.3.0 (2026-10-30)

### 🚀 Features

- ⚠️  **@ver-id/embedded-browser-client:** mount through Ver.iD's embedded.js loader ([cb77337](https://github.com/ver-id/verid-sdk-js-mono/commit/cb77337))

### ⚠️  Breaking Changes

- **@ver-id/embedded-browser-client:** mount through Ver.iD's embedded.js loader  ([cb77337](https://github.com/ver-id/verid-sdk-js-mono/commit/cb77337))
  mountVeridEmbeddedComponent now drives the loader script at the bootstrap's loaderUri instead of creating the iframe itself. Call component.open() to start the flow; it no longer starts on mount. container must be an HTMLElement (no own <iframe>). The iframe option and component.iframe are gone; component.host is the element the loader renders into. ready fires once the flow has started after open(). Lifecycle arrives as verid: DOM events, re-dispatched as ready/complete/error/cancel; invalid_message errors no longer occur, and loader_unavailable signals that embedded.js could not be loaded. Allow the loaderUri origin in script-src and frame-src. The package no longer depends on @ver-id/core. See the [full migration for this release](https://github.com/ver-id/verid-sdk-js-mono/blob/%40ver-id/embedded-browser-client%400.3.0/UPGRADING.md).

### ❤️ Thank You

- kuldeep