# CRM Center — RELIO Design System v3

> ระบบเดียว คุมได้ทั้งร้าน (CRM + OMS)

Document version: 3.0 · Synced from the CRM Center portal code (feat/crm-center-portal) · 28 September 2026
Live design system: https://claude.ai/artifact/BAV9vXJmr9krq2EEx8ytfx
Previous version: RELIO-DESIGN.md (v2, archive)

## Overview

CRM Center is the admin portal of RELIO: one place where a Thai shop's team manages customers, orders, loyalty points and sales-channel integrations. Brand line: **ระบบเดียว คุมได้ทั้งร้าน** (CRM + OMS). This is version 3 of the RELIO design system. It keeps the v2 neutral tokens for content and adds the portal's blue chrome, Noto Sans Thai, and a floating content panel.

## What changed from v2

| Area | v2 (RELIO app) | v3 (CRM Center portal) |
|---|---|---|
| Frame | Neutral page, neutral sidebar | Blue radial backdrop (`portal-blue-100` → `portal-blue-300`) with a 56px white grid; the sidebar sits on it and content floats on `bg-canvas` as a panel with `shadow-panel` |
| Font | Bai Jamjuree | Noto Sans Thai (`sans`); Bai Jamjuree stays for RELIO brand only |
| Gradients | Not allowed | Allowed in exactly three places: the sidebar/backdrop, the login illustration, the dashboard hero (`brand-gradient-from` → `brand-gradient-to`). Never on cards, buttons or tables |
| Active nav | Raised neutral + brand label | White pill fading right, `portal-mark` label (`brand-crm-text` on CRM pages), `shadow-nav-active` |
| Mascots | Floating 4px max | Floating 10px over 6s (`portal-float`), with a soft blue drop shadow, on blue grounds only |
| Button press | No scale | `scale(0.97)` on press; disabled under reduced motion |

## Content fundamentals

- Thai is the interface language. English stays for product names and standard terms (Dashboard, API key, Mapping).
- Say the result first, then the next step: "บันทึกลูกค้าแล้ว สร้างออเดอร์ต่อได้เลย".
- Name buttons by outcome, 1 to 4 words: "บันทึกลูกค้า", "ดูคำสั่งซื้อ", "เพิ่มผู้ใช้งาน". Never "ตกลง" or "Submit".
- A secondary "cancel" in a confirm dialog reads "ไม่ใช่ตอนนี้".
- Every page header has one sentence saying what the page is for, in `lead`, max 66ch.
- Errors say what happened and how to fix it: "อีเมลหรือรหัสผ่านไม่ถูกต้อง ลองตรวจสอบอีกครั้ง". Never show error codes.
- Empty states explain why and what to do: "บัญชีนี้ยังไม่ได้ผูกกับบริษัท" + one sentence. Never "ไม่พบข้อมูล" alone.
- No emoji, no exclamation marks in system copy (the dashboard greeting is the one exception).

## Visual foundations

**Layout.** The shell is full-height (`h-svh`). From 1024px (lg) a 240px sidebar sits on the blue backdrop; the content panel beside it holds a 64px top bar (company switcher, theme, notifications, avatar) and a scrolling `main` with content max 1320px. Gutters: `space-4` mobile, `space-6` md, `space-8` xl. Below lg the sidebar becomes a drawer: 260px, inset 8px, `radius-xl`, `scrim` behind.

**Colour.** Content is neutral: `bg-canvas` behind, `bg-surface` cards, `text-primary`/`text-secondary`/`text-quiet` for text, `border-default` hairlines. Blue belongs to the chrome and the one primary action (`action-primary-bg`). CRM context uses Aqua (`crm-badge-bg` + `crm-badge-text`, `brand-crm-text`); OMS context uses `oms-badge-bg` + `oms-badge-text`. `accent-warm-ui` stays under 2% of a view.

**Sidebar.** Rows are 40px min, `radius-md`, `label` type, 18px Phosphor icon. Idle: `on-portal` at 90%; hover: a white 15%→0% horizontal wash and the icon nudges 2px right. Section headings: `caption` 600, white 75%. Groups collapse with a caret and open by themselves when they hold the current page; a collapsed group with alerts shows a small red dot.

**Type.** One family, `sans`, weights 400/500/600. Headings are 600. Thai letter-spacing is 0 and line-height is 1.55 or more for body. Numbers in stats, money and order IDs use `tabular-nums`.

**Shape.** Radius follows size: inputs `radius-sm`, buttons and menu rows `radius-md`, cards and tables `radius-lg`, modals and the hero `radius-xl`, chips/tabs/icon buttons `radius-pill`.

**Borders and shadows.** Cards are flat: `bg-surface` + 1px `border-default`, no shadow. Shadows only for layers that float: `shadow-dropdown`, `shadow-popover`, `shadow-modal`. A clickable card lifts 2px with `shadow-card-hover`.

**States.** Focus is always visible: 2px `focus-ring`, 2px offset. Status is never colour alone: every Tag and Alert carries its Phosphor icon (CheckCircle, WarningCircle, XCircle, Info). Touch targets are 44px (buttons `md`, icon buttons, inputs); dense rows may be 40px.

**Motion.** Page blocks rise 10px in over `duration-rise`, 60ms apart; grid cards cascade 50ms apart; table rows fade in 30ms apart. Hovers use `duration-fast`. Overlays fade and zoom from 95% over `duration-overlay`. All motion drops to near zero under `prefers-reduced-motion`.

**Imagery.** The CRM + OMS mascots standing on a laptop (see Illustrations) float on the login illustration and bottom-right in the dashboard hero (240px, lg only). Put them on blue grounds with the glow image behind; never inside cards, buttons or tables.

## Iconography

Phosphor Icons (`@phosphor-icons/react`), Regular weight by default; Bold for the active nav row, checks and tag icons; Fill only for alert icons. Sizes: 14 (tags, carets), 16 (inline), 18 (nav, search), 20 (buttons, top bar), 32 (empty states). Icon-only buttons always have an `aria-label` in Thai. Core icons: SquaresFour (Dashboard), UsersThree (ลูกค้า), Receipt (คำสั่งซื้อ), Gift / Coins (สิทธิประโยชน์), Plugs (การเชื่อมต่อ), GearSix (ตั้งค่า), Bell, Moon/Sun, MagnifyingGlass, SignOut.

The component previews on this page use simplified stand-in icons drawn at the same stroke weight, because the preview frame cannot load the Phosphor package. In product code, always import from `@phosphor-icons/react`.

## Logo

The portal logo is a 32px `radius-lg` tile with the letters "CC" (11px, 600) followed by "CRM Center" in `brand-name`. On blue: white tile, `portal-mark` letters, white wordmark. On light: `portal-mark` tile, white letters, `text-primary` wordmark. It is drawn in code; there is no file.


---

# Design prompt

Paste this into any AI design or coding tool (Claude, v0, Figma Make, Lovable) before describing the screen you want. Then add one line: which page, who uses it, and the one thing they need to do there.

## English (recommended for AI tools)

```text
You are designing a screen for CRM Center, the Thai admin portal of RELIO (CRM + OMS for Thai shops: customers, orders, loyalty points, sales-channel integrations). Follow the CRM Center design system v3 exactly.

FRAME
- Full-height app shell. From 1024px: a 240px sidebar sits directly on a blue radial backdrop
  radial-gradient(120% 90% at 50% 0%, #2f6ee0 0%, #1d59cc 50%, #1546ad 100%)
  with a faint 56px white grid (6% opacity, masked to fade out). No sidebar card; the menu is on the blue.
- Content floats beside it as a panel on #f7f8fa with shadow -20px 0 60px -20px rgba(10,40,120,.45).
  Top bar 64px: company switcher (Select with a Buildings icon, 240px), then right-aligned 44px round icon buttons (theme, bell) and an avatar pill.
- Main content max-width 1320px, gutters 16 / 24 / 32px (mobile / md / xl).
- Below 1024px the sidebar becomes a left drawer: 260px, 8px inset, 24px radius, dark scrim behind.

SIDEBAR
- Logo: 32px white tile with "CC" in #1450cc, then "CRM Center" 17px/600 white.
- Section headings 12px/600 white at 75%: ภาพรวม, ลูกค้าและการขาย, ผู้ดูแลระบบ.
- Rows 40px, radius 10px, 14px/500, 18px Phosphor icon. Idle white 90%; hover a white 15%→0% wash and the icon nudges 2px right.
- Active row: white pill fading to 80% on the right, label #1450cc (Deep Aqua #087f8c on CRM pages), bold icon, shadow 0 8px 20px -8px rgba(10,40,120,.5).
- Collapsible groups with a caret; a red count badge for items that need attention.

CONTENT
- Neutral only: canvas #f7f8fa, surface #ffffff, raised #f0f2f5, hover #e7eaf0, border #d8dde5 (1px), control border #747d8a.
- Text #202124 / #525866 / quiet #667080. Font: Noto Sans Thai 400/500/600 only, Thai letter-spacing 0, body line-height ≥1.55, tabular numbers for money, counts and order IDs.
- Page header: title 30px/600 (26px mobile) + one sentence in 15px #525866, max 66ch; actions right.
- Cards: white, 1px border, radius 16px, padding 24px, NO shadow. Stat tiles: 14px/500 label, 36px icon chip radius 10px, 26px/600 figure, 12px note.
- Tables: inside a 16px-radius bordered box; header row #f0f2f5 13px/500; cells 14px, 14px vertical padding. On mobile collapse to cards.
- Tabs: pill segmented control, border, active tab #f0f2f5.
- Dashboard only: a hero card radius 24px with radial-gradient(140% 170% at 0% 0%, #e1ecff 22%, #1463d6 100%) and the white grid, greeting 36px/600, mascots floating bottom-right.

COLOUR MEANING
- One filled primary button per group: #1463d6, white 14px/500 label, radius 10px, min-height 44px, hover #1158be, pressed #0d4daa + scale .97.
- Secondary: white with #747d8a border. Ghost: text only. Danger: red text on white, filled #b42318 only in a delete confirmation.
- CRM context = Aqua (soft #ddf7f8, text #076f7a). OMS context = Blue (soft #e1ecff, text #1463d6). Orange #fc9433 under 2% of the view.
- Status chips are 28px pills with an icon, never colour alone: success #ddf5e8/#18734a + CheckCircle, warning #fff0d0/#8a4b08 + WarningCircle, error #ffe4e1/#b42318 + XCircle, info #e1ecff/#1463d6 + Info.

DETAILS
- Inputs 44px, radius 8px, 1px #d8dde5, focus border #1463d6 + 2px ring at 2px offset. Labels 14px/500 above, hint or error (with icon) below.
- Floating layers only get shadows: dropdown, popover (radius 16px), modal (radius 24px, 24px padding, footer divided by a border).
- Icons: Phosphor Regular (Bold when active). No emoji.
- Motion: blocks rise 10px in over 480ms, staggered 60ms; hovers 120ms; respect prefers-reduced-motion.
- Provide a dark theme: canvas #18191b, surface #222427, raised #2d3035, border #41464f, text #f5f6f7 / #c2c7d0 / #a0a8b4, sidebar blues #1f4fa8 → #173e8a → #0e2c66.

COPY
- Thai UI. Buttons name the outcome in 1 to 4 words (บันทึกลูกค้า, ดูคำสั่งซื้อ), never ตกลง or Submit. Result first, then the next step. Errors say how to fix. Empty states: icon tile, one heading, one sentence, one action.
- Use realistic Thai shop data (names, ฿ amounts, Shopee / Lazada / LINE channels), never lorem ipsum.

AVOID
Gradients outside the sidebar, login and dashboard hero; glassmorphism; neon glow; shadows on ordinary cards; coloured left-border cards; more than one primary button per group; mixed icon sets; all-caps as the only hierarchy.
```

## ภาษาไทย (สรุปสั้น)

```text
ออกแบบหน้าจอสำหรับ CRM Center พอร์ทัลแอดมินของ RELIO (CRM + OMS สำหรับร้านค้าไทย) ตาม Design System v3

- โครง: เมนูซ้ายกว้าง 240px วางบนพื้นหลังสีน้ำเงินไล่แบบ radial (#2f6ee0 → #1d59cc → #1546ad) มีตารางเส้นขาวจาง 56px ส่วนเนื้อหาเป็นแผงลอย สีพื้น #f7f8fa แถบบนสูง 64px (เลือกบริษัท, ปุ่มธีม, กระดิ่ง, รูปโปรไฟล์)
- เมนู: แถวสูง 40px มุม 10px ตัวอักษรขาว 90% เมนูที่เลือกอยู่เป็นแคปซูลสีขาว ตัวอักษร #1450cc
- เนื้อหา: ใช้สีกลางเท่านั้น การ์ดสีขาว เส้นขอบ 1px #d8dde5 มุม 16px ไม่มีเงา
- ฟอนต์ Noto Sans Thai น้ำหนัก 400/500/600 หัวข้อหน้า 30px ตัวเลขใช้ tabular-nums
- ปุ่มหลักสีน้ำเงิน #1463d6 หนึ่งปุ่มต่อกลุ่ม สูงอย่างน้อย 44px มุม 10px
- CRM ใช้สี Aqua (#ddf7f8 / #076f7a) OMS ใช้สีน้ำเงิน (#e1ecff / #1463d6)
- ป้ายสถานะเป็นแคปซูลที่มีไอคอนเสมอ ไม่สื่อด้วยสีอย่างเดียว
- ไอคอน Phosphor ห้ามใช้อีโมจิ
- ข้อความ: บอกผลลัพธ์ก่อน แล้วบอกขั้นต่อไป ปุ่มบอกสิ่งที่จะเกิด ห้ามใช้ "ตกลง"
- ไล่สีได้เฉพาะเมนูซ้าย หน้า login และ hero ของ Dashboard เท่านั้น
- รองรับธีมมืด: พื้น #18191b การ์ด #222427 เส้นขอบ #41464f
```


---

## Tokens (tokens.json)

```json
{
  "name": "CRM Center",
  "version": 3,
  "meta": {
    "source": "code",
    "repo": "local: CRM (branch feat/crm-center-portal)",
    "paths": {
      "tokens": ["app/globals.css"],
      "components": ["components/portal/ui.tsx", "components/portal/shell.tsx", "app/portal/login/page.tsx", "app/portal/(app)/page.tsx"],
      "assets": ["public/portal/login-mascots.webp", "public/portal/login-glow.webp"]
    },
    "synced": "2026-09-28"
  },
  "color": {
    "themes": [
      { "id": "light", "name": "Light" },
      { "id": "dark", "name": "Dark" }
    ],
    "tokens": [
      { "name": "bg-canvas", "value": { "light": "#f7f8fa", "dark": "#18191b" }, "usage": "Content panel and page background (the white-ish panel that floats beside the blue sidebar)." },
      { "name": "bg-surface", "value": { "light": "#ffffff", "dark": "#222427" }, "usage": "Cards, tables, inputs, popovers, modals and the login form panel." },
      { "name": "bg-raised", "value": { "light": "#f0f2f5", "dark": "#2d3035" }, "usage": "Table header row, selected tab pill, neutral stat-tile icon chip, empty-state icon tile." },
      { "name": "bg-hover", "value": { "light": "#e7eaf0", "dark": "#34383e" }, "usage": "Hover fill for ghost and default buttons, menu rows and icon buttons." },
      { "name": "bg-disabled", "value": { "light": "#eceff3", "dark": "#303238" }, "usage": "Disabled button and input fill; pair with text-disabled." },
      { "name": "text-primary", "value": { "light": "#202124", "dark": "#f5f6f7" }, "usage": "Headings, body copy and cell values on bg-canvas, bg-surface and bg-raised. Also the login submit button fill (inverted)." },
      { "name": "text-secondary", "value": { "light": "#525866", "dark": "#c2c7d0" }, "usage": "Page descriptions, table header labels, supporting sentences on bg-canvas and bg-surface." },
      { "name": "text-quiet", "value": { "light": "#667080", "dark": "#a0a8b4" }, "usage": "Placeholders, hints, metadata, description-list labels on bg-surface. 4.9:1 on white in light." },
      { "name": "text-disabled", "value": { "light": "#aeb5c0", "dark": "#686f79" }, "usage": "Disabled labels only; never for information a person needs to read." },
      { "name": "border-default", "value": { "light": "#d8dde5", "dark": "#41464f" }, "usage": "1px hairline on cards, tables, inputs at rest, dividers." },
      { "name": "border-control", "value": { "light": "#747d8a", "dark": "#858e9c" }, "usage": "Default (secondary) button outline, checkbox outline, input border on hover. Meets 3:1 on bg-surface." },
      { "name": "brand-crm-graphic", "value": { "light": "#28c6cd", "dark": "#5edae0" }, "usage": "CRM Aqua for graphics and mascot-side marks only; too light for text on white." },
      { "name": "brand-crm-text", "value": { "light": "#087f8c", "dark": "#5edae0" }, "usage": "Deep Aqua: CRM-context text and the active sidebar label for CRM pages." },
      { "name": "brand-oms-text", "value": { "light": "#1463d6", "dark": "#75a7ff" }, "usage": "OMS Blue text, links, the user's name in the dashboard greeting." },
      { "name": "action-primary-bg", "value": { "light": "#1463d6", "dark": "#1463d6" }, "usage": "The one filled primary button per action group; checked checkbox; current stepper step." },
      { "name": "action-primary-hover", "value": { "light": "#1158be", "dark": "#1158be" }, "usage": "Primary button hover." },
      { "name": "action-primary-active", "value": { "light": "#0d4daa", "dark": "#0d4daa" }, "usage": "Primary button pressed." },
      { "name": "action-primary-text", "value": { "light": "#ffffff", "dark": "#ffffff" }, "usage": "Label on action-primary-bg (5.1:1)." },
      { "name": "focus-ring", "value": { "light": "#1463d6", "dark": "#75a7ff" }, "usage": "2px solid outline, 2px offset, on every focusable element." },
      { "name": "accent-warm-ui", "value": { "light": "#fc9433", "dark": "#fc9433" }, "usage": "Action Orange: tiny markers and OMS mascot tabs, under 2% of a view. Never body text." },
      { "name": "crm-badge-bg", "value": { "light": "#ddf7f8", "dark": "#12383c" }, "usage": "Soft CRM fill: brand tag, avatar initials, CRM stat-tile icon chip." },
      { "name": "crm-badge-text", "value": { "light": "#076f7a", "dark": "#5edae0" }, "usage": "Text and icons on crm-badge-bg." },
      { "name": "oms-badge-bg", "value": { "light": "#e1ecff", "dark": "#162d50" }, "usage": "Soft OMS fill: OMS stat-tile icon chip and order-context badges." },
      { "name": "oms-badge-text", "value": { "light": "#1463d6", "dark": "#75a7ff" }, "usage": "Text and icons on oms-badge-bg." },
      { "name": "brand-gradient-from", "value": { "light": "#e1ecff", "dark": "#1b3561" }, "usage": "Light centre of the dashboard hero radial (top-left, at 22%). Dark text stays readable here." },
      { "name": "brand-gradient-to", "value": { "light": "#1463d6", "dark": "#0d3f8f" }, "usage": "Outer edge of the dashboard hero radial." },
      { "name": "portal-blue-100", "value": { "light": "#2f6ee0", "dark": "#1f4fa8" }, "usage": "Sidebar and backdrop radial, top stop (0%). White text 4.7:1." },
      { "name": "portal-blue-200", "value": { "light": "#1d59cc", "dark": "#173e8a" }, "usage": "Sidebar and backdrop radial, middle stop (50%; 45% in dark)." },
      { "name": "portal-blue-300", "value": { "light": "#1546ad", "dark": "#0e2c66" }, "usage": "Sidebar and backdrop radial, outer stop (100%)." },
      { "name": "portal-mark", "value": { "light": "#1450cc", "dark": "#1450cc" }, "usage": "CC logo tile fill on light ground; the active sidebar row label (on the white pill)." },
      { "name": "login-sky", "value": { "light": "#8ab8ff", "dark": "#8ab8ff" }, "usage": "Login illustration radial, top stop." },
      { "name": "login-blue", "value": { "light": "#3f86f5", "dark": "#3f86f5" }, "usage": "Login illustration radial, 45% stop." },
      { "name": "login-deep", "value": { "light": "#1655d6", "dark": "#1655d6" }, "usage": "Login illustration radial, outer stop; CC tile text on the login panel." },
      { "name": "on-portal", "value": { "light": "#ffffff", "dark": "#ffffff" }, "usage": "Text and icons on the blue sidebar. Idle rows at 90% opacity, section labels at 75%." },
      { "name": "success-bg", "value": { "light": "#ddf5e8", "dark": "#173526" }, "usage": "Success tag and alert fill." },
      { "name": "success-text", "value": { "light": "#18734a", "dark": "#75d9a2" }, "usage": "Success text and icon on success-bg; always with CheckCircle." },
      { "name": "warning-bg", "value": { "light": "#fff0d0", "dark": "#3d2d16" }, "usage": "Warning tag and alert fill." },
      { "name": "warning-text", "value": { "light": "#8a4b08", "dark": "#ffd18a" }, "usage": "Warning text and icon on warning-bg; always with WarningCircle." },
      { "name": "danger-bg", "value": { "light": "#ffe4e1", "dark": "#421f1e" }, "usage": "Error tag, alert and count-badge fill; danger button hover." },
      { "name": "danger-text", "value": { "light": "#b42318", "dark": "#ff9a91" }, "usage": "Error text and icon on danger-bg and bg-surface; always with XCircle or WarningCircle. Light value also fills destructive confirm buttons." },
      { "name": "info-bg", "value": { "light": "#e1ecff", "dark": "#182e50" }, "usage": "Info tag and alert fill." },
      { "name": "info-text", "value": { "light": "#1463d6", "dark": "#a2c4ff" }, "usage": "Info text and icon on info-bg; always with Info." },
      { "name": "table-selection-bg", "value": { "light": "#e1ecff", "dark": "#162d50" }, "usage": "Selected option in a Select list, selected table rows." },
      { "name": "chart-crm", "value": { "light": "#0b97a3", "dark": "#15a3ac" }, "usage": "Customer series in charts." },
      { "name": "chart-oms", "value": { "light": "#1463d6", "dark": "#4a7fe8" }, "usage": "Order series in charts." },
      { "name": "chart-grid", "value": { "light": "#e7eaf0", "dark": "#34383e" }, "usage": "Chart gridlines." },
      { "name": "meter-warning", "value": { "light": "#e08a00", "dark": "#f5a524" }, "usage": "Meter and progress fill for warning (graphic, 3:1 on surface)." },
      { "name": "meter-danger", "value": { "light": "#e5484d", "dark": "#f76b6b" }, "usage": "Meter and progress fill for danger (graphic)." },
      { "name": "logo-ink", "value": { "light": "#082451", "dark": "#f5f6f7" }, "usage": "RELIO wordmark ink (parent brand)." },
      { "name": "scrim", "value": { "light": "rgba(32, 33, 36, 0.4)", "dark": "rgba(9, 10, 12, 0.7)" }, "usage": "Overlay behind modals and the mobile menu drawer." }
    ]
  },
  "type": {
    "fonts": [],
    "families": {
      "sans": "\"Noto Sans Thai\", Arial, ui-sans-serif, system-ui, sans-serif",
      "brand": "\"Bai Jamjuree\", \"Noto Sans Thai\", Arial, ui-sans-serif, system-ui, sans-serif"
    },
    "groups": [
      {
        "name": "Portal headings",
        "family": "sans",
        "styles": [
          { "name": "hero-greeting", "fontSize": "36px", "lineHeight": 1.25, "fontWeight": 600, "sample": "สวัสดีตอนเช้า, somchai!", "usage": "Dashboard hero greeting at md and up (28px below md)." },
          { "name": "login-title", "fontSize": "36px", "lineHeight": 1.2, "fontWeight": 600, "sample": "ยินดีต้อนรับ", "usage": "Login form heading (32px below sm)." },
          { "name": "page-title", "fontSize": "30px", "lineHeight": 1.25, "fontWeight": 600, "sample": "ลูกค้า", "usage": "PageHeader h1 at md and up (26px below md)." },
          { "name": "stat-value", "fontSize": "26px", "lineHeight": 1.2, "fontWeight": 600, "sample": "฿1,284,500", "usage": "StatTile figure; always tabular-nums." },
          { "name": "dialog-title", "fontSize": "20px", "lineHeight": 1.4, "fontWeight": 600, "sample": "เพิ่มผู้ใช้งาน", "usage": "Modal title." },
          { "name": "section-title", "fontSize": "18px", "lineHeight": 1.4, "fontWeight": 600, "sample": "ประวัติคำสั่งซื้อ", "usage": "SectionTitle inside a card; EmptyState heading." },
          { "name": "brand-name", "fontSize": "17px", "lineHeight": 1.4, "fontWeight": 600, "sample": "CRM Center", "usage": "Logo wordmark next to the CC tile." }
        ]
      },
      {
        "name": "Portal text",
        "family": "sans",
        "styles": [
          { "name": "lead", "fontSize": "15px", "lineHeight": 1.6, "fontWeight": 400, "sample": "รายชื่อลูกค้าทุกช่องทางของบริษัทที่เลือก", "usage": "One-sentence page description under the title, max 66ch." },
          { "name": "body", "fontSize": "14px", "lineHeight": 1.55, "fontWeight": 400, "sample": "ดูรายชื่อลูกค้าที่เพิ่งเข้ามาและตรวจข้อมูลซ้ำก่อนเริ่มสะสมแต้ม", "usage": "Default UI text: cells, alerts, menu rows, descriptions." },
          { "name": "label", "fontSize": "14px", "lineHeight": 1.4, "fontWeight": 500, "sample": "บันทึกลูกค้า", "usage": "Buttons, form labels, sidebar rows, stat labels." },
          { "name": "input", "fontSize": "16px", "lineHeight": 1.5, "fontWeight": 400, "sample": "name@company.co.th", "usage": "Input text below md (prevents iOS zoom); 14px from md." },
          { "name": "table-head", "fontSize": "13px", "lineHeight": 1.4, "fontWeight": 500, "sample": "วันที่สั่งซื้อ", "usage": "Table header cells on bg-raised; small button label." },
          { "name": "caption", "fontSize": "12px", "lineHeight": 1.5, "fontWeight": 400, "sample": "ข้อมูลถึง 28 ก.ย. 2569", "usage": "Metadata, stat notes, tag labels (500), sidebar section headings (600, white 75%)." }
        ]
      },
      {
        "name": "RELIO brand (parent)",
        "family": "brand",
        "styles": [
          { "name": "relio-display", "fontSize": "64px", "lineHeight": 1.05, "fontWeight": 600, "sample": "RELIO", "usage": "RELIO marketing and the RELIO app only. Not used inside the CRM Center portal." }
        ]
      }
    ]
  },
  "spacing": {
    "tokens": [
      { "name": "space-1", "value": "4px", "usage": "Icon-to-label micro gap, tab-list padding." },
      { "name": "space-2", "value": "8px", "usage": "Header control gap, gap between icon buttons, sidebar inset (mobile drawer)." },
      { "name": "space-3", "value": "12px", "usage": "Menu row inner gap and side padding, input side padding." },
      { "name": "space-4", "value": "16px", "usage": "Card grid gap, button side padding, mobile page gutter, lg gap between sidebar and panel." },
      { "name": "space-5", "value": "20px", "usage": "StatTile padding, gap between modal body fields." },
      { "name": "space-6", "value": "24px", "usage": "Card padding (sm and up), modal padding, header gutter at md, PageHeader bottom margin." },
      { "name": "space-8", "value": "32px", "usage": "Page gutter at xl, dashboard hero padding at md." },
      { "name": "space-10", "value": "40px", "usage": "Empty-state vertical padding, login form top gap." }
    ]
  },
  "radius": {
    "tokens": [
      { "name": "radius-xs", "value": "4px", "usage": "Checkbox, sort button, tiny controls." },
      { "name": "radius-sm", "value": "8px", "usage": "Inputs, Select options, icon hit areas inside inputs." },
      { "name": "radius-md", "value": "10px", "usage": "Buttons, sidebar menu rows, alerts, dropdown lists, stat icon chip." },
      { "name": "radius-lg", "value": "16px", "usage": "Cards, tables, popovers, stat tiles, empty-state icon tile." },
      { "name": "radius-xl", "value": "24px", "usage": "Modals, dashboard hero, mobile menu drawer, login form top corners on mobile." },
      { "name": "radius-panel", "value": "32px", "usage": "Login form panel's left corners on desktop, sitting on the blue illustration." },
      { "name": "radius-pill", "value": "999px", "usage": "Tags, tab list and tabs, icon buttons, avatar, count badges, login submit button." }
    ]
  },
  "shadow": {
    "note": "Cards are flat (border only). Shadows mark floating layers and the blue chrome.",
    "tokens": [
      { "name": "shadow-dropdown", "value": "0 12px 32px -8px rgba(16, 24, 40, 0.18), 0 2px 6px -2px rgba(16, 24, 40, 0.08)", "usage": "Select listbox." },
      { "name": "shadow-popover", "value": "0 16px 40px -12px rgba(16, 24, 40, 0.22), 0 2px 6px -2px rgba(16, 24, 40, 0.08)", "usage": "Notification and profile popovers." },
      { "name": "shadow-modal", "value": "0 24px 48px -12px rgba(16, 24, 40, 0.25)", "usage": "Modal dialog." },
      { "name": "shadow-card-hover", "value": "0 6px 18px -8px rgba(16, 24, 40, 0.18)", "usage": "Clickable card lifted 2px on hover." },
      { "name": "shadow-nav-active", "value": "0 8px 20px -8px rgba(10, 40, 120, 0.5)", "usage": "Active sidebar row (white pill on blue)." },
      { "name": "shadow-sidebar", "value": { "light": "0 20px 40px -16px rgba(20, 80, 204, 0.45)", "dark": "0 20px 40px -16px rgba(0, 0, 0, 0.6)" }, "usage": "Mobile menu drawer panel." },
      { "name": "shadow-panel", "value": "-20px 0 60px -20px rgba(10, 40, 120, 0.45)", "usage": "Content panel edge where it meets the blue sidebar." }
    ]
  },
  "duration": {
    "tokens": [
      { "name": "duration-fast", "value": "120ms", "usage": "Hover, colour and caret rotation." },
      { "name": "duration-nav", "value": "160ms", "usage": "Sidebar row hover, icon nudge, card lift." },
      { "name": "duration-overlay", "value": "150ms", "usage": "Modal and popover fade + zoom-in-95." },
      { "name": "duration-rise", "value": "480ms", "usage": "Page blocks rise 10px in, staggered 60ms." }
    ]
  }
}
```
