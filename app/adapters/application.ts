import DS from 'ember-data';

export default class Application extends DS.JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args: any[]) {
    return `${super.buildURL(...args)}.json`;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    'application': Application;
  }
}
