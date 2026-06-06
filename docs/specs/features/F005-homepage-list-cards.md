# Feature Spec: Homepage List Cards

## Summary

The homepage `My Lists` section mirrors the To-do page list cards. It is not a separate card collection: it renders the first four cards from the same ordered list data used by the To-do page.

For every new local user or guest profile, the website generates four default preset-derived lists in the To-do page:

- Trophy Race
- Guild Run
- Champions League
- Breakout

## Goals

- Let users quickly resume prioritized to-do work from the homepage.
- Keep the homepage and To-do page aligned around the same saved list data.
- Preserve the four-card maximum while allowing fewer cards when the user has fewer saved lists.
- Keep homepage `My Lists` and the To-do page connected to the same ordered list data and shared card behavior.

## Card Selection Rules

- Show at most four list cards on the homepage.
- If the user has four or more saved to-do lists, show the first four lists from the To-do page's current list order.
- If the user has one to three saved to-do lists, show only those saved lists in To-do page order.
- Users may reorganize the saved-list order on the To-do page; the homepage must update to mirror the first four lists in that order.
- If the user deletes a saved list, remove its card from the homepage and do not create a default card to fill the empty space.
- If the user deletes every saved list, show one add-list card under `My Lists` instead of recreating default cards or leaving the area empty.
- The default Trophy Race, Guild Run, Champions League, and Breakout cards are generated list records for new local users and guests, not homepage-only placeholders.
- Once generated, default preset-derived lists share the same saved-list behavior as custom lists: users can edit, rename, delete, and reorder them.
- Selecting a default preset-derived list card opens that list.
- When a saved list card is selected, it should open that saved list's detail view.
- When the add-list card is selected, it should start the create-list flow defined in `F004-custom-lists.md`.

## Default List Behavior

The four default cards are generated as real preset-derived lists for every new local user or guest profile. They appear on the To-do page first, and homepage `My Lists` shows them only because they are the first four cards in the shared To-do order.

Default preset-derived lists use the same list-card behavior as custom lists after creation. Users can edit their contents, rename them, delete them, and rearrange them during To-do card order reorganization.

Default preset-derived lists are not regenerated after the profile has been initialized. Deletion is intentional: if a user deletes those lists, the homepage should not recreate them to fill empty card slots.

When deletion leaves the user with no saved lists at all, the shared list-card area should show a single add-list card. This card is an action entry point, not a regenerated default card.

## Display Requirements

- Cards should use the visual rules in `../user-interface/UI003-homepage-and-list-cards.md`.
- Cards should display the list or preset name.
- Cards should make it clear which list will open.
- The homepage should not show more than four cards in this area.
- Homepage list cards must use the same card component and source list records as the To-do page cards.
- Homepage list cards should preserve the same relative order shown on the To-do page.
- The add-list card should use the visual rules in `../user-interface/UI003-homepage-and-list-cards.md`.
- Saved None-format list cards should display the saved list name. Newly created None-format lists default to the auto-filled name `No mode`, but users may edit that name before saving or later rename the list.
- Saved None-format list cards must use `none-card.png` on desktop and `none-card-horizontal.png` for horizontal/mobile cards.
- If future list metadata supports progress summaries, homepage cards may show a compact progress indicator, but the card's main purpose is opening the list.

## Acceptance Criteria

- [ ] The homepage card area contains no more than four cards.
- [ ] For every new local user or guest profile, the website generates the four default preset-derived lists in the To-do page.
- [ ] Homepage `My Lists` renders the first four cards from the same ordered list data used by the To-do page.
- [ ] With saved lists, the homepage shows the first lists from the To-do page's current user-controlled order.
- [ ] With one to three saved lists, the homepage shows only those saved lists in To-do page order.
- [ ] Reorganizing saved lists on the To-do page changes which lists appear on the homepage and in what order.
- [ ] After deleting every saved list, one add-list card appears under `My Lists`.
- [ ] Deleted default preset-derived lists are not regenerated after the profile has been initialized.
- [ ] Default preset-derived list cards can be edited, renamed, deleted, and reordered with the same controls as custom saved-list cards.
- [ ] Selecting a saved list card opens that list's detail page.
- [ ] Selecting a default preset-derived list card opens that list's detail page.
- [ ] Selecting the add-list card starts the create-list flow.
- [ ] Default cards and saved list cards use the same shared card styling.
- [ ] The add-list card uses the same card shape as saved list cards, has no image, and shows a plus sign centered in the card.
- [ ] None-format saved list cards use the No mode artwork and display the saved list name.
