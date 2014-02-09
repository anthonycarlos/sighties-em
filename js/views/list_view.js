Sighties.ListView = Ember.View.extend({
  click: function(evt) {
    var controller = this.get('controller');
    controller.send('handleClick');
  }
});
