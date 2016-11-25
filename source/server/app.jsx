import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { routes } from '../shared/routes';

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('index', {
        markup: renderToString(<RouterContext {...renderProps} />),
      });
    } else {
      console.log(routes);
      console.log(req.url);
      res.status(404).send('Not found');
    }

  });
});

app.listen(port, function() {
  console.log('Express listening on port ' + port);
});
