# Functional Map

## Primary Navigation

- Dashboard: overview of user lists and preset list entry points.
- My Lists: all user-created and saved preset lists.
- Cookies: cookie catalog.
- Pets: pet catalog.
- Treasures: treasure catalog.
- Settings or Data: optional future page for import, export, and catalog management.

## Core User Flows

## Create Custom List

1. User chooses Create List.
2. User enters a list name.
3. User selects one of five formats.
4. App initializes the correct structure for that format.
5. User adds cookies, pets, treasures, combis, groups, or arenas as allowed.
6. User saves and returns to the list detail page.

## Use Preset List

1. User opens a mode preset.
2. App creates or opens a list using that mode's format.
3. User fills in items and target settings where the format allows it.
4. User tracks needed upgrades from the list detail view.

## Add Cookie From Catalog

1. User opens the Cookies page.
2. User selects a cookie.
3. User chooses which to-do list and slot to add it to.
4. App detects whether 1 or 2 pets have the same leading file number.
5. App prompts whether to add a paired pet too.
6. If there are 2 paired pets, the user chooses which pet to add.
7. If accepted, the app adds both when the destination format has a pet slot.

## Add Pet Or Treasure From Catalog

1. User opens the Pets or Treasures page.
2. User selects an item.
3. User chooses a destination list and compatible slot.
4. App applies the format's target level defaults or asks for an individual target level in Free format.

## Track Progress

1. User opens a list.
2. User reviews each item's target level.
3. User marks items, combis, groups, arenas, or list sections complete according to the chosen tracking model.
4. App updates list progress summaries.

## Page Map

| Page | Purpose | Key actions |
| --- | --- | --- |
| Dashboard | Starting point and quick overview | Create list, open preset, resume list |
| My Lists | Manage saved lists | Create, rename, duplicate, delete, open |
| List Detail | Work on one to-do list | Add items, edit targets, mark progress |
| Cookies Catalog | Browse all cookies | Sort, search, add cookie, prompt paired pet |
| Pets Catalog | Browse all pets | Sort, search, add pet |
| Treasures Catalog | Browse all treasures | Sort, search, add treasure |

## Feature Areas

- List creation and management
- Format-specific list builders
- Preset game mode lists
- Catalog browsing and sorting
- Cookie-pet pairing
- Local persistence
- Progress summaries

## First Build Slice

The recommended first implementation slice:

1. Static catalog schema with sample data.
2. Create custom list flow.
3. Trophy Race and Free list detail views.
4. Local storage persistence.
5. Catalog pages with sorting.

## Open Questions

- Should preset lists be one reusable template per mode or user-copyable instances?
- Should a cookie, pet, or treasure be allowed in multiple lists at the same time?
- What exact progress controls should be available for each list level?
