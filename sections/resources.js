import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

export function renderResources() {
  var th = state.lang === "th";
  var item = function (href, ic, title, desc, external) {
    return "<a href='" + href + "'" + (external ? " target='_blank' rel='noreferrer'" : " download") + "><span>" + icon(ic, 22) + "</span><div><b>" + title + "</b><small>" + desc + "</small></div>" + icon(external ? "arrow-square-out" : "download", 18) + "</a>";
  };
  return (
    "<section id='resources' class='section'>" + sectionHead("resources", "12", "ไฟล์ ลิงก์ และเวอร์ชัน", "Files, links & version", "ระบุนามสกุลไฟล์และการใช้งานให้ชัดก่อนดาวน์โหลด", "State file type and intended use before every download.") +
      "<div class='resource-grid'>" +
        item("CRM-CENTER-DESIGN.md", "book", th ? "คู่มือ + design prompt" : "Guide + design prompt", th ? "CRM-CENTER-DESIGN.md · Markdown รวมหลักการ โทเคน และ prompt สำหรับเครื่องมือ AI" : "CRM-CENTER-DESIGN.md · Markdown with principles, tokens and a prompt for AI design tools") +
        item("https://claude.ai/artifact/BAV9vXJmr9krq2EEx8ytfx", "squares-four", th ? "Design system CRM Center" : "CRM Center design system", th ? "claude.ai · โทเคน 18 คอมโพเนนต์ และ preview สด" : "claude.ai · tokens, 18 components and live previews", true) +
        item("assets/portal/login-mascots.webp", "smiley", th ? "ภาพมาสคอตพอร์ทัล" : "Portal mascots", "login-mascots.webp · WEBP · " + (th ? "ใช้บนพื้นน้ำเงินคู่กับ login-glow.webp" : "for blue grounds, with login-glow.webp")) +
        item("assets/mood-3d-icons.png", "palette", "Mood reference", "mood-3d-icons.png · 1536 × 1024 px") +
      "</div>" +
      "<div class='links-row'><a href='https://fonts.google.com/noto/specimen/Noto+Sans+Thai' target='_blank' rel='noreferrer'>Noto Sans Thai ↗</a><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor Icons ↗</a></div>" +
    "</section>"
  );
}
