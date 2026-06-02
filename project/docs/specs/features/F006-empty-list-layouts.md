# Feature Spec: Empty List Layouts

## Summary

When a user opens a new or empty to-do list, the list should already show the correct visual structure for its format. Empty slots are shown with add-option artwork, and users fill those slots by clicking the artwork and choosing a catalog item.

The visual references for these empty states live in `assets/ovenbreak images/add cookies/`.

## Source Assets

Add-option slot artwork:

- Main cookie slot: `add cookie.png`
- Pet slot: `add pet.png`
- Relay cookie slot: `add relay.png`
- Treasure slot: `add treasure.png`

Combi layout references:

- Combi with relay: `combi cookie 1 + relay preview.png`
- Combi without relay: `combi cookie no relay preview.png`

Mode group layout references:

- Trophy Race and Champions League: `trophy race-champions league preview.png`
- Breakout: `preview breakout groups.png`
- Guild Run: `guild run preview.png`

Implementation should copy any runtime images it needs into `public/` before referencing them from app code. The source files in `assets/` are not browser-served runtime URLs.

## Empty Slot Behavior

Every empty slot is an interactive add target:

- Clicking an empty main cookie slot opens the Cookies catalog or item picker with the destination set to that main cookie slot.
- Clicking an empty relay cookie slot opens the Cookies catalog or item picker with the destination set to that relay slot.
- Clicking an empty pet slot opens the Pets catalog or item picker with the destination set to that pet slot.
- Clicking an empty treasure slot opens the Treasures catalog or item picker with the destination set to that treasure slot.

The destination context must preserve:

- List id.
- List format.
- Group or arena id when applicable.
- Combi id or combi index.
- Slot type.
- Treasure slot index when adding one treasure to a specific treasure slot.

After the user chooses an item, return them to the originating list detail view and replace only the selected add-option artwork with the chosen item artwork unless the user also chooses an automatic paired-pet addition.

## Replacement Sizing

Chosen item artwork should occupy the same visual footprint as the add-option artwork it replaces.

- A chosen main cookie replaces `add cookie.png` at the same slot size and position.
- A chosen relay cookie replaces `add relay.png` at the same slot size and position.
- A chosen pet replaces `add pet.png` at the same slot size and position.
- A chosen treasure replaces `add treasure.png` at the same slot size and position.

Do not let a chosen item resize the combi, move neighboring slots, or change the group grid. Use object-fit/object-position rules so item art fits inside the existing slot footprint.

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

Combis with relay should follow `combi cookie 1 + relay preview.png`:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- The relay cookie add slot sits at the lower right and uses the relay artwork, including the small `2` marker.

Combis without relay should follow `combi cookie no relay preview.png`:

- Three treasure add slots sit across the top.
- The pet add slot sits to the left of the main cookie.
- The main cookie add slot is the central, largest slot.
- No relay slot, relay placeholder, or empty relay column is rendered.

## Format-Specific Empty Lists

Trophy Race:

- Show the default empty combis using the relay combi layout.
- Label combis as arenas or slots according to the Trophy Race list UI.
- Use the `trophy race-champions league preview.png` spacing and alternating panel treatment as the visual reference.
- Users may add more combis until the Trophy Race maximum is reached.

Breakout:

- Show groups as named sections, such as `Group 1` and `Group 2`.
- Each group contains a grid of no-relay combis.
- Use `preview breakout groups.png` as the visual reference for group spacing, group headings, alternating combi backgrounds, and multi-row wrapping.
- Each combi in a Breakout group has one pet slot, one main cookie slot, and three treasure slots.
- The small flag marker at the bottom-right of each Breakout combi should show that combi's number within its group.
- Breakout combi numbering restarts at `1` inside each group and follows the group's visual/order sequence.
- Breakout must not render relay slots.

Guild Run:

- Show exactly 12 arena sections by default.
- Each arena uses the relay combi layout.
- Use `guild run preview.png` as the visual reference for the 12-arena grid, arena labels, and alternating panel backgrounds.
- Users cannot add or remove Guild Run arenas.

Champions League:

- Show exactly 3 arena sections by default.
- Each arena uses the relay combi layout.
- Use `trophy race-champions league preview.png` as the visual reference for arena spacing, labels, and alternating panel backgrounds.
- Users cannot add or remove Champions League arenas.

None:

- None-format lists do not use combis, arenas, or groups.
- Empty None lists should show individual add actions for cookies, pets, and treasures rather than the combi preview layouts.
- Cookie-pet pairing still applies when the user adds a cookie and chooses to add its paired pet as an individual item.

## Acceptance Criteria

- [ ] Empty Trophy Race lists display relay combi slots using the specified add-option artwork.
- [ ] Empty Breakout lists display groups of no-relay combis using the specified add-option artwork.
- [ ] Breakout combis show numbered flag markers, restarting from `1` in each group.
- [ ] Empty Guild Run lists display 12 relay-layout arenas.
- [ ] Empty Champions League lists display 3 relay-layout arenas.
- [ ] Empty None lists do not render combi layouts.
- [ ] Clicking any add-option artwork opens the correct catalog or picker for that slot type.
- [ ] The chosen item returns to the originating list slot.
- [ ] Chosen item art replaces the add-option art without changing the slot footprint.
- [ ] Choosing a main cookie can also add a paired pet to the same combi's empty pet slot.
- [ ] Relay cookie choices do not trigger paired-pet prompts.
