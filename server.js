var express = require('express');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatserver');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var root = require('./app/routes/root');
var socket = require('./app/socket/socket.js');
socket.serversocket();
app.use('/api',root);

app.listen(3000,function(){
    console.log('server is runnig on port 3000');

})

