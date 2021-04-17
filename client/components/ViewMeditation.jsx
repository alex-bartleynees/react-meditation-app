import React, { useState, useEffect } from 'react'

import { getAllMeditations } from '../api/index'

const ViewMeditation = (props) => {

  const id = props.match.params.id

  const [meditation, setMeditation] = useState([])

  useEffect(() => {
    getAllMeditations()
      .then((res) => {
        setMeditation(res.filter(ameditation => ameditation.user_id == id))
      })
  }, [])
  console.log(meditation)
  return (

    <div className="column">
      <div className="columns is-centered m-5">
        <ul>
        {meditation.map(ameditation => {
          return <li key={ameditation.id} className= "has-text-centered m-4"> <h2 className="title is-5">
           {ameditation.meditation_name} 
           </h2>
          <p className="subtitle"> Time: {ameditation.time} </p>
          <p className="subtitle">Date: {ameditation.date} </p>
          
           </li>
  
        })}
        </ul>
      </div>

    </div>
  )
}

export default ViewMeditation
