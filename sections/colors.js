import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

  var colors = [
    { group: "Primary Color", items: [["CRM Aqua", "--crm", "#28C6CD", "#5EDAE0", "ลูกค้าและความสัมพันธ์", "Customers & relationships"], ["OMS Blue", "--oms", "#1463D6", "#75A7FF", "ออเดอร์และเอกสาร", "Orders & documents"]] },
    { group: "Supporting", items: [["Action Orange", "--orange", "#FC9433", "#FC9433", "จุดเน้นขนาดเล็ก", "Small points of emphasis"], ["Warm Cream", "--surface-warm", "#FBF1E5", "#FBF1E5", "พื้นอุ่น", "Warm surface"], ["Navy Ink", "--ink-brand", "#011F5D", "#011F5D", "ข้อความบน Aqua", "Text on Aqua"], ["Deep Aqua", "--crm-deep", "#087F8C", "#5EDAE0", "ลิงก์และสถานะ", "Links & status"]] },
    { group: "Neutrals", items: [["Page / Canvas", "--bg", "#F7F8FA", "#18191B", "พื้นหน้า", "Page background"], ["Surface", "--surface", "#FFFFFF", "#222427", "การ์ด", "Cards"], ["Subtle / Raised", "--raised", "#F0F2F5", "#2D3035", "พื้นรอง", "Secondary surface"], ["Ink / Text", "--text", "#202124", "#F5F6F7", "ข้อความหลัก", "Primary text"], ["Slate / Muted", "--muted", "#525866", "#C2C7D0", "ข้อความรอง", "Secondary text"], ["Quiet", "--quiet", "#7D8592", "#A0A8B4", "คำอธิบาย", "Captions"], ["Border", "--line", "#D8DDE5", "#41464F", "เส้นแบ่ง", "Dividers"], ["Disabled", "--disabled", "#AEB5C0", "#686F79", "ปิดใช้งาน", "Disabled"]] },
    { group: "Semantic", items: [["Success", "--success", "#18734A", "#75D9A2", "สำเร็จ", "Success"], ["Success soft", "--success-soft", "#DDF5E8", "#173526", "พื้นสำเร็จ", "Success background"], ["Warning", "--warning", "#8A4B08", "#FFD18A", "เตือน", "Warning"], ["Warning soft", "--warning-soft", "#FFF0D0", "#3D2D16", "พื้นเตือน", "Warning background"], ["Danger", "--danger", "#B42318", "#FF9A91", "ข้อผิดพลาด", "Error"], ["Danger soft", "--danger-soft", "#FFE4E1", "#421F1E", "พื้นผิดพลาด", "Error background"], ["Info", "--info", "#1463D6", "#A2C4FF", "ข้อมูล", "Info"], ["Info soft", "--info-soft", "#E1ECFF", "#182E50", "พื้นข้อมูล", "Info background"]] }
  ];

export function renderColors() {
  var th = state.lang === "th";
  return (
    "<section id='colors' class='section'>" + sectionHead("colors", "04", "ชุดสีและสัดส่วน", "Colour palette & usage", "Aqua และ Blue เป็นสีทีม ใช้สีเป็นสัญญาณ ไม่ใช้ย้อมทั้งหน้า", "Aqua and Blue identify teams. Use colour as a signal, not a page wash.") +
            "<div class='ratio'><span style='--w:60%;--c:var(--bg)'>60% Neutral</span><span style='--w:20%;--c:var(--surface)'>20% Surface</span><span style='--w:10%;--c:var(--crm)'>10% CRM</span><span style='--w:8%;--c:var(--oms)'>8% OMS</span><span aria-label='2% Accent' style='--w:2%;--c:var(--orange)'><span aria-hidden='true'>2% Accent</span></span></div>" +
            colors.map(function (g) {
              return "<div class='palette-group'><h3>" + g.group + "</h3>" +
                "<div class='color-grid'>" +
                  g.items.map(function (c) {
                    var hex = state.theme === "dark" ? c[3] : c[2];
                    return "<div class='color-block'>" +
                      "<span class='color-rect' style='background:" + hex + "'></span>" +
                      "<span class='color-name'>" + c[0] + "</span>" +
                      "<code class='swatch-copy' data-copy='" + hex + "'>" + hex + icon("copy", 14) + "</code>" +
                      "<em>" + (th ? c[4] : c[5]) + "</em>" +
                    "</div>";
                  }).join("") +
                "</div>" +
              "</div>";
            }).join("") +
          "</section>"
  );
}
