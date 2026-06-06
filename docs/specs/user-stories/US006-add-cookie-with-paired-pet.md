# User Story: Add Cookie With Paired Pet

## Story

As a player, I want the app to offer a cookie's paired pet when I add a cookie so I can fill related combi slots faster.

## Source Specs

- `../features/F001-catalog-pages.md`
- `../features/F006-empty-list-layouts.md`

## Scenario

1. The user selects a cookie from a catalog or from list-selection mode.
2. If the cookie has paired pets in ordinary catalog mode, the add-to-list dialog lets the user choose cookie only, cookie with one paired pet, or cancel while choosing the destination list.
3. If the cookie has paired pets in list-selection mode, the website prompts the user after the destination add-item slot is already known.
4. If the user chooses cookie with pet, the website adds both items only when the destination supports it.

## Acceptance Criteria

- [ ] A cookie with 1 paired pet offers Add cookie only, Add cookie and pet, and Cancel choices.
- [ ] A cookie with 2 paired pets lets the user choose which paired pet to add.
- [ ] The paired-pet choice appears inside the ordinary catalog add-to-list dialog with the destination list choice.
- [ ] Clicking Add after a cookie-with-pet choice opens the selected list in pending placement mode.
- [ ] Cookie-with-pet pending placement only offers compatible-slot picker targets that can add both selected items together.
- [ ] In list-selection mode, automatic paired-pet addition only uses an empty compatible pet slot in the same combi.
- [ ] The website does not replace a filled pet slot automatically.
- [ ] Relay-cookie selection does not trigger the paired-pet prompt.
- [ ] Cookie selection is always one cookie at a time, including combis with both main and relay cookie slots.

## Out Of Scope

- Choosing more than one paired pet for a single cookie.
- Replacing existing pets without an explicit pet-slot action.
