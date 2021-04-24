import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <nav className="navbar is-link is-spaced" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link to={'/'}>
          <div className="navbar-item">
            <img src='./images/buddha.png' width="50" height="50" />
          </div>
        </Link>
      </div>

      <div id="navbar" className="navbar-menu is-active">
        <div className="navbar-start">

        
        <a href="/addUser" className="navbar-item">
              Add User 
      </a>
         


          <a href="/addMeditation" className="navbar-item">
            Add Meditation
      </a>


          <a href="/viewUsers" className="navbar-item">
            View Meditations
      </a>

          <a href="/delete" className="navbar-item">
            Delete User
      </a>


        </div>
      </div>
    </nav>

  )
}

export default Header
