# Releasing

Releases are **fully automated**. There is no manual "cut a release" step: every push
to `main` runs the `build-and-publish` job in
[`.github/workflows/ci.yml`](.github/workflows/ci.yml), which versions, changelogs,
tags, publishes and creates GitHub Releases for whichever packages `nx affected`
reports as changed.

That means the work happens **before** you merge. A merged commit with a malformed
message cannot be fixed after the fact without rewriting published history.

```
merge to main
  └─ nx affected --projects="packages/*"   → which packages changed?
      ├─ no tags for a package?            → nx release --first-release
      └─ otherwise                         → nx release
          ├─ derive version from conventional commits
          ├─ write CHANGELOG.md
          ├─ commit "chore(release): publish" + tag
          ├─ publish to npm            (primary)
          ├─ create GitHub Release
          └─ publish to GitHub Packages (secondary, non-blocking)
```

Only `packages/*` are released. Changes confined to `apps/` never trigger a release.

## 1. Before you merge

- [ ] **Every commit subject is a conventional commit.** A subject that does not match
      `type(scope)?!?: description` parses as `__INVALID__` and is dropped from both
      versioning and the changelog. `renames`, `Fix comments` and `Update yarn.lock`
      all contribute nothing.

- [ ] **Scopes are exact Nx project names, or omitted entirely.** This is the easiest
      thing to get wrong and it fails silently. Nx compares the scope against project
      names; a scope that does not match is treated as unrelated to the project, and
      the bump is **demoted to a patch with the breaking flag ignored**.

      | Write this | Not this |
      | --- | --- |
      | `feat(@ver-id/node-client): …` | `feat(node-client): …` |
      | `feat(@ver-id/core): …` | `feat(core): …` |
      | `feat(@ver-id/browser-client,@ver-id/node-client): …` | `feat(browser-client,node-client): …` |
      | `feat: …` (no scope — applies to every package the commit touches) | `feat(sdk): …` |

      Valid scopes are exactly: `@ver-id/browser-client`, `@ver-id/node-client`,
      `@ver-id/graphql-client`, `@ver-id/core`, `@ver-id/embedded-browser-client`,
      `@ver-id/embedded-node-client`. Confirm with `yarn nx show projects`.

- [ ] **Breaking changes are marked in a form Nx recognises**: a `!` before the colon
      (`feat(@ver-id/core)!: …`) or a `BREAKING CHANGE:` block in the commit body.
      Prose such as `[Breaking Change]` in the subject does nothing.

- [ ] **The `BREAKING CHANGE:` body reads well to an integrator.** It is copied
      verbatim into `CHANGELOG.md` and the GitHub Release. State what breaks and who
      must act; if no source changes are required, say so explicitly.

- [ ] **Anything integrators must see is a `feat`, `fix` or `perf`.** Those are the
      only visible types. `refactor`, `docs`, `chore`, `ci`, `test`, `build`, `style`
      and `revert` are hidden from changelogs by default, so a user-facing change
      committed as `refactor:` will be released invisibly.

- [ ] **`UPGRADING.md` is updated** if the release needs migration steps.

## 2. Dry-run the release

Never merge a breaking or first release without checking what Nx will actually do:

```bash
# what version will each package get?
yarn nx release version --dry-run

# full preview, including the rendered changelog entry
yarn nx release --dry-run --skip-publish --projects=@ver-id/node-client
```

Confirm:

- [ ] The version bump matches intent (see the table in §5).
- [ ] The rendered changelog entry contains the commits you expect, under the right
      headings.
- [ ] Breaking changes appear under `### ⚠️  Breaking Changes`.

> A local `nx release version --dry-run` **errors** for packages that have no release
> tag yet, because `fallbackCurrentVersionResolver` is not configured. Add
> `--first-release --projects=<those packages>` to preview them. CI handles this
> automatically by checking for existing tags.

## 3. Merge

Merge to `main`. CI does the rest. Watch the `build-and-publish` job.

## 4. After the release lands

- [ ] **Delete the `## Unreleased` block** from any `CHANGELOG.md` whose contents the
      release just superseded. Nx prepends new entries to the **top** of the file, so
      a stale `## Unreleased` section otherwise sits below the release that shipped
      it. This is the only routine manual changelog step.
- [ ] Verify the packages are on [npm](https://www.npmjs.com/org/ver-id) at the
      expected versions.
- [ ] Verify the GitHub Releases and `{projectName}@{version}` tags were created.
- [ ] If the **Publish to GitHub Packages** step failed, note that it is
      `continue-on-error` by design — npm is the primary registry, so the release
      itself is still valid. Re-run manually if the mirror matters.

## 5. How versions are derived

Every package is below `1.0.0`, and `nx.json` sets
`version.adjustSemverBumpsForZeroMajorVersion: true`, which applies the 0.x
convention:

| Commit | Normally | While the package is `0.x` |
| --- | --- | --- |
| `feat!:` / `BREAKING CHANGE:` | major | **minor** (`0.15.2` → `0.16.0`) |
| `feat:` | minor | **patch** (`0.15.2` → `0.15.3`) |
| `fix:` | patch | patch (`0.15.2` → `0.15.3`) |
| `refactor:`, `docs:`, `chore:`, `ci:`, … | none | none |

Without that setting the first breaking change would publish `1.0.0` and accidentally
declare the API stable. **Reaching `1.0.0` is therefore a deliberate, manual step:**
set the version in each `package.json` by hand and release that. Once a package is at
`1.0.0` or above the setting no longer applies and bumps behave normally.

Packages are versioned **independently** (`projectsRelationship: "independent"`), so
they drift apart on purpose. A package can also be bumped as a dependent: when
`@ver-id/core` is released, its dependents receive a patch bump.

## 6. Troubleshooting

**Nothing was released.** `nx affected` found no changed `packages/*` project. Changes
under `apps/` alone never release. Conversely, editing a root file such as
`package.json` or `nx.json` marks every project affected and releases all of them.

**A package released as a patch when it should have been minor or major.** Almost
always a scope that is not an exact project name — see §1. Verify with:

```bash
yarn nx release version --dry-run --projects=<project>
```

**A breaking change did not register.** Either the marker was not `!` / a
`BREAKING CHANGE:` body block, or the scope was non-matching, which causes Nx to skip
the breaking check entirely.

**A new package failed to release.** It has no tag, so it needs `--first-release`. CI
detects this from `git tag --list "$project@*"`. Note that a new package publishes at
whatever version its `package.json` declares, plus any bump the commits imply — set
that starting version deliberately.
