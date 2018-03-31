import React, { Component } from 'react';

import './workitems.css';

import WorktableCard from './../worktable_card/worktable_card';
import WorkitemsTag from './../workitems_tag/workitems_tag';

export default class Workitems extends Component {
  workitemHandleClick(e) {
    e.target.classList.add('pending-item-now'); // 更改点击后活动的样式
    console.log(e.target)
  }
  render() {
    return (
      <div className="pending-wrap">
        <WorktableCard
          title="工作项"
          link="进入我的工作项"
        >
          <div
            className="pending-item-wrap"
          >
            <WorkitemsTag 
              tag="pending"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e)}
            />
            <WorkitemsTag 
              tag="create" 
              className="pending-item" 
            />
            <WorkitemsTag 
              tag="follow" 
              className="pending-item" 
            />
            <WorkitemsTag 
              tag="collect" 
              className="pending-item" 
            />
          </div>
        </WorktableCard>
      </div>
    );
  }
}
