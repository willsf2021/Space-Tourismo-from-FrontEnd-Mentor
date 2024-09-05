let titleDestination = document.querySelector("#title-destination");
let destinationPicture = document.querySelector("#destination-picture");
let descriptionDestination = document.querySelector("#description-destination");
let agvDistanceValue = document.querySelector("#agv-distance-value");
let distTimeValue = document.querySelector("#dist-time-value");

let moon = document.querySelector("#moon");
let mars = document.querySelector("#mars");
let europa = document.querySelector("#europa");
let titan = document.querySelector("#titan");

let cosmos = [];
cosmos.push(moon, mars, europa, titan);

let roleCrew = document.querySelector("#commander-p");
let nameCrew = document.querySelector("#commander-name");
let descriptionCrew = document.querySelector("#commander-description");
let backgroundCrew = document.querySelector("#back-ground");

let douglas = document.querySelector("#douglas-hurley");
let mark = document.querySelector("#mark-shuttleworth");
let victor = document.querySelector("#victor-glover");
let anousheh = document.querySelector("#anousheh-ansari");

let commandersElements = [];
commandersElements.push(douglas, mark, victor, anousheh);
console.log(commandersElements);

const mainElement = document.querySelector("#main");
const destinationElement = document.querySelector("#destination");
const crewElement = document.querySelector("#crew-element");
const technologyElement = document.querySelector("#technology-element");

let elements = [];
elements.push(mainElement, destinationElement, crewElement, technologyElement);

let homeButtons = document.querySelectorAll(".home-buttons");
let destinationButtons = document.querySelectorAll(".destination-buttons");
let crewButtons = document.querySelectorAll(".crew-buttons");
let technologyButtons = document.querySelectorAll(".technology-buttons");

let navButtons = [];
navButtons.push(
  homeButtons,
  destinationButtons,
  crewButtons,
  technologyButtons
);

console.log(navButtons);
navButtons[0][0].style.borderColor = "white";
navButtons[0][1].style.borderColor = "white";

let homeWallpaper = "url(./assets/home/background-home-desktop.jpg)";
let destinationWallpaper =
  "url(./assets/destination/background-destination-desktop.jpg)";
let crewWallpaper = "url(./assets/crew/background-crew-desktop.jpg)";
let technologyWallpaper =
  "url(./assets/technology/background-technology-desktop.jpg)";

let wallpapers = [];
wallpapers.push(
  homeWallpaper,
  destinationWallpaper,
  crewWallpaper,
  technologyWallpaper
);
function updateWallpapers() {
  const width = window.innerWidth;

  if (width >= 1440) {
    wallpapers[0] = "url(./assets/home/background-home-desktop.jpg)";
    wallpapers[1] =
      "url(./assets/destination/background-destination-desktop.jpg)";
    wallpapers[2] = "url(./assets/crew/background-crew-desktop.jpg)";
    wallpapers[3] =
      "url(./assets/technology/background-technology-desktop.jpg)";
  } else if (width >= 768) {
    wallpapers[0] = "url(./assets/home/background-home-tablet.jpg)";
    wallpapers[1] =
      "url(./assets/destination/background-destination-tablet.jpg)";
    wallpapers[2] = "url(./assets/crew/background-crew-tablet.jpg)";
    wallpapers[3] = "url(./assets/technology/background-technology-tablet.jpg)";
  } else {
    wallpapers[0] = "url(./assets/home/background-home-mobile.jpg)";
    wallpapers[1] =
      "url(./assets/destination/background-destination-mobile.jpg)";
    wallpapers[2] = "url(./assets/crew/background-crew-mobile.jpg)";
    wallpapers[3] = "url(./assets/technology/background-technology-mobile.jpg)";
  }
}

// Atualiza o wallpaper ao carregar a página
updateWallpapers();

// Atualiza o wallpaper quando a janela for redimensionada
window.addEventListener("resize", updateWallpapers);

navButtons.forEach((buttonGroup, groupIndex) => {
  buttonGroup.forEach((btn, i) => {
    btn.addEventListener("click", (event) => {
      navButtons.forEach((buGroup) => {
        buGroup.forEach((buBtn) => {
          if (buBtn) {
            buBtn.style.borderColor = "";
          }
        });
      });

      if (buttonGroup[i]) {
        buttonGroup[i].style.borderColor = "white";
      }
      if (body) {
        body.style.backgroundImage = wallpapers[groupIndex];
      }
      if (elements) {
        elements.forEach((el) => {
          el.style.display = "none";
        });
        if (elements[groupIndex]) {
          elements[groupIndex].style.display = "flex";
        }
      }
      if (groupIndex === 1) {
        let destinationButtons = document.querySelectorAll(
          ".destination-buttons"
        );
        destinationButtons.forEach((destBtn) => {
          destBtn.style.borderColor = "white";
        });
      }
    });
  });
});

let dados = [];

async function fetchData() {
  const response = await fetch("data.json");
  dados = await response.json();

  let crews = dados.crew;

  let roleCrew1 = crews[0].role;
  let nameCrew1 = crews[0].name;

  roleCrew.textContent = roleCrew1.toUpperCase();
  nameCrew.textContent = nameCrew1.toUpperCase();
  descriptionCrew.textContent = crews[0].bio;
  backgroundCrew.style.background = `linear-gradient(
      to bottom,
      rgba(217, 217, 217, 0) 0%,
      rgba(217, 217, 217, 0) 90%,
      rgb(11, 14, 23) 100%
    ),
    url(${crews[0].images.png})`;
  backgroundCrew.style.backgroundRepeat = "no-repeat";

  /* LOOP FOR CHANGE DATAS DINAMICALLY */

  for (let i = 0; i < commandersElements.length; i++) {
    commandersElements[i].addEventListener("click", () => {
      let roleCrew1 = crews[i].role;
      let nameCrew1 = crews[i].name;

      roleCrew.textContent = roleCrew1.toUpperCase();
      nameCrew.textContent = nameCrew1.toUpperCase();
      descriptionCrew.textContent = crews[i].bio;
      backgroundCrew.style.background = `linear-gradient(
        to bottom,
        rgba(217, 217, 217, 0) 0%,
        rgba(217, 217, 217, 0) 90%,
        rgb(11, 14, 23) 100%
      ),
      url(${crews[i].images.png})`;
      backgroundCrew.style.backgroundRepeat = "no-repeat";
    });
  }

  /* DATAS FROM JSON */
  let destinations = dados.destinations;

  /* FIRST LOADING DATAS (MOON) FROM DESTINATION */

  let nome1 = destinations[0].name;
  let distance1 = destinations[0].distance;
  let travel1 = destinations[0].travel;

  destinationPicture.src = destinations[0].images.png;
  titleDestination.textContent = nome1.toUpperCase();
  descriptionDestination.textContent = destinations[0].description;
  agvDistanceValue.textContent = distance1.toUpperCase();
  distTimeValue.textContent = travel1.toUpperCase();
  cosmos[0].style.borderBottom = "3px solid white";

  /* LOOP FOR CHANGE DATAS DINAMICALLY */

  for (let i = 0; i < cosmos.length; i++) {
    cosmos[i].addEventListener("click", () => {
      cosmos.forEach((item) => {
        item.style.borderColor = "";
      });

      cosmos[i].style.borderBottom = "3px solid white";
      let nome = destinations[i].name;
      let distance = destinations[i].distance;
      let travel = destinations[i].travel;

      destinationPicture.src = destinations[i].images.png;
      titleDestination.textContent = nome.toUpperCase();
      descriptionDestination.textContent = destinations[i].description;
      agvDistanceValue.textContent = distance.toUpperCase();
      distTimeValue.textContent = travel.toUpperCase();
    });
  }
}

/* CALL FOR FETCH */

fetchData();
