# UI Spec: Global Visual Style

## Design Goal

The site should feel useful to active Cookie Run: Ovenbreak players: fast to scan, easy to edit, and playful without burying the checklist workflow.

## Visual Style

- Use the shared color tokens in this spec as the website palette reference. If a palette image is added later, keep it under `assets/`.
- Use a pink background with a diagonal white polka-dot pattern as the default website background.
- Default background CSS: `background-color: #f7bfdc; background-image: radial-gradient(circle, #ffffff 5px, transparent 5.5px), radial-gradient(circle, #ffffff 5px, transparent 5.5px); background-position: 0 0, 22px 22px; background-size: 44px 44px;`
- Text should be white with a black border or outline unless a specific component spec says otherwise.
- The black text outline should improve readability on bright artwork and colorful UI surfaces without making labels look heavy or blurry.
- Any exception to the white-with-black-outline text rule must be stated explicitly in the relevant component or page spec.

## Shared Color Tokens

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

## Shared Typography

Use homepage typography for matching UI pieces across every page.

- Use CookieRun fonts globally: regular `400`, bold `700`, black `900`.
- All ordinary form controls inherit the site font.
- Main section headings use `h1` or `h2`, CookieRun black `900`, font size `25px`, fill `#ffffff`, `-webkit-text-stroke: 4px #1e1b20`, `paint-order: stroke fill`, no text shadow, margin `0`, letter spacing `0`.
- Item names for cookies, pets, and treasures use CookieRun regular `400`, font size `14px`, line-height `1.08`, fill `#ffffff`, `-webkit-text-stroke: 3px #1e1b20`, `paint-order: stroke fill`, centered, width `100%`, `overflow-wrap: anywhere`.
- Small labels such as `see more` and `see all` use the outlined text style, font size `14px` to `15px`, regular `400`, centered inline-flex layout.
- Do not use browser-default fonts or unoutlined dark text for item names or section headings unless a page spec explicitly says so.

## Visual Constraints

- Use existing assets from the repository; do not generate images.
- Avoid oversized landing-page style sections; this is a working tool.
- Use compact cards or rows for repeated items.

## Related Specs

- `UI002-page-shell-and-navigation.md` for the shared shell and navigation.
- `UI004-catalog-item-cards.md` for item-card typography and rarity frames.
- `../technical/T004-runtime-assets-and-ui-implementation.md` for runtime asset and CSS implementation rules.
