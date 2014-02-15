Sighties.Router.map(function() {
  this.resource('lists', function() {
    this.resource('list', { path: ':list_id' });
  });
});

Sighties.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('list', 1);
  }
});

Sighties.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
});

Sighties.ListRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
  },
  model: function(params) {
    return Sighties.List.store.find('list', params.list_id);
  }
});
