# Feature Spec: List Formats

## Summary

The website supports five to-do list formats. Each format determines structure, allowed additions, starting current and target levels, and maximum level limits.

Current and target levels are always editable by the user. Neither level can exceed the active maximum limit for that item slot. If the user changes an arena or list limit manually, the allowed level range updates to match the new limit.

When a cookie, pet, or treasure is added to a to-do list, its current level should start at `Lv. 1`. Its target level should automatically match the maximum allowed by the destination slot, combi, list format, or arena target set. The website should assume that newly added items have not been leveled yet, but that the user's goal is the format-appropriate target.

An item is complete when its current level reaches its target level. Users can also manually mark an item complete; doing so sets the current level to the target level.

## Trophy Race Format

Combi structure: combi type 1.

- 1 pet
- 1 main cookie
- 1 secondary relay cookie
- 3 treasures

Starting levels and target defaults:

- Pet: current starts at 1, target defaults to 15
- Main cookie: current starts at 1, target defaults to 15
- Relay cookie: current starts at 1, target defaults to 15
- Treasures: current starts at 1, target defaults to 12

Rules:

- Default combi count is 4.
- Users can add combis.
- Maximum combi count is 10.

## Breakout Format

Group structure:

- A list contains groups.
- Each group contains numbered combis.
- A Breakout combi is combi type 2.

Starting levels and target defaults:

- Pet: current starts at 1, target defaults to 15
- Cookie: current starts at 1, target defaults to 15
- Treasures: current starts at 1, target defaults to 12

Rules:

- User chooses group size from 3 to 15 combis.
- Each combi is assigned a number from 1 to the chosen group size.
- A list can contain up to 6 groups.

## Guild Run Format

Arena structure:

- Exactly 12 arenas.
- Users cannot add arenas.
- Each arena uses combi type 1.

Arena maximum limits:

- Users choose each arena's maximum target set from low, mid, or full.
- Low: cookies and pets max 7, treasures max 5.
- Mid: cookies and pets max 11, treasures max 9.
- Full: cookies and pets max 15, treasures max 12.
- Newly added items start with current level 1 and target level equal to the selected arena maximum for that item type.
- Users can set item current and target levels below or equal to the arena maximums.
- Example: in Guild Run Arena 8, if the arena maximum is cookie/pet 7 and treasure 5, users cannot set cookie or pet targets above 7 or treasure targets above 5 unless the arena limit is changed manually.

Rules:

- The initial spec requires 12 arenas by default.
- Guild Run arena maximum target sets can be changed manually by the user unless a future spec defines fixed arena limits.

## Champions League Format

Arena structure:

- Exactly 3 arenas.
- Users cannot add arenas.
- Each arena uses combi type 1.

Arena maximum limits:

- Users choose each arena's maximum target set from low, mid, or full.
- Low: cookies and pets max 7, treasures max 5.
- Mid: cookies and pets max 11, treasures max 9.
- Full: cookies and pets max 15, treasures max 12.
- Newly added items start with current level 1 and target level equal to the selected arena maximum for that item type.
- Users can set item current and target levels below or equal to the selected arena maximums.

## None Format

Structure:

- No default combis.
- Users can add flexible entries: combi type 1, combi type 2, one cookie, one pet, one treasure, or one treasure set of three.
- Combi type 1 and combi type 2 are defined in `G002-rules.md`.
- Individual cookies can be added with or without their paired pet.
- Individual pets are added alone.
- Individual treasures can be added alone or as a set of 3 treasures.
- Treasure sets appear grouped together but are not attached to a combi unless the user chose a combi entry.

Current and target levels:

- Newly added items start with current level `Lv. 1` and target level equal to the item's absolute maximum: cookies and pets `Lv. 15`, treasures `Lv. 12`.
- User sets the current and desired target level for every individual item.
- Cookie and pet levels can be 1 to 15.
- Treasure levels can be 1 to 12.

Add flow:

1. When the user clicks add on a None-format list, ask whether to add `combi type 1 (with relay)`, `combi type 2 (without relay)`, cookie, pet, or treasure.
2. If the user chooses combi type 1, add an empty combi type 1 block using the shared combi type 1 layout.
3. If the user chooses combi type 2, add an empty combi type 2 block using the shared combi type 2 layout.
4. If the user chooses cookie, open the cookie picker and ask whether to add the paired pet when the chosen cookie has pairing candidates.
5. If the user chooses pet, open the pet picker and add only the selected pet.
6. If the user chooses treasure, ask whether to add 1 treasure or a set of 3 treasures, then open the treasure picker with the chosen selection limit.

## Acceptance Criteria

- [ ] Users can choose from all five formats when creating a custom list.
- [ ] Each format enforces item slots and maximum counts.
- [ ] Newly added cookies, pets, and treasures start with current level `Lv. 1`.
- [ ] Newly added item target levels automatically match the destination slot, combi, list format, or arena target set.
- [ ] Current and target levels remain editable.
- [ ] Current and target levels cannot exceed the current item, list, or arena maximum.
- [ ] None format allows individual current and target levels per item.
- [ ] None format supports user-added combi type 1 entries, combi type 2 entries, individual cookies, individual pets, individual treasures, and 3-treasure sets.
- [ ] Manually marking an item complete sets its current level to its target level.
- [ ] Invalid additions and invalid levels are blocked with clear messages.
