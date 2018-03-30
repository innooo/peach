import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import './workitems.css';

import WorktableCard from './../worktable_card/worktable_card';
import WorkitemsTag from './../workitems_tag/workitems_tag';

const Test = (props) => {
  console.log(props.match.params);
  return <div>aaaaaa</div>
}

class Workitems extends Component {
  workitemHandleClick(e, tag) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(e.target.matches('div')) {
      this.props.history.push(this.props.match.path + '/' + tag);
    }
    return true;
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
              onClick={(e) => this.workitemHandleClick(e, "pending")}
            />
            <WorkitemsTag
              tag="create"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "create")}
            />
            <WorkitemsTag
              tag="follow"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "follow")}
            />
            <WorkitemsTag
              tag="collect"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "collect")}
            />
          </div>
          <Switch>
            <Route path={`${props.match.path}/:tag`} component={Test} />
            <Route path={`${props.match.path}/:tag`} component={Test} />
            <Route path={`${props.match.path}/:tag`} component={Test} />
            <Route path={`${props.match.path}/:tag`} component={Test} />
          </Switch>
        </WorktableCard>
      </div>
    );
  }
}

export default withRouter(Workitems);
