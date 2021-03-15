import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }

  return (
    <YouTube 
      videoId="2g811Eo7K8U"
      opts={opts} 
      onReady={(e) => _onReady(e)}
    />
  )
};

export default YoutubePlayer;
