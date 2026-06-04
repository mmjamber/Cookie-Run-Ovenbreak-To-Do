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

Source add-option artwork lives under `assets/ovenbreak images/add cookies/`.

Add-option slot artwork:

- Main cookie slot: `add cookie.png`
- Pet slot: `add pet.png`
- Relay cookie slot: `add relay.png`
- Treasure slot: `add treasure.png`

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
- Ordinary form controls should inherit the site font.
- Do not use browser-default fonts for item names or section headings unless a page spec explicitly says so.

## Replacement Sizing

When a user replaces add-option artwork with a chosen item:

- The chosen item artwork must occupy the same visual footprint as the add-option artwork it replaces.
- A chosen main cookie replaces the main cookie add slot at the same slot size and position.
- A chosen relay cookie replaces the relay cookie add slot at the same slot size and position.
- A chosen pet replaces the pet add slot at the same slot size and position.
- A chosen treasure replaces the treasure add slot at the same slot size and position.
- Chosen item artwork must not resize the combi, move neighboring slots, or change the group grid.

Use stable sizing and fitting rules, such as `object-fit` and `object-position`, so item art fits inside the existing slot footprint.

## Related Specs

- `../G006-ui-spec.md` for visual design rules.
- `../features/F005-homepage-list-cards.md` for card behavior.
- `../features/F006-empty-list-layouts.md` for empty list behavior.
