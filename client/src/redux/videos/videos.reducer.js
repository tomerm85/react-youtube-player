import { VideosActionTypes } from './videos.types';
import { removeFirstItem, removeItemFromList } from './videos.utils';

const INITIAL_STATE = {
  videosList: []
};

const videosReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action;
  let newState;
  switch (type) {
    case VideosActionTypes.ADD_VIDEO_TO_LIST:
      newState = {...state, videosList: [...state.videosList, payload]};
      break;
    case VideosActionTypes.REPLACE_VIDEOS_LIST:
      newState =  {...state, videosList: payload};
      break;
    case VideosActionTypes.REMOVE_FIRST_VIDEO_FROM_LIST:
      newState =  {...state, videosList: removeFirstItem(state.videosList)};
      break;
    case VideosActionTypes.REMOVE_VIDEO_FROM_LIST:
      newState =  {...state, videosList: removeItemFromList(state.videosList, payload)};
      break;
    default:
      newState = state;
  }
  return newState;
};

export default videosReducer;