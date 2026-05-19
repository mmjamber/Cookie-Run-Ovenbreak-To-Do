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

- Presets behave as one reusable template per mode.
- If the user has not started that preset before, the website creates the preset-derived list using that mode's format.
- If the user has already started that preset, choosing the preset opens the existing saved preset-derived list.
- The list receives a default name based on the mode.
- The list contains the required default sections, combis, groups, or arenas.

## Mode Defaults

| Mode | Format | Default structure |
| --- | --- | --- |
| Trophy Race | Trophy Race | 4 combis |
| Breakout | Breakout | 2 editable groups by default: Group 1 has 3 combis, Group 2 has 10 combis |
| Champions League | Champions League | 3 arenas |
| Guild Run | Guild Run | 12 arenas |

## Requirements

- Preset entry points should be visible from the homepage.
- Presets must respect all validation rules from `list-formats.md`.
- Users must be able to name or rename preset-derived lists.
- Users can manually change Breakout preset groups and group sizes after creation, within Breakout format limits.
- Preset-derived lists should persist like custom lists.

## Acceptance Criteria

- [ ] homepage shows all four preset modes.
- [ ] Selecting a preset creates its reusable list the first time.
- [ ] Selecting a previously started preset opens the existing saved preset-derived list.
- [ ] Each preset initializes the correct format.
- [ ] Preset-derived lists can be saved and resumed.

## Open Questions

- Should presets include sample item slots only, or eventually prefilled game-recommended combis?
