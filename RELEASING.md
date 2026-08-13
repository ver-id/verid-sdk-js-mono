# Releasing

Pushing to `main` **is** the release. The `build-and-publish` job in
[`ci.yml`](.github/workflows/ci.yml) versions, changelogs, tags and publishes every
affected package under `packages/*`. Nothing is released manually, so everything has
to be right before you merge.

## Before you merge

- [ ] Commit messages follow the rules in [CONTRIBUTING.md](CONTRIBUTING.md#commit-guidelines).
      The two that fail silently: **scopes must be exact project names**
      (`@ver-id/node-client`, not `node-client`) or omitted, and **only `feat`, `fix`
      and `perf` show up in changelogs**.
- [ ] Breaking changes use `!` or a `BREAKING CHANGE:` body block. That body is copied
      verbatim into the changelog and GitHub Release, so write it for integrators.
- [ ] [UPGRADING.md](UPGRADING.md) covers any migration steps.
- [ ] Dry run looks right (below).

## Dry run

```bash
# versions only
yarn nx release version --dry-run

# full preview including the rendered changelog entry
yarn nx release --dry-run --skip-publish --projects=@ver-id/node-client
```

Packages with no release tag yet **error** unless you add
`--first-release --projects=<them>`. CI detects this on its own.

## Version bumps

Every package is `0.x`, and `adjustSemverBumpsForZeroMajorVersion` keeps it that way:

| Commit | While `0.x` |
| --- | --- |
| `feat!:` / `BREAKING CHANGE:` | minor (`0.15.2` → `0.16.0`) |
| `feat:` | patch |
| `fix:` | patch |
| everything else | none |

Reaching `1.0.0` means editing `package.json` by hand. Packages version
independently; releasing `@ver-id/core` gives its dependents a patch bump.

## Gotchas

- **Nothing released** — no `packages/*` changed. Changes under `apps/` alone never
  release; editing a root file like `nx.json` releases everything.
- **Patch when you expected more** — almost always a scope that isn't an exact
  project name, which also makes Nx skip the breaking check.
- **New package failed** — needs `--first-release`. It publishes at whatever version
  its `package.json` declares, so set that deliberately.
