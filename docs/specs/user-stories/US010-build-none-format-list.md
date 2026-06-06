# User Story: Build None-Format List

## Story

As a player, I want to add flexible entries to a None-format list so I can track personal goals outside fixed modes.

## Source Specs

- `../features/F002-list-formats.md`
- `../features/F006-empty-list-layouts.md`

## Scenario

1. The user opens a None-format list.
2. The user chooses the list add action.
3. The website asks whether to add combi type 1, combi type 2, cookie, pet, or treasure.
4. The user chooses an entry type.
5. The website adds an empty combi block or opens the matching catalog selection flow.
6. The user fills the entry and tracks item levels.

## Acceptance Criteria

- [ ] None-format lists start with no default combis, arenas, groups, or items.
- [ ] The None-list add action offers combi type 1, combi type 2, cookie, pet, and treasure choices.
- [ ] Choosing combi type 1 inserts an empty combi type 1 block.
- [ ] Choosing combi type 2 inserts an empty combi type 2 block.
- [ ] Choosing cookie opens the Cookies catalog in list-selection mode.
- [ ] Choosing pet opens the Pets catalog in list-selection mode.
- [ ] Choosing treasure opens the Treasures catalog in single-selection mode for one individual treasure entry.
- [ ] Individual entries allow current and target level tracking.
- [ ] Adding up to 3 treasures at once is available only from treasure slots inside a combi entry.

## Out Of Scope

- Adding multi-treasure standalone entries outside a combi.
- Adding unsupported entry types.
