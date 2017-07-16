// import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import configureStore from './store/configure-store'
import createRoutes from './routes/index'
import { Provider } from 'react-redux'

import './styles/base.scss'

let reduxState = {}


const store = configureStore(reduxState)

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('root'))
