# Feature Spec: Custom Lists

## Summary

Users can create their own named to-do lists using any of the five supported formats.

## User Story

As a player, I want to make multiple named leveling lists so I can track different goals without mixing them together.

## Create Flow

1. User opens Create Custom List.
2. User enters a list name.
3. User chooses a format: Trophy Race, Breakout, Guild Run, Champions League, or Free.
4. If the format requires setup options, the app asks for them.
5. App creates the list and opens the list detail page.

## Setup Options

Trophy Race:

- Default to 4 combis.
- No required setup unless the UI allows choosing an initial count.

Breakout:

- User chooses initial group size from 3 to 15 combis.

Guild Run:

- Creates 12 arenas.
- Target set behavior depends on the Guild Run open question in `list-formats.md`.

Champions League:

- Creates 3 arenas.
- User can choose target set per arena.

Free:

- Creates an empty free item list.

## Management Actions

Users should be able to:

- Rename a list.
- Duplicate a list.
- Delete a list.
- Add allowed sections or combis.
- Edit selected items.
- Edit target levels where the format allows it.

## Acceptance Criteria

- [ ] A custom list requires a non-empty name.
- [ ] A custom list requires one selected format.
- [ ] Format-specific setup is captured before list creation.
- [ ] Created lists persist locally.
- [ ] Users can have multiple lists with the same format.

## Open Questions

- Should duplicate list names be allowed?
- Should deleting a list require confirmation or support undo?
