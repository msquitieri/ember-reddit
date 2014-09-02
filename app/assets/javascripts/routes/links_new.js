Reddit.LinksNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('fields', {});
  },
  activate: function() {
    $('#nav > li.active').removeClass('active');
    $('#create-nav').addClass('active');
  }
});