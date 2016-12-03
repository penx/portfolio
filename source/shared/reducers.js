// @flow

import { combineReducers } from 'redux'

import {
  RECEIVE_PROJECT,
  REQUEST_PROJECT,
} from './actions'

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
})

export default rootReducer
