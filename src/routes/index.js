import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import configureStore from '../store/configure-store'

import MainContainer from '../containers/main-container'

export default function(history) {
  return (
    <Router history={history}>
      <Route exact path="/" component={MainContainer} />
    </Router>
  )
}
