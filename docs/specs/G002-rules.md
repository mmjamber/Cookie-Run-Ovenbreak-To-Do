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
- Arena: a list item block containing one combi type 1, with the label `Arena` followed by a number shown above the block, such as `Arena 1`. Arena numbers follow chronological list order, starting at 1 and increasing by 1. The maximum number of arenas in a list is defined by that list format's rules.
- Arena-format list: a Trophy Race, Guild Run, or Champions League list that contains arena list item blocks.
- Trophy Race arena: a Trophy Race arena list item block. Trophy Race arenas always use full max targets and do not have low, mid, or full arena target-set controls. When creating a user generated Trophy Race list, the only required setup choice is how many arenas to start with, up to 10.
- Breakout combi block: a list item block containing one combi type 2. Breakout uses only combi type 2 blocks inside groups.
- Group: numbered collection of Breakout combi blocks.
- Target level: desired level the user wants the item to reach.
- Add item: the action of placing a catalog cookie, pet, or treasure into a saved list. This is separate from Add list, which creates a new saved list.
- Add-item slot: an empty slot in a list detail view that can receive a catalog item. Add-item slots are shown with add-option artwork such as `add cookie`, `relay`, `add pet`, or `add treasure`. Each add-item slot type is linked to its matching PNG file in `assets/ovenbreak images/add cookies/`.
- Compatible placement slot: an empty or filled list slot whose type accepts the selected item. Cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots.
- Compatible-slot picker: the list-detail placement state used after an ordinary catalog add-to-list dialog. It lets the user choose any compatible empty slot, or explicitly replace a compatible filled slot through the `Switch?` affordance, across all available combis, groups, arenas, or None-format entries.
- List item block: one visible block inside a list detail view that contains add-item slots or filled catalog items. Arena blocks contain one combi type 1, Breakout combi blocks contain one combi type 2, and free item blocks contain standalone None-format cookie, pet, or treasure entries.
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

The specs may refer to these sets as low, mid, and full. On the website, any user-facing control that lets the user select one of these cap sets must show the numeric cap label instead of the words low, mid, or full. Numeric labels use pet cap / cookie cap / treasure cap order: `7/7/5`, `11/11/9`, and `15/15/12`.

| Set name | Pet max | Cookie max | Treasure max |
| --- | ---: | ---: | ---: |
| Low cap | 7 | 7 | 5 |
| Mid cap | 11 | 11 | 9 |
| Full cap | 15 | 15 | 12 |

When a user changes an editable arena maximum target set, they may only choose one of these three shared sets.

Champions League always uses fixed arena target sets: Arena 1 uses low, Arena 2 uses mid, and Arena 3 uses full. Guild Run target sets differ by user need, so the user must choose the target set for each Guild Run arena before items can be added to that arena.

Current levels are editable by the user in every format. Target levels are directly editable only in None-format lists, where they cannot exceed the item type's absolute cap. Trophy Race and Breakout targets are fixed to full max values. Champions League targets are fixed by arena order: Arena 1 low, Arena 2 mid, and Arena 3 full. Guild Run targets are editable only by changing each arena's target set to low, mid, or full.

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

Lists belong either to the signed-in Supabase account or to the current unsigned-in guest browser profile. When adding catalog items to a list, users should only see lists available to the current account or guest profile.

A cookie, pet, or treasure can be added to multiple to-do lists at the same time.

Account controls should support real email/password sign-up, sign-in, sign-out, required display-name setup, and current-account display. Guest users may create temporary browser-local lists before signing in; after sign-up or sign-in, guest lists should migrate into the signed-in account.

## Catalog Rules

The website needs dedicated catalog pages for:

- Cookies
- Pets
- Treasures

Catalog data comes from local asset files. Display names are derived from cleaned file names, rarity comes from folder structure plus explicit overrides, and release order comes from leading file-name numbers used internally only.

Catalog sorting options:

- Alphabetical
- Release date
- `Hide rarity` button

Catalog item selection is single-item by default. The only multi-selection flow is adding treasures to a combi-format treasure destination with enough compatible empty or explicitly switched treasure slots. In that flow, users may select up to 3 treasures at once, and selected treasure cards must show numbered badges `1`, `2`, and `3`.

Catalog derivation rules are defined in `technical/T001-catalog-import-and-derived-data.md`.

## Rarity Sort Order

Catalog pages should always order visible items by rarity from highest to lowest:

1. Legendary
2. Epic
3. Rare
4. Common

The sort control should only choose Alphabetical or Release Date ordering within the visible rarity groups. Users should be able to hide or show individual rarities through a button labeled `Hide rarity`. The `Hide rarity` button opens a horizontal panel under the button. Cookie and pet catalogs include `Legendary`, `Epic`, `Rare`, and `Common` checkbox options; treasure catalogs include `Legendary`, `Epic`, and `Rare` only.

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

## Account, Persistence, And Scope Constraints

- User accounts, account-backed saved lists, and guest-to-account migration are in scope through Supabase.
- Store authenticated account data according to `technical/T002-local-storage-and-data-architecture.md`.
- Guest lists may use browser-local storage as temporary device/browser-local data until sign-up or sign-in migration succeeds.
- Admin catalog management is in scope according to `features/F007-admin-catalog-management.md`, but admin tools must build on the shared account/auth system and protected account roles.
- Do not assume live game data, official game account sync, or official Cookie Run API access.
- Do not add list export, list sharing, public links, or shareable files.
- Item current and target levels must never exceed their item type's absolute cap.
- Item current levels must never exceed the current user-selected list or arena limit.
- Item target levels must follow the active format rule: fixed full targets for Trophy Race and Breakout, fixed arena targets for Champions League, user-selected arena target sets for Guild Run, or directly editable per-item targets for None-format lists.
- Do not generate decorative or base project images. Admin-uploaded catalog images may produce approved `.webp` display derivatives according to `technical/T004-runtime-assets-and-ui-implementation.md`.
