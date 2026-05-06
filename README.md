# Antimaterial

Static website for **Kristiina Salo / Antimaterial** — lyhytterapia, filosofinen konsultaatio ja äänimaljahoidot.

Built in plain HTML/CSS/JS 

---

## Structure

```
antimaterial/
├── index.html               # Homepage
├── lyhytterapia.html        # Brief therapy
├── stressi.html             # Stress & Burnout
├── filosofinen.html         # Philosophical consultation
├── aanimalja.html           # Singing bowls
├── blogi.html               # Blog (placeholder)
├── yhteystiedot.html        # Contact
└── assets/
    ├── css/
    │   ├── main.css         # Variables, reset, shared utilities
    │   ├── nav.css          # Top bar, navigation, dropdown, hamburger
    │   ├── sections.css     # All page sections
    │   └── mobile.css       # Responsive breakpoints (≤900px)
    ├── js/
    │   └── main.js          # Language switcher, hamburger, scroll animations
    └── img/
        ├── hero.jpg
        ├── welcome.jpg
        └── kristiina.jpg
```

---

## Languages

Three languages supported: **Finnish (fi)**, **English (en)**, **Swedish (sv)**.

- Language is toggled by setting `data-active-lang="fi|en|sv"` on `<body>`
- Text elements carry a matching `data-lang="fi|en|sv"` attribute
- The active language is persisted in `localStorage`

---

## Running locally

No build step required. Serve the root directory with any static server:

```bash
# Python (no install needed)
python3 -m http.server 8080

# Node (one-off)
npx serve .
```

Then open `http://localhost:8080`.

> Do **not** open `index.html` directly as a `file://` URL — `localStorage` calls may throw security errors in some browsers.

---

## Deploying to Cloudflare Pages

1. Push the repo to GitHub / GitLab.
2. In the Cloudflare Pages dashboard, create a new project pointing to the repo.
3. **Build settings:** leave blank (no build command, no output directory — it's all static).
4. Click **Deploy**.

---

## Contact form

`yhteystiedot.html` uses a basic `mailto:` form as a placeholder. For production, replace it with a proper form handler such as:

- [Cloudflare Workers + Email Routing](https://developers.cloudflare.com/email-routing/)
- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)

---

## Adding images

Images are stored locally in `assets/img/`. To download additional images from the original Wix site:

```bash
wget -O assets/img/filename.jpg "<wix-cdn-url>"
```

Then update the `src` attribute or `background-image` URL accordingly.
