import React from 'react';
import { Link } from 'react-router';

export default class ArticleComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Article</h2>
        <p>Go to <Link to='/project/example-slug'>a project</Link></p>
        {this.props.children}
      </div>
    )
  }
}
