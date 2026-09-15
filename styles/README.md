# styles/

Split CSS for when `style.css` (currently ~27KB, one file) gets broken up.

- `tokens/` — color, spacing, radius, typography variables (mirrors `relio-tokens.css` / `relio-tokens.json`)
- `base/` — resets, global typography, layout scaffolding
- `components/` — per-component styles, matching the folders under `components/`
