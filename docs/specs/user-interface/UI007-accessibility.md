# UI Spec: Accessibility

## Requirements

- All controls must be keyboard reachable.
- Catalog item images need useful alt text.
- Completion state must not rely on color alone, even though reached target-level text uses `#fc6fde`.
- Prompts and dialogs must have clear titles and focus handling.
- Level editing must happen in an accessible modal dialog with a clear title, focus moved into the dialog when it opens, and focus returned to the triggering item control when it closes.
- Modal dialogs must support cancel/close without saving changes.
- Auth dialogs, display-name setup, guest migration feedback, and admin forms must have clear titles, keyboard focus management, accessible error messages, and focus return behavior.
- Stepper controls in level or format-edit dialogs must expose disabled states at minimum and maximum values to assistive technology.
- Hover-revealed edit, delete, move, and options controls must also be reachable by keyboard focus.
- Touch layouts must provide a discoverable alternative for controls that are hover-revealed on desktop.
- Trophy Race mobile/touch arena reordering remains an unresolved product question; any future mobile reorder design must include keyboard and touch-accessible behavior before implementation.
- Block clear and full block removal dialogs must clearly identify the affected block and action so users can distinguish clearing items from deleting a whole block.
- Admin upload and delete confirmations must clearly identify the affected catalog item and action.

## Related Specs

- `UI004-catalog-item-cards.md` for catalog item controls.
- `UI005-list-detail-and-combi-layouts.md` for list progress controls.
- `UI006-empty-states-and-errors.md` for user feedback states.
- `../features/F007-admin-catalog-management.md` for admin catalog forms and dialogs.
