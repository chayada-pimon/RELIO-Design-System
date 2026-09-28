import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";
import { typeGroups, spacing, radii, shadows, durations } from "./tokens-v3.js";

function metric(rows, preview, th) {
  return "<div class='metric-table'>" + rows.map(function (r) {
    return "<div><b>" + r[0] + "</b><code>" + r[1] + "</code>" + preview(r) + "<small>" + (th ? r[2] : r[3]) + "</small></div>";
  }).join("") + "</div>";
}

export function renderType() {
  var th = state.lang === "th";
  var sampleTh = state.typeLang === "th";
  return (
    "<section id='type' class='section'>" + sectionHead("type", "05", "ตัวอักษร ระยะ และรูปทรง", "Typography, spacing & shape", "ฟอนต์เดียว Noto Sans Thai น้ำหนัก 400/500/600 หัวข้อใช้ 600 ภาษาไทยไม่เว้นระยะตัวอักษร และเนื้อความสูงบรรทัด 1.55 ขึ้นไป", "One family, Noto Sans Thai at 400/500/600. Headings are 600, Thai letter-spacing is 0 and body line-height is 1.55 or more.") +
      "<div class='font-pair'>" +
        "<div class='font-card'><div><span class='eyebrow'>PORTAL FONT · SANS</span><h3>Noto Sans Thai</h3><p>Thai + Latin · 400 / 500 / 600 · fallback: Arial, system-ui</p></div><a class='text-link' href='https://fonts.google.com/noto/specimen/Noto+Sans+Thai' target='_blank' rel='noreferrer'>Google Fonts " + icon("arrow", 17) + "</a><div class='font-sample'><span>ก ข ค</span><span>Aa Bb Cc</span><span class='num'>0123456789</span></div></div>" +
      "</div>" +
      "<div class='type-scale-head'><h3 class='subhead'>Type scale</h3><div class='seg type-language' role='group' aria-label='Type sample language'><button data-type-lang='th' aria-pressed='" + sampleTh + "' class='" + (sampleTh ? "active" : "") + "'>ไทย</button><button data-type-lang='en' aria-pressed='" + !sampleTh + "' class='" + (!sampleTh ? "active" : "") + "'>EN</button></div></div>" +
      typeGroups.map(function (g) {
        return "<div class='type-group'><h4>" + g.name + "</h4><div class='type-table'>" + g.styles.map(function (s) {
          var num = s[0] === "stat-value" ? ";font-variant-numeric:tabular-nums" : "";
          return "<div class='type-row'><code>" + s[0] + "</code><div class='type-sample' style='font-family:var(--font-sans);font-size:clamp(12px,9cqw," + s[1] + "px);font-weight:" + s[3] + ";line-height:" + s[2] + num + "'>" + (sampleTh ? s[4] : s[5]) + "</div><small>" + s[1] + "px · " + s[3] + " · " + s[2] + "<br>" + (th ? s[6] : s[7]) + "</small></div>";
        }).join("") + "</div></div>";
      }).join("") +
      "<div class='spec-grid'>" +
        "<div><h3>Spacing</h3>" + metric(spacing, function (s) { return "<span class='space-preview' style='width:min(" + s[1] + ",70%)'></span>"; }, th) + "</div>" +
        "<div><h3>Border radius</h3>" + metric(radii, function (r) { return "<span class='radius-preview' style='border-radius:" + (r[0] === "radius-pill" ? "999px" : r[1]) + "'></span>"; }, th) + "</div>" +
        "<div><h3>Shadow</h3><p class='spec-note'>" + (th ? "การ์ดเรียบ มีแค่เส้นขอบ เงาใช้กับชั้นที่ลอยและโครงสีน้ำเงินเท่านั้น" : "Cards are flat (border only). Shadows mark floating layers and the blue chrome.") + "</p>" + metric(shadows.map(function (s) { return [s[0], "", s[2], s[3], s[1]]; }), function (s) { return "<span class='shadow-preview' style='box-shadow:" + s[4] + "'></span>"; }, th) + "</div>" +
        "<div><h3>Motion</h3><p class='spec-note'>" + (th ? "ทุกการเคลื่อนไหวลดเหลือเกือบศูนย์เมื่อเปิด prefers-reduced-motion" : "All motion drops to near zero under prefers-reduced-motion.") + "</p>" + metric(durations, function (d) { return "<span class='space-preview' style='width:min(" + (parseInt(d[1], 10) / 6) + "px,70%)'></span>"; }, th) + "</div>" +
      "</div>" +
    "</section>"
  );
}
