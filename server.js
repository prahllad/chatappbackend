var express = require('express');
var app =express();
var bodyParser= require('body-parser');
app.use(bodyParser());
var server = require('socket.io');
var io = server();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatserver');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var root = require('./app/routes/root');
app.use('/api',root);
users=[];
io.on('connection',function(socket){
    console.log('a user is connectde');
    socket.on('setUsername', function(data){
    console.log(data);
    if(users.indexOf(data) > -1){
      socket.emit('userExists', data + ' username is taken! Try some other username.');
    }
    else{
      users.push(data);
      socket.emit('userSet', {username: data});
    }
  });
  socket.on('msg', function(data){
      //Send message to everyone
      io.sockets.emit('newmsg', data);
  })
});
app.listen(3000,function(){
    console.log('server is runnig on port 3000');

})

