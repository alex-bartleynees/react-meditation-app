import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import AddUser from './AddUser'
import AddMeditation from './AddMeditation'
import ViewUsers from './ViewUsers'
import ViewMeditation from './ViewMeditation'
import DeleteUser from './DeleteUser'


function AppRoutes(props) {


  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
    

        <Route exact path='/addUser' component={AddUser} />
     

        <Route exact path='/addMeditation' component={AddMeditation} />

        <Route exact path='/viewUsers' component={ViewUsers} />

        <Route path='/meditation/:id' component={ViewMeditation} />

        <Route path='/delete' component={DeleteUser} />

      </Switch>
    </div>
  )
}

export default AppRoutes
