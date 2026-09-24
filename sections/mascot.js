import { state } from "../state.js";
import { sectionHead, download } from "./shared.js";

export function renderMascot() {
  var th = state.lang === "th";
  return (
    "<section id='mascot' class='section'>" + sectionHead("mascot", "08", "แนวทางมาสคอต", "Mascot direction", "ใช้มาสคอตเพื่อช่วยนำทางหรือสร้างจังหวะ ไม่ใช้แทนข้อมูลสำคัญ", "Use mascots for guidance and rhythm, never as a substitute for critical information.") +
            "<div class='duo-showcase'><img src='assets/pair-original.png' alt='CRM and OMS mascot duo'><div><span class='eyebrow'>MASTER DUO</span><h3>CRM + OMS</h3><p>" + (th ? "CRM เด่นกว่าเล็กน้อยเมื่อต้องเล่าเรื่องความสัมพันธ์ ส่วน OMS ใช้คู่กับงานออเดอร์และเอกสาร" : "CRM leads relationship stories; OMS supports order and document moments.") + "</p>" + download("pair-original.png", "Mascot duo", "PNG") + "</div></div>" +
            "<div class='character-sheets'><article><div class='asset-title'><div><span class='team-dot aqua'></span><h3>CRM character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("crm-character-sheet.png", "CRM sheet", "PNG") + "</div><img src='assets/crm-character-sheet.png' alt='CRM mascot character sheet with front side back and poses'></article><article><div class='asset-title'><div><span class='team-dot blue'></span><h3>OMS character sheet</h3><p>1536 × 1024 px · PNG</p></div>" + download("oms-character-sheet.png", "OMS sheet", "PNG") + "</div><img src='assets/oms-character-sheet.png' alt='OMS mascot character sheet with front side back and poses'></article></div>" +
          "</section>"
  );
}
