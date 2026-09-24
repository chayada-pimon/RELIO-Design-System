import { state } from "./state.js";
import { icon } from "./sections/shared.js";
import { renderOverview } from "./sections/overview.js";
import { renderConcept } from "./sections/concept.js";
import { renderLogo } from "./sections/logo.js";
import { renderColors } from "./sections/colors.js";
import { renderType } from "./sections/type.js";
import { renderMood } from "./sections/mood.js";
import { renderIcons } from "./sections/icons.js";
import { renderMascot } from "./sections/mascot.js";
import { renderVoice } from "./sections/voice.js";
import { renderComponents } from "./sections/components.js";
import { renderUsage } from "./sections/usage.js";
import { renderResources } from "./sections/resources.js";

(function () {
  "use strict";

  var $ = function (q, root) { return (root || document).querySelector(q); };
  var $$ = function (q, root) { return Array.from((root || document).querySelectorAll(q)); };
  var lastDrawerTrigger = null;
  var revealedSections = new Set();

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

   var nav = [
      ["overview", "ภาพรวม", "Overview", "squares-four"], ["concept", "แนวคิดแบรนด์", "Brand concept", "compass"],
      ["logo", "โลโก้", "Logo", "seal-check"],
     ["components", "ตัวอย่างระบบ", "System examples", "sliders-horizontal"],
     ["usage", "ตัวอย่างการใช้งานจริง", "Applied example", "layout"],
     ["colors", "สี", "Colours", "palette"],
     ["type", "ตัวอักษรและรูปทรง", "Type & shape", "text-t"], ["mood", "ภาพและกราฟิก", "Imagery", "image"],
     ["icons", "ไอคอน", "Icons", "shapes"], ["mascot", "มาสคอต", "Mascot", "smiley"],
     ["voice", "น้ำเสียง", "Voice", "chat-circle"],
     ["resources", "ไฟล์และเวอร์ชัน", "Resources", "folder"]
   ];

  function header() {
    $("#header").innerHTML =
      "<a class='brand' href='#overview' aria-label='RELIO home'><img src='" + encodeURI("assets/logo/Relio Logo - Horizontal - Full Color.svg") + "' alt='RELIO'></a>" +
      "<div class='header-actions'><div class='seg' aria-label='Language'><button data-lang='th'>ไทย</button><button data-lang='en'>EN</button></div>" +
      "<button class='icon-btn' id='theme' aria-label='Toggle theme'>" + icon(state.theme === "dark" ? "sun" : "moon") + "</button>" +
      "<a class='btn primary small' id='details' href='RELIO-DESIGN.md' download>" + icon("download", 17) + "<span>" + (state.lang === "th" ? "ดาวน์โหลด .md" : "Download .md") + "</span></a>" +
      "<button class='icon-btn mobile-only' id='menu' aria-label='Menu'>" + icon("menu") + "</button></div>";
  }
  function sidebar() {
    $("#sidebar").innerHTML = "<div class='nav-label'>" + (state.lang === "th" ? "สารบัญ" : "Contents") + "</div><nav>" +
       nav.map(function (n, i) { return "<a href='#" + n[0] + "' class='" + (i === 0 ? "active" : "") + "'><span aria-hidden='true'><i class='ph ph-" + n[3] + "'></i></span><span class='nav-item-label'>" + (state.lang === "th" ? n[1] : n[2]) + "</span></a>"; }).join("") +
      "</nav>";
  }

  function main() {
    $("#content").innerHTML =
       renderOverview() +
       renderConcept() +
       renderLogo() +
       renderComponents() +
      renderUsage() +
      renderColors() +
      renderType() +
      renderMood() +
      renderIcons() +
      renderMascot() +
      renderVoice() +
      renderResources();
  }

  function mdText() {
    return "# RELIO — Design System\n\n> Customers + orders, connected.\n\n## Principles\n- Clear Connections\n- Friendly Guidance\n- Confident Actions\n\n## Brand colours\n- CRM Aqua: #28C6CD\n- OMS Blue: #1463D6\n- Action Orange: #FC9433\n\n## Typography\nBai Jamjuree 400 / 500 / 600\n\n## Spacing\n4px base unit; section gap 96px; card padding 24px.\n\n## Radius\nInput 8px; Button 10px; Card 16px; Panel 24px.\n\n## Accessibility\nDo not rely on colour alone. Keep focus visible and targets at least 44px.";
  }
  function cssText() {
    return ":root {\n  --brand-crm: #28C6CD;\n  --brand-oms: #1463D6;\n  --accent-warm: #FC9433;\n  --bg: #F7F8FA;\n  --surface: #FFFFFF;\n  --text: #202124;\n  --muted: #525866;\n  --line: #D8DDE5;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-4: 16px;\n  --space-6: 24px;\n  --radius-sm: 8px;\n  --radius-md: 10px;\n  --radius-lg: 16px;\n}\n\n[data-theme='dark'] {\n  --bg: #18191B;\n  --surface: #222427;\n  --text: #F5F6F7;\n  --muted: #C2C7D0;\n  --line: #41464F;\n}";
  }
  function tailwindText() {
    return "@theme {\n  --color-crm: #28C6CD;\n  --color-crm-deep: #087F8C;\n  --color-oms: #1463D6;\n  --color-action-warm: #FC9433;\n  --font-sans: 'Bai Jamjuree', 'Noto Sans Thai', Arial, sans-serif;\n  --radius-control: 8px;\n  --radius-button: 10px;\n  --radius-card: 16px;\n  --radius-panel: 24px;\n}";
  }
  function tokenText() {
    return JSON.stringify({ color: { brand: { crm: { value: "#28C6CD" }, oms: { value: "#1463D6" } }, action: { value: "#FC9433" } }, spacing: { xs: { value: "8px" }, md: { value: "16px" }, lg: { value: "24px" } }, radius: { card: { value: "16px" }, panel: { value: "24px" } } }, null, 2);
  }
  function drawer() {
    var tabs = [["md", "DESIGN.md"], ["tailwind", "Tailwind v4"], ["css", "CSS Variables"], ["tokens", "Design Tokens"]];
    var value = state.tab === "md" ? mdText() : state.tab === "tailwind" ? tailwindText() : state.tab === "css" ? cssText() : tokenText();
    $("#drawerRoot").innerHTML = "<div class='drawer-scrim " + (state.drawer ? "open" : "") + "' data-close-drawer></div><aside class='drawer " + (state.drawer ? "open" : "") + "' aria-hidden='" + (!state.drawer) + "' aria-label='" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "'><div class='drawer-top'><div><span class='eyebrow'>RELIO / STYLE</span><h2>" + (state.lang === "th" ? "คู่มือแบบละเอียด" : "Detailed guide") + "</h2></div><button class='icon-btn drawer-close' data-close-drawer aria-label='Close'>" + icon("close") + "</button></div><div class='drawer-tabs' role='tablist'>" + tabs.map(function (x) { return "<button role='tab' aria-selected='" + (state.tab === x[0]) + "' class='" + (state.tab === x[0] ? "active" : "") + "' data-drawer-tab='" + x[0] + "'>" + x[1] + "</button>"; }).join("") + "</div><div class='drawer-tools'><div class='seg'><button data-density='compact' class='" + (!state.extended ? "active" : "") + "'>Compact</button><button data-density='extended' class='" + (state.extended ? "active" : "") + "'>Extended</button></div><div><button class='btn secondary small' data-copy-drawer>" + icon("copy", 16) + "Copy</button><button class='btn secondary small' data-download-drawer>" + icon("download", 16) + "." + (state.tab === "tokens" ? "json" : state.tab === "tailwind" ? "css" : state.tab) + "</button></div></div><pre class='" + (state.extended ? "extended" : "") + "'><code></code></pre></aside>";
    $(".drawer code").textContent = value;
    if (state.tab === "md") {
      fetch("RELIO-DESIGN.md").then(function (response) { return response.text(); }).then(function (fullText) {
        if (state.tab === "md" && $(".drawer code")) $(".drawer code").textContent = fullText;
      }).catch(function () {});
    }
  }

  function bindTablist(id, onChange, dataAttr) {
    var list = document.getElementById(id);
    if (!list) return;
    var buttons = $$("button", list);
    function activate(value) {
      onChange(value);
      main(); bind(); observe();
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
  function bind() {
    $$("[data-lang]").forEach(function (b) { b.classList.toggle("active", b.dataset.lang === state.lang); b.onclick = function () { state.lang = b.dataset.lang; state.typeLang = b.dataset.lang; localStorage.setItem("relio-lang", state.lang); localStorage.setItem("relio-type-lang", state.typeLang); render(); }; });
    $$("[data-type-lang]").forEach(function (b) { b.onclick = function () { state.typeLang = b.dataset.typeLang; localStorage.setItem("relio-type-lang", state.typeLang); main(); bind(); observe(); }; });
    $$("[data-type-demo]").forEach(function (b) { b.onclick = function () { state.typeDemo = b.dataset.typeDemo; main(); bind(); observe(); }; });
    $("#theme").onclick = function () { state.theme = state.theme === "light" ? "dark" : "light"; localStorage.setItem("relio-theme", state.theme); render(); };
    $$("[data-open-drawer]").forEach(function (b) { b.onclick = openDrawer; });
    $("#menu").onclick = function () { $("#sidebar").classList.toggle("open"); };
    $$("[data-copy],[data-icon]").forEach(function (b) { b.onclick = function () { copyText(b.dataset.copy || b.dataset.icon); b.classList.remove("copied"); void b.offsetWidth; b.classList.add("copied"); }; });
    $$("[data-logo-variant]").forEach(function (b) { b.onclick = function () { state.logoVariant = Number(b.dataset.logoVariant); main(); bind(); observe(); }; });
    $$("[id^='specimen-states-']").forEach(function (list) {
      var specimenId = list.id.slice("specimen-states-".length);
      bindTablist(list.id, function (value) { state.demoBySpecimen[specimenId] = value; }, "state");
    });
    $$("#sidebar a").forEach(function (a) { a.onclick = function () { $("#sidebar").classList.remove("open"); }; });
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
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "relio-" + state.tab + "." + ext; a.click(); URL.revokeObjectURL(a.href);
    };
  }
  function observe() {
    var obs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { $$("#sidebar a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); }); } }); }, { rootMargin: "-20% 0px -70%" });
    $$("main > section").forEach(function (s) { obs.observe(s); });
    var hero = $("#overview");
    var heroObserver = new IntersectionObserver(function (entries) {
      document.body.classList.toggle("hero-active", entries[0].isIntersecting);
    }, { threshold: 0.1 });
    heroObserver.observe(hero);

    var revealSections = $$("main > section.section:not(.hero)");
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in-view"); revealedSections.add(e.target.id); revealObserver.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
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
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && state.drawer) closeDrawer(); });
  render();
})();
