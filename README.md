# chhaati 🏋️ — your pocket gym coach

> **chhaati** (छाती) = *chest*. Live at [chhaati.github.io](https://chhaati.github.io/)

A beginner-friendly gym tracker that runs entirely in the browser. No accounts, no servers,
no build step — perfect for GitHub Pages.

## Features

- **140-exercise library** with animated demos (SVG "GIFs"), organized by Chest / Back /
  Legs / Shoulders / Arms / Core / Cardio, filterable by equipment.
- **Exercise of the Day** — learn one new movement daily; track how many you've mastered.
- **Weight memory** — logs every set; next time you open a machine it pre-fills your last
  weights and suggests progressive overload ("you hit 12 reps — try +2.5 kg").
- **PR detection** with confetti 🎉, per-exercise progress charts.
- **History** — training calendar with muscle-group dots, weekly volume chart, lifetime stats.
- **Goals** — target lifts, weekly frequency, exercises-learned, or custom counters.
- **Rest timer** with presets, beep + vibration.
- **Dark mode by default** (light mode available), kg/lb units, plate calculator for barbells.
- **Backups** — export/import your data as JSON (keep the file locally or in Google Drive).
- **Offline PWA** — installable on your phone; works with no signal at the gym.

All data is stored in `localStorage` on your device.

## Run locally

Any static file server works:

```bash
python -m http.server 8123
```

Then open http://localhost:8123

## Deploy to GitHub Pages

1. Create a repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "chhaati gym app"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
3. Your app is live at `https://<you>.github.io/<repo>/`. All paths are relative, so it
   works from a sub-path out of the box.

## Project layout

```
index.html          app shell
css/style.css       design system (dark default + light theme)
js/store.js         localStorage data layer, export/import, stats
js/app.js           views, exercise modal, logger, timer, goals
data/exercises-*.js exercise database (7 muscle groups, animated SVGs)
sw.js               offline cache (PWA)
manifest.json       installable app manifest
```

## Backing up

Settings → **Export JSON** downloads `ironlog-backup-YYYY-MM-DD.json`. Keep it anywhere
(e.g. your Google Drive). **Import JSON** restores it on any device — choose *merge* or
*replace*.
