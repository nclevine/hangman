var PhraseView = Backbone.View.extend({
  // makes a <span class='placeholder'></span> in html
  className: "placeholder",
  tagName: "span",

  initialize: function(){
    console.log("Phrase View instantiated");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    // var renderedHTML = HandlebarsTemplates[''](this.model.toJSON());
    // this.$el.html(renderedHTML);
  },

});
