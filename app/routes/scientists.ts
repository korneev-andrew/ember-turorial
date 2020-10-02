import Route from '@ember/routing/route';

export default class Scientists extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  model() {
      return ['Marie Curie', 'Stehen Hawking', 'Albert Hoffman'];
  }
}
