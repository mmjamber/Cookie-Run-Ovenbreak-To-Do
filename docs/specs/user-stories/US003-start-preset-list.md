# User Story: Open Preset List

## Story

As a player, I want to open generated preset mode lists so I do not have to set up common formats manually.

## Source Specs

- `../features/F003-preset-lists.md`
- `../features/F002-list-formats.md`

## Scenario

1. The user chooses an existing Trophy Race, Breakout, Champions League, or Guild Run preset-derived list.
2. The website opens the existing preset-derived list.
3. If the preset-derived list has been deleted or otherwise does not exist after profile initialization, the website does not recreate it.
4. The user can create a new custom list with the same format through Add list if they want that mode again.
5. The user fills in items and edits levels within the preset format rules.

## Acceptance Criteria

- [ ] Preset entry points are visible from the homepage or To-do flow.
- [ ] Every new local user or guest profile starts with generated preset-derived lists for the four default modes.
- [ ] Selecting an existing preset-derived list opens the saved preset-derived list.
- [ ] Deleted preset-derived lists are not recreated by preset selection.
- [ ] Each preset initializes the correct format and default structure.
- [ ] Preset-derived lists can be renamed.
- [ ] Preset-derived lists can be deleted and reordered with the same controls as custom saved lists.
- [ ] Preset-derived lists persist like custom lists.

## Out Of Scope

- Prefilled game-recommended combis.
- Live game data updates.
