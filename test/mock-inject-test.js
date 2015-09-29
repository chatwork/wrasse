import assert from 'assert';
import Application from './example/app';
import wr from './example/Wrasse-singleton';

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
    Application.prototype.ComponentA = _ComponentA;
    Application.prototype.ComponentB = MockComponentB;
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
    const app = new Application();
    app.ComponentC = 'MockComponentC';
    assert.strictEqual(app.getComponentC(), 'MockComponentC');
  });

  it('should be injected Regular ComponentC', () => {
    const app = new Application();
    assert.strictEqual(app.getComponentC(), 'ComponentC');
  });
});
