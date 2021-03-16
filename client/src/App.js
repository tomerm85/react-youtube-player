import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {SocketContext, socket} from './context/socket-io';

import PlaylistManager from './components/playlist-manager/playlist-manager';
import YoutubePlayer from './components/youtube-player/youtube-player';
import {replaceVideosList, addVideoToList, removeVideoFromList} from './redux/videos/videos.actions';
import './App.scss';

function App() {
  const videosList = useSelector(state => state.videos.videosList);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("playListInit", (videosToAdd) => {
      if (videosToAdd.length > 0) {
        dispatch(replaceVideosList(videosToAdd));
      }
    });

    socket.on('addVideo', (video) => {
      dispatch(addVideoToList(video));
    });

    socket.on('removeVideoAtIndex', (videoToRemove) => {
      dispatch(removeVideoFromList(videoToRemove));
    });

    //close the socket connection on close
    return () => socket.disconnect();
  }, []);

  return (
      <SocketContext.Provider value={socket}>
        <div className="App">
          <PlaylistManager videosList={videosList} />
          <YoutubePlayer videosList={videosList} />
        </div>
      </SocketContext.Provider>   
  );
}

export default App;
