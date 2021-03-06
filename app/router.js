import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('grudges', { path: '/' }, function() {
    this.route('grudge', { path: ':grudge_id' });
    this.route('new');
    this.route('edit', { path:':grudge_id/edit' });
  });
});

export default Router;
