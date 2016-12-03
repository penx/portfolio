// @flow

import React from 'react'
import { Link } from 'react-router'

type Props = {
  children: React.PropTypes.element.isRequired,
}

const ArticleComponent = (props: Props) =>
  // TODO: Load article and list of projects via API
   (
      // TODO: seperate component/page for project list
     <div>
       <h2>Title</h2>
       <ul>
         <li><Link to="/project/example-slug">project 1</Link></li>
         <li><Link to="/project/example-slug-2">project 2</Link></li>
         <li><Link to="/project/example-slug-3">project 3</Link></li>
       </ul>
       {props.children}
     </div>
    )

export default ArticleComponent
