import { createStore } from 'redux';
import { combineReducers } from 'redux';

// 引入reducers
import testReducers1 from './reducers/testReducers1';
import testReducers2 from './reducers/testReducers2';

const allReducers = {
    test1: testReducers1,
    test2: testReducers2
};

const rootReducers = combineReducers(allReducers);

let store = createStore(rootReducers);
export default store;