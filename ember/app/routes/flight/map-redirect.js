import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.redirectTo('flight.index');
  },
});
