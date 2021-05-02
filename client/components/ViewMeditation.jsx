import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ErrorPage from './ErrorPage'

const ViewMeditation = ({ meditations, match }) => {
  const id = match.params.id

  const history = useHistory()

  const navigateToUsers = () => {
    return history.push('/viewUsers')
  }

  const meditationById = meditations.filter(meditation => meditation.user_id == id)

  const meditationByTime = meditationById.map(ameditation => ameditation.time)

  function totalTime (arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    const totalTime = arr.reduce(reducer) / 60
    const roundNumber = totalTime.toFixed(2)
    return roundNumber
  }

  return (
    <>
      {meditationById.length > 0

        ? <div>
          <div className="column">
            <div className="columns is-centered m-5">
              <ul>
                {meditationById.map(ameditation => {
                  return <li key={ameditation.id} className="has-text-centered m-4">
                    <h2 className="title is-5">
                      {ameditation.meditation_name}
                    </h2>
                    <p className="subtitle"> Time: {ameditation.time} minutes </p>
                    <p className="subtitle">Date: {ameditation.date} </p>
                  </li>
                })}
              </ul>
            </div>

            <div className="columns is-centered m-5">
              <p className="subtitle has-text-centered">Total Time: {totalTime(meditationByTime)} hours </p>
            </div>
          </div>

          <div className="column has-text-centered">
            <div className="field">
              <div className="control">
                <button className="button is-success" onClick={navigateToUsers}>Back</button>
              </div>
            </div>
          </div>
        </div>

        : <ErrorPage />
      }
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    meditations: globalState.meditations
  }
}

export default connect(mapStateToProps)(ViewMeditation)
