# User Story: View Homepage List Cards

## Story

As a player, I want the homepage `My Lists` section to mirror the first cards from my To-do page so I can quickly resume planning.

## Source Specs

- `../features/F005-homepage-list-cards.md`
- `../features/F003-preset-lists.md`

## Scenario

1. The user opens the homepage.
2. If the current local user or guest is new, the website has generated the four default preset-derived lists in the To-do page order.
3. The homepage `My Lists` section shows up to the first four cards from the To-do page's current list order.
4. If the user has one to three saved lists, the homepage shows only those saved lists in To-do page order.
5. If the user currently has no lists, such as after deleting the generated default lists, the homepage shows an add-list card instead of a saved list card.
6. The user selects a card.
7. The website opens the matching list or starts the create-list flow from the add-list card.

## Acceptance Criteria

- [ ] The homepage card area never shows more than four cards.
- [ ] The homepage `My Lists` section and To-do page use the same ordered list data and shared card behavior instead of separate card collections.
- [ ] Every new local user or guest profile starts with four generated default preset-derived lists.
- [ ] Generated default preset-derived list cards use the same card behavior as custom list cards and can be edited, renamed, deleted, and reordered.
- [ ] When saved lists exist, the homepage card area mirrors the first four lists in the To-do page's current user-controlled order.
- [ ] Users can reorganize the To-do page list order, and the homepage updates to match the first four lists in that order.
- [ ] Deleting every saved list leaves the `My Lists` area with one add-list card instead of recreating default cards.
- [ ] The add-list card uses the same card shape as saved list cards, has no image, and shows a plus sign centered in the card.
- [ ] Selecting a saved list card opens that list detail view.
- [ ] Selecting the add-list card starts the create-list flow.
- [ ] None-format saved list cards use the No mode artwork and display the saved list name, which defaults to `No mode` unless edited.

## Out Of Scope

- Progress summaries beyond a compact future indicator.
- Account-based list sync.
