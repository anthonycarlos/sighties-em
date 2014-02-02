Sighties.ListsController = Ember.ArrayController.extend({
  // handle_click = function (name_of_clicked_list) {
  //   If the name_of_clicked_list is selected, go to edit mode
  //   else
  //   clear selections and select name_of_clicked_list
  // }
  actions: {
    handleClick: function (idOfClickedList) {
      var content = this.get('content');
      var clickedList = content.findBy('id', idOfClickedList);
      if (clickedList.get('isSelected')) {
        console.log("go to edit mode");
        clickedList.set('isEditing', true);
        console.log(clickedList);
        
      } else {
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

