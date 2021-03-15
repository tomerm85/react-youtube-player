import React, {useState} from 'react';

import './playlist-add-video.scss';

const PlaylistAddVideo = () => {
  const [videoId, setVideoId] = useState('');

  const addVideoToPlaylist = () => {
    
  };

  const handleVideoIdChange = (e) => {
    setVideoId(e.target.value);
  };

  return (
    <div className="playlist-add-video">
      <input type="text" value={videoId} onChange={(e) => handleVideoIdChange(e)} placeholder="Enter Video Id" />
      <button type="button" onClick={addVideoToPlaylist}>Add</button>
    </div>
  );
};

export default PlaylistAddVideo;
