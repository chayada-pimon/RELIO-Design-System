import { state } from "../state.js";
import { icon } from "./shared.js";

export function renderOverview() {
  var th = state.lang === "th";
  return (
    "<section id='overview' class='hero section'>" +
            "<div class='hero-copy'><span class='eyebrow'>CUSTOMERS + ORDERS, CONNECTED.</span><h1>RELIO</h1><p class='hero-kicker'>Design System</p><p class='hero-text'>" + (th ? "คู่มือสี ตัวอักษร ภาพ และองค์ประกอบสำหรับผลิตภัณฑ์ที่เชื่อมลูกค้ากับทุกออเดอร์" : "A practical guide to colour, type, imagery and components for products connecting customers with every order.") + "</p><div class='hero-actions'><button class='btn primary' data-open-drawer>" + icon("book", 18) + (th ? "เปิดคู่มือแบบละเอียด" : "Open detailed guide") + "</button><a class='text-link' href='#concept'>" + (th ? "สำรวจระบบ" : "Explore system") + icon("arrow", 18) + "</a></div></div>" +
            "<div class='hero-art showcase'>" + showcaseCol1(th) + showcaseCol2(th) + showcaseCol3(th) + "<img class='hero-float' src='assets/pair-blocks.png' alt='RELIO CRM and OMS mascots' draggable='false'></div>" +
          "</section>"
  );
}

function showcaseCol1(th) {
  return (
    "<div class='showcase-col'>" +
      "<div class='show-card tall crm'>" +
        "<div class='show-card-head'><span class='show-dot'></span>" + (th ? "ลูกค้า" : "Customer") + "<i class='ph ph-dots-three-vertical'></i></div>" +
        "<img src='assets/crm-front.png' alt='' draggable='false' class='show-mascot'>" +
        "<div class='show-info'><b>Odette Tran</b><span>" + (th ? "สมาชิกตั้งแต่ 2023" : "Member since 2023") + "</span></div>" +
      "</div>" +
      "<div class='show-card'>" +
        "<div class='show-card-head'>" + (th ? "แชทสนับสนุน" : "Support chat") + "</div>" +
        "<div class='show-chat'><p>" + (th ? "พัสดุของคุณถึงแล้วค่ะ" : "Your package just arrived") + "</p><span>2m</span></div>" +
      "</div>" +
    "</div>"
  );
}

function showcaseCol2(th) {
  return (
    "<div class='showcase-col'>" +
      "<div class='show-card'>" +
        "<div class='show-card-head'>" + (th ? "โทนสี" : "Palette") + "</div>" +
        "<div class='show-swatches'><span style='background:var(--crm)'></span><span style='background:var(--oms)'></span><span style='background:var(--orange)'></span></div>" +
      "</div>" +
      "<div class='show-card tall oms'>" +
        "<div class='show-card-head'><span class='show-dot blue'></span>" + (th ? "คำสั่งซื้อ" : "Order") + " #4821<i class='ph ph-dots-three-vertical'></i></div>" +
        "<img src='assets/oms-front.png' alt='' draggable='false' class='show-mascot'>" +
        "<div class='show-status'>" + icon("check", 15) + (th ? "กำลังจัดส่ง" : "Out for delivery") + "</div>" +
      "</div>" +
    "</div>"
  );
}

function showcaseCol3(th) {
  return (
    "<div class='showcase-col'>" +
      "<div class='show-card tall'>" +
        "<div class='show-card-head'>" + (th ? "แจ้งเตือน" : "Notifications") + "<i class='ph ph-bell'></i></div>" +
        "<div class='show-list'>" +
          "<div><span class='show-dot orange'></span><p>" + (th ? "ออเดอร์ใหม่เข้ามา" : "New order received") + "</p></div>" +
          "<div><span class='show-dot'></span><p>" + (th ? "ลูกค้าฝากข้อความ" : "Customer left a note") + "</p></div>" +
        "</div>" +
      "</div>" +
      "<div class='show-card dark'>" +
        "<div class='show-card-head light'>" + (th ? "ภาพรวม" : "At a glance") + "</div>" +
        "<div class='show-stat'><b>128</b><span>" + (th ? "ออเดอร์วันนี้" : "orders today") + "</span></div>" +
      "</div>" +
    "</div>"
  );
}
