import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import AddUser from './AddUser'


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
          {...routerProps}  />
        )} />
        
      </Switch>
    </div>
  )
}

export default AppRoutes
