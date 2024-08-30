const menuShow = document.querySelector("#hamburguer-menu-show");
const menuClose = document.querySelector("#menu-close");

const mobileMenu = document.querySelector("#mobile-menu");

menuShow.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  menuShow.style.display = "none";
});

menuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  menuShow.style.display = "block";
});
