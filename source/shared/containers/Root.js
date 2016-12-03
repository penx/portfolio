// @flow

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Application from '../components/Application'

type Props = {
  children: React.PropTypes.element.isRequired,
}

// TODO: pass apiUrl in to preloadedState?
const store = configureStore()

const Root = (props: Props) =>
    (
      <Provider store={store}>
        <Application>
          {props.children}
        </Application>
      </Provider>
    )

export default Root
