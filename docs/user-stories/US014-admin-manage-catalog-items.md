# User Story: Admin Manage Catalog Items

## Story

As an authorized admin, I want to add, edit, and delete catalog items so the website can include runtime catalog updates without repository asset changes.

## Source Specs

- `../specs/features/F007-admin-catalog-management.md`
- `../specs/technical/T002-local-storage-and-data-architecture.md`
- `../specs/technical/T004-runtime-assets-and-ui-implementation.md`
- `../specs/user-interface/UI006-empty-states-and-errors.md`
- `../specs/user-interface/UI007-accessibility.md`

## Scenario

1. The admin signs in through the normal account flow.
2. The website verifies the account's admin role through the protected account role table.
3. The admin opens catalog management.
4. The admin adds, edits, or deletes a cookie, pet, or treasure.
5. The admin uploads an image when needed.
6. The original upload is stored privately.
7. The approved `.webp` display derivative is stored publicly.
8. Approved runtime catalog records appear on public catalog pages.
9. Non-admin users cannot access admin routes or perform admin mutations.

## Acceptance Criteria

- [ ] Admin access uses the normal account sign-in flow.
- [ ] Admin authorization uses the protected account role table.
- [ ] Only the database owner can grant or revoke admin role.
- [ ] Non-admin direct route access is denied or redirected safely.
- [ ] Admins can add cookies, pets, and treasures.
- [ ] Admins can edit admin-created catalog metadata and images.
- [ ] Admins can delete admin-created catalog items.
- [ ] Release/order numbers auto-increment within type and rarity.
- [ ] Original uploads are private.
- [ ] Approved `.webp` display derivatives are public.
- [ ] Admin changes are auditable.

## Out Of Scope

- Archive or unarchive behavior.
- Bulk delete.
- Official game API fetching.
