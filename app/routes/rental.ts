import Route from '@ember/routing/route';
import { COMMUNITY_CATEGORIES, RentalDTO } from './index';

export default class RentalRoute extends Route {
  async model(params: any): Promise<RentalDTO> {
    const response = await fetch(`/api/rentals/${params.rental_id}.json`);
    const { data } = await response.json();

    const { id, attributes } = data;
    const type = COMMUNITY_CATEGORIES.includes(attributes.category) ? 'Community' : 'Standalone';

    return { id, type, ...attributes };
  }
}
