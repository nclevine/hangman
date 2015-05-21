var HangmanView = Backbone.View.extend({
  // connects to <div id='hangman' in html></div> in html
  el: '#hangman',

  initialize: function() {
    console.log("created Hangman view");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    // this.$el.html(HandlebarsTemplates[''](this.model.toJSON()));
  }

});
