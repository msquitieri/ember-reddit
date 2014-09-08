// For more information see: http://emberjs.com/guides/routing/

Reddit.Router.reopen({
  location: 'auto'
});

Reddit.Router.map(function() {
  this.resource('links', { path: '/' }, function() {
    this.route('new', {path: '/links/new'});
  });
  this.resource('link', { path: '/links/:id' }, function() {
    this.route('edit');
  });
});
