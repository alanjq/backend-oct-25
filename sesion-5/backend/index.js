const express = require('express')
const bodyParser = require('body-parser')
const fetchQuery = require('./sql/fetchQuery')
const cors = require('cors')



//#region SERVIDOR API
// Indicamos el puerto del servidor
const PUERTO = process.env.PORT

// Inicializar la API con express
const app = express()

app.use(cors())

// Especificamos las URL de la API
app.get("/", (req, res) => {
    let query = "SELECT * FROM world.city order by name asc limit 30"
    fetchQuery(res, query)
    // res.send({ mensaje: 'API funcionando', query })
})


// Invocamos al servidor
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`)
})

//#endregion