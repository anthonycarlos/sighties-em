Sighties.Router.map(function () {
  this.resource('lists', { path: '/' });
});

Sighties.ListsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('list');
  }
});
