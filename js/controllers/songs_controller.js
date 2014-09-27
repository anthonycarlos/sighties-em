Selections.SongsController = Ember.ArrayController.extend({
  itemController: 'song',
  actions: {
    handleClick: function(song, e) {
      var clickedSongController = this.find(function(item) {
        console.log('item=' + item);
        console.log('item.name=' + item.name);
        console.log('item.get(name)=' + item.get('name'));
        console.log('item.id=' + item.id);
        if (item.get('name') === song.get('name')) {
          return item;
        }
      });
      console.log('Inside SongsController handleClick action');
      console.log('song=' + song);
      console.log('song.get(isSelected)=' + song.get('isSelected'));
      console.log('song.get(name)=' + song.get('name'));
      console.log('this=' + this);
      this.forEach(function(item) {
        console.log('setting isSelected of ' + item + ' to false');
        item.set('isSelected', false);
      });
      console.log('Finally setting isSelected of ' + song + ' to true');
      clickedSongController.set('isSelected', true);
    }
  }
});
