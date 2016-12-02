import { combineReducers } from 'redux'

import {
  SELECT_PROJECT,
  RECEIVE_PROJECT,
  REQUEST_PROJECT,
} from './actions'

// TODO: slug needs to come from route
function selectedProject(state = 'example_slug', action) {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.projectSlug
    default:
      return state
  }
}

function project(state = {
  isFetching: false,
  project: {},
}, action) {
  switch (action.type) {
    case REQUEST_PROJECT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_PROJECT:
      return Object.assign({}, state, {
        isFetching: false,
        project: action.project,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

function projects(state = { }, action) {
  switch (action.type) {
    case RECEIVE_PROJECT:
    case REQUEST_PROJECT:
      return Object.assign({}, state, {
        [action.projectSlug]: project(state[action.projectSlug], action),
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  projects,
  selectedProject,
})

export default rootReducer
