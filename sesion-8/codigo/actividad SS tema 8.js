const API_ENDPOINT = http://api.ipapi.com/134.201.250.155
    ? access_key = YOUR_ACCESS_KEY
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

const requestURL = 'URLAPI/nombredelarchivo.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const ubicacion = request.response;
  
}

