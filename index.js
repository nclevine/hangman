var app = require('express')();
var http = require('http').Server(app);
var Game = require('./game.js');

Game.newGame('hello');

app.get('/game/:phrase', function(req, res){
  var game = Game.lookupGame(req.params.phrase);
  res.json(game);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
