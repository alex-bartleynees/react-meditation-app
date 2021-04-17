import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { addMeditation } from '../api/index'

const AddMeditation = () => {
  let history = useHistory()

  const [state, setState] = useState('')

  const update = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const navigateToHome = () => {

    return history.push('/')
  }

  const submitForm = (e) => {
    e.preventDefault()
    const meditation = state
    addMeditation(meditation)
    navigateToHome()

  }

  return (
    <div className="columns m-5">
      <div className="container is-max-widescreen">

        <form onSubmit={(e) => submitForm(e)} >

          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="name" name="name" className="label is-large">
                  User Name:
                <input className="input is-link is-rounded spacing is-large" type="text" name="name" placeholder="Enter User Name" onChange={(e) => update(e)} />
                </label>
              </div>
            </div>
          </div>


          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="meditation" name="meditation" className="label is-large">
                  Type of Meditation:
                <input className="input is-link is-rounded spacing is-large" type="text" name="meditation" placeholder="Enter Meditation" onChange={(e) => update(e)} />
                </label>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="time" name="time" className="label is-large">
                  Time:
                <input className="input is-link is-rounded spacing is-large" type="text" name="time" placeholder="Enter Number" onChange={(e) => update(e)} />
                </label>
              </div>
            </div>
          </div>


          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="date" name="date" className="label is-large">
                  Date:
                <input className="input is-link is-rounded spacing is-large" type="text" name="date" placeholder="Enter Date" onChange={(e) => update(e)} />
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

export default AddMeditation
