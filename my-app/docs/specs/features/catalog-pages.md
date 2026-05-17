# Feature Spec: Catalog Pages

## Summary

The app has separate pages for cookies, pets, and treasures. Users can browse, sort, and add catalog items to compatible to-do lists.

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
- Optional release order metadata if useful.

Cookie and pet rarity is shown visually through the CSS frame around the image, not through a text badge by default. Treasure rarity should not be shown visually in catalog item cards.

Frame colors:

- Common: brown.
- Rare: blue.
- Epic: purple.
- Legendary: teal.

The frame should not add a background color behind the cookie or pet artwork. Treasures should not use rarity frames.

## Sorting

All three catalog pages support:

- Alphabetical order.
- Rarity order.
- Release date order.

Rules:

- Alphabetical order sorts by the file name text after the leading `number_`.
- Rarity order sorts Legendary, Epic, Rare, Common.
- Treasure rarity is still used for sorting, so legendary treasures appear first when the treasures page is sorted by rarity.
- Release date order sorts by the leading number at the beginning of the image file name.
- Display names derived from image files remove the leading number and first `_`, convert every remaining `_` into a space, and remove exact lowercase `bg` text.
- Other casing, such as `BG`, should not be removed by the `bg` rule.
- Numbers that appear later in the file name must be preserved.

## Cookie-Pet Pairing

Cookie and pet image files share a leading number when they are paired. A cookie can have up to 2 paired pets.

When a user adds a cookie to a to-do list:

1. App checks for paired pets with the same leading number.
2. If 1 paired pet exists, show a prompt.
3. Prompt options are Add cookie only, Add cookie and pet, and Cancel.
4. If 2 paired pets exist, show a prompt that lets the user choose Add cookie only, Add cookie with one selected pet, or Cancel.
5. If the destination list format has no compatible pet slot, disable or hide pet-add options with an explanation.

Asset classification rules:

- Smaller image dimensions are a heuristic for pet files.
- Larger image dimensions are a heuristic for cookie files.
- Groups with unclear classification, more than 1 cookie candidate, or more than 2 pet candidates must be flagged for review.

## Item Destination Rules

- Cookies can fill main cookie, relay cookie, or Free cookie slots.
- Pets can fill pet or Free pet slots.
- Treasures can fill treasure or Free treasure slots.
- The app must prevent adding an item to an incompatible slot.

## Acceptance Criteria

- [ ] Cookies, pets, and treasures each have a dedicated page.
- [ ] Each page supports all three sort modes.
- [ ] Alphabetical and release sorting follow file-name-derived rules.
- [ ] Rarity sorting follows Legendary, Epic, Rare, Common.
- [ ] Treasures are not visually framed by rarity.
- [ ] Adding a cookie can prompt for 1 or 2 paired pets.
- [ ] Ambiguous cookie-pet file groups are flagged for review.
- [ ] Users can choose a destination list and compatible slot.

## Open Questions

- Should catalog pages include search and rarity filters in the first version?
- Where should asset review warnings appear in the UI?
