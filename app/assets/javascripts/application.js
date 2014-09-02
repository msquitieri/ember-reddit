//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./reddit

// for more details see: http://emberjs.com/guides/application/
Reddit = Ember.Application.create({
  rootElement: '#ember-app',

  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
});

