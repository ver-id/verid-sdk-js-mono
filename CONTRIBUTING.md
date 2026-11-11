# Contributing to the Ver.iD JS SDK

This repository is a read-only mirror. The SDK is developed inside Ver.iD's internal
monorepo, next to the platform it talks to, and every release pushes the result here:
the code, the guides, the changelogs and the tags. Pull requests opened here are not
merged, but issues are read and answered.

## Reporting a problem

Open an [issue](https://github.com/ver-id/verid-sdk-js-mono/issues) with:

- the package and version (`npm ls @ver-id/node-client`), and your Node.js or browser
  version;
- what you expected and what happened, with the error message or stack trace;
- the smallest code that reproduces it.

Never include client secrets, tokens, webhook signing secrets or personal data. Redact
them from logs before pasting.

## Requesting a change

Open an issue that describes the integration you are building and what the SDK makes
hard or impossible. A concrete use case is worth more than a proposed API: the change
may be small to make on the platform side, which an outside contributor cannot see.

## Pull requests

Code changes are made in the internal monorepo, where the platform and the SDK are
checked together, and this mirror is overwritten on every release. A pull request here
would be lost on the next push, so none are merged. If you have a fix, describe it in an
issue, patch included if you like, and it will be carried over with credit.

## Security

Do not report security problems in an issue. Email [security@ver.id](mailto:security@ver.id).

Participation in this repository is covered by the [code of conduct](CODE_OF_CONDUCT.md).

---

## For Ver.iD developers

The rest of this document is about working on the SDK inside the monorepo.

### Layout

```
sdk/
├── packages/                  # published to npm as @ver-id/*
│   ├── core/                  # shared core, depended on by every client
│   ├── browser-client/
│   ├── node-client/
│   ├── embedded-browser-client/
│   ├── embedded-node-client/
│   └── graphql-client/
└── tsconfig.base.json         # the monorepo's base, with strict mode back on
```

The packages are ordinary workspaces of the monorepo: one lockfile, and the monorepo's
Yarn, Nx, TypeScript, ESLint and Prettier configs.

### Working on a package

Run tasks from the monorepo root:

```bash
yarn nx run @ver-id/core:test
yarn nx run-many -t lint typecheck test build --projects='@ver-id/*'
```

If you change the GraphQL queries in `packages/graphql-client`, regenerate its types from
the monorepo's merged schema. Nothing regenerates them automatically: builds and releases
use the committed files, so a schema change only shows up here when someone runs:

```bash
yarn nx run @ver-id/graphql-client:codegen
```

### Rules

The packages are published code, so a few rules differ from the rest of the monorepo:

- **No monorepo imports.** A package may depend on other SDK packages and on npm
  packages, never on the monorepo's `@ver.id/*` projects. Lint enforces it through the
  `scope:sdk` tag.
- **Declare what you import.** Dependencies are hoisted, so an undeclared import still
  builds here and breaks for every integrator. `@nx/dependency-checks` fails lint on it.
- **Dependency ranges are written for integrators** (`ioredis: ">=5.0.0"`), so `sdk/` is
  exempt from `yarn constraints`.
- **Strict TypeScript**, through `sdk/tsconfig.base.json`.
- **Packages keep their build.** `exports` point at the built `dist/` for integrators and
  carry a `@monorepov2/source` condition for the monorepo's apps (see below).

### Using a package in a monorepo app

Declare it with `workspace:*`, so the app always builds against the SDK code next to it:

```json
"@ver-id/embedded-browser-client": "workspace:*"
```

TypeScript resolves the package's source through the `@monorepov2/source` condition in
the monorepo's base tsconfig; add a project reference to the package's
`tsconfig.lib.json`. A Vite app adds the condition to `resolve.conditions`. Next's
Turbopack cannot be given conditions, so a Next app aliases the package, and the SDK
packages it depends on, to their `src/index.ts` (`turbopack.resolveAlias`, with
`'@ver-id/core/*'` for core's subpaths) and lists them in `transpilePackages`. The
SDK's source imports `./x.js` for `.ts` files, which Turbopack only maps when the app's
`tsconfig.json` says `moduleResolution: nodenext`: keep `tsconfig.json` a solution file
that extends the monorepo's base, with the app's own options in `tsconfig.app.json`
(see `apps/spas/merle` and `apps/playgrounds/verid`).

### Commits and version plans

The mirror gets one generated commit per release, so commit messages stay in the
monorepo. Every file in `sdk/` and every plan message does become public.

Releases are not derived from commits. A change to a package comes with a **version
plan**, a file in `.nx/version-plans/` naming the bump and the changelog entry:

```bash
yarn nx release plan patch --projects=@ver-id/core \
  -m "The file cache keeps the original error as cause when a write fails."
```

```markdown
---
'@ver-id/core': patch
---

The file cache keeps the original error as cause when a write fails.
```

The front matter names each package and its bump; the body is the changelog entry and
the GitHub Release note, so write it for integrators. One plan may name several
packages, and several plans may wait for the same package: the release takes the
highest bump and lists every message. The merge request check (`sdk:plan-check`) fails
when a changed package has no plan; tests, test config and documentation do not need one.

Every package is `0.x`, so the plan says which bump to make:

| Change                                 | While `0.x` | Example             |
| -------------------------------------- | ----------- | ------------------- |
| Breaking for integrators               | `minor`     | `0.15.2` → `0.16.0` |
| New feature, fix, docs worth a release | `patch`     | `0.15.2` → `0.15.3` |

The changelogs are the only record of a release, so a breaking change's message also says
what integrators have to change. Reaching `1.0.0` means a `major` plan.

### Releases

Releases are automatic. When a change to the SDK reaches the monorepo's production
branch, CI releases every package named in a version plan: it versions it, writes its
changelog, tags it, publishes it to npm, mirrors `sdk/` to GitHub and creates the GitHub
Release. Dependents of a released package get a patch bump with an "Updated
Dependencies" changelog entry. Nothing is released by hand, and nothing reaches npm or
the mirror before it is in production. Preview a release from the monorepo root with:

```bash
yarn nx release --dry-run --skip-publish
```

Gotchas:

- **Nothing released.** The change is not in production yet, or no plan file reached
  production with it.
- **A plan for a package that did not change.** It still releases that package, as a
  version bump with your message. Remove the plan if that is not what you meant.
- **New package.** It publishes at whatever version its `package.json` declares, so set
  that deliberately; CI adds `--first-release` for a package without tags.
- **"Already released".** A released plan came back, usually through a squash or
  cherry-pick into production, so the release stops before versioning anything. Delete
  the file it names. A plan that was removed and re-added under the same name is refused
  too; rename it.
- **"Touched projects missing version plans" on a push.** A package changed without a
  plan, usually through a direct push. On main the job fails as a warning and the deploy
  continues. On production the deploy has already run, and nothing is released or
  mirrored. Either way, push a commit adding the plan, so the release includes the change
  and the changelog mentions it.

If a release fails, do not retry the job: it starts again from the old commit, where the
plans still exist. Run a new pipeline on the production branch instead. What it does
depends on how far the failed run got, in this order:

1. **Versioning or the push failed.** Nothing was published. The new pipeline releases
   from the same plans.
2. **The npm publish failed.** The release commit and tags are on production. The new
   pipeline starts from them, finds no plans, and publishes what npm does not have yet.
3. **The mirror failed.** npm has the release. The new pipeline mirrors every tag the
   mirror lacks, even if production has moved on, and creates their Releases.
4. **Only the GitHub Releases failed.** The tags are on the mirror, so the new pipeline
   skips them. Create each missing Release by hand:

   ```bash
   SDK_GITHUB_TOKEN=… node .gitlab/ci/scripts/sdk-github-releases.mjs @ver-id/core@0.3.0
   ```

## License

Contributions are licensed under the project's [MIT License](LICENSE).
