Sighties.ListsController = Ember.ArrayController.extend({
  // TODO: Figure out a way to initialize this value
  isCreating: true,
  selectedList: undefined,
  actions: {
    createList: function() {
      // Get the list name set by the "New List Name" text field
      var name = this.get('newListName');
      if (!name.trim()) { return; }

      // Create the new List model
      var list = this.store.createRecord('list', {
        name: name,
        canEdit: true,
        cards: []
      });

      // Clear the "New List Name" text field
      this.set('newListName', '');

      // Save the new model
      list.save();
    }

  }
});

