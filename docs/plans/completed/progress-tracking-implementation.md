# Progress Tracking Implementation Plan

## Goal

Turn the prototype decisions from the current list progress previews into durable project specs so the real list-detail implementation can be built later without depending on preview-only code. This includes `public/trophy-race-progress-preview.html`, `public/breakout-progress-preview.html`, `public/guild-run-progress-preview.html`, `public/champions-league-progress-preview.html`, and `public/none-list-progress-preview.html`; the item-frame preview is outside this plan.

Existing specs already own the stable format rules, slot behavior, storage mapping, and catalog routing. This plan should stay focused on the preview-to-spec gaps that remain, especially visual-reference handoff, block-management controls, progress editing presentation, and implementation sequencing.

For all visual UI decisions, future agents should inspect and follow the preview files directly instead of relying on prose descriptions in this plan. The specs should capture behavior, constraints, accessibility, and implementation requirements, while pointing to the preview files as the visual reference for layout, sizing, spacing, text treatment, artwork placement, colors, borders, and control styling.

This plan is for spec-writing and implementation planning only. It should not change `app/` behavior until the relevant specs are updated and approved.

## Relevant Specs

- `docs/specs/features/F006-empty-list-layouts.md` - arena counts, add/delete limits, empty and filled slot replacement behavior.
- `docs/specs/user-interface/UI005-list-detail-and-combi-layouts.md` - list-detail block controls, progress controls, level display, combi layout, and block options.
- `docs/specs/user-interface/UI007-accessibility.md` - keyboard reachability, focus behavior, hover/touch alternatives, and modal accessibility.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` - saved list shape, arena/combi storage, item level persistence, and updated timestamps.
- `docs/specs/technical/T004-runtime-assets-and-ui-implementation.md` - runtime asset ownership, sizing stability, and CSS implementation boundaries.

## UI Source Previews

Use these files as the visual source of truth for list-detail UI when updating specs and building the later implementation:

- `public/trophy-race-progress-preview.html`
- `public/breakout-progress-preview.html`
- `public/guild-run-progress-preview.html`
- `public/champions-league-progress-preview.html`
- `public/none-list-progress-preview.html`
- `public/list-progress-preview.css`

Do not treat `item-frame` preview files as part of this plan. When a spec needs a visual requirement, reference the relevant preview file and describe only the durable behavior or constraint needed for implementation, not a second hand visual recreation.

## Existing Spec Coverage

Do not restate these details in this plan or duplicate them in later spec edits unless the preview work is intentionally changing the rule:

- `F002-list-formats.md` already specifies format counts, allowed additions, current and target level rules, Trophy Race and Breakout full targets, Guild Run target-set choices, Champions League fixed target sets, and None-format flexibility.
- `F006-empty-list-layouts.md` already specifies empty add-item slot behavior, filled-slot replacement through `Switch?`, paired-pet behavior, combi type 1 and type 2 structure, format-specific empty layouts, Breakout flag numbering, and add/delete limits.
- `UI005-list-detail-and-combi-layouts.md` already specifies base list-detail content, current and target level controls, completion display, pending placement mode, filled-slot switch behavior, paired-pet placement, block options, and combi slots.
- `T002-local-storage-and-data-architecture.md` already specifies `UserList`, `ListSection`, `Combi`, `FreeItemBlock`, `TodoItem`, `updatedAt`, item deletion, item replacement, format storage mapping, and validation rules.
- `T003-list-selection-routing.md` already specifies list-selection mode, pending placement mode, destination context, compatibility rules, filled-slot replacement, and confirm/cancel return behavior.
- `T004-runtime-assets-and-ui-implementation.md` already specifies runtime asset handling, add-option assets, source visual references, CSS ownership, and replacement/restoration sizing.
- `UI007-accessibility.md` already specifies baseline keyboard reachability, non-color completion cues, and dialog focus handling.

## Preview Gaps To Capture

- Point durable UI specs to the current progress preview files as the visual source of truth for list-detail layout and styling, excluding item-frame previews.
- Specify that block edit buttons, block delete buttons, list-format add buttons, and move/reorder buttons are required controls for all list types in the durable implementation, even when a specific preview file does not currently show every one of those controls.
- Specify how preview-derived block-management controls work beyond existing single-item deletion: block clear, full-block removal where a format allows it, edit entry points, and the user-facing choice between those actions.
- Specify Trophy Race arena reordering from the preview work, including move-mode behavior and renumbering after reorder.
- Specify Breakout group combi-count editing as a list-detail action, including group-level entry points and flag renumbering after the count changes.
- Specify Guild Run arena target-set editing as a list-detail action, including arena-level entry points and the relationship between target-set changes and existing item targets.
- Specify that relay slots and selected relay cookies must not use number badges, markers, or numbered frame assets; players will understand the relay cookie runs second from the relay slot itself.
- Specify shared progress editing modal dialogs with stepper controls only where existing specs do not already define the behavior; use the previews for visual treatment.
- Add touch and keyboard alternatives for preview controls that are visually hover-revealed.

## Spec Tasks

- [x] Update `UI005-list-detail-and-combi-layouts.md` so list-detail visual layout and styling requirements reference the progress preview files directly.
- [x] Update `UI005-list-detail-and-combi-layouts.md` so every list type has block edit, block delete, list-format add, and move/reorder controls where the action is meaningful, even if the current preview for that list type does not show all of them.
- [x] Update `UI005-list-detail-and-combi-layouts.md` with preview-derived block management behavior that is not already covered by item deletion: block clear, full-block removal where allowed, edit entry points, and confirmation/dialog entry points.
- [x] Update `UI005-list-detail-and-combi-layouts.md` with Trophy Race move-mode/reorder behavior if it is not better owned by `F006-empty-list-layouts.md`.
- [x] Update `UI005-list-detail-and-combi-layouts.md` with Breakout group combi-count editing and Guild Run arena target-set editing as list-detail controls, avoiding repeats of existing format-count and target-set rules.
- [x] Update `T002-local-storage-and-data-architecture.md` only for storage gaps that are not already covered, such as preserving reorder results or writing group/arena edits to existing section structures.
- [x] Update `T004-runtime-assets-and-ui-implementation.md` only to add progress-preview file references or implementation constraints not already covered by runtime asset, CSS ownership, and sizing rules.
- [x] Review `UI007-accessibility.md` only for gaps around hover-revealed edit/delete/move controls on keyboard and touch inputs.
- [x] Add acceptance criteria only for new or clarified behavior from this plan, including preview visual-reference checks, block-wide clear/delete outcomes, move-mode outcomes, group count edits, and arena target-set edits.
- [x] No `docs/specs/G001-index.md` update was needed because no new spec file was added.

## Open Questions

- Should the real app keep block edit/delete buttons always visible on touch layouts, or reveal them after the block receives focus/tap?
- Should Trophy Race arena move mode be available on touch devices in the first implementation, or should touch reorder wait for a dedicated mobile interaction pass?
- Which universal controls should be disabled or hidden only when the current format cannot perform the action, such as adding beyond a fixed/maximum count or deleting below a minimum count?

## Decisions Captured

- Level editing uses a modal dialog with stepper controls instead of always-visible inline steppers.

## Completion Notes

The progress-tracking spec merge is complete in `F006`, `UI005`, `UI007`, `T002`, and `T004`. This completed plan records the spec handoff and remaining product questions; implementation tasks should be planned separately when list-detail app work begins.
