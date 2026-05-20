# UI Spec

## Design Goal

The site should feel useful to active Cookie Run: Ovenbreak players: fast to scan, easy to edit, and playful without burying the checklist workflow.

## Visual Style

- Use `color palette .png` in the project root as the website color palette reference.
- Use a pink background with a diagonal white polka-dot CSS pattern as the default website background.
- Default background CSS: `background-color: #f4bfd9; background-image: radial-gradient(circle, #ffffff 5px, transparent 5.5px), radial-gradient(circle, #ffffff 5px, transparent 5.5px); background-position: 0 0, 22px 22px; background-size: 44px 44px;`
- Text should be white with a black border or outline unless a specific component spec says otherwise.
- The black text outline should improve readability on bright artwork and colorful UI surfaces without making labels look heavy or blurry.
- Any exception to the white-with-black-outline text rule must be stated explicitly in the relevant component or page spec.

## Core Layout

- Use a persistent top or side navigation with homepage, My Lists, Cookies, Pets, and Treasures.
- The first screen should expose saved lists and preset mode entry points.
- List detail pages should prioritize the user's upgrade targets over decorative content.
- Mobile layouts should keep add/edit actions reachable and avoid wide tables.
- Login or sign-in buttons may be shown for aesthetics, but clicking them should do nothing for now.
- Aesthetic-only login/sign-in buttons should be placed on the top-right side of the screen, usually in the persistent navigation/header area.

## List and Mode Cards

Saved to-do lists and preset mode entry points should display as clickable cards.

Desktop card layout:

- Cards appear next to one another in a responsive grid.
- Show a maximum of 4 cards per row.
- Cards are vertical rounded rectangles.
- Card corners should be rounded, but the card should still feel rectangular rather than pill-shaped.
- The list or mode name appears at the top of the card, centered inside the rectangle.
- The card image fills the visual body of the rectangle and should be centered intentionally, not left at the browser's default crop position.
- Use the available mode artwork from `../ovenbreak images/illustrations/game modes`.
- Images should use a consistent crop style across cards so the row feels even.
- Cards should have visible hover, focus, and active states because the whole card is clickable.
- When a saved to-do list card is hovered or keyboard-focused, show an edit icon button in the bottom-right corner.
- The edit icon should appear over a subtle transparent gradient overlay so it remains visible on bright or busy artwork.
- The overlay should be slight and should not hide the card artwork or make the card feel disabled.
- The edit icon opens list management actions such as rename or delete.

Mobile card layout:

- Cards become horizontal rounded rectangles.
- The list or mode name appears on the left side of the card.
- The image appears on the right side and must be re-centered for the horizontal crop.
- Keep the full card clickable.
- Do not let the image push the text out of view or make card heights inconsistent.
- On touch layouts where hover is unavailable, keep the edit icon visible or reveal it when the card receives focus.

Mode artwork mapping:

- Trophy Race: `Trophy Race 1.png` or `Trophy Race 2.png`
- Breakout: `breakout.jpg`
- Champions League: `Champions League.png`
- Guild Run: `guild run.png`
- Extra or future modes may use the `extra_*` images only when no more specific artwork exists.

## List Detail UI

Each list detail page should show:

- List name and format.
- Overall progress summary.
- Format-specific sections.
- Add controls only where the format allows additions.
- Editable current level controls per item.
- Clear editable target level controls per item.
- Empty slots for missing cookies, pets, relay cookies, or treasures.
- Items should be visually complete when current level reaches target level.
- When an item's target is reached, show the reached target-level text in `#fc6fde`.
- Progress controls should be level-only: current level, target level, and manual complete for individual items.
- Do not show separate complete controls for whole combis, groups, arenas, or list sections.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Current levels on each slot.
- Target levels on each slot.
- Newly added items should display current level `Lv. 1` and target level `Lv. 1` until the user changes them.
- Users can manually mark an item complete; doing so sets the item's current level to its target level.

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
- When adding cookies to a combi with main and relay cookie slots, users can select up to 2 cookies at once.
- In 2-cookie selection mode, visually preserve selection order so it is clear which cookie will become main and which will become relay.
- Show numbered selection icons on selected cookie cards: `1` for the main cookie selection and `2` for the relay cookie selection.
- The numbered icons should stay visible while the cookies are selected and disappear when the selection is cleared.
- The paired-pet prompt only applies to the first selected cookie in a 2-cookie selection.

Treasure item add flow:

- Users can select up to 3 treasures at once when adding treasures to a combi with enough treasure slots.
- Treasure selection order does not matter.

## Empty States

- No lists: offer Create Custom List and preset list shortcuts.
- Empty combi slot: show an add action for the required item type.
- Empty catalog: explain whether no data exists or filters removed all results.

## Error States

- Invalid current or target level: show the allowed range.
- Incompatible item slot: explain what item type is allowed.
- Format limit reached: explain the limit, such as 50 Trophy Race combis or 5 Breakout groups.

## Accessibility

- All controls must be keyboard reachable.
- Catalog item images need useful alt text.
- Completion state must not rely on color alone, even though reached target-level text uses `#fc6fde`.
- Prompts and dialogs must have clear titles and focus handling.

## Visual Constraints

- Use existing assets from the repository; do not generate images.
- Avoid oversized landing-page style sections; this is a working tool.
- Use compact cards or rows for repeated items.
- Keep HTML/component structure separate from CSS styling. Shared or durable UI should place styles in dedicated CSS files rather than inline `<style>` blocks or style-heavy markup.
