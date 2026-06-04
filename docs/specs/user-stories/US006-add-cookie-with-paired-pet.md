# User Story: Add Cookie With Paired Pet

## Story

As a player, I want the app to offer a cookie's paired pet when I add a cookie so I can fill related combi slots faster.

## Source Specs

- `../features/F001-catalog-pages.md`
- `../features/F006-empty-list-layouts.md`

## Scenario

1. The user selects a cookie from a catalog or from list-selection mode.
2. If the cookie has paired pets, the website prompts the user.
3. The user chooses cookie only, cookie with one paired pet, or cancel.
4. If the user chooses cookie with pet, the website adds both items only when the destination supports it.

## Acceptance Criteria

- [ ] A cookie with 1 paired pet offers Add cookie only, Add cookie and pet, and Cancel choices.
- [ ] A cookie with 2 paired pets lets the user choose which paired pet to add.
- [ ] The paired-pet prompt happens before the destination list is chosen in ordinary catalog add flow.
- [ ] In list-selection mode, automatic paired-pet addition only uses an empty compatible pet slot in the same combi.
- [ ] The website does not replace a filled pet slot automatically.
- [ ] Relay-cookie selection does not trigger the paired-pet prompt.
- [ ] In 2-cookie selection, the paired-pet prompt applies only to the first selected cookie.

## Out Of Scope

- Choosing more than one paired pet for a single cookie.
- Replacing existing pets without an explicit pet-slot action.

