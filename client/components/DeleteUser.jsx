import React, {useState} from 'react'
import { connect } from 'react-redux'
import { deleteAUser } from '../actions/actions'

const DeleteUser = ({dispatch}) => {

  const [user, setUser] = useState('')

  const update = (e) => {
    setUser(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault() 
    dispatch(deleteAUser(user))

  }

  return (
    <div className="columns m-5">
      <div className="container is-max-widescreen">

        <form onSubmit={(e) => submitForm(e)} >

          <div className="column">
            <div className="field">
              <div className="control">
                <label htmlFor="delete" name="delete" className="label is-large">
                  User to Delete:
    <input className="input is-link is-rounded spacing is-large" type="text" name="delete" placeholder="Enter User Name" onChange={(e) => update(e)} />
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

const mapStateToProps = (globalState) => {
  return {
    users: globalState.users
  }
}


export default connect(mapStateToProps)(DeleteUser)
