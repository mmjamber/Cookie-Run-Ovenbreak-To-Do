# Feature Spec: Empty List Layouts

## Summary

When a user opens a new or empty to-do list, the list should already show the correct visual structure for its format. Empty slots are shown with add-option artwork, and users fill those slots by clicking the artwork and choosing a catalog item.

Detailed artwork references are defined in `../technical/T004-runtime-assets-and-ui-implementation.md`.

## Visual References

Empty list screens use the project's add-option artwork and shared combi layout references.

## Empty Slot Behavior

Every empty slot is an interactive add target. When the user clicks an add-option item from a list detail view, the website should open the matching catalog page in list-selection mode rather than opening a separate generic picker page:

- Clicking an empty main cookie slot opens the Cookies catalog for that main cookie slot.
- Clicking an empty relay cookie slot opens the Cookies catalog for that relay slot.
- Clicking an empty pet slot opens the Pets catalog for that pet slot.
- Clicking an empty treasure slot opens the Treasures catalog for that treasure slot.

In list-selection mode, the catalog page should keep its normal browse, search, sort, and filter controls, but item cards should show a Select action for compatible items instead of the ordinary add-to-list action. The page should also show a clear cancel/back action that returns to the originating list detail view without changing the list.

The catalog page should remember which list slot the user is filling and how to return to the list. Detailed selection-mode behavior is defined in `../technical/T003-list-selection-routing.md`.

After the user selects an item from the catalog page, return them to the originating list detail view and replace only the selected add-option artwork with the chosen item artwork unless the user also chooses an automatic paired-pet addition.

## Replacement Sizing

Chosen item artwork should occupy the same visual footprint as the add-option artwork it replaces.

- A chosen main cookie replaces the main cookie add-option artwork at the same slot size and position.
- A chosen relay cookie replaces the relay add-option artwork at the same slot size and position.
- A chosen pet replaces the pet add-option artwork at the same slot size and position.
- A chosen treasure replaces the treasure add-option artwork at the same slot size and position.

Do not let a chosen item resize the combi, move neighboring slots, or change the group grid.

## Cookie And Paired-Pet Flow

When a user chooses a cookie from an empty list slot, the paired-pet behavior still applies:

- If the chosen cookie has 1 paired pet, prompt the user to add that pet to the same combi's empty pet slot.
- If the chosen cookie has 2 paired pets, prompt the user to choose which paired pet to add to the same combi's empty pet slot.
- The prompt must include cookie-only, cookie-with-selected-pet, and cancel choices.
- Automatic paired-pet addition is available only when the destination combi has an empty compatible pet slot.
- If the pet slot is already filled, do not replace it automatically. Let the user add or replace pets only through an explicit pet-slot action.
- The paired-pet prompt applies to the main cookie choice. It does not apply to a relay cookie choice.

If the user accepts a paired-pet addition, replace both the clicked cookie add-option artwork and the same combi's pet add-option artwork in one completed action.

## Combi Layouts

Combi type 1 should follow the shared combi type 1 visual reference:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- The relay cookie add slot sits at the lower right and uses the relay artwork, including the small `2` marker.

Combi type 2 should follow the shared combi type 2 visual reference:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- No relay slot, relay placeholder, or empty relay column is rendered.

## Format-Specific Empty Lists

Trophy Race:

- Show the default empty combis using the combi type 1 layout.
- Label combis as arenas or slots according to the Trophy Race list UI.
- Use the shared Trophy Race and Champions League visual reference for spacing and alternating panel treatment.
- Users may add more combis until the Trophy Race maximum is reached.

Breakout:

- Show groups as named sections, such as `Group 1` and `Group 2`.
- Each group contains a grid of combi type 2 entries.
- Use the shared Breakout visual reference for group spacing, group headings, alternating combi backgrounds, and multi-row wrapping.
- Each combi in a Breakout group has one pet slot, one main cookie slot, and three treasure slots.
- The small flag marker at the bottom-right of each Breakout combi should show that combi's number within its group.
- Breakout combi numbering restarts at `1` inside each group and follows the group's visual/order sequence.
- Breakout must not render relay slots.

Guild Run:

- Show exactly 12 arena sections by default.
- Each arena uses the combi type 1 layout.
- Use the shared Guild Run visual reference for the 12-arena grid, arena labels, and alternating panel backgrounds.
- Users cannot add or remove Guild Run arenas.

Champions League:

- Show exactly 3 arena sections by default.
- Each arena uses the combi type 1 layout.
- Use the shared Trophy Race and Champions League visual reference for arena spacing, labels, and alternating panel backgrounds.
- Users cannot add or remove Champions League arenas.

None:

- None-format lists start with no default combis, arenas, groups, or items.
- When the user clicks the None-list add action, ask whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
- If the user chooses combi type 1, insert an empty combi type 1 block.
- If the user chooses combi type 2, insert an empty combi type 2 block.
- If the user chooses cookie, open the Cookies catalog in list-selection mode and ask whether to add the paired pet when the chosen cookie has 1 or 2 paired pets.
- If the user chooses pet, open the Pets catalog in list-selection mode and add only the selected pet; do not show an extra prompt.
- If the user chooses treasure, ask whether to add 1 treasure or a set of 3 treasures, then open the Treasures catalog in list-selection mode with the selected amount.
- Individual cookie, pet, treasure, and treasure-set entries should use the existing add-option artwork and replacement sizing rules.
- Combi entries in None lists should use the same add-option artwork and replacement sizing rules as mode combis.

## Acceptance Criteria

- [ ] Empty Trophy Race lists display combi type 1 slots using the specified add-option artwork.
- [ ] Empty Breakout lists display groups of combi type 2 entries using the specified add-option artwork.
- [ ] Breakout combis show numbered flag markers, restarting from `1` in each group.
- [ ] Empty Guild Run lists display 12 combi type 1 arenas.
- [ ] Empty Champions League lists display 3 combi type 1 arenas.
- [ ] Empty None lists start blank except for the list add action.
- [ ] None-list add action asks whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
- [ ] None-list combi type 1 uses the combi type 1 layout.
- [ ] None-list combi type 2 uses the combi type 2 layout.
- [ ] None-list treasure adds ask whether to add 1 treasure or 3 treasures.
- [ ] Clicking any add-option artwork from a list detail view opens the correct catalog page in list-selection mode for that slot type.
- [ ] Catalog pages in list-selection mode show Select actions for compatible items and remember the originating list slot.
- [ ] The chosen item returns to the originating list slot.
- [ ] Chosen item art replaces the add-option art without changing the slot footprint.
- [ ] Choosing a main cookie can also add a paired pet to the same combi's empty pet slot.
- [ ] Relay cookie choices do not trigger paired-pet prompts.
