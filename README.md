# Antimaterial

A multilingual brochure website for **Kristiina Salo / Antimaterial**, a Finnish wellness practitioner offering brief therapy, philosophical consultation, singing bowl sessions, and change-security counseling.

**Live site:** [antimaterial.fi](https://antimaterial.fi)

Built from scratch in **plain HTML/CSS/JavaScript** — no framework, no build step, no bundler — including a custom client-side internationalization system.

## Features

- **Custom i18n system, framework-free** — language switching via `data-lang`/`data-active-lang` attributes and CSS visibility toggling, with the active language persisted in `localStorage`. No i18n library, no build-time translation compilation.
- **Three languages** — Finnish, English and Swedish, fully translated across every page.
- **Zero build step** — the entire site is static HTML/CSS/JS, deployable as-is to any static host.
- **Modern image formats** — assets served as `.avif` for smaller payloads and faster loads.
- **SEO fundamentals** — meta tags, Open Graph, Twitter Card, canonical URLs, `robots.txt` and `sitemap.xml`.
- **Responsive design** — dedicated mobile breakpoints and a hamburger navigation menu below 900px.

## Tech stack

`HTML5` · `CSS3` · `Vanilla JavaScript` · `Cloudflare Pages` (hosting)

## Project structure

```
antimaterial/
├── index.html            # Homepage
├── lyhytterapia.html      # Brief therapy
├── stressi.html            # Stress & burnout
├── filosofinen.html         # Philosophical consultation
├── aanimalja.html             # Singing bowl sessions
├── muutosturva.html            # Change-security consultation
├── yhteystiedot.html            # Contact
└── assets/
    ├── css/
    │   ├── main.css          # Variables, reset, shared utilities
    │   ├── nav.css             # Top bar, navigation, dropdown, hamburger
    │   ├── sections.css          # Page section styles
    │   └── mobile.css              # Responsive breakpoints (≤900px)
    ├── js/
    │   └── main.js                 # Language switcher, active-nav highlighting, hamburger menu
    └── img/                          # Images (.avif / .jpg / .svg)
```

## Languages

Three languages supported: **Finnish (fi)**, **English (en)**, **Swedish (sv)**.

- Language is toggled by setting `data-active-lang="fi|en|sv"` on `<body>`.
- Every translatable text element carries a matching `data-lang="fi|en|sv"` attribute; CSS shows/hides the element matching the active language.
- The active language choice is persisted in `localStorage`, so it's remembered across page navigations and future visits.

## Running locally

No build step required — serve the root directory with any static server:

```bash
# Python (no install needed)
python3 -m http.server 8080

# Node (one-off)
npx serve .
```

Then open `http://localhost:8080`.

> Don't open `index.html` directly as a `file://` URL — `localStorage` calls may throw security errors in some browsers.

## Deploying

Deployed on **Cloudflare Pages** with zero build configuration:

1. Push the repo to GitHub.
2. In the Cloudflare Pages dashboard, create a new project pointing to the repo.
3. Build settings: leave blank — no build command, no output directory, it's all static.
4. Deploy.

---

*Client project — full visual design, layout and frontend implementation built from scratch.*
