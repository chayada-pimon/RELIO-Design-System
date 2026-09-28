import { state } from "../state.js";
import { sectionHead, ccLogo } from "./shared.js";

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
    "<section id='logo' class='section'>" + sectionHead("logo", "03", "โลโก้", "Logo", "โลโก้พอร์ทัลคือไทล์ CC ขนาด 32px มุม radius-lg ตามด้วยคำว่า CRM Center วาดด้วยโค้ด ไม่มีไฟล์ ส่วนโลโก้ RELIO เป็นแบรนด์แม่", "The portal logo is a 32px radius-lg CC tile followed by \"CRM Center\", drawn in code with no file. RELIO is the parent brand.") +
      "<div class='cc-logo-grid'>" +
        "<article class='logo-card'><div class='logo-stage blue-stage'>" + ccLogo(true) + "<span>" + (th ? "บนพื้นน้ำเงิน" : "On blue") + "</span></div><div class='logo-card-foot'><span>" + (th ? "ไทล์ขาว ตัวอักษร portal-mark ชื่อสีขาว" : "White tile, portal-mark letters, white wordmark") + "</span></div></article>" +
        "<article class='logo-card'><div class='logo-stage light-stage'>" + ccLogo(false) + "<span>" + (th ? "บนพื้นสว่าง" : "On light") + "</span></div><div class='logo-card-foot'><span>" + (th ? "ไทล์ portal-mark ตัวอักษรขาว ชื่อ text-primary" : "portal-mark tile, white letters, text-primary wordmark") + "</span></div></article>" +
      "</div>" +
      "<h3 class='subhead'>" + (th ? "RELIO · แบรนด์แม่" : "RELIO · parent brand") + "</h3>" +
      "<p class='logo-guideline'>" + (th ? "สัญลักษณ์คำพูดสองอันเชื่อมกันกับชื่อ RELIO ใช้ไฟล์ต้นฉบับเสมอ และเว้นพื้นที่รอบโลโก้อย่างน้อยเท่าความสูงของตัว R" : "Two connected speech bubbles with the RELIO wordmark. Always use the master file and keep clear space equal to the height of the R.") + "</p>" +
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
          return "<article class='logo-card'><div class='logo-stage " + (state.logoVariant === 2 ? "blue-stage" : "light-stage") + "'><img src='assets/" + encodeURI(file) + "' alt='RELIO " + mark[0] + " logo, " + labels[state.logoVariant] + "'></div><div class='logo-card-foot'><span>" + label + "</span></div></article>";
        }).join("") +
      "</div>" +
    "</section>"
  );
}
