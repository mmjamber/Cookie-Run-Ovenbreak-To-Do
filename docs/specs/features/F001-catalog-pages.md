# Feature Spec: Catalog Pages

## Summary

The website has separate pages for cookies, pets, and treasures. Users can browse, sort, and add catalog items to compatible to-do lists and compatible add-item slots. When a user starts from an add-item slot inside a list detail view, the matching catalog page also acts as the item selector for that specific list slot.

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

Shared catalog visuals are defined in `../user-interface/UI004-catalog-item-cards.md`.

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
2. The add-to-list dialog opens.
3. If 1 paired pet exists, the dialog offers Add cookie only, Add cookie and pet, and Cancel. Add cookie and pet is checked by default unless the destination is already known to be a `relay` slot.
4. If 2 paired pets exist, the dialog lets the user choose Add cookie only, Add cookie with one selected pet, or Cancel. Add cookie with one selected pet is checked by default unless the destination is already known to be a `relay` slot.
5. The user chooses a destination list in the same dialog and clicks Add.
6. The website opens the chosen list detail view in pending placement mode so the user can choose a compatible empty slot or explicitly switch a compatible filled slot in the compatible-slot picker.

In list-selection mode, cookie selections are always one cookie at a time. An `add cookie` slot and a `relay` slot are filled through separate slot actions. The paired-pet prompt is shown only when the user is filling an `add cookie` slot with an available compatible `add pet` slot. Relay-cookie selection must not trigger the paired-pet prompt and is treated as Add cookie only.

## Add-To-List Dialog

When a user clicks a cookie, pet, or treasure from an ordinary catalog page, an add-to-list dialog should appear.

The dialog should:

- Show the available to-do lists linked to the current local profile.
- Let the user choose which list to add the clicked item to.
- For clicked cookies with paired pets, let the user choose cookie only or cookie with one selected paired pet.
- Check the cookie-with-pet option by default unless the destination is already known to be `relay`; known `relay` destinations default to cookie only.
- Show an Add button that confirms the selected list and optional paired-pet choice.
- Explain when a list has no compatible placement slots for the selected item or item pair.
- Let the user cancel without changing any list.

The dialog must not ask the user to choose the final slot. After the user clicks Add, the website opens the chosen list detail view in pending placement mode, where the list detail page acts as the compatible-slot picker.

In pending placement mode:

- Compatible empty slots are available as placement targets across the entire chosen list, including multiple combis, groups, arenas, or None-format entries.
- Compatible filled slots can also be used as replacement targets only through an explicit `Switch?` affordance.
- Slot compatibility is based on add-item slot type: cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots.
- Incompatible slots are disabled, hidden, or explained.
- On desktop, hovering a compatible filled slot grays out the current item and overlays `Switch?`; on mobile, tapping or clicking the filled slot reveals the same grayed-out `Switch?` state.
- Activating `Switch?` replaces the filled slot's current item with the selected catalog item.
- If the user chose cookie with pet, the list detail page allows placement targets that can add the cookie and paired pet together, plus compatible `relay` targets that receive only the cookie.
- If the user leaves cookie with pet checked but chooses a `relay` destination, ignore the paired-pet choice and add only the cookie to the relay slot.
- If the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, and cookie with pet was checked, open a `With pet?` dialog with `Yes` and `No` choices before completing placement.
- Confirmed placement replaces the chosen add-option artwork or switched catalog item artwork with the selected item artwork. Non-relay cookie-with-pet placement also fills an empty compatible pet slot or replaces an explicitly switched compatible pet slot in the same completed action.
- The user can cancel or go back without changing the list.

## List-Origin Catalog Selection

When a user clicks an add-item slot shown with add-option artwork from a list detail view, the website should open the correct catalog page in list-selection mode:

- `add cookie` and `relay` add-item slots open the Cookies catalog.
- `add pet` add-item slots open the Pets catalog.
- `add treasure` add-item slots open the Treasures catalog.

The catalog page should remember which list slot the user is filling and how to return to that list. Detailed selection-mode behavior is defined in `../technical/T003-list-selection-routing.md`.

In list-selection mode:

- Catalog browse, search, sort, and rarity filter behavior remains available.
- Compatible item cards show a Select action instead of the ordinary Add action.
- Incompatible items should be disabled, hidden, or explained.
- The page shows a clear cancel/back action that returns to the originating list detail view without changing the list.
- After selection is confirmed, the website returns to the originating list detail view and fills the preserved destination add-item slot or slots.
- The catalog page must not open the add-to-list dialog, because the destination is already known.

Cookie paired-pet behavior still applies in list-selection mode when selecting a main cookie. If the user accepts a paired-pet addition, the paired pet fills the same combi's compatible empty pet slot when one exists, or replaces a compatible filled pet slot only when the user explicitly activates that slot's `Switch?` affordance. Relay-cookie selection must not trigger the paired-pet prompt.

If the selected cookie's linked pet is already present in the destination combi and the user activates `Switch?` on a compatible cookie slot while cookie with pet is selected, show a `With pet?` dialog:

- `Yes` switches the cookie and keeps the linked pet included in the placement.
- `No` switches only the cookie and leaves the pet slot unchanged.

Treasure selection is the only list-selection mode that can select multiple catalog items at once:

- Multiple selection is available only when the user is adding treasures to a combi-format destination with enough compatible treasure slots, whether empty or explicitly switched.
- The user may select 1, 2, or 3 treasures at once.
- Each selected treasure card must show a numbered selection badge: `1`, `2`, or `3`.
- The numbered badges show the selection order and the placement order for the destination combi's selected empty or explicitly switched treasure slots.
- If the user deselects a treasure before confirming, the remaining selected treasures are renumbered from `1`.

## Item Destination Rules

- Cookies can fill `add cookie`, `relay`, or None-format cookie add-item slots.
- Cookies are selected one at a time, even when the destination combi has both main and relay cookie slots.
- Pets can fill `add pet` or None-format pet add-item slots.
- Treasures can fill `add treasure` or None-format treasure add-item slots.
- Up to 3 treasures can be selected at the same time only when adding treasures to a combi-format destination with enough compatible empty or explicitly switched treasure slots.
- Selected treasure cards show numbered badges `1`, `2`, and `3` to make the selected set and placement order obvious.
- None-format lists can also create a new destination before choosing catalog items: `combi type 1 (with relay)`, `combi type 2 (without relay)`, individual cookie, individual pet, or individual treasure.
- When adding an individual treasure from a None-format list add flow, open the Treasures catalog in single-selection mode.
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
- [ ] Cookie-with-pet is checked by default unless the destination is known to be `relay`.
- [ ] Known `relay` destinations default to cookie only and ignore checked paired-pet choices.
- [ ] Switching a compatible cookie slot where the selected cookie's linked pet is already present asks `With pet?` before completing placement.
- [ ] Cookies are selected one at a time in both ordinary catalog mode and list-selection mode.
- [ ] The paired-pet prompt is not shown for relay-cookie selection.
- [ ] Users can select up to 3 treasures at once only when adding treasures to a combi-format destination with enough compatible empty or explicitly switched treasure slots.
- [ ] Selected treasure cards show numbered icons `1`, `2`, and `3` for selection and placement order.
- [ ] Clicking any ordinary catalog item opens an add-to-list dialog with current local profile lists.
- [ ] The add-to-list dialog captures the destination list and optional paired-pet choice for cookies, but not the final slot.
- [ ] Clicking Add in the dialog opens the chosen list detail view in pending placement mode.
- [ ] Clicking an add-item slot from a list detail view opens the correct catalog page in list-selection mode.
- [ ] Catalog pages in list-selection mode show Select actions and return the selected item to the originating list slot.
- [ ] In pending placement mode, users choose which compatible empty slot receives the selected catalog item, or explicitly switch a compatible filled slot, from any compatible combi, group, arena, or None-format entry in the chosen list.
