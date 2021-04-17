 import React, { useState } from 'react'
 import { useHistory } from 'react-router-dom'

 import {addUser} from '../api/index'

const AddUser = () => {

  let history = useHistory()

  const [user, setUser] = useState('')

  const update = (e) => {
    setUser(e.target.value)
  }

  const navigateToHome = () => {

    return history.push('/')
}

  const submitForm  = (e) => {
    e.preventDefault()
    const newUser = {
      'name': user
    }

    addUser(newUser)
    navigateToHome()
  }

  return (

    <div className="columns m-5">
      <div className="container is-max-widescreen">

        <form onSubmit={(e) => submitForm(e)} >

          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="userName" name="userName" className="label is-large">
                  User Name:
              <input className="input is-link is-rounded spacing is-large" type="text" name="userName" onChange={(e) => update(e)}/>
                </label>
              </div>
            </div>
          </div>


          <div className="column has-text-centered">
            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddUser
