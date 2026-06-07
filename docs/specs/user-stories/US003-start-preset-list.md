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
4. The user can create a new user generated list with the same format through Add list if they want that mode again.
5. If the preset-derived list is Guild Run, the user sets the arena target sets before adding items to any unset arena. The target-set choices are displayed as `7/7/5`, `11/11/9`, and `15/15/12`.
6. The user fills in empty add-item slots and edits levels within the preset format rules.

## Acceptance Criteria

- [ ] Preset entry points are visible from the homepage or To-do flow.
- [ ] Every new local user or guest profile starts with generated preset-derived lists for the four default modes.
- [ ] Selecting an existing preset-derived list opens the saved preset-derived list.
- [ ] Deleted preset-derived lists are not recreated by preset selection.
- [ ] Each preset initializes the correct format and default structure.
- [ ] Preset-derived lists start with empty add-item slots and no preselected catalog items.
- [ ] Trophy Race and Breakout preset-derived lists use full max targets.
- [ ] Champions League preset-derived lists initialize Arena 1 as low, Arena 2 as mid, and Arena 3 as full.
- [ ] Guild Run preset-derived lists require the user to set arena target sets before adding items to those arenas.
- [ ] Guild Run preset-derived target-set choices are displayed as `7/7/5`, `11/11/9`, and `15/15/12`.
- [ ] Preset-derived lists can be renamed.
- [ ] Preset-derived lists can be deleted and reordered with the same controls as user generated saved lists.
- [ ] Preset-derived lists persist like user generated lists.

## Out Of Scope

- Premade lists with game-recommended combis or any preselected default items.
- Live game data updates.
