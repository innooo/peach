import React, { Component } from 'react';

import './workitems.css';

import WorktableCard from './../worktable_card/worktable_card';
import WorkitemsTag from './../workitems_tag/workitems_tag';

export default class Workitems extends Component {
  render() {
    return (
      <div className="pending-wrap">
        <WorktableCard
          title="工作项"
          link="进入我的工作项"
        >
          <WorkitemsTag />
        </WorktableCard>
      </div>
    );
  }
}
