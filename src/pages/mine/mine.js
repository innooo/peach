import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './mine.css';

// 引入路由所需要的组件
import SubNav from './../../components/subNav/subNav';
import Worktable from './../worktable/worktable';
import Task from './../task/task';
import ChangeList from './../changeList/changeList';
import Application from './../application/application';
import Test from './../test/test';
import Code from './../code/code';
import Workitems from './../workitems/workitems';
import Metric from './../metric/metric';
import More from './../more/more';
import Setting from './../setting/setting';

export default class Mine extends Component {
  render() {
    const props = this.props;
    return (
      <Router>
        <div
          className="mine-main"
        >
          <SubNav
            path={props.match.path}
            className="mine-nav"
          />
          <div
            className="mine-content"
          >
            <Switch>
              <Route
                path={`${props.match.path}/worktable`}
                component={Worktable}
              ></Route>
              <Route
                path={`${props.match.path}/task`}
                component={Task}
              ></Route>
              <Route
                path={`${props.match.path}/changeList`}
                component={ChangeList}
              ></Route>
              <Route
                path={`${props.match.path}/application`}
                component={Application}
              ></Route>
              <Route
                path={`${props.match.path}/test`}
                component={Test}
              ></Route>
              <Route
                path={`${props.match.path}/code`}
                component={Code}
              ></Route>
              <Route
                path={`${props.match.path}/workitems`}
                component={Workitems}
              ></Route>
              <Route
                path={`${props.match.path}/metric`}
                component={Metric}
              ></Route>
              <Route
                path={`${props.match.path}/more`}
                component={More}
              ></Route>
              <Route
                path={`${props.match.path}/setting`} 
                component={Setting}
              ></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}