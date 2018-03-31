import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import './subNav.css';

export default class SubNav extends Component {
  render() {
    const props = this.props;
    return (
      <nav className="subNav-wrap">
        <NavLink
            to={`${props.path}/worktable`}
            className="subNav"
            activeClassName="subNav-active"
        >工作台</NavLink>
        <NavLink
            to={`${props.path}/task`}
            className="subNav"
            activeClassName="subNav-active"
        >任务</NavLink>
        <NavLink
            to={`${props.path}/changeList`}
            className="subNav"
            activeClassName="subNav-active"
        >变更</NavLink>
        <NavLink
            to={`${props.path}/application`}
            className="subNav"
            activeClassName="subNav-active"
        >应用</NavLink>
        <NavLink
            to={`${props.path}/test`}
            className="subNav"
            activeClassName="subNav-active"
        >测试</NavLink>
        <NavLink
            to={`${props.path}/code`}
            className="subNav"
            activeClassName="subNav-active"
        >代码</NavLink>
        <NavLink
            to={`${props.path}/workitems`}
            className="subNav"
            activeClassName="subNav-active"
        >工作事项</NavLink>
        <NavLink
            to={`${props.path}/metric`}
            className="subNav"
            activeClassName="subNav-active"
        >度量</NavLink>
        <NavLink
            to={`${props.path}/more`}
            className="subNav"
            activeClassName="subNav-active"
        >更多</NavLink>
        <NavLink
            to={`${props.path}/setting`}
            className="subNav"
            activeClassName="subNav-active"
        >设置</NavLink>
      </nav>
    );
  }
}