# UI Spec: List Detail And Combi Layouts

## List Detail UI

Each list detail page should show:

- List name and format.
- Overall progress summary.
- Format-specific sections.
- Add controls only where the format allows additions.
- Editable current level controls per item.
- Clear target level displays per item, with editable target controls only where the format allows them.
- Empty add-item slots for missing cookies, pets, relay cookies, or treasures.
- Items should be visually complete when current level reaches target level.
- When an item's target is reached, show the reached target-level text in `#fc6fde`.
- Progress controls should be level-only: current level, target level, format-allowed target settings, and manual complete for individual items.
- Do not show separate complete controls for whole combis, groups, arenas, or list sections.
- Every list item block must have an options toggle at the top-right side of the block. This applies to combi blocks and free item blocks.

Direct per-item target level controls appear only in None-format lists. Guild Run uses arena target-set controls for low, mid, and full targets, but the user-facing choices must be labeled `7/7/5`, `11/11/9`, and `15/15/12` in pet cap / cookie cap / treasure cap order. Trophy Race, Breakout, and Champions League show format-controlled target levels without direct per-item target editing.

Level editing must use a modal dialog, not always-visible inline steppers on every item slot. The modal is opened from the filled item's visible level control. It should let the user edit the current level for every filled item, edit the target level only when the current format allows direct target editing, and manually mark an individual item complete. The dialog must show disabled minus/plus or equivalent step controls at the applicable minimum and maximum values.

Empty list and empty add-item slot visuals are specified in `../features/F006-empty-list-layouts.md`. That spec is the source of truth for the add-option artwork, empty combi layouts, group/arena grids, and replacement behavior when a user chooses an item.

Arena visuals follow the shared arena definition in `../G002-rules.md`: each arena is a list item block with `Arena N` shown above one combi type 1, numbered by chronological list order.

List-detail visual layout and styling should follow the current progress preview files as the source of truth:

- `public/trophy-race-progress-preview.html`
- `public/breakout-progress-preview.html`
- `public/guild-run-progress-preview.html`
- `public/champions-league-progress-preview.html`
- `public/none-list-progress-preview.html`
- `public/list-progress-preview.css`

These previews define the intended layout, sizing, spacing, text treatment, artwork placement, colors, borders, and control styling for list-detail pages. Do not use `item-frame` preview files as list-detail visual references.

When a user clicks add-option artwork from a list detail view, open the matching catalog page in list-selection mode. The catalog page should visibly indicate that the user is selecting for a specific add-item slot, provide a cancel/back action, and return the selected item to the originating list detail view.

When the list detail page is opened from an ordinary catalog add-to-list dialog, it enters pending placement mode and acts as the compatible-slot picker. In this mode, the selected catalog item is already known and every compatible empty slot in the chosen list becomes a placement target, including slots across multiple combis, groups, arenas, or None-format entries. Compatibility follows slot type: cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots. Selecting a compatible empty slot fills that slot with the pending item.

Compatible filled slots can also be replaced, but only through an explicit switch interaction. On desktop, hovering a compatible filled slot grays out the current item and overlays `Switch?`. On mobile, tapping or clicking the compatible filled slot reveals the same grayed-out `Switch?` state. Activating `Switch?` replaces that filled slot's current item with the pending item. Incompatible filled slots must not show `Switch?`.

If the pending selection includes a cookie and paired pet, the page should offer placement targets that can place both items together, plus compatible `relay` targets that receive only the cookie. It should then fill compatible empty slots, replace explicitly switched compatible filled slots, or act on the compatible grouped entry in one action. Filled slots must not be replaced unless the user explicitly activates `Switch?`.

If the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, and cookie with pet is pending, show a small `With pet?` dialog before completing placement. The dialog has `Yes` and `No` choices. `Yes` switches the cookie and keeps the linked pet included in the placement; `No` switches only the cookie and leaves the pet slot unchanged.

## Block Options UI

Each combi block and free item block should show controls that are visually tied to that block, not to the whole list page. These controls include edit, delete/options, add, and move/reorder actions only where the current list format can meaningfully perform that action.

Rules:

- The options toggle must be visually tied to its block, not to the whole list page.
- Edit, delete/options, add, and move/reorder controls should use the progress preview files as their visual reference.
- Controls that are not allowed in the current format should be hidden or disabled with clear feedback. For example, Guild Run and Champions League must not expose add/delete arena controls because their arena counts are fixed.
- Delete/options actions must distinguish between item deletion, block clear, and full block removal.
- Item deletion removes only one catalog item from one add-item slot. The block remains in place, other filled items in the same block remain unchanged, and the emptied slot immediately shows its matching add-option artwork again.
- Block clear removes all filled catalog items from the current block, restores every matching add-option artwork slot, and keeps the surrounding block in place.
- Full block removal deletes the entire combi, free item block, arena, or group entry only where the list format allows that structure to be removed.
- When both block clear and full block removal are available, the user-facing dialog must make the choice explicit before changing the list.
- Delete actions should identify affected items or blocks by visible item names, item types, group labels, or arena labels.
- Empty add-item slots do not need item-delete actions.
- Hover-revealed edit/delete/move controls need keyboard and touch alternatives as defined in `UI007-accessibility.md`.

## Format Controls

Trophy Race:

- Trophy Race list-detail pages should provide add arena controls until the 10-arena maximum is reached.
- Trophy Race arena blocks can be cleared, removed, and reordered while respecting the 1-arena minimum and 10-arena maximum.
- Trophy Race arena reordering should use move mode and renumber remaining arenas after the reorder.
- The desktop move-mode behavior should follow the Trophy Race progress preview. The mobile/touch move-mode interaction remains an open product question and must not be treated as settled by this spec.

Breakout:

- Breakout group controls should provide a group-level edit entry point for changing the number of combi type 2 blocks in that group.
- Breakout group count edits must respect the 3-combi minimum and 15-combi maximum for each group.
- After a group count edit, Breakout flag numbering restarts at `1` inside that group and follows the group's visual/order sequence.
- Breakout controls must not add relay slots, combi type 1 blocks, arena blocks, or standalone item blocks.

Guild Run:

- Guild Run arena controls should provide an arena-level edit entry point for changing that arena's target set.
- Guild Run arena target-set edits use the same cap labels as the rest of the app: `7/7/5`, `11/11/9`, and `15/15/12`.
- Changing a Guild Run arena target set updates the target levels for existing filled items in that arena.
- Guild Run controls must not add, delete, or reorder arenas.

Champions League:

- Champions League controls must not add, delete, reorder, or retarget arenas.
- Champions League should show fixed target levels by arena order without inline `low`, `mid`, or `full` labels beside arena names.

None:

- None-format controls may add flexible entries: combi type 1, combi type 2, individual cookie, individual pet, or individual treasure.
- None-format flexible entries may be cleared or fully removed when the action affects only that user-added entry.
- None-format list detail should use straight section titles and a `Combis` section label for combi entries, following the No Mode progress preview.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Current levels on each slot.
- Target levels on each slot.
- Newly added items should display current level `Lv. 1` and a target level that automatically matches the maximum allowed by the current add-item slot, combi, list format, or arena target set. Target levels change only through None-format target edits or Guild Run arena target-set changes.
- Users can manually mark an item complete; doing so sets the item's current level to its target level.

For combi type 2, do not render an empty relay column.

Relay slots and selected relay cookies must not use number badges, markers, or numbered frame assets.

## Acceptance Criteria

- [ ] List-detail visual layout and styling reference the progress preview files, excluding item-frame previews.
- [ ] Filled item level editing opens a modal dialog.
- [ ] Inline always-visible steppers are not shown on every item slot.
- [ ] The level-edit modal supports current level edits for all filled items.
- [ ] The level-edit modal supports target level edits only where the current format allows direct target editing.
- [ ] Block controls distinguish item deletion, block clear, and full block removal.
- [ ] Item deletion clears only one filled slot and keeps the surrounding block.
- [ ] Block clear clears every filled item in the block and keeps the surrounding block.
- [ ] Full block removal is available only where the format allows removing that block.
- [ ] Trophy Race arena reorder renumbers arenas after reorder.
- [ ] Trophy Race desktop move mode follows the progress preview, while mobile/touch move behavior remains unresolved.
- [ ] Breakout group count edits stay within 3 to 15 combis and renumber flag markers after changes.
- [ ] Guild Run arena target-set edits update existing item target levels in that arena.
- [ ] Guild Run and Champions League do not expose add/delete/reorder arena controls.
- [ ] Relay slots and selected relay cookies do not show numbered badges, markers, or frame numbers.
- [ ] Hover-revealed controls have keyboard and touch alternatives.

## Related Specs

- `../features/F002-list-formats.md` for list format behavior.
- `../features/F006-empty-list-layouts.md` for empty list and slot behavior.
- `../technical/T002-local-storage-and-data-architecture.md` for persisted list edits, block clear/removal, and reordering.
- `../technical/T004-runtime-assets-and-ui-implementation.md` for runtime asset and stable sizing implementation.
- `UI004-catalog-item-cards.md` for catalog selection mode presentation.
- `UI006-empty-states-and-errors.md` for feedback states.
- `UI007-accessibility.md` for keyboard, touch, and dialog accessibility.
