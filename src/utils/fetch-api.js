import fetch from 'isomorphic-unfetch'

export const FETCH_JSON = (url, method = 'get', headers = {accept: 'application/json'}) =>
  fetch(url, { method, headers })
    .then(res => {
      if ( res.status < 400 ) {
        return res.json()
      } else {
        return new Promise((resolve, reject) => {
          res.text().then(text => {
            try {
              const json = JSON.parse(text)
              reject(new Error(json))
            } catch(ex) {
              reject(new Error(text))
            }
          })
        })
      }
    })

export const POST_JSON = (url, data, method = 'post', headers = {'Content-Type': 'application/x-www-form-urlencoded'}, json=false) => {
  let str = ''

  if (json) {

    for (let key in data) {
      if (str != '') {
        str += '&'
      }

      str += `${key}=${encodeURIComponent(data[key])}`
    }
  } else {
    str = data
    headers = {
      ...headers,
      'Content-Type': 'application/json'
    }
  }

  return fetch(url, {
    method: method,
    headers: headers,
    body: str,
  }).then(res => {
      if ( res.status < 400 ) {
        return res.json()
      } else {
        return new Promise((resolve, reject) => {
          res.text().then(text => {
            try {
              const json = JSON.parse(text)
              reject(new Error(json))
            } catch(ex) {
              reject(new Error(text))
            }
          })
        })
      }
    })
}

export const RECEIVE_CONTENT = (payload) => {
  return {
    type: 'RECEIVE_CONTENT',
    payload: payload,
  }
}

export const API_DELETE = (url) => {
  var request = new Request(url, {
  	method: 'DELETE',
  	mode: 'cors',
  	headers: new Headers({
  		'Content-Type': 'text/plain',
  	})
  });


  return fetch(request).then(res => {
      if ( res.status < 400 ) {
        return res.json()
      } else {
        return new Promise((resolve, reject) => {
          res.text().then(text => {
            try {
              const json = JSON.parse(text)
              reject(new Error(json))
            } catch(ex) {
              reject(new Error(text))
            }
          })
        })
      }
  })
}
