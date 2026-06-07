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

Each list contains the sections and add-item slots needed for its format. Those sections may represent combis, groups, arenas, individual items, or flexible None-format entries.

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
- Preset or user generated origin.
- Local profile ownership.
- User-controlled display order on the To-do page.
- Format-specific sections.
- Saved item selections and progress.

Saved list field shapes, section shapes, combi shapes, and browser persistence rules are defined in `technical/T002-local-storage-and-data-architecture.md`.

Every new local user or guest profile starts with four generated default preset-derived saved lists. Preset-derived lists and user generated lists use the same saved-list model, To-do page order, and management behavior; the distinction is only how the list was created.

User generated lists may start with an auto-filled default name based on the selected format, including `No mode` for None-format lists, but the saved `name` remains user-editable and is the name shown on list cards.

Default preset-derived lists store the required sections, combis, arenas, groups, and empty add-item slots for their format, but they never store selected catalog items at creation. Cookies, pets, treasures, and any recommended combis are always added by the user later.

## Level And Completion Data

Each selected item tracks:

- Current level.
- Target level.
- Completion state.

Newly added items start at level 1 and default their target to the maximum allowed by the destination list context. Users can edit current and target levels within the applicable limits.

Deleting a selected catalog item removes that item's progress data from its slot, but it does not remove the surrounding combi or free item block. The emptied add-item slot returns to its empty state and shows the matching add-option artwork again.

Detailed validation rules are defined in `technical/T002-local-storage-and-data-architecture.md`.

## Catalog Selection Context

When a user fills an empty add-item slot from a list detail page, the catalog needs enough context to return the chosen item to the correct compatible add-item slot.

Selection-mode routing and compatibility rules are defined in `technical/T003-list-selection-routing.md`.

## Related Specs

- `G002-rules.md` for universal terminology and product rules.
- `features/F001-catalog-pages.md` for catalog behavior.
- `features/F002-list-formats.md` for list format behavior.
- `technical/T001-catalog-import-and-derived-data.md` for catalog data derivation.
- `technical/T002-local-storage-and-data-architecture.md` for local storage and data shapes.
- `technical/T003-list-selection-routing.md` for selection-mode routing.
