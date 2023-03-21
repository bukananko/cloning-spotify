const hamburger = document.getElementById("hamburger");
const xmark = document.getElementById("xmark");
const hamburgerMenu = document.getElementById("hamburgermenu");

hamburger.addEventListener("click", function () {
  hamburgerMenu.classList.remove("hidden");
  hamburger.classList.add("hidden");
  xmark.classList.remove("hidden");
});

xmark.addEventListener("click", function () {
  hamburgerMenu.classList.add("hidden");
  xmark.classList.add("hidden");
  hamburger.classList.remove("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != hamburgerMenu) {
    hamburgerMenu.classList.remove("hidden");
    hamburgerMenu.classList.add("hidden");
    xmark.classList.add("hidden");
    hamburger.classList.remove("hidden");
  }
});
