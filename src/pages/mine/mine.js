import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// 引入路由所需要的组件
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
      <div>
        <Router>
          <div>
            <Link to={`${props.match.path}/worktable`}>工作台</Link>
            <Link to={`${props.match.path}/task`}>任务</Link>
            <Link to={`${props.match.path}/changeList`}>变更</Link>
            <Link to={`${props.match.path}/application`}>应用</Link>
            <Link to={`${props.match.path}/test`}>测试</Link>
            <Link to={`${props.match.path}/code`}>代码</Link>
            <Link to={`${props.match.path}/workitems`}>工作事项</Link>
            <Link to={`${props.match.path}/metric`}>度量</Link>
            <Link to={`${props.match.path}/more`}>更多</Link>
            <Link to={`${props.match.path}/setting`}>设置</Link>
            <Switch>
              <Route path={`${props.match.path}/Worktable`} component={Worktable}></Route>
              <Route path={`${props.match.path}/Task`} component={Task}></Route>
              <Route path={`${props.match.path}/changeList`} component={ChangeList}></Route>
              <Route path={`${props.match.path}/application`} component={Application}></Route>
              <Route path={`${props.match.path}/test`} component={Test}></Route>
              <Route path={`${props.match.path}/code`} component={Code}></Route>
              <Route path={`${props.match.path}/workitems`} component={Workitems}></Route>
              <Route path={`${props.match.path}/metric`} component={Metric}></Route>
              <Route path={`${props.match.path}/more`} component={More}></Route>
              <Route path={`${props.match.path}/setting`} component={Setting}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}