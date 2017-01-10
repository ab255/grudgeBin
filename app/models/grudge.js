import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  name: DS.attr('string'),
  wrongs: DS.attr('string'),
  forgiven: DS.attr('boolean', { defaultValue: false })
});
