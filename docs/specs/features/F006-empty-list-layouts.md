# Feature Spec: Empty List Layouts

## Summary

When a user opens a new or empty to-do list, the list should already show the correct visual structure for its format. Empty add-item slots are shown with their matching add-option PNG from `assets/ovenbreak images/add cookies/`, and users fill those slots by clicking the artwork and choosing a catalog item. Once a slot is filled, its empty add-option artwork disappears and the chosen catalog item artwork takes its place.

Detailed artwork references are defined in `../technical/T004-runtime-assets-and-ui-implementation.md`.

## Visual References

Empty list screens use the project's add-option artwork and shared combi layout references.

## Empty Add-Item Slot Behavior

Every empty add-item slot is an interactive add target. When the user clicks add-option artwork from a list detail view, the website should open the matching catalog page in list-selection mode rather than opening a separate generic picker page:

- Clicking an empty `add cookie` slot opens the Cookies catalog for that main cookie slot.
- Clicking an empty `relay` slot opens the Cookies catalog for that relay slot.
- Clicking an empty `add pet` slot opens the Pets catalog for that pet slot.
- Clicking an empty `add treasure` slot opens the Treasures catalog for that treasure slot.

In list-selection mode, the catalog page should keep its normal browse, search, sort, and filter controls, but item cards should show a Select action for compatible items instead of the ordinary add-to-list action. The page should also show a clear cancel/back action that returns to the originating list detail view without changing the list.

The catalog page should remember which list slot the user is filling and how to return to the list. Detailed selection-mode behavior is defined in `../technical/T003-list-selection-routing.md`.

After the user selects an item from the catalog page, return them to the originating list detail view and replace only the selected add-option artwork with the chosen item artwork unless the user also chooses an automatic paired-pet addition.

When a filled catalog item is deleted from a list item block, the slot becomes empty again and the matching add-option artwork returns. Deleting one item must not remove the surrounding combi block, free item block, or any other items in that block.

If the list detail view was opened from an ordinary catalog add-to-list dialog, the selected catalog item is already pending and the list detail page acts as the compatible-slot picker. In that pending placement mode, clicking a compatible empty add-item slot fills that slot instead of opening the catalog. The picker should offer every compatible empty slot in the chosen list, including slots across multiple combis, groups, arenas, or None-format entries.

Compatible filled slots can be replaced only through the explicit `Switch?` affordance. On desktop, hovering a compatible filled slot grays out the current item and overlays `Switch?`. On mobile, tapping or clicking a compatible filled slot reveals the same grayed-out `Switch?` state. Activating `Switch?` replaces the filled slot's current item with the pending item. Incompatible filled slots must not show `Switch?`, and no filled slot may be replaced silently.

Multi-item selection is available only when the user is filling treasure slots in a combi-format destination. In that case, the Treasures catalog may let the user select up to 3 treasures at once when enough compatible empty or explicitly switched treasure slots exist in the same combi. Selected treasure cards must show numbered badges `1`, `2`, and `3`; those numbers define the placement order for the selected treasure slots.

## Replacement Sizing

Chosen item artwork should occupy the same visual footprint as the add-option artwork it replaces.

- A chosen main cookie replaces the main cookie add-option artwork at the same slot size and position.
- A chosen relay cookie replaces the relay add-option artwork at the same slot size and position.
- A chosen pet replaces the pet add-option artwork at the same slot size and position.
- A chosen treasure replaces the treasure add-option artwork at the same slot size and position.

Do not let a chosen item resize the combi, move neighboring slots, or change the group grid.

Add-option artwork and chosen catalog item artwork are mutually exclusive in a single add-item slot: show the add-option artwork only while the slot is empty, show the catalog item artwork only while the slot is filled, and restore the add-option artwork if the catalog item is deleted.

## Cookie And Paired-Pet Flow

When a user chooses a cookie from an empty add-item slot, the paired-pet behavior still applies:

- If the chosen cookie has 1 paired pet, prompt the user to add that pet to the same combi's empty `add pet` slot.
- If the chosen cookie has 2 paired pets, prompt the user to choose which paired pet to add to the same combi's empty `add pet` slot.
- The add-cookie-with-pet option is checked by default for main cookie slots because it is the most commonly picked option.
- The prompt must include cookie-only, cookie-with-selected-pet, and cancel choices.
- Automatic paired-pet addition is available only when the destination combi has an empty compatible `add pet` slot or the user explicitly chooses `Switch?` on a compatible filled pet slot.
- If the pet slot is already filled, do not replace it without an explicit `Switch?` action.
- The paired-pet prompt applies to the main cookie choice. It does not apply to a relay cookie choice; relay destinations default to cookie only.

If the user accepts a paired-pet addition for a main cookie destination, replace both the clicked cookie add-option artwork and the same combi's compatible pet slot artwork in one completed action. If a paired-pet choice reaches a relay destination, ignore the paired pet and add only the relay cookie.

If the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, and add cookie with pet was selected, show a `With pet?` dialog before completing the switch. `Yes` switches the cookie and keeps the linked pet included in the placement. `No` switches only the cookie and leaves the pet slot unchanged.

## Combi Layouts

Combi type 1 should follow the shared combi type 1 visual reference:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- The relay cookie add slot sits at the lower right and uses the relay artwork without any numbered badge, marker, or frame number.

Combi type 2 should follow the shared combi type 2 visual reference:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- No relay slot, relay placeholder, or empty relay column is rendered.

## Format-Specific Empty Lists

Trophy Race:

- Show the user-selected number of empty Trophy Race arenas using the combi type 1 layout.
- Label each arena block as `Arena N` above the combi, where `N` follows chronological list order.
- Trophy Race entries are arenas in the list UI, but they do not use Guild Run or Champions League arena target-set controls.
- Trophy Race item targets default to full max levels: cookies and pets `Lv. 15`, treasures `Lv. 12`.
- Use the shared Trophy Race and Champions League visual reference for spacing and alternating panel treatment.
- Users may add more arenas until the Trophy Race maximum is reached.
- Users may delete arenas as long as at least 1 Trophy Race arena remains.
- Trophy Race arena delete/options behavior must distinguish clearing an arena from removing the full arena block. Clearing an arena removes that arena's filled items and progress data but keeps the arena block. Removing the full arena deletes that arena block and renumbers the remaining arenas.
- Trophy Race arenas can be reordered in move mode on desktop, and arena labels renumber after reorder. Mobile/touch reorder behavior remains undecided and should be captured as an open question until approved.

Breakout:

- Show groups as named sections, such as `Group 1` and `Group 2`.
- Each group contains a grid of combi type 2 blocks only.
- Breakout item targets default to full max levels: cookies and pets `Lv. 15`, treasures `Lv. 12`.
- Use the shared Breakout visual reference for group spacing, group headings, alternating combi backgrounds, and multi-row wrapping.
- Each combi type 2 block in a Breakout group has one pet slot, one main cookie slot, and three treasure slots.
- The small flag marker at the bottom-right of each Breakout combi should show that combi's number within its group.
- Breakout combi numbering restarts at `1` inside each group and follows the group's visual/order sequence.
- Users may edit the combi count for a Breakout group from the list detail page. Group count edits must keep that group between 3 and 15 combi type 2 blocks and renumber the group's flag markers after the change.
- Breakout must not render relay slots, combi type 1 blocks, arena blocks, or standalone item blocks.

Guild Run:

- Show exactly 12 arena blocks by default.
- Each arena is an arena block labeled `Arena N` above one combi type 1, where `N` follows chronological list order.
- Each arena must show or collect its user-selected low, mid, or full target set before items can be added to that arena.
- When collecting a Guild Run arena target set, show the selectable caps as `7/7/5`, `11/11/9`, and `15/15/12` instead of low, mid, and full.
- Users may edit a Guild Run arena's target set from the list detail page. Changing the target set updates the target levels for existing filled items in that arena.
- Use the shared Guild Run visual reference for the 12-arena grid, arena labels, and alternating panel backgrounds.
- Users cannot add or remove Guild Run arenas.

Champions League:

- Show exactly 3 arena blocks by default.
- Each arena is an arena block labeled `Arena N` above one combi type 1, where `N` follows chronological list order.
- Arena 1 uses low targets, Arena 2 uses mid targets, and Arena 3 uses full targets.
- Use the shared Trophy Race and Champions League visual reference for arena spacing, labels, and alternating panel backgrounds.
- Users cannot add or remove Champions League arenas.

None:

- None-format lists start with no default combis, arenas, groups, or items.
- When the user clicks the None-list add action, ask whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
- If the user chooses combi type 1, insert an empty combi type 1 block.
- If the user chooses combi type 2, insert an empty combi type 2 block.
- If the user chooses cookie, open the Cookies catalog in list-selection mode and ask whether to add the paired pet when the chosen cookie has 1 or 2 paired pets.
- If the user chooses pet, open the Pets catalog in list-selection mode and add only the selected pet; do not show an extra prompt.
- If the user chooses treasure, open the Treasures catalog in single-selection mode for one individual treasure entry.
- Individual cookie, pet, and treasure entries should use the existing add-option artwork and replacement sizing rules.
- Combi entries in None lists should use the same add-option artwork and replacement sizing rules as mode combis.

## Acceptance Criteria

- [ ] Empty Trophy Race lists display the user-selected number of arena blocks using the specified combi type 1 add-option artwork.
- [ ] Trophy Race arenas can be added or deleted within the 1 to 10 arena count limits.
- [ ] Trophy Race arena delete/options behavior distinguishes clearing an arena from removing the full arena block.
- [ ] Trophy Race arena reorder renumbers arenas after reorder.
- [ ] Trophy Race mobile/touch reorder remains an unresolved product question until approved.
- [ ] Empty Breakout lists display groups of combi type 2 blocks using the specified add-option artwork.
- [ ] Trophy Race and Breakout empty slots use full max target defaults when filled.
- [ ] Breakout combis show numbered flag markers, restarting from `1` in each group.
- [ ] Breakout group combi-count edits stay between 3 and 15 combis and renumber that group's flags after changes.
- [ ] Empty Guild Run lists display 12 combi type 1 arenas.
- [ ] Guild Run arenas require user-selected target sets before items can be added to those arenas.
- [ ] Guild Run arena target-set controls show numeric cap labels: `7/7/5`, `11/11/9`, and `15/15/12`.
- [ ] Guild Run arena target-set edits update existing filled item target levels in that arena.
- [ ] Empty Champions League lists display 3 combi type 1 arenas.
- [ ] Champions League arenas use fixed low, mid, and full target sets in arena order.
- [ ] Empty None lists start blank except for the list add action.
- [ ] None-list add action asks whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
- [ ] None-list combi type 1 uses the combi type 1 layout.
- [ ] None-list combi type 2 uses the combi type 2 layout.
- [ ] None-list individual treasure adds open the Treasures catalog in single-selection mode.
- [ ] Combi treasure adds are the only multi-selection flow and show selected treasures numbered `1`, `2`, and `3`.
- [ ] Clicking any add-option artwork from a list detail view opens the correct catalog page in list-selection mode for that slot type.
- [ ] Catalog pages in list-selection mode show Select actions for compatible items and remember the originating list slot.
- [ ] The chosen item returns to the originating list slot.
- [ ] Chosen item art replaces the add-option art without changing the slot footprint.
- [ ] Compatible filled slots expose a `Switch?` affordance on desktop hover or mobile tap/click.
- [ ] Activating `Switch?` replaces only that filled slot's current item.
- [ ] Filled slots hide their add-option artwork.
- [ ] Deleting a filled catalog item restores the matching add-option artwork for that slot.
- [ ] Choosing a main cookie can also add a paired pet to the same combi's empty `add pet` slot.
- [ ] Main cookie paired-pet prompts check the add-cookie-with-pet option by default.
- [ ] Relay cookie destinations default to cookie only and ignore checked paired-pet choices.
- [ ] Relay cookie choices do not trigger paired-pet prompts.
- [ ] Relay slots and selected relay cookies do not use numbered badges, markers, or frame numbers.
