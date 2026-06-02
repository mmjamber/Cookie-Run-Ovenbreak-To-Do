# Feature Spec: Homepage List Cards

## Summary

The homepage can show up to four list cards. These cards should represent the user's latest to-do lists when saved lists exist.

Before the user has any saved list state, the four default homepage cards should match the default to-do lists shown on the To-do page:

- Trophy Race
- Guild Run
- Champions League
- Breakout

## Goals

- Let users quickly resume recent to-do work from the homepage.
- Keep the homepage and To-do page aligned around the same saved list data.
- Preserve the four-card maximum while allowing fewer cards when the user has fewer saved lists.

## Card Selection Rules

- Show at most four list cards on the homepage.
- If the user has four or more saved to-do lists, show the latest four.
- If the user has one to three saved to-do lists, show only those saved lists.
- If the user deletes a saved list, remove its card from the homepage and do not create a default card to fill the empty space.
- If the user deletes every saved list, show no cards under `My Lists`.
- The latest list order should use the saved list's most recent meaningful activity, such as creation, rename, item edits, level edits, or manual completion updates.
- Default cards should appear only before the user has any saved list state, and should link to the same preset-derived list behavior used by the To-do page.
- When a default card is selected, it should create or open that preset-derived list according to `F003-preset-lists.md`.
- When a saved list card is selected, it should open that saved list's detail view.

## Default Card Behavior

The four default homepage cards are not separate static homepage-only entries. They are shortcuts to the default to-do lists that the To-do page displays.

If the user starts or edits one of the default preset-derived lists, that list becomes a saved list and participates in the latest-four ordering like any other list.

Default cards are not regenerated after the user has saved or deleted lists. Deletion is intentional: if a user deletes those lists, the homepage should not recreate them to fill empty card slots.

## Display Requirements

- Cards should use the visual rules in `G006-ui-spec.md`.
- Cards should display the list or preset name.
- Cards should make it clear which list will open.
- The homepage should not show more than four cards in this area.
- If future list metadata supports progress summaries, homepage cards may show a compact progress indicator, but the card's main purpose is opening the list.

## Acceptance Criteria

- [ ] The homepage card area contains no more than four cards.
- [ ] Before the user has any saved list state, the four cards match the default to-do lists shown on the To-do page.
- [ ] With saved lists, the homepage shows the latest saved lists first.
- [ ] With one to three saved lists, the homepage shows only those saved lists.
- [ ] After deleting every saved list, no cards appear under `My Lists`.
- [ ] Deleted lists are not replaced by generated default cards.
- [ ] Selecting a saved list card opens that list's detail page.
- [ ] Selecting a default card creates or opens the matching preset-derived list.
- [ ] Default cards and saved list cards use the same shared card styling.
