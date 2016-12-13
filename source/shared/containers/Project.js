// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchProjectIfNeeded } from '../redux/actions'
import type { Project as ProjectType } from '../types/Project'
import type { Async } from '../types/Async'

type Props = {
  children: Element,
  dispatch: () => void,
  isFetching: bool,
  lastUpdated: number,
  project: ProjectType,
  selectedProject: string,
}

class ProjectComponent extends Component {

  componentDidMount() {
    const { dispatch, selectedProject } = this.props
    dispatch(fetchProjectIfNeeded(selectedProject))
  }

  props: Props

  render() {
    const { selectedProject, project, isFetching, lastUpdated, children } = this.props

    return (
      <div>
        {isFetching && (!project) &&
          <h2>Loading...</h2>
        }
        {!isFetching && !project &&
          <h2>Empty: {selectedProject}</h2>
        }
        {project &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <h2>{project.title}</h2>
            <p>Date: {project.date}</p>
            <p>{project.description}</p>
            {project.clients && project.clients.length === 1 &&
            <p>Client: {project.clients}</p> }
            {project.clients && project.clients.length > 1 &&
            <p>Clients: {project.clients}</p> }
            <p>Role: {project.role}</p>
            <p>{project.technologies.join(', ')}</p>
            <p>{selectedProject}, {lastUpdated}</p>
          </div>
        }
        <p>Go to <Link to="/">index</Link></p>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const selectedProject: string = props.routeParams.projectId
  const { projects } : { projects: { [key: string]: Async<ProjectType>} } = state

  const { lastUpdated, isFetching, result: project }
    = projects[selectedProject] || { isFetching: true, lastUpdated: undefined, result: undefined }

  return {
    selectedProject,
    isFetching,
    lastUpdated,
    project,
  }
}

export default connect(mapStateToProps)(ProjectComponent)
