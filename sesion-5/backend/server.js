const express = require('express')
const bodyParser = require('body-parser')
// const mysql = require('mysql')
const mysql2 = require('mysql2/promise')

//#region Variables de entorno
require('dotenv').config()

console.log('Variables de entorno', process.env.PORT)
//#endregion


//#region MySQL
/*
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

connection.connect((sifalla)=>{
    if(sifalla){
        console.error('Error al conectar a la base de datos:', sifalla)
        return;
    }
    console.log(`Conexión exitosa a MySQL: ${process.env.DB_NAME}`);
})

connection.end()*/
//#endregion


//#region Usando MySQL2
async function fetchQuery(res) {
    try {
        const connection = await mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        })

        const [rows] = await connection.execute('SELECT * FROM world.city order by name asc limit 30')
        console.log('Resultado de la consulta:', rows)
        await connection.end()
        res.send(rows)
    } catch (elerror) {
        console.error('Error en la consulta', elerror)
    }
}

// fetchQuery()

//#endregion


//#region SERVIDOR API
// Indicamos el puerto del servidor
const PUERTO = process.env.PORT

// Inicializar la API con express
const app = express()

// Especificamos las URL de la API
app.get("/", (req, res) => {
    fetchQuery(res)
    // res.send({ mensaje: 'API funcionando', query })
})



// Invocamos al servidor
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`)
})

//#endregion