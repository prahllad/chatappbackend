//var chatlog = require('../models/chatlog');
module.exports = { serversocket: function(){
  users=[];
var io = require('socket.io')();
io.on('connection', function(socket){
  console.log('one client is connected');
 socket.on('msg',function(data){
     console.log(data.message);
     io.sockets.emit('newmsg', data);
 });
 socket.on('setUsername', function(data){
   console.log(data);
     users.push(data);
     socket.emit('userSet', {username: data});

 });
});
io.listen(5000);
}
};
