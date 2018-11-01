const initialState = {
	tweets: []
};

const tweetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD': {
			return { ...state, tweets: [action.data, ...state.tweets] };
		}
		default:
			return state;
	}
};

export default tweetsReducer;