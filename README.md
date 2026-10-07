# Agent Pulse

Autonomous market intelligence, built from the Agent Echo narrative with a new green identity.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The build outputs to `dist/` and generates a self-contained `index.html` in the repository root. JavaScript, CSS, images, and the favicon are embedded so the page also works when opened directly from your computer. Google Fonts is optional and uses system font fallbacks when offline. Edit `src/index.html`, `src/main.jsx`, and `src/styles.css`, then run `npm run build` to refresh the published file. The root `index.html` is generated, so do not edit it directly.

## GitHub Pages

Upload the root `index.html` and `.nojekyll` to your repository. In Settings → Pages, select **Deploy from a branch**, choose your branch, and select **/ (root)**. No server or build step is needed on GitHub for this option. The index does not require an accompanying assets folder.

Alternatively, select **GitHub Actions** in Settings → Pages to use the included workflow, which builds and deploys `dist/` on pushes to `main`.

Relative asset paths support both repository Pages URLs and custom domains. You can also upload the contents of `dist/` to any static web host.

## Brand

- Forest background: `#06100c`
- Mint accent: `#75edac`
- Forest text accent: `#226b43`
- Light background: `#f0f5ef`
- Logo: `public/agent-pulse-logo.svg`
- Social logo: `public/agent-pulse-social-logo.svg`

The site preserves intelligence features, the listen/interpret/decide/execute loop, access/alignment/governance utility and the three roadmap phases. The new brand uses `$PULSE` throughout. Existing landscape art is tinted green in CSS. Social and access buttons retain the original section links; add production destinations when available.
