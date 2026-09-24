import { state } from "../state.js";
import { icon } from "./shared.js";

var STATE_META = {
  default: { th: "ค่าเริ่มต้น", en: "Default" },
  hover: { th: "โฮเวอร์", en: "Hover" },
  focus: { th: "โฟกัส", en: "Focus" },
  loading: { th: "กำลังโหลด", en: "Loading" },
  error: { th: "ผิดพลาด", en: "Error" },
  success: { th: "สำเร็จ", en: "Success" },
  disabled: { th: "ปิดใช้งาน", en: "Disabled" }
};

var BADGE_TONES = {
  default: { cls: "badge-outline", label: { th: "รอการยืนยัน", en: "Pending" } },
  success: { cls: "badge-success", label: { th: "ยืนยันแล้ว", en: "Confirmed" }, icon: "check" },
  error: { cls: "badge-danger", label: { th: "ต้องตรวจสอบ", en: "Needs review" }, icon: "warning" },
  disabled: { cls: "badge-outline is-disabled", label: { th: "หมดอายุ", en: "Expired" } }
};

var specimens = [
  {
    id: "input",
    name: { th: "ช่องกรอกข้อมูล", en: "Input" },
    desc: { th: "ฟิลด์ข้อความพร้อมป้ายกำกับและข้อความช่วยเหลือ", en: "A text field with a label and helper text." },
    states: ["default", "hover", "focus", "error", "success", "disabled"],
    render: function (s, th) {
      var isError = s === "error", isSuccess = s === "success", isDisabled = s === "disabled";
      var isHover = s === "hover", isFocus = s === "focus";
      var helper = isError ? (th ? "กรุณาตรวจสอบชื่ออีกครั้ง" : "Please check the name.")
        : isSuccess ? (th ? "ชื่อถูกต้องแล้ว" : "Name looks good.")
        : (th ? "ใช้ชื่อที่ปรากฏบนเอกสาร" : "Use the name shown on documents.");
      var inputCls = "" + (isHover ? " is-hover" : "") + (isFocus ? " is-focus" : "");
      return "<div class='demo-field state-" + s + "'>" +
        "<label for='specimen-field-input'>" + (th ? "ชื่อลูกค้า" : "Customer name") + "</label>" +
        "<input id='specimen-field-input' value='Siam Studio'" + (inputCls ? " class='" + inputCls.trim() + "'" : "") + (isDisabled ? " disabled" : "") + ">" +
        "<small>" + (isError ? icon("warning", 14) : isSuccess ? icon("check", 14) : "") + "<span>" + helper + "</span></small>" +
        "</div>";
    },
    notes: {
      error: { th: "แสดงไอคอนเตือนคู่กับข้อความช่วยเหลือ ไม่พึ่งสีแดงเพียงอย่างเดียว", en: "Pairs a warning icon with helper text — colour is never the only signal." },
      disabled: { th: "ใช้ attribute disabled จริง ปุ่ม Tab จะข้ามช่องนี้โดยอัตโนมัติ", en: "Uses a real disabled attribute, so Tab naturally skips this field." }
    }
  },
  {
    id: "button",
    name: { th: "ปุ่ม", en: "Button" },
    desc: { th: "ปุ่มหลักสำหรับการกระทำสำคัญ พร้อมสถานะโหลดและสำเร็จ", en: "The primary action button, with loading and success states." },
    states: ["default", "hover", "focus", "loading", "success", "disabled"],
    render: function (s, th) {
      var isDisabled = s === "disabled", isLoading = s === "loading", isSuccess = s === "success";
      var isHover = s === "hover", isFocus = s === "focus";
      var label = isLoading ? (th ? "กำลังบันทึก…" : "Saving…") : isSuccess ? (th ? "บันทึกแล้ว" : "Saved") : (th ? "บันทึกลูกค้า" : "Save customer");
      var cls = "btn primary" + (isHover ? " is-hover" : "") + (isFocus ? " is-focus" : "");
      return "<button class='" + cls + "'" + (isDisabled || isLoading ? " disabled" : "") + (isLoading ? " aria-busy='true'" : "") + ">" +
        "<span>" + label + "</span>" + (isLoading ? "<span class='spinner' aria-hidden='true'></span>" : icon(isSuccess ? "check" : "arrow", 17)) +
        "</button>";
    },
    notes: {
      loading: { th: "ปุ่มถูกปิดใช้งานระหว่างโหลดและประกาศ aria-busy เพื่อกันการกดซ้ำ", en: "Disabled while loading and announces aria-busy to block double submits." }
    }
  },
  {
    id: "icon-button",
    name: { th: "ปุ่มไอคอน", en: "Icon button" },
    desc: { th: "ปุ่มขนาดกะทัดรัดสำหรับการกระทำรอง", en: "A compact button for a secondary action." },
    states: ["default", "hover", "focus", "disabled"],
    render: function (s, th) {
      var isDisabled = s === "disabled", isHover = s === "hover", isFocus = s === "focus";
      var cls = "icon-btn" + (isHover ? " is-hover" : "") + (isFocus ? " is-focus" : "");
      return "<button class='" + cls + "' aria-label='" + (th ? "การทำงานเพิ่มเติม" : "More actions") + "'" + (isDisabled ? " disabled" : "") + ">" + icon("spark", 20) + "</button>";
    },
    notes: {
      focus: { th: "ขอบโฟกัสต้องมีคอนทราสต์อย่างน้อย 3:1 กับพื้นหลังทั้งสองธีม", en: "The focus ring keeps at least 3:1 contrast against both themes." }
    }
  },
  {
    id: "badge",
    name: { th: "แบดจ์", en: "Badge" },
    desc: { th: "ป้ายสถานะขนาดเล็กที่ไม่โต้ตอบ ใช้บอกสถานะของรายการ", en: "A small, non-interactive label used to signal an item's status." },
    states: ["default", "success", "error", "disabled"],
    render: function (s, th) {
      var meta = BADGE_TONES[s];
      return "<span class='badge " + meta.cls + "'" + (s === "disabled" ? " aria-disabled='true'" : "") + ">" +
        (meta.icon ? icon(meta.icon, 15) : "") + (th ? meta.label.th : meta.label.en) + "</span>";
    },
    notes: {
      disabled: { th: "ใช้ aria-disabled เพราะแบดจ์ไม่ใช่ element ที่โต้ตอบได้", en: "Uses aria-disabled since a badge is not an interactive element." }
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
      (note ? "<p class='specimen-note'>" + icon("warning", 14) + "<span>" + (th ? note.th : note.en) + "</span></p>" : "") +
    "</div>";
}

function componentSpecimen(th) {
  return "<div class='work-specimen'>" +
      "<div class='work-specimen-head'><div><span class='eyebrow'>COMPONENT SPECIMENS</span><h2 id='components-title'>" + (th ? "ตัวอย่างคอมโพเนนต์" : "Component specimens") + "</h2><p>" + (th ? "รวมคอมโพเนนต์หลักและสถานะทั้งหมดไว้ในหน้าเดียว" : "All core components and their states, together in one place.") + "</p></div></div>" +
      "<div class='specimen-grid'>" + specimens.map(function (s) { return specimenCard(s, th); }).join("") + "</div>" +
    "</div>";
}

function responsiveSection(th) {
  return "<div class='responsive-section'><h3>" + (th ? "พฤติกรรมตอบสนอง" : "Responsive behavior") + "</h3><div class='responsive-grid'>" +
    "<article><b>Desktop · 1280+</b><p>" + (th ? "Sidebar คงที่ เนื้อหากว้างสูงสุด 1120 px" : "Persistent sidebar, content max-width 1120px.") + "</p></article>" +
    "<article><b>Tablet · 768–1279</b><p>" + (th ? "ลดคอลัมน์และย้ายสารบัญเข้าปุ่ม Menu" : "Reduce columns and move navigation into Menu.") + "</p></article>" +
    "<article><b>Mobile · &lt;768</b><p>" + (th ? "หนึ่งคอลัมน์ Drawer เต็มจอ และปุ่มสูงอย่างน้อย 44 px" : "Single column, full-screen drawer, 44px minimum targets.") + "</p></article>" +
    "</div></div>";
}

export function renderComponents() {
  var th = state.lang === "th";
  return (
    "<section id='components' class='section'>" +
      componentSpecimen(th) +
      responsiveSection(th) +
    "</section>"
  );
}
