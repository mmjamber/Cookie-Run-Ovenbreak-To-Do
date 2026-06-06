# User Story: Delete Item From List Block

## Story

As a player, I want to delete a catalog item from a combi or free item block so I can clear that slot and choose a different item later.

## Source Specs

- `../features/F006-empty-list-layouts.md`
- `../user-interface/UI005-list-detail-and-combi-layouts.md`
- `../technical/T002-local-storage-and-data-architecture.md`

## Scenario

1. The user opens a list detail view.
2. The user finds a combi block or free item block with one or more filled catalog items.
3. The user clicks the options toggle at the top-right side of that block.
4. The website shows delete actions for filled catalog items in the current block.
5. The user chooses one filled item to delete.
6. The website removes that catalog item from its add-item slot.
7. The emptied slot shows its matching add-option artwork again.

## Acceptance Criteria

- [ ] Every combi block has an options toggle at the top-right side of the block.
- [ ] Every free item block has an options toggle at the top-right side of the block.
- [ ] Opening the options toggle shows delete actions only for filled catalog items in that current block.
- [ ] Deleting an item clears only that item's add-item slot.
- [ ] Other filled items in the same block remain unchanged.
- [ ] The surrounding combi or free item block remains after the item is deleted.
- [ ] The matching add-option artwork returns when a slot becomes empty again.
- [ ] Empty add-item slots do not show delete actions.

## Out Of Scope

- Deleting the entire combi block or free item block.
- Deleting saved lists from the To-do page.
