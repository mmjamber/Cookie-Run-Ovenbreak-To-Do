# UI Spec

## Design Goal

The site should feel useful to active Cookie Run: Ovenbreak players: fast to scan, easy to edit, and playful without burying the checklist workflow.

## Core Layout

- Use a persistent top or side navigation with homepage, My Lists, Cookies, Pets, and Treasures.
- The first screen should expose saved lists and preset mode entry points.
- List detail pages should prioritize the user's upgrade targets over decorative content.
- Mobile layouts should keep add/edit actions reachable and avoid wide tables.
- Login or sign-in buttons may be shown for aesthetics, but clicking them should do nothing for now.

## List Detail UI

Each list detail page should show:

- List name and format.
- Overall progress summary.
- Format-specific sections.
- Add controls only where the format allows additions.
- Clear editable target level controls per item.
- Empty slots for missing cookies, pets, relay cookies, or treasures.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Target levels on each slot.
- Newly added items should display `Lv. 1` until the user changes the target.

For formats without relay cookies, do not render an empty relay column.

## Catalog UI

Each catalog page should include:

- Search field.
- Sort control: alphabetical or release date.
- Rarity filters for Legendary, Epic, Rare, and Common.
- Grid or dense list of items.
- Item image, name, add action, and rarity frame where applicable.

Catalog ordering:

- Always show visible items by rarity order first: Legendary, Epic, Rare, Common.
- The sort control changes item order inside the visible rarity groups.
- The search field filters visible items by name.
- Rarity filters hide or show selected rarity groups.

Rarity display:

- Show cookie and pet rarity through a CSS frame around the item image.
- Do not show treasure rarity visually.
- Do not use a separate rarity text badge by default.
- Do not place a solid colored background behind the item artwork.
- Use brown for Common, blue for Rare, purple for Epic, and teal for Legendary.
- Treasures should still use rarity data for ordering and filtering, with Legendary before Epic before Rare before Common.

Cookie item add flow:

- When 1 paired pet exists, prompt the user to add the pet too.
- When 2 paired pets exist, prompt the user to choose which pet to add.
- The prompt must allow Add cookie only, Add cookie with selected pet, and Cancel.

## Empty States

- No lists: offer Create Custom List and preset list shortcuts.
- Empty combi slot: show an add action for the required item type.
- Empty catalog: explain whether no data exists or filters removed all results.

## Error States

- Invalid target level: show the allowed range.
- Incompatible item slot: explain what item type is allowed.
- Format limit reached: explain the limit, such as 50 Trophy Race combis or 5 Breakout groups.

## Accessibility

- All controls must be keyboard reachable.
- Catalog item images need useful alt text.
- Completion state must not rely on color alone.
- Prompts and dialogs must have clear titles and focus handling.

## Visual Constraints

- Do not use game assets until asset ingestion is explicitly implemented.
- Avoid oversized landing-page style sections; this is a working tool.
- Use compact cards or rows for repeated items.
