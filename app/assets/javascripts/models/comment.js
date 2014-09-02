Reddit.Comment = DS.Model.extend({
  text: DS.attr('string'),
  link: DS.belongsTo('link')
});