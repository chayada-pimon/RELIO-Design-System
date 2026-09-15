(function () {
  "use strict";

  var $ = function (q, root) { return (root || document).querySelector(q); };
  var $$ = function (q, root) { return Array.from((root || document).querySelectorAll(q)); };
  var saved = function (key, fallback) { try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; } };
  var state = { lang: saved("relio-lang", "th"), typeLang: saved("relio-type-lang", "th"), typeDemo: "customer", theme: saved("relio-theme", "light"), drawer: false, tab: "md", extended: false, demo: "default", colorPick: {}, logoVariant: 0 };
  var lastDrawerTrigger = null;

  var copyText = function (value) {
    navigator.clipboard.writeText(value).then(function () { toast(state.lang === "th" ? "คัดลอกแล้ว" : "Copied"); });
  };
  var toast = function (message) {
    var node = $("#toast");
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(window.relioToast);
    window.relioToast = setTimeout(function () { node.classList.remove("show"); }, 1600);
  };
  var icon = function (name, size) {
    var names = {
      menu: "list", close: "x", sun: "sun", moon: "moon", book: "book-open",
      download: "download-simple", copy: "copy", arrow: "arrow-right", check: "check",
      warning: "warning", spark: "sparkle", link: "link", heart: "heart", user: "user",
      folder: "folder", chat: "chat-circle", search: "magnifying-glass", compass: "compass",
      lightning: "lightning", smiley: "smiley"
    };
    return "<i class='ph ph-" + (names[name] || names.spark) + " i' style='font-size:" + (size || 20) + "px' aria-hidden='true'></i>";
  };

   var nav = [
     ["overview", "ภาพรวม", "Overview", "squares-four"], ["concept", "แนวคิดแบรนด์", "Brand concept", "compass"],
     ["logo", "โลโก้", "Logo", "seal-check"],
     ["colors", "สี", "Colours", "palette"],
     ["type", "ตัวอักษรและรูปทรง", "Type & shape", "text-t"], ["mood", "ภาพและกราฟิก", "Imagery", "image"],
     ["icons", "ไอคอน", "Icons", "shapes"], ["mascot", "มาสคอต", "Mascot", "smiley"],
     ["voice", "น้ำเสียง", "Voice", "chat-circle"], ["foundations", "พื้นสว่างและมืด", "Foundations", "stack"],
     ["components", "ตัวอย่างระบบ", "System examples", "sliders-horizontal"], ["resources", "ไฟล์และเวอร์ชัน", "Resources", "folder"]
   ];
  // Each item: [name, cssVar, lightHex, darkHex, description]. The swatch background reads
  // var(cssVar) so it repaints automatically on theme toggle; the hex label picks light/dark
  // to match, keeping this table in sync with the tokens documented in RELIO-DESIGN.md.
  var colors = [
    { group: "Brand", items: [["CRM Aqua", "--crm", "#28C6CD", "#5EDAE0", "ลูกค้าและความสัมพันธ์"], ["OMS Blue", "--oms", "#1463D6", "#75A7FF", "ออเดอร์และเอกสาร"]] },
    { group: "Supporting", items: [["Action Orange", "--orange", "#FC9433", "#FC9433", "จุดเน้นขนาดเล็ก"], ["Warm Cream", "--surface-warm", "#FBF1E5", "#FBF1E5", "พื้นอุ่น"], ["Navy Ink", "--ink-brand", "#011F5D", "#011F5D", "ข้อความบน Aqua"], ["Deep Aqua", "--crm-deep", "#087F8C", "#5EDAE0", "ลิงก์และสถานะ"]] },
    { group: "Neutrals", items: [["Page / Canvas", "--bg", "#F7F8FA", "#18191B", "พื้นหน้า"], ["Surface", "--surface", "#FFFFFF", "#222427", "การ์ด"], ["Subtle / Raised", "--raised", "#F0F2F5", "#2D3035", "พื้นรอง"], ["Ink / Text", "--text", "#202124", "#F5F6F7", "ข้อความหลัก"], ["Slate / Muted", "--muted", "#525866", "#C2C7D0", "ข้อความรอง"], ["Quiet", "--quiet", "#7D8592", "#A0A8B4", "คำอธิบาย"], ["Border", "--line", "#D8DDE5", "#41464F", "เส้นแบ่ง"], ["Disabled", "--disabled", "#AEB5C0", "#686F79", "ปิดใช้งาน"]] },
    { group: "Semantic", items: [["Success", "--success", "#18734A", "#75D9A2", "สำเร็จ"], ["Success soft", "--success-soft", "#DDF5E8", "#173526", "พื้นสำเร็จ"], ["Warning", "--warning", "#8A4B08", "#FFD18A", "เตือน"], ["Warning soft", "--warning-soft", "#FFF0D0", "#3D2D16", "พื้นเตือน"], ["Danger", "--danger", "#B42318", "#FF9A91", "ข้อผิดพลาด"], ["Danger soft", "--danger-soft", "#FFE4E1", "#421F1E", "พื้นผิดพลาด"], ["Info", "--info", "#1463D6", "#A2C4FF", "ข้อมูล"], ["Info soft", "--info-soft", "#E1ECFF", "#182E50", "พื้นข้อมูล"]] }
  ];
  var logoMarks = [
    ["Logomark", "Logomark", "logo/Relio Logomark - Full Color.svg", "logo/Relio Logomark - Black.svg", "logo/Relio Logomark - White.svg"],
    ["Vertical", "แนวตั้ง", "logo/Relio Logo - Vertical - Full Color.svg", "logo/Relio Logo - Vertical - Black.svg", "logo/Relio Logo - Vertical - White.svg"],
    ["Horizontal", "แนวนอน", "logo/Relio Logo - Horizontal - Full Color.svg", "logo/Relio Logo - Horizontal - Black.svg", "logo/Relio Logo - Horizontal - White.svg"]
  ];
  var logoVariantLabels = { th: ["เต็มสี", "ดำ", "ขาว"], en: ["Full colour", "Black", "White"] };
  var scale = [
    ["Display", "เชื่อมทุกความสัมพันธ์", "64", "600", "1.05", "-0.035em", "--type-display", "Relationships, made clear"],
    ["Hero", "ลูกค้าและออเดอร์ ไปด้วยกัน", "48", "600", "1.1", "-0.025em", "--type-hero", "Customers and orders, together"],
    ["H1", "คู่มือแบรนด์ RELIO", "36", "600", "1.2", "-0.02em", "--type-h1", "RELIO brand guide"],
    ["H2", "การออกแบบที่เข้าใจง่าย", "28", "600", "1.3", "-0.015em", "--type-h2", "Design that feels simple"],
    ["H3", "องค์ประกอบหลัก", "20", "600", "1.4", "-0.01em", "--type-h3", "Core components"],
    ["Body Large", "ข้อมูลพร้อมใช้ในทุกทีม", "18", "400", "1.65", "0", "--type-body-lg", "Information ready for every team"],
    ["Body", "อ่านง่ายทั้งภาษาไทยและอังกฤษ", "16", "400", "1.6", "0", "--type-body", "Clear in Thai and English"],
    ["Body Small", "ข้อความรองในอินเทอร์เฟซ", "14", "400", "1.55", "0", "--type-body-sm", "Supporting UI text"],
    ["Label", "CRM CUSTOMER", "14", "500", "1.4", "0", "--type-label", "CRM CUSTOMER"],
    ["Caption", "อัปเดตล่าสุด 15 ก.ย. 2026", "12", "400", "1.5", "0.01em", "--type-caption", "Updated Sep 15, 2026"]
  ];
  var spacing = [["2XS", "4", "--space-1"], ["XS", "8", "--space-2"], ["S", "12", "--space-3"], ["M", "16", "--space-4"], ["L", "24", "--space-6"], ["XL", "32", "--space-8"], ["2XL", "48", "--space-12"], ["Section", "96", "--space-section"]];
  var radii = [["Input", "8", "--radius-sm"], ["Button", "10", "--radius-md"], ["Card", "16", "--radius-lg"], ["Panel", "24", "--radius-xl"], ["Pill", "999", "--radius-pill"]];
  var systemIcons = [["user", "User"], ["folder", "Folder"], ["chat", "Chat"], ["search", "Search"], ["download", "Download"], ["copy", "Copy"], ["link", "Link"], ["heart", "Favourite"], ["check", "Success"], ["warning", "Warning"], ["spark", "AI assist"], ["arrow", "Continue"]];

  var sectionHead = function (id, no, th, en, textTh, textEn) {
    var text = state.lang === "th" ? textTh : textEn;
    return "<div class='section-head'><div><span class='eyebrow'>" + en.toUpperCase() + "</span><h2 id='" + id + "-title'>" + (state.lang === "th" ? th : en) + "</h2></div>" + (text ? "<p>" + text + "</p>" : "") + "</div>";
  };
  var download = function (file, label, ext) {
    return "<a class='btn secondary small' href='assets/" + file + "' download>" + icon("download", 17) + "<span>" + label + " <b>." + ext + "</b></span></a>";
  };
  var downloadFile = function (file, label, ext) {
    return "<a class='btn secondary small' href='assets/" + encodeURI(file) + "' download>" + icon("download", 17) + "<span>" + label + " <b>." + ext + "</b></span></a>";
  };
  function componentSpecimen(th) {
    var labels = th ? { customer: "ข้อมูลลูกค้า", order: "สถานะออเดอร์", badge: "Badge", button: "Button" } : { customer: "Customer card", order: "Order status", badge: "Badge", button: "Button" };
    var tabs = ["customer", "order", "badge", "button"].map(function (name) { return "<button role='tab' data-type-demo='" + name + "' aria-selected='" + (state.typeDemo === name) + "'>" + labels[name] + "</button>"; }).join("");
    var content = {
      customer: "<article class='demo-customer'><span class='context-badge crm-badge'>" + icon("user", 16) + " CRM</span><div class='customer-profile'><span class='avatar'>NS</span><div><h4>นภัสสร ศรีสวัสดิ์</h4><p>ลูกค้าองค์กร · Siam Studio</p></div></div><dl class='customer-details'><div><dt>อีเมล</dt><dd>napasorn@siamstudio.co</dd></div><div><dt>การติดต่อครั้งล่าสุด</dt><dd>วันนี้, 10:24</dd></div></dl><div class='customer-note'><span>" + icon("chat", 18) + "</span><p><b>ติดตามใบเสนอราคา</b>ลูกค้าขอรายละเอียดแพ็กเกจภายในวันนี้</p></div><button class='btn primary small specimen-button'>" + icon("chat", 17) + "ส่งข้อความ</button></article>",
      order: "<article class='demo-order'><div class='pane-kicker'><span class='context-badge oms-badge'>" + icon("folder", 16) + " OMS</span><span class='order-date'>15 ก.ย. 2026</span></div><div class='order-heading'><div><p>ออเดอร์ล่าสุด</p><h4>#ORD-0284</h4></div><span class='order-total'>฿24,800</span></div><div class='order-status'><span class='status-icon'>" + icon("check", 16) + "</span><div><b>ยืนยันการชำระเงินแล้ว</b><small>ขั้นตอนถัดไป: ออกเอกสารจัดส่ง</small></div></div><div class='order-progress' aria-label='Order progress'><span class='complete'></span><span class='complete'></span><span class='current'></span><span></span></div><div class='order-actions'><button class='btn secondary small'>ดูรายละเอียด</button><button class='btn primary small'>ออกเอกสาร" + icon("arrow", 17) + "</button></div></article>",
      badge: "<div class='demo-badges'><span class='badge badge-default'>เริ่มต้น</span><span class='badge badge-crm'>" + icon("user", 15) + " ลูกค้า</span><span class='badge badge-oms'>" + icon("folder", 15) + " ออเดอร์</span><span class='badge badge-danger'>" + icon("warning", 15) + " ต้องตรวจสอบ</span><span class='badge badge-outline'>รอการยืนยัน</span></div>",
      button: "<div class='demo-buttons'><button class='btn primary'>บันทึกลูกค้า" + icon("arrow", 17) + "</button><button class='btn secondary'>" + icon("chat", 17) + "ส่งข้อความ</button><button class='icon-btn' aria-label='More actions'>" + icon("spark", 20) + "</button></div>"
    };
    var code = { customer: "&lt;CustomerCard customer={customer} /&gt;", order: "&lt;OrderStatus order={order} /&gt;", badge: "&lt;Badge tone=\"crm\"&gt;ลูกค้า&lt;/Badge&gt;", button: "&lt;Button variant=\"primary\"&gt;บันทึกลูกค้า&lt;/Button&gt;" };
    return "<div class='work-specimen'><div class='work-specimen-head'><div><span class='eyebrow'>COMPONENT SPECIMENS</span><h3>ตัวอย่างองค์ประกอบที่ใช้ในงาน</h3><p>เลือก component เพื่อดูการใช้งานจริงและโค้ดตัวอย่าง</p></div></div><div class='component-tabs' role='tablist'>" + tabs + "</div><div class='work-canvas work-canvas-single'>" + content[state.typeDemo] + "</div><div class='specimen-code'><code>" + code[state.typeDemo] + "</code></div></div>";
  }

  function header() {
    $("#header").innerHTML =
      "<a class='brand' href='#overview' aria-label='RELIO home'><img src='assets/relio-logo.svg' alt='RELIO'></a>" +
      "<div class='header-actions'><div class='seg' aria-label='Language'><button data-lang='th'>ไทย</button><button data-lang='en'>EN</button></div>" +
      "<button class='icon-btn' id='theme' aria-label='Toggle theme'>" + icon(state.theme === "dark" ? "sun" : "moon") + "</button>" +
      "<a class='btn primary small' id='details' href='RELIO-DESIGN.md' download>" + icon("download", 17) + "<span>" + (state.lang === "th" ? "ดาวน์โหลด .md" : "Download .md") + "</span></a>" +
      "<button class='icon-btn mobile-only' id='menu' aria-label='Menu'>" + icon("menu") + "</button></div>";
  }
  function sidebar() {
    $("#sidebar").innerHTML = "<div class='nav-label'>" + (state.lang === "th" ? "สารบัญ" : "Contents") + "</div><nav>" +
       nav.map(function (n, i) { return "<a href='#" + n[0] + "' class='" + (i === 0 ? "active" : "") + "'><span aria-hidden='true'><i class='ph ph-" + n[3] + "'></i></span>" + (state.lang === "th" ? n[1] : n[2]) + "</a>"; }).join("") +
      "</nav><div class='sidebar-foot'><span class='status-dot'></span><span>" + (state.lang === "th" ? "พร้อมใช้งาน · v2.0" : "Ready · v2.0") + "</span></div>";
  }

  function main() {
    var th = state.lang === "th";
    var workExample = th
      ? "<div class='work-specimen'><div class='work-specimen-head'><div><span class='eyebrow'>PRODUCT SPECIMEN</span><h3>มุมมองลูกค้าและออเดอร์</h3><p>ตัวอย่างพื้นที่ทำงานที่เชื่อมข้อมูลสำคัญและบอกขั้นตอนถัดไป</p></div><span class='work-live'><i></i>อัปเดตแล้ว</span></div><div class='work-canvas'><article class='customer-pane'><div class='pane-kicker'><span class='context-badge crm-badge'>" + icon("user", 16) + " CRM</span><button class='quiet-action' aria-label='Customer actions'>" + icon("spark", 20) + "</button></div><div class='customer-profile'><span class='avatar'>NS</span><div><h4>นภัสสร ศรีสวัสดิ์</h4><p>ลูกค้าองค์กร · Siam Studio</p></div></div><dl class='customer-details'><div><dt>อีเมล</dt><dd>napasorn@siamstudio.co</dd></div><div><dt>การติดต่อครั้งล่าสุด</dt><dd>วันนี้, 10:24</dd></div></dl><div class='customer-note'><span>" + icon("chat", 18) + "</span><p><b>ติดตามใบเสนอราคา</b>ลูกค้าขอให้ส่งรายละเอียดแพ็กเกจภายในวันนี้</p></div><button class='btn secondary small specimen-button'>" + icon("chat", 17) + "ส่งข้อความ</button></article><article class='order-pane'><div class='pane-kicker'><span class='context-badge oms-badge'>" + icon("folder", 16) + " OMS</span><span class='order-date'>15 ก.ย. 2026</span></div><div class='order-heading'><div><p>ออเดอร์ล่าสุด</p><h4>#ORD-0284</h4></div><span class='order-total'>฿24,800</span></div><div class='order-status'><span class='status-icon'>" + icon("check", 16) + "</span><div><b>ยืนยันการชำระเงินแล้ว</b><small>ขั้นตอนถัดไป: ออกเอกสารจัดส่ง</small></div></div><div class='order-progress' aria-label='Order progress'><span class='complete'></span><span class='complete'></span><span class='current'></span><span></span></div><div class='order-actions'><button class='btn secondary small'>ดูรายละเอียด</button><button class='btn primary small'>" + icon("arrow", 17) + "ออกเอกสาร</button></div></article></div><p class='specimen-caption'>ใช้ label 14 px สำหรับข้อมูลควบคุม, Body 16 px สำหรับรายละเอียด, และปุ่มสูงอย่างน้อย 44 px สำหรับ action หลัก</p></div>"
      : "<div class='work-specimen'><div class='work-specimen-head'><div><span class='eyebrow'>PRODUCT SPECIMEN</span><h3>Customer and order workspace</h3><p>A working view that connects essential information to the next action.</p></div><span class='work-live'><i></i>Up to date</span></div><div class='work-canvas'><article class='customer-pane'><div class='pane-kicker'><span class='context-badge crm-badge'>" + icon("user", 16) + " CRM</span><button class='quiet-action' aria-label='Customer actions'>" + icon("spark", 20) + "</button></div><div class='customer-profile'><span class='avatar'>NS</span><div><h4>Napasorn Srisawat</h4><p>Business customer · Siam Studio</p></div></div><dl class='customer-details'><div><dt>Email</dt><dd>napasorn@siamstudio.co</dd></div><div><dt>Last contact</dt><dd>Today, 10:24</dd></div></dl><div class='customer-note'><span>" + icon("chat", 18) + "</span><p><b>Follow up on the quote</b>The customer asked for package details today.</p></div><button class='btn secondary small specimen-button'>" + icon("chat", 17) + "Send message</button></article><article class='order-pane'><div class='pane-kicker'><span class='context-badge oms-badge'>" + icon("folder", 16) + " OMS</span><span class='order-date'>Sep 15, 2026</span></div><div class='order-heading'><div><p>Latest order</p><h4>#ORD-0284</h4></div><span class='order-total'>THB 24,800</span></div><div class='order-status'><span class='status-icon'>" + icon("check", 16) + "</span><div><b>Payment confirmed</b><small>Next step: prepare shipping documents</small></div></div><div class='order-progress' aria-label='Order progress'><span class='complete'></span><span class='complete'></span><span class='current'></span><span></span></div><div class='order-actions'><button class='btn secondary small'>View details</button><button class='btn primary small'>" + icon("arrow", 17) + "Create document</button></div></article></div><p class='specimen-caption'>Use 14 px labels for controls, 16 px body text for detail, and at least 44 px for primary action targets.</p></div>";
    workExample = componentSpecimen(th);
    $("#content").innerHTML =
      "<section id='overview' class='hero section'>" +
        "<div class='hero-copy'><span class='eyebrow'>CUSTOMERS + ORDERS, CONNECTED.</span><h1>RELIO</h1><p class='hero-kicker'>Design System</p><p class='hero-text'>" + (th ? "คู่มือสี ตัวอักษร ภาพ และองค์ประกอบสำหรับผลิตภัณฑ์ที่เชื่อมลูกค้ากับทุกออเดอร์" : "A practical guide to colour, type, imagery and components for products connecting customers with every order.") + "</p><div class='hero-actions'><button class='btn primary' data-open-drawer>" + icon("book", 18) + (th ? "เปิดคู่มือแบบละเอียด" : "Open detailed guide") + "</button><a class='text-link' href='#concept'>" + (th ? "สำรวจระบบ" : "Explore system") + icon("arrow", 18) + "</a></div></div>" +
        "<div class='hero-art'><img src='assets/pair-original.png' alt='RELIO CRM and OMS mascots' draggable='false'><span class='aqua-orbit'></span><span class='blue-orbit'></span></div>" +
      "</section>" +

      "<section id='concept' class='section concept-section'><div class='concept-intro'><span class='eyebrow'>BRAND CONCEPT</span><h2 id='concept-title'>" + (th ? "เชื่อมทุกความสัมพันธ์ ให้ทำงานลื่นไหล" : "Explore connected work in a whole new way.") + "</h2><p>" + (th ? "เป็นมิตร ชัดเจน และมั่นใจ โดยไม่ทำให้ซอฟต์แวร์ธุรกิจรู้สึกแข็ง" : "Friendly, clear and confident without making business software feel rigid.") + "</p></div>" +
        "<div class='concept-grid'><article class='concept-card concept-flow'><div class='flow-stack'><div><span class='flow-icon aqua'>" + icon("user", 18) + "</span><p><b>" + (th ? "ลูกค้า" : "Customer") + "</b><small>" + (th ? "ข้อมูลที่พร้อมใช้งาน" : "Ready to work with") + "</small></p></div><div><span class='flow-icon blue'>" + icon("folder", 18) + "</span><p><b>" + (th ? "ออเดอร์" : "Order") + "</b><small>" + (th ? "ทุกสถานะในที่เดียว" : "Every status in one place") + "</small></p></div><div><span class='flow-icon orange'>" + icon("check", 18) + "</span><p><b>" + (th ? "พร้อมไปต่อ" : "Ready") + "</b><small>" + (th ? "รู้ขั้นตอนถัดไปเสมอ" : "The next step is clear") + "</small></p></div></div><h3>" + (th ? "เชื่อมโยง" : "Connected") + "</h3><p>" + (th ? "ข้อมูลสัมพันธ์กันและมองเห็นทางไปต่อได้ทันที" : "Relationships are visible and the next action is obvious.") + "</p></article><article class='concept-card concept-guide'><div class='guide-orbit'><span>" + icon("compass", 30) + "</span><b>" + (th ? "นำทาง" : "Guided") + "</b></div><h3>" + (th ? "ชัดเจน" : "Clear") + "</h3><p>" + (th ? "ข้อมูลสำคัญอยู่ในจุดที่หาเจอ" : "Important information stays easy to find.") + "</p></article><article class='concept-card concept-status'><div class='status-track'><span class='done'></span><span class='current'></span><span></span></div><div class='status-copy'><b>" + (th ? "บันทึกแล้ว" : "Saved") + "</b><small>" + (th ? "พร้อมดำเนินการ" : "Ready for the next step") + "</small></div><h3>" + (th ? "มั่นใจ" : "Confident") + "</h3><p>" + (th ? "ทุกการกระทำบอกผลลัพธ์ชัดเจน" : "Every action has a predictable result.") + "</p></article><article class='concept-card concept-speed'><div class='speed-display'><b>เร็ว</b><span>~ 30 sec</span><i>" + icon("lightning", 18) + "</i></div><h3>" + (th ? "คล่องตัว" : "Efficient") + "</h3><p>" + (th ? "ลดขั้นตอนที่ไม่จำเป็น ให้ทีมทำงานต่อได้ทันที" : "Remove friction so teams can keep moving.") + "</p></article><article class='concept-card concept-friendly'><div class='friendly-avatars'><span>" + icon("heart", 22) + "</span><span>" + icon("chat-circle", 22) + "</span><span>" + icon("smiley", 22) + "</span></div><h3>" + (th ? "เป็นมิตร" : "Friendly") + "</h3><p>" + (th ? "ช่วยผู้ใช้ด้วยภาษาธรรมชาติ ไม่สั่งหรือกดดัน" : "Guide with natural language, never pressure.") + "</p></article></div>" +
      "</section>" +

      "<section id='logo' class='section'>" + sectionHead("logo", "03", "โลโก้และการใช้งาน", "Logo direction", "สัญลักษณ์คือลูกโป่งพูดสองอันเชื่อมกันคู่กับตัวอักษร RELIO ใช้ไฟล์ต้นฉบับเสมอและเว้นพื้นที่ว่างรอบโลโก้ไม่น้อยกว่าความสูงของตัว R", "The mark is two connected speech bubbles paired with the RELIO wordmark. Always use the master file and keep clear space equal to the height of the R.") +
        "<p class='logo-guideline'>" + (th ? "ความกว้างต่ำสุดของโลโก้เต็มรูปแบบบนหน้าจอคือ 96 px และสัญลักษณ์เดี่ยวคือ 24 px ห้ามยืด หมุน ครอบตัด หรือวาดโลโก้ใหม่" : "Minimum on-screen width is 96px for the full logo and 24px for the mark alone. Never stretch, rotate, crop or redraw the logo.") + "</p>" +
        "<div class='logo-toolbar'>" +
          "<div class='color-picker small logo-variant-picker' role='listbox' aria-label='" + (th ? "เลือกสีโลโก้" : "Logo colour") + "'>" +
            [0, 1, 2].map(function (i) {
              var names = th ? logoVariantLabels.th : logoVariantLabels.en;
              var swatch = i === 0 ? "linear-gradient(135deg, var(--crm) 50%, var(--oms) 50%)" : (i === 1 ? "#111" : "#fff");
              return "<button class='color-circle" + (i === 2 ? " outline" : "") + (state.logoVariant === i ? " selected" : "") + "' role='option' aria-selected='" + (state.logoVariant === i) + "' aria-label='" + names[i] + "' data-logo-variant='" + i + "' style='--circle-color:" + swatch + "'></button>";
            }).join("") +
          "</div>" +
          downloadFile("relio-logo.svg", th ? "ไฟล์หลัก" : "Master file", "svg") +
        "</div>" +
        "<div class='logo-grid'>" +
          logoMarks.map(function (m) {
            var enLabel = m[0], thLabel = m[1], file = m[2 + state.logoVariant];
            var label = th ? thLabel : enLabel;
            var variant = (th ? logoVariantLabels.th : logoVariantLabels.en)[state.logoVariant];
            return "<article class='logo-card'><div class='logo-stage light-stage'><img src='assets/" + encodeURI(file) + "' alt='RELIO " + enLabel + " logo, " + variant + "'></div><div class='logo-card-foot'><span>" + label + "</span>" + downloadFile(file, th ? "ดาวน์โหลด" : "Download", "svg") + "</div></article>";
          }).join("") +
        "</div>" +
        "<div class='do-dont'><article class='do'><span>" + icon("check", 20) + " DO</span><h3>" + (th ? "ใช้ Aqua อยู่ด้านหลังและ Blue อยู่ด้านหน้าเสมอ" : "Keep Aqua behind and Blue in front.") + "</h3><ul><li>" + (th ? "ใช้ไฟล์ SVG ต้นฉบับที่ให้มา" : "Use the supplied master SVG") + "</li><li>" + (th ? "ใช้โลโก้เต็มสีบนพื้นสว่างที่เป็นกลาง" : "Use the full-colour logo on light neutral surfaces") + "</li><li>" + (th ? "รักษาสัดส่วนเดิมของโลโก้" : "Keep the original aspect ratio") + "</li></ul></article><article class='dont'><span>" + icon("warning", 20) + " DON'T</span><h3>" + (th ? "อย่าวางโลโก้บนภาพถ่ายที่รก" : "Do not place the logo on a busy photograph.") + "</h3><ul><li>" + (th ? "ห้ามยืด หมุน ครอบตัด หรือวาดโลโก้ใหม่" : "Do not stretch, rotate, crop or redraw the logo") + "</li><li>" + (th ? "ห้ามใส่เงา แสงเรือง เบเวล หรือเกรเดียนต์" : "Do not add shadows, glow, bevel or gradient") + "</li><li>" + (th ? "ห้ามเปลี่ยนลูกโป่งทั้งสองให้เป็นสีเดียว" : "Do not recolour the two bubbles as one colour") + "</li></ul></article></div>" +
      "</section>" +

      "<section id='colors' class='section'>" + sectionHead("colors", "04", "ชุดสีและสัดส่วน", "Colour palette & usage", "Aqua และ Blue เป็นสีทีม ใช้สีเป็นสัญญาณ ไม่ใช้ย้อมทั้งหน้า", "Aqua and Blue identify teams. Use colour as a signal, not a page wash.") +
        "<div class='ratio'><span style='--w:60%;--c:var(--bg)'>60% Neutral</span><span style='--w:20%;--c:var(--surface)'>20% Surface</span><span style='--w:10%;--c:var(--crm)'>10% CRM</span><span style='--w:8%;--c:var(--oms)'>8% OMS</span><span aria-label='2% Accent' style='--w:2%;--c:var(--orange)'><span aria-hidden='true'>2% Accent</span></span></div>" +
        colors.map(function (g) {
          var sel = state.colorPick[g.group] || 0;
          var current = g.items[sel];
          var currentHex = state.theme === "dark" ? current[3] : current[2];
          return "<div class='palette-group'><h3>" + g.group + "</h3>" +
            "<div class='color-picker' role='listbox' aria-label='" + g.group + " colours'>" +
              g.items.map(function (c, i) {
                var hex = state.theme === "dark" ? c[3] : c[2];
                return "<button class='color-circle" + (i === sel ? " selected" : "") + "' role='option' aria-selected='" + (i === sel) + "' aria-label='" + c[0] + "' data-color-group='" + g.group + "' data-color-index='" + i + "' style='--circle-color:" + hex + "'></button>";
              }).join("") +
            "</div>" +
            "<div class='color-detail'><span class='swatch-color' style='background:" + currentHex + "'></span><span class='swatch-meta'><b>" + current[0] + "</b><code class='swatch-copy' data-copy='" + currentHex + "'>" + currentHex + icon("copy", 14) + "</code><small>" + current[1] + "</small><em>" + current[4] + "</em></span></div>" +
          "</div>";
        }).join("") +
      "</section>" +

      "<section id='type' class='section'>" + sectionHead("type", "05", "ตัวอักษร ระยะ และรูปทรง", "Typography, spacing & shape", "สเกลเดียวสำหรับทั้งระบบ ลดความสับสนและทำให้ภาษาไทยอ่านสบาย", "One system-wide scale keeps Thai and English clear and consistent.") +
        "<div class='font-card'><div><span class='eyebrow'>PRIMARY FONT</span><h3>Bai Jamjuree</h3><p>Thai + Latin · 400 / 500 / 600 · fallback: Arial, sans-serif</p></div><a class='text-link' href='https://fonts.google.com/specimen/Bai+Jamjuree' target='_blank' rel='noreferrer'>Google Fonts " + icon("arrow", 17) + "</a><div class='font-sample'><span>ก ข ค</span><span>Aa Bb Cc</span><span>0123456789</span></div></div>" +
        "<div class='type-scale-head'><h3 class='subhead'>Type scale</h3><div class='seg type-language' role='group' aria-label='Type sample language'><button data-type-lang='th' aria-pressed='" + (state.typeLang === "th") + "' class='" + (state.typeLang === "th" ? "active" : "") + "'>ไทย</button><button data-type-lang='en' aria-pressed='" + (state.typeLang === "en") + "' class='" + (state.typeLang === "en" ? "active" : "") + "'>EN</button></div></div><div class='type-table'>" + scale.map(function (s) { return "<div class='type-row'><code>" + s[0] + "</code><div class='type-sample' style='font-size:min(" + s[2] + "px,8vw);font-weight:" + s[3] + ";line-height:" + s[4] + ";letter-spacing:" + s[5] + "'>" + (state.typeLang === "th" ? s[1] : s[7]) + "</div><small>" + s[2] + "px · " + s[3] + " · " + s[4] + " · " + s[5] + "<br>" + s[6] + "</small></div>"; }).join("") + "</div>" +
        workExample +
        "<div class='spec-grid'><div><h3>Spacing</h3><div class='metric-table'>" + spacing.map(function (s) { return "<div><b>" + s[0] + "</b><code>" + s[1] + "px</code><span class='space-preview' style='width:min(" + s[1] + "px,70%)'></span><small>" + s[2] + "</small></div>"; }).join("") + "</div></div><div><h3>Border radius</h3><div class='metric-table'>" + radii.map(function (r) { return "<div><b>" + r[0] + "</b><code>" + r[1] + "px</code><span class='radius-preview' style='border-radius:" + r[1] + "px'></span><small>" + r[2] + "</small></div>"; }).join("") + "</div></div></div>" +
      "</section>" +

      "<section id='mood' class='section'>" + sectionHead("mood", "06", "ภาพอ้างอิงและกราฟิก", "Mood imagery & graphic style", "สว่าง เป็นธรรมชาติ มีพื้นที่หายใจ และมีสีแบรนด์เพียงจุดเล็ก ๆ", "Bright, natural and spacious, with brand colour used in small details.") +
        "<figure class='mood-figure'><img src='assets/relio-mood-workspace.png' alt='Calm modern workspace mood reference'><figcaption><b>Calm operations</b><span>" + (th ? "ภาพสร้างเฉพาะสำหรับ RELIO · ใช้เป็น Mood reference" : "AI-generated for RELIO · Mood reference") + "</span></figcaption></figure>" +
        "<div class='rules three'><article><b>Light first</b><p>" + (th ? "พื้นสว่าง เงาน้อย คอนทราสต์ชัด" : "Bright foundation, subtle shadow, clear contrast.") + "</p></article><article><b>Human detail</b><p>" + (th ? "ของจริง วัสดุจริง ไม่ใช้ภาพไซไฟ" : "Tactile objects and real materials, never sci-fi.") + "</p></article><article><b>Graphic cue</b><p>" + (th ? "ใช้เส้นเชื่อมหรือวงโคจรบาง ๆ เท่านั้น" : "Use thin connector lines or gentle orbital shapes.") + "</p></article></div>" +
      "</section>" +

      "<section id='icons' class='section'>" + sectionHead("icons", "07", "ไอคอนและรูปทรง", "Icons & shapes", "ใช้ไอคอนเส้นแบบ Phosphor น้ำหนัก Regular ขนาด 16, 20 หรือ 24 px", "Use Phosphor line icons in Regular weight at 16, 20 or 24 px.") +
        "<div class='icon-grid'>" + systemIcons.map(function (ic) { return "<button data-icon='" + ic[0] + "' data-copy='Icon: " + ic[1] + ", regular, 20px'><span>" + icon(ic[0], 24) + "</span><b>" + ic[1] + "</b></button>"; }).join("") + "</div>" +
        "<div class='inline-note'>" + icon("check", 18) + "<span>" + (th ? "ไอคอนต้องมี label หรือ aria-label เสมอ และไม่ใช้ emoji แทนไอคอนระบบ" : "Icons always need a visible label or aria-label. Never substitute system icons with emoji.") + "</span><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor ↗</a></div>" +
      "</section>" +

      "<section id='mascot' class='section'>" + sectionHead("mascot", "08", "แนวทางมาสคอต", "Mascot direction", "ใช้มาสคอตเพื่อช่วยนำทางหรือสร้างจังหวะ ไม่ใช้แทนข้อมูลสำคัญ", "Use mascots for guidance and rhythm, never as a substitute for critical information.") +
        "<div class='duo-showcase'><img src='assets/pair-original.png' alt='CRM and OMS mascot duo'><div><span class='eyebrow'>MASTER DUO</span><h3>CRM + OMS</h3><p>" + (th ? "CRM เด่นกว่าเล็กน้อยเมื่อต้องเล่าเรื่องความสัมพันธ์ ส่วน OMS ใช้คู่กับงานออเดอร์และเอกสาร" : "CRM leads relationship stories; OMS supports order and document moments.") + "</p>" + download("pair-original.png", "Mascot duo", "PNG") + "</div></div>" +
        "<div class='character-sheets'><article><div class='asset-title'><div><span class='team-dot aqua'></span><h3>CRM character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("crm-character-sheet.png", "CRM sheet", "PNG") + "</div><img src='assets/crm-character-sheet.png' alt='CRM mascot character sheet with front side back and poses'></article><article><div class='asset-title'><div><span class='team-dot blue'></span><h3>OMS character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("oms-character-sheet.png", "OMS sheet", "PNG") + "</div><img src='assets/oms-character-sheet.png' alt='OMS mascot character sheet with front side back and poses'></article></div>" +
        "<article class='model-card'><div class='asset-title'><div><span class='team-dot aqua'></span><h3>" + (th ? "โมเดล 3 มิติ" : "3D model") + "</h3><p>" + (th ? "หมุนดูมาสคอตได้ทุกมุม · GLB / FBX" : "Drag to orbit the mascot · GLB / FBX") + "</p></div><div class='model-downloads'>" + download("3d/relio-mascot.glb", "GLB", "glb") + download("3d/relio-mascot.fbx", "FBX", "fbx") + "</div></div><model-viewer src='assets/3d/relio-mascot.glb' alt='RELIO mascot 3D model' camera-controls auto-rotate shadow-intensity='1' exposure='1'></model-viewer></article>" +
      "</section>" +

      "<section id='voice' class='section'>" + sectionHead("voice", "09", "น้ำเสียงและแนวทาง", "Brand voice & guidelines", "สั้น ตรง เป็นมนุษย์ และบอกทางไปต่อเสมอ", "Concise, direct and human, always with a clear next step.") +
        "<div class='do-dont'><article class='do'><span>" + icon("check", 20) + " DO</span><h3>" + (th ? "บอกสิ่งที่เกิดขึ้น แล้วให้ทางไปต่อ" : "State what happened, then offer the next step.") + "</h3><div class='copy-example'>" + (th ? "บันทึกลูกค้าแล้ว คุณสร้างออเดอร์ต่อได้เลย" : "Customer saved. You can create an order next.") + "</div><ul><li>" + (th ? "ใช้คำกริยาที่ชัดเจน" : "Use clear action verbs") + "</li><li>" + (th ? "หนึ่งประโยค หนึ่งใจความ" : "One idea per sentence") + "</li><li>" + (th ? "ข้อความปุ่มยาวไม่เกิน 3–4 คำ" : "Keep button labels to 3–4 words") + "</li></ul></article><article class='dont'><span>" + icon("warning", 20) + " DON'T</span><h3>" + (th ? "อย่าโทษผู้ใช้หรือใช้ภาษาระบบ" : "Do not blame users or expose system jargon.") + "</h3><div class='copy-example bad'>" + (th ? "ข้อผิดพลาด 409: คุณส่งข้อมูลไม่ถูกต้อง!" : "Error 409: You submitted invalid data!") + "</div><ul><li>" + (th ? "ไม่ใช้คำอุทานเกินจำเป็น" : "Avoid unnecessary exclamation marks") + "</li><li>" + (th ? "ไม่ใช้คำคลุมเครือ เช่น ตกลง" : "Avoid vague labels such as OK") + "</li><li>" + (th ? "ไม่เขียนยาวเพื่ออธิบายข้อผิดพลาดง่าย ๆ" : "Do not over-explain simple errors") + "</li></ul></article></div>" +
      "</section>" +

      "<section id='foundations' class='section'>" + sectionHead("foundations", "10", "พื้นสว่างและพื้นมืด", "Light & dark foundations", "เปลี่ยนเฉพาะพื้นผิว ข้อความ และเส้น สีทีมยังคงความหมายเดิม", "Only surfaces, text and borders change. Team colours keep the same meaning.") +
        "<div class='foundation-grid'><article class='foundation light-demo'><div class='foundation-head'><b>Light foundation</b><code>#F7F8FA</code></div><div class='mini-nav'><span class='selected'>" + icon("user", 17) + (th ? "ลูกค้า" : "Customers") + "</span><span>" + icon("folder", 17) + (th ? "ออเดอร์" : "Orders") + "</span></div><h3>" + (th ? "สวัสดีตอนเช้า" : "Good morning") + "</h3><p>" + (th ? "ข้อมูลพร้อมให้คุณทำงานต่อ" : "Your workspace is ready.") + "</p><div class='mini-card'><span>" + icon("user", 18) + " " + (th ? "ลูกค้า" : "Customers") + "</span><b>1,032</b><em>↑ 12%</em></div><button>" + (th ? "บันทึก" : "Save") + "</button></article><article class='foundation dark-demo'><div class='foundation-head'><b>Dark foundation</b><code>#18191B</code></div><div class='mini-nav'><span class='selected'>" + icon("user", 17) + (th ? "ลูกค้า" : "Customers") + "</span><span>" + icon("folder", 17) + (th ? "ออเดอร์" : "Orders") + "</span></div><h3>" + (th ? "สวัสดีตอนเย็น" : "Good evening") + "</h3><p>" + (th ? "ข้อมูลพร้อมให้คุณทำงานต่อ" : "Your workspace is ready.") + "</p><div class='mini-card'><span>" + icon("folder", 18) + " " + (th ? "ออเดอร์" : "Orders") + "</span><b>284</b><em>↑ 8%</em></div><button>" + (th ? "บันทึก" : "Save") + "</button></article></div>" +
      "</section>" +

      "<section id='components' class='section'>" + sectionHead("components", "11", "สถานะและการใช้งานจริง", "States & product use", "องค์ประกอบเดียวกันต้องสื่อสถานะได้โดยไม่พึ่งสีเพียงอย่างเดียว", "Components must communicate state without relying on colour alone.") +
        "<div class='state-tabs' role='tablist'>" + ["default", "hover", "focus", "loading", "error", "success", "disabled"].map(function (s) { return "<button role='tab' data-state='" + s + "' aria-selected='" + (state.demo === s) + "'>" + s + "</button>"; }).join("") + "</div><div class='component-demo state-" + state.demo + "'><div><label>" + (th ? "ชื่อลูกค้า" : "Customer name") + "</label><input value='Siam Studio' " + (state.demo === "disabled" ? "disabled" : "") + "><small>" + (state.demo === "error" ? (th ? "กรุณาตรวจสอบชื่ออีกครั้ง" : "Please check the name.") : (th ? "ใช้ชื่อที่ปรากฏบนเอกสาร" : "Use the name shown on documents.")) + "</small></div><button class='btn primary' " + (state.demo === "disabled" ? "disabled" : "") + ">" + (state.demo === "loading" ? "<span class='spinner'></span>" : icon(state.demo === "success" ? "check" : "arrow", 17)) + (state.demo === "success" ? (th ? "บันทึกแล้ว" : "Saved") : (th ? "บันทึกลูกค้า" : "Save customer")) + "</button><div class='order-card'><span class='tag'>OMS</span><b>#ORD-0284</b><p>" + (th ? "พร้อมออกเอกสาร" : "Ready for documents") + "</p></div></div>" +
        "<div class='responsive-grid'><article><b>Desktop · 1280+</b><p>" + (th ? "Sidebar คงที่ เนื้อหากว้างสูงสุด 1120 px" : "Persistent sidebar, content max-width 1120px.") + "</p></article><article><b>Tablet · 768–1279</b><p>" + (th ? "ลดคอลัมน์และย้ายสารบัญเข้าปุ่ม Menu" : "Reduce columns and move navigation into Menu.") + "</p></article><article><b>Mobile · &lt;768</b><p>" + (th ? "หนึ่งคอลัมน์ Drawer เต็มจอ และปุ่มสูงอย่างน้อย 44 px" : "Single column, full-screen drawer, 44px minimum targets.") + "</p></article></div>" +
      "</section>" +

      "<section id='resources' class='section'>" + sectionHead("resources", "12", "ไฟล์ ลิงก์ และเวอร์ชัน", "Files, links & version", "ระบุนามสกุลไฟล์และ用途ให้ชัดก่อนดาวน์โหลด", "State file type and intended use before every download.") +
        "<div class='resource-grid'><a href='RELIO-DESIGN.md' download><span>" + icon("book", 22) + "</span><div><b>Brand guideline</b><small>RELIO-DESIGN.md · Markdown source</small></div>" + icon("download", 18) + "</a><a href='relio-tokens.css' download><span>" + icon("spark", 22) + "</span><div><b>CSS variables</b><small>relio-tokens.css · Production tokens</small></div>" + icon("download", 18) + "</a><a href='relio-tailwind.css' download><span>" + icon("spark", 22) + "</span><div><b>Tailwind v4 theme</b><small>relio-tailwind.css · Theme tokens</small></div>" + icon("download", 18) + "</a><a href='relio-tokens.json' download><span>" + icon("spark", 22) + "</span><div><b>Design tokens</b><small>relio-tokens.json · Tool interchange</small></div>" + icon("download", 18) + "</a></div>" +
        "<div class='links-row'><a href='https://styles.refero.design/style/9946887b-ffa9-4276-af81-ae6352795afb' target='_blank' rel='noreferrer'>Refero reference ↗</a><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor Icons ↗</a><a href='https://fonts.google.com/specimen/Bai+Jamjuree' target='_blank' rel='noreferrer'>Bai Jamjuree ↗</a></div>" +
        "<div class='changelog'><span>v2.0 · 15 Sep 2026</span><p>" + (th ? "เพิ่มภาษาไทย/อังกฤษ ธีมสว่าง/มืด รายละเอียดแบบ Drawer ชุดสีครบ ไอคอน สถานะ และไฟล์ดาวน์โหลด" : "Added bilingual content, themes, detail drawer, full palette, icons, states and explicit downloads.") + "</p></div>" +
      "</section>";
  }

  function mdText() {
    return "# RELIO — Design System\n\n> Customers + orders, connected.\n\n## Principles\n- Clear Connections\n- Friendly Guidance\n- Confident Actions\n\n## Brand colours\n- CRM Aqua: #28C6CD\n- OMS Blue: #1463D6\n- Action Orange: #FC9433\n\n## Typography\nBai Jamjuree 400 / 500 / 600\n\n## Spacing\n4px base unit; section gap 96px; card padding 24px.\n\n## Radius\nInput 8px; Button 10px; Card 16px; Panel 24px.\n\n## Accessibility\nDo not rely on colour alone. Keep focus visible and targets at least 44px.";
  }
  function cssText() {
    return ":root {\n  --brand-crm: #28C6CD;\n  --brand-oms: #1463D6;\n  --accent-warm: #FC9433;\n  --bg: #F7F8FA;\n  --surface: #FFFFFF;\n  --text: #202124;\n  --muted: #525866;\n  --line: #D8DDE5;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-4: 16px;\n  --space-6: 24px;\n  --radius-sm: 8px;\n  --radius-md: 10px;\n  --radius-lg: 16px;\n}\n\n[data-theme='dark'] {\n  --bg: #18191B;\n  --surface: #222427;\n  --text: #F5F6F7;\n  --muted: #C2C7D0;\n  --line: #41464F;\n}";
  }
  function tailwindText() {
    return "@theme {\n  --color-crm: #28C6CD;\n  --color-crm-deep: #087F8C;\n  --color-oms: #1463D6;\n  --color-action-warm: #FC9433;\n  --font-sans: 'Bai Jamjuree', 'Noto Sans Thai', Arial, sans-serif;\n  --radius-control: 8px;\n  --radius-button: 10px;\n  --radius-card: 16px;\n  --radius-panel: 24px;\n}";
  }
  function tokenText() {
    return JSON.stringify({ color: { brand: { crm: { value: "#28C6CD" }, oms: { value: "#1463D6" } }, action: { value: "#FC9433" } }, spacing: { xs: { value: "8px" }, md: { value: "16px" }, lg: { value: "24px" } }, radius: { card: { value: "16px" }, panel: { value: "24px" } } }, null, 2);
  }
  function drawer() {
    var tabs = [["md", "DESIGN.md"], ["tailwind", "Tailwind v4"], ["css", "CSS Variables"], ["tokens", "Design Tokens"]];
    var value = state.tab === "md" ? mdText() : state.tab === "tailwind" ? tailwindText() : state.tab === "css" ? cssText() : tokenText();
    $("#drawerRoot").innerHTML = "<div class='drawer-scrim " + (state.drawer ? "open" : "") + "' data-close-drawer></div><aside class='drawer " + (state.drawer ? "open" : "") + "' aria-hidden='" + (!state.drawer) + "' aria-label='" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "'><div class='drawer-top'><div><span class='eyebrow'>RELIO / STYLE</span><h2>" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "</h2></div><button class='icon-btn drawer-close' data-close-drawer aria-label='Close'>" + icon("close") + "</button></div><div class='drawer-tabs' role='tablist'>" + tabs.map(function (x) { return "<button role='tab' aria-selected='" + (state.tab === x[0]) + "' class='" + (state.tab === x[0] ? "active" : "") + "' data-drawer-tab='" + x[0] + "'>" + x[1] + "</button>"; }).join("") + "</div><div class='drawer-tools'><div class='seg'><button data-density='compact' class='" + (!state.extended ? "active" : "") + "'>Compact</button><button data-density='extended' class='" + (state.extended ? "active" : "") + "'>Extended</button></div><div><button class='btn secondary small' data-copy-drawer>" + icon("copy", 16) + "Copy</button><button class='btn secondary small' data-download-drawer>" + icon("download", 16) + "." + (state.tab === "tokens" ? "json" : state.tab === "tailwind" ? "css" : state.tab) + "</button></div></div><pre class='" + (state.extended ? "extended" : "") + "'><code></code></pre></aside>";
    $(".drawer code").textContent = value;
    if (state.tab === "md") {
      fetch("RELIO-DESIGN.md").then(function (response) { return response.text(); }).then(function (fullText) {
        if (state.tab === "md" && $(".drawer code")) $(".drawer code").textContent = fullText;
      }).catch(function () {});
    }
  }

  function bind() {
    $$("[data-lang]").forEach(function (b) { b.classList.toggle("active", b.dataset.lang === state.lang); b.onclick = function () { state.lang = b.dataset.lang; state.typeLang = b.dataset.lang; localStorage.setItem("relio-lang", state.lang); localStorage.setItem("relio-type-lang", state.typeLang); render(); }; });
    $$("[data-type-lang]").forEach(function (b) { b.onclick = function () { state.typeLang = b.dataset.typeLang; localStorage.setItem("relio-type-lang", state.typeLang); main(); bind(); }; });
    $$("[data-type-demo]").forEach(function (b) { b.onclick = function () { state.typeDemo = b.dataset.typeDemo; main(); bind(); }; });
    $("#theme").onclick = function () { state.theme = state.theme === "light" ? "dark" : "light"; localStorage.setItem("relio-theme", state.theme); render(); };
    $$("[data-open-drawer]").forEach(function (b) { b.onclick = openDrawer; });
    $("#menu").onclick = function () { $("#sidebar").classList.toggle("open"); };
    $$("[data-copy],[data-icon]").forEach(function (b) { b.onclick = function () { copyText(b.dataset.copy || b.dataset.icon); }; });
    $$(".color-circle[data-color-group]").forEach(function (b) { b.onclick = function () { state.colorPick[b.dataset.colorGroup] = Number(b.dataset.colorIndex); main(); bind(); }; });
    $$("[data-logo-variant]").forEach(function (b) { b.onclick = function () { state.logoVariant = Number(b.dataset.logoVariant); main(); bind(); }; });
    $$(".state-tabs button").forEach(function (b) { b.onclick = function () { state.demo = b.dataset.state; main(); bind(); }; });
    $$("#sidebar a").forEach(function (a) { a.onclick = function () { $("#sidebar").classList.remove("open"); }; });
    bindDrawer();
  }
  function openDrawer() { lastDrawerTrigger = document.activeElement; state.drawer = true; drawer(); bindDrawer(); document.body.classList.add("drawer-open"); setTimeout(function () { var close = $(".drawer-close"); if (close) close.focus(); }, 0); }
  function closeDrawer() { state.drawer = false; drawer(); bindDrawer(); document.body.classList.remove("drawer-open"); if (lastDrawerTrigger && lastDrawerTrigger.focus) lastDrawerTrigger.focus(); }
  function bindDrawer() {
    $$("[data-close-drawer]").forEach(function (b) { b.onclick = closeDrawer; });
    $$("[data-drawer-tab]").forEach(function (b) { b.onclick = function () { state.tab = b.dataset.drawerTab; drawer(); bindDrawer(); }; });
    $$("[data-density]").forEach(function (b) { b.onclick = function () { state.extended = b.dataset.density === "extended"; drawer(); bindDrawer(); }; });
    var cp = $("[data-copy-drawer]"); if (cp) cp.onclick = function () { copyText($(".drawer code").textContent); };
    var dl = $("[data-download-drawer]"); if (dl) dl.onclick = function () {
      var ext = state.tab === "tokens" ? "json" : state.tab === "tailwind" ? "css" : state.tab;
      var blob = new Blob([$(".drawer code").textContent], { type: "text/plain" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "relio-" + state.tab + "." + ext; a.click(); URL.revokeObjectURL(a.href);
    };
  }
  function observe() {
    var obs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { $$("#sidebar a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); }); } }); }, { rootMargin: "-20% 0px -70%" });
    $$("main > section").forEach(function (s) { obs.observe(s); });
  }
  function render() {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.theme = state.theme;
    header(); sidebar(); main(); drawer(); bind(); observe();
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && state.drawer) closeDrawer(); });
  render();
})();
