import { state } from "../state.js";
import { sectionHead } from "./shared.js";

var logoMarks = [
  ["Logomark", "สัญลักษณ์", "logo/Relio Logomark - Full Color.svg", "logo/Relio Logomark - Black.svg", "logo/Relio Logomark - White.svg"],
  ["Vertical", "แนวตั้ง", "logo/Relio Logo - Vertical - Full Color.svg", "logo/Relio Logo - Vertical - Black.svg", "logo/Relio Logo - Vertical - White.svg"],
  ["Horizontal", "แนวนอน", "logo/Relio Logo - Horizontal - Full Color.svg", "logo/Relio Logo - Horizontal - Black.svg", "logo/Relio Logo - Horizontal - White.svg"]
];

var logoVariantLabels = {
  th: ["สีหลัก", "สีดำ", "สีขาว"],
  en: ["Full colour", "Black", "White"]
};

export function renderLogo() {
  var th = state.lang === "th";
  var labels = th ? logoVariantLabels.th : logoVariantLabels.en;
  return (
    "<section id='logo' class='section'>" + sectionHead("logo", "03", "ทิศทางและการใช้งานโลโก้", "Logo direction", "สัญลักษณ์คำพูดสองอันเชื่อมกันกับชื่อ RELIO ใช้ไฟล์ต้นฉบับเสมอ และเว้นพื้นที่รอบโลโก้อย่างน้อยเท่าความสูงของตัว R", "The mark is two connected speech bubbles paired with the RELIO wordmark. Always use the master file and keep clear space equal to the height of the R.") +
      "<div class='logo-toolbar'><div class='color-picker small logo-variant-picker' role='listbox' aria-label='" + (th ? "สีโลโก้" : "Logo colour") + "'>" +
        labels.map(function (name, i) {
          var swatch = i === 0 ? "linear-gradient(135deg, var(--crm) 0 50%, var(--oms) 50% 100%)" : i === 1 ? "#202124" : "#ffffff";
          return "<button class='color-circle" + (i === 2 ? " outline" : "") + (state.logoVariant === i ? " selected" : "") + "' role='option' aria-selected='" + (state.logoVariant === i) + "' aria-label='" + name + "' data-logo-variant='" + i + "' style='--circle-color:" + swatch + "'></button>";
        }).join("") +
      "</div></div>" +
      "<div class='logo-grid'>" +
        logoMarks.map(function (mark) {
          var file = mark[2 + state.logoVariant];
          var label = th ? mark[1] : mark[0];
          return "<article class='logo-card'><div class='logo-stage " + (state.logoVariant === 2 ? "dark-stage" : "light-stage") + "'><img src='assets/" + encodeURI(file) + "' alt='RELIO " + mark[0] + " logo, " + labels[state.logoVariant] + "'></div><div class='logo-card-foot'><span>" + label + "</span></div></article>";
        }).join("") +
      "</div>" +
    "</section>"
  );
}
