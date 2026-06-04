# User Story: Add Item From Catalog To List

## Story

As a player, I want to add catalog items to compatible lists and slots so my list reflects my upgrade targets.

## Source Specs

- `../features/F001-catalog-pages.md`
- `../features/F002-list-formats.md`

## Scenario

1. The user opens a catalog page.
2. The user chooses a cookie, pet, treasure, or allowed multi-item selection.
3. The website opens the add-to-list picker.
4. The user chooses a compatible list.
5. The user chooses a compatible slot.
6. The website adds the item or items to the list.

## Acceptance Criteria

- [ ] The add-to-list picker shows lists linked to the current local profile.
- [ ] The picker shows only compatible destination slots after a list is selected.
- [ ] Incompatible destination choices are blocked or clearly explained.
- [ ] Cookies can be added to main cookie, relay cookie, or None-format cookie slots.
- [ ] Pets can be added to pet or None-format pet slots.
- [ ] Treasures can be added to treasure or None-format treasure slots.
- [ ] Newly added items start at current level `Lv. 1`.
- [ ] Newly added item targets match the destination rules.
- [ ] The user can cancel without changing a list.

## Out Of Scope

- Adding items to remote or shared lists.
- Bypassing slot compatibility rules.

