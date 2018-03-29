import React, { Component } from 'react';
import axios from 'axios';

export default class Workitems_tag extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div
        className="wkt-wrap"
      >
        <div></div>
        <ul>
          <li>任务：</li>
          <li>缺陷：</li>
          <li>需求：</li>
        </ul>
      </div>
    );
  }
  componentDidMount() {
    console.log('doing')
    axios({
      method: 'GET',
      data: 'workitems',
      url: 'workitems_tag/getTaskInfo.json'
    }).then((res) => {

    });
  }
}