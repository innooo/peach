import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

import './workitems.css';

import WorktableCard from './../worktable_card/worktable_card';
import WorkitemsTag from './../workitems_tag/workitems_tag';

const Test = () => {
  console.log('aaaa')
  return <div>aaaaaa</div>
}

class Workitems extends Component {
  workitemHandleClick(e) {
    e.stopPropagation();
    this.props.history.push(this.props.match.path + '/pending');
  }
  render() {
    const { props } = this;
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
          <Switch>
            <Route path={`${props.match.path}/pending`} component={Test} />
            <Route path={`${props.match.path}/create`} component={Test} />
            <Route path={`${props.match.path}/follow`} component={Test} />
            <Route path={`${props.match.path}/collect`} component={Test} />
          </Switch>
        </WorktableCard>
      </div>
    );
  }
}

export default withRouter(Workitems);
