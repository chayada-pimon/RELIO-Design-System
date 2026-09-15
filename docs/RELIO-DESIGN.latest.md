# RELIO Brand & Product Design System

> Source of truth for the RELIO brand, CRM, OMS and the public design-system website.

Document version: 2.4.1
Status: Ready for component implementation; proposed logo variants remain pending visual approval
Updated: 15 September 2026
Primary language: Thai
Secondary language: English
Brand line: Customers + Orders, Connected.

---

## Start here — how to use this specification

RELIO is a Thai-first CRM + OMS design system. **Light Mode is the first-visit default.** CRM Aqua identifies customer context; OMS Blue identifies order context and the primary action. Neutral surfaces carry the page. A selected icon, status or graph always has a text/shape cue in addition to colour.

| If you are… | Read first | Then use |
|---|---|---|
| Designing a screen | §1 brand, §4 type, §5 spacing/shape | §11 colour tokens, §12 component contract, §19 product patterns, §21 responsive |
| Building UI | §11 token table and §18 CSS | §5 anatomy, §12 states, §16 accessibility, §20 data typography |
| Creating brand assets | §2 logo, §8 icons, §9 mascots | §14 delivery metadata, §22 proposed/approved status |
| Reviewing a release | §23 quality checklist | §22 change record, §24 history |

**One canonical value per topic:** colour HEX and token role live in §11.1; production CSS in §18.1 must match it. Spacing/radius values and component geometry live in §5. Type scale lives in §4 and real data examples in §20. Component state colour lives in §12; responsive behaviour in §21. Other sections explain the intent or show a use case rather than creating an alternative value.

### Quick implementation defaults

| Decision | Use | Avoid |
|---|---|---|
| Page and card | `--bg-canvas`, `--bg-surface`; Light default | Brand-colour page fills |
| Primary action | One `--action-primary-bg` button with `--action-primary-text`; 44 px minimum | Multiple filled buttons competing in one group |
| Icon in a component | Phosphor regular, `currentColor`, normally 20 px | Emoji or an unrelated accent colour |
| Body text | Bai Jamjuree 16 px, Thai line-height ≥1.55 | Negative Thai tracking or text under 14 px in primary UI |
| Spacing | 4 px scale; standard card 24 px; icon–label 8 px | Arbitrary gaps or smaller hit targets |
| Shape | Button 10 px, input 8 px, card 16 px, large drawer 24 px | Radius used as decoration |
| Dark theme | Charcoal surfaces; explicit theme choice saved | Auto-inverting mascots or initial system-preference override |

### Current asset status

The supplied `relio-logo.svg` and existing mascot reference assets are the documented source direction. Horizontal logo, app icon and dark-wordmark export are **proposed**, subject to visual review (§22). Only a verified, available export receives a download button or exact dimension claim. The design-system website is a showcase of this specification; it must not invent product behaviour beyond the patterns in §19.

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
| relio-logo.svg | SVG vector | 640 × 560 viewBox | Transparent | Master logo, website, print and scalable UI |
| relio-logo-preview.png | PNG raster | Verified export dimensions | Transparent | Preview only; publish after verifying actual export |

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
| CRM Aqua | #28C6CD | `--asset-mascot-crm` | Fixed mascot colour; UI graphics use `--brand-crm-graphic` |
| OMS Blue | #1463D6 | `--asset-mascot-oms` | Fixed mascot colour; action/link roles use theme tokens |
| Deep Aqua | #087F8C | `--asset-logo-aqua` | Fixed rear logo bubble; Light UI text uses `--brand-crm-text` |
| Logo Navy | #082451 | `--asset-logo-ink` | Logo wordmark only |
| Eye Navy | #011F5D | `--asset-mascot-eye` | Mascot face only |
| Action Orange | #FC9433 | `--asset-mascot-tab` | Fixed OMS tab; UI marker uses `--accent-warm-ui` |
| Warm Cream | #FBF1E5 | `--asset-mascot-face` | Mascot face only |

These are source colours, not a command to reuse the same HEX in every theme. The official logo and mascot artwork retain their source colours; interface text, controls and tinted surfaces use the theme-specific mappings in §11.1.

### 3.3 Functional colour roles

All theme-specific HEX values, including neutral surfaces, labels, badges, action states, borders, icons, form states, charts and semantic messages, are defined **once** in the canonical table (§11.1). Use the same semantic token name in both themes. The artwork colours in §3.2 are fixed source colours; they are not UI text/control tokens.

- CRM graphic: `--brand-crm-graphic`; CRM readable label: `--brand-crm-text` on surface or `--crm-badge-text` on its tinted/raised background.
- OMS link or label: `--brand-oms-text`; filled primary action: `--action-primary-bg` with `--action-primary-text`.
- Success/Warning/Danger/Info: pair each `--*-bg` with the matching `--*-text` **and** visible icon/wording.
- Quiet separators use `--border-default`; meaningful controls use `--border-control`. Do not assume a quiet divider passes non-text contrast.
- `--accent-warm-ui` is a small physical/tab marker, no more than 2% of a view; it is not default body text.

### 3.4 Theme and contrast checks

| Example | Light | Dark | Why it matters |
|---|---|---|---|
| Primary button | White on #1463D6: 5.55:1 | Same: 5.55:1 | Button label meets normal-text contrast |
| CRM text on standard surface | #087F8C on white: 4.75:1 | #5EDAE0 on #222427: 9.32:1 | Graphic Aqua itself is not small Light text |
| CRM badge label | #076F7A on #DDF7F8: 5.26:1 | #5EDAE0 on #12383C: 7.59:1 | Background pairing is part of the role |
| Quiet readable caption | #667080 on white: 5.01:1 | #A0A8B4 on #222427: 6.49:1 | Disabled tokens are not readable-caption tokens |
| Input/control boundary | #747D8A on white: 4.16:1 | #858E9C on #222427: 4.70:1 | Distinct from decorative divider |

Normal essential text ≥4.5:1; large text and meaningful non-text control boundaries/focus ≥3:1. Measure the immediate surface in default, hover, selected, error and loading states. Dark mode uses neutral charcoal canvas/surface/raised layers; Light Mode starts on the first visit regardless of the device preference, then saves an explicit choice. Never invert mascot or logo artwork automatically. Do not use status colour alone, large Aqua/Blue page fills, gradients or glow.

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

### 5.1 Foundation and scale

The system uses a **4 px base grid**. Spacing is deliberate: 4–16 px connects elements within a component; 20–32 px separates component groups; 40–96 px separates page regions. Use only the named values below. Do not solve a crowded layout by making type or touch targets smaller. Vertical spacing follows content relationships; do not add the same gap after every child.

| Token | Value | Relationship and default example |
|---|---:|---|
| `--space-1` | 4 px | Tiny icon/detail gap, never main icon–button label gap |
| `--space-2` | 8 px | Icon–label gap; title–supporting text gap; compact rows |
| `--space-3` | 12 px | Closely related field help, paired controls |
| `--space-4` | 16 px | Form field stack; compact card padding; mobile gutter |
| `--space-5` | 20 px | Grid gutter; medium component group |
| `--space-6` | 24 px | Standard card padding; tablet gutter; related subsection |
| `--space-8` | 32 px | Feature card padding; desktop gutter; subsection transition |
| `--space-10` | 40 px | Larger content group or desktop content padding |
| `--space-12` | 48 px | Mobile section separation |
| `--space-16` | 64 px | Tablet section separation |
| `--space-20` | 80 px | Wide-page transition when 96 px is too open |
| `--space-24` | 96 px | Desktop marketing/design-system section separation |

Do not use 6, 10, 14 or arbitrary pixel gaps as layout spacing. One-pixel strokes and two-pixel focus offsets are **not spacing tokens**. For optically centered icons or characters, a documented 1–2 px visual adjustment is allowed without changing layout geometry.

### 5.2 Layout and responsive rhythm

| Context | Mobile <768 px | Tablet 768–1279 px | Desktop ≥1280 px |
|---|---|---|---|
| Page side gutter | 16 px | 24 px | 32 px, with max-width container |
| Section separation | 48 px | 64 px | 96 px |
| Section title to intro | 8 px | 8 px | 12 px |
| Intro to first example | 24 px | 24 px | 32 px |
| Grid gutter | 16 px | 20 px | 24 px |
| Main content padding | 16 px | 24 px | 32 px |
| Default card padding | 16 px compact / 24 px standard | 24 px | 24 px standard / 32 px feature |

Marketing max-width is 1200 px; design-system content max-width is 1120 px. Desktop sidebar is **240 px**. Content max-width excludes side gutters and sidebar: keep 32 px between the sidebar and main content. Do not reduce page gutters to fit extra columns; stack content instead. Mobile safe-area insets add to the 16 px gutter where needed. Text reading width remains at most 66 characters. A fixed header or bottom action bar reserves enough space so it never covers content.

### 5.3 Shape and radius

The visual shape is a **quiet rounded rectangle**: precise enough for business data, friendly enough for the mascots. Radius follows physical scale; colour does not change radius. Square-ish tables and data rows remain compact, while character imagery remains unframed as specified in §9.

| Element | Radius | Token | Rule |
|---|---:|---|---|
| Text input, select, small control tile | 8 px | `--radius-sm` | Small controls and fields |
| Checkbox visible control | 4 px | `--radius-xs` | 20 px control inside a 44 px target |
| Button and compact icon tile | 10 px | `--radius-md` | One family across actions |
| Card, modal content block, chart frame | 16 px | `--radius-lg` | Standard grouped surface |
| Drawer, large feature panel | 24 px | `--radius-xl` | Only large standalone surfaces |
| Chip, status pill, segmented control | 999 px | `--radius-pill` | Fully rounded small labels |
| Table row and sidebar selection | 8 px | `--radius-sm` | Keep dense product UI legible |

Do not combine a pill button, pill card and pill drawer in the same hierarchy. Do not use an arbitrary 30 px card radius, turn rectangular data tables into bubbles, or round the official logo/artwork through CSS.

### 5.4 Component anatomy and minimum geometry

These are production dimensions, not just illustration sizes. Horizontal padding may grow for translated labels, but minimum height and target size remain. Icon sizes refer to Phosphor's SVG box; its stroke and visual alignment follow §8.

| Component | Height / target | Internal spacing | Radius | Notes |
|---|---|---|---|---|
| Primary / secondary / danger button | 44 px minimum; 48 px comfortable | 16 px horizontal padding; 8 px icon–label; 20 px for prominent CTA | 10 px | Label 14 px medium; loading preserves width |
| Tertiary / icon-only button | 44 × 44 px target | 10–12 px internal padding for 20–24 px icon | 10 px | Accessible name required |
| Input / select / search | 44 px minimum | 12 px horizontal padding; 8 px icon–text | 8 px | Mobile text at least 16 px |
| Textarea | 88 px minimum | 12 px padding | 8 px | Grows with content; no fixed clipping |
| Checkbox / radio | 20 px visible control; 44 px label target | 8 px control–label | `--radius-xs` control / `--radius-sm` target | Visible control can be smaller than target |
| Switch | 40 × 24 px visible track; 44 px target | 8 px switch–label | Pill | Hit area includes surrounding space |
| Chip / status badge | 32 px minimum | 10 px horizontal; 4 px icon–label | Pill | Status label always visible |
| Sidebar / tab / table action row | 44 px minimum | 12 px row inset; 8 px icon–label | 8 px active surface | Rows may grow for wrapping |
| Compact / standard / feature card | Content-driven | 16 / 24 / 32 px padding; 16 px content stack | 16 px | Do not impose equal heights on different content |
| Table cell | 44 px row minimum | 12 px vertical; 16 px horizontal | No per-cell radius | Dense tables may use 48–56 px rows where needed |
| Drawer / modal | Content-driven | 24 px mobile / 32 px desktop; 24 px header–body | 24 px large surface | Drawer full-screen on mobile |
| Tooltip | Content-driven | 8 px vertical / 12 px horizontal | 8 px | Keep concise and readable |

If text wraps, **grow height before reducing padding or font size**. A visible 20 px icon inside a 44 px button is valid because the whole button is the hit target. Align icon and label by their visual center, not raw SVG bounds.

### 5.5 Borders, elevation and focus geometry

- Quiet separator: 1 px `--border-default`; a meaningful input/button boundary uses 1 px `--border-control` (see contrast rules in §11).
- Focus ring: 2 px `--focus-ring`, offset 2 px, never hidden behind overflow or adjacent cards.
- Default cards are flat with a border **or** a single subtle shadow. Large drawers may cast one shadow over the scrim. Dark mode relies primarily on surfaces and boundaries.
- Selected navigation uses an 8 px rounded raised surface plus a 3 px active indicator; colour alone does not indicate selection.
- Do not stack a strong shadow, tinted fill and thick border on one card. Do not apply shadows to each table cell or status pill.

### 5.6 Visual proof required in the design-system website

Show a labelled 4 px spacing scale, a real button group (8 px icon gap, 16 px padding, 44 px height), a labelled form stack (16 px field gap), a standard card (24 px padding), and a page-section example (48/64/96 px per breakpoint). Show radius silhouettes at 8, 10, 16, 24 and pill. Provide measurements beside **actual CRM/OMS UI examples**, rather than using unlabeled decorative boxes. The Light and Dark versions keep the same geometry.

---

## 6. Mood imagery

### 6.1 Direction

The mood is calm, capable and natural. Neutral space dominates. Brand colours appear as small physical or graphic cues.

Preferred:

- soft morning or late-afternoon natural light;
- pale neutral desk or workspace;
- a small plant, notebook, documents or tidy operational objects;
- a small Aqua object and a small Blue object;
- realistic materials and quiet composition;
- generous negative space.

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
| relio-mood-workspace.png | PNG | Verify actual export | Proposed RELIO-created imagery | Mood reference; publish only after validating file and provenance |

The mood filename is a proposed delivery name, not proof that an export is available. Verify image dimensions and provenance before showing a download. If an external image is used, show creator, source URL, licence and retrieval date directly under the image.

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
| relio-mascot-duo.png | PNG | Verify actual export | Transparent | Production CRM + OMS pair; proposed filename |
| relio-crm-character-sheet.png | PNG | Verify actual export | Reference sheet | CRM front, side, back and poses; proposed filename |
| relio-oms-character-sheet.png | PNG | Verify actual export | Reference sheet | OMS front, side, back and poses; proposed filename |

Production requirement: verify transparent-background exports for the hero and downloads. Character sheets may retain a neutral reference background if labelled as sheets. Never claim dimensions or availability from a proposed filename.

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

### 11.1 Complete colour token mapping

All UI colours below have a named token in both themes. Each column is the resolved value of the **same token**. Brand asset tokens after the table stay fixed because the official logo and mascot are artwork. Do not use an asset token for functional UI colour. HEX values are opaque; never lower opacity to imitate a listed colour without reassessing contrast.

#### Canvas, text and boundaries

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg-canvas` | #F7F8FA | #18191B | Page canvas |
| `--bg-surface` | #FFFFFF | #222427 | Cards, sidebar and drawer |
| `--bg-raised` | #F0F2F5 | #2D3035 | Selected row or raised panel |
| `--text-primary` | #202124 | #F5F6F7 | Essential text |
| `--text-secondary` | #525866 | #C2C7D0 | Supporting text |
| `--text-quiet` | #667080 | #A0A8B4 | Readable captions |
| `--text-disabled` | #AEB5C0 | #686F79 | Unavailable controls only |
| `--border-default` | #D8DDE5 | #41464F | Decorative dividers |
| `--border-control` | #747D8A | #858E9C | Input/control boundary on surface |
| `--bg-hover` | #E7EAF0 | #34383E | Hovered neutral row or button |
| `--bg-disabled` | #ECEFF3 | #303238 | Disabled controls |
| `--bg-input` | #FFFFFF | #222427 | Input field |
| `--overlay-backdrop` | #202124 | #090A0C | Drawer/modal scrim; use 64% opacity, not for text |
| `--text-link` | #1463D6 | #75A7FF | Clickable text |
| `--text-link-hover` | #0D4DAA | #A2C4FF | Hovered clickable text |
| `--text-placeholder` | #667080 | #A0A8B4 | Placeholder, never sole form label |


#### Actions, icons and navigation

| Token | Light | Dark | Role |
|---|---|---|---|
| `--action-primary-bg` | #1463D6 | #1463D6 | Solid primary action |
| `--action-primary-text` | #FFFFFF | #FFFFFF | Primary button label |
| `--action-primary-hover` | #1158BE | #1158BE | Hover fill; verify text contrast in implementation |
| `--action-primary-active` | #0D4DAA | #0D4DAA | Pressed fill |
| `--focus-ring` | #1463D6 | #75A7FF | 2 px focus indicator |
| `--bg-tooltip` | #202124 | #F5F6F7 | Tooltip surface |
| `--text-tooltip` | #FFFFFF | #202124 | Tooltip content |
| `--icon-primary` | #202124 | #F5F6F7 | Essential icon |
| `--icon-secondary` | #525866 | #C2C7D0 | Supporting icon |
| `--icon-interactive` | #1463D6 | #75A7FF | Clickable or active icon |
| `--icon-disabled` | #AEB5C0 | #686F79 | Unavailable icon |
| `--action-secondary-bg` | #FFFFFF | #222427 | Secondary button |
| `--action-secondary-text` | #202124 | #F5F6F7 | Secondary label and icon |
| `--action-secondary-border` | #747D8A | #858E9C | Secondary outline |
| `--action-tertiary-hover` | #E7EAF0 | #34383E | Text/ghost button hover surface |
| `--action-danger-bg` | #B42318 | #B42318 | Destructive button fill |
| `--action-danger-text` | #FFFFFF | #FFFFFF | Destructive button label and icon |
| `--action-danger-hover` | #8F1B13 | #8F1B13 | Destructive hover fill |
| `--action-danger-active` | #76170F | #76170F | Destructive pressed fill |
| `--action-disabled-bg` | #ECEFF3 | #303238 | Unavailable button fill |
| `--action-disabled-text` | #AEB5C0 | #686F79 | Unavailable button label and icon |
| `--nav-active-bg` | #F0F2F5 | #2D3035 | Selected navigation/tab surface |
| `--nav-active-indicator` | #1463D6 | #75A7FF | Selected marker, 3 px |
| `--check-selected-bg` | #1463D6 | #1463D6 | Checkbox and switch on-track |
| `--check-selected-icon` | #FFFFFF | #FFFFFF | Check mark and switch glyph |
| `--switch-off-track` | #747D8A | #858E9C | Switch off-track |
| `--switch-thumb` | #FFFFFF | #FFFFFF | Switch thumb |


#### CRM, OMS and status

| Token | Light | Dark | Role |
|---|---|---|---|
| `--brand-crm-graphic` | #28C6CD | #5EDAE0 | CRM graphic marker, never small light-theme text |
| `--brand-crm-text` | #087F8C | #5EDAE0 | CRM links or labels on surface |
| `--brand-oms-text` | #1463D6 | #75A7FF | OMS links or labels on surface |
| `--accent-warm-ui` | #FC9433 | #FC9433 | Tiny orange marker; never default body text |
| `--crm-badge-bg` | #DDF7F8 | #12383C | CRM contextual badge surface |
| `--crm-badge-text` | #076F7A | #5EDAE0 | CRM contextual badge label |
| `--oms-badge-bg` | #E1ECFF | #162D50 | OMS contextual badge surface |
| `--oms-badge-text` | #1463D6 | #75A7FF | OMS contextual badge label |
| `--success-bg` | #DDF5E8 | #173526 | Success message surface |
| `--success-text` | #18734A | #75D9A2 | Success text and icon |
| `--warning-bg` | #FFF0D0 | #3D2D16 | Warning message surface |
| `--warning-text` | #8A4B08 | #FFD18A | Warning text and icon |
| `--danger-bg` | #FFE4E1 | #421F1E | Error message surface |
| `--danger-text` | #B42318 | #FF9A91 | Error text and icon |
| `--info-bg` | #E1ECFF | #182E50 | Information message surface |
| `--info-text` | #1463D6 | #A2C4FF | Information text and icon |
| `--input-error-border` | #B42318 | #FF9A91 | Invalid input boundary |
| `--input-valid-border` | #18734A | #75D9A2 | Valid input boundary if explicitly shown |


#### Data, loading and charts

| Token | Light | Dark | Role |
|---|---|---|---|
| `--table-stripe` | #F0F2F5 | #2D3035 | Alternate data row |
| `--table-selection-bg` | #E1ECFF | #162D50 | Selected row, add checkbox or label |
| `--skeleton-base` | #E7EAF0 | #34383E | Loading placeholder |
| `--skeleton-highlight` | #F0F2F5 | #41464F | Loading shimmer, reduced-motion static |
| `--chart-crm` | #087F8C | #5EDAE0 | CRM data series |
| `--chart-oms` | #1463D6 | #75A7FF | OMS data series |
| `--chart-other` | #667080 | #C2C7D0 | Other data series |
| `--chart-grid` | #D8DDE5 | #41464F | Non-essential chart gridline |

Fixed artwork colours: `--asset-logo-aqua: #087F8C`, `--asset-logo-blue: #1463D6`, `--asset-logo-ink: #082451`, `--asset-mascot-crm: #28C6CD`, `--asset-mascot-oms: #1463D6`, `--asset-mascot-eye: #011F5D`, `--asset-mascot-face: #FBF1E5`, `--asset-mascot-tab: #FC9433`. These do not switch with theme. A dark-background logo needs a separately approved light-wordmark asset rather than overriding `--asset-logo-ink`.

The border-default colours are quiet separators and do **not** reach 3:1 on their surfaces. Use `--border-control` for input edges and meaningful boundaries. Raised-surface colour alone does not identify an active item: add a label, icon or indicator. Disabled colours are intentionally lower contrast and cannot carry information required to finish a task.

### 11.2 Theme behaviour

- First visit starts in Light Mode, regardless of device colour-scheme preference.
- Save an explicit user choice locally and restore that choice on later visits. An unset preference always means Light Mode.
- Theme switching must not reload the page.
- Icons, text and borders must remain readable.
- Dark mode uses charcoal neutrals, not a teal-tinted night canvas.
- Do not invert mascot images automatically.

---

## 12. Component specifications

### 12.1 Choose and assemble a component

| Need | Component | Geometry | Required behaviour |
|---|---|---|---|
| Commit one outcome | Primary button | §5.4: 44 px target, 10 px radius | Outcome label; stable loading width; one per group |
| Offer another choice | Secondary / tertiary button | §5.4 | Preserve primary hierarchy; icon inherits label colour |
| Enter a value | Input / select / textarea | §5.4 | Visible label, help, focus, inline error and retained value |
| Group information | Card | §5.4 | Related content only; flat surface or one subtle shadow |
| Move between areas | Sidebar / tabs | §5.4 and §21 | Active label + indicator; keyboard/current-section semantics |
| Convey state | Badge / empty state | §5.4 and §19 | Icon + text; empty state explains next step |

Use the Light/Dark state matrix below for colour. Use §5 for measurements, §19 for task flow and §21 for reflow. A 120–160 px mascot can support an empty state, but cannot replace its heading, sentence or action.

### 12.2 Component colour contract (Light and Dark)

All names below refer to the theme-resolved tokens in §11.1. The token's Light and Dark values are defined there and in §18.1. Icon colour inside a button, badge or status message **inherits the corresponding label colour**; do not assign a separate brand hue. Phosphor icon stroke uses `currentColor`. Keep one visual primary action per group. Focus is independent of hover or selected state and must remain visible on both surfaces.

| Component | Default colour roles | Hover / selected / active | Focus, loading, disabled or error |
|---|---|---|---|
| Primary button | `--action-primary-bg`, `--action-primary-text`; icon `currentColor` | `--action-primary-hover` / `--action-primary-active`; same text | `--focus-ring`; loading retains label and fill with spinner; disabled uses `--action-disabled-bg` / `--action-disabled-text` |
| Secondary button | `--action-secondary-bg`, `--action-secondary-text`, `--action-secondary-border`; icon `currentColor` | Background `--bg-hover`; pressed `--bg-raised`; text unchanged | `--focus-ring`; disabled colours and no activation |
| Tertiary / icon-only button | Transparent on `--bg-surface`, `--text-link` or `--icon-interactive`; icon-only needs accessible name | `--action-tertiary-hover`; pressed `--bg-raised`; icon/text unchanged | `--focus-ring`; loading keeps footprint; disabled `--icon-disabled` |
| Danger button | `--action-danger-bg`, `--action-danger-text`; icon `currentColor` | `--action-danger-hover` / `--action-danger-active` | `--focus-ring`; disabled neutral, not faded red; confirmation for irreversible action |
| Page heading / body / caption | `--text-primary` / `--text-primary` / `--text-quiet` on canvas or surface | No decorative colour change | Essential text cannot use `--text-disabled` |
| Supporting text / link / placeholder | `--text-secondary` / `--text-link` / `--text-placeholder` | Link `--text-link-hover`; underline on hover and keyboard focus | Link `--focus-ring`; placeholder never replaces a label |
| Standalone icons | `--icon-primary` for actions, `--icon-secondary` for support | Clickable `--icon-interactive`; selected uses same with text label | `--focus-ring` around interactive target; disabled `--icon-disabled` |
| Sidebar item / tab | `--bg-surface`, `--text-secondary`, `--icon-secondary` | Hover `--bg-hover`; selected `--nav-active-bg`, `--text-primary`, `--nav-active-indicator`; active still keeps indicator | `--focus-ring`; selected needs `aria-current` / `aria-selected` and not colour alone |
| Input / textarea / select | `--bg-input`, `--text-primary`, `--text-placeholder`, `--border-control`; external label `--text-primary` | Hover keeps control border visible; selected value `--text-primary` | Focus `--focus-ring`; error `--input-error-border` + `--danger-text` message/icon; disabled `--bg-disabled`, `--text-disabled` |
| Checkbox / radio / switch | `--border-control`; unselected switch `--switch-off-track` / `--switch-thumb` | Selected `--check-selected-bg` / `--check-selected-icon` with checked state and label | `--focus-ring`; disabled neutral colours; errors have message, not red outline alone |
| Card / drawer / tooltip | `--bg-surface`, `--text-primary`, `--border-default`; tooltip `--bg-tooltip` / `--text-tooltip` | Interactive card hover `--bg-hover` only when whole card is clickable | Interactive cards receive `--focus-ring`; scrim `--overlay-backdrop` at 64% and keeps dialog text on opaque surface |
| Badge / chip / status alert | CRM/OMS `--crm-badge-*` / `--oms-badge-*`; status `--success-*`, `--warning-*`, `--danger-*`, `--info-*` pairs | Selected chip adds check or label; hover only if actionable | Icon inherits badge label colour; errors include corrective text |
| Data table | `--bg-surface`, `--text-primary`, `--border-default`; alternate `--table-stripe` | Hover `--bg-hover`; selected `--table-selection-bg` with checkbox/label | Row actions `--focus-ring`; disabled values remain readable if needed, never dim essential data |
| Skeleton / progress | `--skeleton-base` / `--skeleton-highlight`; progress track `--bg-raised`, completed OMS `--brand-oms-text` | No interactive hover | Respect reduced motion; progress has visible value/label, not colour only |
| Chart | `--chart-crm`, `--chart-oms`, `--chart-other`, `--chart-grid` | Highlight selected series with label and stronger line, not hue alone | Add text legend, data labels/tooltip and shape/line differentiation; essential chart labels use `--text-primary` |

Text and icon contrast is checked against the **immediate** background (including hover/selected surfaces). Normal text and meaningful icon strokes target at least 4.5:1; non-text control boundaries/focus at least 3:1. The Light CRM label `--brand-crm-text` is only 4.23:1 on `--bg-raised`; use `--crm-badge-text` (#076F7A) for CRM text on that raised surface. Primary and Danger button white labels exceed 4.5:1 across default, hover and active fills. Do not place a coloured icon beside neutral text solely for decoration. Disabled colours are intentionally exempt from essential-text contrast because the action is unavailable; if the reason matters, show it in readable `--text-secondary` outside the disabled control.

---

## 13. Design-system website specification

### 13.1 Main-page sections

Use this order:

1. Overview
2. Brand Concept & Personality
3. Logo Direction
4. Colour Palette & Usage Ratio
5. Typography, Fonts, Spacing & Shape
6. Mood Imagery and Graphic Style
7. Icons & Shapes
8. Mascot Direction and Assets
9. Brand Voice, Guidelines and Don't
10. Light & Dark Foundations
11. Component States and Product Usage
12. Resources, Accessibility and Version

### 13.2 Hero

- Left: eyebrow, RELIO, Design System, one-sentence description and two actions.
- Right: transparent CRM + OMS image floating directly on the page.
- No image card, grid, framed panel or caption strip.
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
- relio-mascot-duo.png
- relio-crm-character-sheet.png
- relio-oms-character-sheet.png
- relio-mood-workspace.png
- relio-tokens.css
- relio-tokens.json

Do not publish filenames such as final-final-2.png or untitled-design.png.

---

## 15. Breakpoints and page layout

| Width | Page structure | Section rhythm |
|---|---|---|
| Below 768 px | One column, Menu navigation, full-screen detail drawer | 48 px separation, 16 px side gutter |
| 768–1279 px | Flexible one/two-column content, no fixed sidebar | 64 px separation, 24 px side gutter |
| 1280 px and above | 240 px fixed sidebar, main content max-width 1120 px | 96 px separation, 32 px side gutter |

§21 is the **authoritative component reflow table** for filters, forms, tables, buttons, tabs, charts and drawers. No horizontal page scroll; controlled table, tab and code scrolling may have a visible affordance.

---

## 16. Accessibility

- Essential text follows WCAG AA; measure the immediate background as described in §3.4 and §12.2.
- Body text contrast target: 4.5:1.
- Large text contrast target: 3:1.
- CRM Aqua #28C6CD is decorative on light backgrounds; use Deep Aqua #087F8C for text on white and #076F7A on the CRM tinted badge.
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
- Do not animate every section on scroll.
- Do not use springy button motion.

---

## 18. Implementation token starter

### 18.1 CSS variables

The CSS implements every colour in §11.1 and §12.2. Static asset tokens never change by theme. Import these variables once, set `data-theme="dark"` only after an explicit user choice, and compose components from semantic roles:

```css
.relio-button-primary { background: var(--action-primary-bg); color: var(--action-primary-text); }
.relio-button-primary:hover { background: var(--action-primary-hover); }
.relio-icon-in-button { color: currentColor; }
.relio-card { background: var(--bg-surface); color: var(--text-primary); }
```

The full variable set follows.

```css
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
```

### 18.2 Font loading

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap" rel="stylesheet">

---

## 19. CRM/OMS product patterns

Component anatomy (§5.4) and colour states (§12.2) apply to all patterns below. Examples describe interaction behaviour, not production data or a fully approved screen layout. Write user-facing copy in Thai by default and provide a complete English equivalent.

| Pattern | Default behaviour | Loading / empty / error | Accessibility and next action |
|---|---|---|---|
| Search | Labelled field, 44 px target, search by customer name/ID or order ID; Enter submits; clear control named | Preserve query during loading; “ไม่พบลูกค้าที่ตรงกับ ‘…’” offers clear filters; error preserves query | Announce result count; keyboard reaches clear/search; show one relevant next step |
| Filters | Show active filter count and removable chips; “ล้างตัวกรอง” clears all; preserve search | Empty state explains filters may hide results | Do not rely on chip colour; all controls labelled; mobile opens a focus-managed sheet |
| Sort | Explicit column/name and ascending/descending label; stable sort for ties | Loading keeps last visible data without fake final status | `aria-sort` on sortable header; button announces direction |
| Pagination | Show range and total if known, 44 px previous/next targets; page resets to first when filters change | Disable unavailable direction; avoid claiming total before response | Announce current page/range; keep focus near changed results |
| Create/edit customer or order | Label required fields, preserve entered values, one outcome-labelled primary action | Pending action prevents duplicate submits; inline error beside field; success states result and next step | Error summary links to invalid fields; focus first error; unsaved changes need a clear leave choice |
| Confirmation | Reserve for irreversible or material changes, state object and consequence in plain words | Pending action retains dialog size; failure keeps dialog and remedy | Initial focus on safe action where appropriate; Escape closes only if action is not pending |
| Empty / loading / error | Helpful heading, one explanatory sentence, one action; skeleton resembles final geometry | Never show ten blank placeholders as data; failure offers retry and keeps context | Announce completion or failure; mascot optional, not sole explanation |
| Status feedback | Icon + text + timestamp where relevant | “กำลังบันทึก…” then “บันทึกออเดอร์แล้ว”; do not show success early | Live region for meaningful updates; status never uses hue alone |

Selection in a CRM table carries the customer context; an OMS order table carries order context. Use an explicit selected count and bulk actions only after selection. A destructive bulk action must name the number of records. Forms and data tables use the same 4 px spacing foundation; their density differs through component padding, not a new token scale.

---

## 20. Typography for real product data

Bai Jamjuree is the primary Thai/Latin family (§4). Product data must remain readable at practical widths. Thai tracking stays 0; numeric columns use `font-variant-numeric: tabular-nums`; preserve the user's actual spelling rather than forcing uppercase or transliteration.

| Data | Thai example | English example | Rendering rule |
|---|---|---|---|
| Customer name | ชยาดา พิมลพรรณ | Chayada Pimonpan | Body 16 px; wrap to 2 lines before truncating; full value in detail view |
| Order ID | `ORD-2026-00428` | `ORD-2026-00428` | Body Small 14 px medium; tabular numbers; never break within ID; copy action |
| Currency | ฿1,250.00 | THB 1,250.00 | Tabular numbers; right-aligned in numeric columns; show currency explicitly |
| Date/time | 15 ก.ย. 2569, 14:30 น. | 15 Sep 2026, 14:30 | Format with the product locale and timezone; do not mix Buddhist and Gregorian year conventions in one locale |
| Status | รอดำเนินการ | Pending | 14 px label in coloured badge with icon; no all-caps-only hierarchy |
| Validation | กรุณากรอกอีเมล | Enter an email address | 14 px, line-height ≥1.55 for Thai; placed below the field |
| Long description | Customer/order note | Customer/order note | Body 16 px, line-height 1.60; natural wrapping; no clipped content |
| Table heading | ยอดรวม | Total | Label 14 px medium; allow 2 lines or responsive layout, never shrink below readable size |

Long names and notes wrap or open in detail views. Truncation is allowed only when the full value is available through a keyboard/touch-accessible disclosure; title attributes alone are insufficient. Keep icons and numerals vertically aligned with Thai text. Use concise parallel translations, not English words inserted into a Thai sentence except proper names and accepted product terms. Screens must be tested with real-length Thai names, currency, dates, empty values and error copy.

---

## 21. Responsive component rules

The page breakpoints are in §15; component rules below define behaviour within those layouts. Spacing stays 4 px based. Minimum touch targets stay 44 × 44 px. Text and data are not removed simply to make a layout fit.

| Component | Mobile <768 px | Tablet 768–1279 px | Desktop ≥1280 px |
|---|---|---|---|
| Sidebar/navigation | Menu button opens labelled, focus-managed full-height navigation; active item visible | Collapsible navigation or compact top bar | 240 px sidebar, 44 px rows |
| Search/filter/sort | Search full width; filters and sort in sheet; active chips wrap | Search plus adjacent filter controls if width allows | Inline search/filter/sort with no competing primary buttons |
| Table | Essential columns become stacked labelled rows/cards, or horizontal scroll with visible affordance and sticky identity column; never silently hide values | Scroll/table layout depending on actual content width | Full data table, stable header and aligned numeric columns |
| Form | One column; label above field; sticky action only with safe-area padding and unobscured content | One or two columns only for related fields | Two columns for related fields, full-width long notes |
| Buttons | Primary full width when it is the page's action; secondary can stack below; icon-only target remains 44 px | Row if labels fit | Inline group; one filled primary action |
| Tabs/chips | Scrollable labelled tabs with visible overflow cue; chips wrap | Fit or scroll without clipping | Inline tab row |
| Drawer/modal | Full screen with visible close, scrollable body and safe-area action region | Modal/drawer sized to content | Right drawer 48–55vw, max 820 px, independent scroll |
| Cards/chart | Single column; chart legend below; meaningful labels retained | Two columns when readable | Grid with 20–24 px gutters; no arbitrary equal heights |
| Tooltip | Essential help appears in accessible popover or inline text; hover is not required | Touch/keyboard path provided | Hover plus keyboard focus, never hover only |

Test 320, 375, 768, 1024 and 1280 px widths with Thai and English content. Avoid horizontal **page** scrolling; controlled table/tab/code scrolling is allowed with clear affordance. Reflow at zoom 200%; fixed actions and drawers must not obscure their own content. If a component cannot fit, simplify layout or increase height before reducing type or hit area.

---

## 22. Assets, component naming and version governance

### 22.1 Asset status

The supplied `relio-logo.svg` is the source logo described in §2. A horizontal lockup, mark-only app icon, light-wordmark dark-surface variant and favicon are **specified deliverables**, not approved master assets yet. Do not label a newly drawn version “official” until its geometry, clear space, minimum size and contrast are reviewed against the master. The mark-only icon must remain recognizable at 16, 24 and 32 px; avoid placing the full wordmark inside a tiny app icon. Validate an actual export before listing a download; do not publish invented filenames or dimensions.

| Deliverable | Proposed filename | Acceptance evidence |
|---|---|---|
| Horizontal lockup | `relio-logo-horizontal.svg` | Approved master proportions, clear space, light/dark previews |
| Mark-only app icon | `relio-app-icon.svg` | 16/24/32 px recognition and platform-mask crop check |
| Dark-surface logo | `relio-logo-on-dark.svg` | Approved light wordmark; bubble order unchanged; contrast check |
| Design tokens | `relio-tokens.json`, `relio-tokens.css` | Generated from one canonical set; Light/Dark parity, no undefined aliases |
| Component specimens | `relio-component-specimens.md` | Sizes, states, keyboard, mobile and both themes |

### 22.2 Component and token naming

Use `Component / Variant / State / Size` in design files, e.g. `Button / Primary / Hover / Default` and `Input / Search / Error / Default`. State names are `default`, `hover`, `active`, `focus`, `loading`, `disabled`, `selected`, `success` and `error` where applicable. Token names use lowercase kebab-case and roles (`--action-primary-bg`, not `--blue-500-button`). A new colour needs a role, both theme values, immediate-background contrast check, component owner and documented use. Reuse a token rather than duplicating HEX values inside components.

### 22.3 Changes and review

The `.md` is the human-readable source of truth. JSON and CSS exports must match the approved token table and must be regenerated after a token change. Each revision records version, date, changed token/component, before/after values, affected screens, Light/Dark accessibility result and asset filenames. Correcting documentation without changing UI raises the patch version; changing a component's geometry or visual role raises the minor version; breaking existing token/component names requires a major version and migration note. Review colour, Thai/English content, keyboard, responsive and representative CRM/OMS screens before calling a revision approved. Keep deprecated names documented until consumers migrate; never silently change a token's meaning.

---

## 23. Quality checklist

Before publishing:

- [ ] Neutral page foundation is used.
- [ ] Aqua and Blue do not flood the page.
- [ ] Hero mascot has no visible background card or grid.
- [ ] Thai and English controls work.
- [ ] Light and dark controls work.
- [ ] Details drawer opens on the right and closes with Escape.
- [ ] Drawer tabs, copy and downloads work.
- [ ] All colours are visible with HEX, token and role.
- [ ] Buttons, icons, navigation, forms, badges, tables and charts use the component colour contract in both themes.
- [ ] Hover, active, focus, error, loading and disabled states are checked on their immediate backgrounds.
- [ ] Typography scale shows size, weight, line-height and token.
- [ ] Spacing and radius include visual examples.
- [ ] Product patterns, Thai/English data and component responsive rules are represented in real CRM/OMS examples.
- [ ] Proposed logo variants remain clearly marked until approved and validated.
- [ ] Icons show name, size and weight.
- [ ] Guidelines and Don't are visually distinct.
- [ ] CRM and OMS character sheets are large and downloadable.
- [ ] Every download shows its file extension.
- [ ] Focus and keyboard navigation work.
- [ ] Mobile layout has no horizontal page scroll.
- [ ] External imagery includes source and licence.
- [ ] Version and change summary are visible.

---

## 24. Change log

### Version 2.4.1 — 15 September 2026

- Reorganized the document around quick-start routes and canonical values; consolidated repeated colour, component and responsive guidance.
- Clarified proposed versus verified downloadable assets and removed conflicting preview names.

### Version 2.4 — 15 September 2026

- Added product patterns, real Thai/English data typography, component-level responsive behaviour and asset/version governance.
- Marked logo variants and app icon as proposed assets pending visual approval and export validation.

### Version 2.3 — 15 September 2026

- Locked the 4 px spacing scale, responsive section rhythm, component anatomy and radius rules.
- Added measurable CRM/OMS spacing demonstrations required on the design-system website.

### Version 2.2 — 15 September 2026

- Defined theme-resolved colour tokens and states for all core components, icons, text, navigation, forms, data display and loading.
- Added a component-level Light/Dark colour contract and corrected control-border contrast on raised light surfaces.

### Version 2.1 — 15 September 2026

- Set Light Mode as the unconditional first-visit default, retaining explicit theme choices.
- Defined every UI colour token in both modes and isolated fixed artwork colours.
- Added theme-specific CRM/OMS badges, semantic states, button fills, control borders and contrast guidance.
- Corrected quiet Light Mode text and CRM badge text for normal-text contrast.

### Version 2.0 — 15 September 2026

- Replaced green-heavy foundation with neutral light and charcoal dark foundations.
- Promoted CRM Aqua and OMS Blue as the two main mascot-derived brand colours.
- Changed hero mascot treatment to transparent floating imagery.
- Defined bilingual and theme controls.
- Defined right-side Details drawer.
- Added complete colour, typography, spacing, radius and icon specifications.
- Added asset metadata and naming rules.
- Added component states, responsive behaviour and accessibility.
- Allowed sourced mood imagery and documented an intended RELIO reference direction; asset availability must be verified.

### Version 1.0

- Initial brand and interface direction.
- Superseded where it conflicts with version 2.0.
