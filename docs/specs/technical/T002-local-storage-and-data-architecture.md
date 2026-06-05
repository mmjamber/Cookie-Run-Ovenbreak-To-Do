# Technical Spec: Local Storage And Data Architecture

## Purpose

This spec defines the local data architecture for saved to-do lists, list sections, combis, selected items, and browser persistence.

Feature specs describe what users can create and edit. This technical spec owns data shapes, storage mapping, timestamps, local profile scope, and validation storage rules.

## Core Types

```ts
type ItemType = "cookie" | "pet" | "treasure";
type ListFormat = "trophyRace" | "breakout" | "guildRun" | "championsLeague" | "none";
type TargetSet = "low" | "mid" | "full";
```

## User List

```ts
type UserList = {
  id: string;
  ownerId: string;
  name: string;
  format: ListFormat;
  source: "preset" | "custom";
  mode: ListFormat | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  sections: ListSection[];
};
```

Rules:

- `id` must be stable and unique.
- `ownerId` identifies the current local profile.
- `createdAt` and `updatedAt` should be ISO timestamps.
- `updatedAt` should change after meaningful activity such as creation, rename, item edits, level edits, or manual completion updates.
- Preset-derived lists should use `source: "preset"`.
- Custom lists should use `source: "custom"`.
- `order` stores the user-controlled display order for the To-do page.
- Homepage `My Lists` cards use the first four lists by ascending `order`, matching the To-do page.
- Reordering lists should update `order` without requiring changes to `updatedAt`.
- New local user and guest profiles should initialize `userLists` with the four default preset-derived lists.
- Generated default preset-derived lists are stored as regular `UserList` records and may be edited, renamed, deleted, and reordered.
- After a profile is initialized, deleted default preset-derived lists must not be regenerated automatically.

## Local Profile Scope

To-do lists belong to the current local profile.

Rules:

- The add-to-list picker only shows lists owned by the current local profile.
- Local profile lists remain available in browser storage.
- Login and sign-in controls are aesthetic-only and must not alter `ownerId`.
- Do not add backend accounts, remote sync, or server persistence unless a future requirement explicitly asks for it.
- If a future login system is added, local profile lists should have a clear migration or import path.

## List Section

```ts
type ListSection = {
  id: string;
  kind: "combis" | "group" | "arena" | "individualItems";
  label: string;
  position: number;
  targetSet: TargetSet | null;
  combis: Combi[];
  items: TodoItem[];
};
```

Rules:

- Sections store combis, groups, arenas, or ungrouped items depending on list format.
- None-format lists can mix individual items and user-added combi sections.
- For None-format 3-treasure sets, keep the three `TodoItem` records grouped in the same section or parent entry so the UI can display them as one chosen set.

## Combi

```ts
type Combi = {
  id: string;
  position: number;
  pet: TodoItem | null;
  cookie: TodoItem | null;
  relayCookie: TodoItem | null;
  treasures: TodoItem[];
};
```

Rules:

- `position` is display order or Breakout number.
- `relayCookie` is used by Trophy Race, Guild Run, and Champions League.
- Treasure arrays cannot exceed 3 items.

## Todo Item

```ts
type TodoItem = {
  id: string;
  catalogItemId: string;
  type: ItemType;
  currentLevel: number;
  targetLevel: number;
  completed: boolean;
};
```

Rules:

- `catalogItemId` references a catalog item.
- `currentLevel` starts at 1 for newly added items.
- `targetLevel` defaults to the maximum allowed by the destination slot, list format, combi, or arena target set.
- `completed` is true when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.

## Format Storage Mapping

- Trophy Race: one `combis` section with 4 default combis, expandable to 10.
- Breakout: up to 6 `group` sections, each with 3 to 15 numbered combis.
- Guild Run: 12 fixed `arena` sections, each with one combi and a configured maximum target set.
- Champions League: 3 fixed `arena` sections, each with one combi and a user-selected maximum target set.
- None: one or more flexible sections that can store individual cookies, pets, treasures, 3-treasure sets, combi type 1 entries, and combi type 2 entries.

## Persistence

Initial implementation should use browser local storage.

Rules:

- `catalogItems` can be static bundled data.
- `userLists` should persist locally.
- Profile initialization state should persist locally so generated default preset-derived lists are created once per local user or guest profile, not recreated after deletion.
- Use a versioned storage key so future migrations are possible.
- Saving user to-do lists in browser local storage is the primary way to test the website locally.
- Do not require a backend service for persistence.

## Validation Rules

- Cookie target cannot exceed 15.
- Pet target cannot exceed 15.
- Treasure target cannot exceed 12.
- Newly added cookies, pets, and treasures start with `currentLevel: 1`.
- Newly added item `targetLevel` defaults to the maximum allowed by the current item slot, list format, combi, or arena target set.
- Current and target levels are always editable but cannot exceed the current item, list, or arena maximum.
- An item is complete when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.
- In arena formats, the selected `targetSet` defines the maximum allowed target for that arena.
- Treasure slots per combi cannot exceed 3.
- Trophy Race combis cannot exceed 10.
- Breakout groups cannot exceed 6.
- Breakout group size must be between 3 and 15 combis.
- Guild Run has exactly 12 arenas.
- Champions League has exactly 3 arenas.

## Related Specs

- `../G005-data-model.md` for the high-level data model overview.
- `../features/F002-list-formats.md` for format behavior.
- `../features/F003-preset-lists.md` for preset behavior.
- `../features/F004-custom-lists.md` for custom list behavior.
- `../features/F005-homepage-list-cards.md` for homepage list-card selection behavior.
