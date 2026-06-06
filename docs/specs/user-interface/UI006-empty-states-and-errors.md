# UI Spec: Empty States And Errors

## Empty States

- No lists after profile initialization: show the shared add-list card where a saved list card would appear.
- New local user or guest profile: generated default preset-derived list cards appear in the To-do page order, and homepage `My Lists` mirrors the first four cards.
- Empty combi add-item slot: show add-option artwork for the required item type.
- Empty catalog: explain whether no data exists or filters removed all results.

## Error States

- Invalid current or target level: show the allowed range.
- Incompatible add-item slot: explain which item type is allowed, such as cookie-only `add cookie` or `relay` slots, pet-only `add pet` slots, or treasure-only `add treasure` slots.
- Format limit reached: explain the limit, such as 10 Trophy Race arenas or 6 Breakout groups.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog empty/filter states.
- `../features/F002-list-formats.md` for format limits.
- `../features/F006-empty-list-layouts.md` for empty list and empty slot behavior.
- `UI007-accessibility.md` for accessible feedback requirements.
