import assert from 'assert';
import Application from './example/app';

describe('Inject regular', () => {
  it('should be injected ComponentA', () => {
    const app = new Application();
    assert.strictEqual(app.ComponentA.text, 'This is ComponentA');
  });

  it('should be injected ComponentB: 1', () => {
    const app = new Application();
    const text = app.useComponentB('hello!');
    assert.strictEqual(text, 'This is ComponentB, hello!');
  });

  it('should be injected ComponentB: 2', () => {
    const app = new Application();
    const text = app.useComponentB('it is easy!');
    assert.strictEqual(text, 'This is ComponentB, it is easy!');
  });

  it('should be injected 3 items', () => {
    const app = new Application();
    const deps = app.dependenciesItems();
    assert.strictEqual(Object.keys(deps).length, 3);
  });
});
