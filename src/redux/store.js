import { createStore } from 'redux';
import { combineReducers } from 'redux';

// 引入reducers
import mine_worktable_workitems from './reducers/reducer_worktable_workitems';
import mine_worktable_workitems_click from './reducers/reducer_worktable_workitems_click';

const allReducers = {
    mine_worktable_workitems: mine_worktable_workitems,
    mine_worktable_workitems_click: mine_worktable_workitems_click,
};

const rootReducers = combineReducers(allReducers);

let store = createStore(rootReducers);
export default store;