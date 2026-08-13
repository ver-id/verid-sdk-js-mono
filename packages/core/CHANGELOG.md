## 0.1.0 (2026-08-13)

### 🚀 Features

- ⚠️  publish @ver-id/core as a standalone package ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))

### ⚠️  Breaking Changes

- publish @ver-id/core as a standalone package  ([b9b6a1c](https://github.com/ver-id/verid-sdk-js-mono/commit/b9b6a1c))
  The published packages are no longer self-contained bundles.
  @ver-id/core is now a separate runtime dependency, declared by each client and
  installed automatically like any other transitive dependency.
  No source changes are required. Every export is still available under the same
  name from the same package, and constructor options are unchanged. This is
  marked breaking because the published artifact's dependency footprint changed,
  which matters if you vendor dependencies, install from an offline mirror, or
  maintain an allowlist of permitted packages: @ver-id/core now has to be
  permitted alongside the client you install.

### ❤️ Thank You

- Maurits van Riezen