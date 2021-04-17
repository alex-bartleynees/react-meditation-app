import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import AddUser from './AddUser'
import AddMeditation from './AddMeditation'
import ViewUsers from './ViewUsers'
import ViewMeditation from './ViewMeditation'


function AppRoutes(props) {


  return (
    <div>
      <Switch>
        <Route exact path='/' render={(routerProps) => (
          <Home
            {...routerProps} />
        )} />

        <Route exact path='/addUser' render={(routerProps) => (
          <AddUser
            {...routerProps} />
        )} />

        <Route exact path='/addMeditation' render={(routerProps) => (
          <AddMeditation
            {...routerProps} />
        )} />

        <Route exact path='/viewUsers' render={(routerProps) => (
          <ViewUsers
            {...routerProps} />
        )} />

        <Route path='/meditation/:id' render={(routerProps) => (
          <ViewMeditation
            {...routerProps} />
        )} />


      </Switch>
    </div>
  )
}

export default AppRoutes
