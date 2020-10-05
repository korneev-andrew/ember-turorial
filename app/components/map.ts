import Component from '@glimmer/component';
import ENV from 'ember-tutorial/config/environment';

interface MapArgs {}

export default class Map extends Component<MapArgs> {
    get token() {
        return encodeURIComponent(ENV.APP['MAPBOX_ACCESS_PUBLIC_TOKEN'] as string);
    }
}
