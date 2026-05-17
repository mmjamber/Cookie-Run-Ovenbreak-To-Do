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
- Prefer existing Next.js, React, Tailwind, and TypeScript patterns already in the website.
- Update `docs/specs/` before large implementation work when requirements are unclear.
- Keep generated folders such as `.next/`, `node_modules/`, and build output out of source changes.

## Product Direction

This project is being prepared as a starter workspace for an OvenBreak-themed to-do/list website. Treat the specs as the source of truth once they are filled in. Until then, implement conservatively and avoid hard-coding assumptions about game data, account systems, or asset usage.
