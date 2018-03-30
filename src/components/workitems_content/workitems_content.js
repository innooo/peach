import React, { Component } from 'react';

export default class WorkitemsContent extends Component {
  render() {
    const { props } = this;
    return (
      <div>{props.match.params.tag}</div>
    );
  }
  componentDidMount() {
    
  }
}
