# Feature Spec: Admin Catalog Management

## Summary

Authorized admin accounts can add, edit, and delete runtime catalog items for cookies, pets, and treasures. Admin catalog management builds on the shared account/auth system and must not define a separate login system.

## Scope

In scope:

- Admin-only catalog management entry points for authorized accounts.
- Adding runtime catalog items for cookies, pets, and treasures.
- Editing runtime catalog item metadata and images.
- Deleting admin-created catalog items.
- Runtime catalog records stored in the approved database.
- Admin-uploaded images stored through the approved Supabase Storage bucket policy.
- Audit logging for admin catalog changes.

Out of scope for now:

- Archive or unarchive behavior.
- Hiding catalog items without deleting them.
- Bulk delete.
- Full analytics dashboards.
- Automatic fetching from official game sources or APIs.
- User/account management beyond database-owner role grants and revokes.

## Admin Access Model

- Admin users sign in through the normal account flow.
- Admin authorization is checked through the protected account role table defined in `../technical/T002-local-storage-and-data-architecture.md`.
- The database owner is the only actor allowed to grant or revoke admin role.
- Admin UI entry points may be hidden from non-admins, but every admin page, Server Action, Route Handler, database mutation, and storage write must still enforce server-side or database-level authorization.
- Direct navigation to admin routes by non-admin users should show an access-denied state or redirect to a safe non-admin page.
- Every admin mutation must be rejected for non-admin accounts even if the request is sent manually.

## Catalog Item Creation

Admins should have separate creation actions for:

- Add item to catalog: cookies.
- Add item to catalog: pets.
- Add item to catalog: treasures.

Each creation flow requires:

- Item name.
- Item rarity.
- Image upload or previously uploaded image selection.
- Confirmation of the generated catalog id, auto-incremented release/order number, storage object key, and public display URL before publishing.
- A card preview using the same public catalog presentation as the relevant item type.

Cookie-specific fields:

- Rarity: Legendary, Epic, Rare, or Common.
- Connected pet selection that always includes a `None` choice.
- Support for cookies with no pet, 1 pet, or 2 connected pets.

Pet-specific fields:

- Rarity: Legendary, Epic, Rare, or Common.
- Connected cookie selection that always includes a `None` choice.
- A warning when the selected cookie already has 2 connected pets.

Treasure-specific fields:

- Rarity: Legendary, Epic, or Rare, unless the product later approves Common treasures.
- No connected cookie or pet field by default.

## Runtime Records And Ordering

- Admin-created catalog metadata is stored as runtime catalog records in the approved database.
- Runtime records coexist with base imported catalog data.
- Public catalog pages read base imported records plus approved runtime records.
- Runtime catalog records include status, item type, name, rarity, release/order number, pairing links, image references, created/updated timestamps, and admin audit fields.
- Release/order numbers for admin-created catalog items auto-increment within the relevant item type and rarity group.
- Admin-created items render with the same search, sort, rarity grouping, hide-rarity filtering, image fit, and card sizing behavior as imported items.
- Draft or needs-review records do not appear on public catalog pages.

## Image Uploads

- Uploaded images keep their original file as the source of truth.
- Display-ready derivatives use `.webp` where needed.
- Use Supabase Storage with private original uploads and public approved `.webp` display derivatives.
- Public catalog pages reference only approved public display derivatives.
- Private original upload URLs must not be used as public catalog image URLs.
- Admin upload, derivative generation, replacement, and delete writes must be protected by server-side admin authorization and storage policies.

## Edit And Delete Behavior

- Admins may edit catalog item metadata such as name, rarity, release/order number, max level, and pairing links.
- Admins may replace an item image while preserving the catalog item id where saved-list references need continuity.
- Admin-created catalog items may be deleted.
- Deleting an admin-created item removes it from ordinary public catalogs and list-building selection surfaces.
- Specs or implementation tasks must define how existing saved-list references behave before destructive delete is implemented.

## Validation

The admin save flow should block:

- Duplicate catalog ids.
- Duplicate storage keys.
- Unsupported extensions.
- Invalid rarity/type combinations.
- Missing names.
- Missing images.
- Cookie-pet pairing states that exceed the supported pairing limits.

The admin save flow should warn or block when image dimensions, transparent background expectations, item type, or cookie-pet pairing looks ambiguous.

## Accessibility And Feedback

- Admin forms, upload controls, validation messages, item previews, confirmation dialogs, and access-denied states must follow `../user-interface/UI006-empty-states-and-errors.md` and `../user-interface/UI007-accessibility.md`.
- Admin dialogs must identify the affected item and action clearly.
- Admin forms must be keyboard reachable and provide accessible error feedback.

## Acceptance Criteria

- [ ] Admin users sign in through the normal account system.
- [ ] Admin access depends on the protected account role table.
- [ ] Non-admin users cannot access admin pages or perform admin mutations.
- [ ] The database owner is the only actor allowed to grant or revoke admin role.
- [ ] Admins can add cookies, pets, and treasures.
- [ ] Admins can edit admin-created catalog metadata and images.
- [ ] Admins can delete admin-created catalog items.
- [ ] Runtime catalog records coexist with imported catalog records.
- [ ] Approved runtime catalog records appear on public catalog pages.
- [ ] Draft or needs-review runtime records do not appear on public catalog pages.
- [ ] Admin-created release/order numbers auto-increment within type and rarity.
- [ ] Original uploaded images are private.
- [ ] Approved `.webp` display derivatives are public and used by public catalog pages.
- [ ] Admin catalog changes are auditable with admin account id, action type, affected item id, and timestamp.
