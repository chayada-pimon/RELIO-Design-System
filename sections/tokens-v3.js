// CRM Center v3 tokens — mirrors project/tokens.json of the CRM Center design system.
// Colour rows: [name, light, dark, usage TH, usage EN].

export var colorGroups = [
  {
    id: "neutral", th: "สีกลาง (เนื้อหา)", en: "Neutrals (content)",
    items: [
      ["bg-canvas", "#f7f8fa", "#18191b", "พื้นแผงเนื้อหาและพื้นหน้า", "Content panel and page background"],
      ["bg-surface", "#ffffff", "#222427", "การ์ด ตาราง ช่องกรอก ป๊อปโอเวอร์ โมดัล", "Cards, tables, inputs, popovers, modals"],
      ["bg-raised", "#f0f2f5", "#2d3035", "หัวตาราง แท็บที่เลือก ชิปไอคอน", "Table header, selected tab, icon chips"],
      ["bg-hover", "#e7eaf0", "#34383e", "โฮเวอร์ปุ่มรอง แถวเมนู ปุ่มไอคอน", "Hover for default/ghost buttons, menu rows"],
      ["bg-disabled", "#eceff3", "#303238", "พื้นปุ่มและช่องกรอกที่ปิดใช้งาน", "Disabled button and input fill"],
      ["text-primary", "#202124", "#f5f6f7", "หัวข้อ เนื้อความ ค่าในตาราง", "Headings, body copy, cell values"],
      ["text-secondary", "#525866", "#c2c7d0", "คำอธิบายหน้า หัวตาราง ประโยคประกอบ", "Page descriptions, table headers"],
      ["text-quiet", "#667080", "#a0a8b4", "placeholder คำใบ้ เมทาดาทา (4.9:1)", "Placeholders, hints, metadata (4.9:1)"],
      ["text-disabled", "#aeb5c0", "#686f79", "ข้อความที่ปิดใช้งานเท่านั้น", "Disabled labels only"],
      ["border-default", "#d8dde5", "#41464f", "เส้นขอบ 1px ของการ์ด ตาราง ช่องกรอก", "1px hairline on cards, tables, inputs"],
      ["border-control", "#747d8a", "#858e9c", "ขอบปุ่มรอง checkbox (3:1)", "Default button and checkbox outline (3:1)"],
      ["scrim", "rgba(32, 33, 36, 0.4)", "rgba(9, 10, 12, 0.7)", "ฉากหลังโมดัลและเมนูมือถือ", "Behind modals and the mobile drawer"]
    ]
  },
  {
    id: "brand", th: "สีแบรนด์", en: "Brand",
    items: [
      ["brand-crm-graphic", "#28c6cd", "#5edae0", "CRM Aqua สำหรับกราฟิก ห้ามใช้กับตัวอักษรบนขาว", "CRM Aqua for graphics only, not text"],
      ["brand-crm-text", "#087f8c", "#5edae0", "Deep Aqua ข้อความบริบท CRM และเมนูที่เลือก", "CRM text, active nav on CRM pages"],
      ["brand-oms-text", "#1463d6", "#75a7ff", "OMS Blue ข้อความ ลิงก์ ชื่อผู้ใช้ในคำทักทาย", "OMS text, links, greeting name"],
      ["accent-warm-ui", "#fc9433", "#fc9433", "Action Orange จุดเล็ก ๆ ไม่เกิน 2%", "Tiny markers, under 2% of a view"],
      ["crm-badge-bg", "#ddf7f8", "#12383c", "พื้นอ่อน CRM: แท็ก อวาตาร์ ชิป", "Soft CRM fill: tags, avatars, chips"],
      ["crm-badge-text", "#076f7a", "#5edae0", "ข้อความบน crm-badge-bg", "Text and icons on crm-badge-bg"],
      ["oms-badge-bg", "#e1ecff", "#162d50", "พื้นอ่อน OMS: ชิปและแบดจ์ออเดอร์", "Soft OMS fill: chips, order badges"],
      ["oms-badge-text", "#1463d6", "#75a7ff", "ข้อความบน oms-badge-bg", "Text and icons on oms-badge-bg"],
      ["logo-ink", "#082451", "#f5f6f7", "หมึกโลโก้ RELIO (แบรนด์แม่)", "RELIO wordmark ink (parent brand)"]
    ]
  },
  {
    id: "portal", th: "โครงพอร์ทัล (สีน้ำเงิน)", en: "Portal chrome",
    items: [
      ["portal-blue-100", "#2f6ee0", "#1f4fa8", "เมนูและพื้นหลัง radial จุดบน (ขาว 4.7:1)", "Sidebar backdrop radial, top stop"],
      ["portal-blue-200", "#1d59cc", "#173e8a", "เมนูและพื้นหลัง radial จุดกลาง", "Sidebar backdrop radial, middle stop"],
      ["portal-blue-300", "#1546ad", "#0e2c66", "เมนูและพื้นหลัง radial จุดนอก", "Sidebar backdrop radial, outer stop"],
      ["portal-mark", "#1450cc", "#1450cc", "ไทล์โลโก้ CC และตัวอักษรเมนูที่เลือก", "CC logo tile, active nav label"],
      ["on-portal", "#ffffff", "#ffffff", "ข้อความบนเมนูน้ำเงิน (90% / 75%)", "Text on the blue sidebar (90% / 75%)"],
      ["brand-gradient-from", "#e1ecff", "#1b3561", "ศูนย์กลางสว่างของ Dashboard hero", "Dashboard hero radial, light centre"],
      ["brand-gradient-to", "#1463d6", "#0d3f8f", "ขอบนอกของ Dashboard hero", "Dashboard hero radial, outer edge"],
      ["login-sky", "#8ab8ff", "#8ab8ff", "ภาพหน้า login จุดบน", "Login illustration, top stop"],
      ["login-blue", "#3f86f5", "#3f86f5", "ภาพหน้า login จุด 45%", "Login illustration, 45% stop"],
      ["login-deep", "#1655d6", "#1655d6", "ภาพหน้า login จุดนอก", "Login illustration, outer stop"]
    ]
  },
  {
    id: "action", th: "การกระทำและโฟกัส", en: "Action & focus",
    items: [
      ["action-primary-bg", "#1463d6", "#1463d6", "ปุ่มหลักหนึ่งปุ่มต่อกลุ่ม checkbox ที่เลือก", "The one primary button per group"],
      ["action-primary-hover", "#1158be", "#1158be", "ปุ่มหลักตอนโฮเวอร์", "Primary button hover"],
      ["action-primary-active", "#0d4daa", "#0d4daa", "ปุ่มหลักตอนกด", "Primary button pressed"],
      ["action-primary-text", "#ffffff", "#ffffff", "ข้อความบนปุ่มหลัก (5.1:1)", "Label on action-primary-bg (5.1:1)"],
      ["focus-ring", "#1463d6", "#75a7ff", "เส้นโฟกัส 2px ห่าง 2px", "2px outline, 2px offset"]
    ]
  },
  {
    id: "status", th: "สีสถานะ", en: "Status",
    items: [
      ["success-bg", "#ddf5e8", "#173526", "พื้นแท็กและ alert สำเร็จ", "Success tag and alert fill"],
      ["success-text", "#18734a", "#75d9a2", "ข้อความสำเร็จ คู่กับ CheckCircle", "Success text, with CheckCircle"],
      ["warning-bg", "#fff0d0", "#3d2d16", "พื้นแท็กและ alert เตือน", "Warning tag and alert fill"],
      ["warning-text", "#8a4b08", "#ffd18a", "ข้อความเตือน คู่กับ WarningCircle", "Warning text, with WarningCircle"],
      ["danger-bg", "#ffe4e1", "#421f1e", "พื้นแท็ก alert และ count badge ผิดพลาด", "Error tag, alert, count badge fill"],
      ["danger-text", "#b42318", "#ff9a91", "ข้อความผิดพลาด คู่กับ XCircle", "Error text, with XCircle"],
      ["info-bg", "#e1ecff", "#182e50", "พื้นแท็กและ alert ข้อมูล", "Info tag and alert fill"],
      ["info-text", "#1463d6", "#a2c4ff", "ข้อความข้อมูล คู่กับ Info", "Info text, with Info"],
      ["table-selection-bg", "#e1ecff", "#162d50", "ตัวเลือกใน Select และแถวตารางที่เลือก", "Selected option and table rows"]
    ]
  },
  {
    id: "chart", th: "กราฟและมาตรวัด", en: "Charts & meters",
    items: [
      ["chart-crm", "#0b97a3", "#15a3ac", "ชุดข้อมูลลูกค้า", "Customer series"],
      ["chart-oms", "#1463d6", "#4a7fe8", "ชุดข้อมูลคำสั่งซื้อ", "Order series"],
      ["chart-grid", "#e7eaf0", "#34383e", "เส้นกริดกราฟ", "Chart gridlines"],
      ["meter-warning", "#e08a00", "#f5a524", "แถบความคืบหน้าระดับเตือน", "Meter fill, warning"],
      ["meter-danger", "#e5484d", "#f76b6b", "แถบความคืบหน้าระดับอันตราย", "Meter fill, danger"]
    ]
  }
];

export var fontSans = "\"Noto Sans Thai\", Arial, ui-sans-serif, system-ui, sans-serif";
export var fontBrand = "\"Bai Jamjuree\", \"Noto Sans Thai\", Arial, ui-sans-serif, system-ui, sans-serif";

// [name, size, lineHeight, weight, sample TH, sample EN, usage TH, usage EN]
export var typeGroups = [
  {
    name: "Portal headings", family: "sans",
    styles: [
      ["hero-greeting", 36, 1.25, 600, "สวัสดีตอนเช้า, somchai", "Good morning, somchai", "คำทักทาย Dashboard (28px ต่ำกว่า md)", "Dashboard greeting (28px below md)"],
      ["login-title", 36, 1.2, 600, "ยินดีต้อนรับ", "Welcome back", "หัวข้อฟอร์ม login (32px ต่ำกว่า sm)", "Login heading (32px below sm)"],
      ["page-title", 30, 1.25, 600, "ลูกค้า", "Customers", "หัวข้อหน้า h1 (26px ต่ำกว่า md)", "PageHeader h1 (26px below md)"],
      ["stat-value", 26, 1.2, 600, "฿1,284,500", "฿1,284,500", "ตัวเลขใน StatTile ใช้ tabular-nums", "StatTile figure, tabular-nums"],
      ["dialog-title", 20, 1.4, 600, "เพิ่มผู้ใช้งาน", "Add a user", "หัวข้อโมดัล", "Modal title"],
      ["section-title", 18, 1.4, 600, "ประวัติคำสั่งซื้อ", "Order history", "หัวข้อในการ์ดและ Empty state", "Card section and empty-state heading"],
      ["brand-name", 17, 1.4, 600, "CRM Center", "CRM Center", "ชื่อโลโก้ข้างไทล์ CC", "Logo wordmark next to the CC tile"]
    ]
  },
  {
    name: "Portal text", family: "sans",
    styles: [
      ["lead", 15, 1.6, 400, "รายชื่อลูกค้าทุกช่องทางของบริษัทที่เลือก", "Every customer across the selected company's channels", "คำอธิบายหน้า 1 ประโยค สูงสุด 66ch", "One-sentence page description, max 66ch"],
      ["body", 14, 1.55, 400, "ดูรายชื่อลูกค้าที่เพิ่งเข้ามาและตรวจข้อมูลซ้ำ", "Review new customers and check for duplicates", "ข้อความ UI หลัก", "Default UI text"],
      ["label", 14, 1.4, 500, "บันทึกลูกค้า", "Save customer", "ปุ่ม ป้ายฟอร์ม แถวเมนู", "Buttons, form labels, nav rows"],
      ["input", 16, 1.5, 400, "name@company.co.th", "name@company.co.th", "ข้อความในช่องกรอกต่ำกว่า md (14px ตั้งแต่ md)", "Input text below md (14px from md)"],
      ["table-head", 13, 1.4, 500, "วันที่สั่งซื้อ", "Order date", "หัวตาราง ปุ่มขนาดเล็ก", "Table headers, small buttons"],
      ["caption", 12, 1.5, 400, "ข้อมูลถึง 28 ก.ย. 2569", "Data as of 28 Sep 2026", "เมทาดาทา โน้ตสถิติ หัวข้อกลุ่มเมนู", "Metadata, stat notes, nav headings"]
    ]
  },
  {
    name: "RELIO brand (parent)", family: "brand",
    styles: [
      ["relio-display", 64, 1.05, 600, "RELIO", "RELIO", "งานการตลาดและแอป RELIO เท่านั้น ไม่ใช้ในพอร์ทัล", "RELIO marketing only, not in the portal"]
    ]
  }
];

// [name, value, usage TH, usage EN]
export var spacing = [
  ["space-1", "4px", "ระยะไอคอนกับป้าย", "Icon-to-label gap"],
  ["space-2", "8px", "ระยะปุ่มในแถบบน", "Header control gap"],
  ["space-3", "12px", "ระยะในแถวเมนูและช่องกรอก", "Menu row and input padding"],
  ["space-4", "16px", "ระยะกริดการ์ด ขอบหน้ามือถือ", "Card grid gap, mobile gutter"],
  ["space-5", "20px", "padding ของ StatTile", "StatTile padding"],
  ["space-6", "24px", "padding การ์ดและโมดัล", "Card and modal padding"],
  ["space-8", "32px", "ขอบหน้าที่ xl, padding hero", "Gutter at xl, hero padding"],
  ["space-10", "40px", "padding แนวตั้งของ Empty state", "Empty-state vertical padding"]
];

export var radii = [
  ["radius-xs", "4px", "Checkbox ปุ่มเล็ก", "Checkbox, tiny controls"],
  ["radius-sm", "8px", "ช่องกรอก ตัวเลือก Select", "Inputs, Select options"],
  ["radius-md", "10px", "ปุ่ม แถวเมนู alert", "Buttons, menu rows, alerts"],
  ["radius-lg", "16px", "การ์ด ตาราง ป๊อปโอเวอร์", "Cards, tables, popovers"],
  ["radius-xl", "24px", "โมดัล Dashboard hero เมนูมือถือ", "Modals, hero, mobile drawer"],
  ["radius-panel", "32px", "มุมซ้ายของฟอร์ม login", "Login form panel corners"],
  ["radius-pill", "999px", "แท็ก แท็บ ปุ่มไอคอน อวาตาร์", "Tags, tabs, icon buttons, avatar"]
];

export var shadows = [
  ["shadow-dropdown", "0 12px 32px -8px rgba(16, 24, 40, 0.18), 0 2px 6px -2px rgba(16, 24, 40, 0.08)", "รายการ Select", "Select listbox"],
  ["shadow-popover", "0 16px 40px -12px rgba(16, 24, 40, 0.22), 0 2px 6px -2px rgba(16, 24, 40, 0.08)", "ป๊อปโอเวอร์แจ้งเตือนและโปรไฟล์", "Notification and profile popovers"],
  ["shadow-modal", "0 24px 48px -12px rgba(16, 24, 40, 0.25)", "โมดัล", "Modal dialog"],
  ["shadow-card-hover", "0 6px 18px -8px rgba(16, 24, 40, 0.18)", "การ์ดที่กดได้ยกขึ้น 2px", "Clickable card lifted 2px"],
  ["shadow-nav-active", "0 8px 20px -8px rgba(10, 40, 120, 0.5)", "แถวเมนูที่เลือก", "Active sidebar row"],
  ["shadow-panel", "-20px 0 60px -20px rgba(10, 40, 120, 0.45)", "ขอบแผงเนื้อหาที่ชนเมนูน้ำเงิน", "Content panel edge on the blue"]
];

export var durations = [
  ["duration-fast", "120ms", "โฮเวอร์ สี หมุนลูกศร", "Hover, colour, caret"],
  ["duration-nav", "160ms", "โฮเวอร์เมนู ไอคอนขยับ การ์ดยก", "Nav hover, icon nudge, card lift"],
  ["duration-overlay", "150ms", "โมดัลและป๊อปโอเวอร์ fade + zoom 95%", "Modal and popover fade + zoom"],
  ["duration-rise", "480ms", "บล็อกหน้าเลื่อนขึ้น 10px ห่างกัน 60ms", "Page blocks rise 10px, 60ms apart"]
];

export function cssVariables() {
  var light = [], dark = [];
  colorGroups.forEach(function (g) {
    g.items.forEach(function (c) {
      light.push("  --" + c[0] + ": " + c[1] + ";");
      if (c[2] !== c[1]) dark.push("  --" + c[0] + ": " + c[2] + ";");
    });
  });
  var rest = []
    .concat(spacing.map(function (s) { return "  --" + s[0] + ": " + s[1] + ";"; }))
    .concat(radii.map(function (r) { return "  --" + r[0] + ": " + r[1] + ";"; }))
    .concat(shadows.map(function (s) { return "  --" + s[0] + ": " + s[1] + ";"; }))
    .concat(durations.map(function (d) { return "  --" + d[0] + ": " + d[1] + ";"; }));
  return "/* CRM Center v3 — RELIO design system */\n:root {\n  --font-sans: " + fontSans + ";\n  --font-brand: " + fontBrand + ";\n" +
    light.join("\n") + "\n" + rest.join("\n") + "\n}\n\n[data-theme='dark'] {\n" + dark.join("\n") + "\n}";
}

export function tailwindTheme() {
  var lines = [];
  colorGroups.forEach(function (g) { g.items.forEach(function (c) { lines.push("  --color-" + c[0] + ": var(--" + c[0] + ");"); }); });
  radii.forEach(function (r) { lines.push("  --radius-" + r[0].replace("radius-", "") + ": var(--" + r[0] + ");"); });
  return "/* Tailwind v4. Import after Tailwind and the CSS variables. */\n@theme inline {\n  --font-sans: " + fontSans + ";\n" + lines.join("\n") + "\n}";
}

export function tokensJson() {
  var colors = [];
  colorGroups.forEach(function (g) { g.items.forEach(function (c) { colors.push({ name: c[0], value: { light: c[1], dark: c[2] }, usage: c[4] }); }); });
  var entry = function (x) { return { name: x[0], value: x[1], usage: x[3] }; };
  return JSON.stringify({
    name: "CRM Center",
    version: 3,
    color: { themes: [{ id: "light", name: "Light" }, { id: "dark", name: "Dark" }], tokens: colors },
    type: { families: { sans: fontSans, brand: fontBrand } },
    spacing: { tokens: spacing.map(entry) },
    radius: { tokens: radii.map(entry) },
    shadow: { tokens: shadows.map(entry) },
    duration: { tokens: durations.map(entry) }
  }, null, 2);
}
