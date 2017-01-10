import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editGrudge(editGrudgeForm) {
      editGrudgeForm.set('name', editGrudgeForm.get('name'));
      editGrudgeForm.set('wrongs', editGrudgeForm.get('wrongs'));
      editGrudgeForm.set('forgiven', editGrudgeForm.get('forgiven'));
      editGrudgeForm.save().then((grudge) => {
        this.transitionToRoute('grudges.grudge', grudge);
      });
      return false;
    },
    revertGrudge(grudge) {
      grudge.rollbackAttributes();
      this.transitionToRoute('grudges.grudge', grudge);
    }
  }
});
