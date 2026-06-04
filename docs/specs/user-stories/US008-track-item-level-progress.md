# User Story: Track Item Level Progress

## Story

As a player, I want to edit current and target levels and mark items complete so I can track upgrade progress.

## Source Specs

- `../features/F002-list-formats.md`
- `../G002-rules.md`
- `../G006-ui-spec.md`

## Scenario

1. The user opens a list detail view.
2. The user reviews each item's current and target levels.
3. The user edits current or target levels within the allowed range.
4. The user marks an item complete or raises current level to target level.
5. The website updates the item's completion state.

## Acceptance Criteria

- [ ] Every selected item shows current and target levels.
- [ ] Newly added items start with current level `Lv. 1`.
- [ ] Target levels default to the maximum allowed by the destination.
- [ ] Users can edit current and target levels.
- [ ] Cookie and pet levels cannot exceed `Lv. 15`.
- [ ] Treasure levels cannot exceed `Lv. 12`.
- [ ] Arena target sets limit item targets in Guild Run and Champions League.
- [ ] Manually marking an item complete sets current level to target level.
- [ ] Completion state does not rely on color alone.

## Out Of Scope

- Separate completion controls for whole combis, groups, arenas, or list sections.
- Automatic game account progress sync.

