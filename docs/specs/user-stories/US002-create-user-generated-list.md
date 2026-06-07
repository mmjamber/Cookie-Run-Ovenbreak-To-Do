# User Story: Add List

## Story

As a player, I want to create a named list with a chosen format so I can track a specific goal.

## Source Specs

- `../features/F004-user-generated-lists.md`
- `../features/F002-list-formats.md`

## Scenario

1. The user opens Add list.
2. The user enters a list name or leaves the name field blank.
3. The user chooses Trophy Race, Breakout, Guild Run, Champions League, or None.
4. If the name field is empty, the website fills the name field with the selected format's default name.
5. If the user chooses None, the website fills the empty name field with `No mode`.
6. The user can edit the auto-filled name before saving.
7. The website asks for any format-specific setup choices.
8. The website creates the list and opens its detail view only after the list has a valid name.

## Acceptance Criteria

- [ ] A user generated list requires a non-empty name.
- [ ] The selected name must be unique within the current local profile.
- [ ] Selecting any format auto-fills an empty name field with that format's default name.
- [ ] Selecting None auto-fills an empty name field with `No mode`.
- [ ] Format selection does not overwrite an existing user-entered name.
- [ ] Auto-filled names remain editable before saving.
- [ ] A user generated list requires one selected format.
- [ ] Format-specific setup is captured before creation.
- [ ] Trophy Race setup captures a starting arena count from 1 to 10.
- [ ] Guild Run setup captures a maximum target set for each of its 12 arenas.
- [ ] The created list opens in the correct detail layout.
- [ ] The created list persists locally.

## Out Of Scope

- Sharing user generated lists.
- Importing user generated lists from another profile or account.
