# Technical Spec: Supabase Persistence And Data Architecture

## Purpose

This spec defines the Supabase-backed data architecture for accounts, profiles, saved to-do lists, list sections, combis, selected items, guest migration, admin role extension, and validation rules.

Feature specs describe what users can create and edit. This technical spec owns persistence mapping, ownership, timestamps, database constraints, guest browser-local fallback, and migration behavior.

## Core Types

```ts
type ItemType = "cookie" | "pet" | "treasure";
type ListFormat = "trophyRace" | "breakout" | "guildRun" | "championsLeague" | "none";
type TargetSet = "low" | "mid" | "full";
type ListSource = "preset" | "userGenerated";
```

`TargetSet` values are internal storage values. User-facing cap selection controls must label these values as `7/7/5`, `11/11/9`, and `15/15/12` in pet cap / cookie cap / treasure cap order.

## Account And Profile Data

Supabase should store authenticated user/profile ownership and user-owned to-do data.

Required account behavior:

- The first supported auth provider is email/password.
- Profile records are linked to Supabase Auth users and require a display name.
- Profile records reference `auth.users.id` by primary key and use `on delete cascade`.
- Account deletion removes the deleted account's profile, saved lists, sections, combis, free item blocks, todo items, and default-list initialization state.
- User settings such as theme, compact view, preferred sorting, and hide-rarity preference are out of scope for this database pass.

## Saved List Records

```ts
type SavedList = {
  id: string;
  userId: string;
  name: string;
  format: ListFormat;
  source: ListSource;
  mode: ListFormat | null;
  displayOrder: number;
  localMigrationId?: string;
  migrationBatchId?: string;
  createdAt: string;
  updatedAt: string;
};
```

Rules:

- `id` must be stable and unique.
- `userId` identifies the owning authenticated account for remote rows.
- `createdAt` and `updatedAt` should be ISO timestamps.
- `updatedAt` should change after meaningful activity such as creation, rename, item additions, item deletions, item edits, level edits, block clears, section or arena additions, section or arena deletions, group count edits, arena target-set edits, arena reordering, or manual completion updates.
- Preset-derived lists use `source: "preset"`.
- User generated lists use `source: "userGenerated"`.
- `displayOrder` stores the user-controlled display order for the To-do page.
- Homepage `My Lists` cards use the first four lists by ascending `displayOrder`, matching the To-do page.
- Reordering lists should update `displayOrder` without requiring changes to `updatedAt`.
- New signed-in accounts and guest profiles should initialize with the four default preset-derived lists.
- Generated default preset-derived lists are stored as saved-list records and may be edited, renamed, deleted, and reordered with the same controls as user generated lists.
- Generated default preset-derived lists should store empty add-item slots only; all todo item slot values should start as `null`.
- After a profile is initialized, deleted default preset-derived lists must not be regenerated automatically.

## Default List Initialization State

Each account should have durable default-list initialization state so preset-derived starter lists are generated once and not regenerated after deletion.

Rules:

- Initialization state is account-scoped for signed-in users.
- Guest initialization state is browser-local until migration.
- Account deletion removes default-list initialization state for the deleted account.
- Database constraints should prevent duplicate initialization records for the same account.

## List Name Defaults And Uniqueness

Add list auto-fills the name field only when the field is empty:

- Trophy Race format defaults to `Trophy Race`.
- Breakout format defaults to `Breakout`.
- Guild Run format defaults to `Guild Run`.
- Champions League format defaults to `Champions League`.
- None format defaults to `No mode`.

Rules:

- Saved list names must be non-empty after trimming whitespace.
- Saved list names must be unique within the current signed-in account or guest profile.
- Database constraints should enforce per-user list-name uniqueness for signed-in data.
- Format selection must not overwrite a name the user has already typed.

## List Sections

```ts
type ListSection = {
  id: string;
  listId: string;
  kind: "combis" | "group" | "arena" | "individualItems";
  label: string;
  position: number;
  targetSet: TargetSet | null;
};
```

Rules:

- Sections store combis, groups, arenas, or ungrouped items depending on list format.
- Arena labels are derived from chronological `position` values and rendered as `Arena N`, starting at `Arena 1`.
- When a format supports reordering, persisted `position` values must be rewritten so visual labels and storage order remain aligned.
- Parent-child ownership integrity must ensure sections belong to a list owned by the same account.

## Free Item Blocks

```ts
type FreeItemBlock = {
  id: string;
  sectionId: string;
  position: number;
  slotType: ItemType;
};
```

Rules:

- Free item blocks are standalone None-format cookie, pet, or treasure entries.
- `slotType` determines which add-option artwork appears when no item is linked.
- Adding a catalog item creates or updates the associated todo item.
- Deleting the catalog item removes the todo item and keeps the free item block.

## Combi Records

```ts
type Combi = {
  id: string;
  sectionId: string;
  position: number;
};
```

Rules:

- `position` is display order or Breakout number.
- A combi has stable slot positions for pet, cookie, optional relay cookie, and three treasure slots.
- Relay cookie slots are used by Trophy Race, Guild Run, and Champions League.
- Treasure slots store exactly 3 slot positions for combi treasure add-item slots.
- Empty slots should render matching add-option artwork.

## Todo Item Records

```ts
type TodoItem = {
  id: string;
  listId: string;
  sectionId: string;
  combiId: string | null;
  freeItemBlockId: string | null;
  slotKey: "pet" | "cookie" | "relayCookie" | "treasure1" | "treasure2" | "treasure3" | "freeItem";
  catalogItemId: string;
  type: ItemType;
  currentLevel: number;
  targetLevel: number;
  completed: boolean;
  position: number | null;
};
```

Rules:

- `catalogItemId` references a base static or approved runtime catalog item.
- Saved-list rows reference catalog item ids instead of duplicating catalog names, images, rarity metadata, or derived catalog data.
- `currentLevel` starts at 1 for newly added items.
- `targetLevel` defaults to the maximum allowed by the destination add-item slot, list format, combi, or arena target set.
- `targetLevel` is directly user-editable only for None-format lists.
- In Trophy Race, Breakout, Champions League, and Guild Run, `targetLevel` follows the list format or arena target set.
- `completed` is true when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.
- Parent-child ownership integrity must ensure todo items belong to a list owned by the same account.

## Format Storage Mapping

- Trophy Race: one `combis` section with the user-selected number of Trophy Race arenas, from 1 to 10. Each arena is stored as a combi type 1 entry and rendered as an `Arena N` list item block using its chronological position. Preset-derived Trophy Race lists start with 4 empty arenas. Users can add, clear, remove, and reorder Trophy Race arenas after creation, but the arena count must stay between 1 and 10. These arenas use full max targets and do not store low, mid, or full arena target sets.
- Breakout: up to 5 `group` sections, each with 3 to 15 numbered combi type 2 blocks. Preset-derived Breakout lists start with 2 editable groups: Group 1 has 3 empty combi type 2 blocks and Group 2 has 10 empty combi type 2 blocks. Breakout always uses full max targets.
- Guild Run: 12 fixed `arena` sections, each rendered as an `Arena N` list item block with one empty combi type 1 and an arena target set that must be chosen by the user. Generated Guild Run preset-derived lists should initialize arena `targetSet` values as `null` until the user chooses them.
- Champions League: 3 fixed `arena` sections, each rendered as an `Arena N` list item block with one empty combi type 1. Arena 1 stores `targetSet: "low"`, Arena 2 stores `targetSet: "mid"`, and Arena 3 stores `targetSet: "full"`.
- None: one or more flexible sections that can store individual cookies, pets, treasures, combi type 1 entries, and combi type 2 entries.

## Item Deletion, Replacement, And Block Removal

Deleting a catalog item from a list item block removes only the todo item from that slot:

- The surrounding combi or free item block remains stored.
- Other items in the same block remain unchanged.
- The deleted item's current level, target level, and completion state are discarded with that todo item.

Replacing a filled catalog item through an explicit `Switch?` action removes only the todo item in that slot and writes a new todo item for the selected catalog item.

Block clear removes every todo item from a single list item block while preserving that block's surrounding structure.

Full block removal deletes the entire block record only where the current format allows it:

- Removing a Trophy Race arena deletes that stored combi, must keep the list between 1 and 10 arenas, and rewrites remaining arena positions.
- Removing a None-format combi or individual item entry deletes that user-added section or free item block and rewrites sibling positions where needed.
- Guild Run and Champions League arenas cannot be fully removed.
- Breakout combi removal is allowed only through an approved group combi-count edit and must keep the group between 3 and 15 combis.

## Guest Browser-Local Persistence

Guest users may create and edit lists without signing in.

Rules:

- Guest list data is saved only in browser-local storage on the current device/browser, preferably `localStorage` or IndexedDB rather than cookies.
- Guest data should not be represented as durable cloud-saved progress.
- Guest data can be lost when the user clears site browser data, uses private browsing, changes browsers/devices, or browser storage is otherwise removed.
- The To-do page should warn signed-out users that guest progress is saved only on the current device and may be deleted if site browser data is cleared.

Recommended warning text:

```text
Reminder: You are currently using a guest account. Your progress is saved only on this device and may be deleted if you clear this site's browser data.
Please log in or make an account to save your progress.
```

## Guest-To-Account Migration

After sign-up or sign-in, guest list data should migrate automatically into the signed-in user's Supabase account.

Rules:

- Keep the local guest copy until Supabase migration succeeds.
- After a confirmed successful migration, clear or mark the local copy as migrated so the same lists are not imported twice.
- Migration should be idempotent. Migrated local lists should include a durable `localMigrationId`, `migrationBatchId`, or equivalent marker so retries, refreshes, duplicate sign-in callbacks, or partial failures do not create duplicate account lists.
- Migration should be all-or-nothing where practical.
- If partial migration can occur, it must be safely resumable and must not clear or mark the local copy as migrated until every intended remote record has been persisted.

## Supabase Security And Constraints

Rules:

- Environment documentation should use current Supabase publishable key terminology, such as `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Server-side auth checks for protected pages, Server Actions, Route Handlers, and user-owned data access should validate authenticated claims with Supabase's server-side auth APIs.
- Server code must not treat cookie-only session data as trusted authorization.
- Every user-owned table in an exposed schema should have Row Level Security enabled.
- RLS policies for user-owned rows should explicitly require an authenticated user and owner match, such as `auth.uid() IS NOT NULL AND auth.uid() = user_id`.
- User-owned child records should be connected by foreign keys with cascade behavior.
- Database constraints should enforce account-scoped integrity for list names, default-list initialization, ordering, and parent-child ownership.

## Account Roles Extension Point

Reserve a protected `account_roles`-style table for future roles and permissions.

Rules:

- The protected account role table is the canonical future source for admin authorization.
- Account role rows link to authenticated profile/user ids.
- Ordinary users cannot grant, update, or revoke their own roles.
- Admin role changes require a privileged server/database path in the later admin implementation.
- Server-managed JWT/app metadata may later mirror role state for fast checks, but user-editable metadata must not be used for authorization.
- Admin behavior is defined in `../features/F007-admin-catalog-management.md`.

## Runtime Catalog Data

Base static catalog metadata can remain bundled application data before runtime admin catalog management is implemented.

Runtime admin-created catalog records are stored in the approved database. Runtime artwork for admin-created catalog items uses the hybrid Supabase Storage policy defined in `T004-runtime-assets-and-ui-implementation.md`.

## Validation Rules

- Cookie target cannot exceed 15.
- Pet target cannot exceed 15.
- Treasure target cannot exceed 12.
- Newly added cookies, pets, and treasures start with `currentLevel: 1`.
- Newly added item `targetLevel` defaults to the maximum allowed by the current add-item slot, list format, combi, or arena target set.
- Current levels are editable in every format but cannot exceed the current item, list, or arena maximum.
- Target levels are directly editable only in None-format lists and cannot exceed the item type's absolute cap.
- Trophy Race target levels must equal full max targets.
- Breakout target levels must equal full max targets.
- An item is complete when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.
- In Guild Run arena formats, the selected `targetSet` defines the target levels for that arena. Users edit Guild Run targets only by changing the arena `targetSet` to low, mid, or full.
- In Champions League, fixed arena target sets define the target levels for each arena: Arena 1 low, Arena 2 mid, and Arena 3 full.
- Items cannot be added to a Guild Run arena while `targetSet` is `null`.
- Treasure slots per combi must remain exactly 3 positions, each containing either no item or one treasure todo item.
- Trophy Race arenas cannot exceed 10.
- Trophy Race arena deletion cannot reduce the list below 1 arena.
- Trophy Race arena reordering rewrites arena positions and cannot change the arena count.
- Trophy Race user generated list setup must choose a starting arena count from 1 to 10.
- Breakout groups cannot exceed 5.
- Breakout group size must be between 3 and 15 combi type 2 blocks.
- Breakout group combi-count edits must keep the group between 3 and 15 combi type 2 blocks.
- Breakout groups must contain only combi type 2 blocks.
- Guild Run has exactly 12 arenas.
- Guild Run arena target-set edits must update target levels for existing filled items in that arena.
- Champions League has exactly 3 arenas.

## Related Specs

- `../G005-data-model.md` for the high-level data model overview.
- `../features/F002-list-formats.md` for format behavior.
- `../features/F003-preset-lists.md` for preset behavior.
- `../features/F004-user-generated-lists.md` for user generated list behavior.
- `../features/F005-homepage-list-cards.md` for homepage list-card selection behavior.
- `../features/F007-admin-catalog-management.md` for admin catalog behavior.
- `T004-runtime-assets-and-ui-implementation.md` for runtime admin upload storage.
