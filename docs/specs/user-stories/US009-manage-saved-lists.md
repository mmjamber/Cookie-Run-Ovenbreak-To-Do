# User Story: Manage Saved Lists

## Story

As a player, I want to rename and delete lists so my saved list area stays organized.

## Source Specs

- `../features/F004-custom-lists.md`
- `../features/F005-homepage-list-cards.md`

## Scenario

1. The user opens a saved list or list management control.
2. The user renames a list or chooses to delete it.
3. If renaming, the website validates the new name.
4. If deleting, the website asks for confirmation.
5. The homepage and To-do page reflect the updated saved list set.

## Acceptance Criteria

- [ ] Users can rename saved lists.
- [ ] List names must remain unique within the current local profile.
- [ ] Empty list names are blocked.
- [ ] Users can delete saved lists.
- [ ] Deleting a list requires confirmation.
- [ ] Deleted lists are removed from homepage latest-list cards.
- [ ] Deleted lists are not automatically recreated as default cards after saved list state exists.
- [ ] If every saved list is deleted, no cards appear under `My Lists`.

## Out Of Scope

- Recovering deleted lists.
- Bulk list management.

