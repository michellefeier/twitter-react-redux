import React from 'react';
import TweetComponent from './TweetComponent';

const TWEETS = [
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	},
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	},
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	},
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	},
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	},
	{
		authorName: 'Fulaninho',
		authorUsername: 'fulaninho',
		authorPicture: 'https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg',
		date: new Date(),
		text: 'A luta para ser ouvida não é algo do nosso tempo.\nSpotify apresenta Escuta as Minas'
	}
];

class TweetsList extends React.Component {
	constructor (props) {
		super(props);
		this.state = { username: 'SpotifyBR', tweets: [] };
	}

	handleChange(event) {
		this.setState({ username: event.target.value });
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
		  	this.search();
		}
	}

	componentDidMount() {
		this.setState({tweets: TWEETS});
	}

	search() {

	}

	render() {
		let tweetsCards = this.state.tweets.map((tweet, index) => 
			{return (<TweetComponent key={index} data={tweet} />);}
		)

		return (
			<div className="container">
				<div className="searchbox">
					<input type="text" id="username" value={this.state.username} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
				</div>
				<div className="tweets-list">
					{ this.state.tweets.length > 0 && tweetsCards }
				</div>
			</div>
		)
	}
}
export default TweetsList;