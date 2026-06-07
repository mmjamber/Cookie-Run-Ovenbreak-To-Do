# Global Spec

## Product

Cookie Run: Ovenbreak To-Do is a planning website for players who want to track upgrade targets for cookies, pets, and treasures across multiple game-mode-specific lists.

## Problem

Players may need different cookies, pets, and treasures leveled for Trophy Race, Breakout, Champions League, Guild Run, and personal goals. A normal checklist does not understand combis, relay cookies, arena caps, treasure level caps, or cookie-pet pairings.

## Goals

- Let users create multiple named to-do lists.
- Support the five required list formats.
- Make current and target levels visible and format-correct.
- Provide catalog pages for cookies, pets, and treasures.
- Make it easy to add a cookie's paired pet when relevant, including cases where a cookie has 2 possible pets.

## Non-Goals For First Release

- Backend implementation.
- Remote database storage.
- Functional login or sign-in.
- Official account sync.
- Live game API integration.
- Automatic game-data updates.
- Public sharing.
- List export or shareable list files.
- Automatic asset updates before a dedicated implementation task.

## MVP Scope

- Homepage `My Lists` section that mirrors the first four cards from the To-do page order, including generated default preset-derived lists for new local user and guest profiles.
- User generated list creation with all five formats.
- List detail views with valid slots, current levels, and target levels.
- Static catalog data structure with cookie, pet, and treasure pages.
- Catalog search, a `Hide rarity` button, and alphabetical or release-date ordering within rarity groups.
- Local persistence for user lists.
- Aesthetic-only sign-in and log-in controls.

## Success Criteria

- A player can create a Trophy Race list by choosing how many arenas to start with, up to 10.
- A player can create a Breakout list with groups of 3 to 15 combis and up to 6 groups.
- A player can create Guild Run arena lists with user-selected maximum target sets and Champions League arena lists with fixed low, mid, and full arena targets.
- A player can create a None list with individually targeted cookies, pets, and treasures.
- Catalog sorting behaves consistently with file-name-derived rules.

## Related Specs

- `G002-rules.md` for universal rules and terminology.
- `G004-functional-map.md` for navigation and user flows.
- `features/F002-list-formats.md` for detailed format constraints.
- `technical/T001-catalog-import-and-derived-data.md` for catalog data derivation.
- `technical/T002-local-storage-and-data-architecture.md` for local data persistence.
