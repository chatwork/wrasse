/* usage */
import wr from './register-dependencies';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './module-keys';

@wr.inject({
  ComponentA,
  ComponentB
})
export class SuperApplication {
  /**
   * @constructor
   */
  constructor() {
    //
  }

  getComponentC() {
    return this.ComponentC;
  }
}

@wr.inject({
  ComponentC
})
export class Application extends SuperApplication {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  useComponentB(str) {
    return new this.ComponentB(str).text();
  }

  getComponentC() {
    return this.ComponentC;
  }
}
