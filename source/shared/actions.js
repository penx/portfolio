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
    project: json,
    receivedAt: Date.now()
  };
}

function fetchProject(projectSlug) {
  // TODO: this fetches asynchronously, which is redundant on the server.
  // Need to access a direct cache synchronously so that initial page render
  // of a project contains current project in state
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
    // TODO: handle invalid project object, e.g. project exists in state from
    // REQUEST_PROJECT but API returned error
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
