Selections.SonglistView = Ember.View.extend({
  click: function(e) {
    console.log('e.target=' + e.target);
    console.log('e.target.id=' + e.target.id);
    console.log('e.metaKey=' + e.metaKey);
    console.log('e.shiftKey=' + e.shiftKey);
    console.log('this=' + this);
    console.log('this.get("controller")=' + this.get("controller"));
    console.log('');
    this.get('controller').send('handleClick', e.target.id, e);
  }
});
