import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Application from './Application'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application children={this.props.children} />
      </Provider>
    )
  }
}

