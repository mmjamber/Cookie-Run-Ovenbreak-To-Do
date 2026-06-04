# UI Spec: Catalog Item Cards

## Shared Item Cards

Use the homepage item-card sizing whenever cookies, pets, or treasures are shown as standalone visual items.

- Item card wrapper: display grid, centered content, top aligned, gap `8px`.
- Framed cookie or pet card width: `114px`.
- Treasure card width: `132px`.
- Treasure names may use a top margin of `4px` when displayed under the treasure image.
- Item grids should center their items and avoid horizontal overflow on mobile.

## Framed Cookie And Pet Images

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

## Treasure Images

- Treasures do not use visual rarity frames.
- Treasure image display: `height: 110px`, `width: auto`, `max-width: none`, `max-height: none`, `object-fit: contain`.
- Treasure rarity may still be used for sorting and filtering, but should not change the displayed frame style.

## Homepage Item Grid Patterns

- New section desktop: yellow panel `#ffc433`, `min-height: 210px`, grid with heading beside items, `grid-template-columns: max-content max-content`, centered, gap `24px`, padding `24px 72px`.
- New item grid desktop: `repeat(2, 114px) 132px`, gap `18px`.
- New section mobile at `max-width: 760px`: heading stacks above items, `grid-template-columns: 1fr`, centered, gap `18px`, padding `24px 16px 30px`.
- New item grid mobile at `max-width: 760px`: width `min(100%, 404px)`, three columns, gap `14px`.
- New item grid small mobile at `max-width: 430px`: width `min(100%, 278px)`, two columns, gap `16px 12px`; the treasure spans both columns.

## Recent And Catalog Board Pattern

- Desktop catalog section padding: `48px 28px 140px`, background `#cff5ff`.
- Desktop board: `min-height: 285px`, padding `36px 52px`, border `2px solid #8bd4e8`, background `#dffbff`, white grid pattern with 5px lines and `34px 34px` background size.
- Desktop catalog grid: five `132px` columns, gap `24px 26px`, centered items.
- Wide mobile/tablet catalog grid at `801px` to `930px` on coarse-pointer/touch screens: keep five `132px` columns, center the column group with `width: max-content`, `max-width: 100%`, and `margin-inline: auto`; use board side padding `18px` and gap `24px 10px` so the row fits cleanly.
- Mobile catalog section at `max-width: 760px`: side padding removed so the grid-pattern board reaches both screen edges.
- Mobile board: padding `28px 18px`, no left or right border; keep only top and bottom border.
- Mobile catalog grid at `max-width: 760px`: four equal columns with gap `24px 12px`.
- Mobile catalog grid under `500px`: three equal columns with gap `24px 12px`.
- Small mobile under `400px`: board side padding `14px`; catalog grid becomes two equal columns with gap `24px 12px`.

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
- Use Common brown, Rare blue, Epic purple, and Legendary teal/gradient according to this spec.
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

List-origin selection mode:

- When opened from a list detail add-option item, the catalog uses Select actions instead of ordinary Add actions.
- Show the destination in compact UI, such as the list name and slot type, without covering catalog controls.
- Keep search, sort, and rarity filters available while selecting.
- Provide a cancel/back action that returns to the originating list detail view without changing the list.
- Disable, hide, or explain items that are incompatible with the selected destination.
- Detailed selection-mode behavior is defined in `../technical/T003-list-selection-routing.md`.

## Related Specs

- `../features/F001-catalog-pages.md` for catalog feature behavior.
- `UI001-global-visual-style.md` for typography and color tokens.
- `../technical/T001-catalog-import-and-derived-data.md` for derived catalog data.
