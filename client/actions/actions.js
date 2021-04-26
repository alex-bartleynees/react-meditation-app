
import { getAllUsers, addUser, getAllMeditations, deleteUser, addMeditation } from '../api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const VIEW_MEDITATION = 'VIEW_MEDITATION'
export const DELETE_USER = 'DELETE_USER'
export const SHOW_ERROR = 'SHOW_ERROR'
export const HIDE_ERROR = 'HIDE_ERROR'

export const recieveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  }
}

export const viewAMeditation = (meditation) => {
  return {
    type: VIEW_MEDITATION,
    meditation: meditation
  }
}

export const deleteAUser = (name) => {
  return {
    type: DELETE_USER,
    name: name
  }
}

export const loading = () => {
  return {
    type: 'LOADING'
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR
  }
}

// thunk calling api function to access database 
// LET'S GET THUNKKY!

export const getUsers = () => {
  return (dispatch) => getAllUsers()
    .then((res) => {
      dispatch(recieveUsers(res))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
}

export const addNewUser = (user) => {
  return (dispatch) => addUser(user)
    .catch(err => {
      dispatch(showError(err.message))
    })
}

export const viewMeditation = () => {
  return (dispatch) => getAllMeditations()
    .then((res) => {
      dispatch(viewAMeditation(res))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
}

export const deleteUserName = (user) => {
  return (dispatch) => deleteUser(user)
    .catch(err => {
      dispatch(showError(err.message))
    })

}

export const addAMeditation = (meditation) => {
  return (dispatch) => addMeditation(meditation)
    .catch(err => {
      dispatch(showError(err.message))
    })
}