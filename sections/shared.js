import { state } from "../state.js";

// Phosphor icon. `weight` is "regular" (default), "bold" or "fill"; unknown names pass straight through.
export function icon(name, size, weight) {
  var names = {
    menu: "list", close: "x", sun: "sun", moon: "moon", book: "book-open",
    download: "download-simple", copy: "copy", arrow: "arrow-right", check: "check",
    warning: "warning-circle", spark: "sparkle", link: "link", heart: "heart", user: "user",
    folder: "folder", chat: "chat-circle", search: "magnifying-glass", home: "house",
    users: "users-three", dashboard: "squares-four", gear: "gear-six", caret: "caret-down",
    success: "check-circle", error: "x-circle", info: "info"
  };
  var cls = weight === "bold" ? "ph-bold" : weight === "fill" ? "ph-fill" : "ph";
  return "<i class='" + cls + " ph-" + (names[name] || name) + " i' style='font-size:" + (size || 20) + "px' aria-hidden='true'></i>";
}

export function sectionHead(id, no, th, en, textTh, textEn) {
  var text = state.lang === "th" ? textTh : textEn;
  return "<div class='section-head'><div><span class='eyebrow'>" + en.toUpperCase() + "</span><h2 id='" + id + "-title'>" + (state.lang === "th" ? th : en) + "</h2></div>" + (text ? "<p>" + text + "</p>" : "") + "</div>";
}

export function download(file, label, ext) {
  return "<a class='btn secondary small' href='assets/" + file + "' download>" + icon("download", 17) + "<span>" + label + " <b>." + ext + "</b></span></a>";
}

// The CRM Center logo is drawn in code: a 32px CC tile + "CRM Center" wordmark.
export function ccLogo(onBlue) {
  return "<span class='cc-logo" + (onBlue ? " on-blue" : "") + "'><span class='cc-logo-tile'>CC</span>CRM Center</span>";
}
