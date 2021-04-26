import React from 'react'
import { connect } from 'react-redux'


import AddUser from './AddUser'
import DeleteUser from './DeleteUser'
import ViewUsers from './ViewUsers'


import { getUsers } from '../actions/actions'
import { viewMeditation } from '../actions/actions'

const Home = ({ dispatch }) => {

  dispatch(getUsers())
  dispatch(viewMeditation())


  return (
    <>
      <div className="columns is-desktop is-centered">
        <div className="column has-text-centered m-3">
          <h1 className="title is-1">Welcome to Meditation Tracker</h1>
          <p className="subtitle m-2">Track how much time you've spent meditating!</p>
        </div>
      </div>
      <AddUser />
      <ViewUsers />
      <DeleteUser />


    </>
  )
}

export default connect()(Home)
