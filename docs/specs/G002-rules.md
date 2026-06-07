# Rules

## Product Summary

Cookie Run: Ovenbreak To-Do is organized around user-made to-do lists. A list contains combis, groups, arenas, ungrouped individual items, or a flexible mix of user-added entries depending on its selected format.

For product goals, audience, MVP scope, and success criteria, see `G003-global-spec.md`.

## Core Vocabulary

- Cookie: playable character. Maximum level is 15.
- Pet: companion item. Maximum level is 15.
- Treasure: equipment item. Maximum level is 12.
- Combi: a grouped set of items used together in a mode.
- Combi type 1: a combi with 1 pet, 1 main cookie, 1 relay cookie, and 3 treasures.
- Combi type 2: a combi with 1 pet, 1 main cookie, and 3 treasures; no relay cookie.
- Relay cookie: secondary cookie in modes that support one.
- Arena: a labeled mode slot or section used by Trophy Race, Guild Run, or Champions League.
- Arena-format list: a Guild Run or Champions League list whose fixed arena sections each have a low, mid, or full target set.
- Trophy Race arena: a Trophy Race mode arena using the combi type 1 layout. Trophy Race arenas always use full max targets and do not have low, mid, or full arena target-set controls. When creating a user generated Trophy Race list, the only required setup choice is how many arenas to start with, up to 10.
- Group: numbered collection of Breakout combis.
- Target level: desired level the user wants the item to reach.
- Add item: the action of placing a catalog cookie, pet, or treasure into a saved list. This is separate from Add list, which creates a new saved list.
- Add-item slot: an empty slot in a list detail view that can receive a catalog item. Add-item slots are shown with add-option artwork such as `add cookie`, `relay`, `add pet`, or `add treasure`. Each add-item slot type is linked to its matching PNG file in `assets/ovenbreak images/add cookies/`.
- Compatible add-item slot: an empty add-item slot whose type accepts the selected item. Cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots.
- Compatible-slot picker: the list-detail placement state used after an ordinary catalog add-to-list dialog. It lets the user choose any compatible empty add-item slot in the chosen list, across all available combis, groups, arenas, or None-format entries.
- List item block: one visible block inside a list detail view that contains add-item slots or filled catalog items. Combi blocks contain combi slots; free item blocks contain standalone None-format cookie, pet, or treasure entries.
- Options toggle: a top-right control on every list item block. Opening it shows item-management actions for that block, including deleting any filled catalog item in the block.

## Global Level Caps

| Item type | Absolute max level |
| --- | --- |
| Cookie | 15 |
| Pet | 15 |
| Treasure | 12 |

## Shared Target Sets

Guild Run and Champions League use these target sets as arena maximum limits.
Trophy Race does not use these arena target sets; Trophy Race arenas always default to full max targets. Breakout also always uses full max targets.

| Set name | Cookie max | Pet max | Treasure max |
| --- | ---: | ---: | ---: |
| Low cap | 7 | 7 | 5 |
| Mid cap | 11 | 11 | 9 |
| Full cap | 15 | 15 | 12 |

When a user changes an arena maximum target set, they may only choose one of these three shared sets.

Champions League always uses fixed arena target sets: Arena 1 uses low, Arena 2 uses mid, and Arena 3 uses full. Guild Run target sets differ by user need, so the user must choose the target set for each Guild Run arena before items can be added to that arena.

Target levels are always editable by the user, but they cannot exceed the current item, list, or arena maximum. For example, if a Guild Run arena has cookie/pet max 7 and treasure max 5, targets in that arena cannot be set above those numbers unless the arena limit is changed manually.

When an item is added to a to-do list, its current level starts at `Lv. 1`. Its target level should automatically match the maximum allowed by the current add-item slot, list format, combi, or arena target set. For example, a full-cap combi should default cookie and pet targets to `Lv. 15` and treasure targets to `Lv. 12`; a low-cap arena should default cookie and pet targets to `Lv. 7` and treasure targets to `Lv. 5`. The website should assume that newly added items have not been leveled yet, but that the user's goal is the format-appropriate target.

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

Preset-derived lists must never include preselected cookies, pets, treasures, or premade recommended combis. They start with the required empty add-item slots for their format, and the user fills every item slot manually.

## User Generated Lists

Users can create user generated named lists. During creation, the user chooses one of the five supported formats. After creation, the list must enforce the rules of that format.

When a user chooses a format while the list name field is empty, the website should auto-fill the name with that format's default name. The None format uses `No mode` as its default auto-filled name. Auto-filled names remain editable before saving.

Lists belong to a local guest profile unless a future requirement explicitly adds accounts. When adding catalog items to a list, users should only see lists linked to the current local profile.

A cookie, pet, or treasure can be added to multiple to-do lists at the same time.

Login and sign-in controls should appear in the website UI for visual planning, but they should be non-functional for now. Clicking Log in, or Sign in should not start authentication, call a backend, or change the current local profile. For exact placement and visual styling, see `user-interface/UI002-page-shell-and-navigation.md`.

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

Catalog item selection is single-item by default. The only multi-selection flow is adding treasures to a combi-format treasure destination with enough compatible empty treasure slots. In that flow, users may select up to 3 treasures at once, and selected treasure cards must show numbered badges `1`, `2`, and `3`.

Catalog derivation rules are defined in `technical/T001-catalog-import-and-derived-data.md`.

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
- Store user data locally in the browser according to `technical/T002-local-storage-and-data-architecture.md` unless a future persistence spec says otherwise.
- Do not add list export, list sharing, public links, or shareable files.
- Item current and target levels must never exceed their item type's absolute cap.
- Item current and target levels must never exceed the current user-selected list or arena limit.
- Do not generate images under any circumstance; use available assets and the runtime asset rules in `technical/T004-runtime-assets-and-ui-implementation.md`.
