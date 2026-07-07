# UI Spec: Empty States And Errors

## Empty States

- No lists after account or guest profile initialization: show the shared add-list card where a saved list card would appear.
- New signed-in account or guest profile: generated default preset-derived list cards appear in the To-do page order, and homepage `My Lists` mirrors the first four cards.
- Signed-out guest warning: explain that guest progress is saved only on the current device/browser and may be lost if site browser data is cleared.
- Loading saved lists: show a non-destructive loading state while account-backed list data is loading.
- Empty combi add-item slot: show add-option artwork for the required item type.
- Empty catalog: explain whether no data exists or filters removed all results.
- Admin access denied: explain that the signed-in account is not authorized for admin catalog management.

## Error States

- Invalid current or target level: show the allowed range.
- Incompatible add-item slot: explain which item type is allowed, such as cookie-only `add cookie` or `relay` slots, pet-only `add pet` slots, or treasure-only `add treasure` slots.
- Format limit reached: explain the limit, such as 10 Trophy Race arenas or 5 Breakout groups.
- Auth error: explain sign-up, sign-in, sign-out, display-name, or session failures without losing guest data.
- Save error: explain whether the list failed to save because of network, permission, validation, or server errors.
- Guest migration error: explain that guest data is still local and should not be cleared until migration succeeds.
- Admin upload error: explain invalid file type, missing image, duplicate key, permission failure, or failed derivative generation.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog empty/filter states.
- `../features/F002-list-formats.md` for format limits.
- `../features/F006-empty-list-layouts.md` for empty list and empty slot behavior.
- `../features/F007-admin-catalog-management.md` for admin errors.
- `UI007-accessibility.md` for accessible feedback requirements.
