import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

export function renderUsage() {
  var th = state.lang === "th";
  return (
    "<section id='usage' class='section'>" + sectionHead("usage", "10", "ตัวอย่างการใช้งานจริง", "Applied UI example", "นำคอมโพเนนต์และสีของสองทีมมาประกอบเป็นหน้าจอลูกค้า + ออเดอร์ตัวอย่าง เพื่อดูว่าใช้งานร่วมกันอย่างไรในงานจริง", "The components and team colours above, composed into a real customer + order screen.") +
            "<div class='component-demo'>" +
              "<div class='customer-pane'>" +
                "<div class='pane-kicker'><span class='context-badge crm-badge'>" + icon("users", 14) + (th ? "ลูกค้า" : "Customer") + "</span><button class='quiet-action' aria-label='" + (th ? "การทำงานเพิ่มเติม" : "More actions") + "'>" + icon("spark", 18) + "</button></div>" +
                "<div class='customer-profile'><span class='avatar'>SS</span><div><h4>Siam Studio</h4><p>" + (th ? "ลูกค้าตั้งแต่ มี.ค. 2567" : "Customer since Mar 2024") + "</p></div></div>" +
                "<dl class='customer-details'>" +
                  "<div><dt>" + (th ? "โทรศัพท์" : "Phone") + "</dt><dd>081 234 5678</dd></div>" +
                  "<div><dt>" + (th ? "อีเมล" : "Email") + "</dt><dd>hello@siamstudio.co</dd></div>" +
                  "<div><dt>" + (th ? "ระดับ" : "Tier") + "</dt><dd>" + (th ? "พันธมิตร" : "Partner") + "</dd></div>" +
                  "<div><dt>" + (th ? "ผู้ดูแล" : "Owner") + "</dt><dd>" + (th ? "อาทิตย์ ว." : "Arthit W.") + "</dd></div>" +
                "</dl>" +
                "<div class='customer-note'><span>" + icon("chat", 18) + "</span><p><b>" + (th ? "บันทึกล่าสุด" : "Latest note") + "</b>" + (th ? "ลูกค้าขอใบเสร็จแยกตามสาขาในออเดอร์ถัดไป" : "Customer asked for a per-branch receipt on the next order.") + "</p></div>" +
                "<button class='btn secondary specimen-button'>" + icon("user", 16) + "<span>" + (th ? "ดูโปรไฟล์แบบเต็ม" : "View full profile") + "</span></button>" +
              "</div>" +
              "<div class='order-pane'>" +
                "<div class='pane-kicker'><span class='context-badge oms-badge'>" + icon("folder", 14) + (th ? "ออเดอร์" : "Order") + "</span><button class='quiet-action' aria-label='" + (th ? "การทำงานเพิ่มเติม" : "More actions") + "'>" + icon("spark", 18) + "</button></div>" +
                "<div class='order-heading'><div><h4>Order #A-2049</h4><p class='order-date'>23 " + (th ? "ก.ย. 2569" : "Sep 2026") + "</p></div><span class='order-total'>฿48,500</span></div>" +
                "<div class='order-progress'><span class='complete'></span><span class='complete'></span><span class='current'></span><span></span></div>" +
                "<div class='order-status'><span class='status-icon'>" + icon("check", 14) + "</span><div><b>" + (th ? "จัดส่งแล้ว" : "Shipped") + "</b><small>" + (th ? "ถึงลูกค้าโดยประมาณ 25 ก.ย." : "Estimated arrival Sep 25") + "</small></div></div>" +
                "<div class='order-actions'><button class='btn secondary'>" + icon("receipt", 16) + "<span>" + (th ? "ดูใบเสร็จ" : "View receipt") + "</span></button><button class='btn primary'>" + icon("arrow", 16) + "<span>" + (th ? "ติดต่อลูกค้า" : "Contact customer") + "</span></button></div>" +
              "</div>" +
            "</div>" +
            "<p class='specimen-caption'>" + (th ? "Badge, Avatar, ปุ่ม และแถบสถานะทั้งหมดมาจากหมวดตัวอย่างคอมโพเนนต์ด้านบน สีเน้น Aqua ฝั่งลูกค้า และ Blue ฝั่งออเดอร์ ตามสัดส่วนการใช้สีของแบรนด์" : "Every badge, avatar, button and status strip here comes from the component specimens above — Aqua accents the customer side, Blue accents the order side, following the brand's colour ratio.") + "</p>" +
          "</section>"
  );
}
