# Feature Spec: List Formats

## Summary

The app supports five to-do list formats. Each format determines structure, allowed additions, and default target levels.

## Trophy Race Format

Combi structure:

- 1 pet
- 1 main cookie
- 1 secondary relay cookie
- 3 treasures

Target levels:

- Pet: 15
- Main cookie: 15
- Relay cookie: 15
- Treasures: 12

Rules:

- Default combi count is 4.
- Users can add combis.
- Maximum combi count is 50.

## Breakout Format

Group structure:

- A list contains groups.
- Each group contains numbered combis.
- A Breakout combi has 1 pet, 1 cookie, and 3 treasures.
- No relay cookie.

Target levels:

- Pet: 15
- Cookie: 15
- Treasures: 12

Rules:

- User chooses group size from 3 to 15 combis.
- Each combi is assigned a number from 1 to the chosen group size.
- A list can contain up to 5 groups.

## Guild Run Format

Arena structure:

- Exactly 12 arenas.
- Users cannot add arenas.
- Each arena has 1 pet, 1 main cookie, 1 relay cookie, and 3 treasures.

Target levels:

- Each arena has a target set.
- If cookie and pet target is 7, treasure target is 5.
- If cookie and pet target is 11, treasure target is 9.
- If cookie and pet target is 15, treasure target is 12.

Rules:

- The initial spec requires 12 arenas by default.
- Whether Guild Run arena target sets are fixed by arena or user-selectable is an open question.

## Champions League Format

Arena structure:

- Exactly 3 arenas.
- Users cannot add arenas.
- Each arena has 1 pet, 1 main cookie, 1 relay cookie, and 3 treasures.

Target levels:

- Users choose each arena's target set from low, mid, or full.
- Low: cookies and pets 7, treasures 5.
- Mid: cookies and pets 11, treasures 9.
- Full: cookies and pets 15, treasures 12.

## Free Format

Structure:

- No combis.
- Users can add cookies with or without their pet.
- Users can add pets independently.
- Users can add treasures independently.
- Treasures appear alone and are not attached to combis.

Target levels:

- User sets the desired target level for every individual item.
- Cookie and pet targets can be 1 to 15.
- Treasure targets can be 1 to 12.

## Acceptance Criteria

- [ ] Users can choose from all five formats when creating a custom list.
- [ ] Each format enforces item slots and maximum counts.
- [ ] Target levels default correctly for structured formats.
- [ ] Free format allows individual target levels per item.
- [ ] Invalid additions and invalid levels are blocked with clear messages.

## Open Questions

- Are target levels always fixed for Trophy Race and Breakout, or can users lower them?
- Are Guild Run arena target sets fixed per arena, and if so what are the 12 exact sets?
