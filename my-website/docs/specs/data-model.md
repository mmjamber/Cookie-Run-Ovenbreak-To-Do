# Data Model

## Item Types

```ts
type ItemType = "cookie" | "pet" | "treasure";
type Rarity = "legendary" | "epic" | "rare" | "common";
type ListFormat = "trophyRace" | "breakout" | "guildRun" | "championsLeague" | "none";
type TargetSet = "low" | "mid" | "full";
```

## Catalog Item

Represents a cookie, pet, or treasure in the catalog.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable internal id |
| `type` | `ItemType` | Cookie, pet, or treasure |
| `name` | `string` | Display name |
| `rarity` | `Rarity` | Used by rarity sorting |
| `imageFileName` | `string` | Original asset file name |
| `releaseNumber` | `number` | Internal-only leading number from file name for sorting and pairing; never display on the website |
| `sortName` | `string` | File name text after `number_`, normalized |
| `pairedPetIds` | `string[]` | Cookies only, up to 2 pets inferred by shared leading number |
| `pairedCookieId` | `string` or `null` | Pets only, inferred by shared leading number |
| `maxLevel` | `number` | 15 for cookies and pets, 12 for treasures |
| `needsReview` | `boolean` | True when asset classification or pairing is ambiguous |

## Catalog Name Normalization

When deriving `name` and `sortName` from an image file name:

1. Remove the file extension.
2. Remove the leading number and the first `_`.
3. Convert every remaining `_` into a space.
4. Remove any exact lowercase `bg` text. Do not remove other casing such as `BG`.
5. Preserve numbers that do not appear at the beginning of the file name before the first `_`.
6. Trim extra spaces.

Example: `123_cookie_2_bg.png` becomes `cookie 2`.

## Cookie-Pet Pairing Model

Cookie and pet image files can share the same leading number. The importer should group files by the leading number before the first `_`.

Rules:

- A cookie can have 0, 1, or 2 paired pets.
- The current known maximum is 2 pets per cookie.
- A pet should have at most 1 paired cookie.
- When files share a leading number, smaller image dimensions are a heuristic for pet files and larger image dimensions are a heuristic for cookie files.
- If the group contains more than 1 cookie candidate, more than 2 pet candidates, no clear cookie candidate, or otherwise cannot be classified confidently, mark the affected catalog items with `needsReview: true`.
- Ambiguous groups must be flagged for review instead of silently guessed.
- Items with `needsReview: true` should be listed in an admin/import report, not surfaced on public catalog pages.

## Catalog Rarity Overrides

Folder names can help infer rarity, but some pet files inside cookie rarity folders need explicit overrides.

In `Cookies/Legendary`, these pet files are Legendary:

- `0_Dreamcatcher`
- `1_Windcatcher`
- `2_Wave_Drop`
- `3_Picky_Pyrotiger`
- `4_Eternal_Eye_of_Darkness`
- `5_Millennial_Jade_Deer`
- `6_Wyrmfire_blade`
- `7_Golden_wyrmguard`
- `8_Continuum_Cog`
- `9_Lotus_dragon_scale`
- `10_Dragonheart_bat`
- `11_Draconic_ambre`
- `16_Somnionimbus`

All other pet files in `Cookies/Legendary` should be treated as Epic unless another explicit override is added.

## User List

Represents one saved to-do list.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id |
| `ownerId` | `string` | Local profile id that owns the list |
| `name` | `string` | User-defined list name |
| `format` | `ListFormat` | Determines allowed structure |
| `source` | `"preset"` or `"custom"` | How the list was created |
| `mode` | `ListFormat` or `null` | Preset mode when relevant |
| `createdAt` | `string` | ISO timestamp |
| `updatedAt` | `string` | ISO timestamp |
| `sections` | `ListSection[]` | Format-specific contents |

## Local Profile Scope

To-do lists should be scoped to the current local profile. The project should remain local and front-end based unless stated otherwise.

Rules:

- The add-to-list picker only shows lists owned by the current local profile.
- Local profile lists should remain available in browser storage.
- Login and sign-in controls are aesthetic-only for now and should not alter `ownerId`.
- Do not add backend accounts, remote sync, or server persistence unless a future requirement explicitly asks for it.
- If a future login system is added, local profile lists should have a clear migration or import path.

## List Section

Sections allow each format to store combis, groups, arenas, or ungrouped items in one list.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id |
| `kind` | `"combis"` / `"group"` / `"arena"` / `"individualItems"` | Section role |
| `label` | `string` | User-visible section name |
| `position` | `number` | Display order |
| `targetSet` | `TargetSet` or `null` | Arena maximum target set |
| `combis` | `Combi[]` | Empty for None format |
| `items` | `TodoItem[]` | None format individual items |

## Combi

Represents a mode-specific combination.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id |
| `position` | `number` | Display order or Breakout number |
| `pet` | `TodoItem` or `null` | Required before complete |
| `cookie` | `TodoItem` or `null` | Required before complete |
| `relayCookie` | `TodoItem` or `null` | Used by Trophy Race, Guild Run, Champions League |
| `treasures` | `TodoItem[]` | Up to 3 treasures |

## Todo Item

Represents one selected catalog item inside a list.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id for this list item |
| `catalogItemId` | `string` | References catalog item |
| `type` | `ItemType` | Duplicated for convenience |
| `currentLevel` | `number` | Editable user current level; newly added items start at 1 and must respect item, list, and arena maximums |
| `targetLevel` | `number` | Editable user target; newly added items start at 1 and must respect item, list, and arena maximums |
| `completed` | `boolean` | True when `currentLevel >= targetLevel`; manually marking complete sets `currentLevel` to `targetLevel` |

## Format Storage Mapping

- Trophy Race: one `combis` section with 4 default combis, expandable to 50.
- Breakout: up to 5 `group` sections, each with 3 to 15 numbered combis.
- Guild Run: 12 fixed `arena` sections, each with one combi and a configured maximum target set.
- Champions League: 3 fixed `arena` sections, each with one combi and user-selected maximum target set.
- None: one `individualItems` section with individual cookies, pets, and treasures.

## Persistence

Initial implementation should use browser local storage:

- `catalogItems` can be static bundled data.
- `userLists` should persist locally.
- Use a versioned storage key so future migrations are possible.
- Do not require a backend service for persistence.
- Saving user to-do lists in browser local storage is the primary way to test the website locally.

## Validation Rules

- Cookie target cannot exceed 15.
- Pet target cannot exceed 15.
- Treasure target cannot exceed 12.
- Newly added cookies, pets, and treasures start with `currentLevel: 1` and `targetLevel: 1`.
- Current and target levels are always editable but cannot exceed the current item, list, or arena maximum.
- An item is complete when `currentLevel >= targetLevel`.
- Manually marking an item complete sets `currentLevel` to `targetLevel`.
- In arena formats, the selected `targetSet` defines the maximum allowed target for that arena.
- Treasure slots per combi cannot exceed 3.
- Trophy Race combis cannot exceed 50.
- Breakout groups cannot exceed 5.
- Breakout group size must be between 3 and 15 combis.
- Guild Run has exactly 12 arenas.
- Champions League has exactly 3 arenas.
