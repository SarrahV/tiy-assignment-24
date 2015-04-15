var InitialView = Backbone.View.extend({ //homepage view

  template: JST["playlists"],

  events: {    // adds event to the a tags in playlist class

    "click .link-box a" : "onClick"

  },

  initialize: function() {
    this.render();
  },

  render: function() {               // renders playlist boxes to page
    this.$el.html(this.template() );
    return this;
  },

  onClick: function(e) {            // grabs genre data when clicked
    e.preventDefault();
    var $link = this.$(e.currentTarget);
    var genre = $link.data("genre");
    this.trigger("link:click", genre);
  },                              

});

 var NavView = Backbone.View.extend({
  events: {
    "click a" : "onClick"
  },
  template: JST["nav"],
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  onClick: function(e) {
    e.preventDefault();
    $link = this.$(e.currentTarget);
    var name = $link.data("name");
    var href = $link.attr("href");
    this.trigger("link:click", { 
      name: name,
      href: href
    });
  }
});



var TrackView = Backbone.View.extend({  // ind track view

  template: JST["track"],

  events: {
    "click .favs a"      : "onFavClick",
    "click .play i"      : "onButtonClick",
  },

  playClass     : "fa-play-circle",
  pauseClass    : "fa-pause",
  favClass      : "fa-star-o",
  isFavClass    : "fa-star",
 


  initialize: function() {

    this.listenTo(this.model, "stream:play",    this.playing);
    this.listenTo(this.model, "stream:pause",   this.paused);

  }, 

  removeClasses: function() {
    $i = this.$(".play i");
    $i.removeClass(this.playClass);
    $i.removeClass(this.pauseClass);
  },

  playing: function() {
    this.removeClasses();
    this.interval = setInterval(this.updatePosition.bind(this), 1000);
    this.$(".play i").addClass(this.pauseClass);
  },

  paused: function() {
    this.removeClasses();
    this.$(".play i").addClass(this.playClass);
  },

  finished: function() {
    this.removeClasses();
    this.$(".play i").addClass(this.playClass);
  },

  updatePosition: function() {
    var duration = this.model.stream.duration;
    var position = this.model.stream.position;
    if(position && position === duration) {
      var dur = this.formatDuration(duration);
      this.$(".duration span").text(dur);
      this.finished();
      clearInterval(this.interval);
    } else {
      var pos = this.formatDuration(position);
      this.$(".duration span").text(pos);
    }
  },

  onButtonClick: function(e) {
    e.preventDefault();

    $btn = $(e.currentTarget);

    if( $btn.hasClass(this.playClass) ) {
      this.model.play();
    }
    else if ( $btn.hasClass(this.pauseClass) ) {
      this.model.pause();
    }
  },

  onFavClick: function(e) { //onClick function to add fav class to track
    e.preventDefault();

    $a = $(e.currentTarget);
    $i = $("i", $a);

    if ( $i.hasClass(this.favClass) ) { //if it does not have a favClass, add it
      $i.removeClass(this.favClass);
      $i.addClass(this.isFavClass);
    } else if ($i.hasClass(this.isFavClass) ) {
      $i.removeClass(this.isFavClass);
      $i.addClass(this.favClass);
    }

    var id = $a.data("id"); // grab the id data from object
    this.trigger("add:fav", id);  //add id to fav

    console.log(id);

  },

  formatDuration: function(duration) {
    // convert miliseconds to minutes
      duration = duration / 1000 / 60;

      // get minutes and seconds
      var minutes = Math.floor(duration);
      var seconds = Math.round((duration - minutes) * 60);

      // put missing 0 in front of numbers below < 10
      if (seconds < 10) {
        seconds = "0" + seconds.toString();
      }

      // combine the values into a formatted string
      duration = minutes.toString() + ":" + seconds.toString();

      return duration;
  },

  render: function() {
    var data = this.model.toJSON();
    data.duration = this.formatDuration(data.duration);
    this.$el.html(this.template( data ));
    return this;
  }

});

var TrackCollectionView = Backbone.View.extend({ //displays when you click on initial view box

  className: "track-list",

  template: JST["track_collection"],

  initialize: function() {
    this.listenTo(this.collection, "reset", function() {
      this.render();
    });
  },

  render: function() {
    this.$el.html( this.template() );
    $div = this.$("div");
    this.collection.each(function(model) {
      var view = new TrackView({model: model});
      $div.append(view.render().el);
    });
    return this;
  }

});

// var FavoritesView = Backbone.View.extend({

//   className: "track-list",

//   template: JST["favorites"],

//   initialize: function() { // listen for changes to the view (add track)
//     this.listenTo(this.collection, "change", function() {
//       this.render();
//     });
//   },

//   render: function() {
//     this.$el.html( this.template() );
//     $div = this.$("div");
//     this.collection.each(function(model) {
//       var view = new FavoritesView({model: model});
//       $div.append(view.render().el);
//     });
//     return this;
//   }

// });








