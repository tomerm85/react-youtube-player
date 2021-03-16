import { VideosActionTypes } from './videos.types';

export const addVideoToList = (video) => ({
  type: VideosActionTypes.ADD_VIDEO_TO_LIST,
  payload: video
});

export const removeVideoFromList = (video) => ({
  type: VideosActionTypes.REMOVE_VIDEO_FROM_LIST,
  payload: video
});

export const removeFirstVideoFromList = () => ({
  type: VideosActionTypes.REMOVE_FIRST_VIDEO_FROM_LIST
});

export const replaceVideosList = (videos) => ({
  type: VideosActionTypes.REPLACE_VIDEOS_LIST,
  payload: videos
});