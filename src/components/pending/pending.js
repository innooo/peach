import React, { Component } from 'react';

import store from './../../redux/store';

import './pending.css';

import WorktableCard from './../worktable_card/worktable_card'

export default class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingCount: 0
    }
  }
  render() {
    const { state } = this;
    return (
      <div className="pending-wrap">
        <WorktableCard
          title="待办"
          link=""
        >
          <div
            style={{fontSize: '20px', textAlign: 'center', padding: '10px 0'}}
          >
            {state.pendingCount == 0 ? "恭喜你，已完成所有待办" : "你还有" + state.pendingCount + "个待办事项"}
          </div>
        </WorktableCard>
      </div>
    );
  }
  componentDidMount() {
    const me = this;
    store.subscribe(() => {
      console.log('pending', store.getState());
      let pendingCount = 0;
      let workitemsState = store.getState();
      for(let item in workitemsState.mine_worktable_workitems) {
        pendingCount += workitemsState.mine_worktable_workitems[item].pending;
      }
      me.setState({
        pendingCount: pendingCount
      });
    });
  }
}
