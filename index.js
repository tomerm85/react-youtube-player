const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});

const io = socket(server, {
    cors: {
      origin: '*',
    }
});

const youtubePlaylist = [];
io.on('connection', (socket) => {
  //send current youtube playlist to a new client
  socket.emit('playListInit', youtubePlaylist);

  //send new video to existing clients
  socket.on('addVideo', (video) => {
    youtubePlaylist.push(video);
    socket.broadcast.emit('addVideo', video);
  });

  //remove just played video from youtube playlist
  socket.on('removeVideo', () => {
    youtubePlaylist.shift();
  });
});