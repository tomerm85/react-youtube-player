  import React from 'react';

  import PlaylistItem from '../playlist-item/playlist-item';
  import './playlist-view.scss';

  const PlaylistView = ({ videos = []}) => {
    return (
      <div className="playlist-view">
        {videos.map((video, index) => {
          return (
            <PlaylistItem key={index} video={video}/>
          );
        })}
      </div>
    );
  };

  export default PlaylistView;
