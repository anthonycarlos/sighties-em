Sighties.ListView = Ember.View.extend({
  click: function(evt) {
    var controller = this.get('controller');
    controller.get('parentController').send('handleClick', controller.get('id'));
  }
});
