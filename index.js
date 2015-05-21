var app = require('express')();
var http = require('http').Server(app);


app.get('/game', function(req, res){
  Game.find({}, function(err, game){
    res.json(game);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
