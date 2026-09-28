import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

// Core Phosphor icons of the CRM Center portal: [phosphor name, Component name, meaning TH, meaning EN].
var coreIcons = [
  ["squares-four", "SquaresFour", "Dashboard", "Dashboard"],
  ["users-three", "UsersThree", "ลูกค้า", "Customers"],
  ["receipt", "Receipt", "คำสั่งซื้อ", "Orders"],
  ["gift", "Gift", "สิทธิประโยชน์", "Rewards"],
  ["coins", "Coins", "แต้มสะสม", "Points"],
  ["plugs", "Plugs", "การเชื่อมต่อ", "Integrations"],
  ["gear-six", "GearSix", "ตั้งค่า", "Settings"],
  ["bell", "Bell", "แจ้งเตือน", "Notifications"],
  ["moon", "Moon", "ธีมมืด", "Dark theme"],
  ["sun", "Sun", "ธีมสว่าง", "Light theme"],
  ["magnifying-glass", "MagnifyingGlass", "ค้นหา", "Search"],
  ["sign-out", "SignOut", "ออกจากระบบ", "Sign out"]
];

var statusIcons = [
  ["check-circle", "CheckCircle", "success"],
  ["warning-circle", "WarningCircle", "warning"],
  ["x-circle", "XCircle", "error"],
  ["info", "Info", "info"]
];

var sizes = [[14, "tags, carets"], [16, "inline"], [18, "nav, search"], [20, "buttons, top bar"], [32, "empty states"]];

export function renderIcons() {
  var th = state.lang === "th";
  return (
    "<section id='icons' class='section'>" + sectionHead("icons", "07", "ไอคอน", "Iconography", "Phosphor Icons น้ำหนัก Regular เป็นค่าเริ่มต้น ใช้ Bold กับเมนูที่เลือก เครื่องหมายถูก และไอคอนในแท็ก ใช้ Fill กับไอคอน alert เท่านั้น", "Phosphor Icons, Regular by default. Bold for the active nav row, checks and tag icons; Fill only for alert icons.") +
      "<div class='icon-grid'>" + coreIcons.map(function (ic) {
        return "<button data-icon='" + ic[1] + "' data-copy='import { " + ic[1] + " } from \"@phosphor-icons/react\"'><span>" + icon(ic[0], 24) + "</span><b>" + (th ? ic[2] : ic[3]) + "</b><small>" + ic[1] + "</small></button>";
      }).join("") + "</div>" +
      "<div class='icon-specs'>" +
        "<div class='icon-spec'><h3>" + (th ? "ขนาด" : "Sizes") + "</h3><div class='icon-sizes'>" + sizes.map(function (s) { return "<div>" + icon("users-three", s[0]) + "<b>" + s[0] + "</b><small>" + s[1] + "</small></div>"; }).join("") + "</div></div>" +
        "<div class='icon-spec'><h3>" + (th ? "น้ำหนัก" : "Weights") + "</h3><div class='icon-sizes'>" +
          "<div>" + icon("receipt", 24) + "<b>Regular</b><small>" + (th ? "ค่าเริ่มต้น" : "default") + "</small></div>" +
          "<div>" + icon("receipt", 24, "bold") + "<b>Bold</b><small>" + (th ? "เมนูที่เลือก แท็ก" : "active nav, tags") + "</small></div>" +
          "<div>" + icon("warning-circle", 24, "fill") + "<b>Fill</b><small>" + (th ? "alert เท่านั้น" : "alerts only") + "</small></div>" +
        "</div></div>" +
        "<div class='icon-spec'><h3>" + (th ? "ไอคอนสถานะ" : "Status icons") + "</h3><div class='cc-row'>" + statusIcons.map(function (s) {
          return "<span class='cc-tag cc-tag-" + s[2] + "'>" + icon(s[0], 14, "bold") + s[1] + "</span>";
        }).join("") + "</div></div>" +
      "</div>" +
      "<div class='inline-note'>" + icon("check", 18) + "<span>" + (th ? "ปุ่มที่มีแต่ไอคอนต้องมี aria-label ภาษาไทยเสมอ และห้ามใช้ emoji แทนไอคอนระบบ ในโค้ดจริงให้ import จาก @phosphor-icons/react" : "Icon-only buttons always carry a Thai aria-label. Never substitute emoji. In product code, import from @phosphor-icons/react.") + "</span><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor ↗</a></div>" +
    "</section>"
  );
}
