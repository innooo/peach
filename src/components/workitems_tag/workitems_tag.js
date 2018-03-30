import React, { Component } from 'react';
import axios from 'axios';
import {
  Link,
  withRouter
} from 'react-router-dom';

import store from '../../redux/store';
import action from '../../redux/actions/testAction1';

import './workitems_tag.css';
import './../../mock/mock_worktable_workitems';

export default withRouter(class Workitems_tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: 0,
      bug: 0,
      req: 0,
      pending: 0
    }
  }
  render() {
    const { state, props } = this;
    return (
      <div
        className={"wkt-wrap " + props.className}
        onClick={(e) => props.onClick && props.onClick(e)}
      >
        <div
          className="wkt-left"
        >
          <h1>{state.pending}</h1>
          <p>待处理</p>
        </div>
        <ul
          className="wkt-right"
        >
          <li><Link to={`${props.match.path}/${props.tag}-task`}>任务：{state.task}</Link></li>
          <li><Link to={`${props.match.path}/${props.tag}-bug`}>缺陷：{state.bug}</Link></li>
          <li><Link to={`${props.match.path}/${props.tag}-req`}>需求：{state.req}</Link></li>
        </ul>
      </div>
    );
  }
  componentDidMount() {
    const me = this;
    axios({
      method: 'GET',
      data: {type: 'workitems_' + me.props.tag},
      url: 'workitems_tag/getTaskInfo.json'
    }).then((res) => {
      me.setState(res.data);
      store.dispatch(action('WORKITEM_' + me.props.tag.toUpperCase(), res.data));
    });
  }
});