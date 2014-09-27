Selections.Router.map(function() {
  this.resource('songs', { path: '/' });
});

Selections.SongsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('song');
  }
});
