
import { getAllUsers, addUser, getAllMeditations } from '../api'


export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const VIEW_MEDITATION = 'VIEW_MEDITATION'
export const DELETE_USER = 'DELETE_USER'

export const recieveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  }
}

export const addAUser = (user) =>{
  return {
    type: ADD_USER,
    user: user[0]
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


// thunk calling api function to access database 
// LET'S GET THUNKKY!

export const getUsers = () => {
  return (dispatch) => {
    dispatch(loading())
  return getAllUsers()
    .then((res) => { 
      console.log(res)
       dispatch(recieveUsers(res))
       return null
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
  }

  export const addNewUser = (user) => {
    return (dispatch) => {
      dispatch(loading())
      return addUser(user)
      .then((res) => {
        console.log(res)
        dispatch(addAUser(res))
        return null
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
  }

export const viewMeditation = () => {
  return (dispatch) => {
    dispatch(loading())
    return getAllMeditations()
    .then((res) => {
      dispatch(viewAMeditation(res))
      return null
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  }
}