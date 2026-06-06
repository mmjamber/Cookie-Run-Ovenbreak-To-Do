# Technical Spec: List Selection Routing

## Purpose

This spec defines the route/state contract for catalog pages opened from a list detail add-item slot, plus pending placement state after ordinary catalog add-to-list dialogs.

Feature specs describe the user flow. This technical spec owns the preserved destination context, compatibility checks, return behavior, and the one allowed multi-selection case.

## Selection Mode

Catalog pages can open in ordinary catalog mode or list-selection mode.

Ordinary catalog mode:

- Item cards use Add actions.
- Clicking one item opens the add-to-list dialog.
- The add-to-list dialog captures the destination list and, for cookies, the optional paired-pet choice.
- The add-to-list dialog does not capture the final destination add-item slot.
- Clicking Add in the dialog opens the chosen list detail view in pending placement mode.

List-selection mode:

- Item cards use Select actions for compatible items.
- The catalog does not open the add-to-list dialog.
- The destination list and add-item slot are already known from the preserved context.
- The page provides a cancel/back action to return without changing the list.

## Pending Placement Mode

Pending placement mode is used after an ordinary catalog add-to-list dialog. In this mode, the chosen list detail view acts as the compatible-slot picker.

Pending placement state must preserve:

- Destination list id.
- Selected catalog item id.
- Selected item type.
- Optional paired pet id when the user chose cookie with pet.
- Return route for cancel/back behavior.

Rules:

- The chosen list detail view shows compatible empty add-item slots as placement targets.
- Candidate placement targets come from the whole chosen list, including all compatible combis, groups, arenas, and None-format entries.
- Slot compatibility is based on add-item slot type: cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots.
- Incompatible or filled slots are disabled, hidden, or explained.
- The user chooses the final compatible empty add-item slot in the list detail view, not in the add-to-list dialog.
- Confirmed placement fills only the selected empty slot or compatible grouped entry.
- If a paired pet is pending, placement must fill the selected cookie slot and a compatible empty pet slot or grouped entry in one completed action.
- Filled slots must not be replaced automatically.
- Canceling pending placement returns without changing the list.

## Destination Context

List-selection mode must preserve:

- List id.
- List format.
- Group or arena id when applicable.
- Combi id or combi index.
- Slot type.
- Treasure slot index when selecting one treasure for a specific `add treasure` slot.
- Selection limit. This is `1` except when adding treasures to a combi-format destination with enough compatible empty treasure slots, where it may be up to `3`.
- Treasure selection order when multi-selecting treasures for a combi-format destination.
- Return route for the originating list detail view.

## Slot Types

Supported slot contexts:

- `add cookie` or main cookie slot.
- `relay` or relay cookie slot.
- `add pet` or pet slot.
- `add treasure` or treasure slot.
- None-format individual cookie.
- None-format individual pet.
- None-format individual treasure.
- None-format combi type 1 entry.
- None-format combi type 2 entry.

## Catalog Route Targets

- `add cookie` and `relay` add-item slots open the Cookies catalog.
- `add pet` add-item slots open the Pets catalog.
- `add treasure` add-item slots open the Treasures catalog.

## Compatibility Rules

- Cookies can fill `add cookie`, `relay`, or None-format cookie add-item slots.
- Cookies are always selected one at a time. An `add cookie` slot and a `relay` slot are filled through separate slot actions.
- Pets can fill `add pet` or None-format pet add-item slots.
- Treasures can fill `add treasure` or None-format treasure add-item slots.
- Multiple item selection is allowed only for treasures in a combi-format destination.
- Users may select up to 3 treasures at once when the destination combi has enough compatible empty treasure slots.
- Selected treasure cards must show numbered badges `1`, `2`, and `3`.
- Treasure selection order determines the placement order for the destination combi's empty treasure slots.
- The website must prevent adding an item to an incompatible slot.
- Compatibility is evaluated per available add-item slot, not per list section only; if several combis or arenas contain compatible empty slots, the user may choose among all of them.

## Paired Pet Return Behavior

Cookie paired-pet behavior still applies in list-selection mode when selecting a main cookie.

If the user accepts a paired-pet addition:

- The paired pet fills the same combi's compatible empty pet slot when one exists.
- The website must not replace a filled pet slot automatically.
- Relay-cookie selection must not trigger the paired-pet prompt.

## Confirm, Cancel, And Return

After selection is confirmed:

- Return to the originating list detail view.
- Fill only the preserved destination add-item slot or slots.
- If the user accepted paired-pet addition, fill the compatible empty pet slot in the same completed action.

If the user cancels:

- Return to the originating list detail view.
- Do not change the list.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog selection behavior.
- `../features/F006-empty-list-layouts.md` for empty add-item slot entry points.
- `T002-local-storage-and-data-architecture.md` for list and slot data structures.
