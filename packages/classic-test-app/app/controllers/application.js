import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Controller.extend({
  router: service(),

  transitionToLoginRoute: action(function () {
    this.router.transitionTo('login');
  }),
});
