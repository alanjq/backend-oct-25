// XMLHttpRequest - eventos
// AXIOS
// FETCH

const APIKEY = "21b772f9974095874fd6ed3eb48e3610"
const PAIS = 'MX'
const CP = "77500"
// Petición
const urlClima = (latitud, longitud) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${APIKEY}`

// Obtener Latitud y longitud
const getGeolocation = `http://api.openweathermap.org/geo/1.0/zip?zip=${CP},${PAIS}&appid=${APIKEY}`

// Obtener lat y lon
function obtenerGeo() {
    fetch(getGeolocation)
        .then(response => response.json())
        .then((data) => {
            console.log('respuesta de geo', data);
            let geolocation = data

            // Obtener el clima en la ubicación indicada
            fetch(urlClima(data.lat, data.lon))
                .then(response => response.json())
                .then(climaData => {
                    console.log('climaData', climaData)
                    actualizarFicha(climaData)
                })
        })
}

function actualizarFicha(clima) {
    document.getElementById('actual').innerText = clima.weather[0].description
    document.getElementById('temperatura').innerText = `${clima.main.temp}º`
    document.getElementById('sensacion').innerText = `${clima.main.feels_like}º`
    document.getElementById('viento').innerText = `${clima.wind.speed} km/h`
}

function conXHR(url, callback, tipo = 'get') {
    var peticion = new XMLHttpRequest()
    peticion.addEventListener("load", function () {
        console.log(':XHR Response:', JSON.parse(this.responseText))
        if (callback) { callback(JSON.parse(this.responseText)) }
    })

    peticion.open(tipo, url)
    peticion.send()
}


// Petición usando XHR
conXHR(urlClima(20.9908, -86.9392), actualizarFicha)
