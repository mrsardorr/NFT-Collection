import React from 'react'
import "./button.scss"

const button = (props) => {
  return (
    <button className='btnOpen'>{props.name}</button>
  )
}

export default button