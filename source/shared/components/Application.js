import React from 'react';

export default class ApplicationComponent extends React.Component {
  // TODO: Navigation - links to home, project list
  // TODO: Link to article list if there's more than one article
  render() {
    return (
      <div>
        <header className="application-header">
          <span className="application-title">Portfolio</span>
        </header>
        <section className="application-content">
          {this.props.children}
        </section>
      </div>
    )
  }
}
