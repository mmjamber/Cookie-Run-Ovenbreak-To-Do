# UI Changelog

Tracks visual/interface changes, UI specs, responsive behavior, layout, accessibility, styling, and user-facing polish.

## Unreleased

### UI Specs

- Removed the redundant `G006-ui-index.md`; `G001-index.md` remains the single spec index for UI spec links.
- Updated account, empty/error, and accessibility specs for real auth states, guest migration feedback, admin entry points, admin access denial, and admin upload/dialog accessibility.

- Added durable list-detail progress UI requirements for modal level editing, block actions, preview visual references, and format-specific controls.
- Added project specifications for UI behavior.

### Layout

- Merged progress preview visual-reference requirements into list-detail specs, including block controls, modal level editing, and format-specific edit controls.
- Removed the relay numbered marker requirement from the empty list spec so relay slots do not use numbered badges, markers, or frame numbers.
- Removed the No Mode preview helper text below the list name and straightened No Mode section titles.
- Centered No Mode preview individual items within their blocks, removed individual item names, and simplified the combi section to `Combis`.
- Made Breakout group and Guild Run arena heading edit buttons appear only while hovering or focusing their connected group or arena block.
- Added Trophy Race-style edit dialogs to the Breakout and Guild Run previews so Breakout group controls change combi counts and Guild Run arena controls change max target levels without showing target labels beside arena names.
- Expanded the Guild Run preview to show all 12 fixed arena blocks and removed the helper sentence below the list name.
- Restored the Breakout preview group panel to its real thin lavender border and padding after confirming the apparent page-size issue was browser zoom.
- Matched Breakout preview block and level-text scale to the other preview pages by reducing Breakout's block width to account for its group panel padding and border.
- Reverted the Breakout preview background panel sizing adjustment, restoring the group panel's real padding and pale lavender border.
- Restored Breakout preview background panel sizing to match Trophy Race by removing extra layout width from the group panel padding and stroke.
- Thinned the Breakout preview group panels and moved each group name outside above the bordered panel.
- Changed the Breakout preview group panel border to a pale lavender swatch color and reduced the flag marker size below each pet slot.
- Swapped the Breakout preview combi markers to the `flag.png` asset with overlaid numbers and a slightly protruding bottom edge below the pet slot.
- Matched Champions League preview arena title sizing to the Trophy Race preview and removed the visible low, mid, and full target-set labels.
- Wrapped Breakout preview group combis in shared white panels with purple borders and replaced visible combi titles with larger bottom-left numbered badges.
- Added preview layouts for Breakout, Guild Run, Champions League, and No Mode progress tracking, including grouped combis, fixed arena examples, target-set notes, and flexible individual item entries.
- Nudged Trophy Race preview block delete buttons downward so their outline rings have more clearance from the edit buttons.
- Moved Trophy Race preview block option buttons slightly inward so their outline rings are not clipped by the arena block.
- Spaced out Trophy Race preview treasure level labels by widening the treasure tracks while shifting the treasure row left of the edit/delete action area.
- Added Timekeeper Cookie as a filled legendary relay slot in Arena 2 of the Trophy Race preview.
- Removed all relay number `2` badges from the Trophy Race preview, including filled relay slots, empty relay slots, and newly generated arenas.
- Moved filled Trophy Race preview relay badges farther right to match the provided relay frame placement reference.
- Moved filled Trophy Race preview relay badges slightly to the right while keeping empty relay badge placement unchanged.
- Moved filled Trophy Race preview relay badges outside the clipped relay frame wrapper so they can appear above selected relay frames, while leaving empty relay slot badges unchanged.
- Restored the Trophy Race preview relay `2` badge to its prior top-left position after a layering-only correction.
- Moved the Trophy Race preview relay `2` badge from the bottom-right to the top-left of relay slots.
- Centered the Trophy Race preview list title after removing the helper note below it.
- Replaced per-arena move arrow buttons in the Trophy Race preview with drag-and-drop arena movement that snaps back into the grid when dropped.
- Added a Trophy Race preview toolbar with move and add controls, plus per-arena move controls that appear in move mode.
- Added prototype-only Trophy Race progress preview layout experiments in `public/trophy-race-progress-preview.html`, including arena block sizing, mixed filled and empty catalog slots, and homepage-style shell/banner treatment.

### Responsive Behavior

- No changes recorded yet.

### Accessibility

- Added accessibility requirements for level-edit modals, hover-revealed controls, touch alternatives, disabled steppers, and block clear/removal dialogs.

### Styling

- Replaced yellow hover/focus feedback in preview dialogs with the shared purple hover state and disabled Breakout group count stepper buttons at their min and max values.
- Added a shared stylesheet for the non-Trophy Race progress previews so their combi slots, level labels, empty states, and page shell stay visually aligned.
- Updated the Trophy Race preview move-mode handle to use the same internal transparent-outline treatment as the block option buttons and reduced its icon to two equal horizontal lines.
- Tightened Trophy Race preview block option button spacing and clipped the white fill so transparent borders show the arena background.
- Changed Trophy Race preview block option button outlines from external shadows to transparent borders inside the button box.
- Increased the spacing between Trophy Race preview block option buttons and made their hover reveal instant to avoid pixelated fading icons.
- Removed the offset shadow layer from Trophy Race preview page and block action buttons while keeping their circular outline rings.
- Refined selected Trophy Race preview relay cookie frames so the border and fill both follow cookie rarity colors, and reduced the relay cookie artwork scale inside the frame.
- Updated selected Trophy Race preview relay cookie frames to keep the gray relay border while using catalog-style rarity fills and cropped relay cookie artwork.
- Changed selected Trophy Race preview relay cookie frames from catalog-style framing to an add-relay-style black fill with gray rounded border.
- Added catalog-style frames around selected Trophy Race preview relay cookies, using a black border and 50% black frame background.
- Fixed empty treasure slot text in the Trophy Race preview level editor so it no longer appears lighter than other empty slot text.
- Replaced the Trophy Race preview page panel's horizontal ruled notebook background with a white dotted notebook grid using the previous horizontal line color.
- Changed Trophy Race preview move and add toolbar hover/active states from yellow to the same purple-tinted color used by the arena action buttons.
- Added slightly rounded arena block corners and replaced the yellow move-mode drop highlight with a subtle gray outline in `public/trophy-race-progress-preview.html`.
- Added prototype-only Trophy Race progress preview styling experiments in `public/trophy-race-progress-preview.html`, including hover-revealed action buttons and lined-paper panel background exploration.

### User-Facing Polish

- Adjusted the Trophy Race preview delete dialog to use player-facing `full arena` wording instead of internal block terminology.
- Changed completed Trophy Race preview level labels so the current level turns pink when it reaches the target level.
- Restored the transparent look of Trophy Race preview block button outlines after converting them from shadows to borders.
- Kept Trophy Race preview block button outlines transparent while preventing the arena block from clipping them.
- Added a little vertical clearance around the Trophy Race preview delete button outline.
- Gave the Trophy Race preview edit button outline more room inside the arena block.
- Prevented the Trophy Race preview edit icon from fading through a pixelated partial-opacity state.
- Removed the clipped-looking lower offset shadow from Trophy Race preview block buttons while keeping the outline.
- Kept Trophy Race preview treasure level text at its existing size while preventing label overlap.
- Filled Arena 2's relay slot in the Trophy Race preview so the preview shows another selected relay example with legendary frame styling.
- Removed relay badge visuals from the Trophy Race preview after deciding the relay frame no longer needs a numbered marker.
- Matched the filled relay `2` badge placement in the Trophy Race preview to the provided visual reference.
- Nudged the filled relay `2` badge rightward in the Trophy Race preview after the layering fix.
- Fixed selected relay badge layering in the Trophy Race preview without changing empty relay badge placement.
- Kept the Trophy Race preview relay `2` badge layered above the selected relay frame and cookie art without moving it farther outward.
- Raised the Trophy Race preview relay `2` badge above the selected relay frame and moved it outward from the frame corner.
- Placed Trophy Race preview relay `2` badges above the selected relay frame treatment while the relay cookie art is cropped inside the frame.
- Updated selected relay cookies in the Trophy Race preview to use frame dimensions and colors based on `add relay.png` instead of catalog item frames.
- Framed selected relay cookies in the Trophy Race preview so they visually match catalog cookie presentation while keeping relay-specific black styling.
- Refreshed the Trophy Race preview relay add-option image reference after another `add relay.png` artwork update.
- Updated Trophy Race preview relay badge placement to fit the revised `add relay.png` artwork.
- Normalized empty treasure slot text visibility with the other empty slot labels in the Trophy Race preview level editor.
- Removed the Trophy Race preview helper note text beneath the list title.
- Matched the Trophy Race preview move and add toolbar button feedback with the page's existing edit/delete action button feedback.
- Added a black three-line move handle to the top-right corner of each arena while Trophy Race preview move mode is active.
- Updated the Trophy Race preview move toolbar to use `move.png` from free assets and exit move mode when the user clicks outside arena blocks and toolbar controls.
- Added a Trophy Race preview delete-choice modal so users can choose between clearing arena slots and removing the full arena block.
