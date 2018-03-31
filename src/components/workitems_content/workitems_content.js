import React, { Component } from 'react';
import axios from 'axios';

import './../../mock/mock_worktable_workitems_content';

export default class WorkitemsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workitemList: []
    }
  }
  render() {
    const { state, props } = this;
    let workitemList = state.workitemList.map((v, k) => {
      return <li key={v.id}>
        <span>提交日期： {v.date}</span>
        <span>优先级： {v.priority}</span>
        <span>状态： {v.status}</span>
        <span>内容： {v.content}</span>
        <span>类型：  {v.type}</span>
        <span>最近更新：   {v.latest}</span>
      </li>
    });
    return (
      <ul>{workitemList}</ul>
    );
  }
  componentDidMount() {
    const me = this;
    if(false) {
      let tag = this.props.match.params.tag.split('-')[0];
      let item = this.props.match.params.tag.split('-')[1];
      axios({
        url: 'workitems_tag/content/getTaskInfo.json',
        data: {tag: tag, item: item},
      }).then((res) => {
        console.log(res);
      });
    }
  }
  componentWillReceiveProps(nextProps, nextState) {
    const me = this;
    let tag = nextProps.match.params.tag.split('-')[0];
    let item = nextProps.match.params.tag.split('-')[1];
    axios({
      url: 'workitems_tag/content/getTaskInfo.json',
      data: {tag: tag, item: item},
    }).then((res) => {
      console.log(res.data);
      me.setState({
        workitemList: res.data
      });
    });
  }
}
