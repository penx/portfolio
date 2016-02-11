import ApplicationComponent from './components/Application';
import IndexComponent from './components/Index';

import React from 'react';
import { Route } from 'react-router';


export const routes = (
  <Route path="" component={ApplicationComponent}>
    <Route path="/" component={IndexComponent} />
  </Route>
);
