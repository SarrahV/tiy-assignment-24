var InitialView = Backbone.View.extend({ //homepage view

  template: JST["playlists"],

  events: {    // adds event to the a tags in playlist class

    "click .playlist a" : "onClick"

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



var TrackView = Backbone.View.extend({  // ind track view

  tagname: "tr",

  template: JST["track"],

  events: {
    "click .play i"      : "onButtonClick",
    "click .fa.fa-star"  : "onClick",
  },

  playClass     : "fa-play-circle",
  loadingClass  : "fa-spinner",
  pauseClass    : "fa-pause",
  spinClass     : "fa-spin",
  favClass      : "fa-star", 


  initialize: function() {

    this.listenTo(this.model, "stream:loading", this.loading);
    this.listenTo(this.model, "stream:play",    this.playing);
    this.listenTo(this.model, "stream:pause",   this.paused);

  }, 

  removeClasses: function() {
    $i = this.$("i");
    $i.removeClass(this.playClass);
    $i.removeClass(this.loadingClass);
    $i.removeClass(this.pauseClass);
    $i.removeClass(this.spinClass);
  },

  loading: function() {
    this.removeClasses();
    this.$("i").addClass(this.spinClass).addClass(this.loadingClass);
  },

  playing: function() {
    this.removeClasses();
    this.interval = setInterval(this.updatePosition.bind(this), 1000);
    this.$("i").addClass(this.pauseClass);
  },

  paused: function() {
    this.removeClasses();
    this.$("i").addClass(this.playClass);
  },

  finished: function() {
    this.removeClasses();
    this.$("i").addClass(this.playClass);
  },

  /*favorite: function() { // not right!!
    this.$("i").addClass(this.favClass);
  },*/

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

  onClick: function(e) { //onClick function to add starred to fav
    e.preventDefault();

    $a = $(e.currentTarget);


    //need to add to a favorites playlist if one exists
    //create new one if there is no favorites list

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

  tagName: "table",

  className: "track-list",

  template: JST["track_collection"],

  initialize: function() {
    this.listenTo(this.collection, "reset", function() {
      this.render();
    });
  },

  render: function() {
    this.$el.html( this.template() );
    $tbody = this.$("tbody");
    this.collection.each(function(model) {
      var view = new TrackView({model: model});
      $tbody.append(view.render().el);
    });
    return this;
  }

});

var FavoritesView = Backbone.View.extend({

  tagName: "table",

  className: "track-list",

  template: JST["favorites"],

  initialize: function() {
    this.listenTo(this.collection, "reset", function() {
      this.render();
    });
  },

  render: function() {
    this.$el.html( this.template() );
    $tbody = this.$("tbody");
    this.collection.each(function(model) {
      var view = new TrackView({model: model});
      $tbody.append(view.render().el);
    });
    return this;
  }

});
 








