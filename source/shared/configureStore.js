// @flow

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const DEBUG = process.env.NODE_ENV === 'development'
const logger = DEBUG ? require('redux-logger') : undefined

const middleware = [thunk]

if (logger) {
  middleware.push(logger())
}

export default function configureStore(preloadedState: ?Object) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
}
