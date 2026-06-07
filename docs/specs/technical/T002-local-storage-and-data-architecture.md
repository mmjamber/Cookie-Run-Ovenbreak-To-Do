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

`TargetSet` values are internal storage values. User-facing cap selection controls must label these values as `7/7/5`, `11/11/9`, and `15/15/12` in pet cap / cookie cap / treasure cap order.

## User List

```ts
type UserList = {
  id: string;
  ownerId: string;
  name: string;
  format: ListFormat;
  source: "preset" | "userGenerated";
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
- `updatedAt` should change after meaningful activity such as creation, rename, item additions, item deletions, item edits, level edits, section or arena additions, section or arena deletions, or manual completion updates.
- Preset-derived lists should use `source: "preset"`.
- User generated lists should use `source: "userGenerated"`.
- `order` stores the user-controlled display order for the To-do page.
- Homepage `My Lists` cards use the first four lists by ascending `order`, matching the To-do page.
- Reordering lists should update `order` without requiring changes to `updatedAt`.
- New local user and guest profiles should initialize `userLists` with the four default preset-derived lists.
- Generated default preset-derived lists are stored as `UserList` records and may be edited, renamed, deleted, and reordered with the same controls as user generated lists.
- Generated default preset-derived lists should store empty add-item slots only; all `TodoItem` slot values should start as `null`.
- After a profile is initialized, deleted default preset-derived lists must not be regenerated automatically.

## Preset-Derived And User Generated Lists

The distinction between preset-derived lists and user generated lists is origin metadata:

- `source: "preset"` means the list was generated during new profile initialization from one of the default modes.
- `source: "userGenerated"` means the user created the list through Add list.
- `mode` stores the associated mode for preset-derived lists and is `null` for user generated None-format or personal lists without a preset mode.
- Both sources use the same `UserList` shape, persistence, list detail screens, card behavior, ordering, rename, delete, and edit rules.

## List Name Defaults

Add list auto-fills the name field only when the field is empty:

- Trophy Race format defaults to `Trophy Race`.
- Breakout format defaults to `Breakout`.
- Guild Run format defaults to `Guild Run`.
- Champions League format defaults to `Champions League`.
- None format defaults to `No mode`.

These defaults are saved as ordinary `name` values when the user keeps them. The user can edit an auto-filled name before saving or rename the list later. Format selection must not overwrite a name the user has already typed.

## Local Profile Scope

To-do lists belong to the current local profile.

Rules:

- The add-to-list dialog only shows lists owned by the current local profile.
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
  items: FreeItemBlock[];
};
```

Rules:

- Sections store combis, groups, arenas, or ungrouped items depending on list format.
- Trophy Race arenas are real list entries in the UI, but they are stored as combis inside a `combis` section rather than `arena` sections because Trophy Race does not use low, mid, or full arena target-set controls.
- Guild Run arena sections may temporarily store `targetSet: null` until the user chooses the arena's low, mid, or full target set. Items cannot be added to a Guild Run arena while its `targetSet` is `null`.
- Champions League arena sections must store fixed target sets by `position`: Arena 1 `targetSet: "low"`, Arena 2 `targetSet: "mid"`, and Arena 3 `targetSet: "full"`.
- None-format lists can mix individual items and user-added combi sections.
- None-format individual item entries are stored as free item blocks so the block can remain after its item is deleted.
- None-format individual treasure entries store one free item block each. Multi-treasure selection is represented only by filling treasure slots inside a `Combi`.

## Free Item Block

```ts
type FreeItemBlock = {
  id: string;
  position: number;
  slotType: ItemType;
  item: TodoItem | null;
};
```

Rules:

- Free item blocks are standalone None-format cookie, pet, or treasure entries.
- `slotType` determines which add-option artwork appears when `item` is `null`.
- Adding a catalog item to the block sets `item`.
- Deleting the catalog item from the block sets `item` back to `null` and keeps the `FreeItemBlock`.

## Combi

```ts
type Combi = {
  id: string;
  position: number;
  pet: TodoItem | null;
  cookie: TodoItem | null;
  relayCookie: TodoItem | null;
  treasures: (TodoItem | null)[];
};
```

Rules:

- `position` is display order or Breakout number.
- `relayCookie` is used by Trophy Race, Guild Run, and Champions League.
- `treasures` stores exactly 3 slot positions for combi treasure add-item slots.
- A `null` treasure slot is empty and should show `add treasure` artwork.
- Filled treasure slots store a `TodoItem`.

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
- `targetLevel` defaults to the maximum allowed by the destination add-item slot, list format, combi, or arena target set.
- `targetLevel` is directly user-editable only for None-format lists.
- In Trophy Race, Breakout, Champions League, and Guild Run, `targetLevel` follows the list format or arena target set.
- `completed` is true when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.

## Item Deletion

Deleting a catalog item from a list item block removes only the `TodoItem` from that slot:

- Combi `cookie`, `pet`, and `relayCookie` slots are set to `null`.
- Combi treasure slots are set to `null` at their preserved treasure slot position.
- Free item block `item` values are set to `null`.
- The surrounding combi or free item block remains stored.
- Other items in the same block remain unchanged.
- The deleted item's current level, target level, and completion state are discarded with that `TodoItem`.

## Item Replacement

Replacing a filled catalog item through an explicit `Switch?` action removes only the `TodoItem` in that slot and writes a new `TodoItem` for the selected catalog item.

Rules:

- Replacement is allowed only for compatible filled slots.
- The replaced item's current level, target level, and completion state are discarded.
- The new item starts with `currentLevel: 1`.
- The new item's `targetLevel` defaults to the maximum allowed by the destination add-item slot, list format, combi, or arena target set.
- Other items in the same combi or free item block remain unchanged unless the user is completing an explicit cookie-with-pet placement that also targets a compatible pet slot.

## Format Storage Mapping

- Trophy Race: one `combis` section with the user-selected number of Trophy Race arenas, from 1 to 10. Each arena is stored as a combi type 1 entry. Preset-derived Trophy Race lists start with 4 empty arenas. Users can add or delete Trophy Race arenas after creation, but the arena count must stay between 1 and 10. These arenas use full max targets and do not store low, mid, or full arena target sets.
- Breakout: up to 6 `group` sections, each with 3 to 15 numbered combis. Preset-derived Breakout lists start with 2 editable groups: Group 1 has 3 empty combis and Group 2 has 10 empty combis. Breakout always uses full max targets.
- Guild Run: 12 fixed `arena` sections, each with one empty combi and an arena target set that must be chosen by the user. Generated Guild Run preset-derived lists should initialize arena `targetSet` values as `null` until the user chooses them.
- Champions League: 3 fixed `arena` sections, each with one empty combi. Arena 1 stores `targetSet: "low"`, Arena 2 stores `targetSet: "mid"`, and Arena 3 stores `targetSet: "full"`.
- None: one or more flexible sections that can store individual cookies, pets, treasures, combi type 1 entries, and combi type 2 entries.

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

- Saved list names must be non-empty after trimming whitespace.
- Saved list names must be unique within the current local profile.
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
- Treasure slots per combi must remain exactly 3 positions, each containing either `null` or one treasure `TodoItem`.
- Trophy Race arenas cannot exceed 10.
- Trophy Race arena deletion cannot reduce the list below 1 arena.
- Deleting a Trophy Race arena removes that stored combi and discards any `TodoItem` values in its slots.
- Trophy Race user generated list setup must choose a starting arena count from 1 to 10.
- Breakout groups cannot exceed 6.
- Breakout group size must be between 3 and 15 combis.
- Breakout target levels are fixed to full max targets.
- Guild Run has exactly 12 arenas.
- Champions League has exactly 3 arenas.

## Related Specs

- `../G005-data-model.md` for the high-level data model overview.
- `../features/F002-list-formats.md` for format behavior.
- `../features/F003-preset-lists.md` for preset behavior.
- `../features/F004-user-generated-lists.md` for user generated list behavior.
- `../features/F005-homepage-list-cards.md` for homepage list-card selection behavior.
