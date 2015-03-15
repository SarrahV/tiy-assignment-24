var Router = Backbone.Router.extend({

  routes: {
    ""              : "showHome",  //Initial View
    "tracks/:genre" : "loadGenre",  //TracksCollectionView
    /*"favorites"     : "showFavorites"*/
  },

  initialize: function() {
    this.initialView = new InitialView(); //view on homepage
    this.nav = new NavView();      
    this.tracks = new TrackCollection();        // reg tracks
    this.tracksView = new TrackCollectionView({ //view of tracks Collec.
      collection: this.tracks
    });
    this.favTracks = new FireCollection();       //  firebase tracks
    this.favoritesView = new FavoritesView({     // view of firebase Collec.
      collection: this.favTracks
    });
    this.currentView = null;                     //allows me to detect a view and detach it
   
 
    $("header").append(this.nav.render().el);
    $(".wrapper").append(this.initialView.render().el);

    //listens for click on initial view
    this.listenTo(this.initialView, "link:click", function(genre){ 
      this.loadGenre(genre);
      this.navigate("tracks/" + genre);
      this.showTracksView();
    });

    /*listens for click on track view, add song id to favorites
    this.listenTo(this.tracksView, "link:click", function(id) {
      this.loadFavs(id);
    });*/


    //listens to navigation to show pages
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

    // grabs tracks associated with a genre
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
    //shows the home page
    showHome: function() {
      this.$(".wrapper").html( this.initialView.render().el );
    },
    // grabs id of favorited tracks, adds to favorites
   /* loadFavs: function(id) {
      this.favTracks.loadFavs(id);
    }*/

});



