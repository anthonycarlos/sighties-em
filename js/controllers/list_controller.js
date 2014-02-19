Sighties.ListController = Ember.ObjectController.extend({
  actions: {
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeList');
      } else {
        this.get('model').save();
      }
    },
    handleClick: function() {
      var clickedList = this;
      var selectedList = this.parentController.get('selectedList');
      if ((selectedList === undefined) || (selectedList === this.get('id'))) {
        if (clickedList.get('canEdit')) {
          // Go to edit mode
          clickedList.set('isEditing', true);
        } else {
          // No-op
        }
      } else {
        // Clear selections and select clickedList
      }
      this.parentController.set('selectedList', this.get('id'));
    }
  }
});

