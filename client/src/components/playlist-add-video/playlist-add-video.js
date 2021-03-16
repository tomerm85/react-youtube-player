import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import io from "socket.io-client";

import {addVideoToList} from '../../redux/videos/videos.actions';
import './playlist-add-video.scss';

const PlaylistAddVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const dispatch = useDispatch();

  const getVideoIdFromUrl = () => {
    let videoId = videoUrl.split('v=')[1];
    if (videoId) {
      let ampersandPosition = videoId.indexOf('&');
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    }
    return videoId;
  };

  const addVideoToPlaylist = () => {
    const videoId = getVideoIdFromUrl();
    if (videoId) {
      const video = {
        videoUrl,
        videoId
      };
      dispatch(addVideoToList(video));
      
    }
    setVideoUrl('');
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      addVideoToPlaylist();          
    }
  };

  const handleVideoIdChange = (e) => {
    setVideoUrl(e.target.value);
  };

  return (
    <div className="playlist-add-video">
      <input className="video-textbox" type="text" value={videoUrl} onChange={(e) => handleVideoIdChange(e)} onKeyDown={(e) => handleOnKeyDown(e)} placeholder="Enter Video Id" />
      <button className="add-video-button" type="button" onClick={addVideoToPlaylist}>Add</button>
    </div>
  );
};

export default PlaylistAddVideo;
