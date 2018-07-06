import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  
  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} details - Rock & Roll`;

      let controller = this.get('controller');

      controller.set('isEditing', false);
    },

    willTransition(transition) {
      if (this.get('controller.isEditing')) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        }
      }
    }
  }
});
