# Feature Spec: List Formats

## Summary

The website supports five to-do list formats. Each format determines structure, allowed additions, starting target levels, and maximum target limits.

Target levels are always editable by the user. A target level cannot exceed the active maximum limit for that item slot. If the user changes an arena or list limit manually, the allowed target range updates to match the new limit.

When a cookie, pet, or treasure is added to a to-do list, its target level should start at `Lv. 1`. The website should assume that newly added items have not been maxed yet.

## Trophy Race Format

Combi structure:

- 1 pet
- 1 main cookie
- 1 secondary relay cookie
- 3 treasures

Starting target levels and maximum limits:

- Pet: starts at 1, max 15
- Main cookie: starts at 1, max 15
- Relay cookie: starts at 1, max 15
- Treasures: start at 1, max 12

Rules:

- Default combi count is 4.
- Users can add combis.
- Maximum combi count is 10.

## Breakout Format

Group structure:

- A list contains groups.
- Each group contains numbered combis.
- A Breakout combi has 1 pet, 1 cookie, and 3 treasures.
- No relay cookie.

Starting target levels and maximum limits:

- Pet: starts at 1, max 15
- Cookie: starts at 1, max 15
- Treasures: start at 1, max 12

Rules:

- User chooses group size from 3 to 15 combis.
- Each combi is assigned a number from 1 to the chosen group size.
- A list can contain up to 6 groups.

## Guild Run Format

Arena structure:

- Exactly 12 arenas.
- Users cannot add arenas.
- Each arena has 1 pet, 1 main cookie, 1 relay cookie, and 3 treasures.

Arena maximum limits:

- Users choose each arena's maximum target set from low, mid, or full.
- Low: cookies and pets max 7, treasures max 5.
- Mid: cookies and pets max 11, treasures max 9.
- Full: cookies and pets max 15, treasures max 12.
- Users can set item target levels below or equal to the arena maximums.
- Example: in Guild Run Arena 8, if the arena maximum is cookie/pet 7 and treasure 5, users cannot set cookie or pet targets above 7 or treasure targets above 5 unless the arena limit is changed manually.

Rules:

- The initial spec requires 12 arenas by default.
- Guild Run arena maximum target sets can be changed manually by the user unless a future spec defines fixed arena limits.

## Champions League Format

Arena structure:

- Exactly 3 arenas.
- Users cannot add arenas.
- Each arena has 1 pet, 1 main cookie, 1 relay cookie, and 3 treasures.

Arena maximum limits:

- Users choose each arena's maximum target set from low, mid, or full.
- Low: cookies and pets max 7, treasures max 5.
- Mid: cookies and pets max 11, treasures max 9.
- Full: cookies and pets max 15, treasures max 12.
- Users can set item target levels below or equal to the selected arena maximums.

## Free Format

Structure:

- No combis.
- Users can add cookies with or without their pet.
- Users can add pets independently.
- Users can add treasures independently.
- Treasures appear alone and are not attached to combis.

Target levels:

- Newly added items start at `Lv. 1`.
- User sets the desired target level for every individual item.
- Cookie and pet targets can be 1 to 15.
- Treasure targets can be 1 to 12.

## Acceptance Criteria

- [ ] Users can choose from all five formats when creating a custom list.
- [ ] Each format enforces item slots and maximum counts.
- [ ] Newly added cookies, pets, and treasures start at `Lv. 1`.
- [ ] Target levels remain editable.
- [ ] Target levels cannot exceed the current item, list, or arena maximum.
- [ ] Free format allows individual target levels per item.
- [ ] Invalid additions and invalid levels are blocked with clear messages.