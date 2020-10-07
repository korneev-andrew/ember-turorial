import Component from '@glimmer/component';
import { RentalDTO } from 'ember-tutorial/routes';

interface RentalArgs {
    rental: RentalDTO;
}

export default class Rental extends Component<RentalArgs> {}
