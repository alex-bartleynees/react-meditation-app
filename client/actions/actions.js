
import request from 'superagent'
import { getAllUsers } from '../api'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const recieveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  }
}

export const loading = () => {
  return {
    type: 'LOADING'
  }
}


// thunk calling api function to access database 

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
    