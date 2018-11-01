const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
const Twitter = require('twitter');

const twitterClient = new Twitter({
	consumer_key: 'PzjKO6lIVwyQArEMGKAh0dNgI',
    consumer_secret: '9VMp8inLeyt7q6ZYTRKz9XgQTSfogMzNekJvGxxqGhjpUnSnP7',
    access_token_key: '87337909-IthiE8nwOz8CS1VFnpAwGdvrdiQiK6SopH89u7Hy0',
	access_token_secret: 'jk85KGz7lISY96nZIfR5hYCYwtMXFSE9za2uQTwxoSMO9',
});

app.use(bodyParser.json());

server.listen(3001, () => {
    console.log('server is up');
});



twitterClient.stream('statuses/filter', {
	//follow: [365658152]
	track: 'javascript'
}, function(stream) {
	console.log('Opening stream ...')
	stream.on('data', function(tweet) {
		console.log('Tweet received')
		io.emit('tweet', tweet);
	});

	stream.on('error', function(err) {
		console.error(err);
	});
});