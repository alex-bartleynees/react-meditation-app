import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <nav className="navbar is-link is-spaced" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link to={'/'}>
          <div className="navbar-item">
            <img src='/images/buddha.png' width="50" height="50" />
          </div>
        </Link>

      </div>

      <div className="navbar-dropdown">

        <Link to={'/addUser'}><p className=" has-text-white navbar-item">
          Add User
        </p>
        </Link>
        <Link to={'/addMeditation'}><p className=" has-text-white navbar-item">
          Add Meditation
        </p>
        </Link>
        <Link to={'/viewUsers'}>
          <p className="has-text-white navbar-item">
            View Meditations
          </p>
        </Link>
        <Link to={'/timer'}><p className=" has-text-white navbar-item">
          Timer
        </p>
        </Link>
        <Link to={'/delete'}> <p className=" has-text-white navbar-item">
          Delete User
        </p>
        </Link>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">

          <Link to={'/addUser'}><p className=" has-text-white navbar-item">
            Add User
          </p>
          </Link>

          <Link to={'/addMeditation'}><p className=" has-text-white navbar-item">
            Add Meditation
          </p>
          </Link>

          <Link to={'/viewUsers'}>
            <p className="has-text-white navbar-item">
              View Meditations
            </p>
          </Link>

          <Link to={'/timer'}><p className=" has-text-white navbar-item">
          Timer
          </p>
          </Link>

          <Link to={'/delete'}> <p className=" has-text-white navbar-item">
            Delete User
          </p>
          </Link>

        </div>
      </div>
    </nav>

  )
}

export default Header
