var Router = Backbone.Router.extend({

  routes: {

  },

  initialize: function() {
    this.initialView = new InitialView();

    $(".wrapper").append(this.initialView.render().el);

  }

});