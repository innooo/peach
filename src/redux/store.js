import { createStore } from 'redux';
import { combineReducers } from 'redux';

// 引入reducers
import mine_worktable_workitems from './reducers/reducer_worktable_workitems';
import testReducers2 from './reducers/testReducers2';

const allReducers = {
    mine_worktable_workitems: mine_worktable_workitems,
    test2: testReducers2
};

const rootReducers = combineReducers(allReducers);

let store = createStore(rootReducers);
export default store;