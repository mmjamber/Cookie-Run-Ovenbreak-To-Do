# Progress Tracking Implementation Plan

## Goal

Turn the prototype decisions from `public/trophy-race-progress-preview.html` into durable project specs so the real list-detail implementation can be built later without depending on preview-only code.

Although the preview uses Trophy Race as its example, the reusable list-detail mechanics should apply to every list format where they fit. Shared behavior includes add-item slot layout, filled-slot progress display, level editing, filled-slot replacement through the relevant catalog, block edit/delete options, modal/dialog behavior, item-only clearing, and stable block controls. Format-specific differences such as Trophy Race arena limits, Breakout combi type, Guild Run target-set requirements, Champions League fixed arenas, and None-format flexible entries should stay explicitly scoped to their own formats.

This plan is for spec-writing and implementation planning only. It should not change `app/` behavior until the relevant specs are updated and approved.

## Relevant Specs

- `docs/specs/features/F006-empty-list-layouts.md` - arena counts, add/delete limits, empty and filled slot replacement behavior.
- `docs/specs/user-interface/UI005-list-detail-and-combi-layouts.md` - list-detail block controls, progress controls, level display, combi layout, and block options.
- `docs/specs/user-interface/UI007-accessibility.md` - keyboard reachability, focus behavior, hover/touch alternatives, and modal accessibility.
- `docs/specs/technical/T002-local-storage-and-data-architecture.md` - saved list shape, arena/combi storage, item level persistence, and updated timestamps.
- `docs/specs/technical/T004-runtime-assets-and-ui-implementation.md` - runtime asset ownership, sizing stability, and CSS implementation boundaries.

## Preview Decisions To Capture

- Treat the preview as a source for shared list-detail behavior, not only Trophy Race behavior.
- Reusable block mechanics should be specified for all list formats where the same combi, item slot, level editor, delete flow, edit flow, and action-control patterns apply.
- Selecting a filled item slot should open the relevant catalog in replacement mode so the user can choose a different compatible catalog item for that slot.
- Individual item blocks use the same filled-slot replacement behavior: selecting the filled item opens its relevant catalog and replacing it swaps only that item's `TodoItem`.
- The block delete button should clear all catalog items from that block's slots, restore the empty add-option artwork for each cleared slot, and preserve the surrounding block unless the user chooses a separate full-block deletion action in a format that allows it.
- Trophy Race list detail uses arena blocks laid out as combi type 1 cards with three treasures across the top, pet at lower left, main cookie centered, and relay at lower right.
- Trophy Race starts from a default set of arenas and supports adding arenas up to the format maximum and deleting arenas down to the minimum.
- Arena labels use `Arena N` and renumber after add, delete, or reorder.
- Arena reordering should use drag-and-drop in move mode rather than visible arrow controls.
- Block-level edit and delete controls appear at the top-right of each arena block and are visually tied to that block.
- Block option buttons use icon-only circular controls with a white interior and a translucent purple outline that is part of the button box so it cannot be clipped by the arena panel.
- Block option buttons should not fade icon PNGs through partial opacity; reveal/hide behavior should keep raster icons crisp.
- The delete/block options flow asks whether to clear the block's filled catalog items or remove the full block when the current list format allows full block removal.
- Removing only items clears filled slots, restores add-option artwork, and preserves the surrounding block.
- Removing a full Trophy Race arena deletes that combi and renumbers remaining arenas, while respecting the one-arena minimum.
- Filled slots show current and target levels directly over the slot artwork.
- Trophy Race target levels are fixed to full caps: cookies and pets `15`, treasures `12`.
- Current levels are editable for filled slots and must persist in the eventual saved-list data model.
- Level edits should update the saved list's `updatedAt` timestamp.
- Treasure level labels need enough layout width to avoid overlapping one another without pushing into the block action controls.
- Filled relay visual treatment should be specified separately from old relay number badge experiments; the preview no longer needs relay number badges.
- Breakout list detail uses grouped combi panels: each group label sits above its panel, and the panel contains only combi type 2 blocks without relay slots.
- Breakout combi blocks should not show individual combi titles. They use a small numbered `flag.png` marker below the pet area, with the flag edge allowed to protrude slightly from the block and numbering restarting inside each group.
- Breakout group edit controls appear next to the group label only while the related group area is hovered or focused. The edit flow changes that group's combi count, respects the allowed minimum and maximum, and renumbers the visible flag markers.
- Guild Run list detail always contains exactly 12 arenas; users cannot add or remove arenas from that format.
- Guild Run should not show helper text under the list name, and arena headings should show only `Arena N` without inline max-target text.
- Guild Run arena edit controls appear next to the arena title only while the related arena block is hovered or focused. The edit flow changes that arena's target level set, using the same dialog style as Trophy Race.
- Guild Run target level sets should be captured as arena-level configuration, with the preview options `7/7/5`, `11/11/9`, and `15/15/12` for cookie/pet/treasure caps.
- Champions League list detail uses exactly three fixed arenas with Trophy Race-sized arena titles and no visible `low`, `mid`, or `full` target text labels.
- Champions League arena target levels are fixed by arena order in the preview: Arena 1 uses `7/7/5`, Arena 2 uses `11/11/9`, and Arena 3 uses `15/15/12`.
- None-format list detail should not show helper text under the `No Mode` list name. Individual item entries are centered inside their blocks without item name labels, and the combi section is labeled `Combis` only.
- None-format section titles should remain straight and aligned with the other preview pages rather than using the old tilted title treatment.
- Shared preview dialogs should use the Trophy Race dialog style across list formats, with purple button feedback instead of yellow feedback and disabled minus/plus stepper buttons at configured minimum and maximum values.
- Hover-revealed edit buttons need keyboard and touch equivalents in the durable implementation so controls are discoverable without relying only on mouse hover.

## Spec Tasks

- [ ] Update `UI005-list-detail-and-combi-layouts.md` to separate shared list-detail block mechanics from Trophy Race-specific arena behavior.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with the final block action button behavior, including icon-only controls, translucent outline treatment, crisp reveal behavior, top-right positioning, and modal entry points.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` so filled slots behave as replacement entry points that open the relevant catalog in replacement mode.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with level label placement rules for combi slots across applicable list formats, including treasure label spacing requirements and format-specific target display rules.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with Breakout grouped-panel layout rules, relay-free type 2 combi blocks, flag-number markers, and group-level combi count editing.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with Guild Run's 12-arena layout, hover/focus-revealed arena edit buttons, target-set dialog behavior, and removal of inline target text beside arena titles.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with Champions League's fixed three-arena layout, Trophy Race-consistent title sizing, hidden target-set labels, and fixed arena target levels.
- [ ] Update `UI005-list-detail-and-combi-layouts.md` with None-format layout rules for centered individual entries without visible item names, straight section titles, and a single `Combis` section heading.
- [ ] Update `F006-empty-list-layouts.md` to clarify Trophy Race arena add/delete/reorder behavior, arena renumbering, and delete-choice behavior.
- [ ] Update `F006-empty-list-layouts.md` to clarify which list formats have fixed block counts, editable block counts, or flexible entries: Guild Run has 12 fixed arenas, Champions League has 3 fixed arenas, Breakout group combi counts are editable within limits, and None-format lists remain flexible.
- [ ] Update `T002-local-storage-and-data-architecture.md` to ensure shared level edits, block-wide item clears, filled-slot replacement, block deletion where allowed, format-specific reordering, and `updatedAt` changes are explicitly covered.
- [ ] Update `T002-local-storage-and-data-architecture.md` with format-specific configuration storage for Breakout group combi counts and Guild Run arena target sets.
- [ ] Update `T004-runtime-assets-and-ui-implementation.md` with implementation constraints learned from the preview: stable slot dimensions, no clipped external outlines inside clipped panels, and no partial-opacity fade on raster icon assets.
- [ ] Update `T004-runtime-assets-and-ui-implementation.md` with shared modal/stepper implementation notes, including disabled controls at min/max values and no yellow dialog button feedback.
- [ ] Review `UI007-accessibility.md` and add requirements for keyboard access to edit/delete/move controls, modal focus management, Escape behavior, and touch alternatives to hover-revealed actions.
- [ ] Add acceptance criteria to the touched specs for shared block controls, filled-slot replacement, level persistence, treasure label spacing, block-wide item clearing, delete-choice outcomes, and each affected format's specific constraints.
- [ ] Update `docs/specs/G001-index.md` only if a new spec file is added; prefer updating existing specs unless the spec sections become too large.

## Later Implementation Tasks

- [ ] Create or update the real list-detail route/components after the specs are updated.
- [ ] Use the persisted `UserList` / `Combi` / `TodoItem` structures rather than preview-only DOM `data-current` and `data-target` attributes.
- [ ] Implement reusable list-detail components/functions for add-item slots, filled-slot replacement, filled-slot progress display, level editing, edit/delete options, block-wide item clearing, and block deletion where the list format allows it.
- [ ] Implement reusable format controls for hover/focus-revealed heading edit buttons, Trophy Race-style dialogs, purple button states, and disabled stepper controls at min/max values.
- [ ] Implement persistence writes for current level edits, add/delete/reorder behavior, filled-slot replacement, block-wide item clearing, and full block deletion according to each list format's rules.
- [ ] Implement format-specific list detail layouts for Trophy Race, Breakout, Guild Run, Champions League, and None-format lists from the updated specs instead of copying preview-only markup directly.
- [ ] Keep component markup and CSS styling separated according to project rules.
- [ ] Verify responsive layouts so treasure levels do not overlap and block action controls do not collide with filled slots.
- [ ] Verify keyboard, pointer, and touch interactions for edit, delete, add arena, move mode, group combi-count editing, and arena target-set editing.
- [ ] Run `npm run lint` and `npm run build` once the local dependency install is healthy.

## Open Questions

- Should the real app keep block edit/delete buttons always visible on touch layouts, or reveal them after the block receives focus/tap?
- Should Trophy Race arena move mode be available on touch devices in the first implementation, or should touch reorder wait for a dedicated mobile interaction pass?
- Should the level editor be a modal, inline stepper controls, or both depending on viewport size?
- What exact visual asset should be used for selected relay cookie frames in the real app now that relay number badges have been removed from the preview?
- Which preview-derived controls should be available on every combi block, and which should be hidden or changed for Breakout, Guild Run, Champions League, Trophy Race, and None-format lists?

## Completion Notes

Keep this plan in `docs/plans/active/` until the relevant specs have been updated. When complete, move it to `docs/plans/completed/` and summarize which specs changed.
