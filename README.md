# DFMA Buddy — Landing Page

Static marketing site for **DFMA Buddy**, a SOLIDWORKS add-in that catches and auto-fixes manufacturability issues while engineers are still designing. Built with Astro + Tailwind CSS, deployable to Vercel as a zero-config static site.

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

`dist/` is the static output — drop it on any static host.

## Deploy to Vercel

Two options:

1. **vercel.com**: import this repo on [vercel.com/new](https://vercel.com/new). Vercel auto-detects Astro; no config needed.
2. **CLI**: install the Vercel CLI (`npm i -g vercel`) and run `vercel` in the project root.

## Swap in the screenshot

The hero uses a placeholder. Drop a real screenshot at `public/screenshot-pane.png` and the placeholder will pick it up automatically (the markup falls back gracefully if the file is missing).

## CTA

The "Request access" button is a `mailto:` to `request@dfmabuddy.com`. Update the address in `src/pages/index.astro` once the inbox is live.
