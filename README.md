# Developer portfolio

A build-free, one-page portfolio for GitHub Pages. Plain HTML and CSS with a small progressive-enhancement script. No packages or framework required.

## Personalize

Alex Morgan, the biography, technologies, and three projects are sample content. Replace them in `index.html`, along with the title, description, footer, and `hello@example.com` contact address. Project previews are illustrative interface studies, not screenshots of real projects. Add real repository or live-demo links within each project when you have them; no fake links are included.

Palette, fonts, spacing, and motion are in `styles.css`. Fraunces and DM Sans load from Google Fonts; Georgia and Arial work as fallbacks if offline. For a fully self-hosted site, download the fonts with their licenses and replace the CSS import with local `@font-face` rules.

## GitHub Pages

1. Copy `index.html`, `styles.css`, `script.js`, and `.nojekyll` into the root of your GitHub repository (or its `docs/` folder).
2. Commit and push the files.
3. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select your branch and the folder containing `index.html`, then save.

Relative asset paths support both `username.github.io` and `username.github.io/repository/`. No build step is needed. This deliverable has not been published to a GitHub account.

## Preview

Open `index.html` directly, or serve this folder with `python3 -m http.server 8000` and open `http://localhost:8000`.

The page includes semantic landmarks, a keyboard skip link, visible focus states, responsive layouts, and reduced-motion support. Content is visible without JavaScript.
