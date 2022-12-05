const housesJSON = [
  {
    name: "Country House",
    description: "The best place to take a break.",
    src: "./assets/img/Diseño-casa-en-ladera.jpg",
    rooms: 2,
    m2: 170,
  },
  {
    name: "Beach House",
    description: "Wake up listen to the ocean.",
    src: "./assets/img/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m2: 130,
  },
  {
    name: "Downtown house",
    description: "Eveything you need is steps away.",
    src: "./assets/img/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m2: 80,
  },
  {
    name: "trailer house",
    description: "Live where you want.",
    src: "./assets/img/furgoneta.webp",
    rooms: 1,
    m2: 6,
  },
  {
    name: "Apartament",
    description: "everything look better on the high.",
    src: "./assets/img/depto-1024x546.jpg",
    rooms: 3,
    m2: 200,
  },
  {
    name: "Mansion",
    description: "The best house money can buy.",
    src: "./assets/img/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m2: 500,
  },
];

const form = document.querySelector("#form");
const roomsQuantity = document.querySelector("#roomsQuantity");
const minimumInput = document.querySelector("#minimumInput");
const maximumInput = document.querySelector("#maximumInput");
const divProperties = document.querySelector(".properties");
const totalSpan = document.querySelector("#totalSpan");

const renderProperties = (array) => {
  if (array.length === 0) {
    divProperties.innerHTML = `<h2>No hay Propiedades que mostrar. Ampliar el filtro o haga otra búsqueda</h2>`;
    totalSpan.innerHTML = `${array.length}`;
    return;
  }

  let propertiesHtml = "";

  for (let properties of array) {
    propertiesHtml += `
      <div class="propertiesDOM">
        <div class="img" style="background-image: url(${properties.src})"></div>
        <section>
          <h3>${properties.name}</h3>
          <div>
            <p>Rooms: ${properties.rooms}</p>
            <p>Meters: ${properties.m2}</p>
          </div>
          <p">${properties.description}</p>
          <button class="button">Ver más</button>
        </section>
      </div>`;
  }

  divProperties.innerHTML = propertiesHtml;
  totalSpan.innerHTML = `${array.length}`;
};

renderProperties(housesJSON);

form.addEventListener("reset", () => renderProperties(housesJSON));

const filterApartments = () => {
  let rooms = Number(roomsQuantity.value);
  let min = Number(minimumInput.value);
  let max = Number(maximumInput.value);

  if (rooms <= 0) {
    alert("Debes ingresar una cantidad de habitaciones mayor a 0");
    return;
  }

  if (min <= 0) {
    alert("Debes ingresar una cantidad minima de metros/2");
    return;
  }

  if (max <= 0) {
    alert("Debes ingresar una cantidad maxima de metros/2");
    return;
  }

  const filteredApartments = housesJSON.filter(
    (house) => house.rooms >= rooms && house.m2 >= min && house.m2 <= max
  );

  return renderProperties(filteredApartments);
};
