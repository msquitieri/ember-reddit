Reddit.LinkRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('link', params.id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    var comment_params = {
      link: model
    };
    controller.set('comment_params', comment_params);
  }
});