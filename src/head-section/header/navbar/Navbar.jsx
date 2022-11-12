import React from 'react'
import "./navbar.scss"
import logo from "../../../assets/header-section/header/navbar/Logo.png"
import Btn from "../../../components/button/button"

const navbar = () => {
  return (
    <nav className='d-flex justify-content-between navbar'>
        <a href="#!"><img src={logo} alt="" /></a>
        <ul className='d-flex align-items-center'>
            <li><a href="#!">Collection</a></li>
            <li><a href="#!">Content</a></li>
            <li><a href="#!">Roadmap</a></li>
            <li><a href="#!">Team</a></li>
            <Btn name="OpenSea"/>
        </ul>
    </nav>
  )
}

export default navbar