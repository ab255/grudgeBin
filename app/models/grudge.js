import DS from 'ember-data';

export default DS.Model.extend({
  name   : DS.attr('string'),
  wrongs : DS.attr('string'),
  forgiven : DS.attr('boolean', { defaultValue: false }),
  rev : DS.attr('string')
});
