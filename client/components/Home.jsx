import React from 'react'
import AddUser from './AddUser'
import DeleteUser from './DeleteUser'
import ViewMeditation from './ViewMeditation'
import ViewUsers from './ViewUsers'


const Home = () => {


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

export default (Home)
