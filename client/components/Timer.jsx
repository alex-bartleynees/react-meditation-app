import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`
  }

  const format = (time) => {
    const minutes = Math.floor(time / 60)

    const seconds = time % 60

    return `${minutes}:${padTime(seconds)}`
  }

  const startTimer = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setTimer(0)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  return (
    <div className="columns is-desktop is-vcentered">
      <div className="column m-6 has-text-centered">
        {format(timer)}
      </div>
      <div className="column has-text-centered">
        <button className="button is-success" onClick={startTimer}>{!isActive ? 'Start' : 'Pause'}</button>
      </div>
      <div className="column has-text-centered">
        <button className="button is-success" onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default Timer
