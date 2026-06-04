# Technical Spec: List Selection Routing

## Purpose

This spec defines the route/state contract for catalog pages opened from a list detail add-option slot.

Feature specs describe the user flow. This technical spec owns the preserved destination context, compatibility checks, return behavior, and selection limits.

## Selection Mode

Catalog pages can open in ordinary catalog mode or list-selection mode.

Ordinary catalog mode:

- Item cards use Add actions.
- Adding an item opens the add-to-list picker.

List-selection mode:

- Item cards use Select actions for compatible items.
- The catalog does not open the add-to-list picker.
- The destination list and slot are already known from the preserved context.
- The page provides a cancel/back action to return without changing the list.

## Destination Context

List-selection mode must preserve:

- List id.
- List format.
- Group or arena id when applicable.
- Combi id or combi index.
- Slot type.
- Treasure slot index when selecting one treasure for a specific treasure slot.
- Selection limit, such as up to 2 cookies or up to 3 treasures, when the originating destination supports multi-item selection.
- Return route for the originating list detail view.

## Slot Types

Supported slot contexts:

- Main cookie slot.
- Relay cookie slot.
- Pet slot.
- Treasure slot.
- None-format individual cookie.
- None-format individual pet.
- None-format individual treasure.
- None-format 3-treasure set.
- None-format combi type 1 entry.
- None-format combi type 2 entry.

## Catalog Route Targets

- Cookie and relay-cookie add-option items open the Cookies catalog.
- Pet add-option items open the Pets catalog.
- Treasure add-option items open the Treasures catalog.

## Compatibility Rules

- Cookies can fill main cookie, relay cookie, or None-format cookie slots.
- Up to 2 cookies can be selected at the same time when the destination combi allows both a main cookie and relay cookie.
- In 2-cookie selections, the first selected cookie fills the main cookie slot and the second selected cookie fills the relay cookie slot.
- The paired-pet prompt only applies to the first selected cookie in a 2-cookie selection.
- Pets can fill pet or None-format pet slots.
- Treasures can fill treasure or None-format treasure slots.
- Up to 3 treasures can be selected at the same time for combis or entries with enough compatible treasure slots.
- Treasure click order does not matter.
- The website must prevent adding an item to an incompatible slot.

## Paired Pet Return Behavior

Cookie paired-pet behavior still applies in list-selection mode when selecting a main cookie.

If the user accepts a paired-pet addition:

- The paired pet fills the same combi's compatible empty pet slot when one exists.
- The website must not replace a filled pet slot automatically.
- Relay-cookie selection must not trigger the paired-pet prompt.

## Confirm, Cancel, And Return

After selection is confirmed:

- Return to the originating list detail view.
- Fill only the preserved destination slot or slots.
- If the user accepted paired-pet addition, fill the compatible empty pet slot in the same completed action.

If the user cancels:

- Return to the originating list detail view.
- Do not change the list.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog selection behavior.
- `../features/F006-empty-list-layouts.md` for empty slot entry points.
- `T002-local-storage-and-data-architecture.md` for list and slot data structures.
