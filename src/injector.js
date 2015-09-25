import assert from 'assert';

export default class Injector {
  /**
   * @constructor
   */
  constructor() {
    this.dependencies = new Map();
    this.modules = new Map();
  }

  /**
   * @decoratable
   * @param  {{[string]: Symbol}} keys
   * @return {(target: Function): void}
   */
  inject(keys) {
    assert(typeof keys === 'object', 'keys is not an object');
    return (target) => {
      this.dependencies.set(target, keys);
    };
  }

  /**
   * @param  {Function} target - class constructor
   * @return {object}   dependencies
   */
  getDependencies(target) {
    assert(typeof target === 'function', 'the target constructor is not a function');
    const prod = {};
    const dependencies = this.dependencies.get(target);
    for (const modName in dependencies) {
      if (!Object.hasOwnProperty.call(dependencies, modName)) { break; }
      prod[modName] = this.modules.get(dependencies[modName]);
    }
    return prod;
  }

  /**
   * @param  {Symbol} key
   * @param  {*}      value
   * @return {void}
   */
  setModule(key, value) {
    assert(typeof key === 'symbol', 'key is not a symbol');
    assert(value !== void 0, `${key.toString()}: value is not defined`);
    this.modules.set(key, value);
  }
}
