# Technical Spec: Runtime Assets And UI Implementation

## Purpose

This spec defines implementation rules for serving static assets and applying durable UI styling.

Feature specs describe what visual elements users should see. This technical spec owns runtime asset paths, source-to-public copying expectations, CSS placement, and sizing mechanics.

## Runtime Asset Handling

Source artwork may live under `assets/`, but browser-served runtime images must live under `public/`.

Rules:

- Copy any runtime image dependencies into `public/` before referencing them from app code.
- Do not reference source-only `assets/` paths directly from browser-rendered UI.
- Keep source/raw OvenBreak artwork in `assets/ovenbreak images`.
- Use existing repository assets. Do not generate images.
- Automated asset ingestion from `assets/ovenbreak images` into runtime-safe `public/` paths is out of scope until a dedicated implementation task defines it.

## Empty List Runtime Assets

Source add-option artwork lives under `assets/ovenbreak images/add cookies/`. Every add-item slot must use the matching PNG from this folder for its empty-slot artwork.

Add-option artwork for add-item slots:

- `add cookie` slot: `add cookie.png`
- `add pet` slot: `add pet.png`
- `relay` slot: `add relay.png`
- `add treasure` slot: `add treasure.png`

Combi layout references:

- Combi type 1: `combi cookie 1 + relay preview.png`
- Combi type 2: `combi cookie no relay preview.png`

Mode group layout references:

- Trophy Race and Champions League: `trophy race-champions league preview.png`
- Breakout: `preview breakout groups.png`
- Guild Run: `guild run preview.png`

## Mode Card Runtime Assets

Mode artwork source files live under `assets/ovenbreak images/illustrations/game modes`.

Runtime copies should be placed under `public/images/game-modes/`.

Mode artwork mapping:

- Trophy Race: `Trophy Race 1.png` or `Trophy Race 2.png`
- Breakout: `breakout.jpg`
- Champions League: `Champions League.png`
- Guild Run: `guild run.png`
- None / No mode: `none-card.png` for desktop cards and `none-card-horizontal.png` for horizontal mobile cards.
- Extra or future modes may use the `extra_*` images only when no more specific artwork exists.

## CSS Ownership

Durable UI styling should live in CSS files rather than inline `<style>` blocks or style-heavy markup.

Rules:

- Keep HTML/component structure separate from CSS styling.
- Shared UI should reuse existing CSS patterns where possible.
- Homepage `My Lists` cards and To-do page cards should be implemented as shared list-card UI using the same source list records.
- Ordinary form controls should inherit the site font.
- Do not use browser-default fonts for item names or section headings unless a page spec explicitly says so.

## List Progress Preview References

List-detail implementation should use these preview files as the visual reference for durable list progress UI:

- `public/trophy-race-progress-preview.html`
- `public/breakout-progress-preview.html`
- `public/guild-run-progress-preview.html`
- `public/champions-league-progress-preview.html`
- `public/none-list-progress-preview.html`
- `public/list-progress-preview.css`

The specs should describe durable behavior and constraints, while the preview files carry the detailed visual reference for layout, sizing, spacing, text treatment, artwork placement, colors, borders, dialogs, and control styling. Do not treat `item-frame` preview files as list-detail visual references.

## Replacement And Restoration Sizing

When a user replaces add-option artwork with a chosen item:

- The chosen item artwork must occupy the same visual footprint as the add-option artwork it replaces.
- A chosen main cookie replaces the `add cookie` slot at the same slot size and position.
- A chosen relay cookie replaces the `relay` slot at the same slot size and position.
- A chosen pet replaces the `add pet` slot at the same slot size and position.
- A chosen treasure replaces the `add treasure` slot at the same slot size and position.
- Chosen item artwork must not resize the combi, move neighboring slots, or change the group grid.
- The add-option artwork must not remain visible behind or beside the chosen item artwork while the slot is filled.
- If the chosen catalog item is deleted, restore the matching add-option artwork in that same slot using the same slot size and position.

Use stable sizing and fitting rules, such as `object-fit` and `object-position`, so item art fits inside the existing slot footprint.

When a compatible filled slot exposes the `Switch?` replacement affordance:

- The filled item artwork should gray out without changing its slot size or position.
- The `Switch?` text should overlay the filled item within the same slot footprint.
- Showing or hiding `Switch?` must not resize the combi, move neighboring slots, or change the group grid.
- Incompatible filled slots must not show the `Switch?` overlay.

## Stable Control Implementation

List-detail controls must not resize, shift, or overlap item slots when they appear.

Rules:

- Block edit/delete/move controls should reserve or use stable space so hover, focus, and active states do not push slot artwork or level text.
- Transparent outlines or rings should be drawn inside the button box when the control sits inside a clipped or bordered panel.
- Raster icon assets should not fade through partial opacity in a way that makes them visibly pixelated; reveal and state changes should keep icons crisp.
- Treasure level labels need enough stable horizontal space to avoid overlapping neighboring treasure labels or block action controls.
- Modal dialogs and steppers should use shared styling across list formats, with disabled step controls at min/max values.
- Dialog button feedback should follow the shared purple interaction states and should not use yellow feedback unless a later UI spec explicitly changes that.

## Related Specs

- `../G006-ui-index.md` for the UI index.
- `../user-interface/UI001-global-visual-style.md` for visual design rules.
- `../features/F005-homepage-list-cards.md` for card behavior.
- `../features/F006-empty-list-layouts.md` for empty list behavior.
