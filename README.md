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

### 1. Create the repo on Louella's account (her, in a browser)

- Log into github.com as Louella, go to https://github.com/new
- Repository name: `louella.art` · visibility: **Public**
- Leave every "initialize" checkbox **unchecked** (no README, no .gitignore,
  no license) — we're pushing an existing project into an empty repo.

### 2. Add Dad as collaborator (her)

- In the new repo: **Settings → Collaborators → Add people** → `mattcflynn`
- Dad accepts the invite (email link, or https://github.com/notifications)

### 3. Account hygiene while she's logged in

- **Settings → Password and authentication** → enable two-factor auth
- **Settings → Emails** → check **"Keep my email addresses private"** and
  **"Block command line pushes that expose my email"** — keeps her email out
  of commit metadata, consistent with the first-name-only rule.

### 4. Push this project (Dad, in this folder)

```sh
git remote add origin https://github.com/HER-USERNAME/louella.art.git
git branch -M main
git push -u origin main
```

(Or ask Claude — the commit is already made.)

### 5. Netlify

- Go to https://app.netlify.com → **Sign up with GitHub, using her account**
  (the site is hers; keeps ownership consistent)
- **Add new site → Import an existing project → GitHub** → it will prompt to
  install the Netlify app on her account → grant it access to the
  `louella.art` repo
- Build settings auto-fill from `netlify.toml` — just click **Deploy**.
  In ~2 minutes the placeholder site is live at a `*.netlify.app` URL.

### 6. Point the domain

- In Netlify: **Domain management → Add a domain → `louella.art`**
- Follow Netlify's DNS instructions at the registrar. Simplest: switch the
  domain's nameservers to Netlify's four. Alternative: an A record on the
  apex + a `www` CNAME. HTTPS provisions itself a few minutes after DNS
  resolves.

After this, deploys are automatic: every push to `main` rebuilds the site.
