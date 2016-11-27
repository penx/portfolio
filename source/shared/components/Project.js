import React from 'react';
import { Link } from 'react-router';

export default class ProjectComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Project</h2>
        <p>Go to <Link to='/'>index</Link></p>
        {this.props.children}
      </div>
    )
  }
}
