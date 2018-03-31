import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './workitems.css';

import store from './../../redux/store';
import action from './../../redux/actions/testAction1';

import WorktableCard from './../worktable_card/worktable_card';
import WorkitemsTag from './../workitems_tag/workitems_tag';
import WorkitemsContent from './../workitems_content/workitems_content';

class Workitems extends Component {
  workitemHandleClick(e, tag) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(e.target.getAttribute('data-mark') != 'link') {
      this.props.history.push(this.props.match.path + '/' + tag);
    }
    store.dispatch(action('CLICK_WORKITEM_TAG',tag));
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
              type="待处理"           
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "pending")}
            />
            <WorkitemsTag
              tag="create"
              type="我创建"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "create")}
            />
            <WorkitemsTag
              tag="follow"
              type="我跟踪"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "follow")}
            />
            <WorkitemsTag
              tag="collect"
              type="我收藏"
              className="pending-item"
              onClick={(e) => this.workitemHandleClick(e, "collect")}
            />
          </div>
          <Switch>
            <Route path={`${props.match.path}/:tag`} component={WorkitemsContent} />
            <Route path={`${props.match.path}/:tag`} component={WorkitemsContent} />
            <Route path={`${props.match.path}/:tag`} component={WorkitemsContent} />
            <Route path={`${props.match.path}/:tag`} component={WorkitemsContent} />
          </Switch>
        </WorktableCard>
      </div>
    );
  }
}

export default withRouter(Workitems);
