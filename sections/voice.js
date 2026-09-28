import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

// [situation TH, situation EN, copy TH, copy EN]
var examples = [
  ["บันทึกสำเร็จ", "Saved", "บันทึกลูกค้าแล้ว สร้างออเดอร์ต่อได้เลย", "Customer saved. You can create an order next."],
  ["ปุ่ม", "Buttons", "บันทึกลูกค้า · ดูคำสั่งซื้อ · เพิ่มผู้ใช้งาน", "Save customer · View orders · Add user"],
  ["ยกเลิกในกล่องยืนยัน", "Confirm-dialog cancel", "ไม่ใช่ตอนนี้", "Not now"],
  ["ข้อผิดพลาด", "Error", "อีเมลหรือรหัสผ่านไม่ถูกต้อง ลองตรวจสอบอีกครั้ง", "Email or password is incorrect. Check them and try again."],
  ["ไม่มีข้อมูล", "Empty state", "บัญชีนี้ยังไม่ได้ผูกกับบริษัท ติดต่อผู้ดูแลเพื่อเพิ่มคุณเข้าบริษัท", "This account isn't linked to a company yet. Ask an admin to add you."]
];

export function renderVoice() {
  var th = state.lang === "th";
  return (
    "<section id='voice' class='section'>" + sectionHead("voice", "09", "น้ำเสียงและถ้อยคำ", "Voice & content", "ภาษาไทยเป็นภาษาหลักของอินเทอร์เฟซ ใช้อังกฤษเฉพาะชื่อผลิตภัณฑ์และคำมาตรฐาน บอกผลลัพธ์ก่อน แล้วบอกขั้นต่อไป", "Thai is the interface language; English only for product names and standard terms. Say the result first, then the next step.") +
      "<div class='do-dont'><article class='do'><span>" + icon("check-circle", 20, "bold") + " DO</span><h3>" + (th ? "บอกผลลัพธ์ แล้วให้ทางไปต่อ" : "State the result, then the next step.") + "</h3><div class='copy-example'>" + (th ? "บันทึกลูกค้าแล้ว สร้างออเดอร์ต่อได้เลย" : "Customer saved. You can create an order next.") + "</div><ul><li>" + (th ? "ตั้งชื่อปุ่มตามผลลัพธ์ 1–4 คำ" : "Name buttons by outcome, 1–4 words") + "</li><li>" + (th ? "ทุกหน้ามีประโยคอธิบาย 1 ประโยค ไม่เกิน 66ch" : "Every page header has one sentence, max 66ch") + "</li><li>" + (th ? "ข้อผิดพลาดบอกว่าเกิดอะไรและแก้อย่างไร" : "Errors say what happened and how to fix it") + "</li></ul></article><article class='dont'><span>" + icon("x-circle", 20, "bold") + " DON'T</span><h3>" + (th ? "อย่าโทษผู้ใช้หรือโชว์รหัสข้อผิดพลาด" : "Do not blame users or show error codes.") + "</h3><div class='copy-example bad'>" + (th ? "ข้อผิดพลาด 409: คุณส่งข้อมูลไม่ถูกต้อง!" : "Error 409: You submitted invalid data!") + "</div><ul><li>" + (th ? "ห้ามใช้ \"ตกลง\" หรือ \"Submit\" เป็นชื่อปุ่ม" : "Never \"OK\" or \"Submit\" as a button label") + "</li><li>" + (th ? "ไม่ใช้ emoji และเครื่องหมายตกใจในข้อความระบบ" : "No emoji or exclamation marks in system copy") + "</li><li>" + (th ? "ไม่เขียน \"ไม่พบข้อมูล\" ลอย ๆ ให้บอกเหตุผลและสิ่งที่ทำต่อได้" : "Never \"No data\" alone; explain why and what to do") + "</li></ul></article></div>" +
      "<div class='copy-table'>" + examples.map(function (e) {
        return "<div><span>" + (th ? e[0] : e[1]) + "</span><b>" + (th ? e[2] : e[3]) + "</b></div>";
      }).join("") + "</div>" +
      "<p class='specimen-caption'>" + (th ? "ข้อยกเว้นเดียวของเครื่องหมายตกใจคือคำทักทายบน Dashboard" : "The dashboard greeting is the one exception to the no-exclamation rule.") + "</p>" +
    "</section>"
  );
}
