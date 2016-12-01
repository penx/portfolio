import React from 'react';
import { Link } from 'react-router';

export default class ArticleComponent extends React.Component {

  state = {
    title: "Article Title",
    content: "Content"
  }

  render() {
    // TODO: List of projects to come from state
    const {title} = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <li><Link to='/project/example-slug'>project 1</Link></li>
          <li><Link to='/project/example-slug-2'>project 2</Link></li>
          <li><Link to='/project/example-slug-3'>project 3</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
