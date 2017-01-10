import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGrudge: function(grudgeForm) {
      let grudgeProps = grudgeForm.getProperties('name', 'wrongs');
      let record = this.get('store').createRecord('grudge', grudgeProps);
      record.save().then(() => {
          this.transitionToRoute('grudges');
      });
      return false;
    }
  }
});
