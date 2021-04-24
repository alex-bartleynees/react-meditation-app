import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


const ViewMeditation = ({meditations, match}) => {

  const id = match.params.id

  const meditationById = meditations.filter(meditation => meditation.user_id == id)
  console.log(meditationById)

  const meditationByTime = meditationById.map(ameditation => ameditation.time)
  console.log(meditationByTime)

  function totalTime(arr) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let totalTime = arr.reduce(reducer) / 60;
    console.log(totalTime)
    return totalTime
    }

    

    return (

      <div className="column">
        <div className="columns is-centered m-5">
          <ul>
            {meditationById.map(ameditation => {
              return <li key={ameditation.id} className="has-text-centered m-4"> <h2 className="title is-5">
                {ameditation.meditation_name}
              </h2>
                <p className="subtitle"> Time: {ameditation.time} </p>
                <p className="subtitle">Date: {ameditation.date} </p>

              </li> })}

             
          </ul>

        </div>
        <div className="columns is-centered m-5">
        <p className="subtitle has-text-centered">Total Time: {totalTime(meditationByTime)} hours </p>
        </div>
      </div>
    )
  }

  const mapStateToProps = (globalState) => {
    return {
      meditations: globalState.meditations
    }
  }
  

  export default connect(mapStateToProps)(ViewMeditation)
