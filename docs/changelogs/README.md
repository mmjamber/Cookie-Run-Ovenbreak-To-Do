# Changelogs

This folder tracks project changes at two levels:

- `CHANGELOG.md` is the required simple date-based overview for every recorded project change.
- Zone changelogs record more detailed changes by project area when a change affects that zone, organized under related subsections.

## Files

- `CHANGELOG.md` - simple project-wide timeline.
- `FEATURES.md` - feature behavior, feature specs, user stories, list behavior, catalog behavior, and presets.
- `TECHNICAL.md` - architecture, storage, routing, data imports, build/lint config, package scripts, and technical specs.
- `UI.md` - visual/interface changes, UI specs, responsive behavior, layout, accessibility, styling, and user-facing polish.
- `PREVIEWS.md` - preview-only files, throwaway mockups, temporary visual experiments, screenshots, and inspection artifacts.

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

If a change does not fit an existing subsection, add a clear new subsection instead of placing it in a miscellaneous bucket.
