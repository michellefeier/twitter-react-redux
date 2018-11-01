import React from 'react';
import TweetComponent from './TweetComponent';
import io from 'socket.io-client';

import { connect } from "react-redux";

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

const mapStateToProps = state => {
	return { data: state.tweets };
};

const mapDispatchToProps = dispatch => {
	return {
		onNewTweet: data => dispatch({ type: 'ADD', data})
	};
};

  
class ConnectedTweetsList extends React.Component {
	constructor (props) {
		super(props);
		let socket = io.connect('ws://localhost:3001');
		this.state = {socket};

		this.fetchRecents();
	}

	fetchRecents() {
		this.state.socket.on('tweet', (data) => {
			console.log('Received new tweet data:');
			this.props.onNewTweet(data);
		});
	}

	componentDidMount() {
		this.setState({tweets: TWEETS});
	}

	render() {
		return (
			<div className="container">
				<div className="tweets-list">
					{ this.props.data && this.props.data.tweets && this.props.data.tweets.map((tweet, index) => 
						<TweetComponent key={index} data={tweet} />
					)}
				</div>
			</div>
		)
	}
}

const TweetsList = connect(mapStateToProps, mapDispatchToProps) (ConnectedTweetsList);

export default TweetsList;