# Admin Role And Catalog Management Plan

## Goal

Turn the admin-account idea into durable specs for a later implementation pass. Admin users should sign in through the same account flow as everyone else, be authorized through trusted account roles or permissions, and manage catalog items for cookies, pets, and treasures without exposing those tools to ordinary users.

This plan is for spec-writing and implementation planning only. It should not add auth code, admin routes, file upload handling, database tables, or app behavior until the relevant specs have been updated and approved.

## Dependency On Account Work

Admin behavior should build on the future account/auth work rather than define a separate login system.

- The Supabase spec migration plan reserves a protected account role table as the canonical future authorization source.
- Admin recognition should use a durable role or permission linked to an authenticated account.
- Admin access should follow the common authentication-plus-authorization model: the user signs in normally, then server-side and database-level checks decide whether that authenticated user can access admin routes or perform admin mutations.
- The admin role must be stored in the protected account role table reserved by the Supabase account plan. Server-managed Supabase `raw_app_meta_data` may later mirror role state for fast checks, but the protected role table remains canonical. Do not store admin authorization in user-editable profile fields or `raw_user_meta_data`.
- Admin UI entry points may be hidden for non-admin users, but hidden UI is only convenience. Authorization must still be enforced for direct route visits, Server Actions, Route Handlers, database writes, and storage writes.
- Runtime admin catalog management is the standard for admin-added items: admin-created catalog records and uploaded images should be stored through the approved backend/storage system, not written into repository asset folders.
- Public catalog browsing, list creation, and list progress should remain available to non-admin users according to the normal app rules.
- Admin-only pages, actions, and storage writes must be protected by server-side or database-level authorization.

## Admin Authentication And Authorization Model

- Use the normal account sign-up/sign-in/session system for admins. Do not create a second admin password, parallel admin login page, shared password, hard-coded browser token, or repository-configured admin credential.
- Treat "admin" as authorization, not authentication. A session proves who the user is; an admin role or permission proves what the user may do.
- The first implementation should prefer role-based access control with a small role set such as `user` and `admin`. More granular permissions can be added later if catalog moderation needs separate creator, reviewer, publisher, or owner abilities.
- Server code should verify the current user with Supabase server-side auth APIs before checking admin authorization. Cookie/session presence alone must not be treated as proof of admin access.
- RLS policies, database functions, or server-side handlers should reject non-admin catalog mutations even when a request is crafted manually.
- JWT/app metadata can be used for fast role checks only when it comes from server-managed metadata mirrored from the protected role table. Because JWT claims can be stale until refresh, high-risk actions should verify current role state against the role table or use a short-lived session refresh path before the mutation.
- Consider requiring verified email and, later, MFA for high-impact admin actions such as publishing, archiving, deleting uploads, or changing roles.

## Relevant Specs To Update Later

- `docs/specs/G003-global-spec.md` - add admin catalog management to scope only after account-backed persistence is approved.
- `docs/specs/G004-functional-map.md` - add normal sign-in with admin-only entry points, admin dashboard, and catalog item creation flows.
- `docs/specs/G005-data-model.md` - add catalog item ownership/audit concepts and admin role references at a high level.
- `docs/specs/features/F001-catalog-pages.md` - define how newly added admin catalog items appear in cookies, pets, and treasures catalogs.
- `docs/specs/technical/T001-catalog-import-and-derived-data.md` - define how existing imported catalog data coexists with runtime admin-created catalog records.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` or its future Supabase replacement - define role storage, admin permissions, audit fields, catalog records, upload records, and publication states.
- `docs/specs/technical/T004-runtime-assets-and-ui-implementation.md` - define runtime storage URLs, original upload retention, display derivatives, image sizing, and public URL handling for admin-added assets.
- `docs/specs/user-interface/UI002-page-shell-and-navigation.md` - define where admin entry points appear after a signed-in account is authorized as admin.
- `docs/specs/user-interface/UI004-catalog-item-cards.md` - confirm that admin-added items render with the same card sizing, rarity frames, and catalog grid rules as imported items.
- `docs/specs/user-interface/UI006-empty-states-and-errors.md` - cover admin upload, validation, permission, save, naming, and image-processing failures.
- `docs/specs/user-interface/UI007-accessibility.md` - cover accessible admin forms, upload controls, validation messaging, and confirmation dialogs.

## Admin Access Rules

- Admins must be signed in through the normal account system before they can access admin options.
- An admin account must be authorized by a role or permission recorded in the protected account role table.
- Ordinary signed-in users must not see admin catalog-management actions.
- Direct navigation to admin routes by non-admin users should show an access-denied state or redirect to a safe non-admin page.
- Every admin mutation must be rejected for non-admin accounts even if the request is sent manually.
- Only the database owner should be able to grant or revoke admin role.
- Role checks must avoid privilege escalation by ordinary users.
- Admin actions should be auditable with at least the admin account id, action type, affected item id, and timestamp.

## Catalog Item Creation Flow

Admins should have separate creation actions for:

- Add item to catalog: treasures.
- Add item to catalog: pets.
- Add item to catalog: cookies.

Each flow should require:

- Item name.
- Item rarity.
- Image upload or previously uploaded image selection.
- Confirmation of the generated catalog id, auto-incremented release/order number, storage object key, and public display URL before publishing.
- A card preview in the same catalog presentation used by public cookie, pet, or treasure catalog pages.

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

## Runtime Storage And Naming Rules

- Admin-added catalog metadata should be stored as runtime catalog records in the approved database.
- Admin-uploaded original images should be stored in runtime object storage with original dimensions preserved.
- Display-ready derivatives should be generated as `.webp` where needed for catalog rendering, but they must keep a reference back to the preserved original upload.
- Storage object keys should follow the existing naming pattern as closely as runtime storage allows: item type, rarity, release/order number, normalized item name with words separated by underscores, and the approved image extension.
- Release/order numbers for admin-created catalog items should auto-increment within the relevant item type and rarity group. Admins should not need to derive order from filenames.
- Public catalog pages should reference approved runtime image URLs rather than repository source asset paths.
- The admin save flow should block duplicate catalog ids, duplicate storage keys, unsupported extensions, invalid rarity/type combinations, missing names, and missing images.
- The admin save flow should warn or block when image dimensions, transparent background expectations, item type, or cookie-pet pairing looks ambiguous.
- Runtime storage must keep original uploads private or controlled unless the approved public display URL is intentionally exposed.

## Publication And Catalog Visibility Rules

- Saving a new admin-created item should create a draft by default.
- Draft items should be previewable in admin tools before publication.
- Publishing an approved item should make it appear on the correct public catalog page.
- New cookie and pet items should render with the same rarity frame, image fit, search behavior, rarity grouping, hide-rarity filtering, and sorting behavior as imported items.
- New treasures should appear in treasure catalog ordering and filtering, but should not show a visible rarity frame unless the UI spec changes.
- Public catalog pages should read approved catalog items only.
- Draft or needs-review admin uploads should not appear in public catalogs.
- Admin-created items only need add, edit, and delete behavior for now. Do not plan an archive system unless a later product decision reintroduces it.
- Deleting an admin-created item should remove it from ordinary public catalogs and list-building selection surfaces. Specs must define how existing saved-list references behave before destructive delete is implemented.

## Additional Admin Options To Consider

High-value admin options for this project:

- Edit catalog item metadata: name, rarity, release/order number, max level, and pairing links.
- Replace an item image while preserving the catalog item id and list references.
- Review catalog records marked `needsReview`.
- Approve or delete pending uploaded catalog items before they become public.
- Validate cookie-pet pairings, including cookies with 2 pets and pets without a linked cookie.
- Preview the item card before publishing in desktop and mobile catalog layouts.
- Run a naming/collision preflight before reserving catalog ids or storage object keys.
- View a catalog change history with who changed what and when.
- Restore a previous image or metadata version after a mistaken edit.
- Bulk upload multiple assets, then review each generated name, rarity, and pairing before approval.
- Regenerate display-ready image derivatives from retained original uploads.
- Add admin notes for uncertain rarity, naming, or pairing decisions.

Lower-priority options that can wait:

- Bulk delete, because it has higher risk for list references.
- User/account management beyond assigning or removing admin role through the approved role-management path.
- Full analytics dashboards.
- Automatic fetching from official game sources or APIs.

Out-of-scope options for now:

- Archive or unarchive catalog items.
- Hide catalog items without deleting them.

## Spec Tasks

- [ ] Update the account/auth specs with the shared sign-in plus admin authorization model after the Supabase account plan is approved.
- [ ] Add an admin catalog management feature spec, likely the next `F`-prefixed feature spec, if the behavior becomes too large for `F001-catalog-pages.md`.
- [ ] Update `T001-catalog-import-and-derived-data.md` so imported catalog data and runtime admin-created records can coexist without treating admin uploads as local asset imports.
- [ ] Update the runtime asset technical spec with object-storage URLs, original upload retention, generated display derivatives, and image sizing requirements for admin-added assets.
- [ ] Update the data model spec with runtime catalog records, upload records, approved, draft, and needs-review catalog item states.
- [ ] Update UI specs for admin-only entry points, admin forms, upload validation, item preview, confirmation dialogs, and access-denied states.
- [ ] Add user stories for normal sign-in followed by admin access, adding a cookie, adding a pet, adding a treasure, reviewing a pending item, editing catalog metadata, and replacing an item image.
- [ ] Update `docs/specs/G001-index.md` if new feature, technical, UI, or user-story documents are added.
- [ ] Update project changelogs after the spec changes are completed.

## Later Implementation Tasks

- [ ] Implement admin role checks using the approved account system and protected account role table.
- [ ] Add protected admin route(s) and navigation entry points for admin accounts.
- [ ] Implement catalog item creation forms for cookies, pets, and treasures.
- [ ] Implement image validation, runtime object-storage upload, `.webp` display derivative generation where needed, and naming collision checks.
- [ ] Implement pairing selection for cookies and pets.
- [ ] Implement preview-before-publish behavior.
- [ ] Implement catalog refresh so approved admin-added items appear in public catalog pages with correct size and styling.
- [ ] Add audit logging for admin catalog changes.
- [ ] Add rollback/versioning for published metadata and image replacements.
- [ ] Verify non-admin access denial, direct-route protection, catalog rendering, image sizing, pairing prompts, and saved-list compatibility.
- [ ] Run `npm run lint` and `npm run build` after implementation work.

## Resolved Decisions

- Uploaded images should keep their original file as the source of truth. Display-ready derivatives should use `.webp` where needed.
- Only the database owner should be able to grant or revoke admin role.
- Release/order numbers should auto-increment within the relevant type and rarity group.
- Archive behavior is not needed currently. Admin-created catalog items should support add, edit, and delete.
- Runtime admin uploads should use Supabase Storage with a hybrid bucket policy: private original uploads and public approved `.webp` display derivatives.

## Storage Provider And Bucket Policy

- Use Supabase Storage for runtime admin-uploaded catalog images.
- Store original uploads in a private bucket. Original uploads should be available only through protected admin/server paths, not public catalog URLs.
- Store approved `.webp` display derivatives in a public bucket so public catalog pages can render stable CDN-backed image URLs.
- Admin upload, derivative generation, replacement, and delete writes must be protected by server-side admin authorization and storage policies.
- Public catalog pages should reference only approved public display derivatives, never private original upload URLs.

## Open Questions

- None currently.

## Completion Notes

Completed after merging the admin shared-auth authorization model, protected account role source, runtime catalog management behavior, add/edit/delete scope, auto-incremented order numbers, hybrid Supabase Storage upload policy, admin UI/error/accessibility expectations, and admin user story into durable specs.

Updated durable docs include `G001`, `G002`, `G003`, `G004`, `G005`, `F001`, `F007`, `T001`, `T002`, `T004`, `UI002`, `UI004`, `UI006`, `UI007`, and `US014`.
