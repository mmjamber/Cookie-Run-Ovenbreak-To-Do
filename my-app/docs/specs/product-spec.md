# Product Spec

## Product

Cookie Run: Ovenbreak To-Do is a planning website for players who want to track upgrade targets for cookies, pets, and treasures across multiple game-mode-specific lists.

## Problem

Players may need different cookies, pets, and treasures leveled for Trophy Race, Breakout, Champions League, Guild Run, and personal goals. A normal checklist does not understand combis, relay cookies, arena caps, treasure level caps, or cookie-pet pairings.

## Goals

- Let users create multiple named to-do lists.
- Support the five required list formats.
- Make target levels visible and format-correct.
- Provide catalog pages for cookies, pets, and treasures.
- Make it easy to add a cookie's paired pet when relevant, including cases where a cookie has 2 possible pets.

## Non-Goals For First Release

- Official account sync.
- Live game API integration.
- Automatic game-data updates.
- Public sharing.
- Asset ingestion from `../ovenbreak images` before a dedicated implementation task.

## MVP Scope

- Dashboard with preset mode entry points.
- Custom list creation with all five formats.
- List detail views with valid slots and target levels.
- Static catalog data structure with cookie, pet, and treasure pages.
- Sorting by alphabetical order, rarity, and release date.
- Local persistence for user lists.

## Success Criteria

- A player can create a Trophy Race list with 4 default combis and add more up to 50.
- A player can create a Breakout list with groups of 3 to 15 combis and up to 5 groups.
- A player can create Guild Run and Champions League arena lists with target set rules.
- A player can create a Free list with individually targeted cookies, pets, and treasures.
- Catalog sorting behaves consistently with file-name-derived rules.

## Related Specs

- `global-spec.md` for universal rules and terminology.
- `functional-map.md` for navigation and user flows.
- `features/list-formats.md` for detailed format constraints.
