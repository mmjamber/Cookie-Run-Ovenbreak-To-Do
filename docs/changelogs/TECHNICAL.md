# Technical Changelog

Tracks architecture, storage, routing, data imports, build/lint config, package scripts, project setup, and technical specs.

## Unreleased

### Documentation Process

- Added `docs/plans/active/trophy-race-preview-to-specs.md` to plan how Trophy Race preview decisions should become durable specs before implementation.
- Updated documentation structure and agent guidance so new user stories belong in `docs/user-stories/` instead of `docs/specs/user-stories/`.
- Bolded the summary text at the top of each `docs/changelogs/CHANGELOG.md` list item to improve scan readability.
- Improved `docs/changelogs/INDEX.md` spacing by separating each changelog file into its own subsection block.
- Added `docs/changelogs/INDEX.md` to map every changelog file and subsection.
- Added a changelog retention rule requiring agents to keep earlier changelog entries when features, previews, specs, or implementations are removed, and to add new removal entries instead.
- Removed the unused root `CLAUDE.md` file because this project is not intended to use Claude-specific agent instructions.
- Added an all-agents rule in `AGENTS.md` and `docs/plans/README.md` requiring a `docs/plans/active/` task plan before adding or changing files under `app/`, with an exception for explicitly requested test or preview files under `public/`.
- Consolidated the root `CHANGELOG.md` into `docs/changelogs/` and removed the duplicate root changelog file.
- Added an all-agents rule in `AGENTS.md` requiring completed project changes to be recorded in `docs/changelogs/CHANGELOG.md` and the relevant zone changelog subsections.
- Added `docs/changelogs/` with project-wide and zone-specific changelog files.
- Added the original root changelog to track notable project changes before the changelog system moved under `docs/changelogs/`.
- Added project planning folders for active and completed implementation plans.

### Architecture

- Created the starter Next.js workspace for the OvenBreak to-do/list website.

### Storage

- No changes recorded yet.

### Routing

- No changes recorded yet.

### Data Imports

- No changes recorded yet.

### Build And Tooling

- Created the starter Next.js workspace for the OvenBreak to-do/list website.

### Technical Specs

- Added project specifications for product rules, data architecture, and related technical behavior.
