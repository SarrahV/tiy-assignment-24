var Router = Backbone.Router.extend({

  routes: {
    ""                       : "showHome",       // Initial View
    "tracks/:genre"         : "loadGenre",      //TracksCollectionView
    "favorites"             : "showFavorites"   //Fav TracksCollectionView
  },

  initialize: function() {
    this.initialView = new InitialView();       //view on homepage
    
    this.nav = new NavView();      
    
    this.tracks = new TrackCollection();        // reg tracks
    this.tracksView = new TrackCollectionView({ // view of tracks Collec.
      collection: this.tracks
    });

    this.favTracks = this.tracks.favorites;     // firebase tracks
    this.favoritesView = new FavoritesView({    // view of firebase Collec.
      collection: this.favTracks
    });

    this.currentView = null;                    // allows me to detect a view and detach it
   
    $("header").append(this.nav.render().el);

    //listens for click on initial view
    this.listenTo(this.initialView, "link:click", function(genre){ 
      this.loadGenre(genre);
      this.navigate("tracks/" + genre);
      this.showTracksView();
    });

    //  //listens for click on Fav view
    // this.listenTo(this.nav, "link:click", function(title){ 

    //   this.showFavorites();
    //   console.log(this);
    //   this.navigate("favorites");
    //   //this.showFavorites();
    // });

    //listens to navigation to show pages
    this.listenTo(this.nav, "link:click", function(options){
      console.log(options);
      switch(options.name) {
        case "favs":
          this.showFavorites();
        break;
        default:
          this.showHome();
        break;
      }
      this.navigate(options.href, {trigger: true, replace: true});
    });

  },

    // grabs tracks associated with a genre
    loadGenre: function(genre) { 
      this.tracks.loadGenre(genre);
    },
    // detaches current view and creates new view for tracksView
    showTracksView: function(){ 
      if(this.currentView){     // checks for currentView
        this.currentView.$el.detach(); //detaches what it finds
      }
      this.currentView = this.tracksView; //adds in our new view
      $(".wrapper").html(this.currentView.el);
    },
    //shows the home page
    showHome: function() {
      if(this.currentView){     // checks for currentView
          this.currentView.$el.detach(); //detaches what it finds
      }
      this.currentView = this.initialView; //adds in our new view
      $(".wrapper").html(this.currentView.el);
    },

    showFavorites: function() {
      if(this.currentView) {     // checks for currentView
          this.currentView.$el.detach(); //detaches what it finds
      }
      this.currentView = this.favoritesView; //adds in our new view
      $(".wrapper").html(this.currentView.el);
    }
});



