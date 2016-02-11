import React from 'react';

export default class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <h2> Index </h2>
        {this.props.children}
      </div>
    )
  }
}
