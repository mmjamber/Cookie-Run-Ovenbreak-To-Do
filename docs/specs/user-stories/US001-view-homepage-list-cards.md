# User Story: View Homepage List Cards

## Story

As a player, I want the homepage to show my latest lists or default mode cards so I can quickly resume planning.

## Source Specs

- `../features/F005-homepage-list-cards.md`
- `../features/F003-preset-lists.md`

## Scenario

1. The user opens the homepage.
2. If the user has saved lists, the homepage shows up to four latest saved list cards.
3. If the user has one to three saved lists, the homepage shows only those saved lists.
4. If the user has no saved list state yet, the homepage shows the four default mode cards.
5. The user selects a card.
6. The website opens the matching saved list or creates/opens the matching preset-derived list.

## Acceptance Criteria

- [ ] The homepage card area never shows more than four cards.
- [ ] Saved lists appear before default mode cards once saved list state exists.
- [ ] Deleting every saved list leaves the `My Lists` area empty instead of recreating default cards.
- [ ] Selecting a saved list card opens that list detail view.
- [ ] Selecting a default mode card creates or opens the matching preset-derived list.
- [ ] None-format saved list cards display `No mode`.

## Out Of Scope

- Progress summaries beyond a compact future indicator.
- Account-based list sync.

