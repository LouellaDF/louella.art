# louella.art

Portfolio site for Louella — animator & graphic novelist. Built with
[Astro](https://astro.build), deployed on Netlify at https://louella.art.

## Adding artwork (folder mode)

**A sketchbook piece** — two files in `src/content/sketchbook/`:

```
2026-07-14-cat-study.jpg    ← the scan (full resolution is fine)
2026-07-14-cat-study.yaml   ← the info card:
```

```yaml
title: Cat Study
date: 2026-07-14
medium: ink on paper
tags: [creatures, ink]
alt: A one-line description of the drawing (required — used for accessibility)
image: ./2026-07-14-cat-study.jpg
portfolio: false   # true = also appears on the Portfolio page
```

**A graphic novel** — one folder in `src/content/novels/`:

```
src/content/novels/my-story/
├── meta.yaml        # title, year, blurb, status, cover, coverAlt
├── cover.jpg
└── pages/
    ├── 01.jpg       # filename order = page order
    ├── 02.jpg
    └── ...
```

Then commit and push — Netlify rebuilds automatically (~1–2 min). Images are
resized, compressed, and EXIF-stripped at build time, so always commit the
best-quality scan you have. Keep original full-res scans backed up outside
this repo too.

The sample content (anything named "sample" or "placeholder") is safe to
delete once real art is in.

## Making it more hand-drawn

See `src/assets/handdrawn/README.md` — decorative elements are swappable
files Louella can replace with her own scanned drawings, one at a time.
Colors and fonts live in `src/styles/global.css` as CSS variables.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server at `localhost:4321`            |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Preview the production build locally      |

## Roadmap

- [x] Phase 1 — scaffold, content collections, base pages, SEO/anti-scraping, Netlify config
- [ ] Phase 2 — import the real back catalog, tag filtering on the Sketchbook
- [ ] Phase 3 — page-turn reader (keyboard/swipe, spreads, resume position)
- [ ] Phase 4 — Keystatic admin (`/admin`) so Louella can publish from the browser
- [ ] Phase 5 — Portfolio PDF export, hand-drawn skin slots, handwriting font (Calligraphr)

## Deploy setup (one-time)

1. Create a GitHub repo on **Louella's account**, add Dad as a collaborator, push this project.
2. On [Netlify](https://app.netlify.com): "Add new site → Import an existing project", authorize the Netlify GitHub app on her account, pick the repo. Build settings are read from `netlify.toml`.
3. Domain settings → add `louella.art`, follow the DNS instructions at the registrar.
