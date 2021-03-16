import React from 'react';

import PlaylistAddVideo from '../playlist-add-video/playlist-add-video';
import PlaylistView from '../playlist-view/playlist-view';
import './playlist-manager.scss';

const PlaylistManager = ({ videosList = [] }) => {
  return (
    <div className="playlist-manager">
      <PlaylistAddVideo />
      <PlaylistView videosList={videosList} />
    </div>
  );
};

export default PlaylistManager;
