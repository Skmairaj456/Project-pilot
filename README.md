# Project Pilot

Premium digital agency website — minimal, editorial, built with React and Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy the contents of `dist/` to your host. For a static host (e.g. Netlify, Vercel), set the publish directory to `dist`.

## Structure

- **Landing (React)** — `index.html` loads the single-page app in `src/`. Sections: Hero, Who We Are, What We Do, Selected Work, How We Work, Trust Signals, CTA, Footer.
- **Other pages** — `contact.html`, `services.html`, `projects.html` remain static HTML and are linked from the main site.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- No extra UI libraries

Typography: Instrument Serif (headings), DM Sans (body). Palette: platinum/cream backgrounds, charcoal text, sand/champagne accents.
