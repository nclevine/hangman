var HangmanModel = Backbone.Model.extend({
  defaults: {
  },

  initialize: function(){
    console.log('New hangman Model Created');
  },

  urlRoot: '/hangman'
});
