# AGENTS.md

## Repository Overview

- Project name: `Finoverse Design`
- Stack: Next.js (App Router, TypeScript), React, Tailwind tooling
- Purpose: Host and ship the web effector UI as a deployable Next.js app for Vercel.

## Key Architecture

- `public/index2.html`: Primary single-file web effector app (HTML/CSS/JS).
- `src/app/page.tsx`: Renders `public/index2.html` fullscreen via `iframe`.
- `src/app/layout.tsx`: Global metadata (title, favicon, Open Graph/Twitter).
- `public/logo.svg`: Brand logo used in the effector header.
- `public/favicon.svg`: Site favicon.
- `src/app/favicon.ico`: Browser favicon file (generated from brand favicon).
- `public/social-preview.png`: Social preview image for Open Graph/Twitter cards.

## Brand And UI Rules

- Product name must remain `Finoverse Design` (not `Tonemaker`).
- In `public/index2.html`, the sidebar top logo section and bottom export section must stay fixed:
  - Top: header with `logo.svg`.
  - Bottom: export actions (`SVG`, `PNG`, `MP4`).
  - Only the middle controls area is scrollable.
- Keep the visual style dark, minimal, and consistent with the current UI.

## Metadata Rules

- Keep favicon mapped to `/favicon.svg`.
- Keep `src/app/favicon.ico` aligned with the current brand favicon.
- Keep social preview mapped to `/social-preview.png` (1200x630).
- Keep Open Graph and Twitter metadata in sync with the current brand name.

## Development Commands

- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Contribution Guidelines

- Prefer minimal, targeted changes.
- Do not rewrite the whole `public/index2.html` unless required.
- Preserve existing export behavior (SVG/PNG/MP4 flows).
- Validate after edits with `npm run lint` and `npm run build`.
