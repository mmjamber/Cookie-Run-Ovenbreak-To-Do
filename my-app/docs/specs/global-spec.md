# Global Spec

## Product Summary

Build a website for Cookie Run: Ovenbreak players who want to track which cookies, pets, and treasures need to be leveled up for specific game modes or custom goals.

The primary object is a user-made to-do list. A list contains either combis or free individual items, depending on its selected format.

## Audience

- Cookie Run: Ovenbreak players planning upgrades for game modes.
- Players who need several independent upgrade lists at once.
- Players who want target levels to be visible per cookie, pet, and treasure.

## Core Vocabulary

- Cookie: playable character. Maximum level is 15.
- Pet: companion item. Maximum level is 15.
- Treasure: equipment item. Maximum level is 12.
- Combi: a grouped set of items used together in a mode.
- Relay cookie: secondary cookie in modes that support one.
- Arena: fixed slot inside Guild Run or Champions League.
- Group: numbered collection of Breakout combis.
- Target level: desired level the user wants the item to reach.

## Global Level Caps

| Item type | Absolute max level |
| --- | --- |
| Cookie | 15 |
| Pet | 15 |
| Treasure | 12 |

## Shared Target Sets

Guild Run and Champions League use these preset target sets.

| Set name | Cookie target | Pet target | Treasure target |
| --- | ---: | ---: | ---: |
| Low cap | 7 | 7 | 5 |
| Mid cap | 11 | 11 | 9 |
| Full cap | 15 | 15 | 12 |

## Supported List Formats

There are five available formats:

- Trophy Race
- Breakout
- Guild Run
- Champions League
- Free

## Preset Lists

The website should provide preset to-do lists for these game modes:

- Trophy Race
- Breakout
- Champions League
- Guild Run

Presets should follow each mode's list format, but users still need to fill in the specific cookies, pets, treasures, and target choices where applicable.

## Custom Lists

Users can create custom named lists. During creation, the user chooses one of the five supported formats. After creation, the list must enforce the rules of that format.

## Catalog Rules

The app needs dedicated catalog pages for:

- Cookies
- Pets
- Treasures

Catalog sorting options:

- Alphabetical
- Rarity
- Release date

File-name-derived sorting rules:

- Alphabetical sorting ignores the leading `number_` portion of file names and sorts by the text after it.
- Release date sorting uses the leading number at the beginning of image file names.
- Cookie and pet image files that share the same leading number are considered pairing candidates.
- A cookie can have up to 2 paired pets.
- Pet image files are generally smaller than cookie image files; use image dimensions as a classification heuristic.
- File groups that cannot be classified confidently must be flagged for review instead of guessed silently.

Catalog display-name cleanup rules:

- When deriving a cookie, pet, or treasure name from an image file name, remove the leading number that appears before the first `_`.
- Convert every `_` after the first `_` into a space.
- Remove any exact lowercase `bg` text from the derived display name. Do not remove other casing such as `BG`.
- Preserve numbers that do not appear at the beginning of the file name before the first `_`.
- Example: `123_example_2_bg.png` becomes `example 2`.

## Rarity Sort Order

Sort rarity from highest to lowest:

1. Legendary
2. Epic
3. Rare
4. Common

## Rarity Frame Colors

Cookie and pet rarity should be visible through a CSS frame around the item image rather than a text badge. Treasure rarity should not be shown visually, but it is still used for rarity sorting.

| Cookie/pet rarity | Frame color |
| --- | --- |
| Legendary | Teal |
| Epic | Purple |
| Rare | Blue |
| Common | Brown |

The frame should wrap the item image without adding a solid background color behind the cookie or pet artwork. Treasures should not use these frames.

## Constraints

- Do not use the sibling `../ovenbreak images` folder until asset ingestion is explicitly implemented.
- Do not assume live game data, accounts, cloud sync, or official API access.
- Store user data locally for the first implementation unless a persistence spec is added.
- Item target levels must never exceed their item type's absolute cap.

## Open Questions

- What catalog data source will provide item names, rarities, and release order?
- Should users track current level in addition to target level?
- Should completed status be manual, automatic from current level, or both?
- Should lists be exportable or shareable?
