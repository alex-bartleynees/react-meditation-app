import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUsers } from '../actions/actions'

const ViewUsers = ({ dispatch, users }) => {
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const filteredUsers = users.filter(el => el !== null)
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

          {filteredUsers.map(auser => {
            return <Link key={auser.id} to={`/meditation/${auser.id}`}>
              <div className="column has-text-centered">
                <li className="button is-success" key={auser.id}>{auser.name}
                </li>
              </div>
            </Link>
          })}

        </ul>
      </div>

    </div>

  )
}

const mapStateToProps = (globalState) => {
  return {
    users: globalState.users
  }
}

export default connect(mapStateToProps)(ViewUsers)
