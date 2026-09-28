import { state } from "../state.js";
import { icon, ccLogo, sectionHead } from "./shared.js";

// [order id, customer, channel, tone, status TH, status EN, total]
var orders = [
  ["SO-2609-0412", "สมศรี ใจดี", "Shopee", "success", "ชำระแล้ว", "Paid", "฿1,290"],
  ["SO-2609-0411", "ธนากร ศรีสุข", "LINE", "warning", "รอชำระ", "Awaiting payment", "฿640"],
  ["SO-2609-0409", "มาลี วงศ์ทอง", "Lazada", "info", "กำลังจัดส่ง", "Shipping", "฿2,450"],
  ["SO-2609-0406", "อาทิตย์ วงศ์ใหญ่", "TikTok Shop", "error", "ชำระไม่สำเร็จ", "Payment failed", "฿980"]
];
var toneIcon = { success: "check-circle", warning: "warning-circle", info: "info", error: "x-circle" };

export function renderUsage() {
  var th = state.lang === "th";
  var navRow = function (ic, label, active) {
    return "<span class='cc-nav-row" + (active ? " is-active" : "") + "'>" + icon(ic, 18, active ? "bold" : "regular") + "<span>" + label + "</span></span>";
  };
  return (
    "<section id='usage' class='section'>" + sectionHead("usage", "10", "ตัวอย่างหน้าจอจริง", "Applied example", "หน้าคำสั่งซื้อของ CRM Center ประกอบจาก AppShell, PageHeader, StatTile, Tabs, Table และ Tag ข้างบน", "The CRM Center orders page, composed from the AppShell, PageHeader, StatTile, Tabs, Table and Tag above.") +
      "<div class='app-demo cc-backdrop' aria-label='" + (th ? "ตัวอย่างหน้าคำสั่งซื้อ" : "Orders page example") + "' role='img'>" +
        "<div class='cc-shell'>" +
          "<div class='cc-shell-side'>" +
            "<div class='nav-demo-logo'>" + ccLogo(true) + "</div>" +
            "<div class='cc-nav'>" +
              "<div class='cc-nav-sec'><span class='cc-nav-head'>ภาพรวม</span>" + navRow("squares-four", "Dashboard") + "</div>" +
              "<div class='cc-nav-sec'><span class='cc-nav-head'>ลูกค้าและการขาย</span>" + navRow("users-three", "ลูกค้า") + navRow("receipt", "คำสั่งซื้อ", true) + navRow("gift", "สิทธิประโยชน์") + "</div>" +
              "<div class='cc-nav-sec'><span class='cc-nav-head'>ผู้ดูแลระบบ</span>" + navRow("plugs", "การเชื่อมต่อระบบ") + navRow("gear-six", "ตั้งค่า") + "</div>" +
            "</div>" +
          "</div>" +
          "<div class='cc-shell-panel'>" +
            "<div class='cc-topbar'>" +
              "<div class='cc-input-wrap demo-switcher'>" + icon("buildings", 16).replace("class='ph ", "class='ph cc-ico ") + "<span class='cc-input cc-select'><span>บริษัท สยามคอสเมติก จำกัด</span>" + icon("caret-down", 16) + "</span></div>" +
              "<div class='cc-topbar-end'><span class='cc-icon-btn'>" + icon("moon", 20) + "</span><span class='cc-icon-btn'>" + icon("bell", 20) + "<span class='cc-dot'></span></span><span class='cc-avatar-btn'><span class='cc-avatar'>so</span></span></div>" +
            "</div>" +
            "<div class='demo-main'>" +
              "<div class='cc-page-head'><div><h4 class='cc-h1'>" + (th ? "คำสั่งซื้อ" : "Orders") + "</h4><p class='cc-lead'>" + (th ? "คำสั่งซื้อจากทุกช่องทางของบริษัทที่เลือก อัปเดตทุก 15 นาที" : "Orders from every channel of the selected company, refreshed every 15 minutes.") + "</p></div>" +
                "<div class='cc-row'><span class='cc-btn cc-btn-default'>" + icon("download-simple", 20) + (th ? "ส่งออกไฟล์" : "Export") + "</span><span class='cc-btn cc-btn-primary'>" + icon("plus", 20, "bold") + (th ? "สร้างคำสั่งซื้อ" : "New order") + "</span></div></div>" +
              "<div class='cc-grid-4'>" +
                "<div class='cc-stat'><div class='cc-stat-head'>" + (th ? "คำสั่งซื้อเดือนนี้" : "Orders this month") + "<span class='cc-chip cc-chip-oms'>" + icon("receipt", 20) + "</span></div><span class='cc-stat-value'>3,912</span><span class='cc-stat-note'>Shopee 48% · Lazada 31%</span></div>" +
                "<div class='cc-stat'><div class='cc-stat-head'>" + (th ? "ยอดขาย 30 วัน" : "Sales, 30 days") + "<span class='cc-chip cc-chip-neutral'>" + icon("coins", 20) + "</span></div><span class='cc-stat-value'>฿1,284,500</span><span class='cc-stat-note'>" + (th ? "+8.2% จาก 30 วันก่อน" : "+8.2% vs previous 30 days") + "</span></div>" +
                "<div class='cc-stat'><div class='cc-stat-head'>" + (th ? "รอชำระ" : "Awaiting payment") + "<span class='cc-chip cc-chip-warning'>" + icon("warning-circle", 20) + "</span></div><span class='cc-stat-value'>38</span><span class='cc-stat-note'>" + (th ? "เก่าสุด 2 วัน" : "Oldest: 2 days") + "</span></div>" +
              "</div>" +
              "<div class='cc-tabs'><span class='cc-tab is-active'>" + (th ? "ทั้งหมด" : "All") + "<span class='cc-tab-count'>1,204</span></span><span class='cc-tab'>" + (th ? "รอชำระ" : "Awaiting") + "<span class='cc-tab-count'>38</span></span><span class='cc-tab'>" + (th ? "กำลังจัดส่ง" : "Shipping") + "<span class='cc-tab-count'>112</span></span></div>" +
              "<div class='cc-table-wrap'><table class='cc-table'><thead><tr><th>" + (th ? "เลขที่คำสั่งซื้อ" : "Order") + "</th><th>" + (th ? "ลูกค้า" : "Customer") + "</th><th>" + (th ? "ช่องทาง" : "Channel") + "</th><th>" + (th ? "สถานะ" : "Status") + "</th><th class='is-right'>" + (th ? "ยอดรวม" : "Total") + "</th></tr></thead><tbody>" +
                orders.map(function (o) {
                  return "<tr><td class='is-strong cc-num'>" + o[0] + "</td><td>" + o[1] + "</td><td class='cc-quiet'>" + o[2] + "</td><td><span class='cc-tag cc-tag-" + o[3] + "'>" + icon(toneIcon[o[3]], 14, "bold") + (th ? o[4] : o[5]) + "</span></td><td class='is-right cc-num'>" + o[6] + "</td></tr>";
                }).join("") +
              "</tbody></table></div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>" +
      "<p class='specimen-caption'>" + (th ? "น้ำเงินอยู่ที่โครงและปุ่มหลักปุ่มเดียว เนื้อหาเป็นสีกลาง การ์ดเรียบไม่มีเงา ตัวเลขเงินและเลขออเดอร์ใช้ tabular-nums และทุกสถานะมีไอคอนกำกับ" : "Blue stays in the chrome and the one primary action; content is neutral, cards are flat, money and order IDs use tabular-nums, and every status carries its icon.") + "</p>" +
    "</section>"
  );
}
