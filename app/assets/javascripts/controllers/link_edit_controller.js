Reddit.LinkEditController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function () {
      _this = this;
      this.get('model').save().then(function() {
        _this.transitionToRoute('link');
      });
    },
    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('link');
    }
  }
});