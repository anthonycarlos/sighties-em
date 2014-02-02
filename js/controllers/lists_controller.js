Sighties.ListsController = Ember.ArrayController.extend({
  actions: {
    handleClick: function (idOfClickedList) {
      var content = this.get('content');
      var clickedList = content.findBy('id', idOfClickedList);
      if (clickedList.get('isSelected')) {
        // Go to edit mode
        clickedList.set('isEditing', true);
      } else {
        // Clear selections and select clickedList
        content.forEach(function (item, index, enumerable) {
          if (item !== clickedList) {
            item.set('isSelected', false);
          }
          item.set('isEditing', false);
        });
        clickedList.set('isSelected', true);
      }
    }
  }
});

