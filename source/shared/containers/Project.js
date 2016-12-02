import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchProjectIfNeeded } from '../actions'

class ProjectComponent extends Component {

  componentDidMount() {
    const { dispatch, selectedProject } = this.props;
    dispatch(fetchProjectIfNeeded(selectedProject));
  }

  render() {
    const { selectedProject, project, isFetching, lastUpdated } = this.props;
    return (
      <div>
        {isFetching && !project &&
          <h2>Loading...</h2>
        }
        {!isFetching && !project &&
          <h2>Empty.</h2>
        }
        {project &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        }
        <p>Go to <Link to='/'>index</Link></p>
        {this.props.children}
      </div>
    )
  }
}

ProjectComponent.propTypes = {
  selectedProject: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedProject, projects } = state;
  const {
    isFetching,
    lastUpdated,
    project
  } = projects[selectedProject] || {
    isFetching: true
  }

  return {
    selectedProject,
    isFetching,
    lastUpdated,
    project
  }
}

export default connect(mapStateToProps)(ProjectComponent)
