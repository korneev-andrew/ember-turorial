import Component from '@glimmer/component';
import ENV from 'ember-tutorial/config/environment';

interface MapArgs {
    lng: string;
    lat: string;
    zoom: string;
    width: string;
    height: string;
}

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static'

export default class Map extends Component<MapArgs> {

    get src () {
        const { lng, lat, zoom, width, height } = this.args;
        const coordinates = `${lng},${lat},${zoom}`;
        const dimension = `${width}x${height}`

        return `${MAPBOX_API}/${coordinates}/${dimension}@2x?access_token=${this.token}`
    }

    get token() {
        return encodeURIComponent(ENV.APP['MAPBOX_ACCESS_PUBLIC_TOKEN'] as string);
    }
}
