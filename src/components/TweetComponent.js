import React from 'react';

class TweetComponent extends React.Component {
	render () {
		let data = this.props.data;

		return (
			<div className="tweet-container">
				<img src={data.user.profile_image_url} alt="" className="user-picture"/>
				<div className="tweet-content">
					<p>{data.text}</p>
				</div>
				<div className="tweet-info">
					<span className="tweet-author">
						{data.user.name}
					</span>
					<span className="tweet-username">
						{data.user.screen_name}
					</span>
					<span className="tweet-datetime">
						{new Date(data.created_at).toLocaleString()}
					</span>
				</div>
			</div>
		);
	}
}

export default TweetComponent;