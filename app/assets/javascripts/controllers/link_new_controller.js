Reddit.LinksNewController = Ember.ObjectController.extend({
  actions: {
    createLink: function() {
      var link = this.store.createRecord('link', this.get('fields'));
      _this = this
      link.save().then(function() {
        _this.transitionToRoute('link', link)
      });
    },
    cancel: function() {
      this.set('fields', {});
      this.transitionToRoute('links');
    }
  }
});