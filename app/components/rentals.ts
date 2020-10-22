import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface RentalsArgs {}

export default class RentalsComponent extends Component<RentalsArgs> {
    @tracked query!: string;
}
