import React from 'react';

import './playlist-item.scss';

const PlaylistItem = ({ video }) => {
  const {videoUrl, videoId} = video;
  return (
    <div className="playlist-item">
      <span className="video-description">{videoUrl}</span>
      <span className="video-duration">3:53</span>
    </div>
  );
};

export default PlaylistItem;
