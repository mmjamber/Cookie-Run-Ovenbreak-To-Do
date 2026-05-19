# Functional Map

## Primary Navigation

- Homepage: overview of user lists and preset list entry points.
- My Lists: all user-created and saved preset lists.
- Cookies: cookie catalog.
- Pets: pet catalog.
- Treasures: treasure catalog.

## Core User Flows

### Create Custom List

1. User chooses Create List.
2. User enters a list name.
3. User selects one of five formats.
4. The website initializes the correct structure for that format.
5. User adds cookies, pets, treasures, combis, groups, or arenas as allowed.
6. User saves and returns to the list detail page.

### Use Preset List

1. User opens a mode preset.
2. The website creates that preset's reusable list the first time, or opens the existing saved preset-derived list on later visits.
3. User fills in items and edits current and target levels within the current format limits.
4. User tracks needed upgrades from the list detail view.

### Add Cookie From Catalog

1. User opens the Cookies page.
2. User selects 1 cookie, or up to 2 cookies when the destination combi supports a main cookie and relay cookie.
3. If 2 cookies are selected, the selection order is preserved: the first selected cookie is the main cookie and the second selected cookie is the relay cookie.
4. The website detects whether the first selected cookie has 1 or 2 pets with the same leading file number.
5. The website prompts whether to add a paired pet for the first selected cookie.
6. If there are 2 paired pets for the first selected cookie, the user chooses which pet to add.
7. The website does not show the paired-pet prompt for the second or relay cookie.
8. A small picker tab opens with to-do lists linked to the current local profile.
9. User chooses which compatible to-do list to add the selection to.
10. User chooses compatible slots in that list.
11. The website adds the cookie-only, cookie-with-pet, or 2-cookie selection to the chosen list.

### Add Pet Or Treasure From Catalog

1. User opens the Pets or Treasures page.
2. User selects 1 pet, 1 treasure, or up to 3 treasures when the destination combi has enough treasure slots.
3. A small picker tab opens with to-do lists linked to the current local profile.
4. User chooses a destination list.
5. User chooses a compatible slot.
6. The website adds the item or items with current level `Lv. 1` and target level `Lv. 1`, then lets the user edit levels within the current item, list, or arena maximum.

### Track Progress

1. User opens a list.
2. User reviews each item's current and target levels.
3. User marks items complete manually or by raising current levels to target levels.
4. The website updates list progress summaries.

Rules:

- Preset lists are reusable templates: one saved preset-derived list per mode.
- The same cookie, pet, or treasure can be added to multiple lists at the same time.
- Progress controls are level-based only: current level, target level, and manual complete by setting current level to target level.

## Page Map

| Page | Purpose | Key actions |
| --- | --- | --- |
| homepage | Starting point and quick overview | Create list, open preset, resume list |
| My Lists | Manage saved lists | Create, rename, delete, open |
| List Detail | Work on one to-do list | Add items, edit levels, mark progress |
| Cookies Catalog | Browse all cookies | Sort, search, add 1 or 2 cookies, prompt paired pet |
| Pets Catalog | Browse all pets | Sort, search, add pet |
| Treasures Catalog | Browse all treasures | Sort, search, add 1 to 3 treasures |

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
2. Homepage preset cards for the four default lists: Trophy Race, Breakout, Champions League, and Guild Run.
3. Preset list creation and list detail views for the four default lists.
4. Local storage persistence.
5. Catalog pages with sorting.
6. Custom list creation after the default preset list workflow is working.
