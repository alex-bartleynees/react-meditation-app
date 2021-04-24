import { before } from 'lodash'
import { RECEIVE_USERS, ADD_USER, DELETE_USER } from '../actions/actions'


function users (state = [], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users

      case ADD_USER:
        return [...state, 
          action.user
        ]

      case DELETE_USER:
        return state.filter((users) => users.name !== action.name )

      default:
      return state
  }
}

export default users