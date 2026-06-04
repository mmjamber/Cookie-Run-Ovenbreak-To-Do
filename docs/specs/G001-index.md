# Cookie Run: Ovenbreak To-Do Specs

This folder is the source of truth for the project. The website helps Cookie Run: Ovenbreak players build leveling to-do lists for cookies, pets, and treasures.

## Core Specs

- `G001-index.md` - index of project specs and naming rules
- `G002-rules.md` - universal rules, level caps, terminology, and assumptions
- `G003-global-spec.md` - product goals, audience, MVP scope, and success criteria
- `G004-functional-map.md` - pages, user flows, and feature areas
- `G005-data-model.md` - high-level entities and relationships
- `G006-ui-spec.md` - layout, interaction, and catalog/list UI guidance

## Feature Specs

- `features/F001-catalog-pages.md` - cookies, pets, treasures, sorting, and cookie-pet pairing prompt
- `features/F002-list-formats.md` - the five supported to-do list formats
- `features/F003-preset-lists.md` - Trophy Race, Breakout, Champions League, and Guild Run presets
- `features/F004-custom-lists.md` - user-created named lists
- `features/F005-homepage-list-cards.md` - latest four homepage to-do list cards and default card behavior
- `features/F006-empty-list-layouts.md` - empty list, combi, group, arena, and add-slot visuals

## User Story Specs

- `user-stories/US001-view-homepage-list-cards.md` - homepage latest-list and default-card behavior
- `user-stories/US002-create-custom-list.md` - creating named custom lists
- `user-stories/US003-start-preset-list.md` - starting or reopening preset-derived lists
- `user-stories/US004-browse-catalog-items.md` - browsing, searching, sorting, and filtering catalogs
- `user-stories/US005-add-item-from-catalog-to-list.md` - adding catalog items to compatible list slots
- `user-stories/US006-add-cookie-with-paired-pet.md` - paired-pet prompts when adding cookies
- `user-stories/US007-fill-empty-list-slot.md` - filling empty list slots through catalog selection
- `user-stories/US008-track-item-level-progress.md` - editing item levels and completion state
- `user-stories/US009-manage-saved-lists.md` - renaming and deleting saved lists
- `user-stories/US010-build-none-format-list.md` - building flexible None-format lists

## Technical Specs

- `technical/T001-catalog-import-and-derived-data.md` - catalog asset parsing, derived names, rarity inference, pairing, and import reports
- `technical/T002-local-storage-and-data-architecture.md` - local profile data, saved list shapes, validation, and browser storage
- `technical/T003-list-selection-routing.md` - catalog selection mode context, compatibility checks, and return behavior
- `technical/T004-runtime-assets-and-ui-implementation.md` - runtime asset handling, CSS ownership, and stable artwork sizing

## Naming Rule

Use these prefixes for spec files:

- `G` for general specs, such as `G001-index.md`.
- `F` for feature specs, such as `features/F005-new-feature.md`.
- `T` for technical specs under `technical/`, such as `technical/T001-storage-architecture.md`.
- `US` for user-story specs under `user-stories/`, such as `user-stories/US001-create-custom-list.md`.

When creating a new spec, use the next zero-padded numeric prefix for that spec type so each list stays ordered.

## Working Rule

If implementation changes behavior, update the relevant spec in the same task. If a requirement is ambiguous, add it to the relevant `Open Questions` section instead of inventing hidden behavior.
