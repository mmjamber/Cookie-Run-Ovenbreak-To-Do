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

- The chosen list detail view shows compatible empty slots as placement targets.
- Compatible filled slots are available as replacement targets only after the user explicitly activates their `Switch?` affordance.
- Candidate placement targets come from the whole chosen list, including all compatible combis, groups, arenas, and None-format entries.
- Slot compatibility is based on add-item slot type: cookies can go only in `add cookie` or `relay` slots, pets can go only in `add pet` slots, and treasures can go only in `add treasure` slots.
- Incompatible slots are disabled, hidden, or explained.
- The user chooses the final compatible empty slot or explicitly switched compatible filled slot in the list detail view, not in the add-to-list dialog.
- Confirmed placement fills only the selected empty slot, or replaces only the selected switched slot, or acts on the compatible grouped entry.
- If a paired pet is pending and the selected destination is an `add cookie` slot, placement must fill the selected cookie slot and a compatible pet slot or grouped entry in one completed action. A filled pet slot can be replaced only if the user explicitly chooses its `Switch?` affordance.
- If a paired pet is pending but the selected destination is a `relay` slot, ignore the paired pet and add only the cookie to the relay slot.
- If a paired pet is pending and the user activates `Switch?` on a compatible cookie slot in a combi where the selected cookie's linked pet is already present, pause placement and show a `With pet?` dialog with `Yes` and `No` choices.
- Filled slots must not be replaced silently or automatically.
- Canceling pending placement returns without changing the list.

## Destination Context

List-selection mode must preserve:

- List id.
- List format.
- Group or arena id when applicable.
- Combi id or combi index.
- Slot type.
- Treasure slot index when selecting one treasure for a specific `add treasure` slot.
- Selection limit. This is `1` except when adding treasures to a combi-format destination with enough compatible empty or explicitly switched treasure slots, where it may be up to `3`.
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
- Users may select up to 3 treasures at once when the destination combi has enough compatible empty or explicitly switched treasure slots.
- Selected treasure cards must show numbered badges `1`, `2`, and `3`.
- Treasure selection order determines the placement order for the destination combi's selected empty or explicitly switched treasure slots.
- The website must prevent adding an item to an incompatible slot.
- Compatibility is evaluated per available slot, not per list section only; if several combis or arenas contain compatible empty slots or compatible filled slots, the user may choose among all eligible targets.

## Filled-Slot Replacement

Filled compatible slots can be replaced only through an explicit switch interaction:

- On desktop, hovering a compatible filled slot grays out the current item and overlays `Switch?`.
- On mobile, tapping or clicking a compatible filled slot reveals the same grayed-out `Switch?` state.
- Activating `Switch?` confirms that the selected catalog item should replace the current item in that slot.
- The replaced item's previous current level, target level, and completion state are discarded.
- Incompatible filled slots must not show `Switch?`.

## Paired Pet Return Behavior

Cookie paired-pet behavior still applies in list-selection mode when selecting a main cookie.

If the user accepts a paired-pet addition:

- The paired pet fills the same combi's compatible empty pet slot when one exists.
- The website may replace a filled pet slot only when the user explicitly activates that pet slot's `Switch?` affordance.
- The website must not replace a filled pet slot without an explicit `Switch?` action.
- Relay-cookie selection must not trigger the paired-pet prompt.
- If a paired pet id is present from an ordinary catalog dialog and the final selected slot is `relay`, the paired pet id is ignored for that placement.
- If the selected cookie's linked pet is already present in the destination combi and the user activates `Switch?` on a compatible cookie slot, the `With pet?` dialog determines whether that existing pet is included in the placement.
- Choosing `Yes` in `With pet?` switches the cookie and leaves the linked pet in place as part of the placement.
- Choosing `No` in `With pet?` switches only the cookie and leaves the pet slot unchanged without treating it as part of the placement.

## Confirm, Cancel, And Return

After selection is confirmed:

- Return to the originating list detail view.
- Fill only the preserved destination add-item slot or slots, or replace only the explicitly switched filled slot or slots.
- If the user accepted paired-pet addition and the final cookie destination is not `relay`, fill the compatible empty pet slot or explicitly switched compatible pet slot in the same completed action.
- If the final cookie destination is `relay`, fill or replace only the relay slot.

If the user cancels:

- Return to the originating list detail view.
- Do not change the list.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog selection behavior.
- `../features/F006-empty-list-layouts.md` for empty add-item slot entry points.
- `T002-local-storage-and-data-architecture.md` for list and slot data structures.
