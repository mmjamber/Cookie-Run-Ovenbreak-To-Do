# Changelog Index

Use this index to find the right changelog file and subsection before adding or reviewing entries.

## Changelog System

This folder tracks project changes at two levels:

- `CHANGELOG.md` is the required simple date-based overview for every recorded project change.
- Zone changelogs record more detailed changes by project area when a change affects that zone, organized under related subsections.

## Entry Format

Use `YYYY-MM-DD` dates so entries sort clearly and avoid date-format ambiguity.

Every recorded change should have a short entry in `CHANGELOG.md`, even when it only affects one zone. Link to the relevant subsection in each zone changelog:

```md
## 2026-06-16

- Added a level tracking system.
  Details: [Features > List Behavior](FEATURES.md#list-behavior), [Technical > Storage](TECHNICAL.md#storage), [UI > Layout](UI.md#layout), [Previews > Preview Files](PREVIEWS.md#preview-files).
```

Zone entries should live under the subsection that best matches the change:

```md
## 2026-06-16

### Feature Specs

- Added level tracking requirements in `docs/specs/features/F000-example.md`.
```

## Working Rule

All agents working in this project must add one short entry to `CHANGELOG.md` for every completed project change. Then add detailed entries under the most relevant subsection in each affected zone file, whether the change affects one zone or multiple zones.

Do not remove earlier changelog entries when a feature, preview, spec, or implementation is later removed. Add a new removal entry instead so the changelog keeps the full project history.

If a change does not fit an existing subsection, add a clear new subsection instead of placing it in a miscellaneous bucket.

## Main Files

### [CHANGELOG.md](CHANGELOG.md)

Required simple overview for every recorded project change.

- [Unreleased](CHANGELOG.md#unreleased)
- [2026-06-11](CHANGELOG.md#2026-06-11)

## Zone Changelogs

### [FEATURES.md](FEATURES.md)

Feature behavior, feature specs, user stories, list behavior, catalog behavior, and presets.

- [Unreleased](FEATURES.md#unreleased)
- [Feature Behavior](FEATURES.md#feature-behavior)
- [Feature Specs](FEATURES.md#feature-specs)
- [User Stories](FEATURES.md#user-stories)
- [List Behavior](FEATURES.md#list-behavior)
- [Catalog Behavior](FEATURES.md#catalog-behavior)
- [Presets](FEATURES.md#presets)

### [TECHNICAL.md](TECHNICAL.md)

Architecture, storage, routing, data imports, build/lint config, package scripts, project setup, and technical specs.

- [Unreleased](TECHNICAL.md#unreleased)
- [Documentation Process](TECHNICAL.md#documentation-process)
- [Architecture](TECHNICAL.md#architecture)
- [Storage](TECHNICAL.md#storage)
- [Routing](TECHNICAL.md#routing)
- [Data Imports](TECHNICAL.md#data-imports)
- [Build And Tooling](TECHNICAL.md#build-and-tooling)
- [Technical Specs](TECHNICAL.md#technical-specs)

### [UI.md](UI.md)

Visual/interface changes, UI specs, responsive behavior, layout, accessibility, styling, and user-facing polish.

- [Unreleased](UI.md#unreleased)
- [UI Specs](UI.md#ui-specs)
- [Layout](UI.md#layout)
- [Responsive Behavior](UI.md#responsive-behavior)
- [Accessibility](UI.md#accessibility)
- [Styling](UI.md#styling)
- [User-Facing Polish](UI.md#user-facing-polish)

### [PREVIEWS.md](PREVIEWS.md)

Preview-only files, throwaway mockups, temporary visual experiments, screenshots, and inspection artifacts.

- [Unreleased](PREVIEWS.md#unreleased)
- [Preview Files](PREVIEWS.md#preview-files)
- [Mockups](PREVIEWS.md#mockups)
- [Visual Experiments](PREVIEWS.md#visual-experiments)
- [Screenshots](PREVIEWS.md#screenshots)
- [Inspection Artifacts](PREVIEWS.md#inspection-artifacts)

## Quick Routing

- Feature behavior or feature specs: [FEATURES.md](FEATURES.md)
- App architecture, storage, routing, data, tooling, or documentation process: [TECHNICAL.md](TECHNICAL.md)
- Layout, styling, accessibility, responsive behavior, or UI specs: [UI.md](UI.md)
- Preview files, mockups, screenshots, or visual experiments: [PREVIEWS.md](PREVIEWS.md)
- Simple project-wide timeline: [CHANGELOG.md](CHANGELOG.md)
