import assert from 'assert';
import {SuperApplication, Application} from './example/extends-app';

describe('SuperApplication', () => {
  it('should be injected ComponentA', () => {
    const app = new SuperApplication();
    assert.strictEqual(app.ComponentA.text, 'This is ComponentA');
  });

  it('should be injected ComponentB', () => {
    const app = new SuperApplication();
    assert.strictEqual(!!app.ComponentB, true);
  });

  it('should NOT be had useComponentB()', () => {
    const app = new SuperApplication();
    assert.strictEqual(app.useComponentB, void 0);
  });

  it('should NOT be injected ComponentC', () => {
    const app = new SuperApplication();
    assert.strictEqual(app.ComponentC, void 0);
  });
});

describe('Application with extends', () => {
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

  it('should be injected ComponentC', () => {
    const app = new Application();
    assert.strictEqual(app.ComponentC, 'ComponentC');
  });
});
