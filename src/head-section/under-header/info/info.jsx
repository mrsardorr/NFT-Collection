import React from 'react'
import "./info.scss"

const info = (props) => {
  return (
    <div className="info">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default info