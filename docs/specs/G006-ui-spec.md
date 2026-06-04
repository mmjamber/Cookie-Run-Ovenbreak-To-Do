# UI Spec

## Design Goal

The site should feel useful to active Cookie Run: Ovenbreak players: fast to scan, easy to edit, and playful without burying the checklist workflow.

## Visual Style

- Use the shared color tokens in this spec as the website palette reference. If a palette image is added later, keep it under `assets/`.
- Use a pink background with a diagonal white polka-dot CSS pattern as the default website background.
- Default background CSS: `background-color: #f7bfdc; background-image: radial-gradient(circle, #ffffff 5px, transparent 5.5px), radial-gradient(circle, #ffffff 5px, transparent 5.5px); background-position: 0 0, 22px 22px; background-size: 44px 44px;`
- Text should be white with a black border or outline unless a specific component spec says otherwise.
- The black text outline should improve readability on bright artwork and colorful UI surfaces without making labels look heavy or blurry.
- Any exception to the white-with-black-outline text rule must be stated explicitly in the relevant component or page spec.

## Core Layout

- Use the shared page shell, hero banner, navigation buttons, and footer on every page.
- Use a persistent top navigation inside the shared hero banner with homepage, to-do, cookies, pets, and treasures as the site grows.
- The first screen should expose saved lists and preset mode entry points.
- List detail pages should prioritize the user's upgrade targets over decorative content.
- Mobile layouts should keep add/edit actions reachable and avoid wide tables.
- Login and sign-in buttons should be shown for aesthetics, but clicking them should do nothing for now.
- Aesthetic-only login/sign-in buttons should appear in the right corner of the screen, usually in the persistent navigation/header area.
- The sign-in button should appear first, with the log-in button immediately to its right.
- The sign-in button should match the visual style of the current `home` button.
- The log-in button should match the visual style of the current `to-do` button.

## Shared Page Shell

Every page must use the same outer shell as the current homepage unless a page spec explicitly says otherwise.

- Body background: `#f7bfdc` with the two-layer white polka-dot pattern: `radial-gradient(circle, #ffffff 5px, transparent 5.5px)` at `0 0` and `22px 22px`, with `44px 44px` background size.
- Main website panel: centered, `width: min(930px, 100%)`, `min-height: 100vh`, background `#cff5ff`.
- On mobile, the main panel remains `width: 100%`.
- Use CookieRun fonts globally: regular `400`, bold `700`, black `900`.
- All ordinary form controls inherit the site font.
- Shared color tokens from the homepage:
  - page pink: `#f7bfdc`
  - panel blue: `#cff5ff`
  - bubble pink: `#f573bc`
  - sun yellow: `#ffc433`
  - mint: `#69ddb0`
  - legendary frame border: `#16cbbb`
  - legendary frame fill: oversized clipped diagonal gradient from yellow to teal to purple
  - epic frame border: `#862894`
  - epic frame fill: `#be74c9`
  - rare frame border: `#28719e`
  - rare frame fill: `#72b9df`
  - common frame border: `#9a633d`
  - common frame fill: `#d39b73`
  - outlined text fill: `#ffffff`
  - outlined text stroke: `#1e1b20`

## Shared Hero Banner

Every page must start with the homepage hero banner unless a page spec explicitly says otherwise.

- Hero container: `position: relative`, `height: 330px`, `overflow: hidden`, background fallback `#bdeefa`.
- Mobile hero height at `max-width: 760px`: `250px`.
- Hero background image: `/images/homepage-banner-current.png`.
- Hero background display: fill the hero, `object-fit: cover`, `object-position: center top`.
- Title image: `/images/title.png`.
- Title image placement: absolute center, `left: 50%`, `top: 50%`, `transform: translate(-50%, -50%)`, `z-index: 1`, `height: auto`, `object-fit: contain`.
- Title image size: desktop `width: min(460px, 72%)`; mobile at `max-width: 760px` `width: min(420px, 78%)`.
- Hero title alt text should be `CookieRun OvenBreak`.

## Shared Hero Navigation

The hero navigation buttons must keep the same position, size, typography, and colors across pages.

- Nav position: absolute inside the hero, `right: 10px`, `bottom: 8px`, `z-index: 2`.
- Nav layout: flex row with `gap: 10px`.
- Mobile nav at `max-width: 760px`: `left: 12px`, `right: 12px`, centered with `justify-content: center`.
- Button size: desktop `min-width: 92px`, `height: 28px`; mobile `min-width: 78px`, `height: 28px`.
- Button shape: `border-radius: 999px`.
- Button border: `2px dashed rgb(255 255 255 / 0.86)`.
- Button text: CookieRun regular `400`, white `#ffffff`, no letter spacing changes.
- Buttons are aesthetic navigation controls first; inactive or placeholder buttons may use `cursor: default` until routes exist.
- Current homepage button colors:
  - first button: background `#e95dac`, text-shadow `0 1px 0 #a83f7f`
  - second button: background `#89d5e9`, text-shadow `0 1px 0 rgb(58 73 141 / 0.4)`
  - third button: background `#ffc233`, text-shadow `0 1px 0 #c7831e`

## Aesthetic Account Buttons

Every page should include two aesthetic-only account buttons in the right corner of the screen:

- Button order: `sign in`, then `log in` to its right.
- Button behavior: both buttons are non-functional for now and must not start authentication, call a backend, or change the local profile.
- Button style: both buttons use the same size, border, border radius, typography, and white text treatment as the shared hero navigation buttons.
- `sign in` uses the same pink background and text shadow as the `home` button.
- `log in` uses the same blue background and text shadow as the `to-do` button.
- The two account buttons should stay visually grouped together and should not replace the main navigation buttons.

## Shared Footer

Every page must include the same footer message and panel at the bottom.

- Footer container: `min-height: 172px`, display grid, centered content, padding `36px 48px`, background `#82d8eb`.
- Mobile footer padding at `max-width: 760px`: `28px 20px`.
- Footer text: max width `720px`, margin `0`, color `#ffffff`, CookieRun regular `400`, font size `14px`, line-height `1.45`, centered.
- Footer message:
  `Textual content is available under Creative Commons Attribution-ShareAlike unless otherwise noted. © 2019-2026 CookieRun. CookieRun is a trademark of DEVSISTERS.`

## Shared Typography

Use homepage typography for matching UI pieces across every page.

- Main section headings use `h1` or `h2`, CookieRun black `900`, font size `25px`, fill `#ffffff`, `-webkit-text-stroke: 4px #1e1b20`, `paint-order: stroke fill`, no text shadow, margin `0`, letter spacing `0`.
- Item names for cookies, pets, and treasures use CookieRun regular `400`, font size `14px`, line-height `1.08`, fill `#ffffff`, `-webkit-text-stroke: 3px #1e1b20`, `paint-order: stroke fill`, centered, width `100%`, `overflow-wrap: anywhere`.
- Small labels such as `see more` and `see all` use the outlined text style, font size `14px` to `15px`, regular `400`, centered inline-flex layout.
- Do not use browser-default fonts or unoutlined dark text for item names or section headings unless a page spec explicitly says so.

## List and Mode Cards

Saved to-do lists and preset mode entry points should display as clickable cards.

Homepage card selection behavior is defined in `features/F005-homepage-list-cards.md`; this section defines the shared visual treatment for those cards.

Desktop card layout:

- Cards appear next to one another in a responsive grid.
- Show a maximum of 4 cards per row.
- Cards are vertical rounded rectangles.
- Card corners should be rounded, but the card should still feel rectangular rather than pill-shaped.
- Match the homepage feature-card style by default: `border-radius: 8px`, `border: 2px solid #6d229b`, `overflow: hidden`, background image centered and covering the card.
- Homepage mode-card desktop height uses `min-height: 335px`.
- The list or mode name appears at the top of the card, centered inside the rectangle.
- Mode-card title typography: CookieRun black `900`, font size `16px`, line-height `1.08`, fill `#ffffff`, `-webkit-text-stroke: 4px #1e1b20`, centered, `padding-top: 12px`, max width `calc(100% - 18px)`.
- Mode-card title should sit above a subtle top gradient overlay: height `78px`, from `rgb(30 27 32 / 0.45)` to transparent.
- The card image fills the visual body of the rectangle and should be centered intentionally, not left at the browser's default crop position.
- Use the available source mode artwork from `assets/ovenbreak images/illustrations/game modes`, copying selected runtime images into `public/images/game-modes/`.
- Images should use a consistent crop style across cards so the row feels even.
- Cards should have visible hover, focus, and active states because the whole card is clickable.
- When a saved to-do list card is hovered or keyboard-focused, show an edit icon button in the bottom-right corner.
- The edit icon should appear over a subtle transparent gradient overlay so it remains visible on bright or busy artwork.
- The overlay should be slight and should not hide the card artwork or make the card feel disabled.
- The edit icon opens list management actions such as rename or delete.

Mobile card layout:

- Cards become horizontal rounded rectangles.
- Homepage mode-card mobile breakpoint is `max-width: 930px`.
- Mobile mode cards use the horizontal artwork variant where available, `height: 105px`, `min-height: 0`, `background-size: cover`, and `background-position: center`.
- The list or mode name appears on the left side of the card.
- Mobile mode-card title uses font size `18px`, left text alignment, `padding-left: 18px`, and no top padding.
- Mobile mode-card overlay height is `58px`.
- The image appears on the right side and must be re-centered for the horizontal crop.
- Keep the full card clickable.
- Do not let the image push the text out of view or make card heights inconsistent.
- On touch layouts where hover is unavailable, keep the edit icon visible or reveal it when the card receives focus.

Mode artwork mapping:

- Trophy Race: `Trophy Race 1.png` or `Trophy Race 2.png`
- Breakout: `breakout.jpg`
- Champions League: `Champions League.png`
- Guild Run: `guild run.png`
- None / No mode: `none-card.png` for desktop cards and `none-card-horizontal.png` for horizontal mobile cards.
- Extra or future modes may use the `extra_*` images only when no more specific artwork exists.

None-format list cards must always use the None / No mode artwork. Their visible card title must be exactly `No mode` and must use the same title placement, typography, outline, and responsive behavior as the other list and mode cards.

## Shared Item Cards

Use the homepage item-card sizing whenever cookies, pets, or treasures are shown as standalone visual items.

- Item card wrapper: display grid, centered content, top aligned, gap `8px`.
- Framed cookie or pet card width: `114px`.
- Treasure card width: `132px`.
- Treasure names may use a top margin of `4px` when displayed under the treasure image.
- Item grids should center their items and avoid horizontal overflow on mobile.

Framed cookie and pet images:

- Use rarity frames for cookies and pets.
- Standard item frame size: `114px` by `114px`.
- Standard item frame border: `5px`.
- Standard item frame radius: `18px`.
- Framed items must use a real outer frame color with an oversized inner fill layer clipped by the rounded frame.
- The inner fill layer must use `inset: 5px`, `border-radius: 13px`, and `transform: scale(1.35)` for standard item frames.
- Legendary frame border color: `#16cbbb`.
- Legendary frame fill: diagonal gradient, `135deg`, from `hsl(55deg 90% 67%)` to `hsl(173deg 87% 59%)` to `hsl(286deg 100% 61%)`.
- Epic frame border color: `#862894`; Epic frame fill color: `#be74c9`.
- Rare frame border color: `#28719e`; Rare frame fill color: `#72b9df`.
- Common frame border color: `#9a633d`; Common frame fill color: `#d39b73`.
- Frame content is centered with CSS grid.
- Frame overflow is hidden.
- Cookie images inside standard frames: `height: 102px`, `width: auto`, `max-width: none`, `max-height: none`, `object-fit: contain`, transform `translateY(4px)`.
- Pet images inside standard frames: centered, `width: auto`, `height: auto`, `max-width: 96px`, `max-height: 86px`, `object-fit: contain`, `object-position: center`, no transform.
- Compact pet fit: `max-width: 84px`, `max-height: 76px`.

Treasure images:

- Treasures do not use visual rarity frames.
- Treasure image display: `height: 110px`, `width: auto`, `max-width: none`, `max-height: none`, `object-fit: contain`.
- Treasure rarity may still be used for sorting and filtering, but should not change the displayed frame style.

Homepage item grid patterns:

- New section desktop: yellow panel `#ffc433`, `min-height: 210px`, grid with heading beside items, `grid-template-columns: max-content max-content`, centered, gap `24px`, padding `24px 72px`.
- New item grid desktop: `repeat(2, 114px) 132px`, gap `18px`.
- New section mobile at `max-width: 760px`: heading stacks above items, `grid-template-columns: 1fr`, centered, gap `18px`, padding `24px 16px 30px`.
- New item grid mobile at `max-width: 760px`: width `min(100%, 404px)`, three columns, gap `14px`.
- New item grid small mobile at `max-width: 430px`: width `min(100%, 278px)`, two columns, gap `16px 12px`; the treasure spans both columns.

Recent/catalog board pattern:

- Desktop catalog section padding: `48px 28px 140px`, background `#cff5ff`.
- Desktop board: `min-height: 285px`, padding `36px 52px`, border `2px solid #8bd4e8`, background `#dffbff`, white grid pattern with 5px lines and `34px 34px` background size.
- Desktop catalog grid: five `132px` columns, gap `24px 26px`, centered items.
- Wide mobile/tablet catalog grid at `801px` to `930px` on coarse-pointer/touch screens: keep five `132px` columns, center the column group with `width: max-content`, `max-width: 100%`, and `margin-inline: auto`; use board side padding `18px` and gap `24px 10px` so the row fits cleanly.
- Mobile catalog section at `max-width: 760px`: side padding removed so the grid-pattern board reaches both screen edges.
- Mobile board: padding `28px 18px`, no left or right border; keep only top and bottom border.
- Mobile catalog grid at `max-width: 760px`: four equal columns with gap `24px 12px`.
- Mobile catalog grid under `500px`: three equal columns with gap `24px 12px`.
- Small mobile under `400px`: board side padding `14px`; catalog grid becomes two equal columns with gap `24px 12px`.

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

Empty list and empty slot visuals are specified in `features/F006-empty-list-layouts.md`. That spec is the source of truth for the add-option artwork, empty combi layouts, group/arena grids, and replacement behavior when a user chooses an item.

## Combi UI

A combi should display:

- Pet slot.
- Main cookie slot.
- Relay cookie slot when supported.
- Three treasure slots.
- Current levels on each slot.
- Target levels on each slot.
- Newly added items should display current level `Lv. 1` and a target level that automatically matches the maximum allowed by the current slot, combi, list format, or arena target set until the user changes it.
- Users can manually mark an item complete; doing so sets the item's current level to its target level.

For combi type 2, do not render an empty relay column.

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
- Use the shared item-card frame construction and rarity colors for cookie and pet artwork.
- Use Common brown, Rare blue, Epic purple, and Legendary teal/gradient according to the Shared Item Cards section.
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
