# Previews Changelog

Tracks preview-only files, throwaway mockups, temporary visual experiments, screenshots, and inspection artifacts.

## Unreleased

### Preview Files

- Added `public/breakout-progress-preview.html`, `public/guild-run-progress-preview.html`, `public/champions-league-progress-preview.html`, and `public/none-list-progress-preview.html` to visualize progress tracking across the remaining list formats.
- Added `public/list-progress-preview.css` as a shared stylesheet for the non-Trophy Race progress preview pages.
- Added `public/images/cookies/legendary/8-timekeeper-cookie.webp` for the Trophy Race preview's Arena 2 relay slot.
- Refreshed `public/trophy-race-progress-preview.html` relay add-option image references for the updated `add relay.png` artwork.
- Updated `public/trophy-race-progress-preview.html` so move mode uses the free-assets `move.png` icon and drag-and-drop arena reordering instead of arrow controls.
- Updated `public/trophy-race-progress-preview.html` with add-arena, delete-choice, and move-mode controls.
- Added prototype-only Trophy Race progress preview work in `public/trophy-race-progress-preview.html`.

### Mockups

- No changes recorded yet.

### Visual Experiments

- Removed obsolete shared preview CSS selectors and unused Guild Run dialog script state from earlier preview iterations.
- Removed the helper sentence under `No Mode` and made No Mode preview section headings straight instead of rotated.
- Centered No Mode preview individual item slots, removed item-name labels, and changed the combi section heading to `Combis`.
- Replaced yellow dialog button feedback with purple hover states across the previews and disabled Breakout group count steppers at their bounds.
- Made the Breakout group and Guild Run arena edit buttons reveal only on hover or focus of their connected group or block.
- Added edit buttons and Trophy Race-style dialogs to `public/breakout-progress-preview.html` and `public/guild-run-progress-preview.html` for changing Breakout group combi counts and Guild Run arena target sets.
- Expanded `public/guild-run-progress-preview.html` to all 12 fixed Guild Run arenas and removed the title helper sentence.
- Restored the Breakout preview group panel to its pre-size-discussion thin lavender border and padding after confirming the apparent scale issue was browser zoom.
- Matched Breakout preview block and level-text scale to the other preview pages by accounting for group panel padding and borders in the block width.
- Reverted the Breakout preview background panel sizing adjustment and restored the group panel's real padding and border.
- Restored the Breakout preview background panel sizing to match Trophy Race by making the group panel stroke visual-only.
- Thinned the Breakout preview group panel borders and kept each group name outside above its panel.
- Changed the Breakout preview group panel border to pale lavender and scaled down the `flag.png` combi markers.
- Swapped the Breakout preview combi number treatment to use `assets/ovenbreak images/add cookies/flag.png` with text numbers overlaid below the pet slot.
- Updated `public/champions-league-progress-preview.html` to use Trophy Race-sized arena labels and hide the low, mid, and full target-set text.
- Polished `public/breakout-progress-preview.html` so each Breakout group uses a common white purple-bordered panel and each combi block uses a larger bottom-left numbered badge instead of a title.
- Added mixed filled and empty slot examples across Breakout groups, Guild Run target sets, Champions League fixed arenas, and No Mode individual/combi entries using varied rarity examples.
- Adjusted the Trophy Race preview delete dialog to say `full arena` instead of exposing the internal `arena block` wording.
- Polished the Trophy Race preview move-mode handle so it uses the same internal transparent-outline treatment as the block option buttons, shows two equal horizontal lines, and marks completed current levels pink with their target levels.
- Tightened Trophy Race preview block option button spacing and restored transparent outlines with padding-box background clipping.
- Changed Trophy Race preview block option button outlines to transparent borders that sit inside the button box.
- Nudged Trophy Race preview block delete buttons downward to restore outline clearance below the edit buttons.
- Moved Trophy Race preview block option buttons slightly inward so their outline rings clear the clipped arena edge.
- Increased Trophy Race preview block option button spacing and removed their fade transition to keep the edit icon crisp.
- Removed the Trophy Race preview action button offset shadows that made block controls look clipped at the bottom while keeping the outline rings.
- Spaced out the Trophy Race preview treasure tracks and shifted the row left so level labels no longer collide or drift toward edit/delete controls.
- Added a filled legendary Timekeeper Cookie relay example to Arena 2 in `public/trophy-race-progress-preview.html`.
- Removed relay number badges from the Trophy Race preview. Removed badge CSS kept for reference:

```css
.relay-badge {
  position: absolute;
  left: -6px;
  top: 4px;
  z-index: 5;
  min-width: 20px;
  padding: 0 3px;
  border: 2px solid #211826;
  border-radius: 4px;
  background: #f3eadf;
  color: #211826;
  font-size: 17px;
  line-height: 0.95;
  transform: rotate(-3deg);
}

.relay.filled > .relay-badge {
  left: 14px;
  top: -4px;
}
```

- Matched the filled relay badge position in the Trophy Race preview to the provided placement reference.
- Adjusted the filled relay badge position in the Trophy Race preview after moving it above the selected relay frame.
- Fixed selected relay badge layering in the Trophy Race preview by moving filled-slot badges outside the clipped frame wrapper.
- Restored Trophy Race preview relay badge placement while preserving its layer above the relay frame and cookie artwork.
- Refined selected relay visuals in the Trophy Race preview with rarity-colored borders, smaller cropped relay cookie art, and badge layering above the frame.
- Updated selected relay cookie visuals in the Trophy Race preview with gray relay borders, rarity-colored frame fills, cropped cookie art, and badges layered above the frame.
- Changed selected relay cookie frame styling in the Trophy Race preview to rely on the dimensions and colors of the `add relay.png` artwork.
- Added selected relay cookie frame styling with black catalog-style borders and semi-transparent black fill in the Trophy Race preview.
- Updated Trophy Race preview relay slot badge placement for the revised relay add-option artwork.
- Normalized empty treasure slot text color treatment in the Trophy Race preview level editor.
- Centered the Trophy Race preview list title and removed the explanatory helper note.
- Replaced the Trophy Race preview lined-paper page panel with a dotted notebook-style background.
- Matched Trophy Race preview move/add toolbar button hover and active colors to the existing arena action buttons.
- Polished Trophy Race preview move mode with black corner drag handles, rounded arena panels, and a gray-only drop target outline.
- Changed the Trophy Race preview move interaction to drag selected arena blocks around the grid, snap them into order on drop, and exit move mode from non-block clicks.
- Added preview interactions for list block management: toolbar add/move actions, arena renumbering after reorder/removal, and a delete-choice modal.
- Added arena block sizing/layout experiments, modal-based level editing, mixed filled and empty catalog slots, hover-revealed edit/delete action buttons, homepage-style shell/banner treatment, and lined-paper panel background exploration in `public/trophy-race-progress-preview.html`.

### Screenshots

- No changes recorded yet.

### Inspection Artifacts

- No changes recorded yet.
