import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

  var systemIcons = [["user", "User"], ["folder", "Folder"], ["chat", "Chat"], ["search", "Search"], ["download", "Download"], ["copy", "Copy"], ["link", "Link"], ["heart", "Favourite"], ["check", "Success"], ["warning", "Warning"], ["spark", "AI assist"], ["arrow", "Continue"]];

export function renderIcons() {
  var th = state.lang === "th";
  return (
    "<section id='icons' class='section'>" + sectionHead("icons", "07", "ไอคอนและรูปทรง", "Icons & shapes", "ใช้ไอคอนเส้นแบบ Phosphor น้ำหนัก Regular ขนาด 16, 20 หรือ 24 px", "Use Phosphor line icons in Regular weight at 16, 20 or 24 px.") +
            "<div class='icon-grid'>" + systemIcons.map(function (ic) { return "<button data-icon='" + ic[0] + "' data-copy='Icon: " + ic[1] + ", regular, 20px'><span>" + icon(ic[0], 24) + "</span><b>" + ic[1] + "</b></button>"; }).join("") + "</div>" +
            "<div class='inline-note'>" + icon("check", 18) + "<span>" + (th ? "ไอคอนต้องมี label หรือ aria-label เสมอ และไม่ใช้ emoji แทนไอคอนระบบ" : "Icons always need a visible label or aria-label. Never substitute system icons with emoji.") + "</span><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor ↗</a></div>" +
            "<div class='inline-note'>" + icon("spark", 18) + "<span>" + (th ? "อ้างอิงข้อกำหนดสเปกดีไซน์ หมวด 8.12: ขนาดไอคอนขั้นต่ำและระยะห่างของพื้นที่แตะ (touch target) ต้องไม่น้อยกว่า 24px เพื่อให้ใช้งานง่ายบนอุปกรณ์สัมผัส" : "Per design spec section 8.12: minimum icon size and touch-target spacing must not be smaller than 24px for usability on touch devices.") + "</span></div>" +
          "</section>"
  );
}
