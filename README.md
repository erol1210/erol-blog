# ERØL — personal blog

Notes on building software, in English, Deutsch and Türkçe. Built with [Astro](https://astro.build),
deployed to GitHub Pages on every push to `main`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321/erol-blog/
npm run build      # static site in dist/
```

## Write a post

Posts are Markdown files, one folder per language:

```
src/content/posts/en/<slug>.md
src/content/posts/de/<slug>.md   # same file name = translation of the same post
src/content/posts/tr/<slug>.md
```

```yaml
---
title: The title
description: One or two sentences shown in the index and in link previews.
date: 2026-11-16
tags: [flask, notes]
draft: false        # true = only visible in `npm run dev`
---
```

The language switcher links translations automatically when the file names match.

## The fingerprint

Every post gets a drawing generated from SHA-256 of its file name, walked by the
"drunken bishop" algorithm OpenSSH uses for key randomart (`src/lib/fingerprint.ts`).
Renaming a post's file changes its drawing; editing its title does not.

## Project images (`src/assets/work/`)

No image on this site shows real people, real servers or real customer data.

- **Real app · invented data** — the app's own screens, never real people or customer data:
  - ERØL Finance, ERØL Tasks, mePlanner: run locally against a throwaway SQLite database filled by
    each project's seed script (fictional names, `.example` e-mails).
  - FF: the real React build, with its API answered by an invented, internally consistent fixture set.
  - Treffy: the real Flutter UI built for web from a screenshot-only entry point whose repositories
    return in-memory sample data; it never talks to Supabase.
  - QR Yoklama: the real Flask templates rendered with invented courses and students.
  - Toplu Mail: the real Textual app on an isolated copy with sample campaigns; nothing is sent.
  - Heimdall: the live panel, read-only, with every server name, player name, chat message and
    community figure replaced by invented values in the page before the screenshot.
- **Mock · invented data**: the SquadJS plugins, redrawn as a terminal log.

Each project shows its screenshots in a swipeable gallery; clicking one opens a full-screen viewer.

Project data and captions live in `src/data/projects.ts`.

## CV (`/cv`)

The CV page reads `src/data/cv.json` (EN/DE/TR). The downloadable PDFs live in `public/cv/`:
`erol-yilmaz-cv-en.pdf` and `-tr.pdf` are the originals; `-de.pdf` is a German translation laid out
to match them (A4, Calibri). When the CV changes, update `cv.json` and replace the PDFs together.

## Design tokens

| Token | Light | Dark |
|---|---|---|
| paper | `#e4e2ea` | `#13101e` |
| ink | `#1a1530` | `#ece8f5` |
| pen (magenta) | `#c8106f` | `#ff5aae` |
| cobalt (links) | `#2335c8` | `#9aa6ff` |

Type: Funnel Display (headlines), Newsreader (reading), Martian Mono (labels), all self-hosted via Fontsource.

## Custom domain

Set `site` in `astro.config.mjs` to the domain, remove `base`, and add the domain under
the repository's Settings → Pages.
