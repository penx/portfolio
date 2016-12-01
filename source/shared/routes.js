import Root from './containers/Root';
import ArticleComponent from './components/Article';
import ProjectComponent from './containers/Project';

import React from 'react';
import { Route } from 'react-router';


export const routes = (
  <Route path="" component={Root}>
    <Route path="/" component={ArticleComponent} />
    <Route path="/project/:projectId" component={ProjectComponent} />
  </Route>
);
