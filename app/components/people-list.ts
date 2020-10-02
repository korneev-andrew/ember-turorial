import { action } from '@ember/object';
import Component from '@glimmer/component';

interface PeopleListArgs {}

export default class PeopleList extends Component<PeopleListArgs> {
    @action
    showPerson(person: any) {
        alert(`The person's name is ${person}`);
    }
}
