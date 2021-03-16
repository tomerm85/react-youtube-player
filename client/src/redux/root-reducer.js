import { combineReducers } from 'redux';

import videosReducer from './videos/videos.reducer';

export default combineReducers({
  videos: videosReducer
});
