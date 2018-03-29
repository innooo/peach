import React, { Component } from 'react';

import './worktable_card.css';

export default class Worktable_card extends Component {
  render() {
      const props = this.props;
    return (
      <div className="wkc-wrap">
        <header
          className="wkc-title"
        >
          <h2>{props.title}</h2>
          <div
            className="wkc-title-link"
            style={props.titleLinkStyle}
          >
          {props.link}
          </div>
        </header>
        
        <section
          className="wkc-content"
        >
          {props.children}
        </section>
      </div>
    );
  }
}
