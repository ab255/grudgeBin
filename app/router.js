import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('grudges', { path: '/' }, function() {
    this.route('grudge', { path: ':grudge_id' });
    this.route('edit', { path: ':grudge_id/edit' });
    this.route('new');
  });
});

export default Router;
