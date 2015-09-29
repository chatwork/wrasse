# wrasse
JavaScript dependency injection with the Decorators syntax.

## Installing
```
npm i -S wrasse
```

## Getting Started
First, you can instantiate Wrasse and it needs export. Because it is necessary to solve Wrasse instantiation before any import, it is cut out as a single source.

For example, as `wrasse-singleton.js`.

```js
import Wrasse from 'wrasse';
const wr = new Wrasse();
export default wr;
```

---

Second, you can set a module. You must register the key to get the module.

`register-dependencies.js`

```js
import wr from './wrasse-singleton';

import _ComponentA from './component-a';
import _ComponentB from './component-b';
import _ComponentC from './component-c';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './module-keys';

wr.set(ComponentA, _ComponentA);
wr.set(ComponentB, _ComponentB);
wr.set(ComponentC, _ComponentC);

export default wr;
```

`module-keys.js`

```js
export const ComponentA = Symbol('ComponentA');
export const ComponentB = Symbol('ComponentB');
export const ComponentC = Symbol('ComponentC');

// Or, it can also be a string.

// export const ComponentA = 'ComponentA';
// export const ComponentB = 'ComponentB';
// export const ComponentC = 'ComponentC';
```

## Usage
You can use the inject in your implementation with Babel.
(TypeScript is unverified. We have plan to support.)

```
babel --optional es7.decorators
```

```js
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
  constructor() {
    console.log(this.ComponentA); // this.ComponentA, this.ComponentB, this.ComponentC are stored.
  }
}
```

## API
- `Wrasse() @constructor`
- `Wrasse#set(key: string|Symbol, module: any): void`
- `Wrasse#inject(keys: {[key: string]: string|Symbol}): (target) => target @decoratable`

## Author
- [OKUNOKENTARO @armorik83](https://github.com/armorik83)

## License
MIT
https://github.com/chatwork/wrasse/blob/master/LICENSE
