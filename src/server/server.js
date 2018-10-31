const express = require('express');
const http = require('http');
//const socketio = require('socket.io');
//const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());

server.listen(3001, () => {
    console.log('server is up');
});