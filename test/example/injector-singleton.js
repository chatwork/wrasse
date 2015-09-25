// Because it is necessary to solve Injector instantiation before any import,
// it is cut out as a single source.

// import Injector from 'wrasse';
import Injector from '../../index.js';
const ij = new Injector();
export default ij;
