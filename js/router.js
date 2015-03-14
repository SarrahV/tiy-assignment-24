var Router = Backbone.Router.extend({

  routes: {
     ""             : "showHome",  //Initial View
    "tracks/:genre" : "loadGenre"  //TracksCollectionView

  },

  initialize: function() {
    this.initialView = new InitialView(); //view on homepage
    this.tracks = new TrackCollection(); 
    this.tracksView = new TrackCollectionView({ //view of tracks Collec.
      collection: this.tracks
    });
    this.currentView = null; //allows me to detect a view and detach it
   

    $(".wrapper").append(this.initialView.render().el);

    //listens for click on initial view
    this.listenTo(this.initialView, "link:click", function(genre){ 
      this.loadGenre(genre);
      this.navigate("tracks/" + genre);
      this.showTracksView();
    });

    this.listenTo(this.nav, "link:click", function(options){
      switch(options.name) {
        case "favorites":
          this.showFavorites();
        break;
        case "home":
          this.showHome();
        break;
        default:
          this.showHome();
        break;
      }
      this.navigate(options.href);
    });

    // default to showing home

    this.showHome();

  },
    //loads grabs tracks associated with a genre
    loadGenre: function(genre) { 
      this.tracks.loadGenre(genre);
    },
    // detaches current view and creates new view for tracksView
    showTracksView: function(){ 
      if(this.currentView){     // checks for currentView
        this.currentView.el.detach(); //detaches what it finds
      }
      this.currentView = this.tracksView; //adds in our new view
      $(".wrapper").html(this.currentView.el);
    },

    showHome: function() {
      this.$wrapper.html( this.initialView.render().el );
    },

});