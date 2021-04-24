
import { combineReducers } from 'redux'

import users from './usersReducer'
import loadingReducer from './loading'
import meditations from './meditationReducer'

export default combineReducers({
  users,
  meditations,
  loadingReducer,
})