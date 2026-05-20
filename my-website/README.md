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

Start editing the website in `app/page.tsx`. Project planning docs live in `docs/specs/`.

## Project Docs

- `AGENTS.md` - shared agent instructions for Codex and other coding assistants
- `CLAUDE.md` - Claude-specific entry point
- `CODEX.md` - Codex-specific entry point
- `docs/specs/index.md` - index of project specs
- `docs/specs/global-spec.md` - product goals and feature scope
- `docs/specs/rules.md` - universal rules, terminology, and constraints
- `docs/specs/ui-spec.md` - interface and visual direction
- `docs/specs/data-model.md` - starter domain model

## Scripts

- `npm run dev` - start the local development server
- `npm run lint` - run ESLint
- `npm run build` - build the production website
- `npm run start` - run the built website

## Notes

The sibling folder `../ovenbreak images` is intentionally out of scope for this setup pass. Do not depend on it until the project explicitly adopts those assets.

This website currently uses:

- Next.js 16.2.6
- React 19.2.4
- TypeScript
- Tailwind CSS 4
