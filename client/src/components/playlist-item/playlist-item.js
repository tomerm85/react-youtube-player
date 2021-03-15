import React from 'react';

import './playlist-item.scss';

const PlaylistItem = ({ video }) => {
  return (
    <div className="playlist-item">
      <span className="video-description"></span>
      <span className="video-duration"></span>
    </div>
  );
};

export default PlaylistItem;
