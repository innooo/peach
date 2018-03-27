import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import './mainNav.css';

export default class MainNav extends Component {
  render() {
    return (
        <nav
          className="mainNav-wrap"
        >
            <NavLink
              to="/mine"
              className="mainNav"
              activeClassName="activeNav"
            >我的</NavLink>
            <NavLink
              to="/project"
              className="mainNav"
              activeClassName="activeNav"
            >项目</NavLink>
            <NavLink
              to="/service"
              className="mainNav"
              activeClassName="activeNav"
            >服务</NavLink>
        </nav>
    )
  }
}