import { state } from "../state.js";
import { sectionHead, download } from "./shared.js";

export function renderMascot() {
  var th = state.lang === "th";
  return (
    "<section id='mascot' class='section'>" + sectionHead("mascot", "08", "แนวทางมาสคอต", "Mascot direction", "ใช้มาสคอตช่วยนำทางและสร้างจังหวะ ไม่ใช้แทนข้อมูลสำคัญ ในพอร์ทัลมาสคอตอยู่ในภาพหน้า login และมุมขวาล่างของ Dashboard hero เท่านั้น", "Mascots guide and add rhythm, never replace critical information. In the portal they appear only on the login illustration and bottom-right in the dashboard hero.") +
      "<div class='duo-showcase'>" +
        "<div class='mascot-stage'><img class='mascot-art' src='assets/portal/login-mascots.webp' alt='" + (th ? "มาสคอต CRM และ OMS ยืนบนแล็ปท็อป" : "CRM and OMS mascots standing on a laptop") + "'></div>" +
        "<div><span class='eyebrow'>PORTAL ILLUSTRATION</span><h3>CRM + OMS</h3><p>" + (th ? "มาสคอตยืนบนแล็ปท็อปพร้อมไอคอนช่องทางขาย ใช้บนพื้นน้ำเงิน วางภาพเรืองแสงไว้ด้านหลัง ขนาด 240px ใน hero และแสดงเฉพาะจอ lg ขึ้นไป" : "The mascots on a laptop with sales-channel icons. Use on blue grounds with the glow image behind; 240px in the hero, lg screens only.") + "</p><div class='button-row'>" + download("portal/login-mascots.webp", "Mascots", "WEBP") + download("portal/login-glow.webp", "Glow", "WEBP") + "</div></div>" +
      "</div>" +
      "<div class='character-sheets'><article><div class='asset-title'><div><span class='team-dot aqua'></span><h3>CRM character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("crm-character-sheet.png", "CRM sheet", "PNG") + "</div><img src='assets/crm-character-sheet.png' alt='CRM mascot character sheet with front side back and poses'></article><article><div class='asset-title'><div><span class='team-dot blue'></span><h3>OMS character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("oms-character-sheet.png", "OMS sheet", "PNG") + "</div><img src='assets/oms-character-sheet.png' alt='OMS mascot character sheet with front side back and poses'></article></div>" +
    "</section>"
  );
}
