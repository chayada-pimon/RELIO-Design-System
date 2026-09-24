import { state } from "../state.js";

export function icon(name, size) {
  var names = {
    menu: "list", close: "x", sun: "sun", moon: "moon", book: "book-open",
    download: "download-simple", copy: "copy", arrow: "arrow-right", check: "check",
    warning: "warning", spark: "sparkle", link: "link", heart: "heart", user: "user",
    folder: "folder", chat: "chat-circle", "chat-circle": "chat-circle", search: "magnifying-glass", compass: "compass",
    lightning: "lightning", smiley: "smiley", "seal-check": "seal-check", palette: "palette", "text-t": "text-t",
    "sliders-horizontal": "sliders-horizontal", shapes: "shapes",
    code: "code", "brackets-curly": "brackets-curly", "file-text": "file-text",
    home: "house", users: "users", bell: "bell", layout: "layout", receipt: "receipt"
  };
  return "<i class='ph ph-" + (names[name] || names.spark) + " i' style='font-size:" + (size || 20) + "px' aria-hidden='true'></i>";
}

export function sectionHead(id, no, th, en, textTh, textEn) {
  var text = state.lang === "th" ? textTh : textEn;
  return "<div class='section-head'><div><span class='eyebrow'>" + en.toUpperCase() + "</span><h2 id='" + id + "-title'>" + (state.lang === "th" ? th : en) + "</h2></div>" + (text ? "<p>" + text + "</p>" : "") + "</div>";
}

export function download(file, label, ext) {
  return "<a class='btn secondary small' href='assets/" + file + "' download>" + icon("download", 17) + "<span>" + label + " <b>." + ext + "</b></span></a>";
}
