# User Story: Track Item Level Progress

## Story

As a player, I want to edit current levels, adjust allowed target settings, and mark items complete so I can track upgrade progress.

## Source Specs

- `../specs/features/F002-list-formats.md`
- `../specs/G002-rules.md`
- `../specs/user-interface/UI005-list-detail-and-combi-layouts.md`
- `../specs/user-interface/UI007-accessibility.md`

## Scenario

1. The user opens a list detail view.
2. The user reviews each item's current and target levels.
3. The user edits current levels and any format-allowed target settings within the allowed range.
4. The user marks an item complete or raises current level to target level.
5. The website updates the item's completion state.

## Acceptance Criteria

- [ ] Every selected item shows current and target levels.
- [ ] Newly added items start with current level `Lv. 1`.
- [ ] Target levels default to the maximum allowed by the destination.
- [ ] Users can edit current levels in every format.
- [ ] Users can directly edit target levels only in None-format lists.
- [ ] Cookie and pet levels cannot exceed `Lv. 15`.
- [ ] Treasure levels cannot exceed `Lv. 12`.
- [ ] None-format target levels cannot exceed the item type's absolute cap.
- [ ] Guild Run target levels change only through user-selected low, mid, or full arena target sets.
- [ ] Guild Run target-set choices are displayed to the user as `7/7/5`, `11/11/9`, and `15/15/12`.
- [ ] Trophy Race and Breakout target levels are fixed to full max targets.
- [ ] Champions League target levels are fixed by arena order: low, mid, and full.
- [ ] Manually marking an item complete sets current level to target level.
- [ ] Completion state does not rely on color alone.

## Out Of Scope

- Separate completion controls for whole combis, groups, arenas, or list sections.
- Automatic game account progress sync.
