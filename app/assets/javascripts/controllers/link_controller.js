Reddit.LinkController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      _this = this;
      this.get('model').destroyRecord().then(function() {
        _this.transitionToRoute('links');
      });
    },
    createComment: function() {
      console.log("comment_params: ");
      console.log(this.get('comment_params'));
      var comment = this.store.createRecord('comment', this.get('comment_params'));
      console.log(comment);
      comment.save();
    }
  }
})