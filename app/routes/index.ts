import Route from '@ember/routing/route';

import { inject as service, Registry as Services } from '@ember/service';

export default class Index extends Route {
  @service store!: Services['store'];

  async model() {
    return this.store.findAll('rental');
  }
}
