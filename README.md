# OP Genesis Landing Page

Static-export Next.js landing page for OP Genesis Healthcare Logistics.

## Develop

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build     # static site is written to out/
npm run preview   # serves out/ at http://localhost:3000
```

`npm run check` runs lint, type-check and build together (the same steps CI runs on `main`).

## Project layout

- `app/` – page, layout (metadata + JSON-LD), icons, social image, robots/sitemap
- `components/` – `Photo` (responsive WebP images), `MobileMenu`
- `lib/content.ts` – shared business details and FAQ (used by both the page and structured data)
- `assets/source-images/` – original PNGs (not shipped)
- `public/images/` – optimized WebP files generated from the sources

## Images

Edit or add originals in `assets/source-images/`, then regenerate the WebP variants, icons and social image:

```bash
npm run images
```
