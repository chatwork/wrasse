export default class ComponentB {
  constructor(v) {
    this.v = v;
  }

  text() {
    return `This is ComponentB, ${this.v}`;
  }
}
