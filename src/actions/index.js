import {
  FETCH_JSON,
  POST_JSON,
  RECEIVE_CONTENT,
  API_DELETE
} from '../utils/fetch-api'

export function testAction(paramName) {
  return {
    type: 'TEST_ACTION', //TODO: Store in constants file
    payload: paramName,
  }
}

export const apiGet = (url, type) => {
  console.log(`${type} --> GET ${url} `)

  return dispatch => {
    FETCH_JSON(url)
    .then(data => dispatch(
      RECEIVE_CONTENT({
        data,
        type,
      })
    )).catch(error => {
      console.log('Promise Rejected', error);
    })
  }
}

export const apiPost = (url, data, type) => {
  console.log(`${type} --> POST ${url} `)

  return dispatch => {
    POST_JSON(url, data)
    .then(data => dispatch(
      RECEIVE_CONTENT({
        data,
        type,
      })
    )).catch(error => {
      console.log('Promise Rejected', error);
    })
  }
}

export const apiDelete = (url, type) => {
  console.log(`${type} --> DELETE ${url} `)

  return dispatch => {
    FETCH_JSON(url, 'DELETE')
    .then(data => dispatch(
      RECEIVE_CONTENT({
        data,
        type,
      })
    )).catch(error => {
      console.log('Promise Rejected', error);
    })
  }
}
