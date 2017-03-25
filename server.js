var express = require('express');
var app =express();
var bodyParser= require('body-parser');
app.use(bodyParser());
var io = require('socket.io');
io.on('connection',function(socket){
    console.log('a user is connectde');
})
app.listen(3000,function(){
    console.log('server is runnig on port 3000');

})
