import React from 'react';

import './playlist-item.scss';

const PlaylistItem = ({ video }) => {
  const {videoUrl} = video;
  return (
    <div className="playlist-item">
      <span className="video-description">{videoUrl}</span>
      <span className="video-duration"></span>
    </div>
  );
};

export default PlaylistItem;
