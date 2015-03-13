var Router = Backbone.Router.extend({

  routes: {

    "tracks/:genre" : "loadGenre"

  },

  initialize: function() {
    this.initialView = new InitialView(); //view on homepage
    this.tracks = new TrackCollection();
    this.tracksView = new TrackCollectionView({
      collection: this.tracks
    });
   

    $(".wrapper").append(this.initialView.render().el);
    $(".wrapper").append(this.tracksView.el); 

    this.listenTo(this.initialView, "link:click", function(genre){ //listens for click on initial view
      this.loadGenre(genre);
      this.navigate("tracks/" + genre);
    });
  },

    loadGenre: function(genre) {
      this.tracks.loadGenre(genre);
    }

});