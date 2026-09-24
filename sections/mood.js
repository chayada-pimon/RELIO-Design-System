import { state } from "../state.js";
import { sectionHead } from "./shared.js";

export function renderMood() {
  var th = state.lang === "th";
  return (
    "<section id='mood' class='section'>" + sectionHead("mood", "06", "ภาพอ้างอิงและกราฟิก", "Mood imagery & graphic style", "สว่าง สดใส เป็นมิตร และเชื่อมทุกงานเข้าด้วยกัน — มีชีวิตชีวา มีพื้นที่หายใจ และมีสีแบรนด์เพียงจุดเล็ก ๆ", "Bright, Playful & Connected — lively and spacious, with brand colour used in small details.") +
            "<figure class='mood-figure'><img src='assets/relio-mood-3d-icons.png' alt='Bright playful 3D icon and mascot mood reference'><figcaption><b>Bright, Playful & Connected</b><span>" + (th ? "ภาพสร้างเฉพาะสำหรับ RELIO · ใช้เป็น Mood reference" : "AI-generated for RELIO · Mood reference") + "</span></figcaption></figure>" +
            "<div class='rules three'><article><b>Light first</b><p>" + (th ? "ใช้พื้นหลังสว่างและพื้นที่ว่างให้ภาพดูโปร่ง เงาน้อย คอนทราสต์ชัด" : "Bright backgrounds and generous whitespace keep the image airy, with subtle shadow and clear contrast.") + "</p></article><article><b>Playful 3D</b><p>" + (th ? "ผสานกราฟิก 3D ผิวเงาและรูปทรงโค้งมนเพื่อให้แบรนด์ทันสมัยและเข้าถึงง่าย" : "Glossy 3D graphics and rounded shapes keep the brand modern and approachable.") + "</p></article><article><b>Connected systems</b><p>" + (th ? "ใช้ CRM Aqua และ OMS Blue แยกบทบาทของแต่ละระบบ แล้วเชื่อมทั้งสองสีผ่านเส้น การ์ด หรือองค์ประกอบที่เคลื่อนไหวร่วมกัน" : "CRM Aqua and OMS Blue mark each system's role, then link together through connecting lines, cards, or shared motion.") + "</p></article></div>" +
          "</section>"
  );
}
