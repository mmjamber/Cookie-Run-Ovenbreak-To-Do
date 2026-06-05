# User Story: Manage Saved Lists

## Story

As a player, I want to rename, reorder, and delete lists so my saved list area stays organized.

## Source Specs

- `../features/F004-custom-lists.md`
- `../features/F005-homepage-list-cards.md`

## Scenario

1. The user opens a saved list or list management control.
2. The user renames a list, reorders lists, or chooses to delete a list.
3. If renaming, the website validates the new name.
4. If reordering, the website saves the new list order.
5. If deleting, the website asks for confirmation.
6. The homepage and To-do page reflect the updated saved list set and order.

## Acceptance Criteria

- [ ] Users can rename saved lists.
- [ ] Users can reorganize the saved-list order shown on the To-do page.
- [ ] The homepage mirrors the first four lists in the To-do page's current order.
- [ ] Generated default preset-derived lists can be edited, renamed, deleted, and reordered like regular saved lists.
- [ ] List names must remain unique within the current local profile.
- [ ] Empty list names are blocked.
- [ ] Users can delete saved lists.
- [ ] Deleting a list requires confirmation.
- [ ] Deleted lists are removed from homepage list cards.
- [ ] Deleted default preset-derived lists are not automatically recreated after the current profile has been initialized.
- [ ] If every saved list is deleted, one add-list card appears under `My Lists`.

## Out Of Scope

- Recovering deleted lists.
- Bulk list management.
