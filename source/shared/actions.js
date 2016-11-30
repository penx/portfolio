import fetch from 'isomorphic-fetch';

export const REQUEST_PROJECT = 'REQUEST_PROJECT';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

function requestProject(projectSlug) {
  return {
    type: REQUEST_PROJECT,
    projectSlug
  };
}

function receiveProject(projectSlug, json) {
  return {
    type: RECEIVE_PROJECT,
    projectSlug,
    title: json.title,
    receivedAt: Date.now()
  };
}

function fetchProject(projectSlug) {
  return dispatch => {
    dispatch(requestProject(projectSlug));
    return fetch(`http://localhost:8081/project/${projectSlug}`)
      .then(response => response.json())
      .then(json => dispatch(receiveProject(projectSlug, json)));
  };
}

function shouldFetchProject(state, projectSlug) {
  const project = state.projects[projectSlug];
  if (!project) {
    return true;
  } else if (project.isFetching) {
    return false;
  } else {
    return project.didInvalidate;
  }
}

export function fetchProjectIfNeeded(projectSlug) {
  return (dispatch, getState) => {
    if (shouldFetchProject(getState(), projectSlug)) {
      return dispatch(fetchProject(projectSlug));
    }
  }
}
