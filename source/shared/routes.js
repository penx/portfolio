import ApplicationComponent from './components/Application';
import ArticleComponent from './components/Article';
import ProjectComponent from './components/Project';

import React from 'react';
import { Route } from 'react-router';


export const routes = (
  <Route path="" component={ApplicationComponent}>
    <Route path="/" component={ArticleComponent} />
    <Route path="/subpage" component={ProjectComponent} />
  </Route>
);
