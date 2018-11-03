const Twitter = require('twitter');

module.exports = (app, io) => {
	const twitterClient = new Twitter({
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
		access_token_secret: '',
	});

	app.get('/api/search', (req, res) => {
		let screen_name = req.query.screen_name;

		twitterClient.get('statuses/user_timeline', {screen_name: screen_name}, 
			function(error, tweets, response) {
				if (error) {
					//not found
					if (error[0] && error[0].code === 34)
						return res.json({success: true});

					return res.json({success: false, message: error});
				}

				return res.json({success: true, data: tweets});
			})
	})
}