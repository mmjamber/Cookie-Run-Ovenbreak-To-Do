# User Story: Add Cookie With Paired Pet

## Story

As a player, I want the app to offer a cookie's paired pet when I add a cookie so I can fill related combi slots faster.

## Source Specs

- `../features/F001-catalog-pages.md`
- `../features/F006-empty-list-layouts.md`

## Scenario

1. The user selects a cookie from a catalog or from list-selection mode.
2. If the cookie has paired pets in ordinary catalog mode, the add-to-list dialog lets the user choose cookie only, cookie with one paired pet, or cancel while choosing the destination list.
3. The paired-pet option is checked by default because it is the most commonly picked option.
4. If the destination is already known to be a `relay` slot, the cookie-only option is checked by default.
5. If the user leaves the paired-pet option checked but then chooses a `relay` destination, the website ignores the paired-pet choice and adds only the cookie to the relay slot.
6. If the cookie has paired pets in list-selection mode, the website prompts the user after the destination add-item slot is already known, except that `relay` destinations are treated as cookie-only.
7. If the user chooses cookie with pet, the website adds both items only when the destination supports it.
8. If the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, and the add-cookie-with-pet option was selected, the website opens a `With pet?` dialog with `Yes` and `No` choices before completing the switch.

## Acceptance Criteria

- [ ] A cookie with 1 paired pet offers Add cookie only, Add cookie and pet, and Cancel choices.
- [ ] A cookie with 2 paired pets lets the user choose which paired pet to add.
- [ ] Add cookie and pet is checked by default when the destination is not already known to be `relay`.
- [ ] Add cookie only is checked by default when the destination is known to be `relay`.
- [ ] The paired-pet choice appears inside the ordinary catalog add-to-list dialog with the destination list choice.
- [ ] Clicking Add after a cookie-with-pet choice opens the selected list in pending placement mode.
- [ ] Cookie-with-pet pending placement offers targets that can add both selected items together, plus compatible `relay` targets that receive only the cookie.
- [ ] If a checked paired-pet choice reaches a `relay` destination, the website ignores the paired pet and adds only the cookie to the relay slot.
- [ ] In list-selection mode, automatic paired-pet addition uses an empty compatible pet slot in the same combi unless the user explicitly chooses `Switch?` on a compatible filled pet slot.
- [ ] The website does not replace a filled pet slot without an explicit `Switch?` action.
- [ ] Switching a compatible cookie slot where the selected cookie's linked pet is already present opens a `With pet?` dialog when add cookie and pet was selected.
- [ ] Choosing `Yes` in the `With pet?` dialog switches the cookie and keeps the linked pet included in the placement.
- [ ] Choosing `No` in the `With pet?` dialog switches only the cookie and leaves the pet slot unchanged.
- [ ] Relay-cookie selection does not trigger the paired-pet prompt.
- [ ] Cookie selection is always one cookie at a time, including combis with both main and relay cookie slots.

## Out Of Scope

- Choosing more than one paired pet for a single cookie.
- Replacing existing pets without an explicit `Switch?` action.
