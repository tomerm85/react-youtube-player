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
    //test log
    console.log('made socket connection', socket.id);

    //send current youtube playlist
    socket.emit('playListInit', youtubePlaylist);

    // //
    // socket.on('updateVideoList', (data) => {
    //     socket.broadcast.emit('updateVideoList', data);
    // });
});