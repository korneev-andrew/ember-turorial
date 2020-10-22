import Model, { attr } from '@ember-data/model';

export type RentalLocation = {
  lat: number;
  lng: number;
};

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalModel extends Model {
  @attr("string") title!: string;
  @attr("string") owner!: string;
  @attr("string") city!: string;
  @attr() location!: RentalLocation;
  @attr("string") category!: string;
  @attr("number") bedrooms!: number;
  @attr("string") image!: string;
  @attr("string") description!: string;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {1
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'rental': Rental;
  }
}
