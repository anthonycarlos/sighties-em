Selections.SongsController = Ember.ArrayController.extend({
  itemController: 'song',
  actions: {
    handleClick: function(target_id, e) {
      var clickedSongController = this.find(function(item) {
        console.log('Initializing clickedSongController...');
        console.log('item=' + item);
        console.log('item.get(name)=' + item.get('name'));
        console.log('item.get(id)=' + item.get('id'));
        if (item.get('id') === target_id) {
          return item;
        }
      });
      console.log('Inside SongsController handleClick action');
      console.log('target_id=' + target_id);
      console.log('e=' + e);
      console.log('e.metaKey=' + e.metaKey);
      console.log('e.shiftKey=' + e.shiftKey);

      this.clearSelections();
      console.log('Finally setting isSelected of song id ' + target_id + ' to true');
      clickedSongController.set('isSelected', true);
      console.log('Finally setting lastSelected of song id ' + target_id + ' to true');
      clickedSongController.set('lastSelected', true);
    }
  },
  clearSelections: function() {
    this.forEach(function(item) {
      item.set('isSelected', false);
      item.set('lastSelected', false);
    });
  }
});
