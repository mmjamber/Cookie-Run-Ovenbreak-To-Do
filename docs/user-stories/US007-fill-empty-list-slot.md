# User Story: Fill Empty List Slot

## Story

As a player, I want to click an empty add-item slot and choose an item from the matching catalog so I can build my list visually.

## Source Specs

- `../specs/features/F006-empty-list-layouts.md`
- `../specs/features/F001-catalog-pages.md`

## Scenario

1. The user opens a list detail view.
2. The user clicks an empty cookie, relay cookie, pet, or treasure add-item slot.
3. The website opens the matching catalog in list-selection mode.
4. The user browses, searches, sorts, or filters catalog items.
5. The user selects a compatible item.
6. If the user is adding treasures to a combi-format destination, they may select up to 3 compatible treasures at once.
7. The website numbers selected combi treasures `1`, `2`, and `3`.
8. The website returns to the list detail view and fills the original add-item slot or compatible empty combi treasure slots.
9. The filled slots hide their empty add-option artwork and show the chosen catalog item artwork instead.

## Acceptance Criteria

- [ ] Empty `add cookie` and `relay` add-item slots open the Cookies catalog.
- [ ] Empty `add pet` add-item slots open the Pets catalog.
- [ ] Empty `add treasure` add-item slots open the Treasures catalog.
- [ ] Catalog pages in list-selection mode show Select actions.
- [ ] The catalog page provides a cancel/back action.
- [ ] Canceling returns to the list detail view without changing the list.
- [ ] Selecting an item fills the original add-item slot.
- [ ] Filled add-item slots hide their empty add-option artwork.
- [ ] Multiple selection is available only when adding treasures to a combi-format destination.
- [ ] Selected combi treasures are visibly numbered `1`, `2`, and `3`.
- [ ] The chosen item artwork keeps the same visual footprint as the empty slot artwork.
- [ ] Incompatible items are disabled, hidden, or explained.

## Out Of Scope

- Opening a separate generic picker page.
- Changing unrelated slots when the user fills one slot.
