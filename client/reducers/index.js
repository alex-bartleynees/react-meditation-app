
import { combineReducers } from 'redux'

import users from './usersReducer'
import loadingReducer from './loading'

export default combineReducers({
  users,
  loadingReducer,
})