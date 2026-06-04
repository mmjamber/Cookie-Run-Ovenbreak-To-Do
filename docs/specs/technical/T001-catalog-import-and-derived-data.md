# Technical Spec: Catalog Import And Derived Data

## Purpose

This spec defines how local Cookie Run: OvenBreak asset files become catalog records for cookies, pets, and treasures.

Feature specs describe catalog behavior from the user's perspective. This technical spec owns file-name parsing, rarity inference, pairing inference, review flags, and import reporting.

## Source Asset Rules

Catalog data comes from local asset files. Runtime code must not expose source folder paths as public URLs unless the files have been copied into a browser-served location.

The importer should read enough file metadata to derive:

- Item type.
- Display name.
- Sort name.
- Rarity.
- Release number.
- Cookie-pet pairing candidates.
- Review status.

## Catalog Item Shape

```ts
type ItemType = "cookie" | "pet" | "treasure";
type Rarity = "legendary" | "epic" | "rare" | "common";

type CatalogItem = {
  id: string;
  type: ItemType;
  name: string;
  rarity: Rarity;
  imageFileName: string;
  releaseNumber: number;
  sortName: string;
  pairedPetIds: string[];
  pairedCookieId: string | null;
  maxLevel: number;
  needsReview: boolean;
};
```

Rules:

- `id` must be stable across imports when the source asset identity has not changed.
- `releaseNumber` is internal-only metadata and must never be displayed on the website.
- `pairedPetIds` is used for cookies only and may contain up to 2 pets.
- `pairedCookieId` is used for pets only and should reference at most 1 cookie.
- `maxLevel` is 15 for cookies and pets, and 12 for treasures.

## Name Normalization

When deriving `name` and `sortName` from an image file name:

1. Remove the file extension.
2. Remove the leading number and the first `_`.
3. Convert every remaining `_` into a space.
4. Remove exact lowercase `bg` text.
5. Do not remove other casing such as `BG`.
6. Preserve numbers that do not appear at the beginning of the file name before the first `_`.
7. Trim extra spaces.

Example:

- `123_cookie_2_bg.png` becomes `cookie 2`.

## Sorting Data

The catalog UI always orders visible results by rarity group first:

1. Legendary
2. Epic
3. Rare
4. Common

Within visible rarity groups:

- Alphabetical sorting uses `sortName`.
- Release date sorting uses `releaseNumber`.

## Cookie-Pet Pairing

Cookie and pet image files can share the same leading number. The importer should group files by the leading number before the first `_`.

Rules:

- A cookie can have 0, 1, or 2 paired pets.
- The current known maximum is 2 pets per cookie.
- A pet should have at most 1 paired cookie.
- When files share a leading number, smaller image dimensions are a heuristic for pet files and larger image dimensions are a heuristic for cookie files.
- If a group contains more than 1 cookie candidate, more than 2 pet candidates, no clear cookie candidate, or otherwise cannot be classified confidently, mark the affected catalog items with `needsReview: true`.
- Ambiguous groups must be flagged for review instead of silently guessed.

## Rarity Inference And Overrides

Folder names can help infer rarity, but pet files stored inside cookie rarity folders may require explicit overrides.

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

## Import Review Report

Items with `needsReview: true` should appear in an admin/import report.

Import warnings must not appear on public catalog pages. Public catalog pages should show finished catalog data and ordinary empty/filter states only.

## Related Specs

- `../features/F001-catalog-pages.md` for user-facing catalog behavior.
- `../G002-rules.md` for universal product rules.
- `../user-interface/UI004-catalog-item-cards.md` for catalog presentation.
