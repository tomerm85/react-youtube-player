import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import io from "socket.io-client";

import PlaylistManager from './components/playlist-manager/playlist-manager';
import YoutubePlayer from './components/youtube-player/youtube-player';
import {replaceVideosList} from './redux/videos/videos.actions';
import './App.scss';

function App() {
  const videosList = useSelector(state => state.videos.videosList);
  const dispatch = useDispatch();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("playListInit", (data) => {
      console.log({data}); // todo remove
      dispatch(replaceVideosList(data));
    })
  }, []);

  useEffect(() => {
    //socketRef.current.emit("updateVideoList", videosList);
    console.log('vl: ', videosList);
  }, [videosList]);

  return (
    <div className="App">
      <PlaylistManager videosList={videosList} />
      <YoutubePlayer videosList={videosList} />
    </div>
  );
}

export default App;
