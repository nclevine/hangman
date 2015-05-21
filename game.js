var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hangman');
var db = mongoose.connection;

var gameSchema = new mongoose.Schema({
  phrase: String,
  guessed_letters: [String],
  body_parts: {
    head: Boolean,
    neck: Boolean,
    torso: Boolean,
    left_arm: Boolean,
    right_arm: Boolean,
    left_leg: Boolean,
    right_leg: Boolean,
    hands: Boolean,
    feet: Boolean
  }
});
var Game = mongoose.model('Game', gameSchema);

var start_body = {
  head: false,
  neck: false,
  torso: false,
  left_arm: false,
  right_arm: false,
  left_leg: false,
  right_leg: false,
  hands: false,
  feet: false
};

module.exports = {
  newGame: function(phrase){
    Game.create({phrase: phrase, body_parts: start_body, guessed_letters: []}, function(err, game){
      console.log('new game created');
    });
  },
  lookupGame: function(phrase){
    var game = Game.findOne({phrase: phrase}, function(err, game){
      console.log('found' + game);
    });
    return game;
  },
  pickLetter: function(phrase, letter){
    var game = Game.findOne({phrase: phrase}, function(err, game){
      game.letters.find({})
    });
  }
}