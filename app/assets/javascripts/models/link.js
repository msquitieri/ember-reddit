Reddit.Link = DS.Model.extend({
  link: DS.attr('string'),
  votes: DS.attr('number'),
  comments: DS.hasMany('comment')
});