# sections/

Brand/design-system content sections (as opposed to reusable UI components): overview, concept, logo, colors, type, mood, icons, mascot, voice, components (states demo), resources.

Each section exports a single `render*()` function returning its HTML string (e.g. `renderColors()` in `colors.js`). `app.js` imports and concatenates them in `main()`. Shared helpers (`icon`, `sectionHead`, `download`, `downloadFile`) live in `shared.js`; shared app state lives in `../state.js`.
