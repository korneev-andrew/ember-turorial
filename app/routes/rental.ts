import Route from '@ember/routing/route';
import { RentalDTO } from './index';
import { inject as service, Registry as Service} from '@ember/service';

export type RentalDTO = {
  title: string,
  owner: string,
  city: string,
  location: {
    lat: number,
    lng: number,
  },
  category: string,
  type: string,
  bedrooms: number,
  image: string,
  description: string,
};

export default class RentalRoute extends Route {
  @service store!: Service['store'];

  async model(params: any): Promise<RentalDTO> {
    return this.store.findRecord('rental', params.rental_id);
  }
}
