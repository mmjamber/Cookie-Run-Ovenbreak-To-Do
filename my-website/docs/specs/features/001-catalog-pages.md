# Feature Spec: Catalog Pages

## Summary

The website has separate pages for cookies, pets, and treasures. Users can browse, sort, and add catalog items to compatible to-do lists.

## Pages

- Cookies page: all cookies.
- Pets page: all pets.
- Treasures page: all treasures.

## Catalog Item Display

Each item should show:

- Image.
- Name.
- Rarity frame for cookies and pets only.
- Add action.

Catalog item cards must not show release numbers, leading file-name numbers, or other numeric ordering metadata.

Cookie and pet rarity is shown visually through the CSS frame around the image, not through a text badge by default. Treasure rarity should not be shown visually in catalog item cards.

Frame colors:

- Common: brown.
- Rare: blue.
- Epic: purple.
- Legendary: teal.

The frame may use the shared item-card frame fill behind cookie or pet artwork. Treasures should not use rarity frames.

## Search, Sorting, And Filters

All three catalog pages should include:

- Search bar.
- Sort control with Alphabetical and Release Date options.
- Rarity filters that let users hide or show specific rarities.

Default ordering:

- Items are always grouped or ordered by rarity first: Legendary, Epic, Rare, Common.
- The sort control only affects the item order within the visible rarity groups.
- Rarity itself is not a sort option because it is always applied.

Rules:

- Alphabetical order sorts by the file name text after the leading `number_`.
- Release date order sorts by the leading number at the beginning of the image file name.
- Leading file-name numbers are internal-only sorting and pairing metadata and must never be displayed on the website.
- Rarity filters can hide any combination of Legendary, Epic, Rare, and Common items.
- Treasure rarity is still used for ordering and filtering, so legendary treasures appear first by default even though treasure rarity is not shown visually.
- Pet rarity may need explicit overrides when pet files are stored in cookie rarity folders.
- Display names derived from image files remove the leading number and first `_`, convert every remaining `_` into a space, and remove exact lowercase `bg` text.
- Other casing, such as `BG`, should not be removed by the `bg` rule.
- Numbers that appear later in the file name must be preserved.

## Cookie-Pet Pairing

Cookie and pet image files share a leading number when they are paired. A cookie can have up to 2 paired pets.

When a user adds one cookie to a to-do list:

1. The website checks for paired pets with the same leading number.
2. If 1 paired pet exists, show a prompt.
3. Prompt options are Add cookie only, Add cookie and pet, and Cancel.
4. If 2 paired pets exist, show a prompt that lets the user choose Add cookie only, Add cookie with one selected pet, or Cancel.
5. After the user chooses cookie-only or cookie-with-pet, open the add-to-list picker.

When a destination combi supports both a main cookie and relay cookie, the user may select up to 2 cookies at once from the Cookies catalog:

- Cookie click order matters.
- The first selected cookie becomes the main cookie.
- The second selected cookie becomes the relay cookie.
- Selected cookie cards must show numbered selection icons so the user can see which cookie is first and which is second.
- The paired-pet prompt is shown only for the first selected cookie.
- The paired-pet prompt is not shown for the second or relay cookie.
- If the destination combi does not support a relay cookie, only 1 cookie can be selected for that combi.

Asset classification rules:

- Smaller image dimensions are a heuristic for pet files.
- Larger image dimensions are a heuristic for cookie files.
- Groups with unclear classification, more than 1 cookie candidate, or more than 2 pet candidates must be flagged for review.
- Asset import warnings should appear in an admin/import report, not on public catalog pages.

Rarity override rule:

- In `Cookies/Legendary`, only these pet files are Legendary: `0_Dreamcatcher`, `1_Windcatcher`, `2_Wave_Drop`, `3_Picky_Pyrotiger`, `4_Eternal_Eye_of_Darkness`, `5_Millennial_Jade_Deer`, `6_Wyrmfire_blade`, `7_Golden_wyrmguard`, `8_Continuum_Cog`, `9_Lotus_dragon_scale`, `10_Dragonheart_bat`, `11_Draconic_ambre`, and `16_Somnionimbus`.
- Other pet files in `Cookies/Legendary` should be treated as Epic.

## Add-To-List Picker

When a user tries to add a cookie, pet, or treasure from a catalog page, a small tab or popover should appear.

The picker should:

- Show the available to-do lists linked to the current local profile.
- Let the user choose which list to add the selected item or items to.
- After a list is selected, show only compatible destination slots for the selected item or items and list format.
- For cookie-with-pet choices, show only destination lists and slots that can accept both the cookie and pet.
- For 2-cookie selections, show only combis that can accept a main cookie and relay cookie.
- For 3-treasure selections, show only combis or sections with enough compatible treasure slots.
- Explain when a list has no compatible slots for the selected item or items.
- Let the user cancel without changing any list.

For cookies, the paired-pet prompt should happen before the destination list is chosen. The list picker should then filter or explain destinations based on the user's cookie-only or cookie-with-pet choice.

## Item Destination Rules

- Cookies can fill main cookie, relay cookie, or None-format cookie slots.
- Up to 2 cookies can be selected at the same time when the destination combi allows both a main cookie and relay cookie.
- In 2-cookie selections, the first selected cookie fills the main cookie slot and the second selected cookie fills the relay cookie slot.
- The paired-pet prompt only applies to the first selected cookie in a 2-cookie selection.
- Pets can fill pet or None-format pet slots.
- Treasures can fill treasure or None-format treasure slots.
- Up to 3 treasures can be selected at the same time for combis that require treasure slots.
- Treasure click order does not matter.
- The website must prevent adding an item to an incompatible slot.

## Acceptance Criteria

- [ ] Cookies, pets, and treasures each have a dedicated page.
- [ ] Each page has a search bar.
- [ ] Each page always orders visible items by rarity first: Legendary, Epic, Rare, Common.
- [ ] Each page supports Alphabetical and Release Date sort options.
- [ ] Each page has rarity filters that can hide selected rarities.
- [ ] Alphabetical and release sorting follow file-name-derived rules.
- [ ] Treasures are not visually framed by rarity.
- [ ] Adding a cookie can prompt for 1 or 2 paired pets.
- [ ] Users can select up to 2 cookies at once for combis that support main and relay cookies.
- [ ] In 2-cookie selections, the first selected cookie becomes the main cookie and the second becomes the relay cookie.
- [ ] Selected cookie cards show numbered icons for first and second selection order.
- [ ] The paired-pet prompt is not shown for the second or relay cookie.
- [ ] Users can select up to 3 treasures at once for combis with enough treasure slots.
- [ ] Adding any catalog item opens a small list picker with current local profile lists.
- [ ] Ambiguous cookie-pet file groups are flagged for review.
- [ ] Asset import warnings appear in an admin/import report only.
- [ ] Users can choose a destination list and compatible slot.
