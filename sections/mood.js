import { state } from "../state.js";
import { sectionHead } from "./shared.js";

export function renderMood() {
  var th = state.lang === "th";
  return (
    "<section id='mood' class='section'>" + sectionHead("mood", "06", "ภาพและกราฟิก", "Imagery & graphic style", "โครงสีน้ำเงินกับเนื้อหาสีกลาง ภาพ 3D ผิวเงาและมาสคอตอยู่บนพื้นน้ำเงินเท่านั้น", "Blue chrome around neutral content. Glossy 3D art and mascots sit on blue grounds only.") +
      "<figure class='mood-figure'><img src='assets/mood-3d-icons.png' alt='Bright playful 3D icon and mascot mood reference'><figcaption><b>Bright, Playful & Connected</b><span>" + (th ? "ภาพสร้างด้วย AI · ใช้เป็น Mood reference" : "AI-generated · Mood reference") + "</span></figcaption></figure>" +
      "<div class='rules three'>" +
        "<article><b>" + (th ? "น้ำเงินเป็นโครง เนื้อหาเป็นกลาง" : "Blue chrome, neutral content") + "</b><p>" + (th ? "เมนูวางบนพื้นน้ำเงินไล่แบบ radial พร้อมตารางเส้นขาว 56px ส่วนเนื้อหาลอยอยู่บนแผง bg-canvas" : "The sidebar sits on a blue radial backdrop with a 56px white grid; content floats on a bg-canvas panel.") + "</p></article>" +
        "<article><b>" + (th ? "ไล่สีได้ 3 ที่เท่านั้น" : "Gradients in three places") + "</b><p>" + (th ? "เมนูและพื้นหลัง, ภาพหน้า login และ Dashboard hero ห้ามใช้กับการ์ด ปุ่ม หรือตาราง" : "The sidebar backdrop, the login illustration and the dashboard hero. Never on cards, buttons or tables.") + "</p></article>" +
        "<article><b>" + (th ? "มาสคอตบนพื้นน้ำเงิน" : "Mascots on blue") + "</b><p>" + (th ? "มาสคอต CRM + OMS ลอยขึ้นลง 10px ทุก 6 วินาที มีเงาน้ำเงินอ่อน ไม่วางในการ์ด ปุ่ม หรือตาราง" : "The CRM + OMS mascots float 10px over 6s with a soft blue shadow; never inside cards, buttons or tables.") + "</p></article>" +
      "</div>" +
    "</section>"
  );
}
