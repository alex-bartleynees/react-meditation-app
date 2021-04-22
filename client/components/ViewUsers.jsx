import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUsers } from '../actions/actions'


const ViewUsers = ({dispatch}) => {

  dispatch(getUsers())

  return (

<div>
  
<div className="column has-text-centered">
  <h1 className="title is-1">Users:</h1>

</div>

<div className="column has-text-centered">
  <p className="subtitle"> Click on User to view Meditation data</p>
</div>


  <div className="column has-text-centered">
  <ul>
  
    
    </ul>
  </div>



    </div>

  )
}

export default connect()(ViewUsers)
