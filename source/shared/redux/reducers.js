// @flow

import { combineReducers } from 'redux'

import {
  RECEIVE_PROJECT,
  REQUEST_PROJECT,
} from './actions'

import type { Project } from '../types/Project'
import type { Async } from '../types/Async'

function project(state: Async<Project> = {
  isFetching: false,
}, action): Async<Project> {
  let aproject: Async<Project>

  switch (action.type) {
    case REQUEST_PROJECT:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_PROJECT:
      aproject = {
        isFetching: false,
        result: action.result,
        lastUpdated: action.receivedAt,
      }
      return Object.assign({}, state, aproject)
    default:
      return state
  }
}

function projects(state: { [key: string]: Async<Project>} = { }, action) {
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
