import {useState, useEffect, useRef} from 'react';
import io from "socket.io-client";

import PlaylistManager from './components/playlist-manager/playlist-manager';
import YoutubePlayer from './components/youtube-player/youtube-player';
import './App.scss';

function App() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("playListInit", (data) => {
      console.log({data}); // todo remove
      setYoutubeVideos(data);
    })
  }, []);

  return (
    <div className="App">
      <PlaylistManager />
      <YoutubePlayer />
    </div>
  );
}

export default App;
