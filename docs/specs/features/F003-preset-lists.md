# Feature Spec: Preset Lists

## Summary

The website provides preset to-do lists for four game modes:

- Trophy Race
- Breakout
- Champions League
- Guild Run

Presets give users a correctly structured starting point without requiring them to manually choose a format.

For every new local user or guest profile, the website generates one preset-derived list for each default mode. These generated defaults are real saved list cards in the To-do page order, not separate homepage shortcuts.

Default preset-derived lists always start with empty add-item slots. They must never contain preselected cookies, pets, treasures, premade combis, or recommended game data.

## Goals

- Let players start a mode-specific list quickly.
- Apply the correct structure and limits for each game mode.
- Keep preset lists editable where the format allows item selection.
- Let default preset-derived lists be edited, renamed, deleted, and reordered with the same controls as user generated saved lists.

## Preset Behavior

When a user chooses a preset:

- If the current profile has that preset-derived list, choosing the preset opens the existing saved preset-derived list.
- If that preset-derived list was deleted or otherwise does not exist after profile initialization, choosing the preset must not recreate it.
- If a deleted preset-derived list is unavailable, the user can create a new user generated list with the same format through Add list.
- The generated list receives a default name based on the mode.
- The list contains the required default sections, combis, groups, or arenas.
- The list's item slots are empty until the user fills them with catalog items.

When a new local user or guest profile is initialized:

- The website creates the Trophy Race, Guild Run, Champions League, and Breakout preset-derived lists automatically.
- The generated lists appear as saved list cards in the To-do page list order.
- Homepage `My Lists` shows these cards only by mirroring the first four To-do cards.
- The generated defaults must not be recreated after the initialized profile deletes them.

## Mode Defaults

| Mode | Format | Default structure | Default target behavior |
| --- | --- | --- | --- |
| Trophy Race | Trophy Race | 4 empty arenas using combi type 1 slots | All item targets use full max levels |
| Breakout | Breakout | 2 editable groups of empty combi type 2 slots: Group 1 has 3 combis, Group 2 has 10 combis | All item targets use full max levels |
| Champions League | Champions League | 3 empty arenas using combi type 1 slots | Arena 1 uses low, Arena 2 uses mid, Arena 3 uses full |
| Guild Run | Guild Run | 12 empty arenas using combi type 1 slots | Each arena target set must be chosen by the user |

## Requirements

- Preset-derived list cards should be visible from the homepage when they are among the first four cards in the To-do page order.
- Presets must respect all validation rules from `F002-list-formats.md`.
- Presets must start with empty add-item slots only. No preset-derived list may include preselected catalog items or premade recommended combis.
- Users must be able to name or rename preset-derived lists.
- Users must be able to delete and reorder generated default preset-derived lists with the same controls as user generated saved lists.
- Users can manually change Breakout preset groups and group sizes after creation, within Breakout format limits.
- Users must choose target sets for Guild Run arenas before adding items to those arenas. The user-facing choices are labeled `7/7/5`, `11/11/9`, and `15/15/12`.
- Preset-derived lists should persist like user generated lists.

## Acceptance Criteria

- [ ] Every new local user or guest profile starts with generated preset-derived lists for all four default modes.
- [ ] Homepage `My Lists` shows preset-derived lists only by mirroring the first four cards in To-do page order.
- [ ] Selecting a preset-derived list opens the existing saved preset-derived list.
- [ ] Deleted preset-derived lists are not recreated by preset selection.
- [ ] Each preset initializes the correct format.
- [ ] Each preset initializes empty add-item slots without preselected catalog items or premade combis.
- [ ] Trophy Race and Breakout preset-derived lists use full max targets.
- [ ] Champions League preset-derived lists initialize Arena 1 as low, Arena 2 as mid, and Arena 3 as full.
- [ ] Guild Run preset-derived lists require the user to set arena target sets.
- [ ] Guild Run preset-derived target-set choices are displayed as `7/7/5`, `11/11/9`, and `15/15/12`.
- [ ] Preset-derived lists can be saved, resumed, edited, renamed, deleted, and reordered.
