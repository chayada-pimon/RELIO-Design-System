import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";
import { colorGroups } from "./tokens-v3.js";

export function renderColors() {
  var th = state.lang === "th";
  return (
    "<section id='colors' class='section'>" + sectionHead("colors", "04", "ชุดสีและสัดส่วน", "Colour tokens & usage", "เนื้อหาใช้สีกลาง สีน้ำเงินเป็นของโครงพอร์ทัลและปุ่มหลักปุ่มเดียว Aqua บอกบริบท CRM ส่วนส้มใช้ไม่เกิน 2% ของหน้า", "Content stays neutral. Blue belongs to the portal chrome and the one primary action. Aqua marks CRM context; orange stays under 2% of a view.") +
      "<div class='ratio'><span style='--w:60%;--c:var(--bg-canvas)'>60% Neutral</span><span style='--w:20%;--c:var(--bg-surface)'>20% Surface</span><span class='on-dark' style='--w:12%;--c:var(--portal-blue-200)'>12% Portal</span><span style='--w:6%;--c:var(--brand-crm-graphic)'>6% Brand</span><span aria-label='2% Accent' style='--w:2%;--c:var(--accent-warm-ui)'><span aria-hidden='true'>2% Accent</span></span></div>" +
      colorGroups.map(function (g) {
        return "<div class='palette-group'><h3>" + (th ? g.th : g.en) + "</h3>" +
          "<div class='color-grid'>" +
            g.items.map(function (c) {
              var value = state.theme === "dark" ? c[2] : c[1];
              return "<div class='color-block'>" +
                "<span class='color-rect' style='background:var(--" + c[0] + ")'></span>" +
                "<span class='color-name'>" + c[0] + "</span>" +
                "<code class='swatch-copy' data-copy='" + value + "'>" + value + icon("copy", 14) + "</code>" +
                "<em>" + (th ? c[3] : c[4]) + "</em>" +
              "</div>";
            }).join("") +
          "</div>" +
        "</div>";
      }).join("") +
    "</section>"
  );
}
