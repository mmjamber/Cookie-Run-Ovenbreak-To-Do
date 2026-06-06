# Feature Spec: Custom Lists

## Summary

Users can create their own named to-do lists using any of the five supported formats.

## User Story

As a player, I want to make multiple named leveling lists so I can track different goals without mixing them together.

## Create Flow

1. User opens Add list.
2. User enters a list name or leaves the name field blank while choosing a format.
3. User chooses a format: Trophy Race, Breakout, Guild Run, Champions League, or None.
4. If the name field is empty, the website auto-fills the list name with the chosen format's default name.
5. The user can keep or edit any auto-filled name.
6. If the format requires setup options, the website asks for them.
7. The website creates the list and opens the list detail page only after the list has a valid name.

## Name Behavior

- A custom list cannot be saved without a non-empty name.
- Selecting any format auto-fills an empty name field with the matching default name.
- Default auto-filled names are `Trophy Race`, `Breakout`, `Guild Run`, `Champions League`, and `No mode` for None.
- Format selection must not overwrite a name the user has already typed.
- Auto-filled names remain editable before saving.
- Auto-filled names follow the same uniqueness validation as manually entered names.

## Setup Options

Trophy Race:

- User chooses the starting arena count from 1 to 10.
- This arena count is the only required Trophy Race setup choice.
- Trophy Race may label combis as arenas, but it does not ask for arena target sets during setup.

Breakout:

- User chooses initial group size from 3 to 15 combis.

Guild Run:

- Creates 12 arenas.
- User chooses the maximum target set for each arena during setup.
- Arena maximum target sets can be changed manually later unless a future spec defines fixed arena limits.

Champions League:

- Creates 3 arenas.
- User can choose the maximum target set per arena.

None:

- Creates an empty flexible list with no default combis or items.
- The list detail add action asks whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.

## Management Actions

Users should be able to:

- Rename a list.
- Reorder saved lists in the To-do page list order.
- Delete a list.
- Add allowed sections or combis.
- Edit selected items.
- Edit current and target levels in every format, within the current item, list, or arena maximum.
- Manually mark items complete, which sets the item's current level to its target level.
- Edit arena maximum target sets where the format allows manual limit changes.

Rules:

- A custom list requires a non-empty name before it can be saved.
- List names must be unique within the current local profile.
- Creating or renaming a list must validate that the resulting name is unique.
- Reordering saved lists updates the To-do page order and the homepage's mirrored first-four list cards.
- Generated default preset-derived lists participate in the same rename, delete, and reorder behavior as custom lists.
- Deleting a list requires confirmation.

## Acceptance Criteria

- [ ] A custom list requires a non-empty name.
- [ ] Selecting any format auto-fills an empty name field with that format's default name.
- [ ] Selecting None auto-fills an empty name field with `No mode`.
- [ ] Format selection does not overwrite a user-entered name.
- [ ] Auto-filled names can still be edited before saving.
- [ ] A custom list requires one selected format.
- [ ] Format-specific setup is captured before list creation.
- [ ] Trophy Race setup captures a starting arena count from 1 to 10.
- [ ] Guild Run setup captures a maximum target set for each of its 12 arenas.
- [ ] Created lists persist locally.
- [ ] Users can have multiple lists with the same format.
- [ ] Reused list names are blocked.
- [ ] Deleting a list asks for confirmation.
