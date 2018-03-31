import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// 引入路由所需要的页面
import MainNav from './../../components/mainNav/mainNav'
import Mine from './../mine/mine';
import Project from './../project/project';
import Service from './../service/service';

export default class Homepage extends Component {
  render() {
    return (
    <Router>
      <div
        style={{height: '100%'}}
      >
        <MainNav />
        <Route path="/mine" component={Mine}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/service" component={Service}></Route>
      </div>
    </Router>
    )
  }
}