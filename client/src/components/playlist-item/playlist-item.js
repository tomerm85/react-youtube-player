import React, {useContext} from 'react';
import {useDispatch} from "react-redux";

import {SocketContext} from '../../context/socket-io';
import {removeVideoFromList} from '../../redux/videos/videos.actions';
import './playlist-item.scss';

const PlaylistItem = ({ video }) => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  const removeItemFromList = (videoToRemove) => {
    dispatch(removeVideoFromList(videoToRemove));
    //remvove video from server
    socket.emit('removeVideoAtIndex', videoToRemove);
  };

  const {videoUrl} = video;
  return (
    <div className="playlist-item">
      <span className="video-description">{videoUrl}</span>
      <span className="video-duration"></span>
      <span className="remove-item" onClick={() => removeItemFromList(video)}>X</span>
    </div>
  );
};

export default PlaylistItem;
