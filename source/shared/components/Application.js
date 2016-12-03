// @flow

import React from 'react'

type Props = {
  children?: React.PropTypes.element.isRequired,
}

const ApplicationComponent = (props: Props) =>
  // TODO: Navigation - links to home, project list
  // TODO: Link to article list if there's more than one article
   (
     <div>
       <header className="application-header">
         <span className="application-title">Portfolio</span>
       </header>
       <section className="application-content">
         {props.children}
       </section>
     </div>
  )

export default ApplicationComponent
