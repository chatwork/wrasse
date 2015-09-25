import ij from './injector-singleton';

// No changed
import _ComponentA from '../example/component-a';

class MockComponentB {
  constructor(v) {
    this.v = v;
  }

  text() {
    return `This is MockComponentB, ${this.v}`;
  }
}

import {
  ComponentA,
  ComponentB,
  ComponentC
} from '../example/module-keys';

ij.setModule(ComponentA, _ComponentA);
ij.setModule(ComponentB, MockComponentB);
ij.setModule(ComponentC, 'MockComponentC');

export default ij;
