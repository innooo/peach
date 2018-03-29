import React, { Component } from 'react';

import './pending.css';

import WorktableCard from './../worktable_card/worktable_card'

export default class Pending extends Component {
  render() {
    return (
      <div className="pending-wrap">
        <WorktableCard
          title="待办"
          link=""
        >
          <div
            style={{fontSize: '20px', textAlign: 'center', padding: '10px 0'}}
          >
            恭喜你，已完成所有待办
          </div>
        </WorktableCard>
      </div>
    );
  }
}
