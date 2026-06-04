# UI Spec: List Detail And Combi Layouts

## List Detail UI

Each list detail page should show:

- List name and format.
- Overall progress summary.
- Format-specific sections.
- Add controls only where the format allows additions.
- Editable current level controls per item.
- Clear editable target level controls per item.
- Empty slots for missing cookies, pets, relay cookies, or treasures.
- Items should be visually complete when current level reaches target level.
- When an item's target is reached, show the reached target-level text in `#fc6fde`.
- Progress controls should be level-only: current level, target level, and manual complete for individual items.
- Do not show separate complete controls for whole combis, groups, arenas, or list sections.

Empty list and empty slot visuals are specified in `../features/F006-empty-list-layouts.md`. That spec is the source of truth for the add-option artwork, empty combi layouts, group/arena grids, and replacement behavior when a user chooses an item.

When a user clicks an add-option item from a list detail view, open the matching catalog page in list-selection mode. The catalog page should visibly indicate that the user is selecting for a specific list slot, provide a cancel/back action, and return the selected item to the originating list detail view.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Current levels on each slot.
- Target levels on each slot.
- Newly added items should display current level `Lv. 1` and a target level that automatically matches the maximum allowed by the current slot, combi, list format, or arena target set until the user changes it.
- Users can manually mark an item complete; doing so sets the item's current level to its target level.

For combi type 2, do not render an empty relay column.

## Related Specs

- `../features/F002-list-formats.md` for list format behavior.
- `../features/F006-empty-list-layouts.md` for empty list and slot behavior.
- `UI004-catalog-item-cards.md` for catalog selection mode presentation.
- `UI006-empty-states-and-errors.md` for feedback states.
