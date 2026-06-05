# Data Model

This spec gives a high-level overview of the project data model. Detailed field names, storage shapes, persistence rules, and validation mechanics live in the technical specs.

## Main Concepts

The website works with three catalog item types:

- Cookies.
- Pets.
- Treasures.

Users organize those items into saved to-do lists. A list uses one of five formats:

- Trophy Race.
- Breakout.
- Guild Run.
- Champions League.
- None.

Each list contains the sections and item slots needed for its format. Those sections may represent combis, groups, arenas, individual items, or flexible None-format entries.

## Catalog Items

Catalog items represent the cookies, pets, and treasures users can add to lists.

Catalog items need enough data to support:

- Display name.
- Image.
- Item type.
- Rarity ordering.
- Alphabetical and release-date sorting.
- Cookie-pet pairing prompts.
- Maximum level rules.

Catalog import and derived catalog data rules are defined in `technical/T001-catalog-import-and-derived-data.md`.

## Saved Lists

Saved lists represent the user's leveling goals. A saved list has:

- A user-visible name.
- A selected list format.
- Preset or custom origin.
- Local profile ownership.
- User-controlled display order on the To-do page.
- Format-specific sections.
- Saved item selections and progress.

Saved list field shapes, section shapes, combi shapes, and browser persistence rules are defined in `technical/T002-local-storage-and-data-architecture.md`.

Every new local user or guest profile starts with four generated default preset-derived saved lists. These generated defaults are regular saved lists in the same To-do page order as custom lists.

## Level And Completion Data

Each selected item tracks:

- Current level.
- Target level.
- Completion state.

Newly added items start at level 1 and default their target to the maximum allowed by the destination list context. Users can edit current and target levels within the applicable limits.

Detailed validation rules are defined in `technical/T002-local-storage-and-data-architecture.md`.

## Catalog Selection Context

When a user fills an empty slot from a list detail page, the catalog needs enough context to return the chosen item to the correct list slot.

Selection-mode routing and compatibility rules are defined in `technical/T003-list-selection-routing.md`.

## Related Specs

- `G002-rules.md` for universal terminology and product rules.
- `features/F001-catalog-pages.md` for catalog behavior.
- `features/F002-list-formats.md` for list format behavior.
- `technical/T001-catalog-import-and-derived-data.md` for catalog data derivation.
- `technical/T002-local-storage-and-data-architecture.md` for local storage and data shapes.
- `technical/T003-list-selection-routing.md` for selection-mode routing.
