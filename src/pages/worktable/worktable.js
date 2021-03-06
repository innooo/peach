import React, { Component } from 'react';
import './worktable.css';

import Pending from './../../components/pending/pending';
import Workitems from './../../components/workitems/workitems';

export default class Worktable extends Component {
  render() {
    const { props } = this;
    return (
      <div
        className="wt-wrap"
      >
        <section
          className="wt-content"
        >
          <Pending />
          <Workitems path={props.match.path} />
        </section>
        <aside
         className="wt-side"
        >
        right
        </aside>
      </div>
    );
  }
}