import React from 'react';

class TweetComponent extends React.Component {
	render () {
		let data = this.props.data;

		return (
			<div className="tweet-container">
				<img src={data.authorPicture} alt="" className="user-picture"/>
				<div className="tweet-content">
					<p>{data.text}</p>
				</div>
				<div className="tweet-info">
					<span className="tweet-author">
						{data.authorName}
					</span>
					<span className="tweet-username">
						{data.authorUsername}
					</span>
					<span className="tweet-datetime">
						{data.date.toLocaleString()}
					</span>
				</div>
			</div>
		);
	}
}

export default TweetComponent;