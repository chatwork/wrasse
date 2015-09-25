import assert from 'assert';
import Application from './example/app';
import ij from './example/injector-singleton';

// Regular Component
import _ComponentA from './example/component-a';
import _ComponentC from './example/component-c';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './example/module-keys';

class MockComponentB {
  constructor(v) {
    this.v = v;
  }

  text() {
    return `This is MockComponentB, ${this.v}`;
  }
}

describe('Inject mock', () => {
  beforeEach(() => {
    ij.setModule(ComponentA, _ComponentA);
    ij.setModule(ComponentB, MockComponentB);
  });

  it('should be injected ComponentA', () => {
    const app = new Application();
    assert.strictEqual(app.ComponentA.text, 'This is ComponentA');
  });

  it('should be injected MockComponentB: 1', () => {
    const app = new Application();
    const text = app.useComponentB('hello!');
    assert.strictEqual(text, 'This is MockComponentB, hello!');
  });

  it('should be injected MockComponentB: 2', () => {
    const app = new Application();
    const text = app.useComponentB('it is easy!');
    assert.strictEqual(text, 'This is MockComponentB, it is easy!');
  });

  it('should be injected Mock ComponentC', () => {
    ij.setModule(ComponentC, 'MockComponentC');
    const app = new Application();
    const deps = app.dependenciesItems();
    assert.strictEqual(deps.ComponentC, 'MockComponentC');
  });

  it('should be injected Regular ComponentC', () => {
    ij.setModule(ComponentC, _ComponentC);
    const app = new Application();
    const deps = app.dependenciesItems();
    assert.strictEqual(deps.ComponentC, 'ComponentC');
  });

  it('should be injected 3 items', () => {
    const app = new Application();
    const deps = app.dependenciesItems();
    assert.strictEqual(Object.keys(deps).length, 3);
  });
});
