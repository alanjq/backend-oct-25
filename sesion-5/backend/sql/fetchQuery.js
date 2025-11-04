const mysql2 = require('mysql2/promise')
require('dotenv').config()

async function fetchQuery(res, query) {
    try {
        const connection = await mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        })

        const [rows] = await connection.execute(query)
        // console.log('Resultado de la consulta:', rows)
        await connection.end()
        res.send(rows)
    } catch (elerror) {
        console.error('Error en la consulta', elerror)
    }
}

// exportamos a la función para poderla usar más adelante
module.exports = fetchQuery
