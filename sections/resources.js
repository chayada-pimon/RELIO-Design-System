import { state } from "../state.js";
import { icon, sectionHead } from "./shared.js";

export function renderResources() {
  var th = state.lang === "th";
  return (
    "<section id='resources' class='section'>" + sectionHead("resources", "12", "ไฟล์ ลิงก์ และเวอร์ชัน", "Files, links & version", "ระบุนามสกุลไฟล์และการใช้งานให้ชัดก่อนดาวน์โหลด", "State file type and intended use before every download.") +
            "<div class='resource-grid'><a href='RELIO-DESIGN.md' download><span>" + icon("book", 22) + "</span><div><b>Brand guideline + tokens</b><small>RELIO-DESIGN.md · Markdown, includes CSS variables, Tailwind theme and JSON tokens · load and use directly</small></div>" + icon("download", 18) + "</a><a href='" + encodeURI("assets/logo/Relio Logomark - Full Color.svg") + "' download><span>" + icon("shapes", 22) + "</span><div><b>Logo pack</b><small>assets/logo/*.svg · 9 lockup &amp; colour files</small></div>" + icon("download", 18) + "</a><a href='assets/pair-blocks.png' download><span>" + icon("smiley", 22) + "</span><div><b>Mascot duo (hero crop)</b><small>pair-blocks.png · 1536 × 1024 px, transparent</small></div>" + icon("download", 18) + "</a><a href='assets/relio-mood-3d-icons.png' download><span>" + icon("palette", 22) + "</span><div><b>Mood reference</b><small>relio-mood-3d-icons.png · 1536 × 1024 px</small></div>" + icon("download", 18) + "</a></div>" +
            "<div class='links-row'><a href='https://styles.refero.design/style/9946887b-ffa9-4276-af81-ae6352795afb' target='_blank' rel='noreferrer'>Refero reference ↗</a><a href='https://phosphoricons.com/' target='_blank' rel='noreferrer'>Phosphor Icons ↗</a><a href='https://fonts.google.com/specimen/Bai+Jamjuree' target='_blank' rel='noreferrer'>Bai Jamjuree ↗</a></div>" +
          "</section>"
  );
}
