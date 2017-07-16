import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import SampleComponent from '../components/sample-component'

import {
  apiGet,
} from '../actions'

class MainContainer extends Component {

  getData() {
    const url = 'https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid=2460286&format=json'
    this.props.dispatch(apiGet(url, 'getData'))
  }

  render() {
    return (
      <div>
        <p>Main container</p>
        {this.props.children}
        <SampleComponent data={this.props.testReducer.data} onSubmit={event => {this.getData()}} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    ...store
  }
}
export default connect(mapStateToProps)(MainContainer)
