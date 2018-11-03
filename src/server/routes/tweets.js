const Twitter = require('twitter');

module.exports = (app, io) => {
	const twitterClient = new Twitter({
		consumer_key: 'TBLoGg5WR4Zd41Plm5msQQv8Y',
		consumer_secret: 'Z07qp2H8aFtJcKEzz1T1hNPvXlI0I2JhNTqSQJoHaMyAlRMpi6',
		bearer_token: 'AAAAAAAAAAAAAAAAAAAAAKMF8wAAAAAA9CyLh%2F10rh4uO51vmp9047wFH%2Bs%3DMyhM5NValCWAug8rARoRj1h2mWZuPvLdMHtjajjIYEs91elh9X'
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