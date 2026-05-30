# Cookie Run: Ovenbreak To-Do Specs

This folder is the source of truth for the project. The website helps Cookie Run: Ovenbreak players build leveling to-do lists for cookies, pets, and treasures.

## Core Specs

- `G001-index.md` - index of project specs and naming rules
- `G002-rules.md` - universal rules, level caps, terminology, and assumptions
- `G003-global-spec.md` - product goals, audience, MVP scope, and success criteria
- `G004-functional-map.md` - pages, user flows, and feature areas
- `G005-data-model.md` - entities, relationships, list formats, and catalog data
- `G006-ui-spec.md` - layout, interaction, and catalog/list UI guidance

## Feature Specs

- `features/F001-catalog-pages.md` - cookies, pets, treasures, sorting, and cookie-pet pairing prompt
- `features/F002-list-formats.md` - the five supported to-do list formats
- `features/F003-preset-lists.md` - Trophy Race, Breakout, Champions League, and Guild Run presets
- `features/F004-custom-lists.md` - user-created named lists

## Naming Rule

Use these prefixes for spec files:

- `G` for general specs, such as `G001-index.md`.
- `F` for feature specs, such as `features/F005-new-feature.md`.
- `T` for technical specs, such as `T001-storage-architecture.md`.
- `US` for user-story specs, such as `US001-create-custom-list.md`.

When creating a new spec, use the next zero-padded numeric prefix for that spec type so each list stays ordered.

## Working Rule

If implementation changes behavior, update the relevant spec in the same task. If a requirement is ambiguous, add it to the relevant `Open Questions` section instead of inventing hidden behavior.
