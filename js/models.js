
var Track = Backbone.Model.extend({

  play: function() {
    if(!this.stream) {
      this._loadStream();
      return;
    }
    this.stream.play();
    this.trigger("stream:play");
  },

  pause: function() {
    this.stream.pause();
    this.trigger("stream:pause");
  },

  _loadStream: function(autoPlay) {
    this.trigger("stream:loading");
    SC.stream("/tracks/" + this.id, function(sound){
      this.stream = sound;
      this.trigger("stream:loaded");
      this.play();
    }.bind(this));
  },

    favorite: function() {
    this.collection.favorites.add({
      "id": this.get('id'), 
      "title": this.get('title'), 
      "artwork_url":this.get('artwork_url'),
      "streamable":this.get('streamable'),
      "stream_url":this.get('stream_url'),
    });
  },

  unfavorite: function() {
    this.collection.favorites.remove({id: this.get('id')});
  }

});

var TrackCollection = Backbone.Collection.extend({

  model: Track,

  initialize: function() {
    this.favorites = new FireCollection();
  },

  loadGenre: function(genre) {
    SC.get('/tracks', { genres: genre }, function(tracks) {
      this.reset(tracks);
    }.bind(this));
  },

  search: function(query) {
    SC.get('/tracks', { q: query }, function(tracks) {
      this.reset(tracks);
    }.bind(this));

  },

});

var FireCollection = Backbone.Firebase.Collection.extend({
  url: "https://playlist-soundzzzz.firebaseio.com",
  model: Track,
  autoSync: true,

  loadFavs: function(genre) {
    SC.get('/tracks', { id: id }, function(tracks) {
      this.reset(tracks);
    }.bind(this));
  },

});
