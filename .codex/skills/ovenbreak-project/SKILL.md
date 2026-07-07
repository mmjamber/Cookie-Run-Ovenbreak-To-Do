---
name: ovenbreak-project
description: Project-specific guidance for building the Cookie Run OvenBreak to-do/list website. Use when Codex works in this repository on Next.js app code, UI, catalog/list behavior, Supabase/auth/database work, persistence, static assets, specs, or project documentation for the OvenBreak to-do app.
---

# OvenBreak Project

## Start Here

Read `AGENTS.md` first, then use `docs/specs/G001-index.md` to find the relevant spec before changing behavior. Treat the specs in `docs/specs/` as the source of truth.

## Homepage UI Protection

- Never change the way the homepage looks without explicit confirmation.
- If a prompt implies or requires changes to the Homepage UI, stop and ask: "This request requires changes to the Homepage UI. Do you still want to proceed?"
- Do not edit Homepage UI files, styling, layout, or visual specs until the user confirms.

## Prompt Following And Scope

- Keep changes scoped to the requested task and the relevant specs.
- Preserve user edits and do not revert unrelated changes.
- If a requested change would overwrite or substantially rewrite a section the user appears to have manually edited, ask before changing that section.
- Before adding or changing files under `app/`, create a task plan in `docs/plans/active/` based on the relevant specs. This does not apply to explicitly requested test or preview files that belong under `public/`.
- Record completed project changes in `docs/changelogs/CHANGELOG.md` and the most relevant zone changelog.

## Technical Rules

- Use the app directory in `app/`, static assets in `public/`, and project specs in `docs/specs/`.
- This project uses Next.js `16.2.6`, React `19.2.4`, TypeScript, Tailwind CSS 4, and npm with `package-lock.json`.
- Before writing Next-specific code that may depend on changed APIs, read the matching guide in `node_modules/next/dist/docs/`.
- Keep component structure and durable styling separate. Prefer `app/page.tsx` or extracted components for markup and `app/globals.css` or dedicated CSS files for styling.
- Run `npm run lint` after code changes when feasible.
- Do not touch generated folders such as `.next/`, `node_modules/`, or build output.

## Product Direction

- Do not add official Cookie Run API access unless a future spec or explicit request covers it.
- Use existing repository assets and CSS. Do not generate images for this project.
- Keep source/raw OvenBreak artwork in `assets/ovenbreak images`; copy runtime dependencies into `public/` before referencing them from the app.

## Feature Workflow

1. Read the applicable spec and current implementation.
2. Update or add a feature spec first for large or ambiguous behavior.
3. Implement the smallest scoped change that respects existing patterns.
4. Check responsive UI and asset rendering for visual work.
5. Run lint or explain why it was not run.
