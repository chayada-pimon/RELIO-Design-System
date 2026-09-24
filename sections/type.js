import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

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

export function renderType() {
  var th = state.lang === "th";
  return (
    "<section id='type' class='section'>" + sectionHead("type", "05", "ตัวอักษร ระยะ และรูปทรง", "Typography, spacing & shape", "สเกลเดียวสำหรับทั้งระบบ ลดความสับสนและทำให้ภาษาไทยอ่านสบาย", "One system-wide scale keeps Thai and English clear and consistent.") +
            "<div class='font-card'><div><span class='eyebrow'>PRIMARY FONT</span><h3>Bai Jamjuree</h3><p>Thai + Latin · 400 / 500 / 600 · fallback: Arial, sans-serif</p></div><a class='text-link' href='https://fonts.google.com/specimen/Bai+Jamjuree' target='_blank' rel='noreferrer'>Google Fonts " + icon("arrow", 17) + "</a><div class='font-sample'><span>ก ข ค</span><span>Aa Bb Cc</span><span>0123456789</span></div></div>" +
            "<div class='type-scale-head'><h3 class='subhead'>Type scale</h3><div class='seg type-language' role='group' aria-label='Type sample language'><button data-type-lang='th' aria-pressed='" + (state.typeLang === "th") + "' class='" + (state.typeLang === "th" ? "active" : "") + "'>ไทย</button><button data-type-lang='en' aria-pressed='" + (state.typeLang === "en") + "' class='" + (state.typeLang === "en" ? "active" : "") + "'>EN</button></div></div><div class='type-table'>" + scale.map(function (s) { return "<div class='type-row'><code>" + s[0] + "</code><div class='type-sample' style='font-size:clamp(12px,9cqw," + s[2] + "px);font-weight:" + s[3] + ";line-height:" + s[4] + ";letter-spacing:" + s[5] + "'>" + (state.typeLang === "th" ? s[1] : s[7]) + "</div><small>" + s[2] + "px · " + s[3] + " · " + s[4] + " · " + s[5] + "<br>" + s[6] + "</small></div>"; }).join("") + "</div>" +
            "<div class='spec-grid'><div><h3>Spacing</h3><div class='metric-table'>" + spacing.map(function (s) { return "<div><b>" + s[0] + "</b><code>" + s[1] + "px</code><span class='space-preview' style='width:min(" + s[1] + "px,70%)'></span><small>" + s[2] + "</small></div>"; }).join("") + "</div></div><div><h3>Border radius</h3><div class='metric-table'>" + radii.map(function (r) { return "<div><b>" + r[0] + "</b><code>" + r[1] + "px</code><span class='radius-preview' style='border-radius:" + r[1] + "px'></span><small>" + r[2] + "</small></div>"; }).join("") + "</div></div></div>" +
          "</section>"
  );
}
