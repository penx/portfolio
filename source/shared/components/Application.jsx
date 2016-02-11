import React from 'react';

export default class ApplicationComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> Portfolio </h1>
        {this.props.children}
      </div>
    )
  }
}
