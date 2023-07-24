// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor (Instalamos CORS para que el servidor acepte peticiones)
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

// Creamos un endpoint con método GET para listar usuarios
server.get('/users', (req, res) => {
    const response = {
        users: [{ name: 'Sofía' }, { name: 'María' }],
    };
    res.json(response);
});

// Creamos un endpoint con método POST
server.post('/', function (req, res) {
    res.send('Got a POST request');
});

// Creamos un endpoint con método DELETE
server.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

