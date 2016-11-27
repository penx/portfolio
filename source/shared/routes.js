import ApplicationComponent from './components/Application';
import IndexComponent from './components/Index';
import SubPageComponent from './components/SubPage';

import React from 'react';
import { Route } from 'react-router';


export const routes = (
  <Route path="" component={ApplicationComponent}>
    <Route path="/" component={IndexComponent} />
    <Route path="/subpage" component={SubPageComponent} />
  </Route>
);
