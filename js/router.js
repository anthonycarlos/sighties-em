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
    //debugger;
    console.log("ListRoute here. My model id=" + model.get('id'));
    //controller.parentController.set('selectedList', model.get('id'));
  },
  model: function(params) {
    return Sighties.List.store.find('list', params.list_id);
  }
});
