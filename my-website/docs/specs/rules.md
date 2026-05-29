# Rules

## Product Summary

Cookie Run: Ovenbreak To-Do is organized around user-made to-do lists. A list contains either combis or ungrouped individual items, depending on its selected format.

For product goals, audience, MVP scope, and success criteria, see `global-spec.md`.

## Core Vocabulary

- Cookie: playable character. Maximum level is 15.
- Pet: companion item. Maximum level is 15.
- Treasure: equipment item. Maximum level is 12.
- Combi: a grouped set of items used together in a mode.
- Relay cookie: secondary cookie in modes that support one.
- Arena: fixed slot inside Trophy Race, Guild Run, or Champions League.
- Group: numbered collection of Breakout combis.
- Target level: desired level the user wants the item to reach.

## Global Level Caps

| Item type | Absolute max level |
| --- | --- |
| Cookie | 15 |
| Pet | 15 |
| Treasure | 12 |

## Shared Target Sets

Guild Run and Champions League use these target sets as arena maximum limits.

| Set name | Cookie max | Pet max | Treasure max |
| --- | ---: | ---: | ---: |
| Low cap | 7 | 7 | 5 |
| Mid cap | 11 | 11 | 9 |
| Full cap | 15 | 15 | 12 |

When a user changes an arena maximum target set, they may only choose one of these three shared sets.

Target levels are always editable by the user, but they cannot exceed the current item, list, or arena maximum. For example, if a Guild Run arena has cookie/pet max 7 and treasure max 5, targets in that arena cannot be set above those numbers unless the arena limit is changed manually.

When an item is added to a to-do list, its current level and target level both start at `Lv. 1`. The website assumes newly added cookies, pets, and treasures have not been maxed yet.

Users track both current level and target level. An item is complete when its current level reaches its target level. If the user manually marks an item complete, the website should automatically set the current level to the item's target level.

Progress controls are level-based only. Do not add separate completion controls for whole combis, groups, arenas, or list sections unless a future spec changes this.

## Supported List Formats

There are five available formats:

- Trophy Race
- Breakout
- Guild Run
- Champions League
- None

## Preset Lists

The website should provide preset to-do lists for these game modes:

- Trophy Race
- Breakout
- Champions League
- Guild Run

Presets should follow each mode's list format, but users still need to fill in the specific cookies, pets, treasures, and target choices where applicable.

## Custom Lists

Users can create custom named lists. During creation, the user chooses one of the five supported formats. After creation, the list must enforce the rules of that format.

Lists belong to a local guest profile unless a future requirement explicitly adds accounts. When adding catalog items to a list, users should only see lists linked to the current local profile.

A cookie, pet, or treasure can be added to multiple to-do lists at the same time.

Login and sign-in controls may appear in the website UI for visual planning, but they should be non-functional for now. Clicking Log in, or Sign in should not start authentication, call a backend, or change the current local profile.

## Catalog Rules

The website needs dedicated catalog pages for:

- Cookies
- Pets
- Treasures

Catalog data comes from local asset files. Display names are derived from cleaned file names, rarity comes from folder structure plus explicit overrides, and release order comes from leading file-name numbers used internally only.

Catalog sorting options:

- Alphabetical
- Release date
- Rarity filters

File-name-derived sorting rules:

- Alphabetical sorting ignores the leading `number_` portion of file names and sorts by the text after it.
- Release date sorting uses the leading number at the beginning of image file names.
- Leading file-name numbers are internal-only metadata for sorting, pairing, and import logic. They must never appear in the website UI.
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

Catalog pages should always order visible items by rarity from highest to lowest:

1. Legendary
2. Epic
3. Rare
4. Common

The sort control should only choose Alphabetical or Release Date ordering within the visible rarity groups. Users should be able to hide or show individual rarities with filters.

Rarity should come from catalog metadata or explicit importer overrides. Do not rely only on folder names when pet files are stored inside cookie rarity folders.

## Rarity Frame Colors

Cookie and pet rarity should be visible through a CSS frame around the item image rather than a text badge. Treasure rarity should not be shown visually, but it is still used for rarity sorting.

| Cookie/pet rarity | Frame color |
| --- | --- |
| Legendary | `#16cbbb` outer frame with oversized clipped yellow/teal/purple diagonal gradient fill |
| Epic | `#862894` outer frame with `#be74c9` fill |
| Rare | `#28719e` outer frame with `#72b9df` fill |
| Common | `#9a633d` outer frame with `#d39b73` fill |

The frame should wrap the item image with a real outer frame color and an oversized inner fill layer clipped by the rounded frame. Treasures should not use these frames.

## Constraints

- Keep the project local and front-end based unless a future request explicitly changes this.
- Do not add a backend, remote database, hosted account system, or network sync for now.
- Keep Log in, and Sign in controls aesthetic-only for now.
- Do not assume live game data, accounts, cloud sync, or official API access.
- Store user data locally in the browser unless a future persistence spec says otherwise.
- Do not add list export, list sharing, public links, or shareable files.
- Item current and target levels must never exceed their item type's absolute cap.
- Item current and target levels must never exceed the current user-selected list or arena limit.
- Do not generate images under any circumstance, only use available assets or CSS code for decorative purposes.
