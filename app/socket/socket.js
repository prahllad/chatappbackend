var chat = require('../helper/chatlog');
module.exports = { serversocket: function(){
  users=[];
var io = require('socket.io')();
io.on('connection', function(socket){
  console.log('one client is connected with id='+socket.id);
  socket.on('disconnect',function(){
    let index;
    console.log('one user is disconnect');
     users.forEach(function(element) {
       if(element.id == socket.id){
          index = users.indexOf(element);
          console.log(index);
          delete users[index];
         users = users.filter(Boolean);
         console.log(users);
       }
    }, this);
  });
 socket.on('msg',function(data){
     console.log(data);
     chat.insertChat(data).then((resol)=>{
       if(resol!=null){
         console.log('log inserted');
       }
     }).catch((rej)=> console.log(rej));
  users.forEach(function(element) {
       if(element.email==data.reciver){
        socket.broadcast.to(element.id).emit('newmsg', data);
       }
     });
     users.forEach(function(element) {
       if(element.email==data.sender){
        socket.broadcast.to(element.id).emit('newmsg', data);
       }
     });
     //io.sockets.emit('newmsg', data);
 });
 socket.on('setUsername', function(data){
  let obj = {'email':data.email,'id':socket.id};
     users.push(obj);
      console.log(users);
     //socket.emit('userSet', {username: data});

 });
});
io.listen(5000);
}
};
