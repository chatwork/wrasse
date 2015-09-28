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
