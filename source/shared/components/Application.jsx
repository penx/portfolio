import React from 'react';

export default class ApplicationComponent extends React.Component {
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
