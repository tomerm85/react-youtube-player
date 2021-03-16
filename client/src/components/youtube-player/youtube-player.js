import React, {useState, useEffect, useContext} from 'react';
import {useDispatch} from "react-redux";
import YouTube from 'react-youtube';

import {SocketContext} from '../../context/socket-io';
import { removeFirstVideoFromList } from '../../redux/videos/videos.actions';

const YoutubePlayer = ({ videosList }) => {
  const socket = useContext(SocketContext);
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
    if (videosList.length > 0) {
      setVideoToPlay(videosList[0]);
    }
  }, []);

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
    //remove video from server with socket
    socket.emit('removeVideo');
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
