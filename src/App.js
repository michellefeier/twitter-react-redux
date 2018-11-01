import React, { Component } from 'react';
import './public/css/app.css';
import TweetsList from './components/TweetsList';

class App extends Component {
	render() {
		return (
			<TweetsList/>
		);
	}
}

export default App;
