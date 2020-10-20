import Route from '@ember/routing/route';

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

export const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class Index extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  async model(): Promise<RentalDTO[]> {
    const response = await fetch('/api/rentals.json');
    const { data } = await response.json();

    return data.map((model: any) => {
      const { id, attributes } = model;
      const type = COMMUNITY_CATEGORIES.includes(attributes.category) ? 'Community' : 'Standalone';

      return {id, type, ...attributes};
    });
  }
}
