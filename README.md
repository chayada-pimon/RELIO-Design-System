# RELIO Design System — editable source

This folder is the source of the published RELIO Design System v2 Site. It is a static project; there are no dependencies to install. The newer `RELIO-DESIGN.md` discussed later is not implemented in this published version.

## Open and preview in VS Code

Open this entire folder with **File → Open Folder**. In the VS Code terminal, run:

```powershell
bun run dev
```

Open `http://localhost:3000` in a browser or use **Simple Browser: Show** from the VS Code command palette for a side-by-side preview. If Bun is not installed but Node.js is, run `npm run dev:node`. Save edits and refresh the preview. Microsoft **Live Preview** can also open `index.html` directly with automatic refresh; no terminal is required.

## Edit the site

- `index.html` — document shell, metadata and fonts.
- `style.css` — layout, colours, typography and responsive rules.
- `app.js` — page sections, Thai/English text, drawer and interactions.
- `assets/` — logo, mascots and imagery.
- `RELIO-DESIGN.md` — published v2 document fetched by the detail drawer.
- `docs/RELIO-DESIGN.latest.md` — newer design specification for your next edits; the Site does not use it yet.
- `relio-tokens.css`, `relio-tokens.json` and `tokens.js` — published v2 token files.

The large one-file HTML export was created for direct preview. This multi-file source is easier to maintain. Updating these local files does not update the published Site until it is deployed through its hosting workflow.

## Start a new Git repository

In the folder terminal:

```powershell
git init
git add .
git commit -m "Initial RELIO design system project"
git branch -M main
```

Create an empty repository on GitHub with **no README, .gitignore or licence**, then copy its HTTPS URL and run:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/relio-design-system.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your account name or paste the actual URL from GitHub. Further changes: `git add .`, `git commit -m "Describe change"`, `git push`.
