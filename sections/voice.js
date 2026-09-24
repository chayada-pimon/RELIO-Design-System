import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

export function renderVoice() {
  var th = state.lang === "th";
  return (
    "<section id='voice' class='section'>" + sectionHead("voice", "09", "น้ำเสียงและแนวทาง", "Brand voice & guidelines", "สั้น ตรง เป็นมนุษย์ และบอกทางไปต่อเสมอ", "Concise, direct and human, always with a clear next step.") +
            "<div class='do-dont'><article class='do'><span>" + icon("check", 20) + " DO</span><h3>" + (th ? "บอกสิ่งที่เกิดขึ้น แล้วให้ทางไปต่อ" : "State what happened, then offer the next step.") + "</h3><div class='copy-example'>" + (th ? "บันทึกลูกค้าแล้ว คุณสร้างออเดอร์ต่อได้เลย" : "Customer saved. You can create an order next.") + "</div><ul><li>" + (th ? "ใช้คำกริยาที่ชัดเจน" : "Use clear action verbs") + "</li><li>" + (th ? "หนึ่งประโยค หนึ่งใจความ" : "One idea per sentence") + "</li><li>" + (th ? "ข้อความปุ่มยาวไม่เกิน 3–4 คำ" : "Keep button labels to 3–4 words") + "</li></ul></article><article class='dont'><span>" + icon("warning", 20) + " DON'T</span><h3>" + (th ? "อย่าโทษผู้ใช้หรือใช้ภาษาระบบ" : "Do not blame users or expose system jargon.") + "</h3><div class='copy-example bad'>" + (th ? "ข้อผิดพลาด 409: คุณส่งข้อมูลไม่ถูกต้อง!" : "Error 409: You submitted invalid data!") + "</div><ul><li>" + (th ? "ไม่ใช้คำอุทานเกินจำเป็น" : "Avoid unnecessary exclamation marks") + "</li><li>" + (th ? "ไม่ใช้คำคลุมเครือ เช่น ตกลง" : "Avoid vague labels such as OK") + "</li><li>" + (th ? "ไม่เขียนยาวเพื่ออธิบายข้อผิดพลาดง่าย ๆ" : "Do not over-explain simple errors") + "</li></ul></article></div>" +
          "</section>"
  );
}
