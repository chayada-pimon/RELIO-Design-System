import { state } from "../state.js";
import { icon, ccLogo } from "./shared.js";

var STATE_META = {
  default: { th: "ค่าเริ่มต้น", en: "Default" },
  hover: { th: "โฮเวอร์", en: "Hover" },
  focus: { th: "โฟกัส", en: "Focus" },
  pressed: { th: "กด", en: "Pressed" },
  loading: { th: "กำลังโหลด", en: "Loading" },
  error: { th: "ผิดพลาด", en: "Error" },
  disabled: { th: "ปิดใช้งาน", en: "Disabled" },
  success: { th: "สำเร็จ", en: "Success" },
  warning: { th: "เตือน", en: "Warning" },
  info: { th: "ข้อมูล", en: "Info" },
  neutral: { th: "กลาง", en: "Neutral" },
  brand: { th: "แบรนด์", en: "Brand" },
  checked: { th: "เลือกแล้ว", en: "Checked" },
  mixed: { th: "บางส่วน", en: "Mixed" }
};

// Status never relies on colour alone: every tone carries its Phosphor icon.
var TONES = {
  success: { icon: "check-circle", th: "ชำระแล้ว", en: "Paid" },
  warning: { icon: "warning-circle", th: "รอชำระ", en: "Awaiting payment" },
  error: { icon: "x-circle", th: "รับเข้าไม่สำเร็จ", en: "Import failed" },
  info: { icon: "info", th: "กำลังจัดส่ง", en: "Shipping" }
};

var ALERTS = {
  info: { th: "ข้อมูลอัปเดตทุก 15 นาที ตัวเลขล่าสุดอาจยังไม่รวมออเดอร์ที่เพิ่งเข้ามา", en: "Data refreshes every 15 minutes, so the newest orders may not be counted yet." },
  success: { th: "เชื่อมต่อ Shopee แล้ว คำสั่งซื้อใหม่จะเข้ามาอัตโนมัติ", en: "Shopee is connected. New orders will sync automatically." },
  warning: { th: "แต้ม 18,300 แต้มจะหมดอายุ 31 ต.ค. 2569 แจ้งลูกค้าก่อนวันหมดอายุ", en: "18,300 points expire on 31 Oct 2026. Let customers know before then." },
  error: { th: "API key ของ Lazada หมดอายุ สร้าง key ใหม่ในหน้าการเชื่อมต่อ", en: "The Lazada API key has expired. Create a new one on the Integrations page." }
};

function stateCls(s) {
  return s === "hover" ? " is-hover" : s === "focus" ? " is-focus" : s === "pressed" ? " is-pressed" : "";
}

var specimens = [
  {
    id: "button",
    name: { th: "ปุ่ม", en: "Button" },
    desc: { th: "ปุ่มหลักสีน้ำเงินหนึ่งปุ่มต่อกลุ่ม ปุ่มรองมีขอบ ปุ่ม ghost เป็นตัวอักษร สูง 44px มุม 10px", en: "One blue primary per group, an outlined default and a text-only ghost. 44px tall, 10px radius." },
    states: ["default", "hover", "focus", "pressed", "loading", "disabled"],
    render: function (s, th) {
      var off = s === "disabled" || s === "loading" ? " disabled" : "";
      var busy = s === "loading" ? " aria-busy='true'" : "";
      var label = s === "loading" ? (th ? "กำลังบันทึก…" : "Saving…") : (th ? "บันทึกลูกค้า" : "Save customer");
      return "<div class='cc-row'>" +
        "<button class='cc-btn cc-btn-ghost" + stateCls(s) + "'" + off + ">" + (th ? "ไม่ใช่ตอนนี้" : "Not now") + "</button>" +
        "<button class='cc-btn cc-btn-default" + stateCls(s) + "'" + off + ">" + icon("download-simple", 20) + (th ? "ส่งออกไฟล์" : "Export") + "</button>" +
        "<button class='cc-btn cc-btn-primary" + stateCls(s) + "'" + off + busy + ">" + (s === "loading" ? "<span class='spinner' aria-hidden='true'></span>" : icon("check", 20, "bold")) + label + "</button>" +
      "</div>";
    },
    notes: {
      pressed: { th: "กดแล้วย่อเหลือ scale(0.97) และปิดเอฟเฟกต์นี้เมื่อผู้ใช้ลดการเคลื่อนไหว", en: "Scales to 0.97 on press; disabled under reduced motion." },
      loading: { th: "ปิดใช้งานระหว่างโหลดและประกาศ aria-busy เพื่อกันการกดซ้ำ", en: "Disabled while loading and announces aria-busy to block double submits." }
    }
  },
  {
    id: "input",
    name: { th: "ช่องกรอกข้อมูล", en: "Text input" },
    desc: { th: "สูง 44px มุม 8px ป้ายกำกับ 14px/500 อยู่ด้านบน คำใบ้หรือข้อผิดพลาดพร้อมไอคอนอยู่ด้านล่าง", en: "44px, 8px radius. A 14px/500 label above; a hint or an error with its icon below." },
    states: ["default", "hover", "focus", "error", "disabled"],
    render: function (s, th) {
      var err = s === "error";
      return "<div class='cc-field demo-field'>" +
        "<label class='cc-label' for='specimen-field-input'>" + (th ? "อีเมล" : "Email") + "<span class='cc-req' aria-hidden='true'>*</span></label>" +
        "<div class='cc-input-wrap'>" + icon("envelope-simple", 16).replace("class='ph ", "class='ph cc-ico ") + "<input id='specimen-field-input' class='cc-input" + stateCls(s) + (err ? " is-error" : "") + "' value='" + (err ? "somchai@company" : "somchai@company.co.th") + "'" + (s === "disabled" ? " disabled" : "") + (err ? " aria-invalid='true' aria-describedby='specimen-field-msg'" : "") + "></div>" +
        (err
          ? "<span class='cc-error' id='specimen-field-msg'>" + icon("warning-circle", 16, "fill") + (th ? "อีเมลยังไม่ครบ ลองเติมโดเมนให้ครบ เช่น .co.th" : "The email is incomplete. Add the full domain, such as .co.th.") + "</span>"
          : "<span class='cc-hint'>" + (th ? "ใช้อีเมลบริษัทสำหรับเข้าสู่ระบบ" : "Use your company email to sign in.") + "</span>") +
        "</div>";
    },
    notes: {
      error: { th: "แสดงไอคอนคู่กับข้อความ บอกวิธีแก้ ไม่พึ่งสีแดงอย่างเดียว", en: "An icon plus a fix-it sentence; colour is never the only signal." },
      focus: { th: "ขอบเป็น action-primary-bg และมี ring 2px ห่าง 2px", en: "Border turns action-primary-bg with a 2px ring at 2px offset." }
    }
  },
  {
    id: "icon-button",
    name: { th: "ปุ่มไอคอน", en: "Icon button" },
    desc: { th: "ปุ่มกลม 44px ในแถบบน ต้องมี aria-label ภาษาไทยเสมอ จุดแดงบอกว่ามีแจ้งเตือนใหม่", en: "A 44px round button for the top bar, always with a Thai aria-label. A red dot marks unread alerts." },
    states: ["default", "hover", "focus", "disabled"],
    render: function (s, th) {
      var off = s === "disabled" ? " disabled" : "";
      return "<div class='cc-row'>" +
        "<button class='cc-icon-btn" + stateCls(s) + "' aria-label='" + (th ? "เปลี่ยนเป็นธีมมืด" : "Switch to dark theme") + "'" + off + ">" + icon("moon", 20) + "</button>" +
        "<button class='cc-icon-btn" + stateCls(s) + "' aria-label='" + (th ? "การแจ้งเตือน 3 รายการ" : "3 notifications") + "'" + off + ">" + icon("bell", 20) + "<span class='cc-dot'></span></button>" +
        "<span class='cc-avatar-btn'><span class='cc-avatar'>so</span></span>" +
      "</div>";
    }
  },
  {
    id: "tag",
    name: { th: "แท็กสถานะ", en: "Tag" },
    desc: { th: "แคปซูลสูง 28px มีไอคอน Bold 14px เสมอ ใช้บอกสถานะ ไม่ใช่ปุ่ม", en: "A 28px pill with a 14px Bold icon. Signals status; not interactive." },
    states: ["success", "warning", "error", "info", "neutral", "brand"],
    render: function (s, th) {
      if (s === "neutral") return "<span class='cc-tag cc-tag-default'>" + (th ? "ร่าง" : "Draft") + "</span>";
      if (s === "brand") return "<div class='cc-row'><span class='cc-tag cc-tag-brand'>Gold</span><span class='cc-count' aria-label='" + (th ? "3 รายการต้องดูแล" : "3 items need attention") + "'>3</span></div>";
      var t = TONES[s];
      return "<span class='cc-tag cc-tag-" + s + "'>" + icon(t.icon, 14, "bold") + (th ? t.th : t.en) + "</span>";
    },
    notes: {
      brand: { th: "แท็ก CRM ใช้ crm-badge-bg ส่วน count badge สีแดงใช้กับรายการที่ต้องดูแล", en: "CRM tags use crm-badge-bg; the red count badge marks items that need attention." }
    }
  },
  {
    id: "alert",
    name: { th: "แจ้งเตือนในหน้า", en: "Alert" },
    desc: { th: "แถบข้อความมุม 10px พร้อมไอคอน Fill บอกสิ่งที่เกิดและสิ่งที่ต้องทำต่อ", en: "A 10px-radius strip with a Fill icon: what happened and what to do next." },
    states: ["info", "success", "warning", "error"],
    render: function (s, th) {
      var ic = s === "info" ? "info" : s === "success" ? "check-circle" : s === "warning" ? "warning-circle" : "x-circle";
      return "<div class='cc-alert cc-alert-" + s + "' role='" + (s === "error" ? "alert" : "status") + "'>" + icon(ic, 20, "fill").replace("class='ph-fill ", "class='ph-fill cc-ico ") + "<div>" + (th ? ALERTS[s].th : ALERTS[s].en) + "</div></div>";
    }
  },
  {
    id: "checkbox",
    name: { th: "ช่องทำเครื่องหมาย", en: "Checkbox" },
    desc: { th: "กล่อง 20px มุม 4px ขอบ border-control เลือกแล้วเป็นสีน้ำเงินหลัก", en: "A 20px box, 4px radius, border-control outline; checked fills with the primary blue." },
    states: ["default", "checked", "mixed", "disabled"],
    render: function (s, th) {
      var box = s === "checked" ? "cc-box is-on" : s === "mixed" ? "cc-box is-on is-mixed" : s === "disabled" ? "cc-box is-disabled" : "cc-box";
      var aria = s === "checked" ? "true" : s === "mixed" ? "mixed" : "false";
      return "<span class='cc-checkbox' role='checkbox' aria-checked='" + aria + "'" + (s === "disabled" ? " aria-disabled='true'" : "") + "><span class='" + box + "'>" + (s === "checked" ? icon("check", 14, "bold") : "") + "</span>" + (th ? "ส่งอีเมลยืนยันให้ลูกค้า" : "Email the customer a confirmation") + "</span>";
    }
  }
];

function activeState(specimen) {
  var current = state.demoBySpecimen[specimen.id];
  return specimen.states.indexOf(current) > -1 ? current : specimen.states[0];
}

function specimenCard(specimen, th) {
  var current = activeState(specimen);
  var note = specimen.notes && specimen.notes[current];
  var panelId = "specimen-panel-" + specimen.id;

  var stateTabs = "<div id='specimen-states-" + specimen.id + "' class='state-tabs' role='tablist' aria-label='" + (th ? "สถานะ" : "State") + "'>" +
    specimen.states.map(function (s) {
      var selected = s === current;
      return "<button role='tab' id='state-tab-" + specimen.id + "-" + s + "' aria-selected='" + selected + "' aria-controls='" + panelId + "' tabindex='" + (selected ? "0" : "-1") + "' data-state='" + s + "'>" + (th ? STATE_META[s].th : STATE_META[s].en) + "</button>";
    }).join("") + "</div>";

  return "<div class='specimen-card'>" +
      "<div class='specimen-card-head'><h3>" + (th ? specimen.name.th : specimen.name.en) + "</h3><p>" + (th ? specimen.desc.th : specimen.desc.en) + "</p></div>" +
      stateTabs +
      "<div id='" + panelId + "' class='specimen-stage' role='tabpanel' aria-live='polite' aria-labelledby='state-tab-" + specimen.id + "-" + current + "'>" + specimen.render(current, th) + "</div>" +
      (note ? "<p class='specimen-note'>" + icon("info", 16) + "<span>" + (th ? note.th : note.en) + "</span></p>" : "") +
    "</div>";
}

// Markup for one specimen card, so a state change can re-render just that card
export function renderSpecimen(id) {
  var specimen = specimens.find(function (s) { return s.id === id; });
  return specimen ? specimenCard(specimen, state.lang === "th") : "";
}

function galleryCard(title, desc, body, wide) {
  return "<div class='gallery-card" + (wide ? " wide" : "") + "'><div class='specimen-card-head'><h3>" + title + "</h3><p>" + desc + "</p></div><div class='gallery-stage'>" + body + "</div></div>";
}

function gallery(th) {
  var tabs = "<div class='cc-tabs' role='tablist' aria-label='" + (th ? "สถานะคำสั่งซื้อ" : "Order status") + "'>" +
    "<button class='cc-tab is-active' role='tab' aria-selected='true'>" + (th ? "ทั้งหมด" : "All") + "<span class='cc-tab-count'>1,204</span></button>" +
    "<button class='cc-tab' role='tab' aria-selected='false'>" + (th ? "รอชำระ" : "Awaiting") + "<span class='cc-tab-count'>38</span></button>" +
    "<button class='cc-tab' role='tab' aria-selected='false'>" + (th ? "กำลังจัดส่ง" : "Shipping") + "<span class='cc-tab-count'>112</span></button>" +
    "<button class='cc-tab' role='tab' aria-selected='false'>" + (th ? "ยกเลิก" : "Cancelled") + "</button></div>";

  var select = "<div class='cc-field' style='width:min(100%,280px)'><span class='cc-label'>" + (th ? "บริษัท" : "Company") + "</span>" +
    "<div class='cc-input-wrap'>" + icon("buildings", 16).replace("class='ph ", "class='ph cc-ico ") + "<button class='cc-input cc-select' aria-haspopup='listbox' aria-expanded='true'><span>บริษัท สยามคอสเมติก จำกัด</span>" + icon("caret-up", 16) + "</button></div>" +
    "<ul class='cc-listbox' role='listbox'><li class='cc-option is-selected' role='option' aria-selected='true'><span class='cc-check'>" + icon("check", 16, "bold") + "</span>บริษัท สยามคอสเมติก จำกัด</li><li class='cc-option' role='option' aria-selected='false'><span class='cc-check'></span>ร้านบ้านขนมไทย</li><li class='cc-option' role='option' aria-selected='false'><span class='cc-check'></span>Chiang Mai Craft Co.</li></ul></div>";

  var stepper = "<ol class='cc-steps'>" +
    "<li><span class='cc-step is-done'>" + icon("check", 14, "bold") + "</span>" + (th ? "เลือกช่องทาง" : "Choose channel") + "</li><li class='cc-step-line' aria-hidden='true'></li>" +
    "<li><span class='cc-step is-now'>2</span><span class='is-now-label'>" + (th ? "ใส่ API key" : "Enter API key") + "</span></li><li class='cc-step-line' aria-hidden='true'></li>" +
    "<li><span class='cc-step'>3</span>" + (th ? "จับคู่ร้านค้า" : "Map shops") + "</li></ol>";

  var empty = "<div class='cc-empty'><span class='cc-empty-tile'>" + icon("buildings", 32) + "</span><h4 class='cc-h2'>" + (th ? "บัญชีนี้ยังไม่ได้ผูกกับบริษัท" : "This account isn't linked to a company yet") + "</h4><p>" + (th ? "ติดต่อผู้ดูแลระบบของร้านเพื่อเพิ่มคุณเข้าบริษัท แล้วรีเฟรชหน้านี้" : "Ask your shop admin to add you to a company, then refresh this page.") + "</p><button class='cc-btn cc-btn-default'>" + icon("arrow-clockwise", 20) + (th ? "รีเฟรชหน้า" : "Refresh page") + "</button></div>";

  var modal = "<div class='cc-scrim'><div class='cc-modal' role='dialog' aria-modal='false' aria-labelledby='demo-modal-title'>" +
    "<div class='cc-modal-head'><h4 class='cc-modal-title' id='demo-modal-title'>" + (th ? "ลบผู้ใช้งานนี้?" : "Remove this user?") + "</h4><button class='cc-icon-btn' aria-label='" + (th ? "ปิด" : "Close") + "'>" + icon("x", 18) + "</button></div>" +
    "<p class='cc-sub'>" + (th ? "สมชาย ใจดี จะเข้าพอร์ทัลไม่ได้อีก ข้อมูลที่เขาบันทึกไว้ยังอยู่ครบ" : "Somchai Jaidee will lose portal access. The records they saved stay intact.") + "</p>" +
    "<div class='cc-modal-foot'><button class='cc-btn cc-btn-default'>" + (th ? "ไม่ใช่ตอนนี้" : "Not now") + "</button><button class='cc-btn cc-btn-destructive'>" + icon("trash", 20) + (th ? "ลบผู้ใช้งาน" : "Remove user") + "</button></div></div></div>";

  var navDemo = "<div class='cc-backdrop nav-demo'><div class='nav-demo-logo'>" + ccLogo(true) + "</div><nav class='cc-nav' aria-label='" + (th ? "ตัวอย่างเมนู" : "Menu example") + "'>" +
    "<div class='cc-nav-sec'><span class='cc-nav-head'>ภาพรวม</span><a class='cc-nav-row' href='#components'>" + icon("squares-four", 18) + "<span>Dashboard</span></a></div>" +
    "<div class='cc-nav-sec'><span class='cc-nav-head'>ลูกค้าและการขาย</span><a class='cc-nav-row is-active is-crm' href='#components' aria-current='page'>" + icon("users-three", 18, "bold") + "<span>ลูกค้า</span></a><a class='cc-nav-row' href='#components'>" + icon("receipt", 18) + "<span>คำสั่งซื้อ</span></a></div>" +
    "<div class='cc-nav-sec'><span class='cc-nav-head'>ผู้ดูแลระบบ</span><a class='cc-nav-row is-open' href='#components'>" + icon("plugs", 18, "bold") + "<span>การเชื่อมต่อระบบ</span>" + icon("caret-down", 14) + "</a><a class='cc-nav-row is-nested' href='#components'><span>Mapping ร้านค้า</span><span class='cc-count'>2</span></a></div>" +
    "</nav></div>";

  return "<h3 class='subhead'>" + (th ? "คอมโพเนนต์อื่น ๆ" : "More components") + "</h3><div class='gallery-grid'>" +
    galleryCard("SidebarNav", th ? "เมนูวางบนพื้นน้ำเงินโดยตรง แถว 40px เมนูที่เลือกเป็นแคปซูลขาว (Deep Aqua บนหน้า CRM)" : "Set right on the blue. 40px rows; the active row is a white pill (Deep Aqua on CRM pages).", navDemo) +
    galleryCard("Tabs", th ? "segmented control แบบแคปซูล มีขอบ แท็บที่เลือกเป็น bg-raised" : "A bordered pill segmented control; the active tab is bg-raised.", tabs) +
    galleryCard("Select", th ? "ตัวเลือกบริษัทในแถบบน รายการลอยใช้ shadow-dropdown" : "The company switcher; the floating list uses shadow-dropdown.", select) +
    galleryCard("Stepper", th ? "ขั้นตอนที่เสร็จเป็นสีเขียวพร้อมเครื่องหมายถูก ขั้นปัจจุบันเป็นสีน้ำเงินหลัก" : "Done steps are green with a check; the current step is primary blue.", stepper) +
    galleryCard("EmptyState", th ? "ไทล์ไอคอน หัวข้อเดียว ประโยคเดียว การกระทำเดียว" : "An icon tile, one heading, one sentence, one action.", empty) +
    galleryCard("Modal", th ? "มุม 24px padding 24px ส่วนท้ายคั่นด้วยเส้น ปุ่มลบสีแดงเต็มใช้ในกล่องยืนยันการลบเท่านั้น" : "24px radius and padding, a bordered footer. The filled red button appears only in delete confirmations.", modal) +
  "</div>";
}

function specimenSection(th) {
  return "<div class='work-specimen'>" +
      "<div class='work-specimen-head'><div><span class='eyebrow'>COMPONENTS · 18</span><h2 id='components-title'>" + (th ? "คอมโพเนนต์" : "Components") + "</h2><p>" + (th ? "ตัวอย่างแบบ static ของ components/portal/ui.tsx และ shell.tsx ในพอร์ทัล CRM Center เลือกสถานะเพื่อดูแต่ละแบบ" : "Static renditions of components/portal/ui.tsx and shell.tsx from the CRM Center portal. Pick a state to preview it.") + "</p></div></div>" +
      "<div class='specimen-grid'>" + specimens.map(function (s) { return specimenCard(s, th); }).join("") + "</div>" +
    "</div>";
}

function responsiveSection(th) {
  return "<div class='responsive-section'><h3>" + (th ? "พฤติกรรมตอบสนอง" : "Responsive behaviour") + "</h3><div class='responsive-grid'>" +
    "<article><b>Desktop · lg 1024+</b><p>" + (th ? "เมนู 240px บนพื้นน้ำเงิน ห่าง 16px แล้วเป็นแผงเนื้อหา กว้างสูงสุด 1320px ขอบหน้า 24px (32px ที่ xl)" : "240px sidebar on the blue, 16px gap, then the panel; content max 1320px, 24px gutters (32px at xl).") + "</p></article>" +
    "<article><b>Tablet · md 768–1023</b><p>" + (th ? "เมนูกลายเป็น drawer กว้าง 260px ห่างขอบ 8px มุม 24px มี scrim ด้านหลัง เปิดจากปุ่ม List ในแถบบน" : "The sidebar becomes a 260px drawer, 8px inset, 24px radius, scrim behind, opened from the List button.") + "</p></article>" +
    "<article><b>Mobile · &lt;768</b><p>" + (th ? "ขอบหน้า 16px ตารางยุบเป็นการ์ด ช่องกรอกใช้ตัวอักษร 16px กันการซูมบน iOS ปุ่มสูงอย่างน้อย 44px" : "16px gutters, tables collapse to cards, 16px input text to stop iOS zoom, 44px minimum targets.") + "</p></article>" +
    "</div></div>";
}

export function renderComponents() {
  var th = state.lang === "th";
  return (
    "<section id='components' class='section'>" +
      specimenSection(th) +
      gallery(th) +
      responsiveSection(th) +
    "</section>"
  );
}
