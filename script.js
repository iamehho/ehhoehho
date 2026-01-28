
function copyCA() {
  const ca = document.getElementById("ca-text").innerText;
  navigator.clipboard.writeText(ca);
  alert("CA copied!");
}

function toggleCommunity() {
  document.getElementById("community").classList.toggle("hidden");
}
