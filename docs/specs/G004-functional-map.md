# Functional Map

## Primary Navigation

- Homepage: `My Lists` overview of the first four cards from the To-do page's current user-controlled order.
- To-do: all user-created and saved preset lists.
- Cookies: cookie catalog.
- Pets: pet catalog.
- Treasures: treasure catalog.
- Admin Catalog: admin-only catalog creation and edit tools for authorized accounts.

## Core User Flows

### Add List

1. User chooses Add list while signed in or as a guest.
2. User enters a list name or leaves the name field blank while choosing a format.
3. User selects one of five formats: Trophy Race, Breakout, Guild Run, Champions League, or None.
4. If the name field is empty, the website auto-fills the list name with the selected format's default name: Trophy Race, Breakout, Guild Run, Champions League, or `No mode` for None.
5. The user can keep or edit any auto-filled name before saving.
6. Format selection does not overwrite a name the user already typed.
7. If the format requires setup choices, such as Trophy Race arena count, Breakout group size, or Guild Run arena target sets, the website asks for them. Guild Run cap choices are shown as `7/7/5`, `11/11/9`, and `15/15/12`. Champions League does not ask for arena target sets because its three arenas are always low, mid, and full in order.
8. After the list has a valid name, selected format, and required setup choices, the website creates the empty saved list with the correct structure, persists it to the signed-in account or temporary guest storage, and opens its list detail page.
9. From the list detail page, the user adds cookies, pets, treasures, combis, groups, or arena blocks as allowed by the selected format, and deletes allowed sections or arena blocks where the format permits it.

### Use Preset List

1. User opens a saved preset-derived list for a mode.
2. The website opens the existing saved preset-derived list.
3. If the list is Guild Run and one or more arena target sets are unset, the website asks the user to set each Guild Run arena target before items can be added to those arenas, using `7/7/5`, `11/11/9`, and `15/15/12` as the selectable labels.
4. User fills in empty add-item slots and edits current levels plus any format-allowed target settings.
5. User tracks needed upgrades from the list detail view.

### Resume From Homepage

1. User opens the homepage.
2. For a new signed-in account or guest profile, the website has generated four default preset-derived list cards in the To-do page order.
3. The website shows the first four cards from the To-do page's current list order under homepage `My Lists`.
4. If one to three saved lists exist, the website shows only those saved lists in To-do page order.
5. If every saved list has been deleted, the website shows one add-list card under `My Lists`.
6. User selects a list card to open its list detail view.
7. User can reorganize saved lists on the To-do page, and the homepage mirrors the first four lists in that order.

### Add Cookie From Catalog

1. User opens the Cookies page.
2. User clicks one cookie item.
3. The website opens an add-to-list dialog with to-do lists available to the current signed-in account or guest profile.
4. If the clicked cookie has paired pets, the dialog lets the user choose cookie only, cookie with one selected paired pet, or cancel. Cookie with pet is checked by default unless the destination is already known to be `relay`.
5. User chooses the destination list and clicks Add.
6. The website opens the chosen list detail view in pending placement mode, using the compatible-slot picker.
7. User chooses any compatible empty slot, or explicitly chooses `Switch?` on a compatible filled slot, in that list. Cookies can be placed only in `add cookie` or `relay` slots, including compatible slots across multiple combis, groups, arenas, or None-format entries.
8. If the user chose cookie with pet, the website allows placement targets that can add the cookie and paired pet together, plus compatible `relay` targets that receive only the cookie. It then fills empty compatible slots or replaces explicitly switched compatible slots in one completed action.
9. The website adds or replaces the selected item or items with current level `Lv. 1` and target level set to the maximum allowed by the destination add-item slot, combi, list format, or arena target set, then lets the user edit current levels and any format-allowed target settings within the current item, list, or arena maximum.

### Add Pet Or Treasure From Catalog

1. User opens the Pets or Treasures page.
2. User clicks one pet or treasure item.
3. The website opens an add-to-list dialog with to-do lists available to the current signed-in account or guest profile.
4. User chooses the destination list and clicks Add.
5. The website opens the chosen list detail view in pending placement mode, using the compatible-slot picker.
6. User chooses any compatible empty slot, or explicitly chooses `Switch?` on a compatible filled slot, in that list. Pets can be placed only in `add pet` slots, and treasures can be placed only in `add treasure` slots, including compatible slots across multiple combis, groups, arenas, or None-format entries.
7. The website adds or replaces the item with current level `Lv. 1` and target level set to the maximum allowed by the destination add-item slot, combi, list format, or arena target set, then lets the user edit current levels and any format-allowed target settings within the current item, list, or arena maximum.

### Add Item From List Detail

1. User opens a saved list detail view.
2. User clicks an add-item slot shown with add-option artwork in an empty cookie, relay cookie, pet, or treasure slot.
3. The website opens the matching catalog page in list-selection mode: Cookies, Pets, or Treasures.
4. The catalog page remembers which list slot the user is filling and how to return to the list.
5. User browses, searches, sorts, or filters the catalog while the page shows Select actions for compatible items.
6. User selects one compatible item.
7. If the user is adding treasures to a combi-format destination with enough empty treasure slots, the user may instead select up to 3 treasures at once.
8. Multi-selected treasure cards show numbered badges `1`, `2`, and `3` so the selected set and placement order are obvious.
9. The website returns to the originating list detail view and fills the clicked slot or compatible empty combi treasure slots with the selected item or items.

### Add Entry To None List

1. User opens a None-format list and chooses its add action.
2. The website asks whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
3. If the user chooses combi type 1, the website inserts an empty combi type 1 block.
4. If the user chooses combi type 2, the website inserts an empty combi type 2 block.
5. If the user chooses cookie, the website opens the Cookies catalog in list-selection mode and still prompts for a paired pet when pairing candidates exist.
6. If the user chooses pet, the website opens the Pets catalog in list-selection mode and adds only the chosen pet.
7. If the user chooses treasure, the website opens the Treasures catalog in single-selection mode for one individual treasure entry.

### Delete Item From List Block

1. User opens a saved list detail view.
2. User finds the combi block or free item block containing the catalog item they want to remove.
3. User clicks the block's options toggle at the top-right side of the block.
4. The website shows delete actions for the filled catalog items in that current block.
5. User chooses one item to delete.
6. The website removes that catalog item from the slot while keeping the list item block and any other items in the block.
7. The emptied add-item slot shows its matching add-option artwork again, such as `add cookie`, `relay`, `add pet`, or `add treasure`.

### Track Progress

1. User opens a list.
2. User reviews each item's current and target levels.
3. User marks items complete manually or by raising current levels to target levels.
4. The website updates list progress summaries.

### Sign Up, Sign In, And Guest Migration

1. A signed-out user may create and edit temporary guest lists saved only in the current browser.
2. The user opens the account controls and signs up or signs in with email/password.
3. New account setup requires a display name.
4. After successful sign-up or sign-in, the website migrates guest lists into the signed-in Supabase account.
5. Guest data remains in browser storage until the remote migration succeeds.
6. After confirmed migration, the local guest copy is cleared or marked migrated so the same lists are not imported twice.
7. Signing out returns the user to signed-out guest behavior.

### Admin Catalog Management

1. A user signs in through the normal account flow.
2. If the account has an admin role in the protected account role table, admin entry points become available.
3. The admin creates, edits, or deletes runtime catalog items for cookies, pets, and treasures.
4. Admin-uploaded originals are stored privately; approved `.webp` display derivatives are published for catalog rendering.
5. Non-admin users must be blocked from admin routes and mutations even if they navigate directly or craft requests manually.

Rules:

- Default preset-derived lists are generated once for new signed-in accounts and guest profiles. If the user deletes one, it stays deleted.
- Default preset-derived lists contain empty add-item slots only. No default list contains preselected cookies, pets, treasures, or premade recommended combis.
- The same cookie, pet, or treasure can be added to multiple lists at the same time.
- Progress controls are level-based only: current level, target level, format-allowed target settings, and manual complete by setting current level to target level.

## Page Map

| Page | Purpose | Key actions |
| --- | --- | --- |
| homepage | Starting point and quick overview | Resume ordered list, open saved preset-derived list, add list |
| To-do | Manage saved lists | Add list, rename, delete, open |
| List Detail | Work on one to-do list | Add items through compatible add-item slots, delete items from block options, edit levels, mark progress |
| Cookies Catalog | Browse all cookies | Sort, search, add one clicked cookie, select one cookie in list-selection mode, prompt paired pet |
| Pets Catalog | Browse all pets | Sort, search, add pet |
| Treasures Catalog | Browse all treasures | Sort, search, add one clicked treasure, select up to 3 numbered treasures only for combi-format treasure destinations |
| Admin Catalog | Manage runtime catalog items | Add, edit, delete, upload image, preview, approve |

## Feature Areas

- List creation and management
- Format-specific list builders
- Preset game mode lists
- Homepage list cards
- Catalog browsing and sorting
- Cookie-pet pairing
- Account-backed persistence and guest migration
- Progress summaries
- Admin catalog management

## First Build Slice

The recommended first implementation slice:

1. Static catalog schema with sample data.
2. Generate Trophy Race, Guild Run, Champions League, and Breakout preset-derived lists for new signed-in accounts and guest profiles, then show homepage list cards by mirroring the first four cards in To-do page order.
3. Preset-derived list detail views for the four default lists.
4. Supabase account persistence plus temporary guest persistence.
5. Catalog pages with sorting.
6. User generated list creation after the default preset list workflow is working.
