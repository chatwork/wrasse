/* usage */
import wr from './register-dependencies';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './module-keys';

@wr.inject({
  ComponentA,
  ComponentB,
  ComponentC
})
export default class Application {
  /**
   * @constructor
   */
  constructor() {
    //
  }

  useComponentB(str) {
    return new this.ComponentB(str).text();
  }

  getComponentC() {
    return this.ComponentC;
  }
}
