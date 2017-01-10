import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    grudges: this.get('store').findAll('grudge'),
  },
});
