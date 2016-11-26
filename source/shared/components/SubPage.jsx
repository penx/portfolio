import React from 'react';
import { Link } from 'react-router';

export default class SubPageComponent extends React.Component {
  render() {
    return (
      <div>
        <h2> Sub Page </h2>
        <p>Go to <Link to='/'>index</Link></p>
        {this.props.children}
      </div>
    )
  }
}
