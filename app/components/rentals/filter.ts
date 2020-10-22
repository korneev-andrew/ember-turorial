import Component from '@glimmer/component';
import { RentalDTO } from '../../routes/rental';

interface RentalsFilterArgs {
    rentals: RentalDTO[];
    query: string;
}

export default class RentalsFilterComponent extends Component<RentalsFilterArgs> {
    get results() {
        const { rentals, query } = this.args;

        if (query) {
            return rentals.filter(rental => rental.title.includes(query));
        }

        return rentals;
    }
}
