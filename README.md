# OvenBreak To-Do List

Starter Next.js workspace for an OvenBreak-themed to-do/list project.

## Getting Started

Install dependencies if needed:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Start editing the website in `app/page.tsx`. Product specs live in `docs/specs/`; implementation plans live in `docs/plans/`.

## Project Docs

- `AGENTS.md` - shared agent instructions for Codex and other coding assistants
- `CLAUDE.md` - Claude-specific entry point
- `CODEX.md` - Codex-specific entry point
- `CHANGELOG.md` - notable project changes
- `docs/specs/G001-index.md` - index of project specs and naming rules
- `docs/specs/G002-rules.md` - universal rules, terminology, and constraints
- `docs/specs/G003-global-spec.md` - product goals and feature scope
- `docs/specs/G004-functional-map.md` - pages, user flows, and feature areas
- `docs/specs/G005-data-model.md` - starter domain model
- `docs/specs/G006-ui-index.md` - interface and visual direction
- `docs/plans/` - active and completed implementation plans

## Scripts

- `npm run dev` - start the local development server
- `npm run lint` - run ESLint
- `npm run build` - build the production website
- `npm run start` - run the built website

## Notes

Runtime assets used by the website live in `public/`. Source/raw OvenBreak images and working art files live in `assets/ovenbreak images/` and should be copied or imported into `public/` before the app depends on them at runtime.

This website currently uses:

- Next.js 16.2.6
- React 19.2.4
- TypeScript
- Tailwind CSS 4
