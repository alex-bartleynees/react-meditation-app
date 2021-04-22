import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { getUsers } from '../actions/actions'

const ViewMeditation = (props) => {

  const id = props.match.params.id
  

  function totalTime(arr) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let totalTime = arr.reduce(reducer) / 60;
    return totalTime
    }

    

    return (

      <div className="column">
        <div className="columns is-centered m-5">
          <ul>
            {meditation.map(ameditation => {
              return <li key={ameditation.id} className="has-text-centered m-4"> <h2 className="title is-5">
                {ameditation.meditation_name}
              </h2>
                <p className="subtitle"> Time: {ameditation.time} </p>
                <p className="subtitle">Date: {ameditation.date} </p>

              </li>

            })}
          </ul>

        </div>
        Total Time: 
      </div>
    )
  }

  export default connect()(ViewMeditation)
