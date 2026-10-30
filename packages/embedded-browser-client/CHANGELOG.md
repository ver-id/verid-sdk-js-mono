## 0.3.0 (2026-10-30)

### 🚀 Features

- ⚠️  **@ver-id/embedded-browser-client:** mount through Ver.iD's embedded.js loader ([cb77337](https://github.com/ver-id/verid-sdk-js-mono/commit/cb77337))

### ⚠️  Breaking Changes

- **@ver-id/embedded-browser-client:** mount through Ver.iD's embedded.js loader  ([cb77337](https://github.com/ver-id/verid-sdk-js-mono/commit/cb77337))
  mountVeridEmbeddedComponent now drives the loader script at the bootstrap's loaderUri instead of creating the iframe itself. Call component.open() to start the flow; it no longer starts on mount. container must be an HTMLElement (no own <iframe>). The iframe option and component.iframe are gone; component.host is the element the loader renders into. ready fires once the flow has started after open(). Lifecycle arrives as verid: DOM events, re-dispatched as ready/complete/error/cancel; invalid_message errors no longer occur, and loader_unavailable signals that embedded.js could not be loaded. Allow the loaderUri origin in script-src and frame-src. The package no longer depends on @ver-id/core. See UPGRADING.md for the full migration.

### ❤️ Thank You

- kuldeep