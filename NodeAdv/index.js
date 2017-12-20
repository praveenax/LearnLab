var express = require('express');

var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log('message: ' + msg);
  });
});



app.use(express.static('client'));

app.get('/', function (req, res) {

    res.sendfile('client/index.html');

});



http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});