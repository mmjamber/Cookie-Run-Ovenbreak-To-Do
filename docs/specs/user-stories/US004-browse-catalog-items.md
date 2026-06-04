# User Story: Browse Catalog Items

## Story

As a player, I want to browse cookies, pets, and treasures with search, sorting, and rarity filters so I can find items quickly.

## Source Specs

- `../features/F001-catalog-pages.md`

## Scenario

1. The user opens the Cookies, Pets, or Treasures catalog.
2. The page shows catalog items for that item type.
3. The user searches by item name.
4. The user changes the sort option.
5. The user hides or shows rarity groups.
6. The catalog updates the visible item list.

## Acceptance Criteria

- [ ] Cookies, pets, and treasures each have a dedicated catalog page.
- [ ] Each catalog page has search.
- [ ] Each catalog page supports Alphabetical and Release Date sort options.
- [ ] Visible items are always grouped or ordered by rarity first.
- [ ] Rarity filters can hide or show Legendary, Epic, Rare, and Common items.
- [ ] Cookie and pet cards show rarity visually.
- [ ] Treasure cards do not show visual rarity frames.
- [ ] Hidden ordering metadata is not shown on item cards.

## Out Of Scope

- Editing catalog data from the public catalog pages.
- Showing import warnings to ordinary users.

