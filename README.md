# Vamsi Krishna — React + Vite Portfolio

A simple, responsive student developer portfolio built with React, Vite, and CSS.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for the selected Vite 6 setup; if npm reports engine requirements, install a supported current LTS release.
- npm

## Run locally
1. Extract this project folder.
2. Open the folder in VS Code.
3. Open the terminal in the project root (the folder containing `package.json`).
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (typically `http://localhost:5173`).
6. Before publishing, verify all links and content.

## Build and test production output
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Personalize before publishing
- In `src/App.jsx`, set `LINKEDIN` to your actual LinkedIn profile URL.
- Replace the Login Validation project link (`href: GITHUB`) with the exact public repository URL when available.
- Verify every project claim and make sure the public repository contains the described implementation.
- Project illustrations are CSS mockups, not screenshots of your running projects. Replace them with actual screenshots if possible.
- Replace `public/assets/Vamsi_Krishna_Resume.pdf` when your resume is updated.

## Publish using GitHub Pages
This Vite app can be published to GitHub Pages. For a beginner-friendly option, use Netlify or Vercel import from GitHub; they detect Vite automatically. For GitHub Pages, configure the Vite `base` path to match the repository name if deploying to a project site, then set the GitHub Actions Pages workflow as documented by Vite/GitHub Pages.

## Notes
- TypeScript, automated testing, WebSockets, and performance optimization are not claimed as current skills.
- The page uses Google Fonts from an external stylesheet; the system font stack remains as fallback.
