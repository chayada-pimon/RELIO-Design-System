import { state } from "../state.js";
import { icon } from "./shared.js";

export function renderOverview() {
  var th = state.lang === "th";
  return (
    "<section id='overview' class='hero section'>" +
      "<div class='hero-card'>" +
        "<img class='hero-float' src='assets/portal/login-mascots.webp' alt='" + (th ? "มาสคอต CRM และ OMS ยืนบนแล็ปท็อป" : "CRM and OMS mascots standing on a laptop") + "' draggable='false'>" +
        "<div class='hero-copy'>" +
          "<span class='eyebrow'>RELIO DESIGN SYSTEM · V3</span>" +
          "<h1>CRM <em>Center</em></h1>" +
          "<p class='hero-kicker'>ระบบเดียว คุมได้ทั้งร้าน</p>" +
          "<p class='hero-text'>" + (th ? "พอร์ทัลแอดมินของ RELIO ที่ร้านค้าใช้ดูแลลูกค้า คำสั่งซื้อ แต้มสะสม และการเชื่อมต่อช่องทางขาย ในที่เดียว เวอร์ชันนี้ใช้สีกลางเดิมกับเนื้อหา เพิ่มโครงสีน้ำเงิน ฟอนต์ Noto Sans Thai และแผงเนื้อหาลอย" : "RELIO's admin portal where a shop's team manages customers, orders, loyalty points and sales-channel integrations. v3 keeps the neutral content tokens and adds the blue chrome, Noto Sans Thai and a floating content panel.") + "</p>" +
          "<div class='hero-actions'><button class='btn primary' data-open-drawer>" + icon("book", 20) + (th ? "เปิดคู่มือแบบละเอียด" : "Open detailed guide") + "</button><a class='btn secondary' href='#concept'>" + (th ? "สำรวจระบบ" : "Explore system") + icon("arrow", 18) + "</a></div>" +
        "</div>" +
      "</div>" +
    "</section>"
  );
}

// Hero entrance + mascot float, driven by the global `Motion` (node_modules/motion/dist/motion.js).
// Initial hidden states are set here, never in CSS, so the hero stays visible if Motion fails to load.
var entrancePlayed = false;
var heroLoops = [];
var heroRun = 0;

export function animateOverview() {
  heroLoops.forEach(function (c) { c.stop(); });
  heroLoops = [];
  var hero = document.getElementById("overview");
  if (!hero || !window.Motion) return;
  var run = ++heroRun;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (entrancePlayed) { startMascotLoops(hero, reduce); return; }
  entrancePlayed = true;

  // Page blocks rise 10px over duration-rise (480ms), 60ms apart.
  var copy = Array.from(hero.querySelectorAll(".hero-copy > *"));
  var copyAnims = copy.map(function (el, i) {
    return fadeIn(el, 10, reduce, { duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 });
  });

  Promise.all(copyAnims).then(function () {
    if (run === heroRun) startMascotLoops(hero, reduce);
  });
}

function fadeIn(el, dy, reduce, transition) {
  var target = Number(getComputedStyle(el).opacity);
  var keyframes = { opacity: [0, target] };
  el.style.opacity = "0";
  if (!reduce) { keyframes.y = [dy, 0]; el.style.transform = "translateY(" + dy + "px)"; }
  // Hand the final state back to CSS a frame later, after Motion has committed its last value.
  return window.Motion.animate(el, keyframes, transition).finished.then(function () {
    return new Promise(function (resolve) {
      requestAnimationFrame(function () { el.style.opacity = ""; el.style.transform = ""; resolve(); });
    });
  });
}

// portal-float: mascots float 10px over 6s.
function startMascotLoops(hero, reduce) {
  if (reduce) return;
  var big = hero.querySelector(".hero-float");
  if (!big) return;
  big.style.animation = "none";
  heroLoops.push(window.Motion.animate(big, { y: [0, -10, 0] }, { duration: 6, ease: "easeInOut", repeat: Infinity }));
}
