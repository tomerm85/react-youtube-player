import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import YouTube from 'react-youtube';

import { removeFirstVideoFromList } from '../../redux/videos/videos.actions';

const YoutubePlayer = ({ videosList }) => {
  const [videoToPlay, setVideoToPlay] = useState({});
  const dispatch = useDispatch();
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (videosList.length === 1) {
      setVideoToPlay(videosList[0]);
    }
  }, [videosList]);

  const onVideoReady = (e) => {
    e.target.playVideo();
  }

  const onVideoEnd = () => {
    if (videosList.length > 1) {
      setVideoToPlay(videosList[1]);
    }
    setVideoToPlay({});
    dispatch(removeFirstVideoFromList());
  }

  return (
    <YouTube 
      videoId={videoToPlay.videoId}
      opts={opts} 
      onReady={(e) => onVideoReady(e)}
      onEnd={onVideoEnd}
    />
  )
};

export default YoutubePlayer;
