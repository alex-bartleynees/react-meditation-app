import { combineReducers } from 'redux'

import users from './usersReducer'
import loadingReducer from './loading'
import meditations from './meditationReducer'
import errorMessage from './errorMessage'
export default combineReducers({
  users,
  meditations,
  loadingReducer,
  errorMessage
})
