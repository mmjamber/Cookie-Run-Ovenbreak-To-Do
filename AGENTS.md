<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses Next.js 16.2.6. APIs, conventions, and file structure may differ from older examples. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code, and heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Agent Guide

## Project Shape

- App directory: `app/`
- Static assets: `public/`
- Project specifications: `docs/specs/`
- Package manager: npm, using `package-lock.json`


## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Run lint checks: `npm run lint`
- Build production output: `npm run build`

## Working Rules

- Keep changes scoped to the requested task.
- Preserve user edits and do not revert unrelated changes.
- If a requested change would overwrite or substantially rewrite a section the user appears to have manually edited, ask for permission before changing that section.
- Never change the way the homepage looks without explicit confirmation. If a prompt implies or requires changes to the Homepage UI, stop and ask: "This request requires changes to the Homepage UI. Do you still want to proceed?" Do not edit Homepage UI files, styling, layout, or visual specs until the user confirms.
- Before adding or changing files under `app/`, create a task plan in `docs/plans/active/` based on the relevant specs. Implement only after the plan exists. This planning step is not required for explicitly requested test or preview files, which usually belong under `public/`.
- Prefer existing Next.js, React, Tailwind, and TypeScript patterns already in the website.
- Keep HTML/component structure and CSS styling in separate files; avoid inline `<style>` blocks and style-heavy markup unless a file is explicitly a throwaway preview.
- Update `docs/specs/` before large implementation work when requirements are unclear.
- Spec file names use `G` for general specs, `F` for feature specs, `UI` for UI specs, `T` for technical specs, and `US` for user-story specs.
- Name new feature specs in `docs/specs/features/` with the next `F`-prefixed zero-padded numeric prefix, such as `F005-new-feature.md`.
- Name new UI specs in `docs/specs/user-interface/` with the next `UI`-prefixed zero-padded numeric prefix, such as `UI001-global-visual-style.md`.
- Name new technical specs in `docs/specs/technical/` with the next `T`-prefixed zero-padded numeric prefix, such as `T001-storage-architecture.md`.
- Name new user-story specs in `docs/specs/user-stories/` with the next `US`-prefixed zero-padded numeric prefix, such as `US001-create-custom-list.md`.
- Record every completed project change in `docs/changelogs/CHANGELOG.md`, even when it only affects one zone. Add related detail entries under the most relevant subsection in each affected zone changelog: `FEATURES.md`, `TECHNICAL.md`, `UI.md`, or `PREVIEWS.md`. Do not remove earlier changelog entries when a feature, preview, spec, or implementation is later removed; add a new removal entry instead so the project history stays intact.
- Keep generated folders such as `.next/`, `node_modules/`, and build output out of source changes.

## Product Direction

This project is being prepared as a starter workspace for an OvenBreak-themed to-do/list website. Treat the specs as the source of truth once they are filled in. Until then, implement conservatively and avoid hard-coding assumptions about game data, account systems, or asset usage.
