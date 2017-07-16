let defaultState = {
  test: null
}

export default function(state = defaultState, action) {

  switch(action.type) {
    case 'TEST_ACTION': //TODO: get from constants file
      console.log('reducer matched')

      return {
        ...state,
      }

      break
    case 'RECEIVE_CONTENT':

      switch (action.payload.type) {

        case 'getData':

          return {
            ...state,
            data: action.payload.data,

          }

          break
        default:
          return state
      }
      break

    default:
      return state
  }
}
