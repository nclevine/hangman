var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hangman');
var db = mongoose.connection;

var gameSchema = new mongoose.Schema({
  phrase: String,
  letters: {
    A: Boolean,
    B: Boolean,
    C: Boolean,
    D: Boolean,
    E: Boolean,
    F: Boolean,
    G: Boolean,
    H: Boolean,
    I: Boolean,
    J: Boolean,
    K: Boolean,
    L: Boolean,
    M: Boolean,
    N: Boolean,
    O: Boolean,
    P: Boolean,
    Q: Boolean,
    R: Boolean,
    S: Boolean,
    T: Boolean,
    U: Boolean,
    V: Boolean,
    W: Boolean,
    X: Boolean,
    Y: Boolean,
    Z: Boolean
  },
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

var start_letters = {
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
  F: false,
  G: false,
  H: false,
  I: false,
  J: false,
  K: false,
  L: false,
  M: false,
  N: false,
  O: false,
  P: false,
  Q: false,
  R: false,
  S: false,
  T: false,
  U: false,
  V: false,
  W: false,
  X: false,
  Y: false,
  Z: false
},
start_body = {
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
    Game.create({phrase: phrase, body_parts: start_body, letters: start_letters}, function(err, game){
      console.log('new game created');
    });
  },
  lookupGame: function(phrase){
    Game.findOne({phrase: phrase}, function())
  }
}