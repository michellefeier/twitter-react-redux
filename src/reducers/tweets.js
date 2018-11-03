const initialState = {
	screenName: 'eusouelliot',
	tweets: []
};

const tweetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SCREEN_NAME': {
			return Object.assign({}, state, {screenName: action.data});
		}
		case 'OVERWRITE_TWEETS' : {
			return Object.assign({}, state, {tweets: action.data});
		}
		case 'ADD_TWEET': {
			return { ...state, tweets: [action.data, ...state.tweets] };
		}
		default:
			return state;
	}
};

export default tweetsReducer;