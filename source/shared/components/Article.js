import React from 'react';
import { Link } from 'react-router';

export default class ArticleComponent extends React.Component {

  state = {
    title: "Article Title",
    content: "Content"
  }

  render() {
    // TODO: Load article and list of projects via API
    const {title} = this.state;
    return (
      // TODO: seperate component/page for project list 
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
