function copyCA() {
  const ca = document.getElementById("caText").innerText;
  navigator.clipboard.writeText(ca).then(() => {
    const btn = document.querySelector(".copyBtn");
    const old = btn.innerText;
    btn.innerText = "COPIED";
    setTimeout(() => (btn.innerText = old), 900);
  });
}

function toggleCommunity(){
  const wrap = document.getElementById("communityWrap");
  const toggle = document.getElementById("communityToggle");
  wrap.classList.toggle("hidden");
  const expanded = !wrap.classList.contains("hidden");
  toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
}
