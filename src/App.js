import React, { Component } from 'react';
import './public/css/app.css';
import TweetsList from './components/TweetsList';

class App extends Component {
	render() {
		return (
			<TweetsList/>
			// <div className="container">
			// 	<div className="searchbox">
			// 		<input type="text" id="username" />
			// 	</div>
			// 	<div className="tweets-list">
			// 		<div className="tweet-container">
			// 			<img src="https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg" alt="" className="user-picture"/>
			// 			<div className="tweet-content">
			// 				<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
			// 			</div>
			// 			<div className="tweet-info">
			// 				<span className="tweet-author">Nome do tchó</span>
			// 				<span className="tweet-username">fulaninho</span>
			// 				<span className="tweet-datetime">20/20/2020</span>
			// 			</div>
			// 		</div>
			// 		<div className="tweet-container">
			// 			<img src="https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg" alt="" className="user-picture"/>
			// 			<div className="tweet-content">
			// 				<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
			// 			</div>
			// 			<div className="tweet-info">
			// 				<span className="tweet-author">Nome do tchó</span>
			// 				<span className="tweet-username">fulaninho</span>
			// 				<span className="tweet-datetime">20/20/2020</span>
			// 			</div>
			// 		</div>
			// 		<div className="tweet-container">
			// 			<img src="https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg" alt="" className="user-picture"/>
			// 			<div className="tweet-content">
			// 				<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
			// 			</div>
			// 			<div className="tweet-info">
			// 				<span className="tweet-author">Nome do tchó</span>
			// 				<span className="tweet-username">fulaninho</span>
			// 				<span className="tweet-datetime">20/20/2020</span>
			// 			</div>
			// 		</div>
			// 		<div className="tweet-container">
			// 			<img src="https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg" alt="" className="user-picture"/>
			// 			<div className="tweet-content">
			// 				<p>oh mminha foto nova eeee</p>
			// 				<img src="https://afala.com.br/wp-content/uploads/grumpy-cat-e1506453417266.jpg" alt="" className="tweet-media"/>
			// 			</div>
			// 			<div className="tweet-info">
			// 				<span className="tweet-author">Nome do tchó</span>
			// 				<span className="tweet-username">fulaninho</span>
			// 				<span className="tweet-datetime">20/20/2020</span>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default App;
