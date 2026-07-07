# Features Changelog

Tracks feature behavior, feature specs, user stories, list behavior, catalog behavior, and presets.

## Unreleased

### Feature Behavior

- No changes recorded yet.

### Feature Specs

- Added `F007-admin-catalog-management.md` and updated catalog/list feature specs so Supabase accounts, guest migration, account-backed list ownership, and admin-created runtime catalog items are durable spec requirements.
- Added project specifications for product rules, list formats, catalog behavior, and related feature behavior.

### User Stories

- Added account and admin user stories for sign-up/sign-in with guest migration, cross-device account list loading, and admin catalog item management.
- Updated existing list and catalog user stories from local-profile ownership to signed-in account or guest-profile ownership.
- Moved user-story documents from `docs/specs/user-stories/` to `docs/user-stories/` so they remain in docs without living inside the specs tree.
- Added project user-story documents.

### List Behavior

- Merged progress tracking plan behavior into specs, covering Trophy Race arena clear/remove/reorder behavior, Breakout group combi-count edits, Guild Run arena target-set edits, and relay slots without numbered markers.
- Removed the relay numbered marker requirement from `F006-empty-list-layouts.md`; relay slots and selected relay cookies should not use numbered badges, markers, or frame numbers.
- Changed Trophy Race preview move mode from arrow controls to drag-and-drop arena reordering with automatic renumbering after drop.
- Added Trophy Race preview interactions for adding arenas up to the 10-arena limit, choosing whether delete clears arena items or removes the full arena block, and moving arenas while renumbering them in visual order.
- Added prototype-only Trophy Race progress preview work for list progress display and mixed filled/empty catalog slots in `public/trophy-race-progress-preview.html`.

### Catalog Behavior

- Merged admin catalog management into durable specs, covering shared-auth admin access, protected role authorization, add/edit/delete item scope, runtime records, and hybrid Supabase Storage image handling.
- Selected hybrid Supabase Storage for future admin-uploaded catalog images, with private originals and public approved `.webp` display derivatives.
- Resolved admin catalog planning decisions so admin-created items support add, edit, and delete without archive behavior for now, and use auto-incremented release/order numbers.
- Clarified that future admin catalog management should authorize admins through the protected account role table reserved by the Supabase account plan.
- Aligned the future admin catalog-management plan with the normal account sign-in flow plus trusted admin role authorization, rather than a separate admin login system.
- Made runtime admin catalog management the standard for future admin-created cookies, pets, and treasures, using draft/review/publish behavior instead of repository asset writes.
- Added an active admin catalog management plan covering future admin-only creation flows for cookies, pets, and treasures.

### Presets

- Added Trophy Race preview controls that model editable preset-derived arena blocks within Trophy Race add/delete limits.
- Added prototype-only Trophy Race progress preview work in `public/trophy-race-progress-preview.html`.
