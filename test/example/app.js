/* usage */
import ij from './register-dependencies';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './module-keys';

@ij.inject({
  ComponentA,
  ComponentB,
  ComponentC
})
export default class Application {
  /**
   * @constructor
   */
  constructor() {
    const {ComponentA} = ij.getDependencies(Application);
    this.ComponentA = ComponentA;
  }

  useComponentB(str) {
    const {ComponentB} = ij.getDependencies(Application);
    return new ComponentB(str).text();
  }

  dependenciesItems() {
    return ij.getDependencies(Application);
  }
}
