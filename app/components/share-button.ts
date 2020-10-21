import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { Registry as Services } from '@ember/service';


interface ShareButtonArgs {
    hashtags: string;
    text: string;
    via: string;
}

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButton extends Component<ShareButtonArgs> {
  @service router!: Services['router'];

  get currentURL() {
    return new URL(this.router.currentURL, window.location.origin).toString();
  }

  get shareURL() {
    const url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}