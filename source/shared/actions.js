import fetch from 'isomorphic-fetch'

export const REQUEST_PROJECT = 'REQUEST_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const SELECT_PROJECT = 'SELECT_PROJECT'
export const INVALIDATE_PROJECT = 'INVALIDATE_PROJECT'

export function selectProject(projectSlug) {
  return {
    type: SELECT_PROJECT,
    projectSlug
  }
}

export function invalidateProject(projectSlug) {
  return {
    type: INVALIDATE_PROJECT,
    projectSlug
  }
}

function requestProject(projectSlug) {
  return {
    type: REQUEST_PROJECT,
    projectSlug
  }
}

function receiveProject(projectSlug, json) {
  return {
    type: RECEIVE_PROJECT,
    projectSlug,
    title: 'test title',//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchProject(projectSlug) {
  return dispatch => {
    dispatch(requestProject(projectSlug));
    return fetch(`https://www.example.com`)
      .then(response => 'response.json()')
      .then(json => dispatch(receiveProject(projectSlug, json)));
  }
}

function shouldFetchProject(state, projectSlug) {
  const project = state.projects[projectSlug]
  if (!project) {
    return true
  } else if (project.isFetching) {
    return false
  } else {
    return project.didInvalidate
  }
}

export function fetchProjectIfNeeded(projectSlug) {
  return (dispatch, getState) => {
    if (shouldFetchProject(getState(), projectSlug)) {
      return dispatch(fetchProject(projectSlug))
    }
  }
}
