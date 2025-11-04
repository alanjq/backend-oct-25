import { createServer } from 'node:http';

const PUERTO = 3000;
const HOST = '127.0.0.1';
const MENSAJE = () => console.log(`Servidor de NODE.js escuchando en http://${HOST}:${PUERTO}`)

const API_RESPONSE = (mensaje, extra) => {
    return JSON.stringify({ mensaje: mensaje, ...extra })
}

// Crear el servidor y enviar la respuesta Hola
const server = createServer((request, response) => {
    console.log('Petición:\n', request.body)
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })

    response.end(request.statusMessage)
});

// invocar al servidor para que escuche
server.listen(PUERTO, HOST, MENSAJE)
