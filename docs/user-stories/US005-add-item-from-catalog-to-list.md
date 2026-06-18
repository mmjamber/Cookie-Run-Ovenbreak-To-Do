# User Story: Add Item From Catalog To List

## Story

As a player, I want to add catalog items to compatible lists and slots so my list reflects my upgrade targets.

## Source Specs

- `../specs/features/F001-catalog-pages.md`
- `../specs/features/F002-list-formats.md`

## Scenario

1. The user opens a catalog page.
2. The user clicks a cookie, pet, or treasure item.
3. The website opens the add-to-list dialog.
4. The user chooses a destination list.
5. If the clicked item is a cookie with paired pets, the user chooses whether to add the cookie only or add one paired pet too.
6. The user clicks Add.
7. The website opens the chosen list detail view in pending placement mode, using the compatible-slot picker.
8. The user chooses which compatible empty slot should be filled by the selected item, or explicitly chooses `Switch?` on a compatible filled slot.
9. The website adds the item or items to the chosen empty slot, replaces the explicitly switched filled slot, or updates the compatible grouped entry.

## Acceptance Criteria

- [ ] Clicking an ordinary catalog item opens the add-to-list dialog.
- [ ] The add-to-list dialog shows lists linked to the current local profile.
- [ ] The add-to-list dialog lets the user choose the destination list, but not the final slot.
- [ ] The dialog Add button opens the chosen list detail view in pending placement mode.
- [ ] Pending placement mode shows compatible empty slots and compatible filled slots across the chosen list, including multiple combis, groups, arenas, or None-format entries.
- [ ] Incompatible slot choices are blocked or clearly explained.
- [ ] Compatible filled slots show a grayed-out `Switch?` state on hover, or after tap/click on mobile.
- [ ] Activating `Switch?` replaces the filled slot's current item with the selected catalog item.
- [ ] Cookies can be added only to `add cookie`, `relay`, or None-format cookie add-item slots.
- [ ] Pets can be added only to `add pet` or None-format pet add-item slots.
- [ ] Treasures can be added only to `add treasure` or None-format treasure add-item slots.
- [ ] Cookie-with-pet choices allow placement targets that can add both selected items together, plus compatible `relay` targets that receive only the cookie.
- [ ] Newly added items start at current level `Lv. 1`.
- [ ] Newly added item targets match the destination rules.
- [ ] Replaced items discard the previous item's level and completion state and start with the new item's default current and target levels.
- [ ] The user can cancel without changing a list.

## Out Of Scope

- Adding items to remote or shared lists.
- Bypassing slot compatibility rules.
