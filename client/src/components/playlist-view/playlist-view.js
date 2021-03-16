  import React from 'react';

  import PlaylistItem from '../playlist-item/playlist-item';
  import './playlist-view.scss';

  const PlaylistView = ({ videosList = []}) => {
    return (
      <div className="playlist-view">
        {videosList.map((videoItem, index) => {
          const {videoId} = videoItem;
          const key = `${videoId}_${index}`;
          return (
            <PlaylistItem key={key} video={videoItem}/>
          );
        })}
      </div>
    );
  };

  export default PlaylistView;
