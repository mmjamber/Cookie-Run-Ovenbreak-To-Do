# User Story: Start Preset List

## Story

As a player, I want to start or reopen preset mode lists so I do not have to set up common formats manually.

## Source Specs

- `../features/F003-preset-lists.md`
- `../features/F002-list-formats.md`

## Scenario

1. The user chooses a Trophy Race, Breakout, Champions League, or Guild Run preset.
2. If the preset already exists because it was generated for the current local user or guest, the website opens the existing preset-derived list.
3. If the preset has been deleted or otherwise does not exist, the website creates a preset-derived list.
4. The user fills in items and edits levels within the preset format rules.

## Acceptance Criteria

- [ ] Preset entry points are visible from the homepage or To-do flow.
- [ ] Every new local user or guest profile starts with generated preset-derived lists for the four default modes.
- [ ] Selecting a preset creates its reusable list only when that preset-derived list does not already exist in the current profile.
- [ ] Selecting a previously started preset opens the existing saved preset-derived list.
- [ ] Each preset initializes the correct format and default structure.
- [ ] Preset-derived lists can be renamed.
- [ ] Preset-derived lists can be deleted and reordered like regular saved lists.
- [ ] Preset-derived lists persist like custom lists.

## Out Of Scope

- Prefilled game-recommended combis.
- Live game data updates.
