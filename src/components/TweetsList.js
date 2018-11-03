import React from 'react';
import TweetComponent from './TweetComponent';
import { connect } from "react-redux";

const mapStateToProps = state => {
	return { data: state.tweets };
};

const mapDispatchToProps = dispatch => {
	return {
		onNewTweet: data => dispatch({ type: 'ADD_TWEET', data}),
		onSearch: data => dispatch({ type: 'OVERWRITE_TWEETS', data }),
		onUpdateScreenName: data => dispatch({ type: 'UPDATE_SCREEN_NAME', data })
	};
};

  
class ConnectedTweetsList extends React.Component {
	constructor (props) {
		super(props);

		this.search();

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.search = this.search.bind(this);
	}

	handleChange(e) {
		this.props.onUpdateScreenName(e.target.value);
	}

	handleKeyPress(e) {
		if (e.key === 'Enter')
			this.search();
	}

	search() {
		fetch(
			'/api/search?screen_name=' + this.props.data.screenName,
			{ headers: { 'Content-Type': 'application/json' }
		})
		.then(response => response.json())
		.then(result => {
			if (result.success)
				this.props.onSearch(result.data);
			else {
				this.props.onSearch([]);
				console.error(result.message);
			}
		})
		.catch(error => console.error(error));
	}

	render() {
		return (
			<div className="container">
				<div className="searchbox">
					<input type="text" id="username" value={this.props.data.screenName} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
					<button onClick={this.search} id="btn-search"> Pesquisar </button>
		 		</div>
				<div className="tweets-list">
					{ (this.props.data && this.props.data.tweets && this.props.data.tweets.length > 0) && (
						this.props.data.tweets.map((tweet, index) => 
							<TweetComponent key={index} data={tweet} />
						)
					)}

					{ (!this.props.data.tweets || this.props.data.tweets.length) == 0 && (
						<p id="no-tweets-message"> usuário não encontrado, privado ou sem tweets :( </p>
					)}
				</div>
			</div>
		)
	}
}

const TweetsList = connect(mapStateToProps, mapDispatchToProps) (ConnectedTweetsList);

export default TweetsList;