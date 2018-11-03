const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const path = require('path');
const io = socketio.listen(server);

app.use(bodyParser.json());

require('./routes/tweets.js')(app, io);

server.listen(3001, () => {
    console.log('server is up');
});