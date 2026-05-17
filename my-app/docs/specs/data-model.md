# Data Model

## Item Types

```ts
type ItemType = "cookie" | "pet" | "treasure";
type Rarity = "legendary" | "epic" | "rare" | "common";
type ListFormat = "trophyRace" | "breakout" | "guildRun" | "championsLeague" | "free";
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
| `releaseNumber` | `number` | Leading number from file name |
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

## User List

Represents one saved to-do list.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id |
| `name` | `string` | User-defined list name |
| `format` | `ListFormat` | Determines allowed structure |
| `source` | `"preset"` or `"custom"` | How the list was created |
| `mode` | `ListFormat` or `null` | Preset mode when relevant |
| `createdAt` | `string` | ISO timestamp |
| `updatedAt` | `string` | ISO timestamp |
| `sections` | `ListSection[]` | Format-specific contents |

## List Section

Sections allow each format to store combis, groups, arenas, or free items in one list.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | `string` | Stable unique id |
| `kind` | `"combis"` / `"group"` / `"arena"` / `"freeItems"` | Section role |
| `label` | `string` | User-visible section name |
| `position` | `number` | Display order |
| `targetSet` | `TargetSet` or `null` | Arena formats only |
| `combis` | `Combi[]` | Empty for Free format |
| `items` | `TodoItem[]` | Free format individual items |

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
| `targetLevel` | `number` | Must respect format and item caps |
| `completed` | `boolean` | Manual tracking for initial implementation |

## Format Storage Mapping

- Trophy Race: one `combis` section with 4 default combis, expandable to 50.
- Breakout: up to 5 `group` sections, each with 3 to 15 numbered combis.
- Guild Run: 12 fixed `arena` sections, each with one combi and a fixed or configured target set.
- Champions League: 3 fixed `arena` sections, each with one combi and user-selected target set.
- Free: one `freeItems` section with individual cookies, pets, and treasures.

## Persistence

Initial implementation should use browser local storage:

- `catalogItems` can be static bundled data.
- `userLists` should persist locally.
- Use a versioned storage key so future migrations are possible.

## Validation Rules

- Cookie target cannot exceed 15.
- Pet target cannot exceed 15.
- Treasure target cannot exceed 12.
- Treasure slots per combi cannot exceed 3.
- Trophy Race combis cannot exceed 50.
- Breakout groups cannot exceed 5.
- Breakout group size must be between 3 and 15 combis.
- Guild Run has exactly 12 arenas.
- Champions League has exactly 3 arenas.
