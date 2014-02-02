Sighties.ListController = Ember.ObjectController.extend({
  actions: {
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeList');
      } else {
        this.get('model').save();
      }
    }
  }
});

