import ij from './injector-singleton';

import _ComponentA from './component-a';
import _ComponentB from './component-b';
import _ComponentC from './component-c';

import {
  ComponentA,
  ComponentB,
  ComponentC
} from './module-keys';

ij.setModule(ComponentA, _ComponentA);
ij.setModule(ComponentB, _ComponentB);
ij.setModule(ComponentC, _ComponentC);

export default ij;
