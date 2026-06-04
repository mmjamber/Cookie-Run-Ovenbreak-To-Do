# Feature Spec: Catalog Pages

## Summary

The website has separate pages for cookies, pets, and treasures. Users can browse, sort, and add catalog items to compatible to-do lists. When a user starts from an add-option item inside a list detail view, the matching catalog page also acts as the item selector for that specific list slot.

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

Catalog item cards must not show hidden ordering numbers or other internal catalog metadata.

Cookie and pet rarity is shown visually through the frame around the image, not through a text badge by default. Treasure rarity should not be shown visually in catalog item cards.

Shared catalog visuals are defined in `G006-ui-spec.md`.

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

- Alphabetical order sorts visible item names alphabetically within each rarity group.
- Release Date order sorts visible items by their catalog release order within each rarity group.
- Rarity filters can hide any combination of Legendary, Epic, Rare, and Common items.
- Treasure rarity is still used for ordering and filtering, so legendary treasures appear first by default even though treasure rarity is not shown visually.
- Detailed catalog data rules are defined in `../technical/T001-catalog-import-and-derived-data.md`.

## Cookie-Pet Pairing

Some cookies have paired pets. A cookie can have up to 2 paired pets.

When a user adds one cookie to a to-do list:

1. The website checks for paired pets.
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

## List-Origin Catalog Selection

When a user clicks an add-option item from a list detail view, the website should open the correct catalog page in list-selection mode:

- Cookie and relay-cookie add-option items open the Cookies catalog.
- Pet add-option items open the Pets catalog.
- Treasure add-option items open the Treasures catalog.

The catalog page should remember which list slot the user is filling and how to return to that list. Detailed selection-mode behavior is defined in `../technical/T003-list-selection-routing.md`.

In list-selection mode:

- Catalog browse, search, sort, and rarity filter behavior remains available.
- Compatible item cards show a Select action instead of the ordinary Add action.
- Incompatible items should be disabled, hidden, or explained.
- The page shows a clear cancel/back action that returns to the originating list detail view without changing the list.
- After selection is confirmed, the website returns to the originating list detail view and fills the preserved destination slot or slots.
- The catalog page must not open the add-to-list picker, because the destination is already known.

Cookie paired-pet behavior still applies in list-selection mode when selecting a main cookie. If the user accepts a paired-pet addition, the paired pet fills the same combi's compatible empty pet slot when one exists. Relay-cookie selection must not trigger the paired-pet prompt.

## Item Destination Rules

- Cookies can fill main cookie, relay cookie, or None-format cookie slots.
- Up to 2 cookies can be selected at the same time when the destination combi allows both a main cookie and relay cookie.
- In 2-cookie selections, the first selected cookie fills the main cookie slot and the second selected cookie fills the relay cookie slot.
- The paired-pet prompt only applies to the first selected cookie in a 2-cookie selection.
- Pets can fill pet or None-format pet slots.
- Treasures can fill treasure or None-format treasure slots.
- Up to 3 treasures can be selected at the same time for combis that require treasure slots.
- None-format lists can also create a new destination before choosing catalog items: `combi type 1 (with relay)`, `combi type 2 (without relay)`, individual cookie, individual pet, individual treasure, or 3-treasure set.
- When adding a treasure from a None-format list add flow, ask whether the destination is 1 treasure or a set of 3 treasures before opening the Treasures catalog in list-selection mode.
- Treasure click order does not matter.
- The website must prevent adding an item to an incompatible slot.

## Acceptance Criteria

- [ ] Cookies, pets, and treasures each have a dedicated page.
- [ ] Each page has a search bar.
- [ ] Each page always orders visible items by rarity first: Legendary, Epic, Rare, Common.
- [ ] Each page supports Alphabetical and Release Date sort options.
- [ ] Each page has rarity filters that can hide selected rarities.
- [ ] Alphabetical and release sorting follow catalog data rules.
- [ ] Treasures are not visually framed by rarity.
- [ ] Adding a cookie can prompt for 1 or 2 paired pets.
- [ ] Users can select up to 2 cookies at once for combis that support main and relay cookies.
- [ ] In 2-cookie selections, the first selected cookie becomes the main cookie and the second becomes the relay cookie.
- [ ] Selected cookie cards show numbered icons for first and second selection order.
- [ ] The paired-pet prompt is not shown for the second or relay cookie.
- [ ] Users can select up to 3 treasures at once for combis with enough treasure slots.
- [ ] Adding any catalog item opens a small list picker with current local profile lists.
- [ ] Clicking an add-option item from a list detail view opens the correct catalog page in list-selection mode.
- [ ] Catalog pages in list-selection mode show Select actions and return the selected item to the originating list slot.
- [ ] Users can choose a destination list and compatible slot.
