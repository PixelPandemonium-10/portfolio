# Motion Portfolio

A responsive, animation-ready portfolio starter built with Next.js, TypeScript, and Motion. It is configured for deployment on Vercel.

## Run locally

Use Node.js 22 or newer:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize

- Replace the sample name, email, location, copy, and project entries in `src/app/page.tsx`.
- Update the page title and description in `src/app/layout.tsx`.
- Adjust the visual system in `src/app/globals.css`.

The starter uses Motion for entrance and scroll animations, and honors the user's reduced-motion preference.

## Deploy to Vercel

1. Push this project to a Git provider and import the repository at [vercel.com/new](https://vercel.com/new), or install the Vercel CLI and run `vercel`.
2. Keep the detected **Next.js** framework and default build settings.
3. Deploy. Vercel will build the project with `npm run build`.

The included `vercel.json` marks the project as Next.js. No environment variables or backend services are required for this starter.
