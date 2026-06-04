# User Story: Create Custom List

## Story

As a player, I want to create a named list with a chosen format so I can track a specific goal.

## Source Specs

- `../features/F004-custom-lists.md`
- `../features/F002-list-formats.md`

## Scenario

1. The user opens Create Custom List.
2. The user enters a list name.
3. The user chooses Trophy Race, Breakout, Guild Run, Champions League, or None.
4. The website asks for any format-specific setup choices.
5. The website creates the list and opens its detail view.

## Acceptance Criteria

- [ ] A custom list requires a non-empty name.
- [ ] The selected name must be unique within the current local profile.
- [ ] A custom list requires one selected format.
- [ ] Format-specific setup is captured before creation.
- [ ] The created list opens in the correct detail layout.
- [ ] The created list persists locally.

## Out Of Scope

- Sharing custom lists.
- Importing custom lists from another profile or account.

