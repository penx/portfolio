import React from 'react';
import { Link } from 'react-router';

export default class ArticleComponent extends React.Component {

  state = {
    title: "Article Title",
    content: "Content"
  }

  render() {
    const {title} = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <p>Go to <Link to='/project/example-slug'>a project</Link></p>
        {this.props.children}
      </div>
    )
  }
}
