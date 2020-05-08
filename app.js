const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  
  socket.on('users', (data) => {
    io.emit('all-users', data)
  })

  socket.on('answers', (data) => {
    io.emit('remote-questions', data)
  })

  socket.on('game-state', (data) => {
    io.emit('server-game-state', data)
  })

  socket.on('topic-choice-details', (data) => {
    io.emit('topic-choice-details', data)
  })

  socket.on('set-user-scores', (data) => {
    io.emit('user-scores', data)
  })

  socket.on('set-timer', (data) => {
    io.emit('server-timer', data)
  })

  socket.on('question-number', (data) => {
    io.emit('question-number', data)
  })

  socket.on('questions', (data) => {
    io.emit('questions', data)
  })

  socket.on('exit-game', (data) => {
    
    io.emit('server-exit-game', data)
  })
});

http.listen(4000, () => {
  console.log('listening on *:3000');
});