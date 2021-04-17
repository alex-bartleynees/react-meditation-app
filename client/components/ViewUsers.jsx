import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {getAllUsers} from '../api/index'

const ViewUsers = () => {


  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
        .then((res) => {
            setUsers(res)
        })
}, [])


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
   {users.map(auser => {
      return <Link key={auser.id} to={`/meditation/${auser.id}`}>  <div className="column has-text-centered"><li className="button is-success"  key={auser.id}>{auser.name} </li> </div>  </Link> 
    })}
    
    </ul>
  </div>



    </div>

  )
}

export default ViewUsers
