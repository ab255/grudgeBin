import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('date'),
  name: DS.attr('string'),
  wrongs: DS.attr('string'),
  forgiven: DS.attr('boolean', { defaultValue: false })
});
