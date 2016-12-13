// @flow

import fetch from 'isomorphic-fetch'

import type { Project } from '../types/Project'

export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'

function requestProject(projectSlug: string) {
  return {
    type: REQUEST_PROJECT,
    projectSlug,
  }
}

function receiveProject(projectSlug: string, project: Project) {
  return {
    type: RECEIVE_PROJECT,
    projectSlug,
    result: project,
    receivedAt: Date.now(),
  }
}

function fetchProject(projectSlug) {
  // TODO: this fetches asynchronously, which is redundant on the server.
  // Need to access a direct cache synchronously so that initial page render
  // of a project contains current project in state
  return (dispatch) => {
    dispatch(requestProject(projectSlug))
    return fetch(`/api/project/${projectSlug}`)
      .then(response => response.json())
      .then(json => dispatch(receiveProject(projectSlug, json)))
  }
}

function shouldFetchProject(state, projectSlug) {
  const project = state.projects[projectSlug]
  if (!project) {
    return true
  } else if (project.isFetching) {
    return false
  }
  // TODO: handle invalid project object, e.g. project exists in state from
  // REQUEST_PROJECT but API returned error
  return project.didInvalidate
}

export function fetchProjectIfNeeded(projectSlug: string): ?Function {
  return (dispatch: Function, getState: Function) => {
    if (shouldFetchProject(getState(), projectSlug)) {
      return dispatch(fetchProject(projectSlug))
    }
    return undefined
  }
}
