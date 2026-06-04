# User Story: Fill Empty List Slot

## Story

As a player, I want to click an empty slot and choose an item from the matching catalog so I can build my list visually.

## Source Specs

- `../features/F006-empty-list-layouts.md`
- `../features/F001-catalog-pages.md`

## Scenario

1. The user opens a list detail view.
2. The user clicks an empty cookie, relay cookie, pet, or treasure slot.
3. The website opens the matching catalog in list-selection mode.
4. The user browses, searches, sorts, or filters catalog items.
5. The user selects a compatible item.
6. The website returns to the list detail view and fills the original slot.

## Acceptance Criteria

- [ ] Empty main cookie and relay cookie slots open the Cookies catalog.
- [ ] Empty pet slots open the Pets catalog.
- [ ] Empty treasure slots open the Treasures catalog.
- [ ] Catalog pages in list-selection mode show Select actions.
- [ ] The catalog page provides a cancel/back action.
- [ ] Canceling returns to the list detail view without changing the list.
- [ ] Selecting an item fills the original slot.
- [ ] The chosen item artwork keeps the same visual footprint as the empty slot artwork.
- [ ] Incompatible items are disabled, hidden, or explained.

## Out Of Scope

- Opening a separate generic picker page.
- Changing unrelated slots when the user fills one slot.

