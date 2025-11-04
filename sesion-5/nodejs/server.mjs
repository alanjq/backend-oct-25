import { createServer } from 'node:http';

const PUERTO = 3000;
const HOST = '127.0.0.1';
const MENSAJE = () => console.log(`Servidor de NODE.js escuchando el puerto ${PUERTO} de ${HOST}. Abrir http://${HOST}:${PUERTO}`)

const PAGINA_ERROR = () => {
    return '<html><head><meta charset="UTF-8"></head><body><h1>Página no encontrada. <br/><small>Eso dijo NodeJs.</small></h1></body></html>'
}

const API_RESPONSE = (mensaje) => {
    return JSON.stringify({ mensaje: mensaje })
}

// Crear el servidor y enviar la respuesta Hola
const server = createServer((request, response) => {
    response.writeHead(200, {
        // 'Content-Type': 'text/plain'
        'Content-Type': 'application/json'
        // 'Content-Type': 'text/html'
    })

    response.end(API_RESPONSE('Hola desde JSON con NodeJS'))
});

// invocar al servidor para que escuche
server.listen(PUERTO, HOST, MENSAJE)
