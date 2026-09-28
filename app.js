import { state } from "./state.js";
import { icon, ccLogo } from "./sections/shared.js";
import { cssVariables, tailwindTheme, tokensJson } from "./sections/tokens-v3.js";
import { renderOverview, animateOverview } from "./sections/overview.js";
import { renderConcept } from "./sections/concept.js";
import { renderColors } from "./sections/colors.js";
import { renderType } from "./sections/type.js";
import { renderMood } from "./sections/mood.js";
import { renderIcons } from "./sections/icons.js";
import { renderMascot } from "./sections/mascot.js";
import { renderVoice } from "./sections/voice.js";
import { renderComponents, renderSpecimen } from "./sections/components.js";
import { renderUsage } from "./sections/usage.js";
import { renderResources } from "./sections/resources.js";

(function () {
  "use strict";

  var $ = function (q, root) { return (root || document).querySelector(q); };
  var $$ = function (q, root) { return Array.from((root || document).querySelectorAll(q)); };
  var lastDrawerTrigger = null;
  var revealedSections = new Set();
  var GUIDE_FILE = "CRM-CENTER-DESIGN.md";

  var copyText = function (value) {
    navigator.clipboard.writeText(value).then(function () { toast(state.lang === "th" ? "คัดลอกแล้ว" : "Copied"); });
  };
  var toast = function (message) {
    var node = $("#toast");
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(window.relioToast);
    window.relioToast = setTimeout(function () { node.classList.remove("show"); }, 1600);
  };

  // Sidebar sections, in page order: [heading TH, heading EN, rows[id, TH, EN, phosphor icon, crm context]].
  var nav = [
    ["ภาพรวม", "Overview", [
      ["overview", "หน้าแรก", "Home", "squares-four"],
      ["concept", "ในไกด์นี้", "In this guide", "compass"]
    ]],
    ["พื้นฐาน", "Foundations", [
      ["colors", "สี", "Colour", "palette"],
      ["type", "ตัวอักษรและรูปทรง", "Type & shape", "text-t"],
      ["icons", "ไอคอน", "Icons", "shapes"]
    ]],
    ["คอมโพเนนต์", "Components", [
      ["components", "คอมโพเนนต์", "Components", "sliders-horizontal"],
      ["usage", "ตัวอย่างหน้าจอจริง", "Applied example", "layout"]
    ]],
    ["แบรนด์", "Brand", [
      ["mood", "ภาพและกราฟิก", "Imagery", "image"],
      ["mascot", "มาสคอต", "Mascot", "smiley"],
      ["voice", "น้ำเสียง", "Voice", "chat-circle"]
    ]],
    ["ไฟล์", "Files", [
      ["resources", "ไฟล์และเวอร์ชัน", "Resources", "folder"]
    ]]
  ];

  function header() {
    var th = state.lang === "th";
    $("#header").innerHTML =
      "<button class='icon-btn menu-btn' id='menu' aria-label='" + (th ? "เปิดเมนู" : "Open menu") + "' aria-expanded='false' aria-controls='sidebar'>" + icon("menu") + "</button>" +
      "<div class='header-actions'><div class='seg' aria-label='Language'><button data-lang='th'>ไทย</button><button data-lang='en'>EN</button></div>" +
      "<button class='icon-btn' id='theme' aria-label='" + (state.theme === "dark" ? (th ? "เปลี่ยนเป็นธีมสว่าง" : "Switch to light theme") : (th ? "เปลี่ยนเป็นธีมมืด" : "Switch to dark theme")) + "'>" + icon(state.theme === "dark" ? "sun" : "moon") + "</button>" +
      "<a class='btn primary' id='details' href='" + GUIDE_FILE + "' download>" + icon("download", 20) + "<span>" + (th ? "ดาวน์โหลด .md" : "Download .md") + "</span></a></div>";
  }
  function sidebar() {
    var th = state.lang === "th";
    $("#sidebar").innerHTML =
      "<div class='sidebar-logo'><a href='#overview' aria-label='CRM Center'>" + ccLogo(true) + "</a><button class='icon-btn on-blue menu-close' data-close-menu aria-label='" + (th ? "ปิดเมนู" : "Close menu") + "'>" + icon("close", 18) + "</button></div>" +
      "<nav>" + nav.map(function (sec) {
        return "<div class='nav-sec'><span class='nav-label'>" + (th ? sec[0] : sec[1]) + "</span>" +
          sec[2].map(function (n) {
            return "<a href='#" + n[0] + "' class='" + (n[0] === "overview" ? "active" : "") + "'><i class='" + (n[0] === "overview" ? "ph-bold" : "ph") + " ph-" + n[3] + "' aria-hidden='true'></i><span class='nav-item-label'>" + (th ? n[1] : n[2]) + "</span></a>";
          }).join("") + "</div>";
      }).join("") + "</nav>" +
      "<div class='sidebar-foot'><span class='status-dot'></span>" + (th ? "ซิงก์กับ CRM Center · 28 ก.ย. 2569" : "Synced with CRM Center · 28 Sep 2026") + "</div>";
  }

  function main() {
    $("#content").innerHTML =
      renderOverview() +
      renderConcept() +
      renderColors() +
      renderType() +
      renderIcons() +
      renderComponents() +
      renderUsage() +
      renderMood() +
      renderMascot() +
      renderVoice() +
      renderResources();
    animateOverview();
  }

  function mdText() {
    return "# CRM Center Design System\n\n> ระบบเดียว คุมได้ทั้งร้าน (CRM + OMS)\n\n## Frame\nBlue radial sidebar backdrop (#2f6ee0 → #1d59cc → #1546ad) with a 56px white grid; content floats on #f7f8fa.\n\n## Typography\nNoto Sans Thai 400 / 500 / 600.\n\n## Radius\nInput 8px; Button 10px; Card 16px; Modal 24px; Pill 999px.\n\n## Accessibility\nStatus is never colour alone. Focus 2px ring, 2px offset. Targets 44px.";
  }
  function drawer() {
    var tabs = [["md", "DESIGN.md"], ["tailwind", "Tailwind v4"], ["css", "CSS Variables"], ["tokens", "Design Tokens"]];
    var value = state.tab === "md" ? mdText() : state.tab === "tailwind" ? tailwindTheme() : state.tab === "css" ? cssVariables() : tokensJson();
    $("#drawerRoot").innerHTML = "<div class='drawer-scrim " + (state.drawer ? "open" : "") + "' data-close-drawer></div><aside class='drawer " + (state.drawer ? "open" : "") + "' aria-hidden='" + (!state.drawer) + "' aria-label='" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "'><div class='drawer-top'><div><span class='eyebrow'>CRM CENTER</span><h2>" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "</h2></div><button class='icon-btn drawer-close' data-close-drawer aria-label='" + (state.lang === "th" ? "ปิด" : "Close") + "'>" + icon("close") + "</button></div><div class='drawer-tabs' role='tablist'>" + tabs.map(function (x) { return "<button role='tab' aria-selected='" + (state.tab === x[0]) + "' class='" + (state.tab === x[0] ? "active" : "") + "' data-drawer-tab='" + x[0] + "'>" + x[1] + "</button>"; }).join("") + "</div><div class='drawer-tools'><div class='seg'><button data-density='compact' class='" + (!state.extended ? "active" : "") + "'>Compact</button><button data-density='extended' class='" + (state.extended ? "active" : "") + "'>Extended</button></div><div><button class='btn secondary small' data-copy-drawer>" + icon("copy", 16) + "Copy</button><button class='btn secondary small' data-download-drawer>" + icon("download", 16) + "." + (state.tab === "tokens" ? "json" : state.tab === "tailwind" ? "css" : state.tab) + "</button></div></div><pre class='" + (state.extended ? "extended" : "") + "'><code></code></pre></aside>";
    $(".drawer code").textContent = value;
    if (state.tab === "md") {
      fetch(GUIDE_FILE).then(function (response) { return response.text(); }).then(function (fullText) {
        if (state.tab === "md" && $(".drawer code")) $(".drawer code").textContent = fullText;
      }).catch(function () {});
    }
  }

  // rerender: optional; redraws only the affected part instead of the whole page (which replays every animation)
  function bindTablist(id, onChange, dataAttr, rerender) {
    var list = document.getElementById(id);
    if (!list) return;
    var buttons = $$("button", list);
    function activate(value) {
      onChange(value);
      if (rerender) { rerender(list); bind(); } else { main(); bind(); observe(); }
      var freshList = document.getElementById(id);
      var target = freshList && freshList.querySelector("[data-" + dataAttr + "='" + value + "']");
      if (target) target.focus();
    }
    buttons.forEach(function (b, i) {
      b.onclick = function () { activate(b.getAttribute("data-" + dataAttr)); };
      b.onkeydown = function (e) {
        var idx;
        if (e.key === "ArrowRight") idx = (i + 1) % buttons.length;
        else if (e.key === "ArrowLeft") idx = (i - 1 + buttons.length) % buttons.length;
        else if (e.key === "Home") idx = 0;
        else if (e.key === "End") idx = buttons.length - 1;
        else return;
        e.preventDefault();
        activate(buttons[idx].getAttribute("data-" + dataAttr));
      };
    });
  }
  function setMenu(open) {
    $("#sidebar").classList.toggle("open", open);
    $(".menu-scrim").classList.toggle("open", open);
    $("#menu").setAttribute("aria-expanded", String(open));
  }
  function bind() {
    $$("[data-lang]").forEach(function (b) { b.classList.toggle("active", b.dataset.lang === state.lang); b.onclick = function () { state.lang = b.dataset.lang; state.typeLang = b.dataset.lang; localStorage.setItem("relio-lang", state.lang); localStorage.setItem("relio-type-lang", state.typeLang); render(); }; });
    $$("[data-type-lang]").forEach(function (b) { b.onclick = function () { state.typeLang = b.dataset.typeLang; localStorage.setItem("relio-type-lang", state.typeLang); main(); bind(); observe(); }; });
    $("#theme").onclick = function () { state.theme = state.theme === "light" ? "dark" : "light"; localStorage.setItem("relio-theme", state.theme); render(); };
    $$("[data-open-drawer]").forEach(function (b) { b.onclick = openDrawer; });
    $("#menu").onclick = function () { setMenu(!$("#sidebar").classList.contains("open")); };
    $$("[data-close-menu]").forEach(function (b) { b.onclick = function () { setMenu(false); }; });
    $$("[data-copy],[data-icon]").forEach(function (b) { b.onclick = function () { copyText(b.dataset.copy || b.dataset.icon); b.classList.remove("copied"); void b.offsetWidth; b.classList.add("copied"); }; });
    $$("[id^='specimen-states-']").forEach(function (list) {
      var specimenId = list.id.slice("specimen-states-".length);
      bindTablist(list.id, function (value) { state.demoBySpecimen[specimenId] = value; }, "state", function (oldList) {
        oldList.closest(".specimen-card").outerHTML = renderSpecimen(specimenId);
      });
    });
    $$("#sidebar nav a").forEach(function (a) { a.onclick = function () { setMenu(false); }; });
    bindDrawer();
  }
  function openDrawer() { lastDrawerTrigger = document.activeElement; state.drawer = true; drawer(); bindDrawer(); document.body.classList.add("drawer-open"); setTimeout(function () { var close = $(".drawer-close"); if (close) close.focus(); }, 0); }
  function closeDrawer() { state.drawer = false; drawer(); bindDrawer(); document.body.classList.remove("drawer-open"); if (lastDrawerTrigger && lastDrawerTrigger.focus) lastDrawerTrigger.focus(); }
  function bindDrawer() {
    $$("[data-close-drawer]").forEach(function (b) { b.onclick = closeDrawer; });
    $$("[data-drawer-tab]").forEach(function (b) { b.onclick = function () { state.tab = b.dataset.drawerTab; drawer(); bindDrawer(); }; });
    $$("[data-density]").forEach(function (b) { b.onclick = function () { state.extended = b.dataset.density === "extended"; drawer(); bindDrawer(); }; });
    var cp = $("[data-copy-drawer]"); if (cp) cp.onclick = function () { copyText($(".drawer code").textContent); };
    var dl = $("[data-download-drawer]"); if (dl) dl.onclick = function () {
      var ext = state.tab === "tokens" ? "json" : state.tab === "tailwind" ? "css" : state.tab;
      var blob = new Blob([$(".drawer code").textContent], { type: "text/plain" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "crm-center-" + state.tab + "." + ext; a.click(); URL.revokeObjectURL(a.href);
    };
  }
  var heroObserver;
  function observe() {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$("#sidebar nav a").forEach(function (a) {
          var on = a.getAttribute("href") === "#" + e.target.id;
          a.classList.toggle("active", on);
          var i = a.querySelector("i");
          if (i) { i.classList.toggle("ph", !on); i.classList.toggle("ph-bold", on); }
          if (on) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-20% 0px -70%" });
    $$("main > section").forEach(function (s) { obs.observe(s); });

    // Sidebar stays collapsed while the hero holds the top of the viewport; expands once the next section scrolls up.
    if (heroObserver) heroObserver.disconnect();
    heroObserver = new IntersectionObserver(function (entries) {
      document.body.classList.toggle("hero-active", entries[0].isIntersecting);
    }, { rootMargin: "0px 0px -80% 0px" });
    heroObserver.observe($("#overview"));

    var revealSections = $$("main > section.section:not(.hero)");
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); revealedSections.add(e.target.id); revealObserver.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    revealSections.forEach(function (s) {
      $$("[class*='-card']", s).forEach(function (el, i) { el.style.setProperty("--reveal-i", Math.min(i, 6)); });
      if (revealedSections.has(s.id)) { s.classList.add("in-view"); } else { revealObserver.observe(s); }
    });
  }
  function render() {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.theme = state.theme;
    header(); sidebar(); main(); drawer(); bind(); observe();
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (state.drawer) closeDrawer();
    else if ($("#sidebar").classList.contains("open")) { setMenu(false); $("#menu").focus(); }
  });
  render();
})();
