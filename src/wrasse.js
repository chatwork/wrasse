export default class Wrasse {
  /**
   * @constructor
   */
  constructor() {
    this.dependencies = new Map();
    this.modules = new Map();
  }

  /**
   * @decoratable
   * @param  {{[string]: String|Symbol}} keys
   * @return {(target: Function): void}
   */
  inject(keys) {
    return (target) => {
      this.dependencies.set(target, keys);
      const deps = this.dependencies.get(target);
      for (const modKey in deps) {
        if (!Object.hasOwnProperty.call(deps, modKey)) { break; }
        target.prototype[modKey] = this.modules.get(deps[modKey]);
      }
      return target;
    };
  }

  /**
   * @param  {String|Symbol} key
   * @param  {*}             value
   * @return {void}
   */
  set(key, value) {
    this.modules.set(key, value);
  }
}
