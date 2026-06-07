# UI Spec: List Detail And Combi Layouts

## List Detail UI

Each list detail page should show:

- List name and format.
- Overall progress summary.
- Format-specific sections.
- Add controls only where the format allows additions.
- Editable current level controls per item.
- Clear editable target level controls per item.
- Empty add-item slots for missing cookies, pets, relay cookies, or treasures.
- Items should be visually complete when current level reaches target level.
- When an item's target is reached, show the reached target-level text in `#fc6fde`.
- Progress controls should be level-only: current level, target level, and manual complete for individual items.
- Do not show separate complete controls for whole combis, groups, arenas, or list sections.
- Every list item block must have an options toggle at the top-right side of the block. This applies to combi blocks and free item blocks.

Empty list and empty add-item slot visuals are specified in `../features/F006-empty-list-layouts.md`. That spec is the source of truth for the add-option artwork, empty combi layouts, group/arena grids, and replacement behavior when a user chooses an item.

When a user clicks add-option artwork from a list detail view, open the matching catalog page in list-selection mode. The catalog page should visibly indicate that the user is selecting for a specific add-item slot, provide a cancel/back action, and return the selected item to the originating list detail view.

When the list detail page is opened from an ordinary catalog add-to-list dialog, it enters pending placement mode and acts as the compatible-slot picker. In this mode, the selected catalog item is already known and every compatible empty slot in the chosen list becomes a placement target, including slots across multiple combis, groups, arenas, or None-format entries. Compatibility follows slot type: cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots. Selecting a compatible empty slot fills that slot with the pending item.

Compatible filled slots can also be replaced, but only through an explicit switch interaction. On desktop, hovering a compatible filled slot grays out the current item and overlays `Switch?`. On mobile, tapping or clicking the compatible filled slot reveals the same grayed-out `Switch?` state. Activating `Switch?` replaces that filled slot's current item with the pending item. Incompatible filled slots must not show `Switch?`.

If the pending selection includes a cookie and paired pet, the page should offer placement targets that can place both items together, plus compatible `relay` targets that receive only the cookie. It should then fill compatible empty slots, replace explicitly switched compatible filled slots, or act on the compatible grouped entry in one action. Filled slots must not be replaced unless the user explicitly activates `Switch?`.

If the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, and cookie with pet is pending, show a small `With pet?` dialog before completing placement. The dialog has `Yes` and `No` choices. `Yes` switches the cookie and keeps the linked pet included in the placement; `No` switches only the cookie and leaves the pet slot unchanged.

## Block Options UI

Each combi block and free item block should show an options toggle at the block's top-right side. Opening the toggle reveals delete actions for the filled catalog items in that current block only.

Rules:

- The options toggle must be visually tied to its block, not to the whole list page.
- The delete actions should identify the filled items in the current block by item type and visible item name.
- Deleting an item removes only that catalog item from its add-item slot.
- The block remains in place after an item is deleted.
- Other filled items in the same block remain unchanged.
- The emptied slot immediately shows its matching add-option artwork again.
- Empty add-item slots do not need delete actions.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Current levels on each slot.
- Target levels on each slot.
- Newly added items should display current level `Lv. 1` and a target level that automatically matches the maximum allowed by the current add-item slot, combi, list format, or arena target set until the user changes it.
- Users can manually mark an item complete; doing so sets the item's current level to its target level.

For combi type 2, do not render an empty relay column.

## Related Specs

- `../features/F002-list-formats.md` for list format behavior.
- `../features/F006-empty-list-layouts.md` for empty list and slot behavior.
- `UI004-catalog-item-cards.md` for catalog selection mode presentation.
- `UI006-empty-states-and-errors.md` for feedback states.
