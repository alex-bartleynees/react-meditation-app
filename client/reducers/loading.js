function loadingReducer (state = false, action) {
  switch (action.type) {
    case 'LOADING':
      return true
    case 'RECEIVE_USERS':
      return false

    case 'ADD_USER':
      return false

    default:
      return state
  }
}

export default loadingReducer
