const express = require('express')
let bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json()) // Middleware para recibir datos enviados como JSON
const PUERTO = 3000

app.get("/", (request, response) => {
    // response.send("Hola desde Express.")
    response.json({ mensaje: "Hola desde express", fecha: "3 de noviembre de 2025" })
})

app.post("/post", (req, res) => {
    if (req.body) {
        res.json({ mensaje: 'Cuerpo del request', body: req.body })
    } else {
        res.json({ mensaje: 'Body vacío' })
    }
})

app.listen(PUERTO, () => {
    console.log(`Estamos escuchando en http://localhost:${PUERTO}`)
})
