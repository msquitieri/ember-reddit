Reddit.LinksRoute = Ember.Route.extend({
  model: function() { return this.store.find('link') },
  activate: function() {
    $('#nav > li.active').removeClass('active');
    $('#home-nav').addClass('active');
    console.log("activated home!");
  },
  deactivate: function() {
    console.log("deactivated!");
  }
})