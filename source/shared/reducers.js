import { combineReducers } from 'redux'
import {
  SELECT_PROJECT,
  INVALIDATE_PROJECT,
  RECEIVE_PROJECT,
  REQUEST_PROJECT
} from './actions'

function selectedProject(state = 'example_slug', action) {
  switch (action.type) {
  case SELECT_PROJECT:
    return action.project
  default:
    return state
  }
}

function projects(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_PROJECT:
    case RECEIVE_PROJECT:
    case REQUEST_PROJECT:
      return Object.assign({}, state, {
        [action.projectSlug]: ''
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  projects,
  selectedProject
})

export default rootReducer

