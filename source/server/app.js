/* eslint-disable no-console */
// @flow

// 3rd party libs
import React from 'react'
import express from 'express'
import compression from 'compression'
import path from 'path'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

// my libs
// import portfolioApi from 'portfolio-api'
import portfolioApiBlueprint from 'portfolio-api-blueprint'

// internal
import routes from '../shared/routes'

const app = express()
const reactApp = express()
const port = process.env.PORT || 8080

// TODO: import config from a js file with a .default included in git
// - allow to be set to url, module.
const config = {
  api: {
    type: 'blueprint',
  },
}

// let apiUrl

if (config.api.type === 'blueprint') {
  app.use('/api', portfolioApiBlueprint)
  // apiUrl = 'http://localhost:8080/api'
} else if (config.api.type === 'module') {
  // map given module to express path
  app.use('/api', config.api.module)
  // apiUrl = 'http://localhost:8080/api'
} else if (config.api.type === 'url') {
  // apiUrl = config.api.url
}

// TODO: send api url through to react app in a way that can be accessed by
// client and server - perhaps add in to state on the server, or add as data
// prop in ejs template?
reactApp.use(compression())
reactApp.set('view engine', 'ejs')
reactApp.use('/static', express.static(path.join(__dirname, '../../static')))
reactApp.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', {
        markup: renderToString(<RouterContext {...renderProps} />),
      })
    } else {
      console.log(routes)
      console.log(req.url)
      res.status(404).send('Not found')
    }
  })
})

app.use('/', reactApp)
app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})
