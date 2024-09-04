const body = document.querySelector(".body");
const mainElement = document.querySelector("#main");
const destinationElement = document.querySelector("#destination");
const menuShow = document.querySelector("#hamburguer-menu-show");
const menuClose = document.querySelector("#menu-close");
const mobileMenu = document.querySelector("#mobile-menu");
let destinationExploreButton = document.querySelectorAll(
  ".destination-explore-button"
);

destinationExploreButton.forEach((button) => {
  button.addEventListener("click", () => {
    main.style.display = "none";
    destinationElement.style.display = "flex";
    body.classList.add("background-destination");
    button.style.borderColor = "white";
  });
});

menuShow.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  menuShow.style.display = "none";
});

menuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  menuShow.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.style.display = "none";
    menuShow.style.display = "none"; 
  } else {
   
    menuShow.style.display = "block"; 
  }
});
