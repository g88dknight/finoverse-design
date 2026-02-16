# Finoverse Design

Next.js project that hosts the provided web effector (`index2.html`) for local development and Vercel deployment.

## Stack

- Next.js (App Router, TypeScript)
- React
- Tailwind CSS (available in project, not required by the embedded effector)

## Project Structure

- `public/index2.html` - original web effector file from `/Users/drunkkraken/Downloads/index2.html`
- `src/app/page.tsx` - root route rendering `index2.html` fullscreen
- `src/app/layout.tsx` - app metadata

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build Check

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep defaults:
   - Framework preset: `Next.js`
   - Build command: `next build`
   - Output: `.next`
