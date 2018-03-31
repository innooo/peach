import React, { Component } from 'react';
import axios from 'axios';

import store from '../../redux/store';
import action from '../../redux/actions/testAction1';

import './workitems_tag.css';
import './../../mock/mock_worktable_workitems';

export default class Workitems_tag extends Component {
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
          <li>任务：<span>{state.task}</span></li>
          <li>缺陷：<span>{state.bug}</span></li>
          <li>需求：<span>{state.req}</span></li>
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
}