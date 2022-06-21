import { createStore } from 'redux';
// reducer层的拆离
import reducer from '../reducers/count';
const store = createStore(reducer);

export default store;