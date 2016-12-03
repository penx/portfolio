// @flow

import React from 'react'
import { Route } from 'react-router'

import Root from './containers/Root'
import ArticleComponent from './components/Article'
import ProjectComponent from './containers/Project'

export default (
  <Route path="" component={Root}>
    <Route path="/" component={ArticleComponent} />
    <Route path="/project/:projectId" component={ProjectComponent} />
  </Route>
)
