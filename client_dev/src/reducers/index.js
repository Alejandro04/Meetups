import { combineReducers } from 'redux';
import { showMeetups } from './meetups'

const rootReducer = combineReducers({
  meetups: showMeetups
});

export default rootReducer;