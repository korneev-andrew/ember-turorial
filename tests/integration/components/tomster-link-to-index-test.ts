import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tomster-link-to-index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{tomster-link-to-index}}`);

    assert.equal(this.element.textContent!.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#tomster-link-to-index}}
        template block text
      {{/tomster-link-to-index}}
    `);

    assert.equal(this.element.textContent!.trim(), '');
  });
});
