# RELIO — Design System

Brand and interface guide for CRM / OMS · Revision 2

## Overview

Connect customers and orders through a caring, friendly and clear system.

Caring · Friendly · Connected

## Colors and roles

Aqua #28C6CD represents CRM; Blue #1463D6 represents OMS. Canvas, text and borders are neutral. Do not tint the entire page with brand colors.

| Token | Light | Dark |
|---|---|---|
| --bg-canvas | #F7F8FA | #18191B |
| --bg-surface | #fff | #222427 |
| --bg-raised | #F0F2F5 | #2D3035 |
| --text-primary | #202124 | #F5F6F7 |
| --text-secondary | #525866 | #C2C7D0 |
| --text-muted | #626B78 | #A0A8B4 |
| --border-default | #D8DDE5 | #41464F |
| --border-control | #7D8592 | #7D8592 |
| --brand-crm | #28C6CD | #28C6CD |
| --brand-oms | #1463D6 | #1463D6 |
| --crm-bg | #E9FAFB | #193437 |
| --crm-fg | #086B73 | #63DCE2 |
| --oms-bg | #EDF4FF | #1E2E48 |
| --oms-fg | #1463D6 | #8DBBFF |
| --action-primary | #1463D6 | #1463D6 |
| --action-primary-hover | #0F4FAE | #0F4FAE |
| --action-on-primary | #fff | #fff |
| --link | #1463D6 | #8DBBFF |
| --focus-ring | #1463D6 | #8DBBFF |
| --status-success | #18734A | #78D9A2 |
| --status-warning | #8A4B08 | #F2C46D |
| --status-danger | #B42318 | #FFA49B |

## Typography

Bai Jamjuree · 400 / 500 / 600 / 700
Body 16px / 1.65; Thai letter-spacing: 0; headings 24–48px with room for tone marks. Use tabular-nums for numbers.

## Components

- Primary buttons are blue with white text; hover #0F4FAE. Secondary buttons are neutral.
- CRM uses crm-bg/crm-fg; OMS uses oms-bg/oms-fg.
- General icons and text are neutral.
- Inputs have labels and actionable validation.
- Pair status colors with labels; never rely on color alone.

## Spacing and shapes

Base 4px; spacing 8/12/16/24/32/48/64px. Specimen radii: pill buttons, 12px input, 14px icon tile, 16px stat tile, 20px card, 24px panel. Documentation controls use an independent 8px radius.

## Language and theme

Thai/English is independent from Light/Dark. Store preferences on this device. Keep token names, HEX values, filenames and URLs unchanged. Dark mode uses neutral charcoal and no shadows.

## Mascots and logo

Use the original assets: large aqua CRM and smaller blue OMS on its right. Preserve approved faces, proportions, colors and lighting. Do not redraw the characters or logo. Side/back views are 3D references, not decorative poses.

PNG assets are raster; the logo SVG is vector. PNG dimensions reflect the original files; not all are high-resolution.

## Voice

Warm · Clear · Helpful
Use short, specific messages with a next step. Example: “Customer saved. You can add an order now.”

## Accessibility

Normal text contrast at least 4.5:1; meaningful control boundaries 3:1; focus 2px with 2px offset; key touch targets 44px; respect reduced motion. Raw Aqua is not small text on white.

## Resources

- [Phosphor Icons](https://phosphoricons.com/)
- [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree)
- [Refero reference](https://styles.refero.design/style/9946887b-ffa9-4276-af81-ae6352795afb)

## CSS

```css
:root {
  --bg-canvas: #F7F8FA;
  --bg-surface: #fff;
  --bg-raised: #F0F2F5;
  --text-primary: #202124;
  --text-secondary: #525866;
  --text-muted: #626B78;
  --border-default: #D8DDE5;
  --border-control: #7D8592;
  --brand-crm: #28C6CD;
  --brand-oms: #1463D6;
  --crm-bg: #E9FAFB;
  --crm-fg: #086B73;
  --oms-bg: #EDF4FF;
  --oms-fg: #1463D6;
  --action-primary: #1463D6;
  --action-primary-hover: #0F4FAE;
  --action-on-primary: #fff;
  --link: #1463D6;
  --focus-ring: #1463D6;
  --status-success: #18734A;
  --status-warning: #8A4B08;
  --status-danger: #B42318;
  color-scheme: light;
}

[data-theme="dark"] {
  --bg-canvas: #18191B;
  --bg-surface: #222427;
  --bg-raised: #2D3035;
  --text-primary: #F5F6F7;
  --text-secondary: #C2C7D0;
  --text-muted: #A0A8B4;
  --border-default: #41464F;
  --border-control: #7D8592;
  --crm-bg: #193437;
  --crm-fg: #63DCE2;
  --oms-bg: #1E2E48;
  --oms-fg: #8DBBFF;
  --link: #8DBBFF;
  --focus-ring: #8DBBFF;
  --status-success: #78D9A2;
  --status-warning: #F2C46D;
  --status-danger: #FFA49B;
  color-scheme: dark;
}
```
