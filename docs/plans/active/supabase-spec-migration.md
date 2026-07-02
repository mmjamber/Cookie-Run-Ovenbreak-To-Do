# Supabase Spec Migration Plan

## Goal

Update the project specs so Cookie Run: Ovenbreak To-Do can move from local-only persistence to Supabase-backed user accounts and saved-list storage.

This plan is for specification work only. It should not add Supabase packages, environment variables, app routes, auth flows, database migrations, or implementation code until the affected specs are updated and approved.

## Direction Decisions

- Supabase should store authenticated user/profile ownership and user-owned to-do data.
- The first supported auth provider should be email/password.
- Profile display names should be required for account setup, account-backed list ownership, and user-facing account display.
- Account deletion should remove all saved-list data owned by that account.
- User settings such as theme, compact view, preferred sorting, and hide-rarity preference are out of scope for this database pass.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` should be replaced in place with a Supabase persistence and data architecture spec rather than split into a new technical spec.
- Base catalog data should remain static bundled application data for this account-storage pass, but the future admin catalog workflow will add runtime catalog records.
- Runtime artwork and base OvenBreak images should remain in `public/` for this account-storage pass; future admin-uploaded catalog images are a deliberate runtime storage exception.
- Saved-list database rows should reference catalog item ids instead of duplicating catalog names, images, rarity metadata, or derived catalog data.
- Guest users should be able to use temporary browser-local persistence, preferably `localStorage` or IndexedDB rather than cookies, because saved lists are nested app data and should not be sent with ordinary page requests.
- Guest data should be described as device/browser-local data that can be lost when the user clears site browser data, uses private browsing, changes browsers/devices, or browser storage is otherwise removed.
- Guest lists should migrate automatically after sign-up or sign-in, so users can start making lists immediately and save them to an account later without manual import steps.
- Local guest data should be kept until the Supabase migration succeeds. After a confirmed successful migration, the local copy should be cleared or marked as migrated so the same lists are not imported twice.
- The Supabase data model should reserve support for future admin roles or permissions, but admin tools, dashboards, and admin-only workflows are out of scope for this pass.

## Relevant Specs

- `docs/specs/G003-global-spec.md` - product scope, MVP scope, non-goals, and success criteria currently describe local-only persistence and aesthetic-only auth.
- `docs/specs/G004-functional-map.md` - page flows and feature areas may need real authentication, signed-out, loading, and account-owned data flows.
- `docs/specs/G005-data-model.md` - high-level data model currently describes local profile ownership and should define Supabase-backed ownership.
- `docs/specs/features/F004-user-generated-lists.md` - list creation, naming, uniqueness, persistence, and management behavior should be account-backed.
- `docs/specs/features/F005-homepage-list-cards.md` - homepage list cards should mirror the authenticated user's ordered saved lists.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` - should be replaced with the remote persistence, table, ownership, validation, and migration architecture.
- `docs/specs/user-interface/UI002-page-shell-and-navigation.md` - account buttons currently aesthetic-only and need real sign-in/sign-out behavior.
- `docs/specs/user-interface/UI003-homepage-and-list-cards.md` - list-card loading, signed-out, and empty states may need database-aware treatment.
- `docs/specs/user-interface/UI006-empty-states-and-errors.md` - should cover auth, load, save, permission, and network failure states.
- `docs/specs/user-interface/UI007-accessibility.md` - should cover accessible auth dialogs, errors, loading announcements, and focus behavior.
- `docs/user-stories/` - should gain or update stories for account-backed persistence and cross-device saved lists.

## Data To Store In Supabase

- User profile records linked to Supabase Auth users, including a required display name.
- Saved list records with name, format, source, mode, display order, created timestamp, and updated timestamp.
- List section records for combis, groups, arenas, and individual item sections.
- Combi records with stable slot positions for pet, cookie, relay cookie, and three treasure slots.
- Free item block records for None-format standalone cookie, pet, or treasure entries.
- Todo item records for selected catalog item id, item type, current level, target level, and completion state.
- Per-user default-list initialization state so preset-derived starter lists are generated once and not regenerated after deletion.
- Account deletion behavior that removes the user's profile, saved lists, sections, combis, free item blocks, todo items, and default-list initialization state.

## Data To Keep Out Of Supabase For This Pass

- User interface preferences and user settings.
- Catalog item images and runtime artwork.
- Base static catalog metadata that can remain bundled with the application before runtime admin catalog management is implemented.
- Generated import reports or source asset folders.
- Public sharing, export files, or official game account sync data.

## Guest Data Behavior

- Guest users should be able to create and edit lists without signing in.
- Guest list data should be saved only in browser-local storage on the current device/browser.
- Guest list data should not be represented as durable cloud-saved progress.
- After sign-up or sign-in, guest list data should migrate automatically into the signed-in user's Supabase account.
- The local guest copy should remain available until the migration succeeds, then be cleared or marked as migrated to prevent duplicate imports.
- The To-do page, where all saved lists are listed, should show a guest-account warning when the current user is not signed in:

```text
Reminder: You are currently using a guest account. Your progress is saved only on this device and may be deleted if you clear this site's browser data.
Please log in or make an account to save your progress.
```

## Supabase Implementation Standards

- Environment documentation should use the current Supabase publishable key terminology, such as `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, instead of planning new work around legacy public anon key wording.
- Server-side auth checks for protected pages, Server Actions, Route Handlers, and user-owned data access should validate authenticated claims with Supabase's server-side auth APIs. Server code must not treat cookie-only session data as trusted authorization.
- Every user-owned table in an exposed schema should have Row Level Security enabled.
- RLS policies for user-owned rows should explicitly require an authenticated user and owner match, such as `auth.uid() IS NOT NULL AND auth.uid() = user_id`.
- Profile records should reference `auth.users.id` by primary key and use `on delete cascade`.
- User-owned child records should be connected by foreign keys with cascade behavior so account deletion removes the profile, saved lists, list sections, combis, free item blocks, todo items, and default-list initialization records owned by the deleted account.
- Guest local-list migration should be idempotent. Migrated local lists should include a durable `localMigrationId`, `migrationBatchId`, or equivalent marker so retries, refreshes, duplicate sign-in callbacks, or partial failures do not create duplicate account lists.
- Guest local-list migration should be all-or-nothing where practical. If a partial migration can occur, it must be safely resumable and must not clear or mark the local copy as migrated until every intended remote record has been persisted.
- Database constraints should enforce account-scoped integrity for list names, default-list initialization, ordering, and parent-child ownership.

## Spec Tasks

- [ ] Update `G003-global-spec.md` to remove Supabase-backed persistence and real auth from non-goals once approved, and add database-backed saved lists to MVP scope.
- [ ] Update `G003-global-spec.md` to clarify that official game account sync, live game API integration, public sharing, export files, and automatic external catalog updates remain out of scope.
- [ ] Update `G004-functional-map.md` with signed-in, signed-out, loading, save-failure, and account-owned list flows where relevant.
- [ ] Update `G005-data-model.md` to replace local profile ownership with Supabase user/profile ownership and define which data is remote, static, or temporary local fallback.
- [ ] Replace `T002-local-storage-and-data-architecture.md` in place with a Supabase persistence architecture spec.
- [ ] In the replaced `T002`, define the logical tables or collections for profiles, saved lists, sections, combis, free item blocks, todo items, and default-list initialization.
- [ ] In the replaced `T002`, define row ownership rules, foreign-key relationships, cascade/delete behavior, ordering behavior, timestamps, and validation responsibilities.
- [ ] In the replaced `T002`, require account deletion to remove all saved-list data owned by the deleted account.
- [ ] In the replaced `T002`, require Row Level Security policies with explicit authenticated owner checks so users can read and write only their own profile and list data.
- [ ] In the replaced `T002`, define database constraints for per-user list-name uniqueness, per-user default-list initialization, account-scoped ordering, and parent-child ownership integrity.
- [ ] In the replaced `T002`, define idempotent and safely resumable guest local-list migration using a durable migration marker.
- [ ] In the replaced `T002`, reserve a clear extension point for future account roles or permissions without implementing admin behavior in this pass.
- [ ] In the replaced `T002`, define how default preset-derived lists are generated for a new authenticated user and how deletion prevents automatic regeneration.
- [ ] In the replaced `T002`, define guest browser-local persistence before sign-in and how migration/import into a Supabase account should work.
- [ ] Update `F004-user-generated-lists.md` so created, renamed, reordered, edited, and deleted lists persist to the signed-in user's Supabase data.
- [ ] Update `F004-user-generated-lists.md` to define uniqueness validation per authenticated user instead of per local profile.
- [ ] Update `F005-homepage-list-cards.md` so homepage `My Lists` renders the first four account-owned saved lists by database-backed order.
- [ ] Update UI specs for real account states: email/password sign-up and sign-in, required display-name entry, sign out, current account display, loading saved lists, empty saved lists, save errors, permission/network errors, and the To-do page guest-account warning.
- [ ] Add or update user stories for sign-up/sign-in, saving lists to an account, loading lists on another device, signing out, and automatic local-list migration.
- [ ] Update `docs/specs/G001-index.md` only if new spec or user-story files are added.
- [ ] Update project changelogs after the spec changes are completed, with entries in `CHANGELOG.md` and the relevant zone changelogs.

## Later Implementation Tasks

- [ ] Install and configure the Supabase client only after the specs are updated.
- [ ] Add environment-variable documentation for the Supabase URL and publishable key.
- [ ] Create database migrations or SQL setup for the approved data model.
- [ ] Implement email/password auth UI, required display-name setup, and account session handling according to the updated UI specs.
- [ ] Replace local saved-list reads and writes with the approved Supabase persistence layer.
- [ ] Preserve static catalog data and public runtime assets unless a future spec explicitly moves them.
- [ ] Add automatic migration handling for guest or existing local-storage data, keeping the local copy until Supabase persistence succeeds and then clearing or marking it migrated.
- [ ] Verify server-side auth checks, RLS behavior, cascade deletes, database constraints, and idempotent migration retries.
- [ ] Verify list creation, rename, reorder, delete, item edits, default-list initialization, sign-out, and cross-session loading.
- [ ] Run `npm run lint` and `npm run build` after implementation work.

## Open Questions

- None currently.

## Completion Notes

Keep this plan in `docs/plans/active/` until the database-related specs and user stories have been updated. When complete, move it to `docs/plans/completed/` and summarize which specs changed.
