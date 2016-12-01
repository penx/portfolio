// 3rd party libs
import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import compression from 'compression';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

// my libs
import portfolioApi from 'portfolio-api';
import portfolioApiBlueprint from 'portfolio-api-blueprint';

// internal
import { routes } from '../shared/routes';

const app = express();
const port = process.env.PORT || 8080;
const config = {
  api: {
    type: 'blueprint' //TODO: allow to be set to url, module
  }
}

const apiUrl;

if(config.api.type === 'blueprint') {
  console.log('blueprint');
} else if (config.api.type === 'module') {
  // map given module to express path
} else if (config.api.type === 'url') {
  apiUrl = config.api.url;
}

app.use(compression());

app.set('view engine', 'ejs');

app.use('/styles', express.static(path.join(__dirname, '../styles')))
app.use('/client', express.static(path.join(__dirname, '../client')))

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
