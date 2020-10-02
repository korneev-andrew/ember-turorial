import Application from 'ember-tutorial/app';
import config from 'ember-tutorial/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import 'qunit-dom';

setApplication(Application.create(config.APP));

start();
