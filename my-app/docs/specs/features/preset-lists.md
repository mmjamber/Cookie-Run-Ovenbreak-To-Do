# Feature Spec: Preset Lists

## Summary

The website provides preset to-do lists for four game modes:

- Trophy Race
- Breakout
- Champions League
- Guild Run

Presets give users a correctly structured starting point without requiring them to manually choose a format.

## Goals

- Let players start a mode-specific list quickly.
- Apply the correct structure and limits for each game mode.
- Keep preset lists editable where the format allows item selection.

## Preset Behavior

When a user chooses a preset:

- The app creates a new list using that mode's format, or opens an existing saved preset-derived list if the UX chooses reusable presets.
- The list receives a default name based on the mode.
- The list contains the required default sections, combis, groups, or arenas.

## Mode Defaults

| Mode | Format | Default structure |
| --- | --- | --- |
| Trophy Race | Trophy Race | 4 combis |
| Breakout | Breakout | User chooses 3 to 15 combis for first group |
| Champions League | Champions League | 3 arenas |
| Guild Run | Guild Run | 12 arenas |

## Requirements

- Preset entry points should be visible from the Dashboard.
- Presets must respect all validation rules from `list-formats.md`.
- Users must be able to name or rename preset-derived lists.
- Preset-derived lists should persist like custom lists.

## Acceptance Criteria

- [ ] Dashboard shows all four preset modes.
- [ ] Selecting a preset creates or opens a valid list.
- [ ] Each preset initializes the correct format.
- [ ] Preset-derived lists can be saved and resumed.

## Open Questions

- Should clicking a preset always create a new list, or should it ask whether to create new or open existing?
- Should presets include sample item slots only, or eventually prefilled game-recommended combis?
