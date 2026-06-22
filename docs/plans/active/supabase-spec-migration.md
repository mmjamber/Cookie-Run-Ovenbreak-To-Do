# Supabase Spec Migration Plan

## Goal

Update the project specs so Cookie Run: Ovenbreak To-Do can move from local-only persistence to Supabase-backed user accounts and saved-list storage.

This plan is for specification work only. It should not add Supabase packages, environment variables, app routes, auth flows, database migrations, or implementation code until the affected specs are updated and approved.

## Direction Decisions

- Supabase should store authenticated user/profile ownership and user-owned to-do data.
- User settings such as theme, compact view, preferred sorting, and hide-rarity preference are out of scope for this database pass.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` should be replaced in place with a Supabase persistence and data architecture spec rather than split into a new technical spec.
- Catalog data should remain static bundled application data for now.
- Runtime artwork and OvenBreak images should remain in `public/` and should not be stored in Supabase.
- Database rows should reference catalog item ids instead of duplicating catalog names, images, rarity metadata, or derived catalog data.
- Guest users should be able to use temporary browser-local persistence, preferably `localStorage` or IndexedDB rather than cookies, because saved lists are nested app data and should not be sent with ordinary page requests.
- Guest data should be described as device/browser-local data that can be lost when the user clears site browser data, uses private browsing, changes browsers/devices, or browser storage is otherwise removed.
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

- User profile records linked to Supabase Auth users.
- Saved list records with name, format, source, mode, display order, created timestamp, and updated timestamp.
- List section records for combis, groups, arenas, and individual item sections.
- Combi records with stable slot positions for pet, cookie, relay cookie, and three treasure slots.
- Free item block records for None-format standalone cookie, pet, or treasure entries.
- Todo item records for selected catalog item id, item type, current level, target level, and completion state.
- Per-user default-list initialization state so preset-derived starter lists are generated once and not regenerated after deletion.

## Data To Keep Out Of Supabase For This Pass

- User interface preferences and user settings.
- Catalog item images and runtime artwork.
- Static catalog metadata that can remain bundled with the application.
- Generated import reports or source asset folders.
- Public sharing, export files, or official game account sync data.

## Guest Data Behavior

- Guest users should be able to create and edit lists without signing in.
- Guest list data should be saved only in browser-local storage on the current device/browser.
- Guest list data should not be represented as durable cloud-saved progress.
- The updated specs should define whether guest data can be imported into a Supabase account after sign-up or sign-in.
- The To-do page, where all saved lists are listed, should show a guest-account warning when the current user is not signed in:

```text
Reminder: You are currently using a guest account. Your progress is saved only on this device and may be deleted if you clear this site's browser data.
Please log in or make an account to save your progress.
```

## Spec Tasks

- [ ] Update `G003-global-spec.md` to remove Supabase-backed persistence and real auth from non-goals once approved, and add database-backed saved lists to MVP scope.
- [ ] Update `G003-global-spec.md` to clarify that official game account sync, live game API integration, public sharing, export files, and automatic catalog updates remain out of scope.
- [ ] Update `G004-functional-map.md` with signed-in, signed-out, loading, save-failure, and account-owned list flows where relevant.
- [ ] Update `G005-data-model.md` to replace local profile ownership with Supabase user/profile ownership and define which data is remote, static, or temporary local fallback.
- [ ] Replace `T002-local-storage-and-data-architecture.md` in place with a Supabase persistence architecture spec.
- [ ] In the replaced `T002`, define the logical tables or collections for profiles, saved lists, sections, combis, free item blocks, todo items, and default-list initialization.
- [ ] In the replaced `T002`, define row ownership rules, foreign-key relationships, cascade/delete behavior, ordering behavior, timestamps, and validation responsibilities.
- [ ] In the replaced `T002`, require Row Level Security or equivalent access rules so users can read and write only their own profile and list data.
- [ ] In the replaced `T002`, reserve a clear extension point for future account roles or permissions without implementing admin behavior in this pass.
- [ ] In the replaced `T002`, define how default preset-derived lists are generated for a new authenticated user and how deletion prevents automatic regeneration.
- [ ] In the replaced `T002`, define guest browser-local persistence before sign-in and how migration/import into a Supabase account should work.
- [ ] Update `F004-user-generated-lists.md` so created, renamed, reordered, edited, and deleted lists persist to the signed-in user's Supabase data.
- [ ] Update `F004-user-generated-lists.md` to define uniqueness validation per authenticated user instead of per local profile.
- [ ] Update `F005-homepage-list-cards.md` so homepage `My Lists` renders the first four account-owned saved lists by database-backed order.
- [ ] Update UI specs for real account states: sign in, sign out, current account display, loading saved lists, empty saved lists, save errors, permission/network errors, and the To-do page guest-account warning.
- [ ] Add or update user stories for sign-up/sign-in, saving lists to an account, loading lists on another device, signing out, and migrating local lists if that behavior is approved.
- [ ] Update `docs/specs/G001-index.md` only if new spec or user-story files are added.
- [ ] Update project changelogs after the spec changes are completed, with entries in `CHANGELOG.md` and the relevant zone changelogs.

## Later Implementation Tasks

- [ ] Install and configure the Supabase client only after the specs are updated.
- [ ] Add environment-variable documentation for the Supabase URL and public anon key.
- [ ] Create database migrations or SQL setup for the approved data model.
- [ ] Implement auth UI and account session handling according to the updated UI specs.
- [ ] Replace local saved-list reads and writes with the approved Supabase persistence layer.
- [ ] Preserve static catalog data and public runtime assets unless a future spec explicitly moves them.
- [ ] Add migration/import handling if the specs keep guest or existing local-storage data.
- [ ] Verify list creation, rename, reorder, delete, item edits, default-list initialization, sign-out, and cross-session loading.
- [ ] Run `npm run lint` and `npm run build` after implementation work.

## Open Questions

- Should unsigned users be able to create temporary local lists, or should list creation require sign-in once Supabase is added?
- Should existing local-storage lists migrate automatically after sign-in, prompt the user to import, or be left behind as legacy local data?
- Which Supabase auth providers should be supported first: email/password, magic link, OAuth providers, or a smaller initial set?
- Should profile display names be required, optional, or derived from the auth provider?
- Should account deletion remove all saved-list data immediately, or should that wait for a dedicated privacy/account-management spec?

## Completion Notes

Keep this plan in `docs/plans/active/` until the database-related specs and user stories have been updated. When complete, move it to `docs/plans/completed/` and summarize which specs changed.
