// ====== Helpers ======
function copyToClipboard(text){
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  // fallback
  return new Promise((resolve, reject) => {
    try{
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      ta.remove();
      resolve();
    }catch(e){
      reject(e);
    }
  });
}

function flashHint(hintEl){
  if(!hintEl) return;
  hintEl.hidden = false;
  hintEl.style.opacity = "1";
  clearTimeout(hintEl._t);
  hintEl._t = setTimeout(() => {
    hintEl.style.opacity = "0";
    hintEl._t2 = setTimeout(() => (hintEl.hidden = true), 180);
  }, 900);
}

// ====== CA Copy ======
const CA = "ABCD...1234"; // ★ここを本物のCAに置き換え

// 表示も同期（2箇所）
const caText = document.getElementById("caText");
const caText2 = document.getElementById("caText2");
if (caText) caText.textContent = CA;
if (caText2) caText2.textContent = CA;

const copyBtn = document.getElementById("copyBtn");
const copyBtn2 = document.getElementById("copyBtn2");
const copyHint = document.getElementById("copyHint");
const copyHint2 = document.getElementById("copyHint2");

async function handleCopy(hintEl){
  try{
    await copyToClipboard(CA);
    flashHint(hintEl);
  }catch(e){
    alert("コピーに失敗しました。手動でコピーしてください。");
  }
}

copyBtn?.addEventListener("click", () => handleCopy(copyHint));
copyBtn2?.addEventListener("click", () => handleCopy(copyHint2));

// ====== Community Toggle ======
const toggle = document.getElementById("communityToggle");
const panel = document.getElementById("communityPanel");

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  panel.hidden = isOpen;

  // 矢印の向き
  const chev = toggle.querySelector(".chev");
  if (chev) chev.textContent = isOpen ? "▾" : "▴";
});

// 初期：閉じる（保険）
if (panel) panel.hidden = true;
if (toggle) toggle.setAttribute("aria-expanded", "false");
