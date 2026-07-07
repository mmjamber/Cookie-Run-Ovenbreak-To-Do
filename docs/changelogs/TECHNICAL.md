# Technical Changelog

Tracks architecture, storage, routing, data imports, build/lint config, package scripts, project setup, and technical specs.

## Unreleased

### Documentation Process

- Clarified the shared authorization extension point between `docs/plans/active/supabase-spec-migration.md` and `docs/plans/active/admin-role-and-catalog-management.md`.
- Updated `docs/plans/active/admin-role-and-catalog-management.md` so admin access uses the shared account auth flow plus trusted role or permission authorization instead of a separate admin login system.
- Updated the OvenBreak project skill to include reusable prompt-following rules and to remove frontend-only product boundaries that would block Supabase/auth/database work.
- Added Supabase implementation standards to `docs/plans/active/supabase-spec-migration.md`, covering publishable keys, server-side auth validation, RLS policy shape, cascade deletes, idempotent migration, and database constraints.
- Updated `docs/plans/active/supabase-spec-migration.md` to decide that account deletion should remove all saved-list data owned by the deleted account.
- Updated `docs/plans/active/supabase-spec-migration.md` to make email/password the first supported auth provider and require profile display names.
- Updated `docs/plans/active/supabase-spec-migration.md` to decide that signed-out users can create temporary local lists and that those lists migrate automatically after sign-up or sign-in.
- Removed later implementation tasks from the progress tracking plan and moved it from `docs/plans/active/` to `docs/plans/completed/` after merging the planned spec updates.
- Updated `docs/plans/active/progress-tracking-implementation.md` so the future spec merge keeps mobile Trophy Race reordering open and forbids numbered relay badges, markers, or frame assets.
- Updated `docs/plans/active/admin-role-and-catalog-management.md` and `docs/plans/active/supabase-spec-migration.md` so runtime admin catalog records and runtime image storage are the standard for future admin-created catalog items.
- Added `docs/plans/active/admin-role-and-catalog-management.md` to plan future admin role, catalog item creation, asset handling, and spec-update work.
- Resolved the relay cookie frame open question in `docs/plans/active/progress-tracking-implementation.md` by noting that relay slots and selected relay cookies must not use number badges, markers, or numbered frame assets.
- Clarified in `docs/plans/active/progress-tracking-implementation.md` that block edit, block delete, list-format add, and move/reorder controls should be available across all list types where meaningful, even when not shown in every preview.
- Pruned `docs/plans/active/progress-tracking-implementation.md` so it points to existing specs for already-covered list rules and keeps only remaining preview-to-spec gaps.
- Updated `docs/plans/active/progress-tracking-implementation.md` to direct future agents to the progress preview files for list-detail UI layout and styling instead of duplicating visual descriptions in the plan.
- Clarified that `docs/plans/active/progress-tracking-implementation.md` should use all current list progress previews except item-frame, not only the Trophy Race preview.
- Added newer Breakout, Guild Run, Champions League, and No Mode preview layout and feature decisions to `docs/plans/active/progress-tracking-implementation.md`.
- Cleaned obsolete preview CSS selectors and unused Guild Run dialog script values left over from earlier preview iterations.
- Clarified in `docs/plans/active/progress-tracking-implementation.md` that clean, generalizable preview logic and structure should be reused in the final app implementation where appropriate.
- Added Trophy Race preview polish decisions to `docs/plans/active/progress-tracking-implementation.md`, covering move-handle styling, completed level color, and user-facing delete dialog wording.
- Removed `README.md` files from `docs/plans/`, `docs/plans/active/`, `docs/plans/completed/`, and `docs/changelogs/`; moved changelog folder guidance into `docs/changelogs/index.md`; and added an agent rule to avoid creating future `README.md` files unless explicitly requested.
- Added `docs/plans/active/trophy-race-preview-to-specs.md` to plan how Trophy Race preview decisions should become durable specs before implementation.
- Updated documentation structure and agent guidance so new user stories belong in `docs/user-stories/` instead of `docs/specs/user-stories/`.
- Bolded the summary text at the top of each `docs/changelogs/CHANGELOG.md` list item to improve scan readability.
- Improved `docs/changelogs/index.md` spacing by separating each changelog file into its own subsection block.
- Added `docs/changelogs/index.md` to map every changelog file and subsection.
- Added a changelog retention rule requiring agents to keep earlier changelog entries when features, previews, specs, or implementations are removed, and to add new removal entries instead.
- Removed the unused root `CLAUDE.md` file because this project is not intended to use Claude-specific agent instructions.
- Added an all-agents rule requiring a `docs/plans/active/` task plan before adding or changing files under `app/`, with an exception for explicitly requested test or preview files under `public/`.
- Consolidated the root `CHANGELOG.md` into `docs/changelogs/` and removed the duplicate root changelog file.
- Added an all-agents rule in `AGENTS.md` requiring completed project changes to be recorded in `docs/changelogs/CHANGELOG.md` and the relevant zone changelog subsections.
- Added `docs/changelogs/` with project-wide and zone-specific changelog files.
- Added the original root changelog to track notable project changes before the changelog system moved under `docs/changelogs/`.
- Added project planning folders for active and completed implementation plans.

### Architecture

- Added Supabase browser and server client helpers under `utils/supabase/`.
- Created the starter Next.js workspace for the OvenBreak to-do/list website.

### Storage

- Selected the hybrid Supabase Storage bucket policy for admin uploads: private original uploads, public approved `.webp` display derivatives, and protected admin/server write paths.
- Resolved admin upload planning decisions to preserve original image uploads, generate `.webp` display derivatives where needed, reserve admin role grants for the database owner, and document storage bucket options.
- Reserved a protected `account_roles`-style table as the canonical future source for admin authorization, with optional server-managed JWT/app metadata mirroring only as a later fast-check optimization.
- Added admin authorization planning guidance for protected role tables, optional server-managed role metadata mirroring, server-side auth validation, RLS-backed mutation checks, stale JWT caution, and optional higher assurance for sensitive admin actions.
- Updated the OvenBreak project skill to recognize Supabase-backed persistence, guest local-list migration, account-scoped server validation, and account deletion data removal as allowed project directions.
- Added future Supabase storage standards for account-scoped database constraints, cascade-linked user data, and idempotent guest local-list migration.
- Clarified the future Supabase deletion path should remove the deleted account's profile, saved lists, sections, combis, free item blocks, todo items, and default-list initialization state.
- Clarified the future Supabase migration path should keep local guest list data until remote persistence succeeds, then clear or mark the local copy as migrated to avoid duplicate imports.
- Added persistence rules for block clear, full block removal, Trophy Race arena reordering, Breakout group count edits, and Guild Run arena target-set edits.

### Routing

- Added a Next.js 16 `proxy.ts` session refresh hook for Supabase SSR cookies.

### Data Imports

- No changes recorded yet.

### Build And Tooling

- Installed `@supabase/supabase-js` and `@supabase/ssr`.
- Created the starter Next.js workspace for the OvenBreak to-do/list website.

### Technical Specs

- Merged progress tracking plan storage and runtime UI implementation requirements into `T002`, `T004`, and `UI007`.
- Clarified `T001` import review wording and `T002` static catalog storage wording so they do not imply a build-time admin upload workflow.
- Added project specifications for product rules, data architecture, and related technical behavior.
