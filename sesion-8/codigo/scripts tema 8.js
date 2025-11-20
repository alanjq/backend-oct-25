const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");

const nombre_de_la_costante = document.querySelector(".ajax-section .cities");

const apiKey = "Llave de API Obtenida";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Escribe una ciudad válida 😩";
    });

  msg.textContent = "";
  form.reset();
  input.focus();


const API_ENDPOINT = "https://freegeoip.app/json/";
fetch(API_ENDPOINT)
.then(response => response.json())
.then(datosUbicacion => {
  // Imprimir los datos de la ubicación
  console.log(datosUbicacion);
  // Recuerda que podemos acceder a latitude y longitude, entre otros
  const latitud = datosUbicacion.latitude,
    longitud = datosUbicacion.longitude;
    
  console.log(`Tus coordenadas son ${latitud},${longitud}`);
});

{
    "ip": "12.34.56.78",
    "country_code": "MX",
    "country_name": "México",
    "region_code": "ASD",
    "region_name": "NombreRegión",
    "city": "Ciudad",
    "zip_code": "Código postal",
    "time_zone": "America/Mexico_City",
    "latitude": 0.0,
    "longitude": 0.0,
    "metro_code": 0
}

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/nombredelarchivo.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const ubicacion = request.response;
  
}
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=${apiKey}&units=metric`;
