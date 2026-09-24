# RELIO Brand & Product Design System

> Source of truth for the RELIO brand, CRM, OMS and the public design-system website.

Document version: 2.0
Status: Approved direction for website implementation
Updated: 23 September 2026
Primary language: Thai
Secondary language: English
Brand line: Customers + Orders, Connected.

---

## 0. Decisions locked in this version

This section resolves conflicts from the previous draft.

1. The website foundation is neutral, not green.
2. CRM Aqua and OMS Blue are the two main brand colours because they come directly from the two mascots.
3. Aqua and Blue identify a product team or highlight a key moment. They must not tint the entire page.
4. Light mode is the default. Dark mode is supported with neutral charcoal surfaces, not teal-black surfaces.
5. The hero mascot image is a transparent PNG that floats on the page. It has no card, grid, caption bar or coloured backdrop.
6. The mascot asset area uses large character sheets. It does not use a dense gallery of small pose cards.
7. The main page is concise. Detailed specifications appear in a right-side drawer.
8. Thai/English and Light/Dark controls are available at all times.
9. Every download states its filename, extension, dimensions where relevant and intended use.
10. The icon system uses Phosphor Icons. Emoji are not system icons.
11. Photography or external imagery is allowed only when its source and licence are stated. Original or generated RELIO imagery is preferred.
12. Information appears once on the main page. The drawer may provide implementation detail but must not duplicate long marketing copy.

---

## 1. Brand foundation

### 1.1 Brand concept

RELIO connects customer relationships and order operations in one clear system.

| Item | Definition |
|---|---|
| Name | RELIO |
| Thai pronunciation | รี-ลิ-โอ |
| Product scope | CRM + OMS |
| Positioning | Customer and order work, connected in one place |
| Primary audience | Thai business owners, sales teams and operations teams |
| Primary job | Help people find customer and order information quickly and act with confidence |
| Brand promise | Less switching, clearer work, stronger relationships |

### 1.2 Brand personality

| Trait | Meaning in the interface | Avoid |
|---|---|---|
| Clear | One message and one primary action at a time | Crowded cards and competing buttons |
| Friendly | Natural language, calm shapes and helpful mascots | Childish copy or excessive decoration |
| Connected | Show relationships between people, orders and documents | Isolated data without context |
| Confident | Predictable actions and visible status | Vague labels such as OK or Submit |
| Modern | Neutral foundations, precise spacing and current interaction patterns | Gradients, glass effects and AI-style glow |

### 1.3 Design principles

#### Clear Connections

Show what is related, what changed and what the user can do next.

#### Friendly Guidance

Guide with short human language. The product helps; it does not lecture.

#### Confident Actions

Primary actions are visually distinct, named by outcome and followed by clear feedback.

---

## 2. Logo direction

### 2.1 Official logo

The official mark contains two connected speech bubbles and the RELIO wordmark.

| Part | Colour | Meaning |
|---|---|---|
| Rear speech bubble | Deep Aqua #087F8C | CRM, people and relationships |
| Front speech bubble | OMS Blue #1463D6 | Orders, documents and action |
| Wordmark | Logo Navy #082451 | Trust and legibility |

### 2.2 Logo files

| Filename | Type | Size | Background | Use |
|---|---|---:|---|---|
| logo/Relio Logo - Horizontal - Full Color.svg | SVG vector | Scalable | Transparent | Website header wordmark (the file the header actually renders) |
| logo/Relio Logo - Vertical - Full Color.svg | SVG vector | Scalable | Transparent | Stacked lockup for narrow or square placements |
| logo/Relio Logomark - Full Color.svg | SVG vector | Scalable | Transparent | Mark-only placements |
| logo/Relio Logo … - Black.svg / - White.svg | SVG vector | Scalable | Transparent | Black and white variants of each lockup above, for light or dark surfaces |
| relio-logo.svg | SVG vector | 640 × 560 viewBox | Transparent | Browser favicon and legacy scalable master |
| logo.png | PNG raster | Preview size | Transparent | Quick preview and documents that cannot use SVG |

### 2.3 Clear space and minimum size

- Clear space equals the visual height of the R in the wordmark.
- Minimum full-logo width on screen: 96 px.
- Minimum mark-only width on screen: 24 px.
- Keep the original aspect ratio.
- Use the full-colour logo on light neutral surfaces.
- On dark surfaces, use a tested light-wordmark variant while keeping the bubble order unchanged.

### 2.4 Logo do and do not

Do:

- Use the supplied master SVG.
- Keep Aqua behind and Blue in front.
- Give the mark enough neutral space.

Do not:

- Stretch, rotate, crop or redraw the logo.
- Place the logo on a busy photograph.
- add shadows, glow, bevel or gradient.
- recolour the two bubbles as one colour.

---

## 3. Colour system

### 3.1 Usage ratio

The ratio is a page-level guide, not a strict pixel calculation.

| Category | Light theme share | Dark theme share |
|---|---:|---:|
| Neutral foundation | 60% | 60% |
| Neutral surface | 20% | 20% |
| CRM Aqua | 8% | 8% |
| OMS Blue | 8% | 8% |
| Supporting and semantic accents | 4% | 4% |

Important: do not use Aqua as the page background. This is the main correction from version 1.

### 3.2 Brand colours

| Name | HEX | Token | Use |
|---|---|---|---|
| CRM Aqua | #28C6CD | --brand-crm | CRM identity, mascot, selected CRM data and small graphic cues |
| OMS Blue | #1463D6 | --brand-oms | OMS identity, primary action, links and focus |
| Deep Aqua | #087F8C | --brand-crm-deep | Logo bubble and accessible Aqua text on light surfaces |
| Logo Navy | #082451 | --brand-logo-ink | Logo wordmark only |
| Eye Navy | #011F5D | --mascot-eye | Mascot face only |
| Action Orange | #FC9433 | --accent-warm | OMS tabs, tiny highlights and celebratory marks |
| Warm Cream | #FBF1E5 | --mascot-face | Mascot face and warm illustration surface |

### 3.3 Light neutral foundation

| Name | HEX | Token | Role |
|---|---|---|---|
| Page | #F7F8FA | --light-bg | Main page background |
| Surface | #FFFFFF | --light-surface | Cards, drawers and panels |
| Surface Subtle | #F0F2F5 | --light-surface-subtle | Grouped rows and quiet sections |
| Text | #202124 | --light-text | Main text |
| Text Secondary | #525866 | --light-text-secondary | Supporting text |
| Text Quiet | #7D8592 | --light-text-quiet | Metadata and captions |
| Border | #D8DDE5 | --light-border | Hairlines and control outlines |
| Disabled | #AEB5C0 | --light-disabled | Disabled text and icons |

### 3.4 Dark neutral foundation

| Name | HEX | Token | Role |
|---|---|---|---|
| Canvas | #18191B | --dark-bg | Main dark page background |
| Surface | #222427 | --dark-surface | Cards, drawers and panels |
| Surface Raised | #2D3035 | --dark-surface-raised | Hovered and elevated areas |
| Text | #F5F6F7 | --dark-text | Main text |
| Text Secondary | #C2C7D0 | --dark-text-secondary | Supporting text |
| Text Quiet | #A0A8B4 | --dark-text-quiet | Metadata and captions |
| Border | #41464F | --dark-border | Hairlines and control outlines |
| Disabled | #686F79 | --dark-disabled | Disabled text and icons |

### 3.5 Semantic colours

| State | Strong | Soft background | Token | Required additional cue |
|---|---|---|---|---|
| Success | #18734A | #DDF5E8 | --state-success | Check icon and success text |
| Warning | #8A4B08 | #FFF0D0 | --state-warning | Warning icon and explanation |
| Danger | #B42318 | #FFE4E1 | --state-danger | Error icon and corrective text |
| Information | #1463D6 | #E1ECFF | --state-info | Information icon or label |

### 3.6 Colour rules

- CRM Aqua means customer or relationship context.
- OMS Blue means order or document context and may also carry the single primary action.
- Use Deep Aqua, not CRM Aqua, for small text on light backgrounds.
- Use Action Orange at no more than 2% of a view.
- Never communicate status using colour alone.
- Avoid large full-bleed Aqua or Blue sections.
- Avoid gradients, neon glow and multicolour mesh backgrounds.

---

## 4. Typography

### 4.1 Font family

| Property | Value |
|---|---|
| Primary family | Bai Jamjuree |
| Languages | Thai and Latin |
| Weights | 400 Regular, 500 Medium, 600 SemiBold |
| Optional display weight | 700 Bold, only for large brand display |
| Fallback | Noto Sans Thai, Arial, ui-sans-serif, system-ui, sans-serif |
| Source | https://fonts.google.com/specimen/Bai+Jamjuree |

### 4.2 Typesetting rules

- Thai body line-height: at least 1.55.
- Thai letter-spacing: 0.
- Latin display tracking may use -0.02em at 48 px or larger.
- Do not apply negative tracking to Thai text.
- Use tabular numerals for statistics, currency and order numbers.
- Do not use all caps as the only hierarchy cue because Thai has no capital letters.
- Do not use weights below 400 for Thai interface text.

### 4.3 Type scale

| Role | Size | Weight | Line height | Tracking | Token | Use |
|---|---:|---:|---:|---:|---|---|
| Display | 64 px | 600 | 1.05 | -0.035em Latin only | --type-display | RELIO hero only |
| Hero | 48 px | 600 | 1.10 | -0.025em Latin only | --type-hero | Landing-page headline |
| H1 | 36 px | 600 | 1.20 | -0.02em Latin only | --type-h1 | Page title |
| H2 | 28 px | 600 | 1.30 | -0.015em Latin only | --type-h2 | Section heading |
| H3 | 20 px | 600 | 1.40 | -0.01em Latin only | --type-h3 | Card heading |
| Body Large | 18 px | 400 | 1.65 | 0 | --type-body-lg | Introductory copy |
| Body | 16 px | 400 | 1.60 | 0 | --type-body | Default content |
| Body Small | 14 px | 400 | 1.55 | 0 | --type-body-sm | Supporting UI text |
| Label | 14 px | 500 | 1.40 | 0 | --type-label | Buttons and form labels |
| Caption | 12 px | 400 | 1.50 | 0.01em Latin only | --type-caption | Metadata |

### 4.4 Content width

- Long-form reading width: 66 characters maximum.
- Main-page section introduction: 2 lines maximum on desktop when possible.
- Drawer code and specification width may scroll horizontally.
- Buttons: 3 to 4 words maximum.

---

## 5. Spacing and shape

### 5.1 Spacing scale

Base unit: 4 px.

| Name | Value | Token | Typical use |
|---|---:|---|---|
| 2XS | 4 px | --space-1 | Icon-to-label micro gap |
| XS | 8 px | --space-2 | Related text gap |
| S | 12 px | --space-3 | Compact element gap |
| M | 16 px | --space-4 | Default element gap |
| L | 24 px | --space-6 | Card padding |
| XL | 32 px | --space-8 | Large card padding |
| 2XL | 48 px | --space-12 | Subsection gap |
| Section | 96 px | --space-section | Desktop section separation |

### 5.2 Border radius

Radius follows component size. It is not decoration.

| Element | Radius | Token |
|---|---:|---|
| Input and small control | 8 px | --radius-sm |
| Button | 10 px | --radius-md |
| Card | 16 px | --radius-lg |
| Large panel and drawer | 24 px | --radius-xl |
| Chip and segmented control | 999 px | --radius-pill |

### 5.3 Borders and shadows

- Default border: 1 px solid neutral Border.
- Focus ring: 2 px OMS Blue with 2 px offset.
- Default cards are flat or use one subtle shadow.
- Dark mode uses surface contrast and border before shadow.
- Do not stack border, strong shadow and tinted background on the same card.

### 5.4 Layout

| Context | Rule |
|---|---|
| Marketing max width | 1200 px |
| Design-system content max width | 1120 px |
| Desktop sidebar | 232 to 248 px |
| Main content padding | 24 to 40 px |
| Grid gutter | 20 to 24 px |
| Card padding | 20 px compact, 24 px default, 32 px feature |
| Minimum touch target | 44 × 44 px |

---

## 6. Mood imagery

### 6.1 Direction

The mood is bright, playful and connected. Neutral space and generous whitespace still dominate; glossy 3D icon and mascot-adjacent graphics carry more of the visual interest than flat workspace photography.

Preferred:

- bright, airy compositions with generous negative space;
- glossy 3D icons and rounded, mascot-adjacent shapes;
- a small Aqua object and a small Blue object, linked by a connector line, card or shared motion;
- realistic, tactile materials when photography is used;
- clear contrast and subtle shadow, not deep drama.

Avoid:

- green colour cast across the whole image;
- futuristic command centres;
- neon, glow, glassmorphism or abstract AI waves;
- staged corporate handshake photography;
- unreadable fake interface text;
- stock images without source and licence information.

### 6.2 Reference file

| Filename | Type | Dimensions | Source | Use |
|---|---|---:|---|---|
| relio-mood-3d-icons.png | PNG | 1536 × 1024 px | Generated specifically for RELIO | Bright, playful 3D icon mood reference and marketing texture |

If an external image is used, show creator, source URL, licence and retrieval date directly under the image.

---

## 7. Illustration and graphic style

### 7.1 Illustration hierarchy

1. Transparent 3D mascot renders.
2. Product screenshots inside neutral frames.
3. Flat support graphics using connector lines, speech bubbles, folders and document shapes.
4. Mood photography used sparingly.

### 7.2 Graphic rules

- Use simple lines, circles and soft rectangular shapes.
- Use CRM Aqua for customer-side graphics.
- Use OMS Blue for order-side graphics.
- Use Action Orange only as a tiny tab or marker.
- Use neutral backgrounds.
- No glow, noisy texture, excessive particles or decorative gradients.
- One hero illustration moment per screen.

---

## 8. Icon system

### 8.1 Library

House icon set: Phosphor Icons
Official source: https://phosphoricons.com/

| Property | Rule |
|---|---|
| Default weight | Regular |
| Default stroke appearance | Approximately 1.5 px at 24 px |
| UI sizes | 16 px, 20 px and 24 px |
| Feature size | 32 px only inside a large icon tile |
| Colour | Current text colour, CRM Aqua context or OMS Blue context |
| Accessibility | Visible text label or aria-label |

### 8.2 Core icons

| Icon | Product meaning | Default size |
|---|---|---:|
| User | Customer | 20 px |
| Users Three | Customer group | 20 px |
| Chat Circle Dots | Conversation | 20 px |
| Folder | Orders and documents | 20 px |
| Receipt | Order | 20 px |
| Chart Line Up | Report | 20 px |
| Magnifying Glass | Search | 20 px |
| Bell | Notification | 20 px |
| Gear | Settings | 20 px |
| Plus | Add | 18 px |
| Check Circle | Success | 20 px |
| Warning Circle | Warning | 20 px |
| Copy | Copy token | 16 px |
| Download Simple | Download file | 18 px |
| Arrow Right | Continue | 18 px |

### 8.3 Icon do and do not

Do:

- Keep one weight within an icon cluster.
- Align icons optically with text.
- Use Fill only for very small status marks.

Do not:

- Use emoji as interface icons.
- Mix icon libraries in one product.
- use Duotone icons inside dense product UI.
- Use an icon-only button without an accessible name.

---

## 9. Mascot direction

### 9.1 Characters

| Character | Colour | Represents | Relative scale |
|---|---|---|---|
| CRM | Aqua #28C6CD | People, customers and relationships | 100% |
| OMS | Blue #1463D6 with Orange tabs | Orders, documents and transactions | 70 to 80% of CRM |

### 9.2 Rendering

- rounded matte 3D clay;
- cream face;
- simple navy eyes and curved mouth;
- soft upper-left light;
- transparent background for website assets;
- soft contact shadow may remain inside the PNG;
- no external frame, coloured panel, grid or caption bar in the hero.

### 9.3 Placement

- In a pair, CRM stands on the left and OMS on the right.
- CRM may be slightly larger.
- The pair may float within neutral page space.
- Keep enough transparent padding so limbs are never cropped.
- Use one mascot moment per viewport where possible.
- Do not put the mascot inside buttons or status chips.

### 9.4 Poses

| Pose | Use |
|---|---|
| Front | Hero and default brand presentation |
| Side and Back | Character reference only |
| Wave | Welcome and onboarding |
| Thumbs Up | Successful save or completion |
| Present | Feature guidance |
| Think | Processing or empty search |
| Celebrate | Meaningful milestone only |

### 9.5 Mascot asset files

| Filename | Type | Dimensions | Background | Use |
|---|---|---:|---|---|
| pair-original.png | PNG | 1536 × 1024 px | Transparent or source background removed for production | Main CRM + OMS pair (Mascot Direction section) |
| pair-blocks.png | PNG | 1536 × 1024 px | Transparent | Hero-specific crop of the CRM + OMS pair; the floating image on the Overview/hero section |
| crm-character-sheet.png | PNG | 1536 × 1024 px | Reference sheet | CRM front, side, back and poses |
| oms-character-sheet.png | PNG | 1536 × 1024 px | Reference sheet | OMS front, side, back and poses |

Production requirement: create transparent-background versions for the hero and downloadable assets. Character sheets may retain a neutral reference background if clearly labelled as sheets.

---

## 10. Brand voice and tone

### 10.1 Voice

Warm. Clear. Helpful.

| Principle | Rule | Example |
|---|---|---|
| State the result | Say what happened first | บันทึกลูกค้าแล้ว |
| Give the next step | Offer one clear continuation | สร้างออเดอร์ต่อได้เลย |
| Name the outcome | Button copy describes the result | บันทึกลูกค้า |
| Be human | Use familiar language | ลองตรวจสอบชื่ออีกครั้ง |
| Be concise | One sentence, one idea | ไม่เกิน 2 lines for feedback |

### 10.2 Thai and English

- Thai is the default interface language.
- English is a complete alternative, not mixed inside the same sentence.
- Brand names, product names and standard terms may remain English.
- Language switching must preserve the current section, theme and drawer state.

### 10.3 Do

- บันทึกลูกค้าแล้ว สร้างออเดอร์ต่อได้เลย
- ยังไม่มีออเดอร์ เริ่มด้วยการสร้างออเดอร์แรก
- ตรวจสอบอีเมลอีกครั้ง รูปแบบที่ถูกต้องคือ name@example.com

### 10.4 Do not

- สำเร็จ!!!
- Error 409: Invalid payload.
- เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ
- ตกลง
- Submit

---

## 11. Light and dark colour foundations

### 11.1 Semantic mapping

| Semantic token | Light | Dark |
|---|---|---|
| --bg-canvas | #F7F8FA | #18191B |
| --bg-surface | #FFFFFF | #222427 |
| --bg-raised | #F0F2F5 | #2D3035 |
| --text-primary | #202124 | #F5F6F7 |
| --text-secondary | #525866 | #C2C7D0 |
| --text-quiet | #7D8592 | #A0A8B4 |
| --border-default | #D8DDE5 | #41464F |
| --brand-crm | #087F8C for text, #28C6CD for graphics | #5EDAE0 |
| --brand-oms | #1463D6 | #75A7FF |
| --focus-ring | #1463D6 | #75A7FF |

### 11.2 Theme behaviour

- Default to the user preference on first visit.
- Save the chosen theme locally.
- Theme switching must not reload the page.
- Icons, text and borders must remain readable.
- Dark mode uses charcoal neutrals, not a teal-tinted night canvas.
- Do not invert mascot images automatically.

---

## 12. Component specifications

### 12.1 Button

| State | Primary button |
|---|---|
| Default | OMS Blue fill, white label |
| Hover | 8% darker Blue |
| Focus | 2 px Blue ring with 2 px offset |
| Active | Slightly darker fill, no scale animation |
| Loading | Spinner plus unchanged action label where space allows |
| Disabled | Neutral disabled fill and text, no pointer action |
| Success | Check icon and confirmed result text |

Rules:

- One filled primary button per action group.
- Minimum height 44 px.
- Label uses 14 px, weight 500.
- Radius 10 px.
- Loading must not change button width.

### 12.2 Input

| Property | Value |
|---|---|
| Height | Minimum 44 px |
| Radius | 8 px |
| Border | 1 px neutral Border |
| Label | 14 px, weight 500 |
| Input text | 16 px on mobile, 14 to 16 px on desktop |
| Focus | Blue border and visible focus ring |
| Error | Danger border, icon and corrective message |
| Disabled | Neutral disabled surface and text |

### 12.3 Card

- Surface uses neutral Surface.
- Radius 16 px.
- Padding 24 px default.
- Border or subtle shadow; usually not both.
- A card must group related content, not decorate empty space.

### 12.4 Navigation

- Desktop sidebar width: 240 px.
- Item height: at least 44 px.
- Active state uses a neutral raised surface plus a brand-colour label.
- Mobile navigation opens from a Menu button.
- Current section is reflected with aria-current or an equivalent active state.

### 12.5 Status chip

- Pill radius.
- State name is visible.
- Soft background plus accessible text colour.
- Optional icon reinforces the state.
- Never use a colour dot alone.

### 12.6 Empty state

- Optional mascot at 120 to 160 px.
- One helpful heading.
- One supporting sentence.
- One primary action.
- Do not use ไม่พบข้อมูล as the only explanation.

---

## 13. Design-system website specification

### 13.1 Main-page sections

Use this order:

1. Overview
2. Brand Concept & Personality
3. Logo Direction
4. Component States and Product Usage
5. Applied UI Example
6. Colour Palette & Usage Ratio
7. Typography, Fonts, Spacing & Shape
8. Mood Imagery and Graphic Style
9. Icons & Shapes
10. Mascot Direction and Assets
11. Brand Voice, Guidelines and Don't
12. Resources, Accessibility and Version

Component States and Product Usage now sits right after Logo Direction rather than near the end. Applied UI Example follows it directly: a single composed customer + order screen (`#usage`) built only from the specimens above (badge, avatar, button, status strip), so the drawer/token sections that follow can stay focused on raw specification rather than product context. Light & Dark Foundations is no longer a standalone main-page section; its behaviour is still specified in 3.3, 3.4 and 11 and remains visible through the Details drawer's tokens tabs.

### 13.2 Hero

- Left: eyebrow, RELIO, Design System, one-sentence description and two actions.
- Right: transparent CRM + OMS image (pair-blocks.png) floats above a supporting backdrop.
- The backdrop is a quiet grid of small neutral UI-preview cards (customer, order, notification, palette and stat moments) plus a soft Aqua/Blue radial glow and a faint dot-grid texture, confined to the hero viewport.
- The mascot image itself still has no card, grid, framed panel or caption strip directly on it; the card grid is ambient backdrop, not a frame around the mascot.
- Keep the page foundation neutral.

### 13.3 Details drawer

Trigger label:

- Thai: รายละเอียด
- English: Details

Behaviour:

- Opens from the right.
- Desktop width: 48 to 55 viewport width, maximum 820 px.
- Mobile: full-screen.
- Drawer scroll is independent from the page.
- Escape closes the drawer.
- A visible Close button is required.
- Opening returns focus to the drawer; closing returns focus to the trigger.

Tabs:

| Tab | Content | Download |
|---|---|---|
| DESIGN.md | Human-readable specification | .MD |
| Tailwind v4 | Theme token mapping | .CSS or .JS according to implementation |
| CSS Variables | Production custom properties | .CSS |
| Design Tokens | Tool-neutral structured tokens | .JSON |

Drawer tools:

- Compact and Extended view.
- Copy.
- Download with explicit extension.
- Thai and English content.
- Light and dark theme support.

### 13.4 Main-page content density

- Section title plus one short description.
- Use visual examples before long explanation.
- Show full colour data in compact grids.
- Use large CRM and OMS swatches, smaller supporting swatches.
- Do not repeat the same token table in both the page and drawer.
- Character sheets are large sections, not small repeated pose cards.

---

## 14. Asset delivery rules

### 14.1 Download labels

Every asset card must show:

- asset name;
- exact filename;
- file extension;
- pixel dimensions for raster images;
- transparent or non-transparent background;
- intended use;
- download action.

### 14.2 Preferred formats

| Asset | Preferred | Alternative |
|---|---|---|
| Logo | SVG | PNG |
| Mascot hero | Transparent PNG | WebP |
| Character sheet | PNG | PDF for review |
| Icon | SVG through Phosphor | Component code |
| Tokens | JSON and CSS | Tailwind config |
| Guideline | MD | PDF |

### 14.3 File naming

Use lowercase kebab-case:

- relio-logo.svg
- pair-original.png
- crm-character-sheet.png
- oms-character-sheet.png
- relio-mood-3d-icons.png
- relio-tokens.css
- relio-tokens.json

Do not publish filenames such as final-final-2.png or untitled-design.png.

---

## 15. Responsive rules

| Breakpoint | Layout |
|---|---|
| Mobile below 768 px | One column, Menu navigation, full-screen detail drawer |
| Tablet 768 to 1279 px | Two-column grids where content allows, no fixed sidebar |
| Desktop 1280 px and above | Fixed sidebar and content max width 1120 px |

Additional rules:

- Colour grid: 2 columns mobile, 4 to 6 columns desktop.
- Character sheets: 1 column mobile, 2 columns desktop when readable.
- Hero: copy above mascot image on mobile.
- Header controls keep labels or accessible names.
- No horizontal page scroll.
- Code inside the drawer may scroll horizontally.

---

## 16. Accessibility

- Text contrast follows WCAG AA at minimum.
- Body text contrast target: 4.5:1.
- Large text contrast target: 3:1.
- CRM Aqua #28C6CD is decorative on light backgrounds; use Deep Aqua #087F8C for text.
- Action Orange is not body text on white.
- Keyboard focus is always visible.
- All icon-only buttons have accessible names.
- Colour is never the only state cue.
- Minimum interactive target is 44 × 44 px.
- Respect reduced-motion preference.
- Images have useful alt text; decorative graphics use empty alt text.
- Drawer tabs use keyboard-operable tab semantics.

---

## 17. Motion

| Token | Value | Use |
|---|---|---|
| --duration-fast | 120 ms | Hover and colour transition |
| --duration-base | 200 ms | Tabs and small panels |
| --duration-slow | 320 ms | Detail drawer |
| --ease-standard | cubic-bezier(.22, 1, .36, 1) | Default |

Rules:

- Motion explains state change.
- Mascot may float gently in the hero, maximum 4 px vertical travel.
- Disable floating under reduced motion.
- Sections and their cards may use a single subtle fade-and-rise reveal the first time they scroll into view; do not use looping or repeating scroll animation, and respect reduced-motion preference.
- Do not use springy button motion.

---

## 18. Implementation token starter

This section is the single copy-paste source for production tokens. It mirrors, byte for byte, the standalone files `relio-tokens.css`, `relio-tailwind.css` and `relio-tokens.json` — updating one must update the other three.

### 18.1 CSS variables — relio-tokens.css

    :root {
      --bg-canvas: #F7F8FA;
      --bg-surface: #FFFFFF;
      --bg-raised: #F0F2F5;
      --text-primary: #202124;
      --text-secondary: #525866;
      --text-quiet: #667080;
      --text-disabled: #AEB5C0;
      --border-default: #D8DDE5;
      --border-control: #747D8A;
      --brand-crm-graphic: #28C6CD;
      --brand-crm-text: #087F8C;
      --brand-oms-text: #1463D6;
      --action-primary-bg: #1463D6;
      --action-primary-text: #FFFFFF;
      --action-primary-hover: #1158BE;
      --action-primary-active: #0D4DAA;
      --focus-ring: #1463D6;
      --accent-warm-ui: #FC9433;
      --crm-badge-bg: #DDF7F8;
      --crm-badge-text: #076F7A;
      --oms-badge-bg: #E1ECFF;
      --oms-badge-text: #1463D6;
      --success-bg: #DDF5E8;
      --success-text: #18734A;
      --warning-bg: #FFF0D0;
      --warning-text: #8A4B08;
      --danger-bg: #FFE4E1;
      --danger-text: #B42318;
      --info-bg: #E1ECFF;
      --info-text: #1463D6;
      --bg-hover: #E7EAF0;
      --bg-disabled: #ECEFF3;
      --bg-input: #FFFFFF;
      --bg-tooltip: #202124;
      --text-tooltip: #FFFFFF;
      --overlay-backdrop: #202124;
      --text-link: #1463D6;
      --text-link-hover: #0D4DAA;
      --text-placeholder: #667080;
      --icon-primary: #202124;
      --icon-secondary: #525866;
      --icon-interactive: #1463D6;
      --icon-disabled: #AEB5C0;
      --action-secondary-bg: #FFFFFF;
      --action-secondary-text: #202124;
      --action-secondary-border: #747D8A;
      --action-tertiary-hover: #E7EAF0;
      --action-danger-bg: #B42318;
      --action-danger-text: #FFFFFF;
      --action-danger-hover: #8F1B13;
      --action-danger-active: #76170F;
      --action-disabled-bg: #ECEFF3;
      --action-disabled-text: #AEB5C0;
      --nav-active-bg: #F0F2F5;
      --nav-active-indicator: #1463D6;
      --input-error-border: #B42318;
      --input-valid-border: #18734A;
      --check-selected-bg: #1463D6;
      --check-selected-icon: #FFFFFF;
      --switch-off-track: #747D8A;
      --switch-thumb: #FFFFFF;
      --table-stripe: #F0F2F5;
      --table-selection-bg: #E1ECFF;
      --skeleton-base: #E7EAF0;
      --skeleton-highlight: #F0F2F5;
      --chart-crm: #087F8C;
      --chart-oms: #1463D6;
      --chart-other: #667080;
      --chart-grid: #D8DDE5;
      --asset-logo-aqua: #087F8C;
      --asset-logo-blue: #1463D6;
      --asset-logo-ink: #082451;
      --asset-mascot-crm: #28C6CD;
      --asset-mascot-oms: #1463D6;
      --asset-mascot-eye: #011F5D;
      --asset-mascot-face: #FBF1E5;
      --asset-mascot-tab: #FC9433;
      --font-sans: "Bai Jamjuree", "Noto Sans Thai", Arial, ui-sans-serif, system-ui, sans-serif;
      --space-unit: 4px;
      --space-1: 4px;
      --space-2: 8px;
      --space-3: 12px;
      --space-4: 16px;
      --space-5: 20px;
      --space-6: 24px;
      --space-8: 32px;
      --space-10: 40px;
      --space-12: 48px;
      --space-16: 64px;
      --space-20: 80px;
      --space-24: 96px;
      --radius-xs: 4px;
      --radius-sm: 8px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-pill: 999px;
    }

    [data-theme="dark"] {
      --bg-canvas: #18191B;
      --bg-surface: #222427;
      --bg-raised: #2D3035;
      --text-primary: #F5F6F7;
      --text-secondary: #C2C7D0;
      --text-quiet: #A0A8B4;
      --text-disabled: #686F79;
      --border-default: #41464F;
      --border-control: #858E9C;
      --brand-crm-graphic: #5EDAE0;
      --brand-crm-text: #5EDAE0;
      --brand-oms-text: #75A7FF;
      --focus-ring: #75A7FF;
      --crm-badge-bg: #12383C;
      --crm-badge-text: #5EDAE0;
      --oms-badge-bg: #162D50;
      --oms-badge-text: #75A7FF;
      --success-bg: #173526;
      --success-text: #75D9A2;
      --warning-bg: #3D2D16;
      --warning-text: #FFD18A;
      --danger-bg: #421F1E;
      --danger-text: #FF9A91;
      --info-bg: #182E50;
      --info-text: #A2C4FF;
      --bg-hover: #34383E;
      --bg-disabled: #303238;
      --bg-input: #222427;
      --bg-tooltip: #F5F6F7;
      --text-tooltip: #202124;
      --overlay-backdrop: #090A0C;
      --text-link: #75A7FF;
      --text-link-hover: #A2C4FF;
      --text-placeholder: #A0A8B4;
      --icon-primary: #F5F6F7;
      --icon-secondary: #C2C7D0;
      --icon-interactive: #75A7FF;
      --icon-disabled: #686F79;
      --action-secondary-bg: #222427;
      --action-secondary-text: #F5F6F7;
      --action-secondary-border: #858E9C;
      --action-tertiary-hover: #34383E;
      --action-disabled-bg: #303238;
      --action-disabled-text: #686F79;
      --nav-active-bg: #2D3035;
      --nav-active-indicator: #75A7FF;
      --input-error-border: #FF9A91;
      --input-valid-border: #75D9A2;
      --switch-off-track: #858E9C;
      --table-stripe: #2D3035;
      --table-selection-bg: #162D50;
      --skeleton-base: #34383E;
      --skeleton-highlight: #41464F;
      --chart-crm: #5EDAE0;
      --chart-oms: #75A7FF;
      --chart-other: #C2C7D0;
      --chart-grid: #41464F;
    }

### 18.2 Tailwind v4 theme — relio-tailwind.css

    /* Tailwind v4. Import after Tailwind and relio-tokens.css. */
    @theme inline {
      --color-canvas: var(--bg-canvas);
      --color-surface: var(--bg-surface);
      --color-raised: var(--bg-raised);
      --color-content: var(--text-primary);
      --color-content-secondary: var(--text-secondary);
      --color-content-muted: var(--text-muted);
      --color-line: var(--border-default);
      --color-control: var(--border-control);
      --color-crm: var(--crm-fg);
      --color-crm-soft: var(--crm-bg);
      --color-oms: var(--oms-fg);
      --color-oms-soft: var(--oms-bg);
      --color-action: var(--action-primary);
      --color-on-action: var(--action-on-primary);
      --font-sans: 'Bai Jamjuree', 'Noto Sans Thai', Arial, ui-sans-serif, system-ui, sans-serif;
      --radius-control: var(--radius-sm);
      --radius-button: var(--radius-md);
      --radius-card: var(--radius-lg);
      --radius-panel: var(--radius-xl);
    }

### 18.3 Design tokens (tool-neutral) — relio-tokens.json

    {
      "name": "RELIO",
      "revision": 2,
      "schema": "RELIO semantic colors v1 (custom schema)",
      "themes": {
        "light": {
          "bg-canvas": "#F7F8FA",
          "bg-surface": "#fff",
          "bg-raised": "#F0F2F5",
          "text-primary": "#202124",
          "text-secondary": "#525866",
          "text-muted": "#7D8592",
          "border-default": "#D8DDE5",
          "border-control": "#7D8592",
          "brand-crm": "#28C6CD",
          "brand-oms": "#1463D6",
          "crm-bg": "#E9FAFB",
          "crm-fg": "#086B73",
          "oms-bg": "#EDF4FF",
          "oms-fg": "#1463D6",
          "action-primary": "#1463D6",
          "action-primary-hover": "#0F4FAE",
          "action-on-primary": "#fff",
          "link": "#1463D6",
          "focus-ring": "#1463D6",
          "status-success": "#18734A",
          "status-warning": "#8A4B08",
          "status-danger": "#B42318"
        },
        "dark": {
          "bg-canvas": "#18191B",
          "bg-surface": "#222427",
          "bg-raised": "#2D3035",
          "text-primary": "#F5F6F7",
          "text-secondary": "#C2C7D0",
          "text-muted": "#A0A8B4",
          "border-default": "#41464F",
          "border-control": "#7D8592",
          "brand-crm": "#5EDAE0",
          "brand-oms": "#75A7FF",
          "crm-bg": "#193437",
          "crm-fg": "#5EDAE0",
          "oms-bg": "#1E2E48",
          "oms-fg": "#75A7FF",
          "action-primary": "#1463D6",
          "action-primary-hover": "#0F4FAE",
          "action-on-primary": "#fff",
          "link": "#75A7FF",
          "focus-ring": "#75A7FF",
          "status-success": "#78D9A2",
          "status-warning": "#F2C46D",
          "status-danger": "#FFA49B"
        }
      },
      "typography": {
        "font-sans": "Bai Jamjuree, Noto Sans Thai, Arial, ui-sans-serif, system-ui, sans-serif",
        "weights": [400, 500, 600, 700],
        "sizes": {
          "display": "64px",
          "hero": "48px",
          "h1": "36px",
          "h2": "28px",
          "h3": "20px",
          "body-lg": "18px",
          "body": "16px",
          "body-sm": "14px",
          "label": "14px",
          "caption": "12px"
        }
      },
      "spacing": {
        "2xs": "4px",
        "xs": "8px",
        "sm": "12px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "section": "96px"
      },
      "radius": {
        "control": "8px",
        "button": "10px",
        "card": "16px",
        "panel": "24px",
        "pill": "999px"
      }
    }

Note: `relio-tailwind.css` and `relio-tokens.json` currently reference token names (`--text-muted`, `--crm-fg`, `--crm-bg`) that do not exist under those exact names in 18.1's CSS variables (which uses `--text-quiet`, `--brand-crm-text`, `--crm-badge-bg` instead). This mismatch is pre-existing in the source files and reproduced here as-is; reconcile the naming before wiring Tailwind's `@theme inline` block to the CSS variables in production.

### 18.4 Font loading

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap" rel="stylesheet">

---

## 19. Quality checklist

Before publishing:

- [ ] Neutral page foundation is used.
- [ ] Aqua and Blue do not flood the page.
- [ ] Hero mascot has no visible background card or grid.
- [ ] Thai and English controls work.
- [ ] Light and dark controls work.
- [ ] Details drawer opens on the right and closes with Escape.
- [ ] Drawer tabs, copy and downloads work.
- [ ] All colours are visible with HEX, token and role.
- [ ] Typography scale shows size, weight, line-height and token.
- [ ] Spacing and radius include visual examples.
- [ ] Icons show name, size and weight.
- [ ] Guidelines and Don't are visually distinct.
- [ ] CRM and OMS character sheets are large and downloadable.
- [ ] Every download shows its file extension.
- [ ] Focus and keyboard navigation work.
- [ ] Mobile layout has no horizontal page scroll.
- [ ] External imagery includes source and licence.
- [ ] Version and change summary are visible.

---

## 20. Change log

### Applied UI example — 23 September 2026

- Added a new main-page section, Applied UI Example (`#usage`, 13.1 item 5), directly after Component States and Product Usage.
- The section composes a realistic customer + order screen (`sections/usage.js`) out of existing specimens only — badge, avatar, button and status strip — with no new component introduced, split into a CRM-aqua customer pane and an OMS-blue order pane.
- Restored the `.component-demo` two-pane frame in `style.css`, whose base rule had been dropped in the section-file split (only its mobile override survived); `customer-pane`, `order-pane`, `avatar`, `customer-details`, `customer-note`, `order-progress`, `order-status` and `order-actions` were already defined and unused.

### Token consolidation — 23 September 2026

- Merged `relio-tokens.css`, `relio-tailwind.css` and `relio-tokens.json` into section 18 as the single copy-paste source of truth, so this one .md file is enough to load and use the full token set without downloading the separate files.
- Flagged the pre-existing token-name mismatch between the CSS variables and the Tailwind/JSON files (18.2/18.3 note) rather than silently resolving it.
- Simplified the website's Resources section to one guideline download that now includes the full tokens, instead of four separate file downloads.

### Content sync — 23 September 2026

Documentation-only sync against the implemented site (app.js split into sections/*.js, no design decisions changed):

- Updated logo file references in 2.2 to the header's actual Logomark/Horizontal/Vertical (Full Color/Black/White) SVG set; relio-logo.svg is now noted as favicon/legacy only.
- Updated the mood direction and reference filename (6.1–6.2) to the current bright, playful 3D-icon mood image, relio-mood-3d-icons.png.
- Documented pair-blocks.png as the dedicated hero-floating mascot crop, distinct from the pair-original.png duo asset used in the Mascot Direction section (9.5).
- Reordered the main-page section list (13.1): Component States now follows Logo Direction; the standalone Light & Dark Foundations page section was removed since the site no longer renders it (its behaviour spec in 3.3/3.4/11 still applies).
- Described the hero's actual backdrop — a grid of small UI-preview cards plus a soft Aqua/Blue glow — in 13.2, while keeping the "no card on the mascot itself" rule.
- Clarified the scroll-reveal motion rule in section 17 to match the current one-time fade/rise behaviour instead of a blanket no-scroll-animation rule.
- Corrected stale filename examples in 14.3.

### Version 2.0 — 15 September 2026

- Replaced green-heavy foundation with neutral light and charcoal dark foundations.
- Promoted CRM Aqua and OMS Blue as the two main mascot-derived brand colours.
- Changed hero mascot treatment to transparent floating imagery.
- Defined bilingual and theme controls.
- Defined right-side Details drawer.
- Added complete colour, typography, spacing, radius and icon specifications.
- Added asset metadata and naming rules.
- Added component states, responsive behaviour and accessibility.
- Allowed sourced mood imagery and documented generated RELIO reference imagery.

### Version 1.0

- Initial brand and interface direction.
- Superseded where it conflicts with version 2.0.
