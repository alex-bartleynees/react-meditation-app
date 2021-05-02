import { RECEIVE_USERS, DELETE_USER } from '../actions/actions'

function users (state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users

    case DELETE_USER:
      return state.filter((users) => users.name !== action.name)

    default:
      return state
  }
}

export default users
