import { createStore } from "redux";
import { combineReducers } from 'redux';
import tweetReducer from "../reducers/tweets";

const rootReducer = combineReducers({ tweets: tweetReducer })
const store = createStore(rootReducer);

export default store;