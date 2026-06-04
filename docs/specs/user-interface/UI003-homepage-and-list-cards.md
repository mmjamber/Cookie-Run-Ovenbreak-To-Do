# UI Spec: Homepage And List Cards

## Purpose

Saved to-do lists and preset mode entry points should display as clickable cards.

Homepage card selection behavior is defined in `../features/F005-homepage-list-cards.md`; this spec defines the shared visual treatment for those cards.

## Desktop Card Layout

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

## Mobile Card Layout

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

## Mode Artwork Mapping

- Trophy Race: `Trophy Race 1.png` or `Trophy Race 2.png`
- Breakout: `breakout.jpg`
- Champions League: `Champions League.png`
- Guild Run: `guild run.png`
- None / No mode: `none-card.png` for desktop cards and `none-card-horizontal.png` for horizontal mobile cards.
- Extra or future modes may use the `extra_*` images only when no more specific artwork exists.

None-format list cards must always use the None / No mode artwork. Their visible card title must be exactly `No mode` and must use the same title placement, typography, outline, and responsive behavior as the other list and mode cards.

## Related Specs

- `../features/F005-homepage-list-cards.md` for card selection behavior.
- `UI001-global-visual-style.md` for shared typography and colors.
- `../technical/T004-runtime-assets-and-ui-implementation.md` for runtime asset handling.
