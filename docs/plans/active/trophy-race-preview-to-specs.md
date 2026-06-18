# Trophy Race Preview To Specs Plan

## Goal

Turn the prototype decisions from `public/trophy-race-progress-preview.html` into durable project specs so the real list-detail implementation can be built later without depending on preview-only code.

This plan is for spec-writing and implementation planning only. It should not change `app/` behavior until the relevant specs are updated and approved.

## Relevant Specs

- `docs/specs/features/F006-empty-list-layouts.md` - Trophy Race arena counts, add/delete limits, empty and filled slot replacement behavior.
- `docs/specs/user-interface/UI005-list-detail-and-combi-layouts.md` - list-detail block controls, progress controls, level display, combi layout, and block options.
- `docs/specs/user-interface/UI007-accessibility.md` - keyboard reachability, focus behavior, hover/touch alternatives, and modal accessibility.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` - saved list shape, arena/combi storage, item level persistence, and updated timestamps.
- `docs/specs/technical/T004-runtime-assets-and-ui-implementation.md` - runtime asset ownership, sizing stability, and CSS implementation boundaries.

## Preview Decisions To Capture

- Trophy Race list detail uses arena blocks laid out as combi type 1 cards with three treasures across the top, pet at lower left, main cookie centered, and relay at lower right.
- Trophy Race starts from a default set of arenas and supports adding arenas up to the format maximum and deleting arenas down to the minimum.
- Arena labels use `Arena N` and renumber after add, delete, or reorder.
- Arena reordering should use drag-and-drop in move mode rather than visible arrow controls.
- Block-level edit and delete controls appear at the top-right of each arena block and are visually tied to that block.
- Block option buttons use icon-only circular controls with a white interior and a translucent purple outline that is part of the button box so it cannot be clipped by the arena panel.
- Block option buttons should not fade icon PNGs through partial opacity; reveal/hide behavior should keep raster icons crisp.
- The delete/block options flow asks whether to remove only filled items or remove the full arena block.
- Removing only items clears filled slots, restores add-option artwork, and preserves the arena block.
- Removing a full Trophy Race arena deletes that combi and renumbers remaining arenas, while respecting the one-arena minimum.
- Filled slots show current and target levels directly over the slot artwork.
- Trophy Race target levels are fixed to full caps: cookies and pets `15`, treasures `12`.
- Current levels are editable for filled slots and must persist in the eventual saved-list data model.
- Level edits should update the saved list's `updatedAt` timestamp.
- Treasure level labels need enough layout width to avoid overlapping one another without pushing into the block action controls.
- Filled relay visual treatment should be specified separately from old relay number badge experiments; the preview no longer needs relay number badges.

## Spec Tasks

- [ ] Update `UI005-list-detail-and-combi-layouts.md` with the final block action button behavior, including icon-only controls, translucent outline treatment, crisp reveal behavior, top-right positioning, and modal entry points.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with level label placement rules for combi slots, including treasure label spacing requirements and fixed target display for Trophy Race.
- [ ] Update `F006-empty-list-layouts.md` to clarify Trophy Race arena add/delete/reorder behavior, arena renumbering, and delete-choice behavior.
- [ ] Update `T002-local-storage-and-data-architecture.md` to ensure Trophy Race arena reordering, level edits, item-only clears, full-arena deletion, and `updatedAt` changes are explicitly covered.
- [ ] Update `T004-runtime-assets-and-ui-implementation.md` with implementation constraints learned from the preview: stable slot dimensions, no clipped external outlines inside clipped panels, and no partial-opacity fade on raster icon assets.
- [ ] Review `UI007-accessibility.md` and add requirements for keyboard access to edit/delete/move controls, modal focus management, Escape behavior, and touch alternatives to hover-revealed actions.
- [ ] Add acceptance criteria to the touched specs for arena controls, level persistence, treasure label spacing, and delete-choice outcomes.
- [ ] Update `docs/specs/G001-index.md` only if a new spec file is added; prefer updating existing specs unless the spec sections become too large.

## Later Implementation Tasks

- [ ] Create or update the real list-detail route/components after the specs are updated.
- [ ] Use the persisted `UserList` / `Combi` / `TodoItem` structures rather than preview-only DOM `data-current` and `data-target` attributes.
- [ ] Implement local-storage writes for current level edits, arena add/delete/reorder, item-only clearing, and full arena deletion.
- [ ] Keep component markup and CSS styling separated according to project rules.
- [ ] Verify responsive layouts so treasure levels do not overlap and block action controls do not collide with filled slots.
- [ ] Verify keyboard, pointer, and touch interactions for edit, delete, add arena, and move mode.
- [ ] Run `npm run lint` and `npm run build` once the local dependency install is healthy.

## Open Questions

- Should the real app keep block edit/delete buttons always visible on touch layouts, or reveal them after the block receives focus/tap?
- Should Trophy Race arena move mode be available on touch devices in the first implementation, or should touch reorder wait for a dedicated mobile interaction pass?
- Should the item-only delete choice clear all filled slots in the arena at once, or should the real block options also offer per-slot deletion actions as specified in `UI005`?
- Should the level editor be a modal, inline stepper controls, or both depending on viewport size?
- What exact visual asset should be used for selected relay cookie frames in the real app now that relay number badges have been removed from the preview?

## Completion Notes

Keep this plan in `docs/plans/active/` until the relevant specs have been updated. When complete, move it to `docs/plans/completed/` and summarize which specs changed.
