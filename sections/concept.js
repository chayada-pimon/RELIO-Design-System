import { state } from "../state.js";
import { icon } from "./shared.js";

export function renderConcept() {
  var th = state.lang === "th";
  return (
    "<section id='concept' class='section concept-section'><div class='concept-intro'><span class='eyebrow'>" + (th ? "ในไกด์นี้" : "IN THIS GUIDE") + "</span><h2 id='concept-title'>" + (th ? "ทุกอย่างในไกด์นี้ อยู่ในที่เดียว" : "Everything in this guide, at a glance.") + "</h2><p>" + (th ? "ตั้งแต่โลโก้ สี ไปจนถึงคอมโพเนนต์และน้ำเสียง — สำรวจแต่ละหัวข้อได้จากการ์ดด้านล่าง" : "From logo and colour to components and voice — jump into any topic from the cards below.") + "</p></div>" +
            "<div class='concept-grid'>" +

              "<a href='#components' class='concept-card concept-guide'><div class='concept-panel'><div class='ui-preview'>" +
                "<span class='btn primary'>" + (th ? "ปุ่มหลัก" : "Primary button") + "</span>" +
                "<span class='ui-input-fake'>" + (th ? "ข้อความ..." : "Type something...") + "</span>" +
                "<span class='work-live'><i></i>" + (th ? "พร้อมใช้งาน" : "Ready to use") + "</span>" +
              "</div></div><div class='concept-body'><span class='concept-body-icon aqua'>" + icon("sliders-horizontal", 20) + "</span><div class='concept-body-text'><h3>" + (th ? "คอมโพเนนต์" : "Components") + "</h3><p>" + (th ? "ปุ่ม สถานะ และตัวอย่างระบบพร้อมใช้งาน" : "Buttons, states and system examples ready to use.") + "</p></div><span class='concept-body-arrow'>" + icon("arrow", 16) + "</span></div></a>" +

              "<a href='#colors' class='concept-card concept-status'><div class='concept-panel'><div class='window-pair'>" +
                "<div class='mini-window light'><div class='mini-window-bar'><i></i><i></i><i></i></div><div class='mini-window-body'><span></span><span></span><span class='mini-btn'></span></div></div>" +
                "<div class='mini-window dark'><div class='mini-window-bar'><i></i><i></i><i></i></div><div class='mini-window-body'><span></span><span></span><span class='mini-btn'></span></div></div>" +
              "</div></div><div class='concept-body'><span class='concept-body-icon blue'>" + icon("palette", 20) + "</span><div class='concept-body-text'><h3>" + (th ? "สีและธีม" : "Colour & theme") + "</h3><p>" + (th ? "ชุดสี CRM และ OMS พร้อมโหมดสว่างและมืด" : "CRM and OMS palettes, ready for light and dark mode.") + "</p></div><span class='concept-body-arrow'>" + icon("arrow", 16) + "</span></div></a>" +

              "<a href='#icons' class='concept-card concept-friendly'><div class='concept-panel'>" +
                "<div class='icon-row'><span class='icon-tile blue'>" + icon("home", 22) + "</span><span class='icon-tile aqua'>" + icon("users", 22) + "</span><span class='icon-tile orange'>" + icon("bell", 22) + "</span></div>" +
              "</div><div class='concept-body'><span class='concept-body-icon blue'>" + icon("chat-circle", 20) + "</span><div class='concept-body-text'><h3>" + (th ? "ไอคอน มาสคอต และน้ำเสียง" : "Icons, mascot & voice") + "</h3><p>" + (th ? "รายละเอียดที่เพิ่มความเป็นมนุษย์ให้โปรดักต์" : "Playful details that keep the product feeling human.") + "</p></div><span class='concept-body-arrow'>" + icon("arrow", 16) + "</span></div></a>" +

              "<a href='#resources' class='concept-card concept-flow'><div class='concept-panel'><div class='flow-stack'>" +
                "<div><span class='flow-icon aqua'>" + icon("brackets-curly", 18) + "</span><p><b>" + (th ? "โทเค็นดีไซน์" : "Design tokens") + "</b><small>tokens.json</small></p><i class='skeleton-bar'></i></div>" +
                "<div><span class='flow-icon blue'>" + icon("code", 18) + "</span><p><b>" + (th ? "ตัวแปร CSS" : "CSS variables") + "</b><small>styles.css</small></p><i class='skeleton-bar'></i></div>" +
                "<div><span class='flow-icon orange'>" + icon("file-text", 18) + "</span><p><b>" + (th ? "ไกด์ฉบับเต็ม" : "Full guide") + "</b><small>DESIGN.md</small></p><i class='skeleton-bar'></i></div>" +
              "</div></div><div class='concept-body'><span class='concept-body-icon aqua'>" + icon("folder", 20) + "</span><div class='concept-body-text'><h3>" + (th ? "ไฟล์และเวอร์ชัน" : "Resources") + "</h3><p>" + (th ? "ดาวน์โหลดโทเค็น ตัวแปร CSS และไกด์ฉบับเต็ม" : "Download tokens, CSS variables and the full guide.") + "</p></div><span class='concept-body-arrow'>" + icon("arrow", 16) + "</span></div></a>" +

            "</div>" +
          "</section>"
  );
}
