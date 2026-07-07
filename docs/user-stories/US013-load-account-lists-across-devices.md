# User Story: Load Account Lists Across Devices

## Story

As a signed-in player, I want my saved lists to load from my account on another device so I can continue planning anywhere.

## Source Specs

- `../specs/technical/T002-local-storage-and-data-architecture.md`
- `../specs/features/F004-user-generated-lists.md`
- `../specs/features/F005-homepage-list-cards.md`
- `../specs/user-interface/UI006-empty-states-and-errors.md`

## Scenario

1. The user signs in on one device and creates or edits saved lists.
2. The website persists list data to the signed-in Supabase account.
3. The user signs in on another device.
4. The website loads account-owned saved lists.
5. The To-do page shows lists in account-backed display order.
6. The homepage mirrors the first four account-owned lists in that order.

## Acceptance Criteria

- [ ] Signed-in saved lists persist to the account.
- [ ] Signing in on another device loads account-owned saved lists.
- [ ] List names are unique per account.
- [ ] To-do order is account-scoped.
- [ ] Homepage `My Lists` mirrors the first four account-owned lists by saved order.
- [ ] Loading, permission, network, and save failures show user-facing feedback.

## Out Of Scope

- Offline conflict resolution.
- Public list sharing.
- Export files.
