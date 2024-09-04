let destinationPicture = document.querySelector("#destination-picture");
let titleDestination = document.querySelector("#title-destination");
let descriptionDestination = document.querySelector("#description-destination");
let agvDistanceValue = document.querySelector("#agv-distance-value");
let distTimeValue = document.querySelector("#dist-time-value");

let moon = document.querySelector("#moon");
let mars = document.querySelector("#mars");
let europa = document.querySelector("#europa");
let titan = document.querySelector("#titan");

let cosmos = [];
cosmos.push(moon, mars, europa, titan);

let dados = [];

async function fetchData() {
  const response = await fetch("data.json");
  dados = await response.json();

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
