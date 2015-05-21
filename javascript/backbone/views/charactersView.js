var CharacterView = Backbone.View.extend({
  // makes a <span class='character'></span> in html
  className: "character",
  tagName: "span",

  // for DOM events
  events: {
    'click.finish': 'markChecked'
  },

  initialize: function(){
    console.log("Character View instantiated");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    // var renderedHTML = HandlebarsTemplates[''](this.model.toJSON());
    // this.$el.html(renderedHTML);
  },

  markChecked: function(){
    var view = this;
    this.model.save({
      completed: true
    }).done(function(response){
      view.$el.fadeOut();
    }).fail(function(response){
      console.log(response);
    });
  }

});
